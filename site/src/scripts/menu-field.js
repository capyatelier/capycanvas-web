export function setMenuValue(menu, value) {
  menu.dataset.value = value;
  const options = [...menu.querySelectorAll('[role=option]')];
  for (const option of options) option.setAttribute('aria-selected', String(option.dataset.value === value));
  const selected = options.find(option => option.dataset.value === value);
  if (selected) menu.querySelector('.menu-field-current').replaceChildren(...[...selected.children].map(node => node.cloneNode(true)));
}

export function initMenuField(menu, choose) {
  const doc = menu.ownerDocument;
  const summary = menu.querySelector('summary');
  const list = menu.querySelector('[role=listbox]');
  const options = () => [...list.querySelectorAll('[role=option]')];
  const close = () => { menu.open = false; summary.focus(); };
  list.addEventListener('click', event => {
    const option = event.target.closest('[role=option]');
    if (!option) return;
    choose(option.dataset.value);
    close();
  });
  menu.addEventListener('toggle', () => {
    if (!menu.open) return;
    const all = options();
    for (const option of all) option.tabIndex = option.getAttribute('aria-selected') === 'true' ? 0 : -1;
    (all.find(option => option.tabIndex === 0) ?? all[0])?.focus();
  });
  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) { event.preventDefault(); close(); return; }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (!menu.open) { menu.open = true; return; }
    const all = options();
    const current = all.indexOf(doc.activeElement);
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? all.length - 1
      : (current + (event.key === 'ArrowDown' ? 1 : -1) + all.length) % all.length;
    for (const option of all) option.tabIndex = -1;
    all[index].tabIndex = 0;
    all[index].focus();
  });
  menu.addEventListener('focusout', event => { if (!menu.contains(event.relatedTarget)) menu.open = false; });
  doc.addEventListener('click', event => { if (!menu.contains(event.target)) menu.open = false; });
}
