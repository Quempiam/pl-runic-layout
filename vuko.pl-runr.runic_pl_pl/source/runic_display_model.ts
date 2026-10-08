/*
  Runic Polish model with POLISH suggestion labels and RUNIC insertion.

  You type runes; the suggestion bar shows the Polish word (e.g. "dźwięk");
  tapping it inserts the runic spelling (ᛯᛝᛖᛜᚲ).

  Compiled together with runic_display_data.ts (see runic_pl_display.model.ts).
  Not type-checked at compile time (Keyman only transpiles it), so keep it plain.
*/

// ---- two switches to flip if the first on-device test misbehaves ----------------
// 'post': suggestion.transform is relative to the context AFTER the keystroke
//         (this is what I believe Keyman expects).
// 'pre' : relative to the context BEFORE the keystroke.
// Symptom of the wrong choice: one stray rune left behind, or one rune too many deleted.
const SUGGESTION_RELATIVE_TO: string = 'post';
// Keyman should append punctuation.insertAfterWord (a space) itself.
// Symptom of the wrong choice: no space after a tapped suggestion, or two spaces.
const ADD_SPACE_MYSELF: boolean = false;
// ---------------------------------------------------------------------------------

const MAX_SUGGESTIONS: number = 4;
// Runes of the system: runic letters, ᛯ (U+16EF), Cyrillic К/к (ć), ⫯ (ż/rz)
const RUNE_TAIL: RegExp = /[\u16A0-\u16EA\u16EF\u041A\u043A\u2AEF]+$/;

// Same typo-tolerant normalisation as the trie model: ᚼ->ᛡ, к/K->К, ᚣ->ᚤ
function runicKey(term: string): string {
  return term
    .normalize('NFKD')
    .replace(/\u16BC/g, '\u16E1')
    .replace(/\u16A3/g, '\u16A4')
    .replace(/[KkкК]/g, '\u041A');
}

function codePointLength(s: string): number {
  let n = 0;
  for (const _ of s) { n++; }
  return n;
}

class RunicDisplayModel implements LexicalModel {
  private keys: string[] = [];     // normalised runes, sorted
  private runes: string[] = [];    // what gets inserted
  private counts: number[] = [];
  private labels: string[] = [];   // what gets displayed (Polish)

  punctuation: LexicalModelPunctuation = {
    quotesForKeepSuggestion: { open: '«', close: '»' },
    insertAfterWord: ' ',
  };

  constructor() {
    const rows = RUNIC_DATA.split('\n');
    const tmp: { k: string; r: string; c: number; l: string }[] = [];
    for (const row of rows) {
      const p = row.split('\t');
      if (p.length < 3) { continue; }
      tmp.push({ k: runicKey(p[0]), r: p[0], c: parseInt(p[1], 10) || 0, l: p[2] });
    }
    tmp.sort((a, b) => (a.k < b.k ? -1 : a.k > b.k ? 1 : 0));
    for (const t of tmp) {
      this.keys.push(t.k); this.runes.push(t.r); this.counts.push(t.c); this.labels.push(t.l);
    }
  }

  configure(capabilities: Capabilities): Configuration {
    return {
      leftContextCodePoints: Math.min(capabilities.maxLeftContextCodePoints || 64, 64),
      rightContextCodePoints: 0,
    };
  }

  // The (runic) word that ends at the caret.
  wordbreak(context: Context): string {
    const m = context.left.match(RUNE_TAIL);
    return m ? m[0] : '';
  }

  predict(transform: Transform, context: Context): Distribution<Suggestion> {
    const partialBefore = this.wordbreak(context);

    // Context as it looks after the keystroke has been applied.
    const dl = transform.deleteLeft || 0;
    const chars = Array.from(context.left);
    const leftAfter = chars.slice(0, Math.max(0, chars.length - dl)).join('') + (transform.insert || '');
    const m = leftAfter.match(RUNE_TAIL);
    const partialAfter = m ? m[0] : '';
    if (partialAfter.length === 0) { return []; }   // space / ｡ typed, or nothing to complete

    const prefix = runicKey(partialAfter);

    // lower bound by binary search
    let lo = 0, hi = this.keys.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (this.keys[mid] < prefix) { lo = mid + 1; } else { hi = mid; }
    }

    // best MAX_SUGGESTIONS by count among all keys starting with the prefix
    const best: number[] = [];
    for (let i = lo; i < this.keys.length && this.keys[i].startsWith(prefix); i++) {
      if (best.length < MAX_SUGGESTIONS || this.counts[i] > this.counts[best[best.length - 1]]) {
        let j = best.length;
        best.push(i);
        while (j > 0 && this.counts[best[j - 1]] < this.counts[i]) { best[j] = best[j - 1]; j--; }
        best[j] = i;
        if (best.length > MAX_SUGGESTIONS) { best.pop(); }
      }
    }

    const del = codePointLength(SUGGESTION_RELATIVE_TO === 'pre' ? partialBefore : partialAfter);
    const total = best.reduce((s, i) => s + this.counts[i], 0) || 1;

    return best.map((i) => ({
      sample: {
        transform: {
          insert: this.runes[i] + (ADD_SPACE_MYSELF ? ' ' : ''),
          deleteLeft: del,
        },
        displayAs: this.labels[i],          // Polish on the bar
      } as Suggestion,
      p: this.counts[i] / total,
    }));
  }
}
