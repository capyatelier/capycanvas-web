import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { browser } from '../site/scripts/browser.mjs';
import { serve } from '../site/scripts/serve.mjs';
import { checkPwaInstructions } from './pwa-browser.mjs';
import { checkDocumentation } from './docs-browser.mjs';

await mkdir('artifacts/review',{recursive:true});
const host=await serve();
const b=await browser();
let checks=0;
const report=[];
const check=(value,message)=>{assert.ok(value,message);checks++;};
try {
  await b.call('Page.addScriptToEvaluateOnNewDocument',{source:"Object.defineProperty(navigator,'languages',{get:()=>['en-US','en'],configurable:true})"});
  for(const [width,height] of [[1440,900],[1280,720],[1024,600],[768,1024],[390,844],[320,568],[844,390]]) for(const theme of ['light','dark']) for(const locale of ['en','ja','zh','ko']) for(const page of ['home','download','documentation']) {
    await b.call('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
    await b.theme(theme);
    const path=`${locale==='en'?'':'/'+locale}/${page==='home'?'':page+'/'}`;
    await b.navigate(host.url+path);
    await b.evaluate('Promise.all([...document.images].map(i=>i.decode())).then(()=>null)');
    await b.settle();
    const metrics=await b.evaluate(`(() => {
      const visible=e=>e.getClientRects().length>0;
      const bounds=[...document.querySelectorAll('h1,h2,h3,p,a,summary')].filter(visible).filter(e=>e.getBoundingClientRect().right>innerWidth+1||e.getBoundingClientRect().left< -1).map(e=>e.textContent);
      const shot=document.querySelector('.workspace img')?.getBoundingClientRect();
      const borders=[...document.querySelectorAll('header,nav,main,picture,section,a,li')].filter(visible).filter(e=>['Top','Right','Bottom','Left'].some(side=>parseFloat(getComputedStyle(e)['border'+side+'Width'])>0)).map(e=>e.className);
      return { height:innerHeight, scrollHeight:document.documentElement.scrollHeight, shotRatio:shot?shot.width/shot.height:null, borders, width:innerWidth, scroll:document.documentElement.scrollWidth, lang:document.documentElement.dataset.locale, bg:getComputedStyle(document.body).backgroundColor, source:document.querySelector('.workspace img')?.currentSrc, bounds,
        labels:[...document.querySelectorAll('a,summary')].filter(visible).every(e=>(e.getAttribute('aria-label')||e.textContent).trim()),
        headings:document.querySelectorAll('h1').length,
        broken:[...document.images].some(i=>!i.complete||!i.naturalWidth)
      };
    })()`);
    const label=`${width}x${height}/${theme}/${locale}/${page}`;
    check(metrics.scroll<=width,`Horizontal overflow ${label}: ${JSON.stringify(metrics)}`);
    check(metrics.bounds.length===0,`Clipped text ${label}: ${metrics.bounds}`);
    check(metrics.lang===locale,`Wrong language ${label}`);
    check(metrics.bg===(theme==='light'?'rgb(237, 237, 237)':'rgb(51, 51, 51)'),`Wrong theme ${label}`);
    check(metrics.labels&&metrics.headings===1&&!metrics.broken,`Accessibility/asset basics ${label}`);
    check(metrics.borders.length===0,`Unexpected borders ${label}: ${metrics.borders}`);
    if(page==='home') {
      check(metrics.source.endsWith(`workspace-${theme}.webp`),`Wrong screenshot ${label}`);
      check(metrics.scrollHeight<=height,`Home should fit viewport ${label}: ${metrics.scrollHeight}`);
      check(Math.abs(metrics.shotRatio-16/9)<.01,`Screenshot aspect ratio ${label}`);
    }
    if((width===1440&&locale==='en')||(width===390&&(locale==='en'||theme==='dark'))) await b.screenshot(`artifacts/review/${width}-${theme}-${locale}-${page}.png`,true);
    report.push(label);
  }
  await checkPwaInstructions(b,host,check);
  const guideLayouts = await checkDocumentation(b,host,check);
  // Live OS appearance changes swap both the site palette and the actual screenshot.
  await b.navigate(host.url+'/?lang=en'); await b.theme('light'); await b.settle();
  await b.theme('dark'); await b.until("document.querySelector('.workspace img').currentSrc.endsWith('workspace-dark.webp')"); checks++;
  // Preference detection and regional language tags, including unsupported-first lists.
  for(const [langs,expected] of [[['ja-JP'],'ja'],[['zh-TW'],'zh'],[['ko-KR'],'ko'],[['fr-FR','ja-JP'],'ja'],[['de-DE'],'en']]) {
    const {identifier}=await b.call('Page.addScriptToEvaluateOnNewDocument',{source:`Object.defineProperty(navigator,'languages',{get:()=>${JSON.stringify(langs)},configurable:true})`});
    await b.evaluate('localStorage.clear()'); await b.navigate(host.url+'/download/');
    await b.until(`document.documentElement.dataset.locale==='${expected}'`);checks++;
    check(await b.evaluate("document.documentElement.dataset.page==='download'"),'Auto detection preserves the page');
    await b.call('Page.removeScriptToEvaluateOnNewDocument',{identifier});
  }
  // Explicit locale URLs take priority; language links preserve the page and persist.
  await b.navigate(host.url+'/ja/documentation/');
  await b.evaluate("document.querySelector('.language-menu').open=true;document.querySelector('[data-language=ko]').click()");
  await b.until("document.documentElement.dataset.locale==='ko'");
  check(await b.evaluate("location.pathname==='/ko/documentation/'&&localStorage.getItem('capycanvas.language')==='ko'"),'Manual selection persists and preserves page');
  await b.navigate(host.url+'/');await b.until("document.documentElement.dataset.locale==='ko'");checks++;
  await b.navigate(host.url+'/ja/');check(await b.evaluate("document.documentElement.dataset.locale==='ja'"),'Explicit locale URL wins over storage');
  await b.evaluate("document.querySelector('[data-language=en]').click()");await b.until("document.documentElement.dataset.locale==='en'");checks++;
  await b.until("document.readyState==='complete'");await b.settle();
  // Menus can be reached by keyboard, and Escape restores focus.
  await b.evaluate("document.querySelector('.language-menu summary').focus()");
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r',unmodifiedText:'\r'});
  await b.call('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  await b.settle();
  check(await b.evaluate("document.querySelector('.language-menu').open"),'Keyboard opens language menu');
  await b.call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  check(await b.evaluate("!document.querySelector('.language-menu').open&&document.activeElement.tagName==='SUMMARY'"),'Escape closes language menu');
  // With script and storage unavailable, every page and language link is still usable.
  await b.call('Emulation.setScriptExecutionDisabled',{value:true});
  await b.navigate(host.url+'/ja/download/');
  check(await b.evaluate("document.documentElement.lang==='ja'&&document.querySelectorAll('.platform').length===5"),'No-JS page content');
  check(await b.evaluate("document.querySelector('[data-pwa-guide=generic]').hidden===false&&document.querySelector('.pwa-browser').hidden&&document.querySelectorAll('[data-pwa-guide]:not([hidden])').length===1"),'No-JS installation instructions remain readable');
  await b.screenshot('artifacts/review/no-js-japanese.png',true);
  await b.call('Emulation.setScriptExecutionDisabled',{value:false});
  const {identifier}=await b.call('Page.addScriptToEvaluateOnNewDocument',{source:"Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage disabled')}})"});
  await b.navigate(host.url+'/?lang=en');
  check(await b.evaluate("document.documentElement.dataset.locale==='en'"),'English override works without storage');
  await b.call('Page.removeScriptToEvaluateOnNewDocument',{identifier});
  await b.navigate(host.url+'/missing-page');check(await b.evaluate("!!document.querySelector('.error-page')"),'Real 404 response is readable');
  check(b.errors.length===0,`Browser console errors: ${b.errors.join('\n')}`);
  await writeFile('artifacts/review/report.json',JSON.stringify({checks,layouts:report.length+guideLayouts.length,report,guideLayouts},null,2)+'\n');
  console.log(`PASS: ${checks} checks across ${report.length+guideLayouts.length} responsive/theme/locale/page combinations, plus language, device, keyboard, no-JS, storage and 404 flows.`);
} finally {await b.close();await host.close();}
