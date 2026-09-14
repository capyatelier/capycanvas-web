import assert from 'node:assert/strict';
import { PNG } from 'pngjs';
import { shapes, colors } from './illustration.mjs';

export async function references(e, record, directory) {
  const { b } = e;
  const stack = { selector: '#layer-rows' };
  const tool = { selector: '.tool-settings-control' };
  const presets = { selector: '.tool-subtools' };
  const color = { selector: '.color-panel' };
  const escape = async () => {
    await b.call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await b.call('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await b.settle();
  };
  await e.load('04-finished.capy'); await e.select('Ribbon');
  await record('layers-basics', [stack, { selector: '.layer-row.selected [aria-label="Hide layer"]' }, { selector: '.layer-footer' }]);
  await e.select('Ribbon', true); await e.brush(1, 20, '#ffffff');
  await record('layers-masks', [{ selector: '.layer-thumbnail.editing-target' }, stack, { selector: '.layer-flags' }]);
  await e.select('Ribbon shading');
  await e.layer({ op: 'blend', id: await e.active(), value: 1 });
  await record('layers-groups', [stack, { selector: '.layer-header select' }, { selector: '.layer-footer [aria-label="New group"]' }]);
  await e.load('04-finished.capy'); await e.select('Block shading');
  await e.invoke('eyedropper');
  await record('painting-color', [{ selector: '.color-wheel' }, { selector: '[data-color-slot]', union: true }, { selector: '[data-command="eyedropper"]' }]);
  await e.select('Ribbon'); await e.invoke('auto_select');
  await e.lasso(shapes.ribbon); await e.invoke('auto_select');
  await record('tools-selections', [{ selector: '.brushes-panel' }, tool, { selector: '.layer-row.selected' }]);
  await e.invoke('deselect');
  await e.select('Line art');
  await e.lasso('M814 812 L1090 812 L1090 1068 L814 1068 Z');
  await e.invoke('scale_rotate');
  await record('tools-transforms', [tool, { selector: '#canvas', documentRect: [785, 765, 335, 325] }, { selector: '.layer-row.selected' }]);
  await e.invoke('cancel_transform'); await e.invoke('deselect');

  await e.newDocument(1200, 1200);
  await e.layer({ op: 'rename', id: await e.active(), name: 'Gradient study' });
  await e.setColor(colors.ribbon);
  await e.send({ type: 'color', action: { op: 'select', slot: 'background' } }); await e.setColor(colors.disc);
  await e.send({ type: 'color', action: { op: 'select', slot: 'foreground' } });
  await e.invoke('gradient'); await e.stroke([[240, 220], [960, 980]]);
  await record('tools-gradients', [{ selector: '.brushes-panel' }, color, stack]);
  await e.add('Shapes'); await e.brush(1, 14, colors.cream);
  await e.layer({ op: 'tool', tool: { figure: { shape: 'rectangle', paint: 'outline' } } });
  await e.stroke([[250, 300], [570, 300], [570, 600]]);
  await e.layer({ op: 'tool', tool: { figure: { shape: 'ellipse', paint: 'both' } } });
  await e.stroke([[650, 470], [970, 470], [970, 790]]);
  await record('tools-figures', [{ selector: '.brushes-panel' }, tool, color]);
  await e.newDocument(1200, 1200); await e.brush(1, 8, colors.ink);
  await e.layer({ op: 'rename', id: await e.active(), name: 'Ruled lines' });
  await e.invoke('ruler'); await e.stroke([[270, 820], [540, 600], [940, 280]]);
  await e.brush(1, 8, colors.ink);
  for (let n = 0; n < 4; n++) await e.stroke([[310 + n * 30, 790 + n * 30], [570 + n * 30, 580 + n * 30], [885 + n * 30, 327 + n * 30]]);
  await e.invoke('ruler');
  await record('tools-rulers', [{ selector: '.brushes-panel' }, { selector: '#canvas', documentRect: [220, 230, 790, 690] }, tool]);

  await e.workspace('photographer'); await e.newDocument(1200, 1200);
  const root = await b.call('DOM.getDocument');
  const input = await b.call('DOM.querySelector', { nodeId: root.root.nodeId, selector: '.layers-panel input[type="file"]' });
  assert.ok(input.nodeId, 'Actual image-import file input exists');
  await b.call('DOM.setFileInputFiles', { nodeId: input.nodeId, files: [`${directory}/abstract-study.png`] });
  await e.wait('layerApp.state().layers.some(row=>row.label==="abstract-study.png")');
  await e.select('abstract-study.png');
  const imported = PNG.sync.read(await e.save('_capture-import-check.png'));
  assert.equal(imported.width, 1200); assert.equal(imported.height, 1200);
  let colored = 0;
  for (let i = 0; i < imported.data.length; i += 4) if (imported.data[i + 3] > 200 && Math.max(...imported.data.subarray(i, i + 3)) - Math.min(...imported.data.subarray(i, i + 3)) > 20) colored++;
  assert.ok(colored > 100000, 'Actual browser image import retains the colored abstract artwork pixels');
  await e.send({ type: 'effect', action: { op: 'insert', effect: 'hue_saturation' } });
  await e.show('properties');
  const properties = await e.read('layerApp.state().layer_properties');
  const hue = properties.controls.find(control => control.key === 'hue');
  assert.ok(hue, 'Hue / Saturation exposes Hue');
  await e.send({ type: 'effect', action: { op: 'set', layer: properties.layer, key: 'hue', value: { kind: 'number', value: 18 } } });
  await record('filters-image-editing', [{ selector: '.workspace-switcher' }, stack, { selector: '.effect-properties' }]);
  await e.show('adjustments');
  await record('filters-overview', [{ selector: '.adjustments-panel' }, stack, { selector: '.dock-tab[data-panel="properties"]' }]);
  await e.show('properties');
  await e.save('image-editing.capy', directory); await e.save('image-editing.png', directory);
  const before = await e.read('layerApp.state().layers.map(row=>row.label)');
  await e.load('04-finished.capy'); await e.load('image-editing.capy');
  assert.deepEqual(await e.read('layerApp.state().layers.map(row=>row.label)'), before, 'Project reopen retains imported image and effect');
  await e.workspace('illustrator'); await e.load('04-finished.capy');
  await e.click('[data-menu="file"] > summary');
  await record('tools-files', [{ selector: '[data-menu="file"] > summary' }, { selector: '[data-menu="file"] button', labels: ['Save', 'Save As…'], union: true }, { selector: '[data-menu="file"] button', labels: ['Export PNG…'] }]);
  await e.click('[data-menu="file"] > summary');

  await e.select('Ribbon shading'); await e.brush(4, 55, colors.ink);
  await e.click('[data-menu="window"] > summary');
  await record('workspace-customization', [{ selector: '.dock-tabs' }, { selector: '.commands-panel' }, { selector: '[role="menu"]' }]);
  await e.click('[data-menu="window"] > summary');
  await record('advanced-custom-brushes', [{ selector: '.workspace-switcher' }, tool, { selector: '.workspace-form' }], false, {
    setup: async () => { await e.send({ type: 'workspace_manager', command: { type: 'reset_brushes' } }); await e.wait('!!document.querySelector(".workspace-form[open]")'); },
    teardown: escape,
  });
  await record('workspace-management', [{ selector: '.workspace-list' }, { selector: '.workspace-row[data-id="builtin:workspace:illustrator"]' }, { selector: '.workspace-manager footer' }], false, {
    setup: async () => { await e.send({ type: 'workspace_manager', command: { type: 'manage' } }); await e.wait('!!document.querySelector(".workspace-manager[open]")'); await e.click('.workspace-row[data-id="builtin:workspace:illustrator"] .workspace-choice'); },
    teardown: escape,
  });
  await e.invoke('settings');
  await e.click('[data-settings-page="input"]');
  await record('advanced-input', [{ selector: '.preferences-navigation' }, { selector: '.preferences-page[data-page="input"]' }, { selector: '[data-settings-page="shortcuts"]' }]);
  await e.click('#close-settings');
}
