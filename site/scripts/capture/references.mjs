import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PNG } from 'pngjs';
import { colors } from './illustration.mjs';

export async function references(e, record, directory, { painted = true } = {}) {
  const { b } = e;
  const stack = { selector: '#layer-rows' };
  const tool = { selector: '.tool-settings-control' };
  const presets = { selector: '.tool-subtools' };
  const escape = async () => {
    await b.call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await b.call('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await b.settle();
  };
  const press = label => b.evaluate(`[...document.querySelectorAll('dialog[open] button')].find(b=>b.textContent===${JSON.stringify(label)}).click();void 0`);
  const field = label => ({ selector: `dialog[open] label:has(> select[aria-label="${label}"])` });
  for (const name of ['01-sketch.capy', '02-line-art.capy', '04-finished.capy', 'abstract-study.png']) await e.provide(name, await readFile(`${directory}/${name}`));

  await e.show('palettes');
  for (const color of Object.values(colors)) {
    const count = await e.read(`document.querySelectorAll('.palette-swatches .palette-tile:not(.palette-add)').length`);
    await e.setColor(color); await e.click('.palette-swatches .palette-add');
    await e.wait(`document.querySelectorAll('.palette-swatches .palette-tile:not(.palette-add)').length>${count}`);
  }
  if (painted) await e.wait(`document.querySelectorAll('.palette-history .palette-recent').length>=5`);
  await record('painting-palettes', [{ selector: '.palette-history' }, { selector: '.palette-swatches' }, { selector: '.palette-selector' }]);
  await e.show('color');

  await e.load('04-finished.capy');
  await e.workspace('painter');
  await record('workspace', [{ selector: '.workspace-switcher' }, { selector: ['Brush', 'Sculpt', 'Eraser', 'Layers panel', 'Brush color'].map(label => `#header .header-tool[aria-label="${label}"]`).join(), union: true }, { selector: '.dock-group.tool-strip' }]);
  await e.workspace('illustrator');

  await e.select('Ribbon');
  await record('layers-basics', [stack, { selector: '.layer-row.selected [aria-label="Hide layer"]' }, { selector: '.layer-footer' }]);
  await e.select('Ribbon', true); await e.brush(1, 20, '#ffffff');
  await record('layers-masks', [{ selector: '.layer-thumbnail.editing-target' }, stack, { selector: '.layer-flags' }]);
  await e.select('Ribbon shading');
  await e.layer({ op: 'blend', id: await e.active(), value: 1 });
  await record('layers-groups', [stack, { selector: '.layer-header select' }, { selector: '.layer-footer [aria-label="New group"]' }]);

  await e.load('04-finished.capy'); await e.select('Block shading');
  await e.invoke('eyedropper');
  await record('painting-color', [{ selector: '.color-wheel' }, { selector: '.color-panel [data-color-slot], .color-panel [data-quick-color]', union: true }, { selector: '[data-command="eyedropper"]' }]);

  await e.select('Disc'); await e.invoke('ellipse_select');
  await e.stroke([[164, 158], [392, 385], [620, 612]], { pressure: .6 });
  await e.wait('layerApp.state().layer_tools.has_selection');
  await record('tools-selections', [presets, tool, { selector: '#canvas', documentRect: [150, 144, 484, 482] }]);
  await e.invoke('quick_mask');
  await e.brush(4, 70, colors.ink);
  await e.draw('M300 640 C360 700 420 760 470 900', { pressure: .8 });
  await e.show('properties');
  await record('selections-quick-mask', [{ selector: '.layer-row.selected' }, { selector: '.properties-panel' }, { selector: '#canvas', documentRect: [150, 144, 484, 800] }]);
  await e.invoke('return_to_artwork'); await e.invoke('deselect');
  await e.show('navigator');

  await e.select('Ribbon'); await e.invoke('tonal_select');
  await b.evaluate(`[...document.querySelectorAll('.tonal-tones button')].find(b=>(b.getAttribute('aria-label')||'').startsWith('Midtones')).click();void 0`);
  await e.wait('layerApp.state().layer_tools.has_selection');
  await record('selections-tonal-range', [{ selector: '.tonal-tones' }, { selector: '.tonal-numeric-row', union: true }, { selector: '#canvas', documentRect: [0, 0, 1200, 1200] }]);
  await e.invoke('deselect');

  await e.invoke('auto_select');
  await e.select('Line art');
  await e.lasso('M814 812 L1090 812 L1090 1068 L814 1068 Z');
  await e.invoke('scale_rotate');
  await record('tools-transforms', [tool, { selector: '#canvas', documentRect: [785, 765, 335, 325] }, { selector: '.layer-row.selected' }]);
  await e.invoke('cancel_transform'); await e.invoke('deselect');

  await e.load('04-finished.capy');
  await e.load('01-sketch.capy', { keep: true });
  await e.load('02-line-art.capy', { keep: true });
  await e.selectDrawing('04-finished.capy');
  await e.click('[data-menu="file"] > summary');
  await record('tools-files', [{ selector: '[data-menu="file"] > summary' }, { selector: '.drawing-tabs' }, { selector: '[data-menu="file"] button', labels: ['Open…', 'Import Image as Layer…', 'Save', 'Save As…'], union: true }]);
  await e.click('[data-menu="file"] > summary');
  await e.closeOtherDrawings();

  await e.exportDialog();
  await record('output-export', [field('Destination'), { selector: ['Format', 'Output profile', 'Bit depth'].map(label => field(label).selector).join(), union: true }, field('Transparency')]);
  await press('Cancel'); await e.wait("!document.querySelector('dialog[open]')");

  await e.invoke('new_document');
  await e.wait('!!document.querySelector(".document-dialog select")');
  await b.evaluate(`(()=>{const preset=document.querySelector('dialog[open] select[aria-label="Preset"]');preset.value=[...preset.options].find(o=>o.textContent==='Photo editing').value;preset.dispatchEvent(new Event('change',{bubbles:true}));})()`);
  await b.settle();
  await record('color-management', [field('Preset'), { selector: ['Color space', 'Bit depth'].map(label => field(label).selector).join(), union: true }, { selector: 'dialog[open] button', text: ['Create'] }]);
  await press('Cancel'); await e.wait("!document.querySelector('dialog[open]')");

  await e.newDocument(1200, 1200);
  await e.layer({ op: 'rename', id: await e.active(), name: 'Gradient study' });
  await e.setColor(colors.ribbon);
  await e.send({ type: 'color', action: { op: 'select', slot: 'background' } }); await e.setColor(colors.disc);
  await e.send({ type: 'color', action: { op: 'select', slot: 'foreground' } });
  await e.invoke('gradient'); await e.stroke([[240, 220], [960, 980]]);
  await record('tools-gradients', [{ selector: '.brushes-panel' }, { selector: '.color-panel' }, stack]);
  await e.add('Shapes'); await e.brush(1, 14, colors.cream);
  await e.layer({ op: 'tool', tool: { figure: { shape: 'rectangle', paint: 'outline' } } });
  await e.stroke([[250, 300], [570, 300], [570, 600]]);
  await e.layer({ op: 'tool', tool: { figure: { shape: 'ellipse', paint: 'both' } } });
  await e.stroke([[650, 470], [970, 470], [970, 790]]);
  await record('tools-figures', [{ selector: '.brushes-panel' }, tool, { selector: '.color-panel' }]);
  await e.newDocument(1200, 1200); await e.brush(1, 8, colors.ink);
  await e.layer({ op: 'rename', id: await e.active(), name: 'Ruled lines' });
  await e.invoke('ruler'); await e.stroke([[270, 820], [540, 600], [940, 280]]);
  await e.brush(1, 8, colors.ink);
  for (let n = 0; n < 4; n++) await e.stroke([[310 + n * 30, 790 + n * 30], [570 + n * 30, 580 + n * 30], [885 + n * 30, 327 + n * 30]]);
  await e.invoke('ruler');
  await record('tools-rulers', [{ selector: '.brushes-panel' }, { selector: '#canvas', documentRect: [220, 230, 790, 690] }, tool]);

  await e.workspace('photographer');
  await e.open('abstract-study.png');
  const imported = PNG.sync.read(await e.save('_capture-import-check.png'));
  assert.equal(imported.width, 1200); assert.equal(imported.height, 1200);
  let colored = 0;
  for (let i = 0; i < imported.data.length; i += 4) if (imported.data[i + 3] > 200 && Math.max(...imported.data.subarray(i, i + 3)) - Math.min(...imported.data.subarray(i, i + 3)) > 20) colored++;
  assert.ok(colored > 100000, 'The opened image retains the colored abstract artwork pixels');
  await e.select('abstract-study'); await e.invoke('move');
  await e.send({ type: 'effect', action: { op: 'insert', effect: 'hue_saturation' } });
  await e.show('properties');
  const properties = await e.read('layerApp.state().layer_properties');
  assert.ok(properties.controls.some(control => control.key === 'hue'), 'Hue / Saturation exposes Hue');
  await e.send({ type: 'effect', action: { op: 'set', layer: properties.layer, key: 'hue', value: { kind: 'number', value: 18 } } });
  await record('filters-image-editing', [{ selector: '.workspace-switcher' }, stack, { selector: '.effect-properties' }]);
  await e.show('adjustments');
  await record('filters-overview', [{ selector: '.adjustments-panel' }, stack, { selector: '.dock-tab[data-panel="properties"]' }]);
  await e.show('properties');
  await e.save('image-editing.capy', directory); await e.save('image-editing.png', directory);
  const before = await e.read('layerApp.state().layers.map(row=>row.label)');
  await e.provide('image-editing.capy', await readFile(`${directory}/image-editing.capy`));
  await e.load('04-finished.capy'); await e.load('image-editing.capy');
  assert.deepEqual(await e.read('layerApp.state().layers.map(row=>row.label)'), before, 'Project reopen retains the photo and its adjustment');
  await e.workspace('illustrator'); await e.load('04-finished.capy');

  await e.select('Ribbon shading'); await e.brush(4, 55, colors.ink);
  await e.click('[data-menu="window"] > summary');
  await record('workspace-customization', [{ selector: '.dock-group:has(.dock-tab[data-panel="navigator"]) .dock-tabs' }, { selector: '.commands-panel' }, { selector: '[role="menu"]' }]);
  await e.click('[data-menu="window"] > summary');
  await record('advanced-custom-brushes', [{ selector: '.workspace-switcher' }, tool, { selector: '.workspace-form' }], {
    setup: async () => { await e.send({ type: 'workspace_manager', command: { type: 'reset_brushes' } }); await e.wait('!!document.querySelector(".workspace-form[open]")'); },
    teardown: escape,
  });
  await record('workspace-management', [{ selector: '.workspace-list' }, { selector: '.workspace-row[data-id="builtin:workspace:illustrator"]' }, { selector: '.workspace-manager footer' }], {
    setup: async () => { await e.send({ type: 'workspace_manager', command: { type: 'manage' } }); await e.wait('!!document.querySelector(".workspace-manager[open]")'); await e.click('.workspace-row[data-id="builtin:workspace:illustrator"] .workspace-choice'); },
    teardown: escape,
  });
  await e.invoke('settings');
  await e.click('[data-settings-page="input"]');
  await record('advanced-input', [{ selector: '.preferences-navigation' }, { selector: '.preferences-page[data-page="input"]' }, { selector: '[data-settings-page="shortcuts"]' }]);
  await e.click('#close-settings');
}
