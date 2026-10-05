import assert from 'node:assert/strict';
import { drawer, group, helpers } from './drawing.mjs';

const json = value => JSON.stringify(value);
const toolOptions = '[data-toolbar-component=tool_options]';
const popover = '.toolbar-editor-popover:popover-open';
const sizePreview = '.toolbar-brush-preview:popover-open';
const form = 'dialog.workspace-form[open]';

export default async function brushes({ e, b, shoot }) {
  const { escape, point, press, workspace, restoreLayout, fit, openDrawer, closeDrawer } = helpers(e, b);
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
  await e.wait(`!!document.querySelector('${group('tool_settings')} [data-tool-setting="grain_depth"]')`);
  await fit('tool_settings');
  await shoot('brushes/tool-panel', { target: group('tool_settings') });
  await shoot('brushes/tip-texture-settings', {
    target: [{ selector: `${group('tool_settings')} h3`, text: ['Tip', 'Texture'], all: true }, { selector: `${group('tool_settings')} [data-tool-setting="hardness"]` }, { selector: `${group('tool_settings')} [data-tool-setting="grain_depth"]` }],
  });

  await e.send({ type: 'select_brush', id: 1 });
  await e.show('sizes');
  await e.send({ type: 'set_brush_size', value: 20 });
  await e.wait(`!!document.querySelector('${group('sizes')} .size-button[data-size="20"]')`);
  await fit('sizes');
  await shoot('brushes/brush-size-panel', { target: group('sizes') });
  await e.show('tool_settings');
  await restoreLayout(paint);

  await e.newDocument(1600, 900);
  await e.frame(.8, [800, 450]);
  await e.add('Charcoal');
  await e.brush(27, 120, '#202326');
  for (const [index, value] of [0, .5, 1].entries()) {
    await e.send({ type: 'set_tool_setting', id: 'grain_depth', value });
    assert.equal(await setting('grain_depth'), value, `Texture strength is ${value * 100}%`);
    await e.draw(`M300 ${230 + index * 220} L1300 ${230 + index * 220}`, { pressure: .35 });
  }
  await shoot('brushes/texture-strength', { target: { documentRect: [240, 140, 1120, 620] }, pad: 0 });

  const photo = await workspace('photographer');
  await e.newDocument(1600, 1000);
  await e.invoke('brush');
  await e.wait(`!!document.querySelector('${toolOptions} [data-toolbar-setting=size]')`);
  const bar = { rect: [0, 0, 0, 0] };
  await shoot('brushes/tool-options-bar', { target: [bar], setup: async () => { bar.rect = await barRect({ limit: 1000 }); } });

  await e.send({ type: 'select_brush', id: 22 });
  await e.wait(`!!document.querySelector('${toolOptions} [data-toolbar-choice="color-mixing"] > button')`);
  await shoot('brushes/color-mixing-menu', {
    target: [bar],
    setup: async () => {
      await press(`${toolOptions} [data-toolbar-choice="color-mixing"] > button`);
      await e.wait(`!!document.querySelector(${json(popover)})`);
      bar.rect = await barRect({ cover: popover });
    },
    teardown: () => closePopover(popover),
  });
  await restoreLayout(photo);

  await workspace('painter');
  await e.newDocument(1600, 1000);
  await e.send({ type: 'select_brush', id: 21 });
  const wet = { rect: [0, 0, 0, 0] };
  await shoot('brushes/wet-media-settings', {
    target: [wet], pad: 0,
    setup: async () => {
      await openDrawer('drawing_brush', 'brush_sets', 'Watercolor');
      const column = await point(`${drawer} .drawer-column:has([data-control="tool_settings"])`);
      await b.call('Input.dispatchMouseEvent', { type: 'mouseWheel', ...column, deltaX: 0, deltaY: 800 });
      const scroller = `[...document.querySelectorAll('${drawer} .drawer-column, ${drawer} .drawer-column *')].find(n=>n.scrollHeight>n.clientHeight+1&&/auto|scroll/.test(getComputedStyle(n).overflowY)&&n.querySelector('[data-control="tool_settings"]'))`;
      await e.wait(`(c=>!!c&&c.scrollTop>0&&Math.abs(c.scrollTop+c.clientHeight-c.scrollHeight)<1)(${scroller})`);
      await b.settle();
      wet.rect = await e.read(`(()=>{const view=${scroller},frame=view.getBoundingClientRect(),tool=view.querySelector('[data-control="tool_settings"]'),heading=[...tool.querySelectorAll('h3')].find(n=>n.textContent.trim()==='Mixing'),buttons=[...tool.querySelectorAll('.tool-setting-action[data-tool-action^="color_mix"]')].map(n=>n.getBoundingClientRect()),leaves=[...tool.querySelectorAll('*')].filter(n=>!n.childElementCount&&n.checkVisibility()).map(n=>n.getBoundingClientRect().right),left=frame.left+view.clientLeft,right=Math.min(left+view.clientWidth,Math.max(...leaves)+10),top=heading.getBoundingClientRect().top-6,bottom=Math.min(frame.top+view.clientTop+view.clientHeight,Math.max(...buttons.map(r=>r.bottom))+6);return[left,top,right-left,bottom-top]})()`);
    },
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
