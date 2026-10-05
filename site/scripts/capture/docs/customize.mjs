import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const contextMenu = '.panel-context-menu:popover-open';
const windowMenu = '#header details[data-menu="window"]';

export default async function customize({ e, b, shoot, examples }) {
  const json = value => JSON.stringify(value);
  const workspaceReady = () => e.wait('(v=>v.ready&&!v.busy&&!v.dirty)(JSON.parse(layerApp.app.workspace_view()))');
  const layout = () => e.read('JSON.stringify(layerApp.state().workspace.layout)');
  const key = async (key, code, windowsVirtualKeyCode) => {
    for (const type of ['keyDown', 'keyUp']) await b.call('Input.dispatchKeyEvent', { type, key, code, windowsVirtualKeyCode });
    await b.settle();
  };
  const escape = () => key('Escape', 'Escape', 27);
  const point = (selector, at = 'r.x+r.width/2,r.y+r.height/2') => b.evaluate(`(()=>{const n=document.querySelector(${json(selector)});if(!n)throw Error('Missing control: '+${json(selector)});const r=n.getBoundingClientRect();const [x,y]=[${at}];return{x,y}})()`);
  const mouse = async (position, button = 'left') => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', ...position });
    await b.call('Input.dispatchMouseEvent', { type: 'mousePressed', ...position, button, buttons: button === 'left' ? 1 : 2, clickCount: 1 });
    await b.call('Input.dispatchMouseEvent', { type: 'mouseReleased', ...position, button, buttons: 0, clickCount: 1 });
    await b.settle();
  };
  const press = async (selector, at) => mouse(await point(selector, at));
  const pressButton = async (container, label) => {
    const position = await b.evaluate(`(()=>{const n=[...document.querySelectorAll(${json(`${container} button`)})].find(n=>n.textContent.trim()===${json(label)});if(!n)throw Error('Missing button: '+${json(label)});const r=n.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
    await mouse(position);
  };
  const park = async (selector, at) => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', ...await point(selector, at) });
    await b.settle();
    await b.evaluate('layerApp.app.wait_for_canvas().then(()=>null)');
    await b.settle(); await b.settle();
  };
  const thumbnails = () => e.wait(`[...document.querySelectorAll('#layer-rows .layer-thumbnail canvas')].filter(c=>c.checkVisibility()&&c.getBoundingClientRect().width>0).every(c=>{const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;for(let i=3;i<d.length;i+=4)if(d[i])return true;return false})`);
  const rightClick = async (selector, at) => {
    await mouse(await point(selector, at), 'right');
    await e.wait(`!!document.querySelector(${json(contextMenu)})`);
    await b.settle();
  };
  const closeContextMenu = async () => {
    if (await e.read(`!!document.querySelector(${json(contextMenu)})`)) await escape();
    await e.wait(`!document.querySelector(${json(contextMenu)})`);
  };
  const menuLabels = selector => e.read(`[...document.querySelectorAll(${json(`${selector} > button`)})].map(n=>n.querySelector('.menu-label')?.textContent??n.textContent)`);
  const openWindowMenu = async page => {
    await press(`${windowMenu} > summary`);
    await e.wait(`document.querySelector(${json(windowMenu)}).open`);
    if (page) {
      const position = await b.evaluate(`(()=>{const n=[...document.querySelectorAll('#workspace-menu > button')].find(n=>n.querySelector('.menu-label')?.textContent===${json(page)});if(!n)throw Error('Missing menu item: '+${json(page)});const r=n.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
      await mouse(position);
      await e.wait(`document.querySelector('#workspace-menu > .submenu-back')?.textContent===${json(page)}`);
    }
    await b.settle();
  };
  const closeWindowMenu = async () => {
    await press(`${windowMenu} > summary`);
    await e.wait(`!document.querySelector(${json(windowMenu)}).open`);
  };
  const undoLayout = async expected => {
    for (let step = 0; step < 10 && await layout() !== expected; step++) {
      await e.invoke('undo_workspace');
      await workspaceReady();
    }
    assert.equal(await layout(), expected, 'Undo Layout Change restores the starting layout');
  };
  const closeManager = async () => {
    if (await e.read(`!!document.querySelector('.workspace-row-menu')?.checkVisibility()`)) await escape();
    await e.wait(`!document.querySelector('.workspace-row-menu')?.checkVisibility()`);
    await pressButton('dialog.workspace-manager footer', 'Cancel');
    await e.wait(`!document.querySelector('dialog.workspace-manager[open]')`);
    await workspaceReady();
  };

  await e.workspace('illustrator');
  if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  await e.provide('04-finished.capy', await readFile(`${examples}/04-finished.capy`));
  await e.load('04-finished.capy');
  await workspaceReady();
  const starting = await layout();
  const transparency = await e.read('layerApp.state().settings.transparency');
  await e.send({ type: 'preferences', action: { type: 'edit', id: 'transparency', value: 0 } });
  await e.wait(`layerApp.state().settings.transparency==='off'`);

  await shoot('panels/window-menu', {
    target: '#workspace-menu',
    setup: async () => {
      await openWindowMenu();
      assert.ok((await menuLabels('#workspace-menu')).includes('Brush size'), 'Window menu lists the panels');
    },
    teardown: closeWindowMenu,
  });

  await shoot('panels/panel-menu', {
    target: contextMenu,
    setup: async () => {
      await rightClick('.dock-tab[data-panel="sizes"]');
      assert.deepEqual(await menuLabels(contextMenu), ['Collapse column', 'Configure Brush size panel…', 'Hide Brush size panel']);
    },
    teardown: closeContextMenu,
  });

  await shoot('panels/group-menu', {
    target: contextMenu,
    setup: async () => {
      await rightClick('.dock-group:has(.dock-tab[data-panel="tool_settings"]) .dock-tabs', 'r.right-30,r.top+10');
      assert.deepEqual(await menuLabels(contextMenu), ['Automatic', 'Icons and active tab name', 'Icons and names', 'Names only', 'Icons only', 'Collapse column', 'Add built-in panel', 'Add Toolbar', 'New Toolbar…']);
    },
    teardown: closeContextMenu,
  });

  await shoot('panels/configure', {
    target: '.dock-group.expanded-panel',
    setup: async () => {
      await e.send({ type: 'customize', action: { type: 'show_all_controls', panel: 'sizes' } });
      await e.wait(`!!document.querySelector('.dock-group.expanded-panel .panel-configuration')`);
    },
    teardown: async () => {
      await escape();
      await e.wait(`!document.querySelector('.dock-group.expanded-panel')`);
    },
  });
  await undoLayout(starting);

  await e.send({ type: 'move_panel', panel: 'color', target: { kind: 'float', position: [700, 260] } });
  await workspaceReady();
  await shoot('panels/floating', { target: '.dock-group.floating-panel', pad: 24 });

  await e.send({ type: 'move_panel', panel: 'layers', target: { kind: 'float', position: [1180, 220] } });
  await workspaceReady();
  await shoot('workspaces/layout-history', {
    target: 'dialog.workspace-manager',
    setup: async () => {
      await openWindowMenu('Workspaces');
      await pressButton('#workspace-menu', 'Layout History…');
      await e.wait(`JSON.parse(layerApp.app.workspace_view()).page==='history' && document.querySelector('dialog.workspace-manager')?.open && document.querySelectorAll('dialog.workspace-manager .workspace-choice').length>1`);
      await b.settle();
      const rows = await e.read(`document.querySelectorAll('dialog.workspace-manager .workspace-choice').length`);
      for (let row = 1; ; row++) {
        assert.ok(row <= rows, 'A layout history entry can be restored');
        const choice = `document.querySelectorAll('dialog.workspace-manager .workspace-choice')[${row - 1}]`;
        const selected = `${choice}.getAttribute('aria-selected')==='true'`;
        if (await e.read(selected)) continue;
        await b.evaluate(`${choice}.scrollIntoView({block:'nearest'});void 0`);
        await b.settle();
        for (let attempt = 1; ; attempt++) {
          await mouse(await e.read(`(r=>({x:r.x+r.width/2,y:r.y+r.height/2}))(${choice}.getBoundingClientRect())`));
          if (await b.until(selected, 3000).then(() => true, () => false)) break;
          assert.ok(attempt < 3, `Layout history entry ${row} can be selected`);
        }
        if (await b.until(`JSON.parse(layerApp.app.workspace_view()).enabled`, 3000).then(() => true, () => false)) break;
      }
    },
    teardown: () => closeManager(),
  });
  await undoLayout(starting);

  const column = () => e.read('layerApp.app.layout(innerWidth,innerHeight).collapsed[0]');
  const closeColumns = async () => {
    if (await e.read('layerApp.app.layout(innerWidth,innerHeight).collapsed.some(c=>c.open)')) await escape();
    await e.wait('!layerApp.app.layout(innerWidth,innerHeight).collapsed.some(c=>c.open)');
  };
  if (!(await column()).open) await press('.collapsed-column .column-tab[data-panel="layers"]');
  await e.wait('!!layerApp.app.layout(innerWidth,innerHeight).collapsed[0].open');
  const strip = await column();
  const left = strip.open.bounds.x, right = strip.bounds.x + strip.bounds.width;
  await shoot('panels/collapsed-column-open', {
    target: { rect: [left, strip.bounds.y, right - left, strip.bounds.height] },
    check: async () => { await thumbnails(); await park('.collapsed-column', 'r.x+r.width/2,r.bottom-120'); },
  });

  await closeColumns();
  await shoot('panels/column-menu', {
    target: contextMenu,
    setup: async () => {
      await rightClick('.collapsed-column', 'r.x+18,r.bottom-40');
      assert.deepEqual(await menuLabels(contextMenu), ['Expand column', 'Open individual panels', 'Auto-hide', 'Apply to all columns']);
    },
    teardown: closeContextMenu,
  });
  await undoLayout(starting);

  await shoot('toolbars/quick-access-menu', {
    target: '#workspace-menu',
    setup: () => openWindowMenu('Quick Access Toolbars'),
    teardown: closeWindowMenu,
  });

  await shoot('toolbars/new-toolbar-picker', {
    target: '#tool-picker',
    setup: async () => {
      await e.send({ type: 'customize', action: { type: 'new_toolbar', group: null } });
      await e.wait(`document.querySelector('#tool-picker').open`);
      await press('#tool-search');
      await b.call('Input.insertText', { text: 'pencil' });
      await e.wait(`document.querySelector('#tool-search').value==='pencil' && document.querySelectorAll('.tool-choice').length>0`);
      await b.settle();
      await press('.tool-choice:first-child');
      await e.wait(`document.querySelector('.tool-choice:first-child input').checked`);
    },
    teardown: async () => {
      await escape();
      await e.wait(`!document.querySelector('#tool-picker').open`);
    },
  });
  assert.equal(await layout(), starting, 'Cancelled New Toolbar leaves the layout');

  await shoot('toolbars/tool-menu', {
    target: contextMenu,
    setup: async () => {
      await rightClick('[data-panel="toolbar"] [data-tile]');
      const labels = await menuLabels(contextMenu);
      assert.deepEqual(labels.slice(-2), ['Remove Tool', 'Insert Tools…']);
    },
    teardown: closeContextMenu,
  });

  await shoot('toolbars/toolbar-menu', {
    target: contextMenu,
    setup: async () => {
      await rightClick('[data-panel="toolbar"] .panel-grip');
      assert.ok((await menuLabels(contextMenu)).includes('Small Tiles'), 'Toolbar menu has the tile sizes');
    },
    teardown: closeContextMenu,
  });

  const configureToolbar = async () => {
    await e.send({ type: 'customize', action: { type: 'show_all_controls', panel: 'toolbar' } });
    await e.wait(`!!document.querySelector('.expanded-panel .panel-configuration')`);
  };
  const closeConfiguration = async () => {
    await escape();
    await e.wait(`!document.querySelector('.expanded-panel')`);
  };
  await configureToolbar();
  const measure = () => b.evaluate(`(()=>{const panel=document.querySelector('.expanded-panel'),box=panel.getBoundingClientRect();const bottom=Math.max(...[...panel.querySelectorAll('[data-tile], .panel-configuration-body > *')].map(n=>n.getBoundingClientRect().bottom));return [box.x,box.y,box.width,bottom+12-box.y]})()`);
  let configured = await measure();
  for (let previous = null; json(previous) !== json(configured);) {
    await new Promise(resolve => setTimeout(resolve, 250));
    [previous, configured] = [configured, await measure()];
  }
  await closeConfiguration();
  await shoot('toolbars/configure', { target: { rect: configured }, setup: configureToolbar, teardown: closeConfiguration });
  await undoLayout(starting);

  await shoot('toolbars/manage', {
    target: '#toolbar-manager',
    setup: async () => {
      await e.send({ type: 'customize', action: { type: 'manage_toolbars' } });
      await e.wait(`document.querySelector('#toolbar-manager').open`);
      await press('.managed-toolbars button[data-panel="commands"]');
      await e.wait(`!document.querySelector('#delete-managed-toolbar').disabled`);
    },
    teardown: async () => {
      await escape();
      await e.wait(`!document.querySelector('#toolbar-manager').open`);
    },
  });

  await shoot('title-bar/editing', {
    target: ['#header', '#header-editor'],
    maxWidth: 1920,
    setup: async () => {
      await e.invoke('customize_workspace_ui');
      await e.wait(`!!document.querySelector('#header-editor')?.checkVisibility()`);
    },
    teardown: async () => {
      await pressButton('#header-editor', 'Cancel');
      await e.wait(`!document.querySelector('#header-editor')?.checkVisibility()`);
    },
  });
  assert.equal(await layout(), starting, 'Cancelled title bar editing leaves the layout');

  await shoot('workspaces/window-menu', {
    target: '#workspace-menu',
    setup: () => openWindowMenu('Workspaces'),
    teardown: closeWindowMenu,
  });

  await shoot('workspaces/show-in-top-bar', {
    target: ['.workspace-switcher', contextMenu],
    setup: async () => {
      await press('.workspace-switcher-options');
      await e.wait(`!!document.querySelector(${json(contextMenu)})`);
      assert.deepEqual(await menuLabels(contextMenu), ['Sketch', 'Paint', 'Photo', 'Manage Workspaces…']);
    },
    teardown: closeContextMenu,
  });

  const builtIn = await e.read('JSON.parse(layerApp.app.workspace_view()).switcher.map(w=>w.id)');
  await e.send({ type: 'workspace_manager', command: { type: 'manage' } });
  await e.wait(`document.querySelector('dialog.workspace-manager')?.open`);
  await press('dialog.workspace-manager .workspace-add');
  await e.wait(`!!document.querySelector('.workspace-form[open] input')`);
  await press('.workspace-form[open] input');
  await b.evaluate(`document.querySelector('.workspace-form[open] input').select()`);
  await b.call('Input.insertText', { text: 'Inking' });
  await b.settle();
  await press('.workspace-form[open] .suggested-action');
  await e.wait(`JSON.parse(layerApp.app.workspace_view()).name==='Inking'`);
  await workspaceReady();
  const inking = await e.read('JSON.parse(layerApp.app.workspace_view()).id');
  assert.ok(!builtIn.includes(inking), 'Inking is a new workspace');
  await e.workspace('illustrator');
  await workspaceReady();
  const inkingRow = `.workspace-row[data-id="${inking}"]`;
  await shoot('workspaces/manage-dialog', {
    target: ['dialog.workspace-manager', '.workspace-row-menu'],
    setup: async () => {
      await e.send({ type: 'workspace_manager', command: { type: 'manage' } });
      await e.wait(`document.querySelector('dialog.workspace-manager')?.open`);
      await press(`${inkingRow} .workspace-options`);
      await e.wait(`!!document.querySelector('.workspace-row-menu')?.checkVisibility()`);
    },
    teardown: () => closeManager(),
  });
  await e.send({ type: 'workspace_manager', command: { type: 'manage' } });
  await e.wait(`document.querySelector('dialog.workspace-manager')?.open`);
  await press(`${inkingRow} .workspace-options`);
  await press('.workspace-row-menu [data-action="delete"]');
  await e.wait(`!!document.querySelector('.workspace-form[open] .destructive-action')`);
  await press('.workspace-form[open] .destructive-action');
  await e.wait(`!JSON.parse(layerApp.app.workspace_view()).switcher.some(w=>w.id===${json(inking)})`);
  await closeManager();
  assert.equal(await e.read('JSON.parse(layerApp.app.workspace_view()).id'), 'builtin:workspace:illustrator');
  await undoLayout(starting);

  await e.send({ type: 'move_panel', panel: 'sizes', target: { kind: 'float', position: [140, 400] } });
  await workspaceReady();
  await e.invoke('zen_mode');
  await e.wait('layerApp.state().workspace.zen_mode');
  await e.invoke('fit_canvas');
  await shoot('zen/zen-canvas', {
    target: { rect: [0, 0, 1920, 1080] }, pad: 0, maxWidth: 1920,
    check: () => park('.dock-group.floating-panel .dock-tabs', 'r.right-60,r.y+r.height/2'),
  });
  await e.invoke('zen_mode');
  await e.wait('!layerApp.state().workspace.zen_mode');
  await e.invoke('fit_canvas');
  await undoLayout(starting);

  await shoot('zen/capy-menu', {
    target: ['#zen-button', contextMenu],
    setup: async () => {
      await rightClick('#zen-button');
      assert.deepEqual(await menuLabels(contextMenu), ['Customize Title Bar…', 'Change icon…']);
    },
    teardown: closeContextMenu,
  });

  const settings = async page => {
    await e.send({ type: 'open_settings', page });
    await e.wait(`document.querySelector('#settings')?.open && document.querySelector('.preferences-page[data-page=${page}]')?.checkVisibility()`);
    await b.evaluate(`document.querySelector('#settings .preferences-pages').scrollTo({top:0,behavior:'instant'})`);
    await b.settle();
  };
  const closeSettings = async () => {
    await e.send({ type: 'close_settings' });
    await e.wait(`!document.querySelector('#settings')?.open`);
  };
  const zenGroup = '#settings section.settings-group:has(.preference-image-tiles)';
  await shoot('zen/preferences', {
    target: zenGroup,
    setup: async () => {
      await settings('appearance');
      await b.evaluate(`document.querySelector(${json(zenGroup)}).scrollIntoView({block:'center'})`);
      await b.settle();
    },
    teardown: closeSettings,
  });

  await e.send({ type: 'preferences', action: { type: 'edit', id: 'transparency', value: ['off', 'low', 'medium', 'high'].indexOf(transparency) } });
  await e.wait(`layerApp.state().settings.transparency===${json(transparency)}`);

  await shoot('preferences/appearance', { target: '#settings', setup: () => settings('appearance'), teardown: closeSettings });

  const search = async () => {
    await settings('appearance');
    await e.send({ type: 'preferences', action: { type: 'search', query: 'cursor' } });
    await e.wait(`document.querySelector('.preferences-sidebar')?.textContent.includes('Hide cursor when painting')`);
  };
  await search();
  const results = await b.evaluate(`(()=>{const bar=document.querySelector('.preferences-sidebar'),box=bar.getBoundingClientRect();const bottom=Math.max(...[...bar.querySelectorAll('button, input')].filter(n=>n.checkVisibility()).map(n=>n.getBoundingClientRect().bottom));return [box.x,box.y,box.width,bottom+16-box.y]})()`);
  await closeSettings();
  await shoot('preferences/search', { target: { rect: results }, setup: search, teardown: closeSettings });

  const darkBase = '[data-preference=dark_base]';
  await shoot('preferences/reset-menu', {
    target: [darkBase, { selector: `${darkBase} .swatch`, all: true }, '#preference-context-menu'],
    setup: async () => {
      await settings('appearance');
      await press(`${darkBase} .swatch[data-swatch="0"]`);
      await e.wait(`layerApp.state().settings.dark_base==='#1f1f1f'`);
      await rightClick(darkBase, 'r.x+120,r.bottom-6');
      await e.wait(`document.querySelector('#preference-context-menu').matches(':popover-open')`);
    },
    teardown: async () => {
      await press('#preference-context-menu button[data-reset="dark_base"]');
      await e.wait(`layerApp.state().settings.dark_base==='#333333' && !document.querySelector('#preference-context-menu').matches(':popover-open')`);
      await closeSettings();
    },
  });

  await shoot('preferences/color', {
    target: '.preferences-page[data-page=color]',
    pad: 0,
    setup: () => settings('color'),
    teardown: closeSettings,
  });

  assert.equal(await layout(), starting, 'Layout is back to where the chapter started');
  await closeColumns();
  assert.equal(await e.read(`!!document.querySelector('dialog[open], :popover-open, details[open]') || layerApp.state().workspace.zen_mode || !!layerApp.app.layout(innerWidth,innerHeight).collapsed.some(c=>c.open)`), false, 'No dialog, menu, drawer or Zen mode is left open');
}
