import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { canvasBar, quiet } from '../shoot.mjs';

const photo = new URL('../photo/terrarium.jpg', import.meta.url);
const menu = '.panel-context-menu:popover-open';
const picker = '.adjustments-panel .filter-picker';
const properties = '.properties-panel .effect-properties';
const drawer = '.content-drawer';
const histogram = '[data-scope="histogram"]';

const previewsFilled = scope => `(()=>{const rows=[...document.querySelectorAll(${JSON.stringify(`${scope} .filter-row`)})].filter(row=>{const box=row.getBoundingClientRect(),list=row.closest('.filter-picker-list').getBoundingClientRect(),frame=row.closest('.drawer-column,.panel').getBoundingClientRect();return box.height>0&&box.bottom>Math.max(list.top,frame.top,0)&&box.top<Math.min(list.bottom,frame.bottom,innerHeight)});return rows.length>0&&rows.every(row=>row.querySelector('canvas').height===Math.min(128,Math.round(40*devicePixelRatio)))})()`;
const histogramsExact = scope => `[...document.querySelectorAll(${JSON.stringify(`${scope} [data-scope-control="status"]`)})].filter(n=>n.checkVisibility()).every(n=>n.textContent==='Exact')`;

export default async function filters({ e, b, shoot }) {
  const point = selector => e.read(`(()=>{const node=[...document.querySelectorAll(${JSON.stringify(selector)})].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0);if(!node)throw Error('Missing control: '+${JSON.stringify(selector)});const r=node.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
  const clickAt = async ({ x, y }, button = 'left') => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y, button: 'none', buttons: 0 });
    for (const type of ['mousePressed', 'mouseReleased']) {
      await b.call('Input.dispatchMouseEvent', { type, x, y, button, buttons: type === 'mousePressed' ? (button === 'right' ? 2 : 1) : 0, clickCount: 1 });
    }
    await b.settle();
  };
  const press = async (selector, button) => clickAt(await point(selector), button);
  const menuItem = label => `[...document.querySelectorAll('${menu} button')].find(b=>b.querySelector('.menu-label')?.textContent===${JSON.stringify(label)})`;
  const choose = async label => {
    await e.wait(`!!${menuItem(label)}`);
    await clickAt(await e.read(`(()=>{const r=${menuItem(label)}.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`));
  };
  const menuAtRest = `!!document.querySelector('${menu}') && !document.querySelector('.panel-context-menu').getAnimations().length`;
  const menuShows = label => e.wait(`!!${menuItem(label)} && !document.querySelector('.panel-context-menu').getAnimations().length`);
  const closeMenu = async () => {
    await b.evaluate(`document.querySelector('${menu}')?.hidePopover();void 0`);
    await e.wait(`!document.querySelector('${menu}')`);
  };
  const layers = () => e.read('layerApp.state().layers.map(({id,label,selected})=>({id,label,selected}))');
  const selectLayer = async id => { await e.layer({ op: 'select', id, mask: false }); await e.wait(`Number(layerApp.state().layer_tools.editing_layer.id)===${id}`); };
  const openPhoto = async () => {
    await e.provide('terrarium.jpg', await readFile(photo));
    await e.open('terrarium.jpg');
    const selected = (await layers()).find(row => row.selected);
    assert.equal(selected?.label, 'terrarium', 'The opened photo layer is selected');
    return selected;
  };
  const showPanel = async panel => {
    await e.send({ type: 'customize', action: { type: 'set_panel_visible', panel, visible: true } });
    await e.show(panel);
  };
  const category = async id => {
    await e.send({ type: 'filter_picker', action: { op: 'category', category: id } });
    await e.wait(`(layerApp.state().filter_picker.category??null)===${JSON.stringify(id)}`);
  };
  const insert = async effect => {
    const count = (await layers()).length;
    await e.send({ type: 'effect', action: { op: 'insert', effect } });
    await e.wait(`layerApp.state().layers.length===${count + 1} && layerApp.state().layer_tools.editing_layer.adjustment_effect && layerApp.state().filter_picker.selected===${JSON.stringify(effect)}`);
    await e.show('properties');
    return e.read('Number(layerApp.state().layer_properties.layer)');
  };
  const undoTo = async count => {
    while ((await layers()).length > count) {
      await e.invoke('undo');
      await e.idle();
    }
  };
  const previews = scope => b.until(previewsFilled(scope), 180000);
  const exact = scope => b.until(histogramsExact(scope), 120000);

  const lowerLayers = async () => {
    const from = await e.read(`(()=>{const l=layerApp.app.layout(innerWidth,innerHeight),g=l.groups.find(g=>g.panels.includes('adjustments')).bounds;const d=l.dividers.find(d=>!d.band&&d.axis==='vertical'&&Math.abs(d.bounds.x-g.x)<1&&Math.abs(d.bounds.y-g.y-g.height)<1.5);return d&&{x:d.bounds.x+d.bounds.width/2,y:d.bounds.y+d.bounds.height/2}})()`);
    assert.ok(from, 'Divider below the Filters panel');
    const to = 1070;
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: from.x, y: from.y, button: 'none', buttons: 0 });
    await b.call('Input.dispatchMouseEvent', { type: 'mousePressed', x: from.x, y: from.y, button: 'left', buttons: 1, clickCount: 1 });
    for (let step = 1; step <= 12; step++) {
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: from.x, y: from.y + (to - from.y) * step / 12, button: 'left', buttons: 1 });
      await b.settle();
    }
    await b.call('Input.dispatchMouseEvent', { type: 'mouseReleased', x: from.x, y: to, button: 'left', buttons: 0, clickCount: 1 });
    await b.settle();
  };
  const enlargeFilters = async () => {
    for (const panel of ['navigator', 'proof']) await e.send({ type: 'customize', action: { type: 'set_panel_visible', panel, visible: false } });
    await lowerLayers();
  };
  const restoreLayout = async () => {
    await e.send({ type: 'workspace_manager', command: { type: 'reset_layout' } });
    const confirm = 'dialog.workspace-form[open] footer .suggested-action';
    await e.wait(`!!document.querySelector('${confirm}:not(:disabled)')`);
    await e.click(confirm);
    await e.wait(`!document.querySelector('dialog[open]') && !JSON.parse(layerApp.app.workspace_view()).busy`);
    await e.wait(`layerApp.app.layout(innerWidth,innerHeight).groups.some(g=>g.panels.includes('navigator'))`);
    await b.settle();
  };
  const listTarget = (through = null) => async () => ({ rect: await e.read(`(()=>{const picker=document.querySelector('${picker}'),list=picker.querySelector('.filter-picker-list').getBoundingClientRect(),box=picker.getBoundingClientRect();const rows=[...picker.querySelectorAll('.filter-row')];const end=${JSON.stringify(through)};const shown=rows.slice(0,end?rows.findIndex(r=>r.dataset.effect===end)+1:rows.length).map(r=>r.getBoundingClientRect()).filter(r=>r.height&&r.top>=list.top-.5&&r.bottom<=list.bottom+.5);const bottom=Math.max(...shown.map(r=>r.bottom));return[box.left-6,box.top-6,box.width+12,bottom-box.top+10]})()`) });

  await e.workspace('illustrator');
  if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  const image = await openPhoto();
  const base = (await layers()).length;

  await showPanel('layers');
  await shoot('filters/add-filter-menu', {
    target: ['.layers-panel .layer-footer', menu],
    setup: async () => { await press('#layer-add-filter'); await menuShows('Tone'); },
    teardown: closeMenu,
  });

  await e.invoke('select_all');
  await e.invoke('lasso');
  await e.wait(canvasBar);
  const barItem = '.canvas-action-bar .canvas-action-bar-item';
  const barLaidOut = `${canvasBar} && [...document.querySelectorAll('${barItem}')].some(r=>!r.hidden&&r.checkVisibility())`;
  const menuRows = `[...document.querySelectorAll('${menu} > button:not(.submenu-back)')]`;
  const submenuAtRest = `!!document.querySelector('${menu} .submenu-back') && !document.querySelector('.panel-context-menu').getAnimations().length`;
  const centre = node => e.read(`(()=>{const r=${node}.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
  const openBarMenu = async name => {
    await e.wait(barLaidOut);
    const { direct, index } = await e.read(`(()=>{const rows=[...document.querySelectorAll('${barItem}')],shown=rows.filter(r=>!r.hidden&&r.checkVisibility()).length,at=rows.findIndex(r=>r.querySelector('[data-canvas-bar-menu="${name}"]'));return{direct:at<shown,index:at-shown}})()`);
    if (direct) { await press(`.canvas-action-bar [data-canvas-bar-menu="${name}"]`); await e.wait(menuAtRest); return; }
    await press('.canvas-action-bar .canvas-action-bar-more');
    await e.wait(`${menuAtRest} && document.querySelectorAll('${menu} > button').length>${index}`);
    await clickAt(await centre(`document.querySelectorAll('${menu} > button')[${index}]`));
    await e.wait(submenuAtRest);
  };
  let tone;
  await shoot('filters/selection-adjust', {
    target: ['.canvas-action-bar', menu],
    ready: canvasBar, maxWidth: 1400,
    setup: async () => {
      await press('.canvas-action-bar [data-canvas-bar-menu="adjust"]');
      await e.wait(`!!${menuItem('Tone')}`);
      tone = await e.read(`${menuRows}.findIndex(b=>b.querySelector('.menu-label')?.textContent==='Tone')`);
      await choose('Tone');
      await menuShows('Curves');
    },
    variant: async () => {
      if (await e.read(`!!document.querySelector('${menu}') && ${submenuAtRest}`)) return;
      await openBarMenu('adjust');
      await e.wait(`${menuRows}.length>${tone}`);
      await clickAt(await centre(`${menuRows}[${tone}]`));
      await e.wait(`${submenuAtRest} && ${menuRows}.some(b=>b.querySelector('.menu-label'))`);
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: -20, y: -20 });
    },
    teardown: closeMenu,
  });
  await e.invoke('deselect');
  await e.invoke('move');

  for (const [group, filter] of [['Tone', 'Curves'], ['Detail', 'Clarity']]) {
    await selectLayer(image.id);
    const count = (await layers()).length;
    await press('#layer-add-filter');
    await choose(group);
    await choose(filter);
    await e.wait(`layerApp.state().layers.length===${count + 1} && layerApp.state().layer_tools.editing_layer.adjustment_effect`);
  }
  await selectLayer(image.id);
  await insert('vignette');
  await showPanel('layers');
  assert.deepEqual((await layers()).map(row => row.label), ['Vignette', 'Clarity', 'Curves', 'terrarium', 'Paper']);
  assert.equal(await e.read('layerApp.state().layer_tools.attachment.label'), 'Apply to terrarium');
  await shoot('filters/layers-chain', { target: { selector: '.layers-panel .layer-row', all: true }, pad: 6 });
  const header = async () => ({ rect: await e.read(`(()=>{const r=document.querySelector('.layers-panel .layer-header').getBoundingClientRect();return[r.left,r.top+3,r.width,r.height-3]})()`) });
  await shoot('filters/attachment-button', { target: header, pad: 0 });
  await undoTo(base);

  await selectLayer(image.id);
  const vignette = await insert('vignette');
  await showPanel('layers');
  assert.equal(await e.read(`layerApp.state().commands.find(c=>c.id==='merge_down').enabled`), true, 'Apply Effect to Layer Below is available');
  const openEffectMenu = () => press(`.layer-row[data-layer="${vignette}"] .layer-name`, 'right');
  await shoot('filters/apply-effect-menu', {
    target: menu,
    setup: async () => { await openEffectMenu(); await menuShows('Apply Effect to Layer Below'); },
    variant: async () => {
      if (await e.read(`!!document.querySelector('${menu}')`)) return;
      await quiet(b); await e.canvas(); await e.idle();
      await openEffectMenu();
      await e.wait(menuAtRest);
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: -20, y: -20 });
    },
    release: closeMenu,
    teardown: closeMenu,
  });
  await undoTo(base);
  await selectLayer(image.id);

  await enlargeFilters();
  await showPanel('adjustments');
  await category(null);
  await b.evaluate(`document.querySelector('${picker} .filter-picker-list').scrollTop=0;void 0`);
  await previews(picker);
  await shoot('filters/filters-panel', { target: listTarget('invert'), pad: 0, ready: previewsFilled(picker) });

  for (const id of ['tone', 'color', 'artistic', 'texture', 'distort']) {
    await category(id);
    await previews(picker);
    await shoot(`filters/${id}-list`, { target: listTarget(), pad: 0, ready: previewsFilled(picker) });
  }

  await category(null);
  await previews(picker);
  await b.evaluate(`(()=>{const list=document.querySelector('${picker} .filter-picker-list'),heading=list.querySelector('h3.filter-category[data-category="detail"]');list.scrollTop+=heading.getBoundingClientRect().top-list.getBoundingClientRect().top-parseFloat(getComputedStyle(heading).marginTop);})()`);
  await previews(picker);
  const detailBlur = async () => ({ rect: await e.read(`(()=>{const picker=document.querySelector('${picker}'),box=picker.getBoundingClientRect(),top=picker.querySelector('h3.filter-category[data-category="detail"]').getBoundingClientRect().top,bottom=picker.querySelector('.filter-row:has(+ h3.filter-category[data-category="artistic"])').getBoundingClientRect().bottom;return[box.left-6,top-6,box.width+12,bottom-top+10]})()`) });
  await shoot('filters/detail-blur-list', { target: detailBlur, pad: 0, ready: previewsFilled(picker) });
  await b.evaluate(`document.querySelector('${picker} .filter-picker-list').scrollTop=0;void 0`);

  const curves = await insert('curves');
  await exact(properties);
  const graph = await e.read(`(()=>{const r=document.querySelector('${properties} .curve-editor').getBoundingClientRect(),c=layerApp.state().layer_properties.controls.find(c=>c.kind.kind==='curve');return{epoch:c.curve.epoch,point:[r.width*.5,r.height*.4],extent:[r.width,r.height]}})()`);
  for (const phase of ['down', 'up']) await e.send({ type: 'effect', action: { op: 'curve_contact', layer: curves, key: 'rgb', epoch: graph.epoch, phase, point: graph.point, extent: graph.extent } });
  await e.wait(`layerApp.state().layer_properties.controls.find(c=>c.kind.kind==='curve')?.curve.selected!=null && Number(layerApp.state().layer_properties.controls.find(c=>c.kind.kind==='curve').curve.selected)===1`);
  await shoot('filters/properties-curves', { target: properties, pad: 6, ready: histogramsExact(properties) });
  await undoTo(base);

  await insert('levels');
  await exact(properties);
  await shoot('filters/levels-properties', { target: properties, pad: 6, ready: histogramsExact(properties) });
  await undoTo(base);

  await insert('color_lookup');
  await b.evaluate(`(()=>{const select=document.querySelector('${properties} .property-resource select');select.value=[...select.options].find(o=>o.textContent==='Warm').value;select.dispatchEvent(new Event('change'));})()`);
  await e.wait(`document.querySelector('${properties} .property-resource select').selectedOptions[0]?.textContent==='Warm'`);
  await shoot('filters/color-lookup', { target: properties, pad: 6 });
  await undoTo(base);

  const hue = await insert('hue_saturation');
  await e.send({ type: 'effect', action: { op: 'select_page', layer: hue, page: 'reds' } });
  await e.wait(`layerApp.state().layer_properties.page==='reds'`);
  await shoot('filters/hue-saturation-properties', { target: properties, pad: 6 });
  await undoTo(base);

  await insert('unsharp_mask');
  await shoot('filters/unsharp-mask-properties', { target: properties, pad: 6 });
  await undoTo(base);

  await insert('swirl');
  await shoot('filters/swirl-properties', { target: properties, pad: 6 });
  await undoTo(base);
  await restoreLayout();

  await e.workspace('painter');
  await openPhoto();
  const filtersButton = `[data-header-item="${await e.read(`layerApp.state().workspace.layout.header.zones.flat().find(e=>e.item.control?.panel==='adjustments').id`)}"] .header-tool`;
  const drawerOpen = `JSON.stringify(layerApp.state().customization.drawer?.columns)==='[["filter_types"],["adjustments"],["properties"]]'`;
  const openDrawer = async () => {
    if (!await e.read(drawerOpen)) await press(filtersButton);
    await e.wait(drawerOpen);
    for (let previous = null; ;) {
      const box = await e.read(`JSON.stringify(document.querySelector('${drawer}').getBoundingClientRect())`);
      if (box === previous) break;
      previous = box; await b.settle();
    }
  };
  await openDrawer();
  await press(`${drawer} .filter-type[data-category="tone"]`);
  await e.wait(`layerApp.state().filter_picker.category==='tone'`);
  await press(`${drawer} [data-effect="curves"]`);
  await e.wait(`layerApp.state().filter_picker.selected==='curves'`);
  await previews(drawer);
  await exact(drawer);
  await shoot('filters/sketch-drawer', { target: drawer, pad: 0, setup: async () => { await openDrawer(); await previews(drawer); await exact(drawer); } });
  await press(filtersButton);
  await e.wait('!layerApp.state().customization.drawer');

  await e.workspace('photographer');
  await openPhoto();
  await showPanel('histogram');
  await exact(histogram);
  await shoot('filters/histogram', { target: histogram, pad: 6, ready: histogramsExact(histogram) });

  await e.workspace('illustrator');
}
