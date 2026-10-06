import { initMenuField, setMenuValue } from './menu-field.js';

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
  const browserMenu = section.querySelector('#pwa-browser');
  const browserList = browserMenu.querySelector('[role=listbox]');
  const browserOptions = Object.fromEntries([...browserList.children].map(option => [option.dataset.value, option]));
  const detected = detectInstallGuide(browser);
  function show(system, preferredBrowser, fallback = '') {
    const options = installOptions[system] || installOptions.other;
    const browser = options[preferredBrowser] ? preferredBrowser : Object.keys(options)[0];
    const guide = options[browser];
    setMenuValue(osMenu, system);
    browserList.replaceChildren(...Object.keys(options).map(value => browserOptions[value]));
    setMenuValue(browserMenu, browser);
    for (const block of section.querySelectorAll('[data-pwa-guide]')) block.hidden = block.dataset.pwaGuide !== guide;
    for (const note of section.querySelectorAll('[data-pwa-fallback]')) note.hidden = note.dataset.pwaFallback !== fallback;
  }
  show(detected.os, detected.browser, detected.fallback);
  section.querySelector('.pwa-browser').hidden = false;
  initMenuField(osMenu, system => show(system, browserMenu.dataset.value));
  initMenuField(browserMenu, value => show(osMenu.dataset.value, value));
}

if (typeof document !== 'undefined') initInstallGuide(document, navigator);
