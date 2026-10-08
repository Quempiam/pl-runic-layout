#!/usr/bin/env python3
"""
Build a Keyman runic-Polish wordlist.tsv from hermitdave/FrequencyWords (2018, Polish).

One command (downloads the list, needs internet):
    python3 build_from_frequencywords.py

Or with a file you already have:
    python3 build_from_frequencywords.py --input pl_full.txt

Useful options:
    --kind full|50k        which list to download (default: full, ~19 MB)
    --min-count 5          drop words seen fewer times (the main size knob)
    --max-words 150000     keep only the N most frequent words after merging
    --extra user_words.txt add your own words (Latin, one per line, optional count)
    --block blocklist.txt  remove words (Latin, one per line)
(user_words.txt and blocklist.txt in the current folder are picked up automatically.)

Edit user_words.txt / blocklist.txt and re-run to "add / remove words".
Needs convert_wordlist.py in the same folder. Python 3.8+, no extra packages.

Data: FrequencyWords by Hermit Dave, from OpenSubtitles2018.
Content licence: CC BY-SA 4.0 (attribution + share-alike), so the generated
wordlist is distributed under the same licence.
"""
import argparse
import os
import re
import sys
import unicodedata
import urllib.request
from collections import Counter, OrderedDict

import convert_wordlist as cw

URL = "https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2018/pl/pl_{kind}.txt"
POLISH_WORD = re.compile(r"^[a-ząćęłńóśźż]+$")   # x, v, q are not in the system
ONE_LETTER_OK = set("aiouwz")                    # the only one-letter Polish words
SOFT_BEFORE_I = re.compile(r"[śćńź]i")           # ś/ć/ń/ź/dź + i is always a spelling error (si/ci/ni/zi/dzi)
STRIP_DIACRITICS = str.maketrans("ąćęłńóśźż", "acelnoszz")
REPEAT = re.compile(r"(.)\1{2,}")                # aaaa, mmmm, ... (subtitle noise)

HEADER = [
    "Runic Polish wordlist for Keyman (columns: word, count, latin forms).",
    "Source: FrequencyWords by Hermit Dave (OpenSubtitles2018), CC BY-SA 4.0 - "
    "this derived list is shared under the same licence.",
    "Rules: runic-polish skill (homophones merge by design: rz = ż, ó = u, ch = h).",
]


def download(kind, dest):
    url = URL.format(kind=kind)
    print(f"Downloading {url}")
    req = urllib.request.Request(url, headers={"User-Agent": "runic-pl-model-builder"})
    with urllib.request.urlopen(req) as r, open(dest, "wb") as f:
        while True:
            chunk = r.read(1 << 20)
            if not chunk:
                break
            f.write(chunk)
    print(f"Saved {dest} ({os.path.getsize(dest) / 1e6:.1f} MB)")


def read_freq(path):
    with open(path, encoding="utf-8-sig") as f:
        for line in f:
            parts = line.split()
            if len(parts) == 2 and parts[1].isdigit():
                yield parts[0], int(parts[1])


def read_word_file(path):
    """Latin word list: 'word' or 'word count' per line; '#' starts a comment."""
    if not path:
        return []
    out = []
    with open(path, encoding="utf-8-sig") as f:
        for line in f:
            line = line.split("#", 1)[0].strip()
            if not line:
                continue
            p = line.split()
            out.append((unicodedata.normalize("NFC", p[0].lower()),
                        int(p[1]) if len(p) > 1 and p[1].isdigit() else None))
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--input", help="local 'word count' file (skips download)")
    ap.add_argument("--kind", default="full", choices=["full", "50k"])
    ap.add_argument("-o", "--output", default="wordlist.tsv")
    ap.add_argument("--min-count", type=int, default=5)
    ap.add_argument("--max-words", type=int, default=0, help="0 = no limit")
    ap.add_argument("--extra", help="your own words (Latin)")
    ap.add_argument("--extra-weight", type=int, default=1000,
                    help="count given to --extra words that have no count (default 1000)")
    ap.add_argument("--block", help="words to remove (Latin)")
    ap.add_argument("--drop", default="drop_english_leftovers.txt",
                    help="extra blocklist file (default: drop_english_leftovers.txt if present)")
    ap.add_argument("--accent-ratio", type=float, default=20,
                    help="drop a word WITHOUT any Polish letters (sie, zlote, rozwiaz) when its accented twin "
                         "(się, złote, rozwiąż) is at least this many times more frequent; 0 = off (default 20)")
    ap.add_argument("--keep", help="valid words exempt from that filter (default: keep_words.txt if present)")
    ap.add_argument("--exceptions", help="TSV latin<TAB>runic overrides (see convert_wordlist.py)")
    ap.add_argument("--rejects", default="rejected_sample.txt")
    a = ap.parse_args()

    path = a.input
    if not path:
        path = f"pl_{a.kind}.txt"
        if not os.path.exists(path):
            download(a.kind, path)
    ex = cw.load_exceptions(a.exceptions)

    extra_path = a.extra or ("user_words.txt" if os.path.exists("user_words.txt") else None)
    block_path = a.block or ("blocklist.txt" if os.path.exists("blocklist.txt") else None)
    block = {w for w, _ in read_word_file(block_path)}
    if a.drop and os.path.exists(a.drop):
        block |= {w for w, _ in read_word_file(a.drop)}

    keep_path = a.keep or ("keep_words.txt" if os.path.exists("keep_words.txt") else None)
    keep = {w for w, _ in read_word_file(keep_path)}

    corpus = list(read_freq(path))
    # best count of any accented spelling, keyed by its accent-free form
    accented = {}
    for raw, count in corpus:
        w = unicodedata.normalize("NFC", raw.lower())
        if POLISH_WORD.match(w):
            plain = w.translate(STRIP_DIACRITICS)
            if plain != w and count > accented.get(plain, 0):
                accented[plain] = count

    stats, samples = Counter(), {}

    def reject(reason, word):
        stats[reason] += 1
        samples.setdefault(reason, [])
        if len(samples[reason]) < 200:
            samples[reason].append(word)

    merged = OrderedDict()   # runic -> [count, [latin forms]]

    def add(word, count):
        runic, unknown = cw.to_runic(word, ex)
        if unknown:
            reject("unsupported letters", word); return
        if runic in merged:
            m = merged[runic]
            m[0] += count
            if word not in m[1] and len(m[1]) < 3:
                m[1].append(word)
        else:
            merged[runic] = [count, [word]]

    total = 0
    for raw, count in corpus:
        total += 1
        w = unicodedata.normalize("NFC", raw.lower())
        if not POLISH_WORD.match(w):
            reject("non-Polish characters", raw); continue
        if len(w) == 1 and w not in ONE_LETTER_OK:
            reject("one-letter junk", raw); continue
        if REPEAT.search(w):
            reject("repeated letters", raw); continue
        if SOFT_BEFORE_I.search(w):
            reject("soft consonant + i (spelling error)", raw); continue
        if (a.accent_ratio and w == w.translate(STRIP_DIACRITICS) and w not in keep
                and accented.get(w, 0) >= a.accent_ratio * count):
            reject("missing Polish diacritics", raw); continue
        if w in block:
            reject("blocklist", raw); continue
        if count < a.min_count:
            stats["below min-count"] += 1; continue
        add(w, count)

    extras = 0
    for w, c in read_word_file(extra_path):
        if not POLISH_WORD.match(w):
            reject("extra: non-Polish characters", w); continue
        add(w, c if c is not None else a.extra_weight)
        extras += 1

    rows = sorted(merged.items(), key=lambda kv: -kv[1][0])
    if a.max_words:
        rows = rows[:a.max_words]

    with open(a.output, "w", encoding="utf-8", newline="\n") as f:
        for h in HEADER:
            f.write("# " + h + "\n")
        for runic, (count, latin) in rows:
            f.write(f"{runic}\t{count}\t{'/'.join(latin)}\n")

    with open(a.rejects, "w", encoding="utf-8") as f:
        for reason, words in samples.items():
            f.write(f"## {reason} (first {len(words)} of {stats[reason]})\n")
            f.write(" ".join(words) + "\n\n")

    print(f"Read {total} entries from {path}")
    for reason, n in stats.most_common():
        print(f"  rejected: {n:>9}  {reason}")
    print(f"Merged runic words: {len(merged)} (+{extras} extra); written: {len(rows)} -> {a.output}")
    if rows:
        print(f"Size: {os.path.getsize(a.output) / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
