import { initMenuField, setMenuValue } from './menu-field.js';

export function detectPlatform(platform: string, userAgent: string, touchPoints: number) {
  if (/iPad|iPhone|iPod/.test(userAgent) || (/Mac/.test(platform) && touchPoints > 1)) return 'ipad';
  if (/Android/.test(userAgent)) return 'android';
  if (/CrOS/.test(userAgent)) return 'all';
  if (/Win/.test(platform)) return 'windows';
  if (/Mac/.test(platform)) return 'mac';
  if (/Linux/.test(platform)) return 'linux';
  return 'all';
}

export function initPlatformNotes() {
  const picker = document.querySelector<HTMLDetailsElement>('.docs-platform');
  if (!picker) return;
  let saved: string | null = null;
  try { saved = localStorage.getItem('capycanvas.docs.platform'); } catch { /* Detection works without storage. */ }
  const valid = Array.from(picker.querySelectorAll<HTMLElement>('[role=option]'), option => option.dataset.value);
  const update = (value: string) => {
    setMenuValue(picker, value);
    document.querySelectorAll<HTMLElement>('[data-doc-platform]').forEach(section => {
      section.hidden = value !== 'all' && value !== section.dataset.docPlatform;
    });
  };
  update(saved && valid.includes(saved) ? saved : detectPlatform(navigator.platform, navigator.userAgent, navigator.maxTouchPoints));
  picker.hidden = false;
  initMenuField(picker, (value: string) => {
    update(value);
    try { localStorage.setItem('capycanvas.docs.platform', value); } catch { /* The picker works without storage. */ }
  });
}
