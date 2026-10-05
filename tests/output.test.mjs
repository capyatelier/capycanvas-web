import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import { docsUI } from '../site/src/data/docs-ui.mjs';
import { docTopics } from '../site/src/data/docs-nav.mjs';
import { content, languages } from '../site/src/data/content.mjs';
import { releasesUrl } from '../site/src/lib/releases.mjs';

const root=resolve(process.env.SITE_OUTPUT || 'docs');
const read=path=>readFile(join(root,path),'utf8');
const pages=['home','download','versions','ipadBeta','androidBeta','documentation','privacy'];
const escape=text=>text.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const escapeText=text=>escape(text).replaceAll("'",'&#39;');
const segments={documentation:'docs',versions:'download/past-versions',ipadBeta:'download/ipad-beta',androidBeta:'download/android-beta'};
const route=(l,p)=>`${l==='en'?'':l+'/'}${p==='home'?'':(segments[p]??p)+'/'}`;
const releaseFile=/^https:\/\/github\.com\/capyatelier\/capycanvas\/releases\/download\/v([^/]+)\/(?:capycanvas-\1-(?:android\.apk|linux-x86_64\.AppImage|windows-x64-setup\.exe|macos-arm64\.dmg)|SHA256SUMS)$/;
function shape(value) { return Array.isArray(value)?value.map(shape):value && typeof value==='object'?Object.fromEntries(Object.entries(value).map(([k,v])=>[k,shape(v)])):typeof value; }
for(const locale of Object.keys(languages)) {
  test(`${locale}: translation coverage matches English`,()=>assert.deepEqual(shape(content[locale]),shape(content.en)));
  for(const page of pages) test(`${locale}/${page}: static content, metadata and navigation`,async()=>{
    const html=await read(route(locale,page)+'index.html');
    const modules=await Promise.all([...html.matchAll(/<script type="module"([^>]*)>([\s\S]*?)<\/script>/g)].map(async ([,attributes,code])=>{
      const source=attributes.match(/src="([^"]+)"/)?.[1];
      return source?read(new URL(source,'https://capycanvas.art').pathname):code;
    }));
    assert.match(html,new RegExp(`<html lang="${content[locale].lang}"`));
    assert.equal((html.match(/<h1(?: [^>]*)?>/g)||[]).length,1);
    assert.equal((html.match(/<main /g)||[]).length,1);
    assert.equal((html.match(/rel="alternate"/g)||[]).length,Object.keys(languages).length+1);
    assert.match(html,/<meta name="description" content=".+?">/);
    assert.ok(html.includes(`<link rel="canonical" href="https://capycanvas.art/${route(locale,page)}">`));
    for(const code of Object.keys(languages)) {
      const path='/'+route(code,page);
      assert.ok(html.includes(`<link rel="alternate" hreflang="${content[code].lang}" href="https://capycanvas.art${path}">`));
      assert.ok(html.includes(`href="${path}${code==='en'?'?lang=en':''}" lang="${content[code].lang}" hreflang="${content[code].lang}" data-language="${code}"`));
    }
    assert.match(html,/<meta name="color-scheme" content="light dark">/);
    assert.match(html,/<meta name="darkreader-lock">/);
    const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(([,id])=>id);
    assert.equal(new Set(ids).size,ids.length,'Component IDs are unique');
    assert.match(html,/href="https:\/\/editor\.capycanvas\.art\/"/);
    assert.match(html,/data-language="en"/); assert.match(html,/data-language="ja"/); assert.match(html,/data-language="zh"/); assert.match(html,/data-language="ko"/);
    assert.ok(html.includes(content[locale][page].title));
    assert.doesNotMatch(html,/<hr(?:\s|>)/);
    assert.doesNotMatch(html,/undefined|\[object Object\]|lorem ipsum/i);
    assert.doesNotMatch(html,/\bTODO\b/);
    if(page==='home') {
      assert.doesNotMatch(html, /<footer/);
      assert.ok(!html.includes(`href="/${route(locale,'privacy')}"`), 'The home page has no privacy link');
      assert.equal((html.match(/<p(?: [^>]*)?>/g)||[]).length,1);
      assert.match(html,/<h1 class="visually-hidden">Capy Canvas<\/h1>/);
      assert.doesNotMatch(html,/<figcaption|class="brand"|class="eyebrow"/);
      assert.equal((html.match(/class="button(?: primary)?"/g)||[]).length,3);
      for(const slide of ['sketch','paint','photo']) {
        assert.ok(html.includes(`<source media="(prefers-color-scheme: dark)" srcset="/assets/showcase/${slide}-dark.webp">`));
        assert.ok(html.includes(`<img src="/assets/showcase/${slide}-light.webp" width="1920" height="1080" alt="${escape(content[locale].home.slides[slide])}"`), `Slide ${slide} has its localized description`);
        assert.match(html,new RegExp(`<input class="visually-hidden" type="radio" name="workspace" value="${slide}"`));
      }
      assert.equal((html.match(/type="radio"[^>]*checked/g)||[]).length,1,'One workspace is chosen without JavaScript');
      assert.match(html,/value="paint" checked/);
      assert.ok(html.includes(`<legend class="visually-hidden">${content[locale].home.workspaces}</legend>`));
      assert.ok(modules.some(code=>code.includes('[data-showcase]')), 'Showcase behavior is bundled with the home page');
      assert.match(html,/<meta property="og:image" content="https:\/\/capycanvas.art\/assets\/showcase\/paint-light.webp">/);
      assert.match(html,/<meta property="og:image:width" content="1920">/);
      assert.doesNotMatch(html,/<header|class="nav-links"|href="https:\/\/github.com/);
    } else {
      const footer = html.match(/<footer class="site-footer">([\s\S]*?)<\/footer>/)?.[1];
      assert.ok(footer?.includes(content[locale].footer.madeBy));
      assert.ok(footer.includes(`href="/${route(locale,'privacy')}"`));
      const header = html.match(/<header[\s\S]*?<\/header>/)?.[0];
      assert.ok(!header.includes(`href="/${route(locale,'privacy')}" aria-current="page"`));
      assert.ok(!header.match(/<nav[\s\S]*?<\/nav>/)?.[0].includes(`href="/${route(locale,'privacy')}"`), 'Privacy is in the footer, not header navigation');
      assert.match(html,/class="nav-links"/); assert.match(html,/aria-current="page"/);
      assert.match(html,/href="https:\/\/github.com\/capyatelier\/capycanvas"/);
      assert.match(html,/href="https:\/\/github.com\/capyatelier\/capycanvas" target="_blank" rel="noopener noreferrer"/);
    }
    if(page==='download'||page==='versions') {
      for(const [,url] of html.matchAll(/href="(https:\/\/github\.com\/capyatelier\/capycanvas\/releases\/download\/[^"]+)"/g)) assert.match(url,releaseFile);
    }
    if(page==='versions') {
      assert.ok(html.includes(`href="${releasesUrl}"`));
      assert.ok(html.includes(escapeText(html.includes('<article class="release"')?content[locale].versions.intro:content[locale].versions.empty)));
    }
    if(page==='ipadBeta'||page==='androidBeta') {
      const t=content[locale][page];
      const links={ipadBeta:{invitation:'https://testflight.apple.com/join/VBcE4Z8r'},androidBeta:{group:'https://groups.google.com/g/capycanvas-beta',test:'https://play.google.com/apps/internaltest/4701362132766426867'}}[page];
      const steps=[...html.matchAll(/<li(?: [^>]*)?>([\s\S]*?)<\/li>/g)].map(([,step])=>step.trim());
      if(page==='ipadBeta') {
        assert.match(steps[0],/<a class="button store" href="https:\/\/apps\.apple\.com\/app\/testflight\/id899247664"[^>]*><svg[^>]*>[\s\S]*<\/svg>App Store<\/a>$/);
        steps[0]=steps[0].replace(/\s*<a class="button store"[\s\S]*$/,'');
      }
      assert.deepEqual(steps.map(step=>step.replace(/<a href="([^"]+)"[^>]*>([^<]+)<\/a>/g,(_,href,text)=>`{${Object.keys(links).find(key=>links[key]===href&&t.links[key]===text.replaceAll('&#39;',"'"))}}`)),t.steps.map(escapeText));
      assert.equal(html.includes(escapeText(t.note??'\0')),'note' in t);
    }
    if(page==='download') {
      const t=content[locale].download;
      for(const platform of ['iPadOS','Android','Linux','Windows','macOS']) assert.match(html,new RegExp(`<h3 id="platform-[a-z]+"[^>]*>${platform}</h3>`));
      for(const [platform,beta] of [['ipad','ipadBeta'],['android','androidBeta']]) assert.match(html,new RegExp(`<a class="button" href="/${route(locale,beta)}" aria-describedby="platform-${platform}"[^>]*>${escapeText(t.joinBeta)}</a>`));
      assert.match(html,/<div class="pick" data-pick hidden[^>]*>/);
      assert.match(html,new RegExp(`<div data-platform="other" hidden[^>]*><a class="button primary" href="https://editor\\.capycanvas\\.art/"[^>]*>.*?${escapeText(t.openWebApp)}</a>`));
      assert.ok(modules.some(code=>code.includes('[data-pick]')), 'Platform detection is bundled with the download page');
      assert.match(html,new RegExp(`<h1[^>]*>${escapeText(t.title)}</h1><p class="lead"[^>]*>${escapeText(t.intro)}</p><div class="pick"`));
      assert.ok(html.indexOf('class="pick"')<html.indexOf(`>${escapeText(t.otherPlatforms)}</h2>`));
      assert.ok(html.indexOf(`>${escapeText(t.otherPlatforms)}</h2>`)<html.indexOf(`href="${releasesUrl}"`));
      assert.ok(html.indexOf(`href="${releasesUrl}"`)<html.indexOf('class="pwa"'));
      if(html.includes(`href="/${route(locale,'versions')}"`)) assert.ok(html.includes(`<meta name="description" content="${escape(t.metaReleased)}">`));
      else assert.equal(html.split(`>${escapeText(t.status)}</p>`).length,4);
      const pwa=t.pwa;
      assert.ok(html.indexOf('class="pwa"')>html.indexOf('>macOS</h3>'));
      assert.doesNotMatch(html,/can be installed for offline use/);
      assert.doesNotMatch(html,/Open the installed app once online before using it offline\./);
      assert.ok(modules.some(code=>code.includes('[data-pwa-guide]')), 'PWA behavior is bundled with the download component');
      assert.match(html,/<div data-pwa-guide="generic"><ol>/);
      assert.match(html,/<div class="pwa-browser" hidden><details id="pwa-os"/);
      assert.match(html,/<select id="pwa-browser" aria-label=".+?"/);
      assert.doesNotMatch(html,/<label for="pwa-/);
      for(const os of Object.keys(pwa.systems)) assert.match(html,new RegExp(`data-os="${os}"[^>]*><svg`));
      for(const [id,guide] of Object.entries(pwa.guides)) {
        assert.ok(html.includes(`data-pwa-guide="${id}"`));
        assert.ok(html.includes(escapeText(guide.step)));
      }
    } else {
      assert.doesNotMatch(html,/class="pwa"/);
      assert.ok(modules.every(code=>!code.includes('[data-pwa-guide]')), 'Other pages do not load PWA behavior');
    }
    if(page==='documentation') {
      assert.ok(html.includes(escapeText(docsUI[locale].intro)));
      const overview=docsUI[locale].landing;
      for (const section of Object.values(overview.sections)) {
        assert.ok(html.includes(escapeText(section.title)) && html.includes(escapeText(section.text)) && (!section.link || html.includes(escapeText(section.link))), 'Concepts and links are translated');
      }
      assert.match(html, /src="\/assets\/guides\/illustration-light.webp"/);
      assert.match(html, /srcset="\/assets\/guides\/illustration-dark.webp"/);
      assert.ok(html.includes(overview.alt));
      assert.doesNotMatch(html, /<figcaption|class="phase-card"|class="reference-grid"|class="guide-image-hint"/);
      assert.ok(html.indexOf('id="workspace"') < html.indexOf('id="input"') && html.indexOf('id="input"') < html.indexOf('id="color"'));
      assert.ok(html.indexOf('class="docs-lead"') < html.indexOf('class="docs-concepts"'));
      assert.ok(html.indexOf('class="docs-concepts"') < html.indexOf('class="docs-start"'));
      assert.ok(html.includes(`href="/${route(locale, 'documentation')}illustration/"`), 'The overview links to the tutorial introduction');
      assert.match(html, /class="docs-sidebar"/);
      for (const {slug} of docTopics) assert.ok(html.includes(`href="/${route(locale, 'documentation')}${slug}/"`));
    }
  });
}
async function files(dir) { const entries=await readdir(dir,{withFileTypes:true}); return (await Promise.all(entries.map(e=>e.isDirectory()?files(join(dir,e.name)):join(dir,e.name)))).flat(); }
test('every local link and referenced asset resolves in the published output',async()=>{
  for(const path of (await files(root)).filter(p=>p.endsWith('.html'))) {
    const html=await readFile(path,'utf8');
    for(const [,raw] of html.matchAll(/(?:href|src|srcset)="([^"#]+)"/g)) {
      if(!raw.startsWith('/'))continue;
      const pathname=new URL(raw,'https://capycanvas.art').pathname;
      const target=join(root,pathname,pathname.endsWith('/')?'index.html':'');
      assert.ok((await stat(target)).isFile(),`${path}: missing ${raw}`);
    }
  }
});
test('GitHub Pages output, sitemap, error page and distributable notices',async()=>{
  assert.equal(await read('CNAME'),'capycanvas.art\n'); assert.equal(await read('.nojekyll'),'');
  assert.equal((await read('sitemap.xml')).match(/<loc>/g).length,Object.keys(languages).length*(pages.length+docTopics.length));
  assert.match(await read('robots.txt'),/Sitemap: https:\/\/capycanvas.art\/sitemap.xml/);
  assert.match(await read('404.html'),/name="robots" content="noindex"/);
  for(const name of ['LICENSE','LICENSE-MIT','LICENSE-APACHE','BRANDING.md','THIRD_PARTY_NOTICES.md']) assert.equal(await read(name),await readFile(name,'utf8'));
});
test('real screenshots are distinct, compressed WebP images with provenance',async()=>{
  const images=await Promise.all(['light','dark'].map(t=>readFile(join(root,`assets/guides/illustration-${t}.webp`))));
  for(const data of images) { assert.equal(data.subarray(0,4).toString(),'RIFF'); assert.equal(data.subarray(8,12).toString(),'WEBP'); assert.ok(data.length>10000&&data.length<900000); }
  assert.notDeepEqual(images[0],images[1]);
  const capture=JSON.parse(await read('assets/capture.json')); assert.match(capture.revision,/^[a-f0-9]{40}$/); assert.match(capture.artwork,/Watercolor Wash/);
});
test('favicon cache version matches the shipped icon',async()=>{
  const hash=createHash('sha256').update(await readFile(join(root,'assets/favicon.png'))).digest('hex').slice(0,12);
  for(const path of (await files(root)).filter(p=>p.endsWith('.html'))) assert.ok((await readFile(path,'utf8')).includes(`href="/assets/favicon.png?v=${hash}"`));
});
test('no external script, style, font, iframe, tracking or runtime dependency',async()=>{
  for(const path of (await files(root)).filter(p=>p.endsWith('.html'))) assert.doesNotMatch(await readFile(path,'utf8'),/<(?:script|iframe)[^>]*src="https?:|<link[^>]*rel="stylesheet"[^>]*href="https?:/);
  assert.doesNotMatch(await read('assets/style.css'),/@import|url\(https?:/);
});
