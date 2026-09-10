import { docTopics } from '../site/src/data/docs-nav.mjs';
import { content } from '../site/src/data/content.mjs';

export async function checkDocumentation(b, host, check) {
  const route = (locale, slug) => `${locale === 'en' ? '' : '/' + locale}/docs/${slug}/`;
  const results = [];
  await b.evaluate('localStorage.clear()');
  // Old bookmarks keep the article, explicit language, and section on the static host.
  for (const locale of ['en', 'ja', 'zh', 'ko']) {
    const target = route(locale, 'illustration/render');
    await b.navigate(host.url + target + '?lang=' + locale);
    const section = await b.evaluate("document.querySelector('.guide-prose h2').id");
    await b.navigate(host.url + target.replace('/docs/', '/documentation/') + '?lang=' + locale + '#' + encodeURIComponent(section));
    await b.until(`location.pathname === '${target}' && document.readyState === 'complete'`);
    check(await b.evaluate(`location.search === '?lang=${locale}' && decodeURIComponent(location.hash.slice(1)) === ${JSON.stringify(section)}`), `Legacy guide preserves query and section in ${locale}`);
  }
  await b.call('Emulation.setScriptExecutionDisabled', { value: true });
  await b.navigate(host.url + '/ja/documentation/quickstart/');
  await b.until("location.pathname === '/ja/docs/quickstart/' && document.readyState === 'complete'");
  check(await b.evaluate("document.documentElement.lang === 'ja' && !!document.querySelector('.guide-prose')"), 'Legacy guide redirects without JavaScript');
  await b.call('Emulation.setScriptExecutionDisabled', { value: false });
  for (const [width, height] of [[1440, 900], [390, 844]]) for (const theme of ['light', 'dark']) for (const locale of ['en', 'ja', 'zh', 'ko']) for (const { slug } of docTopics) {
    await b.call('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
    await b.theme(theme);
    await b.navigate(host.url + route(locale, slug));
    await b.evaluate('Promise.all([...document.images].map(image => image.decode())).then(() => null)');
    await b.settle();
    const metrics = await b.evaluate(`(() => {
      const visible = element => element.checkVisibility();
      const clipped = [...document.querySelectorAll('h1,h2,h3,p,a,summary,figcaption,select')].filter(visible).filter(element => {
        const box = element.getBoundingClientRect();
        return box.left < -1 || box.right > innerWidth + 1;
      }).map(element => element.textContent);
      return {
        clipped, scroll: document.documentElement.scrollWidth,
        locale: document.documentElement.dataset.locale,
        menuOpen: document.querySelector('.docs-menu').open,
        current: document.querySelector('.docs-navigation [aria-current=page]').getAttribute('href'),
        headings: [...document.querySelectorAll('.guide-prose h2')].map(element => element.id),
        toc: [...document.querySelectorAll('.docs-toc a')].map(element => decodeURIComponent(element.hash.slice(1))),
        background: getComputedStyle(document.body).backgroundColor,
        image: document.querySelector('.guide-figure img')?.currentSrc,
      };
    })()`);
    const label = `${width}/${theme}/${locale}/${slug}`;
    check(metrics.scroll <= width && metrics.clipped.length === 0, `Guide overflow ${label}: ${JSON.stringify(metrics)}`);
    check(metrics.locale === locale && metrics.current === route(locale, slug), `Localized active guide ${label}`);
    check(metrics.menuOpen === (width > 800), `Responsive documentation menu ${label}`);
    check(metrics.headings.length > 0 && metrics.headings.every(id => metrics.toc.includes(id)), `Guide section anchors ${label}`);
    check(metrics.background === (theme === 'dark' ? 'rgb(51, 51, 51)' : 'rgb(237, 237, 237)'), `Guide theme ${label}`);
    if (slug === 'workspace') check(metrics.image.endsWith(`workspace-${theme}.webp`), `Guide screenshot follows appearance ${label}`);
    if ((locale === 'en' && ['illustration/mask', 'workspace'].includes(slug)) || (locale === 'ko' && slug === 'advanced/input')) {
      await b.screenshot(`artifacts/review/guide-${width}-${theme}-${locale}-${slug.replaceAll('/', '-')}.png`, true);
    }
    results.push(label);
  }
  // The narrowest supported width and a long translated title.
  await b.call('Emulation.setDeviceMetricsOverride', { width: 320, height: 568, deviceScaleFactor: 1, mobile: false });
  await b.navigate(host.url + '/ko/docs/advanced/input/');
  check(await b.evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Narrow input reference has no horizontal overflow');
  // Keyboard-accessible mobile navigation opens, closes, and follows real links.
  await b.evaluate("document.querySelector('.docs-menu summary').focus()");
  await b.call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, text: '\r', unmodifiedText: '\r' });
  await b.call('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await b.settle();
  check(await b.evaluate("document.querySelector('.docs-menu').open"), 'Keyboard opens documentation navigation');
  await b.call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  check(await b.evaluate("!document.querySelector('.docs-menu').open && document.activeElement === document.querySelector('.docs-menu summary')"), 'Escape closes navigation and restores focus');
  await b.evaluate("document.querySelector('.docs-menu').open = true; document.querySelector('.docs-navigation a[href=\"/ko/docs/illustration/ink/\"]').click()");
  await b.until("location.pathname === '/ko/docs/illustration/ink/' && document.readyState === 'complete'");
  check(await b.evaluate("document.querySelector('.guide-prose h2') !== null"), 'Sidebar navigates to the actual guide');
  // Language detection and explicit choices keep nested article paths.
  const { identifier: languageOverride } = await b.call('Page.addScriptToEvaluateOnNewDocument', { source: "Object.defineProperty(navigator,'languages',{get:()=>['ja-JP'],configurable:true})" });
  await b.navigate(host.url + '/docs/illustration/mask/');
  await b.until("location.pathname === '/ja/docs/illustration/mask/' && document.readyState === 'complete'");
  check(await b.evaluate("document.documentElement.lang === 'ja'"), 'Browser language detection preserves nested guide');
  await b.evaluate("document.querySelector('.language-menu').open = true; document.querySelector('[data-language=zh]').click()");
  await b.until("location.pathname === '/zh/docs/illustration/mask/' && document.readyState === 'complete'");
  check(await b.evaluate("localStorage.getItem('capycanvas.language') === 'zh'"), 'Manual guide translation persists');
  await b.evaluate("document.querySelector('[data-language=en]').click()");
  await b.until("location.pathname === '/docs/illustration/mask/' && document.readyState === 'complete'");
  check(await b.evaluate("location.search === '?lang=en' && document.documentElement.lang === 'en'"), 'Explicit English guide overrides detected language');
  await b.call('Page.removeScriptToEvaluateOnNewDocument', { identifier: languageOverride });
  // Device detection is guidance; every variant is switchable and in static HTML.
  const profiles = [
    ['Win32', 'Windows NT 10.0', 0, 'windows'],
    ['MacIntel', 'Macintosh', 0, 'mac'],
    ['MacIntel', 'Macintosh', 5, 'ipad'],
    ['iPad', 'iPad', 5, 'ipad'],
    ['Linux armv8l', 'Linux; Android 15', 5, 'android'],
    ['Linux x86_64', 'Linux', 0, 'linux'],
    ['Linux x86_64', 'CrOS x86_64', 0, 'all'],
    ['', '', 0, 'all'],
  ];
  for (const [platform, userAgent, maxTouchPoints, expected] of profiles) {
    const { identifier } = await b.call('Page.addScriptToEvaluateOnNewDocument', { source: `for (const [key,value] of Object.entries(${JSON.stringify({ platform, userAgent, maxTouchPoints })})) Object.defineProperty(navigator,key,{get:()=>value,configurable:true});` });
    await b.evaluate('localStorage.clear()');
    await b.navigate(host.url + '/docs/advanced/input/?lang=en');
    await b.until("document.querySelector('.docs-platform')?.hidden === false");
    check(await b.evaluate(`document.querySelector('.docs-platform').value === '${expected}'`), `Device guide detects ${expected}/${platform}`);
    check(await b.evaluate(`document.querySelectorAll('[data-doc-platform]:not([hidden])').length === ${expected === 'all' ? 5 : 1}`), 'Only the selected device notes are visible');
    await b.call('Page.removeScriptToEvaluateOnNewDocument', { identifier });
  }
  await b.evaluate("const picker = document.querySelector('.docs-platform'); picker.value = 'android'; picker.dispatchEvent(new Event('change')); ");
  for (const locale of ['ja', 'zh', 'ko', 'en']) {
    await b.navigate(host.url + route(locale, 'advanced/input'));
    await b.until("document.querySelector('.docs-platform')?.hidden === false");
    check(await b.evaluate("document.querySelector('.docs-platform').value === 'android' && !document.querySelector('[data-doc-platform=android]').hidden"), `Device choice persists in ${locale}`);
  }
  const { identifier: storageOverride } = await b.call('Page.addScriptToEvaluateOnNewDocument', { source: "Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage disabled')}})" });
  await b.navigate(host.url + '/docs/advanced/input/?lang=en');
  await b.until("document.querySelector('.docs-platform')?.hidden === false");
  await b.evaluate("const picker = document.querySelector('.docs-platform'); picker.value = 'all'; picker.dispatchEvent(new Event('change')); ");
  check(await b.evaluate("document.querySelectorAll('[data-doc-platform]:not([hidden])').length === 5"), 'Device picker works with storage disabled');
  await b.call('Page.removeScriptToEvaluateOnNewDocument', { identifier: storageOverride });
  await b.call('Emulation.setScriptExecutionDisabled', { value: true });
  for (const locale of ['en', 'ja', 'zh', 'ko']) {
    await b.navigate(host.url + route(locale, 'advanced/input'));
    check(await b.evaluate(`document.documentElement.lang === '${content[locale].lang}' && document.querySelectorAll('[data-doc-platform]:not([hidden])').length === 5 && document.querySelector('.docs-platform').hidden`), `All platform content survives without JavaScript in ${locale}`);
    check(await b.evaluate("document.querySelector('.docs-menu').open && document.querySelectorAll('.docs-navigation a').length === 16 && document.querySelectorAll('.guide-prose h2').length > 0"), 'Static guides and mobile navigation are usable without JavaScript');
  }
  await b.call('Emulation.setScriptExecutionDisabled', { value: false });
  await b.evaluate('localStorage.clear()');
  return results;
}
