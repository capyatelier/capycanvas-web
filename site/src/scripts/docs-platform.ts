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
  const picker = document.querySelector<HTMLSelectElement>('.docs-platform');
  if (!picker) return;
  let saved: string | null = null;
  try { saved = localStorage.getItem('capycanvas.docs.platform'); } catch { /* Detection works without storage. */ }
  const valid = Array.from(picker.options, option => option.value);
  picker.value = saved && valid.includes(saved) ? saved : detectPlatform(navigator.platform, navigator.userAgent, navigator.maxTouchPoints);
  const update = () => {
    document.querySelectorAll<HTMLElement>('[data-doc-platform]').forEach(section => {
      section.hidden = picker.value !== 'all' && picker.value !== section.dataset.docPlatform;
    });
  };
  update();
  picker.hidden = false;
  picker.addEventListener('change', () => {
    update();
    try { localStorage.setItem('capycanvas.docs.platform', picker.value); } catch { /* The picker works without storage. */ }
  });
}
