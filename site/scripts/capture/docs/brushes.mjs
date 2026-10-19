import assert from 'node:assert/strict';
import { drawer, group, helpers } from './drawing.mjs';

const json = value => JSON.stringify(value);
const toolOptions = '[data-toolbar-component=tool_options]';
const popover = '.toolbar-editor-popover:popover-open';
const sizePreview = '.toolbar-brush-preview:popover-open';
const form = 'dialog.workspace-form[open]';

export default async function brushes({ e, b, shoot }) {
  const { escape, point, press, workspace, restoreLayout, fit, refit, drawerSettled, openDrawer, closeDrawer } = helpers(e, b);
  const setting = id => e.read(`layerApp.state().tool_settings.find(f=>f.id===${json(id)})?.value`);
  const closePopover = async selector => {
    if (await e.read(`!!document.querySelector(${json(selector)})`)) await escape();
    await b.evaluate(`document.querySelector(${json(selector)})?.hidePopover();void 0`);
    await e.wait(`!document.querySelector(${json(selector)})`);
  };
  const barRect = ({ limit = Infinity, cover }) => e.read(`(()=>{
    const bar=document.querySelector('${toolOptions}'),box=bar.getBoundingClientRect(),extra=${json(cover ?? null)}&&document.querySelector(${json(cover ?? '')}).getBoundingClientRect();
    const fields=[...bar.querySelectorAll('[data-toolbar-field], [data-toolbar-setting]')].filter(n=>n.checkVisibility()&&!n.parentElement.closest('[data-toolbar-field], [data-toolbar-setting]'));
    const edges=fields.map(n=>n.getBoundingClientRect().right).sort((a,b)=>a-b);
    const right=extra?(edges.find(x=>x>=extra.right)??extra.right):Math.max(...edges.filter(x=>x<=box.left+${Number.isFinite(limit) ? limit : 1e9}));
    const bottom=extra?Math.max(box.bottom,extra.bottom):box.bottom;
    return[box.left,box.top,right+4-box.left,bottom-box.top];
  })()`);
  const measured = measure => async () => ({ rect: await measure() });
  const openResetAll = async () => {
    await b.evaluate(`layerApp.app.workspace_input(JSON.stringify({type:'form',action:{type:'reset_brushes'}}));void 0`);
    await e.wait(`!!document.querySelector(${json(form)})`);
    await b.settle();
  };
  const cancelForm = async () => {
    await b.evaluate(`layerApp.app.workspace_input(JSON.stringify({type:'cancel'}));void 0`);
    await e.wait(`!document.querySelector(${json(form)})`);
  };

  const paint = await workspace('illustrator');
  const ink = await e.read('layerApp.state().colors.foreground');
  await e.newDocument(1600, 1000);

  await e.send({ type: 'select_brush', id: 2 });
  await e.show('tool_settings');
  await e.wait(`!!document.querySelector('${group('tool_settings')} [data-tool-setting="material_hardness"]')`);
  await fit('tool_settings');
  await shoot('brushes/tool-panel', { target: group('tool_settings'), variant: refit('tool_settings') });
  await shoot('brushes/tip-texture-settings', {
    variant: refit('tool_settings'),
    target: [{ selector: `${group('tool_settings')} [data-tool-setting="grain_depth"]` }, { selector: `${group('tool_settings')} [data-tool-setting="material_hardness"]` }, { selector: `${group('tool_settings')} [data-tool-setting="angle"]` }],
  });

  await shoot('brushes/dry-media-settings', { target: group('tool_settings'), variant: refit('tool_settings') });
  await shoot('brushes/smoothing-settings', {
    target: [{ selector: `${group('tool_settings')} [data-tool-setting="smoothing_strength"]` }, { selector: `${group('tool_settings')} h3`, text: 'Smoothing' }],
    variant: refit('tool_settings'),
  });

  await e.send({ type: 'select_brush', id: 1 });
  await e.show('sizes');
  await e.send({ type: 'set_brush_size', value: 20 });
  await e.wait(`!!document.querySelector('${group('sizes')} .size-button[data-size="20"]')`);
  await fit('sizes');
  await shoot('brushes/brush-size-panel', { target: group('sizes'), variant: refit('sizes') });
  await e.show('tool_settings');
  await restoreLayout(paint);

  await e.newDocument(1600, 900);
  await e.frame(.8, [800, 450]);
  await e.add('Charcoal');
  await e.brush(27, 120, '#202326');
  for (const [index, value] of [0, 1, 2].entries()) {
    await e.send({ type: 'set_tool_setting', id: 'grain_depth', value });
    assert.equal(await setting('grain_depth'), value, `Texture strength is ${value * 100}%`);
    await e.draw(`M300 ${230 + index * 220} L1300 ${230 + index * 220}`, { pressure: .08, tiltX: 42, tiltY: 12 });
  }
  await shoot('brushes/texture-strength', { target: { documentRect: [240, 140, 1120, 620] }, pad: 0 });

  // Draw every sample on the actual Paper surface. Samples are ordered as
  // listed in the translated page caption, avoiding baked-in English labels.
  await e.newDocument(1440, 1200);
  await e.frame(.66, [720, 600]);
  const dryPaper = await e.read('Number(layerApp.state().layers.find(r=>r.paper).id)');
  const dryLayer = await e.active();
  for (const [index, preset] of [2, 25, 26, 27, 6, 17, 43].entries()) {
    const texture = ['drawing_paper', 'handmade_paper', 'bristol', 'unryu', 'ingres', 'sanded_pastel', 'linen'][index];
    await e.layer({ op: 'select', id: dryPaper, mask: false });
    const choice = await e.read(`layerApp.state().layer_properties.controls.find(c=>c.key==='texture').paper.tiles.findIndex(t=>t.id===${json(texture)})`);
    assert.ok(choice >= 0, `Paper exists: ${texture}`);
    await e.send({ type: 'effect', action: { op: 'set', layer: dryPaper, key: 'texture', value: { kind: 'choice', value: choice } } });
    await e.canvas();
    await e.layer({ op: 'select', id: dryLayer, mask: false });
    const y = 120 + index * 156;
    await e.brush(preset, preset === 25 ? 18 : 66, ['#394443', '#394443', '#394443', '#303735', '#a55f45', '#c96842', '#417a68'][index]);
    for (const [column, pressure] of [.025, .09, .2].entries()) {
      const x = 140 + column * 400;
      await e.draw(`M${x} ${y+20} C${x+70} ${y-40} ${x+180} ${y+70} ${x+290} ${y}`, { pressure, tiltX: preset === 25 ? 0 : 45, tiltY: 12 });
    }
  }
  await e.invoke('hand');
  await shoot('brushes/dry-media-swatches', { target: { documentRect: [75, 45, 1290, 1110] }, pad: 0 });

  await e.newDocument(1600, 900);
  await e.frame(.8, [800, 450]);
  await e.brush(27, 96, '#303735');
  for (const [index, value] of [.25, .6, 1].entries()) {
    await e.send({ type: 'set_tool_setting', id: 'flow', value });
    assert.ok(Math.abs(await setting('flow') - value) < 1e-6, 'Strength uses the brush flow control');
    await e.draw(`M260 ${210 + index * 230} C560 ${150 + index * 230} 1000 ${270 + index * 230} 1340 ${210 + index * 230}`, { pressure: .09, tiltX: 42, tiltY: 12 });
  }
  await e.invoke('hand');
  await shoot('brushes/dry-media-strength', { target: { documentRect: [180, 100, 1240, 700] }, pad: 0 });

  await e.newDocument(1600, 900);
  await e.frame(.8, [800, 450]);
  await e.brush(1, 14, '#394443');
  for (const [index, value] of [0, .75].entries()) {
    await e.send({ type: 'set_tool_setting', id: 'smoothing_strength', value });
    const points = Array.from({ length: 161 }, (_, step) => {
      const t = step / 160;
      return [260 + t * 1080, 280 + index * 340 + Math.sin(t * Math.PI * 4) * 90 + Math.sin(t * 137) * 12];
    });
    await e.stroke(points, { pressure: .6, settleEvery: 1 });
  }
  await e.invoke('hand');
  await shoot('brushes/smoothing-comparison', { target: { documentRect: [180, 120, 1240, 680] }, pad: 0 });
  await e.send({ type: 'set_tool_setting', id: 'smoothing_strength', value: 0 });

  const photo = await workspace('photographer');
  await e.newDocument(1600, 1000);
  await e.invoke('brush');
  await e.wait(`!!document.querySelector('${toolOptions} [data-toolbar-setting=size]')`);
  await shoot('brushes/tool-options-bar', { target: measured(() => barRect({ limit: 1000 })) });

  await e.send({ type: 'select_brush', id: 22 });
  const mixingChoice = `${drawer} .tool-action-choice:has([data-tool-action-group="color-mixing"])`;
  const mixingControl = `${mixingChoice} > select`;
  const revealMixing = async () => {
    await e.wait(`!!document.querySelector(${json(mixingControl)})`);
    await b.evaluate(`document.querySelector(${json(mixingControl)}).scrollIntoView({block:'nearest',behavior:'instant'});void 0`);
    await drawerSettled();
  };
  await shoot('brushes/color-mixing-menu', {
    target: [`${mixingChoice} > span`, mixingControl],
    setup: async () => {
      await press(`${toolOptions} > .toolbar-more`);
      await e.wait(`!!document.querySelector(${json(drawer)})`);
      await revealMixing();
    },
    variant: revealMixing,
    teardown: closeDrawer,
  });
  await restoreLayout(photo);

  await workspace('painter');
  await e.newDocument(1600, 1000);
  await e.send({ type: 'select_brush', id: 21 });
  const column = `${drawer} .drawer-column:has([data-control="tool_settings"])`;
  const scroller = `[...document.querySelectorAll('${drawer} .drawer-column, ${drawer} .drawer-column *')].find(n=>n.scrollHeight>n.clientHeight+1&&/auto|scroll/.test(getComputedStyle(n).overflowY)&&n.querySelector('[data-control="tool_settings"]'))`;
  const scrolledToEnd = `(c=>!c||Math.abs(c.scrollTop+c.clientHeight-c.scrollHeight)<1)(${scroller})`;
  const scrollToEnd = async () => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseWheel', ...await point(column), deltaX: 0, deltaY: 2000 });
    await e.wait(scrolledToEnd);
    await b.settle();
  };
  let mixingHeading = -1;
  const wetRect = () => e.read(`(()=>{const view=${scroller}??document.querySelector(${json(column)}),frame=view.getBoundingClientRect(),tool=view.querySelector('[data-control="tool_settings"]'),heading=tool.querySelectorAll('h3')[${mixingHeading}],buttons=[...tool.querySelectorAll('.tool-setting-action[data-tool-action^="color_mix"], [data-tool-action-group="color-mixing"]')].map(n=>n.getBoundingClientRect()),leaves=[...tool.querySelectorAll('*')].filter(n=>!n.childElementCount&&n.checkVisibility()).map(n=>n.getBoundingClientRect().right),left=frame.left+view.clientLeft,right=Math.min(left+view.clientWidth,Math.max(...leaves)+10),top=heading.getBoundingClientRect().top-6,bottom=Math.min(frame.top+view.clientTop+view.clientHeight,Math.max(...buttons.map(r=>r.bottom))+6);return[left,top,right-left,bottom-top]})()`);
  await shoot('brushes/wet-media-settings', {
    target: measured(wetRect), pad: 0,
    setup: async () => {
      await openDrawer('drawing_brush', 'brush_sets', 'Watercolor');
      await scrollToEnd();
      await e.wait(`document.querySelector('${drawer} [data-tool-action-group="color-mixing"]')?.checkVisibility()`);
      mixingHeading = await e.read(`[...document.querySelector(${json(`${drawer} [data-control="tool_settings"]`)}).querySelectorAll('h3')].findIndex(n=>n.textContent.trim()==='Mixing')`);
      assert.ok(mixingHeading >= 0, 'The Mixing section is in the tool settings');
    },
    variant: scrollToEnd,
    teardown: closeDrawer,
  });
  await e.invoke('drawing_brush');

  await e.invoke('brush');
  await e.send({ type: 'set_tool_setting', id: 'size', value: 37 });
  const edge = await e.read(`document.querySelector('[data-toolbar-component=brush_size_slider]').closest('[data-panel]').dataset.panel`);
  await shoot('brushes/sketch-size-slider', {
    target: [`.toolbar-controls[data-panel="${edge}"]`, sizePreview],
    setup: async () => {
      if (!await e.read(`!!document.querySelector(${json(sizePreview)})`)) await press('[data-toolbar-component=brush_size_slider] .toolbar-slider-cap');
      await e.wait(`!!document.querySelector(${json(sizePreview)}) && document.querySelector('${sizePreview} .toolbar-preview-caption').textContent.includes('37')`);
    },
    teardown: () => closePopover(sizePreview),
  });

  await e.send({ type: 'select_brush', id: 25 });
  await e.send({ type: 'set_tool_setting', id: 'size', value: 64 });
  await e.send({ type: 'set_tool_setting', id: 'flow', value: .6 });
  await shoot('brushes/strength-preview', {
    target: [`.toolbar-controls[data-panel="${edge}"]`, sizePreview],
    setup: async () => {
      await press('[data-toolbar-component=brush_strength_slider] .toolbar-slider-cap');
      await e.wait(`!!document.querySelector('${sizePreview} canvas')?.dataset.previewRequest`);
    },
    teardown: () => closePopover(sizePreview),
  });

  await workspace('illustrator');
  await e.send({ type: 'set_tool_setting', id: 'size', value: 30 });
  await shoot('brushes/reset-all-dialog', { target: form, setup: openResetAll, teardown: cancelForm });
  await openResetAll();
  await b.evaluate(`[...document.querySelectorAll('${form} button')].find(n=>n.textContent.trim()==='Reset Brushes').click();void 0`);
  await e.wait(`!document.querySelector(${json(form)})`);
  await e.send({ type: 'select_brush', id: 27 });
  assert.equal(await setting('grain_depth'), 1, 'Reset All Brushes restored Charcoal');
  for (const id of [2, 4, 1]) await e.send({ type: 'select_brush', id });
  await e.send({ type: 'color', action: { op: 'set_slot', slot: 'foreground', color: ink } });
}
