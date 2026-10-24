export default async function bubbles({ e, b, shoot, example }) {
  const json = JSON.stringify;
  const viewport = () => e.read(`(()=>{const r=document.querySelector('#workspace').getBoundingClientRect();return [r.width,r.height]})()`);
  const view = id => e.read(`layerApp.app.bubbles().find(p=>p.view.id===${id})`);
  const centre = id => e.read(`(()=>{const r=document.querySelector('.tool-bubble[data-bubble="${id}"] .bubble-face').getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]})()`);
  const bubbleAction = action => e.send({ type: 'bubble', action });
  const putBackAll = () => bubbleAction({ type: 'put_back_all' });
  const tap = id => bubbleAction({ type: 'tap', id, position: [0, 0] });
  const choose = async (id, position) => {
    for (const phase of ['down', 'up']) await bubbleAction({ type: 'choose', id, phase, position });
  };
  const chooser = id => `layerApp.app.bubbles().find(p=>p.view.id===${id}).view.chooser`;
  const chooserCenter = (id, kind, label) => e.read(`${chooser(id)}.find(c=>c.kind===${json(kind)}&&(${json(label ?? null)}===null||c.label===${json(label ?? null)}))?.center??null`);
  const takeTile = async (panel, tile, position) => {
    const before = await e.read('layerApp.app.bubbles().map(p=>p.view.id)');
    for (const phase of ['down', 'up']) await bubbleAction({ type: 'drag', grab: { kind: 'tile', panel, tile }, phase, position, viewport: await viewport() });
    const id = await e.read(`layerApp.app.bubbles().find(p=>!${json(before)}.includes(p.view.id))?.view.id ?? null`);
    if (id == null) throw Error(`Bubble taken from toolbar tile ${tile}`);
    await b.settle();
    return id;
  };
  const around = (ids, extra = []) => async () => {
    const list = typeof ids === 'function' ? ids() : ids;
    const selector = list.map(id => `.tool-bubble[data-bubble="${id}"] :is(.bubble-surface,.bubble-band,.bubble-wheel,.color-swatch)`).join(',');
    return { rect: await e.read(`(()=>{
      const boxes=[...document.querySelectorAll(${json(selector)}),...${json(extra)}.flatMap(s=>[...document.querySelectorAll(s)])]
        .filter(n=>n.checkVisibility()).map(n=>{const r=n.getBoundingClientRect(),o=n.classList.contains('bubble-band')?14:0;return[r.left-o,r.top-o,r.right+o,r.bottom+o]})
        .filter(([l,t,r,b])=>r>l&&b>t);
      const l=Math.min(...boxes.map(x=>x[0])),t=Math.min(...boxes.map(x=>x[1])),r=Math.max(...boxes.map(x=>x[2])),bottom=Math.max(...boxes.map(x=>x[3]));
      return [l,t,r-l,bottom-t];
    })()`) };
  };
  const steady = (frames = 30) => `(()=>{
    const key=JSON.stringify([...document.querySelectorAll('.tool-bubble, .tool-bubble *')].map(n=>{const r=n.getBoundingClientRect();return[Math.round(r.x*10),Math.round(r.y*10),Math.round(r.width*10),Math.round(r.height*10),getComputedStyle(n).opacity];}));
    const s=window.__bubbleSteady??={key:'',count:0};s.count=s.key===key?s.count+1:0;s.key=key;return s.count>=${frames};
  })()`;
  const cardThumbnails = `[...document.querySelectorAll('.bubble-card .layer-thumbnail:not(.layer-texture) canvas')].filter(c=>c.checkVisibility()&&c.getBoundingClientRect().width>0).every(c=>c.dataset.previewRevision)`;
  const ready = expression => ({ ready: expression, variant: () => e.wait(expression) });
  const rightClick = async position => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', ...position });
    await b.call('Input.dispatchMouseEvent', { type: 'mousePressed', ...position, button: 'right', buttons: 2, clickCount: 1 });
    await b.call('Input.dispatchMouseEvent', { type: 'mouseReleased', ...position, button: 'right', buttons: 0, clickCount: 1 });
    await b.settle();
  };
  const escape = async () => {
    for (const type of ['keyDown', 'keyUp']) await b.call('Input.dispatchKeyEvent', { type, key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await b.settle();
  };
  const menu = '.panel-context-menu:popover-open';

  await e.provide('04-finished.capy', await example('04-finished.capy'));
  await e.workspace('painter');
  await e.load('04-finished.capy');
  await e.invoke('pencil');
  const [width, height] = await e.read('[layerApp.state().tabs[0].width,layerApp.state().tabs[0].height]');
  const used = ['#3b6f7a', '#c8694a', '#e0b060', '#7d9a8c'];
  for (const [index, color] of used.entries()) {
    await e.setColor(color);
    await e.draw(`M${width * .08} ${height * (.9 + index * .02)} L${width * .2} ${height * (.9 + index * .02)}`);
  }
  for (const _ of used) await e.invoke('undo');
  await e.setColor(used[0]);
  const ribbon = await e.select('Ribbon');
  for (const value of [true, false, true]) await e.layer({ op: 'lock', id: ribbon, value });
  await e.invoke('undo');

  const brush = await e.takeBubble({ kind: 'command', command: 'drawing_brush' }, [730, 420]);
  await tap(brush);
  await e.wait(`${chooser(brush)}.length>0`);
  await choose(brush, await chooserCenter(brush, 'medium', 'Watercolor'));
  await e.wait(`${chooser(brush)}.some(c=>c.kind==='brush')`);
  await choose(brush, await chooserCenter(brush, 'brush'));
  await e.wait(`${chooser(brush)}.length===0`);
  await tap(brush);
  await tap(brush);
  await shoot('bubbles/dial-chooser', { target: around([brush]), pad: 28, ...ready(steady()) });
  await tap(brush);
  await tap(brush);

  const history = await takeTile('toolbar:19', 20, [1030, 420]);
  const controls = await takeTile('toolbar:19', 19, [905, 420]);
  const size = (await view(controls)).view.rings.find(ring => ring.setting === 'size').arc;
  const onSize = fraction => { const angle = (size.start + size.sweep * fraction) * Math.PI / 180; return [size.radius * Math.cos(angle), size.radius * Math.sin(angle)]; };
  await shoot('bubbles/halo-controls', {
    target: around([brush, controls, history]), pad: 28,
    setup: async () => {
      await bubbleAction({ type: 'ring', id: controls, phase: 'down', position: onSize(.55) });
      await e.wait("document.querySelector('#workspace').classList.contains('bubble-dab-active')");
    },
    teardown: () => bubbleAction({ type: 'ring', id: controls, phase: 'up', position: onSize(.55) }),
    ...ready(steady()),
  });
  await putBackAll();

  const color = await e.takeBubble({ kind: 'color' }, [760, 500]);
  for (const kind of ['recent', 'palette', 'pair']) await e.bubbleOption(color, { kind });
  await shoot('bubbles/color-ring', {
    target: around([color], [menu]), pad: 28,
    setup: async () => {
      const [x, y] = await centre(color);
      await rightClick({ x: x + 74, y: y + 78 });
      await e.wait(`!!document.querySelector(${json(menu)})`);
    },
    teardown: async () => {
      await escape();
      await e.wait(`!document.querySelector(${json(menu)})`);
    },
    ...ready(steady()),
  });
  await putBackAll();

  const layers = await e.takeBubble({ kind: 'panel', panel: 'layers' }, [820, 440]);
  await shoot('bubbles/layers-card', { target: around([layers]), pad: 28, ...ready(`${steady()} && ${cardThumbnails}`) });
  await putBackAll();
}
