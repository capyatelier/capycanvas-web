// Minimal, explicit source corrections needed by the recorded capture baseline.
// Applied only to the isolated build; never to APP_REPO. Remove an entry once the
// selected product revision includes its correction. Provenance records each use.
export const compatibility = [{
  file: 'crates/layer-render-wgpu/src/contact.wgsl',
  reason: 'WGSL requires parentheses between multiplication and bitwise XOR (Chrome 152).',
  before: 'var h = bitcast<u32>(cell.x) * 1597334677u ^ bitcast<u32>(cell.y) * 3812015801u;',
  after: 'var h = (bitcast<u32>(cell.x) * 1597334677u) ^ (bitcast<u32>(cell.y) * 3812015801u);',
}];
