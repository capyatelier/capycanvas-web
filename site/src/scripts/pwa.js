// These hints choose instructions only. Browsers expose no cross-origin API for
// checking whether the editor can be installed. Keep manual selection available.
export const installOptions = {
  windows: { chrome: 'desktop', edge: 'desktop', firefox: 'firefoxWindows' },
  macos: { safari: 'mac', chrome: 'desktop', edge: 'desktop' },
  linux: { chrome: 'desktop', edge: 'desktop' },
  chromeos: { chrome: 'desktop' },
  android: { chrome: 'android', firefox: 'firefoxAndroid' },
  ios: { safari: 'safari', chrome: 'chromeIos' },
  other: { other: 'generic' }
};

export function detectInstallGuide({ userAgent = '', platform = '', maxTouchPoints = 0, userAgentData } = {}) {
  const ua = userAgent;
  const os = userAgentData?.platform || platform;
  const ios = /iPad|iPhone|iPod/.test(ua) || (/Mac/.test(os || ua) && maxTouchPoints > 1);
  const android = /Android/i.test(os) || /Android/.test(ua);
  const firefox = /Firefox\//.test(ua);
  const chromium = /Chrome\/|Chromium\/|Edg\//.test(ua) || userAgentData?.brands?.some(b => /Chromium|Google Chrome|Microsoft Edge/.test(b.brand));
  const otherChromium = /OPR\/|SamsungBrowser\/|Vivaldi\/|; wv\)|EdgA\//.test(ua);
  const safari = /Version\/[\d.]+.*Safari\//.test(ua) && !chromium && !/FxiOS\/|EdgiOS\/|OPiOS\//.test(ua);
  const system = ios ? 'ios' : android ? 'android'
    : /Windows|Win32|Win64/.test(os + ua) ? 'windows'
    : /CrOS|Chrome OS/.test(os + ua) ? 'chromeos'
    : /Mac/.test(os + ua) ? 'macos'
    : /Linux/.test(os + ua) ? 'linux' : 'other';
  const edge = /Edg\//.test(ua) || userAgentData?.brands?.some(b => b.brand === 'Microsoft Edge');
  const result = (guide, fallback = '') => {
    const browser = guide === 'desktop' && edge && installOptions[system].edge ? 'edge'
      : { desktop: 'chrome', android: 'chrome', safari: 'safari', chromeIos: 'chrome', mac: 'safari', firefoxWindows: 'firefox', firefoxAndroid: 'firefox', generic: 'other' }[guide];
    return { os: system, browser, guide, fallback };
  };
  if (ios) {
    if (/CriOS\//.test(ua)) return result('chromeIos');
    return safari ? result('safari') : result('safari', 'safari');
  }
  if (android) {
    if (firefox) return result('firefoxAndroid');
    return chromium && !otherChromium ? result('android') : result('android', 'chrome');
  }
  if (/Windows|Win32|Win64/.test(os + ua) && firefox && Number(ua.match(/Firefox\/(\d+)/)?.[1]) >= 143) return result('firefoxWindows');
  if (/Mac/.test(os + ua) && safari && Number(ua.match(/Version\/(\d+)/)?.[1]) >= 17) return result('mac');
  if (/Windows|Win32|Win64|Mac|Linux|CrOS|Chrome OS/.test(os + ua)) return chromium && !otherChromium ? result('desktop') : result('desktop', 'chrome');
  return result('generic');
}

export function initInstallGuide(doc, browser) {
  const section = doc.querySelector('.pwa');
  if (!section) return;
  const osMenu = section.querySelector('#pwa-os');
  const osSummary = osMenu.querySelector('summary');
  const osOptions = [...osMenu.querySelectorAll('[data-os]')];
  const browserSelect = section.querySelector('#pwa-browser');
  const labels = Object.fromEntries([...browserSelect.options].map(option => [option.value, option.textContent]));
  const detected = detectInstallGuide(browser);
  function show(system, preferredBrowser, fallback = '') {
    const options = installOptions[system] || installOptions.other;
    const browser = options[preferredBrowser] ? preferredBrowser : Object.keys(options)[0];
    const guide = options[browser];
    osMenu.dataset.value = system;
    for (const option of osOptions) option.setAttribute('aria-selected', String(option.dataset.os === system));
    const selected = osOptions.find(option => option.dataset.os === system);
    section.querySelector('#pwa-os-current').replaceChildren(...[...selected.children].map(node => node.cloneNode(true)));
    browserSelect.replaceChildren(...Object.keys(options).map(value => {
      const option = doc.createElement('option');
      option.value = value;
      option.textContent = labels[value];
      return option;
    }));
    browserSelect.value = browser;
    for (const block of section.querySelectorAll('[data-pwa-guide]')) block.hidden = block.dataset.pwaGuide !== guide;
    for (const note of section.querySelectorAll('[data-pwa-fallback]')) note.hidden = note.dataset.pwaFallback !== fallback;
  }
  show(detected.os, detected.browser, detected.fallback);
  section.querySelector('.pwa-browser').hidden = false;
  const close = () => { osMenu.open = false; osSummary.focus(); };
  for (const option of osOptions) option.addEventListener('click', () => {
    show(option.dataset.os, browserSelect.value);
    close();
  });
  osMenu.addEventListener('toggle', () => {
    if (osMenu.open) {
      for (const option of osOptions) option.tabIndex = option.getAttribute('aria-selected') === 'true' ? 0 : -1;
      osOptions.find(option => option.tabIndex === 0).focus();
    }
  });
  osMenu.addEventListener('keydown', event => {
    if (event.key === 'Escape' && osMenu.open) { event.preventDefault(); close(); return; }
    if (!['ArrowDown','ArrowUp','Home','End'].includes(event.key)) return;
    event.preventDefault();
    if (!osMenu.open) { osMenu.open = true; return; }
    const current = osOptions.indexOf(doc.activeElement);
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? osOptions.length - 1
      : (current + (event.key === 'ArrowDown' ? 1 : -1) + osOptions.length) % osOptions.length;
    for (const option of osOptions) option.tabIndex = -1;
    osOptions[index].tabIndex = 0;
    osOptions[index].focus();
  });
  osMenu.addEventListener('focusout', event => { if (!osMenu.contains(event.relatedTarget)) osMenu.open = false; });
  doc.addEventListener('click', event => { if (!osMenu.contains(event.target)) osMenu.open = false; });
  browserSelect.addEventListener('change', () => show(osMenu.dataset.value, browserSelect.value));
}

if (typeof document !== 'undefined') initInstallGuide(document, navigator);
