/*
  Runic Polish model, variant with Polish suggestion labels (prototype).
  Replace the contents of the model definition file in Keyman Developer with this,
  and keep runic_display_model.ts and runic_display_data.ts next to it.
*/
const source: LexicalModelSource = {
  format: 'custom-1.0',
  sources: ['runic_display_data.ts', 'runic_display_model.ts'],
  rootClass: 'RunicDisplayModel',
};

export default source;
