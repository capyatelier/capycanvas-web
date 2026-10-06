import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { languages } from '../../src/data/content.mjs';

export const locales = Object.keys(languages);
export const appLanguage = locale => locale === 'zh' ? 'zh-Hans' : locale;
export const fixedLanguages = `Object.defineProperty(navigator,'languages',{get:()=>window.__captureLanguages||['en'],configurable:true});Object.defineProperty(navigator,'language',{get:()=>(window.__captureLanguages||['en'])[0],configurable:true});`;

const layerKeys = key => ['documents-current-ink', 'documents-paper', 'documents-photo-name', 'resources-layer-dodge-burn', 'resources-layer-frequency-separation', 'resources-layer-low', 'resources-layer-high'].includes(key) || key.startsWith('resources-filter-');
const paletteKeys = key => key.startsWith('creation-palette-');
const swatchKeys = key => key.startsWith('creation-color-');

async function messages(root, tag) {
  const entries = [];
  for (const file of ['documents.ftl', 'resources.ftl', 'creation.ftl']) {
    for (const line of (await readFile(join(root, tag, file), 'utf8')).split('\n')) {
      const match = line.match(/^([a-z0-9-]+) = (.+)$/);
      if (match) entries.push([match[1], match[2]]);
    }
  }
  return Object.fromEntries(entries);
}

export async function defaultNames(root) {
  const english = await messages(root, 'en');
  const escape = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const tables = {};
  for (const locale of locales) {
    const local = locale === 'en' ? english : await messages(root, appLanguage(locale));
    const exact = keys => {
      const map = new Map();
      for (const [key, value] of Object.entries(english).filter(([key]) => keys(key))) {
        assert.ok(local[key] && !local[key].includes('{'), `Default name ${key} in ${locale}`);
        assert.ok(!map.has(value) || map.get(value) === local[key], `Unambiguous default name ${value} in ${locale}`);
        map.set(value, local[key]);
      }
      return map;
    };
    const pattern = (key, variables) => {
      let source = escape(english[key]);
      for (const variable of variables) source = source.replace(escape(`{ $${variable} }`), variable === 'number' ? '(\\d+)' : '(.+)');
      assert.ok(variables.every(variable => local[key]?.includes(`{ $${variable} }`)), `Default name ${key} in ${locale}`);
      return { match: new RegExp(`^${source}$`), template: local[key], variables };
    };
    tables[locale] = {
      layer: { exact: exact(layerKeys), numbered: ['documents-layer-name', 'documents-group-name', 'documents-selection-name'].map(key => pattern(key, ['number'])), named: [pattern('documents-copy-name', ['name'])] },
      palette: { exact: exact(paletteKeys), numbered: [], named: [pattern('creation-numbered-name', ['name', 'number'])] },
      swatch: { exact: exact(swatchKeys), numbered: [], named: [pattern('creation-numbered-name', ['name', 'number'])] },
    };
  }
  const localize = kind => function translate(name, locale) {
    const table = tables[locale][kind];
    if (table.exact.has(name)) return table.exact.get(name);
    for (const { match, template } of table.numbered) {
      const found = name.match(match);
      if (found) return template.replace('{ $number }', found[1]);
    }
    for (const { match, template, variables } of table.named) {
      const found = name.match(match);
      const inner = found && translate(found[1], locale);
      if (inner !== null && inner !== undefined) return variables.reduce((text, variable, index) => text.replace(`{ $${variable} }`, variable === 'name' ? inner : found[index + 1]), template);
    }
    return null;
  };
  return { layer: localize('layer'), palette: localize('palette'), swatch: localize('swatch') };
}

export async function messageReader(root) {
  const tables = {};
  for (const locale of locales) {
    const dir = join(root, appLanguage(locale));
    const entries = [];
    for (const file of (await readdir(dir)).filter(name => name.endsWith('.ftl')).sort()) {
      for (const line of (await readFile(join(dir, file), 'utf8')).split('\n')) {
        const match = line.match(/^([a-z0-9-]+) = (.+)$/);
        if (match) entries.push([match[1], match[2]]);
      }
    }
    tables[locale] = Object.fromEntries(entries);
  }
  return (key, locale) => {
    const value = tables[locale][key];
    assert.ok(value && !value.includes('{'), `Single-line message ${key} in ${locale}`);
    return value;
  };
}

export function nameLocalizer(b, localize) {
  const snapshot = () => b.evaluate(`(()=>{const panel=layerApp.app.palette_panel();return {
    layers:layerApp.state().layers.map(({id,label,locked})=>({id:Number(id),name:label,locked})),
    palettes:panel.palettes.map(({id,name})=>({id:Number(id),name})),
    swatches:panel.swatches.filter(s=>s.id!=null).map(({id,name})=>({id:Number(id),name})),
    modified:layerApp.state().document_file.modified,
    undo:!!layerApp.state().commands.find(c=>c.id==='undo')?.enabled,
    redo:!!layerApp.state().commands.find(c=>c.id==='redo')?.enabled};})()`);
  const renamed = (rows, kind) => `(()=>{const panel=layerApp.app.palette_panel();const now=${kind==='layers'?"layerApp.state().layers.map(r=>({id:Number(r.id),name:r.label}))":kind==='palettes'?"panel.palettes.map(r=>({id:Number(r.id),name:r.name}))":"panel.swatches.filter(s=>s.id!=null).map(r=>({id:Number(r.id),name:r.name}))"};return ${JSON.stringify(rows)}.every(([id,name])=>now.find(row=>row.id===id)?.name===name)})()`;
  const rename = async (changes, key) => {
    const actions = [
      ...changes.layers.map(row => ({ type: 'layer', action: { op: 'rename', id: row.id, name: row[key] } })),
      ...changes.palettes.map(row => ({ type: 'color', action: { op: 'library', action: { op: 'rename_palette', id: row.id, name: row[key] } } })),
      ...changes.swatches.map(row => ({ type: 'color', action: { op: 'library', action: { op: 'rename', id: row.id, name: row[key] } } })),
    ];
    if (!actions.length) return;
    await b.evaluate(`${JSON.stringify(actions)}.forEach(action=>layerApp.dispatch(action));void 0`);
    for (const kind of ['layers', 'palettes', 'swatches']) if (changes[kind].length) await b.until(renamed(changes[kind].map(row => [row.id, row[key]]), kind), 10000);
  };
  const kinds = { layers: 'layer', palettes: 'palette', swatches: 'swatch' };
  return {
    async plan(clip) {
      const state = await snapshot();
      const pick = (rows, kind) => rows.filter(row => localize[kind](row.name, 'en') !== null);
      const candidates = { layers: pick(state.layers, 'layer'), palettes: pick(state.palettes, 'palette'), swatches: pick(state.swatches, 'swatch') };
      const labels = [...new Set(Object.values(candidates).flat().map(row => row.name))];
      const shown = labels.length ? await b.evaluate(`__capture.texts(${JSON.stringify(clip)},${JSON.stringify(labels)},${JSON.stringify(candidates.layers.map(row => row.name))})`) : [];
      const plan = Object.fromEntries(Object.entries(candidates).map(([kind, rows]) => [kind, rows.filter(row => shown.includes(row.name))]));
      assert.ok(plan.layers.every(row => !row.locked), `Layers with default names are unlocked: ${plan.layers.map(row => row.name)}`);
      plan.forward = state.undo && !state.redo && state.modified;
      if (plan.layers.length && !plan.forward) {
        const visible = await b.evaluate(`({undo:__capture.controls(${JSON.stringify(clip)},'undo'),redo:__capture.controls(${JSON.stringify(clip)},'redo'),modified:__capture.marked(${JSON.stringify(clip)})})`);
        assert.ok(!(visible.undo && !state.undo) && !(visible.redo && state.redo) && !(visible.modified && !state.modified), `Localizing ${plan.layers.map(row => row.name)} would change the Undo, Redo or unsaved state shown; edit the drawing before this shot`);
      }
      return { ...plan, modified: state.modified, empty: !Object.values(plan).some(rows => rows.length) };
    },
    async apply(plan, locale) {
      if (plan.empty) return;
      plan.changes = Object.fromEntries(Object.entries(kinds).map(([kind, single]) => [kind, plan[kind].map(row => ({ id: row.id, from: row.name, to: localize[single](row.name, locale) })).filter(row => row.to !== row.from)]));
      await rename(plan.changes, 'to');
    },
    async restore(plan) {
      const changes = plan.changes;
      plan.changes = null;
      if (!changes) return false;
      if (changes.layers.length && !plan.forward) {
        await b.evaluate(`for(let i=0;i<${changes.layers.length};i++)layerApp.dispatch({type:'invoke',command:'undo'});void 0`);
        await b.until(renamed(changes.layers.map(row => [row.id, row.from]), 'layers'), 10000);
        await rename({ ...changes, layers: [] }, 'from');
        assert.equal(await b.evaluate('layerApp.state().document_file.modified'), plan.modified, 'Localizing layer names leaves the saved state');
        return true;
      }
      await rename(changes, 'from');
      return false;
    },
  };
}

export function languageSwitcher(b) {
  let current = 'en';
  return {
    get current() { return current; },
    async use(locale) {
      if (locale === current) return;
      const tag = appLanguage(locale);
      await b.evaluate(`window.__captureLanguages=${JSON.stringify([tag])};dispatchEvent(new Event('languagechange'));void 0`);
      await b.until(`!layerApp.app.language_pending()&&document.documentElement.lang===${JSON.stringify(tag)}`, 15000);
      current = locale;
    },
  };
}
