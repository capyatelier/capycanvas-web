import { readFile } from 'node:fs/promises';

const fullWindow = { rect: [0, 0, 1920, 1080] };
const group = panel => `.dock-group:has(.dock-tab[data-panel="${panel}"])`;
const thumbnailsCurrent = `(()=>{const state=layerApp.state(),epoch=String(state.document_file.epoch),list=document.querySelector('#layer-rows').getBoundingClientRect();
  return state.layers.every(layer=>{const row=document.querySelector('#layer-rows .layer-row[data-layer="'+layer.id+'"]');if(!row)return true;const box=row.getBoundingClientRect();
    if(box.height===0||box.bottom<Math.max(0,list.top)||box.top>innerHeight)return true;const [content,mask]=[...row.querySelectorAll('.layer-thumbnail')].map(b=>b.querySelector('canvas'));
    return (!layer.has_thumbnail||content?.dataset.previewRevision===epoch+':'+String(layer.paint_revision))&&(!layer.has_mask||mask?.dataset.previewRevision===epoch+':'+String(layer.mask_revision));});})()`;
const commandTiles = (...ids) => ({ selector: `.toolbar-controls[data-panel="commands"] > [data-tile]:has(${ids.map(id => `> [data-command="${id}"]`).join(', ')})`, union: true, all: true });

export default async function start({ e, b, shoot, examples }) {
  const key = async (key, code = key, windowsVirtualKeyCode = 27) => {
    for (const type of ['keyDown', 'keyUp']) await b.call('Input.dispatchKeyEvent', { type, key, code, windowsVirtualKeyCode });
    await b.settle();
  };
  const escape = () => key('Escape');
  const restore = async () => {
    if (await e.read("layerApp.state().commands.find(c=>c.id==='reset_layout').enabled")) {
      await e.invoke('reset_layout');
      await e.wait("!!document.querySelector('.workspace-form[open] .suggested-action')");
      await e.click('.workspace-form[open] .suggested-action');
      await e.wait("!document.querySelector('.workspace-form[open]') && !JSON.parse(layerApp.app.workspace_view()).busy");
    }
    if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
    await b.settle();
  };
  const fresh = async () => {
    await e.newDocument(2048, 1536);
    await e.wait('!layerApp.state().document_file.modified');
  };
  const search = async (text, first) => {
    await e.invoke('search_commands');
    await e.wait("document.querySelector('#command-bar')?.open && document.activeElement?.id === 'command-search'");
    if (!text) return b.settle();
    await b.call('Input.insertText', { text });
    await e.wait(`layerApp.state().command_search.results[0]?.id === ${JSON.stringify(first)}`);
    await b.settle();
  };
  const closeSearch = async () => {
    await e.send({ type: 'command_search', action: { type: 'close' } });
    await e.wait("!document.querySelector('#command-bar')?.open");
  };

  await e.wait(`(()=>{[...document.querySelectorAll('dialog[open] button')].find(b=>b.textContent==='Keep for Later')?.click();return !document.querySelector('dialog[open]');})()`);
  await e.provide('04-finished.capy', await readFile(`${examples}/04-finished.capy`));
  await e.provide('terrarium.jpg', await readFile('site/scripts/capture/photo/terrarium.jpg'));

  await e.workspace('illustrator');
  await fresh();
  await e.layer({ op: 'new', group: false, clipped: false });
  await shoot('start/command-search-suggestions', {
    target: '#command-bar',
    setup: () => search(), teardown: closeSearch,
  });
  await fresh();
  await shoot('start/command-search-unavailable', {
    target: '#command-bar',
    setup: () => search('undo', 'command.undo'), teardown: closeSearch,
  });
  await e.invoke('pen');
  await shoot('start/command-search-typed-value', {
    target: '#command-bar',
    setup: async () => {
      await search('brush size', 'tool_setting.size');
      await key('Enter', 'Enter', 13);
      await e.wait("layerApp.state().command_search.parameter?.id === 'tool_setting.size' && !!document.querySelector('#command-bar .command-unit')?.textContent");
    },
    teardown: closeSearch,
  });

  await e.workspace('painter');
  await restore();
  await e.load('04-finished.capy');
  await e.invoke('pen');
  await shoot('start/workspaces-sketch', {
    target: fullWindow, pad: 0, maxWidth: 1920,
    check: async () => { await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 1300, y: 30 }); await b.settle(); await b.settle(); },
    callouts: [
      { selector: '#header .header-item:has(~ .header-item[data-kind="workspaces"])', union: true, badge: 'below' },
      { selector: '#header .workspace-switcher', badge: 'below' },
      { selector: '#header .header-item[data-kind="workspaces"] ~ .header-item', union: true, badge: 'below' },
      { selector: '.toolbar-controls[data-panel^="toolbar:"]' },
    ],
  });

  await e.workspace('illustrator');
  await restore();
  if (!await e.read(`!!document.querySelector('${group('layers')}')?.checkVisibility()`)) await e.click('.collapsed-column .column-tab[data-panel="layers"]');
  await e.wait(`['navigator','properties','layers'].every(panel=>document.querySelector('.dock-group:has(.dock-tab[data-panel="'+panel+'"])')?.checkVisibility())`);
  await e.invoke('fit_canvas');
  await e.wait(thumbnailsCurrent);
  await shoot('start/workspaces-paint', {
    target: fullWindow, pad: 0, maxWidth: 1920, ready: thumbnailsCurrent,
    callouts: [
      { selector: '#header' },
      { selector: '.toolbar-controls[data-panel="commands"]', badge: 'below' },
      { selector: '.toolbar-controls[data-panel="toolbar"]', badge: 'below' },
      { selector: ['brushes', 'tool_settings', 'color'].map(group).join(', '), union: true, badge: 'right' },
      { selector: ['.collapsed-column', ...['navigator', 'properties', 'layers'].map(group)].join(', '), union: true, badge: 'left' },
      { selector: '#canvas-status', badge: 'inside' },
    ],
  });

  await shoot('start/workspaces-switcher', { target: '#header .workspace-switcher' });
  await shoot('start/workspaces-switcher-options', {
    target: ['.panel-context-menu:popover-open', '#header .workspace-switcher'],
    setup: async () => { await e.click('.workspace-switcher-options'); await e.wait("!!document.querySelector('.panel-context-menu:popover-open')"); },
    teardown: async () => { await escape(); await e.wait("!document.querySelector('.panel-context-menu:popover-open')"); },
  });

  await shoot('start/canvas-view-menu', {
    target: '[data-menu="view"] > .popover',
    setup: async () => { await e.click('[data-menu="view"] > summary'); await e.wait("!!document.querySelector('[data-menu=view][open] .popover')"); },
    teardown: async () => { await e.click('[data-menu="view"] > summary'); await e.wait("!document.querySelector('[data-menu=view][open]')"); },
  });

  await e.invoke('fit_canvas');
  await shoot('start/canvas-zoom-menu', {
    target: ['.zoom-menu', '#view-info'], pad: 24,
    setup: async () => { await e.click('#view-info'); await e.wait("document.querySelector('.zoom-menu')?.checkVisibility()"); },
    teardown: async () => { await escape(); await e.wait("!document.querySelector('.zoom-menu')?.checkVisibility()"); },
  });

  await e.show('navigator');
  await e.send({ type: 'set_zoom', zoom: 4 });
  await e.send({ type: 'set_rotation', rotation: 0.4 });
  await shoot('start/canvas-navigator', { target: group('navigator') });
  await e.send({ type: 'set_rotation', rotation: 0 });
  await e.invoke('fit_canvas');

  const layer = (await e.read('layerApp.state().layers')).find(row => row.label === 'Sketch');
  await e.layer({ op: 'visibility', id: layer.id, value: !layer.visible });
  await e.layer({ op: 'visibility', id: layer.id, value: layer.visible });
  await shoot('start/undo-commands', { target: commandTiles('new_document', 'flip_horizontal') });

  await e.workspace('photographer');
  await restore();
  await e.open('terrarium.jpg');
  await e.invoke('move');
  await e.wait("layerApp.state().histogram.status === 'Exact' && layerApp.state().histogram.data != null");
  await e.wait(thumbnailsCurrent);
  await shoot('start/workspaces-photo', {
    target: fullWindow, pad: 0, maxWidth: 1920, ready: thumbnailsCurrent,
    callouts: [
      { ...commandTiles('new_document', 'scale_rotate'), badge: 'below' },
      { selector: '.toolbar-controls[data-panel="commands"] > [data-toolbar-component="tool_options"]', badge: 'below' },
      { selector: '.toolbar-controls[data-panel="toolbar"]', badge: 'below' },
      { selector: ['histogram', 'properties', 'layers'].map(group).join(', '), union: true },
      { selector: '.collapsed-column:has(.column-tab[data-panel="brushes"])', badge: 'left' },
    ],
  });

  await e.workspace('illustrator');
  await e.load('04-finished.capy');
}
