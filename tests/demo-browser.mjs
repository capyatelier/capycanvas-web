import { languages } from '../site/src/data/content.mjs';

export async function checkSketchDemo(b, host, check) {
  const header = await fetch(`${host.url}/assets/demos/en/sketch-light.webm`, { headers: { Range: 'bytes=0-31' } });
  check(header.status === 206 && header.headers.get('content-type') === 'video/webm' && (await header.arrayBuffer()).byteLength === 32, 'Preview server serves video byte ranges');
  const page = locale => `${host.url}${locale === 'en' ? '' : '/' + locale}/docs/`;
  const emulate = (theme, motion = 'no-preference') => b.call('Emulation.setEmulatedMedia', { features: [
    { name: 'prefers-color-scheme', value: theme },
    { name: 'prefers-reduced-motion', value: motion },
  ] });
  await b.call('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  for (const locale of Object.keys(languages)) for (const theme of ['light', 'dark']) {
    await emulate(theme);
    await b.navigate(page(locale));
    await b.until("document.querySelector('[data-sketch-demo] video').currentTime > .05");
    const result = await b.evaluate(`(() => {
      const v = document.querySelector('[data-sketch-demo] video'), box = v.getBoundingClientRect();
      return { source: v.currentSrc, playing: !v.paused, loop: v.loop, muted: v.muted,
        inline: v.playsInline, controls: v.controls, width: v.videoWidth, height: v.videoHeight,
        duration: v.duration, error: v.error, visible: getComputedStyle(v).visibility,
        ratio: box.width / box.height, label: v.getAttribute('aria-label') };
    })()`);
    check(result.source.endsWith(`/assets/demos/${locale}/sketch-${theme}.webm`), `Localized demo source ${locale}/${theme}`);
    check(result.playing && result.loop && result.muted && result.inline && !result.controls && !result.error, `Minimal automatic demo ${locale}/${theme}`);
    check(result.width === 1920 && result.height === 1080 && result.duration >= 24 && result.duration < 28, `1080p demo timing ${locale}/${theme}`);
    check(result.visible === 'visible' && Math.abs(result.ratio - 16/9) < .01 && result.label, `Visible labeled demo ${locale}/${theme}`);
  }
  await b.evaluate("document.querySelector('video').currentTime=document.querySelector('video').duration-.35");
  await b.until("!document.querySelector('video').seeking && document.querySelector('video').currentTime>document.querySelector('video').duration-.5");
  await b.until("document.querySelector('video').currentTime<.5&&!document.querySelector('video').paused");
  check(true, 'Video reaches its end and restarts the loop');
  await b.evaluate('window.scrollTo(0, document.body.scrollHeight)');
  await b.until("document.querySelector('[data-sketch-demo] video').paused");
  check(true, 'Offscreen demo stops playing');
  await b.evaluate("document.querySelector('[data-sketch-demo]').scrollIntoView()");
  await b.until("!document.querySelector('[data-sketch-demo] video').paused");
  await emulate('light');
  await b.until("document.querySelector('[data-sketch-demo] video').currentSrc.endsWith('/it/sketch-light.webm') && !document.querySelector('[data-sketch-demo] video').paused");
  check(true, 'Demo follows a live appearance change');

  await emulate('dark', 'reduce');
  await b.navigate(page('ja'));
  await b.settle();
  check(await b.evaluate("!document.querySelector('[data-sketch-demo] video').getAttribute('src') && !performance.getEntriesByType('resource').some(r => r.name.endsWith('.webm'))"), 'Reduced motion loads no video');
  check(await b.evaluate("document.querySelector('[data-sketch-demo] video').paused && getComputedStyle(document.querySelector('[data-sketch-demo] video')).visibility === 'hidden'"), 'Reduced motion keeps the static hero');
  await b.evaluate("document.querySelector('[data-sketch-demo] img').decode()");
  check(await b.evaluate("document.querySelector('[data-sketch-demo] img').currentSrc.endsWith('/ja/sketch-dark.webp')"), 'Reduced motion still follows the localized theme');

  await emulate('light');
  await b.call('Emulation.setScriptExecutionDisabled', { value: true });
  try {
    await b.navigate(page('en'));
    await b.evaluate("document.querySelector('[data-sketch-demo] img').decode()");
    check(await b.evaluate("!document.querySelector('[data-sketch-demo] video').getAttribute('src') && document.querySelector('[data-sketch-demo] img').naturalWidth > 0"), 'No JavaScript keeps a working static hero');
  } finally {
    await b.call('Emulation.setScriptExecutionDisabled', { value: false });
  }
}
