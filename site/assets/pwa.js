// These hints choose instructions only. Browsers expose no cross-origin API for
// checking whether the editor can be installed. Keep manual selection available.
export function detectInstallGuide({ userAgent = '', platform = '', maxTouchPoints = 0, userAgentData } = {}) {
  const ua = userAgent;
  const os = userAgentData?.platform || platform;
  const ios = /iPad|iPhone|iPod/.test(ua) || (/Mac/.test(os || ua) && maxTouchPoints > 1);
  const android = /Android/i.test(os) || /Android/.test(ua);
  const firefox = /Firefox\//.test(ua);
  const chromium = /Chrome\/|Chromium\/|Edg\//.test(ua) || userAgentData?.brands?.some(b => /Chromium|Google Chrome|Microsoft Edge/.test(b.brand));
  const otherChromium = /OPR\/|SamsungBrowser\/|Vivaldi\/|; wv\)|EdgA\//.test(ua);
  const safari = /Version\/[\d.]+.*Safari\//.test(ua) && !chromium && !/FxiOS\/|EdgiOS\/|OPiOS\//.test(ua);
  const result = (guide, fallback = '') => ({ guide, fallback });
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
  const select = section.querySelector('select');
  const detected = detectInstallGuide(browser);
  function show(guide, fallback = '') {
    for (const block of section.querySelectorAll('[data-pwa-guide]')) block.hidden = block.dataset.pwaGuide !== guide;
    for (const note of section.querySelectorAll('[data-pwa-fallback]')) note.hidden = note.dataset.pwaFallback !== fallback;
    select.value = guide;
  }
  show(detected.guide, detected.fallback);
  section.querySelector('.pwa-browser').hidden = false;
  select.addEventListener('change', () => show(select.value));
}

if (typeof document !== 'undefined') initInstallGuide(document, navigator);
