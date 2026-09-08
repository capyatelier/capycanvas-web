import { profiles } from './pwa-profiles.mjs';
import { pwaContent } from '../site/pwa-content.mjs';

export async function checkPwaInstructions(b, host, check) {
  for (const [index, [name, profile, guide, fallback]] of profiles.entries()) {
    const values={userAgent:'',platform:'',maxTouchPoints:0,userAgentData:undefined,...profile};
    const {identifier}=await b.call('Page.addScriptToEvaluateOnNewDocument',{
      source:Object.entries(values).map(([key,value])=>`Object.defineProperty(navigator,${JSON.stringify(key)},{configurable:true,value:${JSON.stringify(value)}});`).join('')
    });
    const mobile=/Android|iPhone|iPad|iOS/.test(name);
    await b.call('Emulation.setDeviceMetricsOverride',{width:mobile?390:1440,height:mobile?844:900,deviceScaleFactor:1,mobile:false});
    for (const [i, locale] of ['en','ja','zh','ko'].entries()) {
      await b.theme((index+i)%2?'dark':'light');
      await b.navigate(host.url+(locale==='en'?'/download/?lang=en':`/${locale}/download/`));
      await b.settle();
      const metrics=await b.evaluate(`(() => {
        const section=document.querySelector('.pwa');
        const visible=[...section.querySelectorAll('[data-pwa-guide]')].filter(e=>!e.hidden);
        const notices=[...section.querySelectorAll('[data-pwa-fallback]')].filter(e=>!e.hidden);
        return {guide:visible.map(e=>e.dataset.pwaGuide),fallback:notices.map(e=>e.dataset.pwaFallback),
          steps:visible[0].querySelectorAll('li').length,text:visible[0].innerText,
          select:section.querySelector('select').value,selectorVisible:!!section.querySelector('select').getClientRects().length,
          target:visible[0].querySelector('a').href,
          clipped:[...section.querySelectorAll('li,p,label,select')].filter(e=>e.getClientRects().length&&e.getBoundingClientRect().right>innerWidth+1).length};
      })()`);
      const label=`${name}/${locale}`;
      check(metrics.guide.length===1&&metrics.guide[0]===guide&&metrics.select===guide,`PWA guide ${label}`);
      check(metrics.fallback.join(',')===fallback,`PWA fallback ${label}`);
      check(metrics.steps===2&&metrics.selectorVisible&&!metrics.clipped,`PWA layout ${label}`);
      check(metrics.target==='https://editor.capycanvas.art/'&&metrics.text.includes(pwaContent[locale].guides[guide].step),`Localized editor instructions ${label}`);
      if ([3,6,8,13].includes(index)&&['en','ja'].includes(locale)) await b.screenshot(`artifacts/review/pwa-${index}-${locale}.png`,true);
    }
    await b.call('Page.removeScriptToEvaluateOnNewDocument',{identifier});
  }
  await b.navigate(host.url+'/download/?lang=en');
  await b.evaluate("const select=document.querySelector('.pwa select');select.value='mac';select.dispatchEvent(new Event('change',{bubbles:true}));");
  check(await b.evaluate("document.querySelector('[data-pwa-guide=mac]').hidden===false&&document.querySelectorAll('[data-pwa-guide]:not([hidden])').length===1&&document.querySelectorAll('[data-pwa-fallback]:not([hidden])').length===0"),'Manual browser selection updates instructions and clears the recommendation');
}
