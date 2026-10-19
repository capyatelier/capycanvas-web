import assert from 'node:assert/strict';

export const releaseMaterials = [
  { id: 'charcoal', brush: 27, name: 'Charcoal', paper: 'unryu', paperName: 'Unryu', size: 200, color: '#302e2c', paperColor: '#f4f0e8' },
  { id: 'pastel', brush: 17, name: 'Pastel Block', paper: 'sanded_pastel', paperName: 'Sanded', size: 140, color: '#bc624c', paperColor: '#f1ede7' },
  { id: 'pencil', brush: 25, name: 'Pointy Pencil', paper: 'handmade_paper', paperName: 'Handmade', size: 25, color: '#3b4240', paperColor: '#f5f3ed' },
  { id: 'crayon', brush: 43, name: 'Crayon', paper: 'linen', paperName: 'Linen', size: 100, color: '#657f49', paperColor: '#f0eee5' },
];

export async function setPaper(e, id, { scale = 1, relief = 35, through = 100, color } = {}) {
  const active = await e.active();
  await e.select('Paper');
  const layer = await e.active();
  const choices = await e.read('layerApp.state().layer_properties.controls.find(c=>c.key==="texture").paper.tiles');
  const index = choices.findIndex(choice => choice.id === id);
  assert.ok(index >= 0, `Paper exists: ${id}`);
  const value = (key, kind, value) => e.send({ type: 'effect', action: { op: 'set', layer, key, value: { kind, value } } });
  await value('texture', 'choice', index);
  await value('scale', 'number', scale);
  await value('relief', 'number', relief);
  await value('through_paint', 'number', through);
  if (color) await value('color', 'color', { space: 'Srgb', rgba: [...color.match(/[\da-f]{2}/gi).map(byte => parseInt(byte, 16) / 255), 1] });
  await e.layer({ op: 'select', id: active, mask: false });
  await e.canvas();
  return layer;
}

export async function materialScene(e, material) {
  const extent = material.id === 'pastel' ? [800, 1400] : [1600, 1000];
  await e.newDocument(...extent, { paper: material.paper, name: `${material.name} on ${material.paperName}` });
  await setPaper(e, material.paper, { scale: material.id === 'pencil' ? 1.4 : 1, relief: 45, color: material.paperColor });
  if (!await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  await e.frame(Math.min(1440 / extent[0], 840 / extent[1]), extent.map(value => value / 2));
  await e.brush(material.brush, material.size, material.color);
  await e.send({ type: 'set_tool_setting', id: 'smoothing_strength', value: 0 });
  const line = async (path, pressure, tilt = 0) => {
    const points = await e.path(path);
    await e.stroke(points.map(([x, y]) => [x * extent[0] / 1600, y * extent[1] / 1000]), { pressure, tiltX: tilt, tiltY: tilt ? 12 : 0, settleEvery: 6 });
  };
  const ramp = (low, high) => t => low + (high - low) * Math.sin(Math.PI * t) ** .8;
  if (material.id === 'charcoal') {
    await line('M180 305 C390 115 605 145 760 355 S1110 675 1390 405', ramp(.009, .22), 53);
    await line('M210 605 C455 385 665 450 825 670 S1175 870 1380 650', ramp(.015, .1), 62);
    await e.send({ type: 'set_brush_size', value: 85 });
    await line('M330 780 C520 760 675 865 845 795', ramp(.008, .04), 23);
  } else if (material.id === 'pastel') {
    await line('M260 230 C570 195 1060 130 1340 230', ramp(.005, .04), 50);
    await line('M225 390 C550 355 1070 300 1365 355', ramp(.07, .3), 56);
    await e.setColor('#4f858a');
    await line('M380 690 C440 495 650 325 850 355 S1130 625 1200 805', ramp(.02, .21), 50);
    await e.setColor('#d7ab56');
    await e.send({ type: 'set_brush_size', value: 130 });
    await line('M235 805 C500 695 840 765 1100 630', ramp(.01, .16), 45);
  } else if (material.id === 'pencil') {
    for (let i = 0; i < 13; i++) {
      const x = 300 + i * 67, y = 350 + Math.sin(i * .4) * 70;
      await line(`M${x} ${y + 275} Q${x + 45} ${y + 140} ${x + 155} ${y - 40}`, .018 + i * .014, 5);
    }
    await e.send({ type: 'set_brush_size', value: 85 });
    await line('M210 260 C440 80 700 200 895 305 S1230 385 1390 210', ramp(.008, .15), 60);
    await e.send({ type: 'set_brush_size', value: 18 });
    await line('M265 780 C545 630 845 810 1350 630', ramp(.04, .23), 10);
  } else {
    await line('M260 345 C240 130 550 120 610 340 S520 625 360 575 S335 300 650 275 S1135 285 1340 175', ramp(.015, .2), 42);
    await line('M255 765 Q560 430 820 675 T1380 625', ramp(.008, .14), 52);
    await e.setColor('#c49b43');
    await e.send({ type: 'set_brush_size', value: 80 });
    for (let i = 0; i < 6; i++) await line(`M${830 + i * 60} 390 l-80 180`, .02 + i * .025, 20);
  }
  await e.canvas();
  return { material, extent, camera: await e.read('layerApp.state().camera') };
}
