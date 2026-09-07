// Only the language preference is stored. No analytics, cookies, or network calls.
(() => {
  const supported = ['en', 'ja', 'zh', 'ko'];
  const key = 'capycanvas.language';
  const current = document.documentElement.dataset.locale;
  const page = document.documentElement.dataset.page;
  const route = locale => `${locale === 'en' ? '' : '/' + locale}/${page === 'home' ? '' : page + '/'}`;
  let saved;
  try { saved = localStorage.getItem(key); } catch { /* Storage can be disabled. */ }
  if (!supported.includes(saved)) saved = null;
  // Explicit translated URLs always win. Only unprefixed entry pages auto-detect.
  // ?lang=en makes an explicit English choice shareable even without storage.
  if (page !== '404' && current === 'en') {
    const query = new URLSearchParams(location.search).get('lang');
    const requested = supported.includes(query) ? query : null;
    const detected = (navigator.languages || [navigator.language])
      .map(value => value.toLowerCase().split(/[-_]/)[0])
      .find(value => supported.includes(value)) || 'en';
    const locale = requested || saved || detected;
    if (locale !== current) location.replace(route(locale) + location.search + location.hash);
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-language]').forEach(link => {
      link.addEventListener('click', () => {
        try { localStorage.setItem(key, link.dataset.language); } catch { /* Links work without storage. */ }
      });
    });
    document.querySelectorAll('.language-menu').forEach(menu => {
      document.addEventListener('click', event => { if (!menu.contains(event.target)) menu.open = false; });
      menu.addEventListener('keydown', event => {
        if (event.key === 'Escape') { menu.open = false; menu.querySelector('summary').focus(); }
      });
    });
  });
})();
