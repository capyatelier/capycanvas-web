import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { content, languages } from '../site/content.mjs';

const root=resolve('docs');
const read=path=>readFile(join(root,path),'utf8');
const pages=['home','download','documentation'];
const route=(l,p)=>`${l==='en'?'':l+'/'}${p==='home'?'':p+'/'}`;
function shape(value) { return Array.isArray(value)?value.map(shape):value && typeof value==='object'?Object.fromEntries(Object.entries(value).map(([k,v])=>[k,shape(v)])):typeof value; }
for(const locale of Object.keys(languages)) {
  test(`${locale}: translation coverage matches English`,()=>assert.deepEqual(shape(content[locale]),shape(content.en)));
  for(const page of pages) test(`${locale}/${page}: static content, metadata and navigation`,async()=>{
    const html=await read(route(locale,page)+'index.html');
    assert.match(html,new RegExp(`<html lang="${content[locale].lang}"`));
    assert.equal((html.match(/<h1(?: [^>]*)?>/g)||[]).length,1);
    assert.equal((html.match(/<main /g)||[]).length,1);
    assert.equal((html.match(/rel="alternate"/g)||[]).length,5);
    assert.match(html,/<meta name="description" content=".+?">/);
    assert.match(html,/href="https:\/\/editor\.capycanvas\.art\/"/);
    assert.match(html,/data-language="en"/); assert.match(html,/data-language="ja"/); assert.match(html,/data-language="zh"/); assert.match(html,/data-language="ko"/);
    assert.ok(html.includes(content[locale][page].title));
    assert.doesNotMatch(html,/<footer|<hr(?:\s|>)/);
    assert.doesNotMatch(html,/undefined|\[object Object\]|TODO|lorem ipsum/i);
    if(page==='home') {
      assert.equal((html.match(/<p(?: [^>]*)?>/g)||[]).length,1);
      assert.match(html,/<h1 class="visually-hidden">Capy Canvas<\/h1>/);
      assert.doesNotMatch(html,/<figcaption|class="brand"|class="eyebrow"/);
      assert.equal((html.match(/class="button(?: primary)?"/g)||[]).length,3);
      assert.match(html,/<source media="\(prefers-color-scheme: dark\)" srcset="\/assets\/workspace-dark.webp">/);
      assert.match(html,/<img src="\/assets\/workspace-light.webp" width="1440" height="810" alt=".+?"/);
      assert.doesNotMatch(html,/<header|class="nav-links"|href="https:\/\/github.com/);
    } else {
      assert.match(html,/class="nav-links"/); assert.match(html,/aria-current="page"/);
      assert.match(html,/href="https:\/\/github.com\/capyatelier\/capycanvas"/);
    }
    if(page==='download') for(const platform of ['iPadOS','Android','Linux','Windows','macOS']) assert.ok(html.includes(`<h2>${platform}</h2>`));
    if(page==='documentation') {
      for(const text of [...content[locale].documentation.built,...content[locale].documentation.planned,content[locale].documentation.direction]) assert.ok(html.includes(text));
      assert.equal((html.match(/<section>/g)||[]).length,3);
      assert.doesNotMatch(html,/<aside/);
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
  assert.equal((await read('sitemap.xml')).match(/<loc>/g).length,12);
  assert.match(await read('robots.txt'),/Sitemap: https:\/\/capycanvas.art\/sitemap.xml/);
  assert.match(await read('404.html'),/name="robots" content="noindex"/);
  for(const name of ['LICENSE','LICENSE-MIT','LICENSE-APACHE','BRANDING.md','THIRD_PARTY_NOTICES.md']) assert.equal(await read(name),await readFile(name,'utf8'));
});
test('real screenshots are distinct, compressed WebP images with provenance',async()=>{
  const images=await Promise.all(['light','dark'].map(t=>readFile(join(root,`assets/workspace-${t}.webp`))));
  for(const data of images) { assert.equal(data.subarray(0,4).toString(),'RIFF'); assert.equal(data.subarray(8,12).toString(),'WEBP'); assert.ok(data.length>10000&&data.length<500000); }
  assert.notDeepEqual(images[0],images[1]);
  const capture=JSON.parse(await read('assets/capture.json')); assert.match(capture.revision,/^[a-f0-9]{40}$/); assert.match(capture.artwork,/Watercolor Wash/);
});
test('no external script, style, font, iframe, tracking or runtime dependency',async()=>{
  for(const path of (await files(root)).filter(p=>p.endsWith('.html'))) assert.doesNotMatch(await readFile(path,'utf8'),/<(?:script|iframe)[^>]*src="https?:|<link[^>]*rel="stylesheet"[^>]*href="https?:/);
  assert.doesNotMatch(await read('assets/style.css'),/@import|url\(https?:/);
});
