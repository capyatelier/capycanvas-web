import { profiles } from './pwa-profiles.mjs';
import { pwaContent } from '../site/src/data/pwa-content.mjs';

export async function checkPwaInstructions(b, host, check) {
  for (const [index, [name, profile, guide, fallback, os, browser]] of profiles.entries()) {
    const values={userAgent:'',platform:'',maxTouchPoints:0,userAgentData:undefined,...profile};
    const {identifier}=await b.call('Page.addScriptToEvaluateOnNewDocument',{
      source:Object.entries(values).map(([key,value])=>`Object.defineProperty(navigator,${JSON.stringify(key)},{configurable:true,value:${JSON.stringify(value)}});`).join('')
    });
    const mobile=/Android|iPhone|iPad|iOS/.test(name);
    await b.call('Emulation.setDeviceMetricsOverride',{width:mobile?390:1440,height:mobile?844:900,deviceScaleFactor:1,mobile:false});
    for (const [i, locale] of Object.keys(pwaContent).entries()) {
      await b.theme((index+i)%2?'dark':'light');
      await b.navigate(host.url+(locale==='en'?'/download/?lang=en':`/${locale}/download/`));
      await b.settle();
      const metrics=await b.evaluate(`(() => {
        const section=document.querySelector('.pwa');
        const visible=[...section.querySelectorAll('[data-pwa-guide]')].filter(e=>!e.hidden);
        const notices=[...section.querySelectorAll('[data-pwa-fallback]')].filter(e=>!e.hidden);
        return {guide:visible.map(e=>e.dataset.pwaGuide),fallback:notices.map(e=>e.dataset.pwaFallback),
          steps:visible[0].querySelectorAll('li').length,text:visible[0].innerText,
          os:section.querySelector('#pwa-os').dataset.value,browser:section.querySelector('#pwa-browser').dataset.value,
          selectorVisible:!!section.querySelector('#pwa-browser summary').getClientRects().length,
          sameRow:Math.abs(section.querySelector('#pwa-os summary').getBoundingClientRect().top-section.querySelector('#pwa-browser summary').getBoundingClientRect().top)<1,
          named:!!section.querySelector('#pwa-os summary').getAttribute('aria-labelledby')&&!!section.querySelector('#pwa-browser summary').getAttribute('aria-labelledby'),
          icons:!!section.querySelector('#pwa-os-current svg')&&[...section.querySelectorAll('#pwa-os [role=option]')].every(e=>e.querySelector('svg')),
          labels:section.querySelectorAll('label').length,
          target:visible[0].querySelector('a').href,
          clipped:[...section.querySelectorAll('li,p,label,summary')].filter(e=>e.getClientRects().length&&e.getBoundingClientRect().right>innerWidth+1).length};
      })()`);
      const label=`${name}/${locale}`;
      check(metrics.guide.length===1&&metrics.guide[0]===guide&&metrics.os===os&&metrics.browser===browser,`PWA guide ${label}`);
      check(metrics.fallback.join(',')===fallback,`PWA fallback ${label}`);
      check(metrics.steps===2&&metrics.selectorVisible&&!metrics.clipped&&metrics.sameRow&&metrics.named&&metrics.icons&&!metrics.labels,`PWA layout ${label}`);
      check(metrics.target==='https://editor.capycanvas.art/'&&metrics.text.includes(pwaContent[locale].guides[guide].step),`Localized editor instructions ${label}`);
      if ([3,6,8,13].includes(index)&&['en','ja'].includes(locale)) await b.screenshot(`artifacts/review/pwa-${index}-${locale}.png`,true);
    }
    await b.call('Page.removeScriptToEvaluateOnNewDocument',{identifier});
  }
  await b.navigate(host.url+'/download/?lang=en');
  for (const [os, browser, guide, choices] of [
    ['macos','safari','mac',['safari','chrome','edge']],
    ['windows','firefox','firefoxWindows',['chrome','edge','firefox']],
    ['android','firefox','firefoxAndroid',['chrome','firefox']],
    ['ios','chrome','chromeIos',['safari','chrome']],
    ['linux','edge','desktop',['chrome','edge']],
    ['chromeos','chrome','desktop',['chrome']]
  ]) {
    await b.evaluate(`document.querySelector('#pwa-os').open=true;document.querySelector('#pwa-os [data-value=${os}]').click();`);
    check(await b.evaluate(`JSON.stringify([...document.querySelectorAll('#pwa-browser [role=option]')].map(o=>o.dataset.value))===${JSON.stringify(JSON.stringify(choices))}`),`Browsers available on ${os}`);
    await b.evaluate(`document.querySelector('#pwa-browser').open=true;document.querySelector('#pwa-browser [data-value=${browser}]').click();`);
    check(await b.evaluate(`document.querySelector('#pwa-browser').dataset.value==='${browser}'&&!document.querySelector('#pwa-browser').open&&!document.querySelector('[data-pwa-guide=${guide}]').hidden&&document.querySelectorAll('[data-pwa-guide]:not([hidden])').length===1&&document.querySelectorAll('[data-pwa-fallback]:not([hidden])').length===0`),`Manual selection ${os}/${browser}`);
  }
  await b.call('Emulation.setDeviceMetricsOverride',{width:320,height:844,deviceScaleFactor:1,mobile:false});
  await b.evaluate("document.querySelector('#pwa-os summary').focus()");
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowDown',code:'ArrowDown'});
  await b.until("document.querySelector('#pwa-os').open&&document.activeElement.matches('#pwa-os [role=option]')");
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'Home',code:'Home'});
  check(await b.evaluate("document.activeElement.dataset.value==='windows'"),'OS picker Home key');
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowDown',code:'ArrowDown'});
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r',unmodifiedText:'\r'});
  await b.call('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  check(await b.evaluate("document.querySelector('#pwa-os').dataset.value==='macos'&&!document.querySelector('#pwa-os').open&&document.activeElement.matches('#pwa-os summary')"),'OS picker chooses with keyboard and restores focus');
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowDown',code:'ArrowDown'});
  await b.until("document.activeElement.matches('#pwa-os [role=option]')");
  await b.settle();
  check(await b.evaluate("[...document.querySelectorAll('.pwa-browser,#pwa-os .menu-field-options')].every(e=>e.getBoundingClientRect().right<=innerWidth)&&Math.abs(document.querySelector('#pwa-os summary').getBoundingClientRect().top-document.querySelector('#pwa-browser summary').getBoundingClientRect().top)<1"),'Both dropdowns and OS menu fit a 320px screen');
  await b.screenshot('artifacts/review/pwa-os-menu.png',true);
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});
  check(await b.evaluate("!document.querySelector('#pwa-os').open&&document.activeElement.matches('#pwa-os summary')"),'Escape closes OS picker');
  await b.evaluate("document.querySelector('#pwa-browser summary').focus()");
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowDown',code:'ArrowDown'});
  await b.until("document.querySelector('#pwa-browser').open&&document.activeElement.matches('#pwa-browser [role=option]')");
  check(await b.evaluate("(()=>{const menu=document.querySelector('#pwa-browser .menu-field-options');const os=document.querySelector('#pwa-os .menu-field-options');const style=getComputedStyle(menu);return style.position==='absolute'&&style.borderRadius===getComputedStyle(os).borderRadius&&style.backgroundColor===getComputedStyle(os).backgroundColor&&document.activeElement.getAttribute('aria-selected')==='true'&&menu.getBoundingClientRect().right<=innerWidth})()"),'The browser picker opens the same menu as the OS picker');
  await b.screenshot('artifacts/review/pwa-browser-menu.png',true);
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});
  check(await b.evaluate("!document.querySelector('#pwa-browser').open&&document.activeElement.matches('#pwa-browser summary')"),'Escape closes browser picker');
}
