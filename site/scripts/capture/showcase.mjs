import { readFile } from 'node:fs/promises';

const source = new URL('./showcase/', import.meta.url);
const command = id => `layerApp.state().commands.find(c=>c.id===${JSON.stringify(id)})`;
const analysed = `layerApp.state().histogram.status==='Exact'&&!String(layerApp.state().layer_properties?.description??'').includes('Updating')`;
const thumbnailsDrawn = `[...document.querySelectorAll('#layer-rows .layer-thumbnail canvas')].filter(c=>c.checkVisibility()).every(c=>{const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;for(let i=3;i<d.length;i+=4)if(d[i])return true;return false})`;

export default async function showcase({ e, record }) {
  const restoreLayout = async () => {
    if (await e.read(`${command('reset_layout')}?.enabled`)) {
      await e.invoke('reset_layout');
      await e.wait("!!document.querySelector('.workspace-form[open] .suggested-action')");
      await e.click('.workspace-form[open] .suggested-action');
      await e.wait("!document.querySelector('.workspace-form[open]') && !JSON.parse(layerApp.app.workspace_view()).busy");
    }
    if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
    await e.wait('!layerApp.state().workspace.zen_mode');
  };
  const openIn = async (workspace, name) => {
    await e.workspace(workspace);
    await restoreLayout();
    await e.provide(name, await readFile(new URL(name, source)));
    await e.open(name);
  };
  const effect = async (name, key, value) => {
    const count = await e.read('layerApp.state().layers.length');
    await e.send({ type: 'effect', action: { op: 'insert', effect: name } });
    await e.wait(`layerApp.state().layers.length===${count + 1} && layerApp.state().layer_tools.editing_layer.adjustment_effect`);
    const id = await e.read('Number(layerApp.state().layer_properties.layer)');
    await e.send({ type: 'effect', action: { op: 'set', layer: id, key, value } });
  };

  await openIn('painter', 'spring.png');
  await e.frame(.96, [1000, 912]);
  await e.setColor('#000000');
  await record('showcase/sketch');

  await openIn('illustrator', 'house.png');
  await e.invoke('brush');
  await e.send({ type: 'select_brush_set', group: 'oil' });
  await e.brush(22, 64, '#86c5ea', .92);
  await e.show('color');
  await e.select('house');
  await e.visible('house', false);
  await e.visible('house', true);
  await record('showcase/paint', [], { setup: () => e.b.until(thumbnailsDrawn, 120000) });

  await openIn('photographer', 'NDF_4717.jpg');
  await e.select('NDF_4717');
  await e.setColor('#7da13a');
  await effect('curves', 'rgb', { kind: 'curve', value: [[0, 0], [.22, .16], [.72, .84], [1, 1]] });
  await effect('vibrance', 'vibrance', { kind: 'number', value: 35 });
  await e.show('properties');
  await e.invoke('tonal_select');
  await e.wait(`[...document.querySelectorAll('button[aria-label]')].some(b=>(b.getAttribute('aria-label')||'').startsWith('Highlights'))`);
  await record('showcase/photo', [], { setup: async () => { await e.wait(analysed); await e.b.until(thumbnailsDrawn, 120000); } });
  await e.workspace('illustrator');
}
