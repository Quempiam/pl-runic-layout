/*
  Runic Polish lexical model.
*/

const source: LexicalModelSource = {
  format: 'trie-1.0',
  sources: ['wordlist.tsv'],

  // The default UAX #29 word breaker treats ⫯ (U+2AEF, ż / rz) as a math symbol,
  // not a letter, so every word containing ż or rz would be split in two.
  // This breaker keeps all runes of the system together:
  //   U+16A0-16EA  runic letters
  //   U+16EF       ᛯ (dź; Unicode category Nl)
  //   U+041A       К (Cyrillic, ć)
  //   U+2AEF       ⫯ (ż / rz)
  wordBreaker: {
    use: function (text: string): Span[] {
      const spans: Span[] = [];
      const re = /[\u16A0-\u16EA\u16EF\u041A\u2AEF]+/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(text)) !== null) {
        spans.push({
          start: m.index,
          end: m.index + m[0].length,
          length: m[0].length,
          text: m[0],
        });
      }
      return spans;
    },
  },

  // Typo-tolerant keys: the same function runs on the wordlist and on typed input,
  // so a typed ᚼ (U+16BC) still matches ᛡ (ń), and Latin K/k or Cyrillic к still match К (ć).
  searchTermToKey: function (term: string): string {
    return term
      .normalize('NFKD')
      .replace(/\u16BC/g, '\u16E1')
      .replace(/[KkкК]/g, '\u041A');
  },
};

export default source;
