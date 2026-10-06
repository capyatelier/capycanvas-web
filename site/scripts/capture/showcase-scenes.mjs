export const artwork = new URL('./showcase/', import.meta.url);
export const reference = { width: 1920, height: 1080 };

const rgba = hex => [...hex.match(/[\da-f]{2}/gi).map(byte => parseInt(byte, 16) / 255), 1];
const action = action => ({ type: 'action', action });
const invoke = command => action({ type: 'invoke', command });
const color = hex => action({ type: 'set_color', rgba: rgba(hex) });

export const scenes = [
  {
    id: 'sketch', workspace: 'painter', source: 'spring.png',
    steps: [
      { type: 'frame', zoom: .96, focus: [1000, 912] },
      color('#000000'),
    ],
  },
  {
    id: 'paint', workspace: 'illustrator', source: 'house.png',
    steps: [
      invoke('brush'),
      action({ type: 'select_brush_set', group: 'oil' }),
      action({ type: 'select_brush', id: 22 }),
      action({ type: 'set_brush_size', value: 64 }),
      action({ type: 'set_brush_opacity', value: .92 }),
      color('#86c5ea'),
      { type: 'show_panel', panel: 'color' },
      { type: 'select_layer', name: 'house' },
      { type: 'layer_visibility', name: 'house', visible: false },
      { type: 'layer_visibility', name: 'house', visible: true },
    ],
  },
  {
    id: 'photo', workspace: 'photographer', source: 'NDF_4717.jpg',
    steps: [
      { type: 'select_layer', name: 'NDF_4717' },
      color('#7da13a'),
      { type: 'effect', effect: 'curves', parameters: { rgb: { kind: 'curve', value: [[0, 0], [.22, .16], [.72, .84], [1, 1]] } } },
      { type: 'effect', effect: 'vibrance', parameters: { vibrance: { kind: 'number', value: 35 } } },
      { type: 'show_panel', panel: 'properties' },
      invoke('tonal_select'),
      { type: 'wait_histogram' },
    ],
  },
];
