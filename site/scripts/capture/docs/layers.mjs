import assert from 'node:assert/strict';
import { canvasBar, quiet } from '../shoot.mjs';

const menu = '.panel-context-menu:popover-open';
const opened = `!!document.querySelector('${menu}')`;
const layerMenuBar = '.header-menu[data-menu="layer"]';
const row = id => `.layer-row[data-layer="${id}"]`;
const swipe = id => `.layer-swipe:has(> ${row(id)})`;

export default async function layers({ e, b, shoot, example }) {
  const key = async (key, code = key, windowsVirtualKeyCode = 27) => {
    for (const type of ['rawKeyDown', 'keyUp']) await b.call('Input.dispatchKeyEvent', { type, key, code, windowsVirtualKeyCode });
    await b.settle();
  };
  const point = async selector => {
    await b.evaluate(`document.querySelector(${JSON.stringify(selector)})?.scrollIntoView({block:'nearest'});void 0`);
    return e.read(`(()=>{const node=[...document.querySelectorAll(${JSON.stringify(selector)})].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0);if(!node)throw Error('Missing control: '+${JSON.stringify(selector)});const r=node.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
  };
  const mouse = (type, p, button = 'left') => b.call('Input.dispatchMouseEvent', { type, ...p, button, buttons: type === 'mouseReleased' ? 0 : button === 'right' ? 2 : 1, clickCount: 1 });
  const clickAt = async (p, button = 'left') => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', ...p });
    await mouse('mousePressed', p, button); await mouse('mouseReleased', p, button);
    await b.settle();
  };
  const press = async (selector, button) => clickAt(await point(selector), button);
  const closeMenus = async () => {
    for (let attempt = 0; attempt < 4 && await e.read(opened); attempt++) await key('Escape');
    await e.wait(`!${opened}`);
  };
  const menuButton = label => `[...document.querySelectorAll('${menu} button')].find(b=>b.querySelector('.menu-label')?.textContent===${JSON.stringify(label)})`;
  const menuRows = `document.querySelectorAll('${menu} > button')`;
  const menuAtRest = `${opened} && !document.querySelector('${menu}').getAnimations().length`;
  const submenuAtRest = `${menuAtRest} && !!document.querySelector('${menu} .submenu-back')`;
  const centre = node => e.read(`(()=>{const r=${node}.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
  const away = () => b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: -20, y: -20 });
  const reopening = (open, ready = menuAtRest) => ({
    variant: async () => {
      if (await e.read(opened)) return;
      await quiet(b); await e.canvas(); await e.idle();
      await open();
      await e.wait(ready);
      await away();
    },
    release: closeMenus,
  });
  const id = name => e.read(`Number(layerApp.state().layers.find(r=>r.label===${JSON.stringify(name)}).id)`);
  const activeName = () => e.read('layerApp.state().layer_tools.editing_layer.label');
  const checkedNames = () => e.read('layerApp.state().layers.filter(r=>r.selected).map(r=>r.label)');
  const growLayers = async (distance = 80) => {
    const handle = await e.read(`(()=>{const layers=document.querySelector('.dock-group:has(.dock-tab[data-panel="layers"])').getBoundingClientRect();const node=[...document.querySelectorAll('[role=separator]')].map(n=>n.getBoundingClientRect()).find(r=>r.width>r.height&&Math.abs(r.bottom-layers.top)<=8&&r.left>=layers.left-4);return node&&{x:node.left+node.width/2,y:node.top+node.height/2}})()`);
    assert.ok(handle, 'Divider above the Layers panel');
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', ...handle });
    await mouse('mousePressed', handle);
    for (let i = 1; i <= 12; i++) await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: handle.x, y: handle.y - distance * i / 12, button: 'left', buttons: 1 });
    await mouse('mouseReleased', { x: handle.x, y: handle.y - distance });
    await b.settle(); await e.idle();
  };
  const allRowsVisible = `(()=>{const list=document.querySelector('#layer-rows').getBoundingClientRect();return [...document.querySelectorAll('#layer-rows .layer-row')].every(r=>{const box=r.getBoundingClientRect();return box.top>=list.top-1&&box.bottom<=list.bottom+1})})()`;
  const finished = async () => {
    await e.load('04-finished.capy');
    await e.wait(`layerApp.state().layers.length===11`);
  };

  await e.wait(`(()=>{[...document.querySelectorAll('dialog[open] button')].find(b=>b.textContent==='Keep for Later')?.click();return !document.querySelector('dialog[open]');})()`);
  await e.provide('04-finished.capy', await example('04-finished.capy'));
  await e.workspace('illustrator');
  if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  await finished();
  await e.show('layers');
  const layersBox = `(()=>{const r=document.querySelector('.dock-group:has(.dock-tab[data-panel="layers"])').getBoundingClientRect();return [r.top,r.height].map(Math.round).join()})()`;
  const layout = await e.read(layersBox);
  await growLayers();
  assert.ok(await e.read(allRowsVisible), 'Every layer row is visible in the taller Layers panel');
  await e.layer({ op: 'select', id: await id('Ribbon shading'), mask: false });
  assert.equal(await activeName(), 'Ribbon shading');

  await shoot('layers/panel', {
    target: '.layers-panel',
    callouts: [
      { selector: '.layers-panel .layer-header' },
      { selector: '.layers-panel .layer-list' },
      { selector: '.layers-panel .layer-footer' },
    ],
  });

  assert.deepEqual(await checkedNames(), ['Ribbon shading']);
  await shoot('layers/panel-header', {
    target: '.layers-panel .layer-header',
    callouts: [
      { selector: '.layer-header .layer-blend', badge: 'above' },
      { selector: '#layer-opacity', badge: 'above' },
      { selector: '.layer-flags [aria-label="Alpha lock"]', badge: 'below' },
      { selector: '.layer-flags [aria-label="Lock editing"]', badge: 'below' },
      { selector: '.layer-flags .layer-attachment', badge: 'below' },
      { selector: '.layer-flags .layer-reference', badge: 'below' },
    ],
  });
  assert.deepEqual(await e.read(`[...document.querySelectorAll('.layers-panel .layer-footer button')].filter(b=>b.disabled).map(b=>b.ariaLabel)`), [], 'Every footer button is enabled');
  await shoot('layers/panel-footer', {
    target: '.layers-panel .layer-footer',
    callouts: [
      { selector: '.layer-footer [aria-label="New layer"]' },
      { selector: '.layer-footer [aria-label="New group"]' },
      { selector: '.layer-footer [aria-label="New Selection Layer"]' },
      { selector: '.layer-footer [aria-label="Add mask"]' },
      { selector: '#layer-add-filter' },
      { selector: '.layer-footer [aria-label="Import Image as Layer…"]' },
      { selector: '.layer-footer [aria-label="Delete selected layers"]' },
      { selector: '.layer-footer .layer-more' },
    ],
  });

  const ribbon = await id('Ribbon'), disc = await id('Disc'), shading = await id('Ribbon shading');
  const openRibbonMenu = () => press(`${row(ribbon)} .layer-name`, 'right');
  await e.layer({ op: 'select', id: ribbon, mask: false });
  await shoot('layers/panel-menu', {
    target: [menu, row(ribbon)],
    setup: async () => {
      await openRibbonMenu();
      await e.wait(`${opened} && !!${menuButton('Delete layer')}`);
    },
    teardown: closeMenus,
    ...reopening(openRibbonMenu),
  });

  let settings;
  await e.layer({ op: 'select', id: shading, mask: false });
  const openSettings = async () => {
    await press(`${row(shading)} .layer-name`, 'right');
    await e.wait(`${menuAtRest} && ${menuRows}.length>${settings}`);
    await clickAt(await centre(`${menuRows}[${settings}]`));
  };
  await shoot('layers/settings-menu', {
    target: menu,
    setup: async () => {
      await press(`${row(shading)} .layer-name`, 'right');
      await e.wait(`${opened} && !!${menuButton('Layer Settings')}`);
      settings = await e.read(`[...${menuRows}].findIndex(b=>b.querySelector('.menu-label')?.textContent==='Layer Settings')`);
      await clickAt(await centre(menuButton('Layer Settings')));
      await e.wait(`!!${menuButton('Clip to Layer Below')}`);
    },
    teardown: closeMenus,
    ...reopening(openSettings, submenuAtRest),
  });

  await e.layer({ op: 'select', id: ribbon, mask: true });
  const openMaskMenu = () => press(`${row(ribbon)} .layer-thumbnail ~ .layer-thumbnail`, 'right');
  await shoot('layers/masks-menu', {
    target: menu,
    setup: async () => {
      await openMaskMenu();
      await e.wait(`${opened} && !!${menuButton('Delete mask')}`);
    },
    teardown: closeMenus,
    ...reopening(openMaskMenu),
  });

  await e.layer({ op: 'select', id: disc, mask: false });
  const openBlendMenu = () => press('.layer-header .layer-blend');
  await shoot('layers/blend-menu', {
    target: [menu, '.layers-panel .layer-header'],
    setup: async () => {
      await openBlendMenu();
      await e.wait(`${opened} && !!${menuButton('Luminosity')}`);
    },
    teardown: closeMenus,
    ...reopening(openBlendMenu),
  });

  await e.layer({ op: 'select', id: ribbon, mask: false });
  await shoot('layers/merging-menu', {
    target: `${layerMenuBar} .popover`,
    setup: async () => {
      await press(`${layerMenuBar} > summary`);
      await e.wait(`document.querySelector('${layerMenuBar}').open && [...document.querySelectorAll('${layerMenuBar} .popover button')].some(b=>b.querySelector('.menu-label')?.textContent==='Flatten Image')`);
    },
    teardown: async () => {
      await press(`${layerMenuBar} > summary`);
      await e.wait(`!document.querySelector('${layerMenuBar}').open`);
    },
  });

  const noticeShown = `document.querySelector('.canvas-notice')?.checkVisibility() && !!document.querySelector('.canvas-notice-text').textContent`;
  await shoot('layers/merging-flatten-notice', {
    target: '.canvas-notice',
    setup: async () => {
      await e.send({ type: 'invoke', command: 'flatten_image' });
      await e.wait(`${noticeShown} && document.querySelector('.canvas-notice-text').textContent.includes('hidden layers')`);
    },
    variant: async () => {
      await e.send({ type: 'invoke', command: 'flatten_image' });
      await e.wait(noticeShown);
    },
    teardown: () => e.wait(`document.querySelector('.canvas-notice').hidden`),
  });
  assert.equal(await e.read('layerApp.state().layers.length'), 11, 'Flatten was not accepted');

  await shoot('layers/working-rename', {
    target: row(disc),
    setup: async () => {
      await e.layer({ op: 'begin_rename', id: disc });
      await e.wait(`document.activeElement?.matches('${row(disc)} .layer-name-entry')`);
    },
    teardown: () => e.layer({ op: 'cancel_rename' }),
  });

  const colorRough = await id('Color rough'), sketch = await id('Sketch');
  const order = () => e.read('layerApp.state().layers.map(r=>r.id).join()');
  const before = await order();
  let origin;
  await shoot('layers/working-drag', {
    target: '.layers-panel',
    check: async () => {
      origin = await point(`${row(colorRough)} .layer-name`);
      const to = await e.read(`(()=>{const r=document.querySelector('${row(sketch)}').getBoundingClientRect();return{x:r.x+r.width*.5,y:r.y+2}})()`);
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', ...origin });
      await mouse('mousePressed', origin);
      await mouse('mouseMoved', { x: origin.x, y: origin.y - 10 });
      await mouse('mouseMoved', to);
      await b.settle();
      await e.wait(`document.querySelector('${row(sketch)}').classList.contains('layer-drop-before') && !!document.querySelector('.layer-drag-preview')`);
    },
    release: async () => {
      await mouse('mouseMoved', origin);
      await mouse('mouseReleased', origin);
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: -20, y: -20 });
      await b.settle();
      await e.wait(`!document.querySelector('.layer-drag-preview') && !document.querySelector(':popover-open')`);
      assert.equal(await order(), before, 'Dropping back on the same row leaves the order unchanged');
    },
  });

  const swipeRow = async (layer, dx) => {
    const start = await point(`${row(layer)} .layer-name`);
    const touch = (type, x) => b.call('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ id: 1, x, y: start.y }] });
    await touch('touchStart', start.x);
    await touch('touchMove', start.x + dx / 3);
    await touch('touchMove', start.x + dx);
    await touch('touchEnd', start.x + dx);
    await b.settle();
  };
  const deleteHidden = `document.querySelector('${swipe(disc)} .layer-swipe-delete').hidden`;
  await shoot('layers/panel-swipe-delete', {
    target: swipe(disc),
    setup: async () => {
      await swipeRow(disc, -60);
      await e.wait(`!${deleteHidden}`);
    },
    teardown: async () => {
      await swipeRow(disc, 90);
      await e.wait(deleteHidden);
      assert.equal(await e.read(`layerApp.state().layers.find(r=>Number(r.id)===${disc}).alpha_locked`), false, 'Closing Delete leaves Disc unchanged');
    },
  });

  await e.layer({ op: 'select', id: ribbon, mask: true });
  await shoot('layers/masks-row', { target: row(ribbon) });
  await shoot('layers/masks-bar', { target: '.canvas-action-bar', ready: canvasBar });

  await e.layer({ op: 'select', id: ribbon, mask: false });
  await e.layer({ op: 'alpha_lock', id: ribbon, value: true });
  await e.send({ type: 'set_layer_opacity', opacity: .8 });
  assert.deepEqual(await checkedNames(), ['Ribbon']);
  assert.equal(await e.read(`document.querySelector('${row(ribbon)} .layer-meta').textContent`), '80%');
  assert.equal(await e.read(`(n=>n.style.opacity+n.querySelector('svg').dataset.asset)(document.querySelector('${row(ribbon)} .layer-lock'))`), '1alpha-lock');
  await shoot('layers/panel-row', {
    target: swipe(ribbon),
    callouts: [
      { selector: `${row(ribbon)} > .layer-icon:nth-child(1)`, badge: 'above' },
      { selector: `${row(ribbon)} > .layer-icon:nth-child(2)`, badge: 'below' },
      { selector: `${row(ribbon)} [aria-label="Edit layer content"]`, badge: 'above' },
      { selector: `${row(ribbon)} .layer-link`, badge: 'below' },
      { selector: `${row(ribbon)} [aria-label="Edit layer mask"]`, badge: 'above' },
      { selector: `${row(ribbon)} .layer-text`, badge: 'below' },
      { selector: `${row(ribbon)} .layer-lock`, badge: 'above' },
      { selector: `${row(ribbon)} .layer-grip`, badge: 'below' },
    ],
  });

  await e.invoke('undo_workspace');
  await e.wait(`${layersBox}===${JSON.stringify(layout)}`);

  await e.newDocument(2048, 1536);
  await e.setColor('#d6ad67');
  await e.send({ type: 'effect', action: { op: 'insert', effect: 'solid_color' } });
  await e.send({ type: 'effect', action: { op: 'insert', effect: 'gradient_fill' } });
  await e.send({ type: 'effect', action: { op: 'insert', effect: 'curves' } });
  await e.layer({ op: 'new', group: true, clipped: false });
  const group = await e.read('Number(layerApp.state().layer_tools.editing_layer.id)');
  await e.layer({ op: 'new', group: false, clipped: false });
  await e.layer({ op: 'blend', id: group, value: 24 });
  await e.invoke('new_selection_layer');
  await e.layer({ op: 'cancel_rename' });
  await e.invoke('return_to_artwork');
  assert.deepEqual(await e.read('layerApp.state().layers.map(r=>[r.selection_layer?"selection":r.group?r.blend_label:r.adjustment_effect?r.label:r.depth?"paint":r.label,r.depth])'),
    [['selection', 0], ['Pass Through', 0], ['paint', 1], ['Curves', 0], ['Gradient Fill', 0], ['Solid Color', 0], ['Current ink', 0], ['Paper', 0]], 'One expanded row of each layer type');
  await shoot('layers/types-rows', { target: { selector: '#layer-rows .layer-swipe', all: true } });

  await e.workspace('photographer');
  await finished();
  await e.layer({ op: 'select', id: await id('Disc'), mask: false });
  await e.show('properties');
  await shoot('layers/settings-color-mode', { target: '.properties-panel .effect-properties' });
  await e.workspace('illustrator');
}
