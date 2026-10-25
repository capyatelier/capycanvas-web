const dialog = 'dialog.document-dialog[open]';
const newDialog = '#new-drawing-dialog[open]';
const button = label => `[...document.querySelectorAll('dialog[open] button')].find(b=>b.textContent===${JSON.stringify(label)})`;
const thumbnailsCurrent = `(()=>{const state=layerApp.state(),epoch=String(state.document_file.epoch),list=document.querySelector('#layer-rows').getBoundingClientRect();
  return state.layers.every(layer=>{const row=document.querySelector('#layer-rows .layer-row[data-layer="'+layer.id+'"]');if(!row)return true;const box=row.getBoundingClientRect();
    if(box.height===0||box.bottom<Math.max(0,list.top)||box.top>innerHeight)return true;const [content,mask]=[...row.querySelectorAll('.layer-thumbnail')].map(b=>b.querySelector('canvas'));
    return (!layer.has_thumbnail||!!layer.fill_color||content?.dataset.previewRevision===epoch+':'+String(layer.paint_revision))&&(!layer.has_mask||mask?.dataset.previewRevision===epoch+':'+String(layer.mask_revision));});})()`;

export default async function files({ e, b, shoot, example }) {
  const press = async label => {
    await e.wait(`!!${button(label)} && !${button(label)}.disabled`);
    await b.evaluate(`${button(label)}.click();void 0`);
    await b.settle();
  };
  const cancel = async () => { await press('Cancel'); await e.wait("!document.querySelector('dialog[open]')"); };
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
  const openNew = async () => {
    await e.invoke('new_document');
    await e.wait(`!!document.querySelector('${newDialog} #new-drawing-width input') && !!layerApp.state().new_drawing`);
    await b.settle();
  };
  const cancelNew = async () => {
    const drawer = await e.read('layerApp.state().new_drawing?.drawer?.kind??null');
    if (drawer) {
      await e.click({ presets: '#new-drawing-browser-cancel', paper: '#new-drawing-paper-cancel', paper_color: '#new-drawing-color-cancel' }[drawer]);
      await e.wait('!layerApp.state().new_drawing?.drawer');
    }
    await e.click('#new-drawing-cancel');
    await e.wait(`!document.querySelector('${newDialog}') && !layerApp.state().new_drawing`);
  };
  const create = async (fields = {}) => {
    const count = await e.read('layerApp.app.document_tabs(0).tabs.length');
    await openNew();
    for (const [key, value] of Object.entries(fields)) {
      if (['width', 'height', 'resolution'].includes(key)) {
        const selector = key === 'resolution' ? '#new-drawing-resolution-field input' : `#new-drawing-${key} input`;
        await b.evaluate(`(()=>{const n=document.querySelector(${JSON.stringify(selector)});n.focus();n.value=String(${JSON.stringify(value)});n.dispatchEvent(new Event('input',{bubbles:true}));n.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));})()`);
      } else {
        const choices = { depth: 'depths', space: 'spaces', unit: 'units' }[key];
        if (!choices) throw Error(`Unsupported New drawing field: ${key}`);
        await b.evaluate(`(()=>{const index=layerApp.state().new_drawing.${choices}.findIndex(choice=>choice.value===${JSON.stringify(value)});if(index<0)throw Error('Missing ${key} choice');const n=document.querySelector('#new-drawing-${key}');n.value=String(index);n.dispatchEvent(new Event('change',{bubbles:true}));})()`);
      }
      await b.settle();
    }
    await e.click('#new-drawing-create');
    await e.wait(`layerApp.app.document_tabs(0).tabs.length===${count + 1} && !layerApp.documents.busy() && !layerApp.state().document_file.busy && !document.querySelector('dialog[open]')`);
    await e.wait('layerApp.app.brush_ready() && layerApp.app.document_park_ready()');
    await e.invoke('fit_canvas');
  };
  const menu = name => ({
    setup: async () => { await e.click(`[data-menu="${name}"] > summary`); await e.wait(`!!document.querySelector('[data-menu="${name}"][open] > .popover')`); },
    teardown: async () => { await e.click(`[data-menu="${name}"] > summary`); await e.wait(`!document.querySelector('[data-menu="${name}"][open]')`); },
  });

  await e.wait(`(()=>{${button('Keep for Later')}?.click();return !document.querySelector('dialog[open]');})()`);
  await e.provide('04-finished.capy', await example('04-finished.capy'));
  await e.workspace('illustrator');
  await restore();
  await e.load('04-finished.capy');

  await shoot('files/new-dialog', {
    target: newDialog,
    setup: openNew,
    teardown: cancelNew,
  });
  const drawer = async (button, kind, selector) => {
    await openNew();
    await e.click(button);
    await e.wait(`layerApp.state().new_drawing?.drawer?.kind===${JSON.stringify(kind)} && document.querySelector(${JSON.stringify(selector)})?.checkVisibility()`);
    await b.settle();
  };
  await shoot('files/new-presets', {
    target: newDialog,
    setup: () => drawer('#new-drawing-presets-button', 'presets', '#new-drawing-presets [data-new-drawing-preset]'),
    teardown: cancelNew,
  });
  await shoot('files/new-paper', {
    target: newDialog,
    setup: () => drawer('#new-drawing-texture', 'paper', '#new-drawing-papers .texture-tile'),
    teardown: cancelNew,
  });
  await shoot('files/new-paper-color', {
    target: newDialog,
    setup: () => drawer('#new-drawing-paper-color', 'paper_color', '#new-drawing-color-drawer .color-editor-body'),
    teardown: cancelNew,
  });

  await create();
  await e.closeOtherDrawings();
  await e.wait(thumbnailsCurrent);
  await shoot('files/new-layers', { target: { selector: '#layer-rows .layer-row', all: true }, pad: 6, ready: thumbnailsCurrent });

  await shoot('files/file-menu', { target: '[data-menu="file"] > .popover', ...menu('file') });

  await shoot('files/download-file', {
    target: dialog,
    setup: async () => {
      await b.evaluate('window.__capturePicker=window.showSaveFilePicker;window.showSaveFilePicker=undefined;void 0');
      await e.invoke('save_document');
      await e.wait(`!!${button('Download')}`);
      await b.settle();
    },
    teardown: async () => {
      await cancel();
      await b.evaluate('window.showSaveFilePicker=window.__capturePicker;void 0');
      await e.wait('!layerApp.state().document_file.busy');
    },
  });

  await create();
  await create();
  await e.layer({ op: 'new', group: false, clipped: false });
  await shoot('files/drawing-tabs', { target: '#drawing-title', maxWidth: 1920 });
  await shoot('files/drawings-list', {
    target: 'dialog.drawing-list',
    setup: async () => { await e.invoke('drawings'); await e.wait("!!document.querySelector('.drawing-list[open]')"); await b.settle(); },
    teardown: async () => { await e.click('.drawing-list header button'); await e.wait("!document.querySelector('.drawing-list[open]')"); },
  });

  await e.load('04-finished.capy');
  await shoot('files/export-dialog', {
    target: dialog,
    setup: async () => { await e.exportDialog(); await e.wait(`!!document.querySelector('dialog[open] select[aria-label="Destination"]')`); },
    teardown: cancel,
  });

  await create({ depth: 'F16', unit: 'px', width: 2048, height: 1536 });
  await e.closeOtherDrawings();
  await e.invoke('pen');
  await e.brush(1, 60, '#2a9d8f');
  await e.draw('M500 500 C800 300 1200 700 1550 450', { pressure: .8 });
  await e.setColor('#f2a541');
  await e.draw('M500 1000 C800 800 1200 1200 1550 950', { pressure: .8 });
  const dialogAtEnd = `(d=>d.scrollTop+d.clientHeight>=d.scrollHeight-1)(document.querySelector('${dialog}'))`;
  const scrollDialogToEnd = async () => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseWheel', x: 960, y: 540, deltaX: 0, deltaY: 2000 });
    await e.wait(dialogAtEnd);
    await b.settle();
  };
  const previewOutput = async () => {
    await e.exportDialog();
    await e.wait(`!!document.querySelector('dialog[open] [aria-label="Dynamic range"]')`);
    await b.evaluate(`(()=>{const s=document.querySelector('dialog[open] [aria-label="Dynamic range"]');s.value='jpeg';s.dispatchEvent(new Event('change',{bubbles:true}));})()`);
    await b.settle();
    await press('Preview Output');
    await e.wait("document.querySelectorAll('dialog[open] .color-comparison figure').length===2");
    await b.settle();
    await scrollDialogToEnd();
    await e.wait(`(d=>d.scrollTop>0)(document.querySelector('${dialog}'))`);
  };
  const previewRect = () => e.read(`(()=>{const d=document.querySelector('${dialog}').getBoundingClientRect(),l=document.querySelector('${dialog} .color-comparison').previousElementSibling;if(!l?.querySelector('select'))throw Error('Preview rendition control missing');const top=l.getBoundingClientRect().top-4;return [d.left,top,d.width,d.bottom-top];})()`);
  await shoot('files/export-hdr-preview', {
    target: async () => ({ rect: await previewRect() }),
    setup: previewOutput,
    variant: async () => { if (!await e.read(dialogAtEnd)) await scrollDialogToEnd(); },
    teardown: cancel,
  });

  await e.load('04-finished.capy');
}
