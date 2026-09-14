// Original teaching fixture, described as paths and drawn with real browser pen
// input. SVG is used only to sample the path coordinates, never as canvas artwork.
// Every colored region is a real selection/fill or a masked paint layer.
export const shapes = {
  hair: 'M399 775 C325 703 326 560 342 425 C347 264 428 174 572 162 C727 144 824 241 849 378 C871 496 870 686 800 778 L714 822 L466 820 Z',
  skin: 'M440 414 C510 397 569 363 604 312 C639 376 704 428 766 448 C779 544 761 623 716 680 L693 706 L692 802 C671 868 541 862 511 802 L510 709 C461 665 434 590 435 506 Z',
  clothing: 'M449 792 L508 769 C549 819 658 830 699 769 L754 794 C891 826 952 926 972 1070 L233 1070 C250 927 312 832 449 792 Z',
  scarf: 'M483 768 C540 814 658 824 713 770 L746 826 C687 868 539 866 459 820 Z',
};
export const ink = [
  shapes.hair, shapes.clothing, shapes.skin, shapes.scarf,
  'M449 525 Q486 504 526 520', 'M653 520 Q694 502 734 522',
  'M459 552 Q489 576 519 551', 'M663 551 Q695 578 724 550',
  'M489 554 L489 566', 'M694 554 L694 566',
  'M593 543 L579 604 Q591 614 607 603',
  'M561 649 Q597 667 632 644',
  'M527 703 Q607 761 685 706',
  'M404 329 C372 458 372 607 408 679',
  'M748 281 C804 372 819 518 796 642',
  'M397 841 L443 979 L405 1070', 'M804 846 L760 979 L803 1070',
  'M456 852 L530 927 L597 863 L671 931 L746 850',
  'M597 865 L597 1070', 'M528 929 L524 1059',
  'M302 990 L398 995', 'M813 995 L909 984',
];
const colors = { hair: '#534754', skin: '#eec0a0', clothing: '#668e8d', ink: '#38353e', scarf: '#d6a25f' };

export async function illustration(e, record, directory) {
  await e.newDocument(1200, 1200);
  const initial = await e.active();
  await e.layer({ op: 'rename', id: initial, name: 'Color rough' });
  // Simple colored regions establish a color study below the pencil sketch.
  for (const [name, shape] of Object.entries(shapes)) {
    await e.brush(4, 80, colors[name], .5);
    await e.layer({ op: 'tool', tool: 'lasso_fill' }); await e.draw(shape);
  }
  await e.add('Sketch'); await e.brush(2, 9, '#66777c', .85);
  for (const d of ink) await e.draw(d, { taper: true });
  // Construction lines make the sketch stage visually distinct from the ink.
  await e.brush(2, 6, '#849b9c', .5);
  await e.draw('M602 240 C587 390 587 542 598 697');
  await e.draw('M408 527 Q601 494 786 529');
  await e.draw('M300 843 Q601 735 898 846');
  await e.save('01-sketch.capy', directory);
  await record('illustration-draft', [
    { selector: '.tool-subtools' }, { selector: '#layer-rows' }, { selector: '.tool-settings-control' },
  ]);

  await e.visible('Color rough', false);
  await e.send({ type: 'set_layer_opacity', opacity: .22 });
  await e.add('Line art'); await e.brush(1, 6.5, colors.ink);
  for (const d of ink) await e.draw(d, { pressure: .7, taper: true });
  await e.save('02-line-art.capy', directory);
  await record('illustration-ink', [{ selector: '#layer-rows' }, { selector: '.navigator-buttons' }, { selector: '.tool-subtools' }]);

  await e.visible('Sketch', false);
  // Build masks from lasso selections, then fill the entire underlying layer.
  // This retains paint behind the mask, so later mask edits can reveal it.
  await e.select('Sketch');
  for (const [name, key] of [['Clothing', 'clothing'], ['Hair', 'hair'], ['Skin', 'skin']]) {
    await e.add(name); await e.brush(4, 40, colors[key]);
    await e.lasso(shapes[key]);
    await e.layer({ op: 'mask_selection', id: await e.active(), hide: false });
    await e.select(name); await e.invoke('select_all'); await e.invoke('fill_selection'); await e.invoke('deselect');
  }
  // Scarf is part of Clothing, bounded by its own lasso fill within that layer.
  await e.select('Clothing'); await e.brush(4, 30, colors.scarf);
  await e.layer({ op: 'tool', tool: 'lasso_fill' }); await e.draw(shapes.scarf);
  await e.select('Hair', true); await e.brush(1, 20, '#ffffff');
  await e.save('03-base-colors.capy', directory);
  await record('illustration-mask', [{ selector: '.layer-thumbnail.editing-target' }, { selector: '#layer-rows' }, { selector: '.color-panel' }]);

  await e.select('Hair'); await e.add('Hair shading', { clipped: true });
  await e.brush(4, 75, '#383744', .65);
  for (const d of ['M368 427 C327 617 361 717 474 794', 'M782 280 C866 422 858 662 780 765', 'M487 759 Q600 837 731 763']) await e.draw(d, { taper: true });
  await e.add('Hair texture', { clipped: true }); await e.brush(2, 15, '#a88881', .65);
  for (const d of ['M443 260 C392 339 378 463 392 542', 'M460 243 C409 320 397 399 400 434', 'M686 212 C763 250 793 347 801 388', 'M717 239 C749 271 765 310 775 345']) await e.draw(d, { taper: true });
  await e.select('Skin'); await e.add('Skin shading', { clipped: true }); await e.brush(5, 95, '#c57d72', .32);
  for (const d of ['M446 590 Q479 625 516 606', 'M671 606 Q709 625 750 588', 'M506 719 Q595 779 695 709']) await e.draw(d, { taper: true });
  await e.select('Clothing'); await e.add('Clothing shading', { clipped: true }); await e.brush(4, 65, '#3d676e', .48);
  for (const d of ['M314 898 Q329 1002 339 1104', 'M880 895 Q860 1019 864 1116', 'M465 967 L449 1095', 'M732 972 L752 1096']) await e.draw(d, { taper: true });
  await e.select('Hair shading'); await e.brush(4, 50, '#383744', .65);
  await e.save('04-finished.capy', directory);
  await e.save('character.png', directory);
  await record('illustration-render', [{ selector: '#layer-rows' }, { selector: '.layer-flags' }, { selector: '#layer-opacity' }]);
  await record('illustration', []);
}
