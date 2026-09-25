import { readFile } from 'node:fs/promises';

const source = new URL('./showcase/', import.meta.url);
export const showcaseFiles = ['spring.capy', 'house.capy', 'NDF_4717.capy'];

export async function showcase(e, record) {
  for (const name of showcaseFiles) await e.provide(name, await readFile(new URL(name, source)));

  await e.workspace('painter');
  await e.load('spring.capy');
  await e.frame(.96, [1000, 912]);
  await record('sketch', [], { file: 'showcase/sketch', check: 'artwork' });

  await e.workspace('illustrator');
  await e.load('house.capy');
  await e.invoke('brush');
  await e.send({ type: 'select_tool_group', group: 'oil' });
  await e.brush(22, 64, '#86c5ea', .92);
  await e.show('color');
  await e.select('house');
  await record('paint', [], { file: 'showcase/paint', check: 'artwork' });

  await e.workspace('photographer');
  await e.load('NDF_4717.capy');
  await e.invoke('deselect');
  await e.select('NDF_4717');
  await e.setColor('#7da13a');
  await e.send({ type: 'effect', action: { op: 'insert', effect: 'curves' } });
  const curves = (await e.read('layerApp.state().layer_properties')).layer;
  await e.send({ type: 'effect', action: { op: 'set', layer: curves, key: 'curve_0', value: { kind: 'curve', value: [[0, 0], [.22, .16], [.72, .84], [1, 1]] } } });
  await e.send({ type: 'effect', action: { op: 'insert', effect: 'vibrance' } });
  await e.show('properties');
  const vibrance = (await e.read('layerApp.state().layer_properties')).layer;
  await e.send({ type: 'effect', action: { op: 'set', layer: vibrance, key: 'vibrance', value: { kind: 'number', value: 35 } } });
  await e.invoke('tonal_select');
  await e.wait(`[...document.querySelectorAll('button[aria-label]')].some(b=>(b.getAttribute('aria-label')||'').startsWith('Highlights'))`);
  await record('photo', [], { file: 'showcase/photo', check: 'artwork' });
  await e.workspace('illustrator');
}
