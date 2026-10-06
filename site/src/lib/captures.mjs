import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync((import.meta.env && import.meta.env.CAPTURE_MANIFEST) || new URL('../../public/assets/capture.json', import.meta.url), 'utf8'));
const index = new Map(manifest.captures.flatMap(entry => entry.locales.map(locale => [`${entry.shot}|${locale}|${entry.theme}`, entry])));

export const captureScale = manifest.scale;

export function capture(shot, locale, theme) {
  return index.get(`${shot}|${locale}|${theme}`);
}

export function capturePair(shot, locale) {
  const light = capture(shot, locale, 'light'), dark = capture(shot, locale, 'dark');
  if (!light || !dark) throw new Error(`Missing editor capture: ${shot} (${locale})`);
  return { light: `/assets/${light.file}`, dark: `/assets/${dark.file}`, size: light.size };
}
