import test from 'node:test';
import assert from 'node:assert/strict';
import { detectInstallGuide } from '../site/assets/pwa.js';

import { profiles } from './pwa-profiles.mjs';


for (const [name, browser, guide, fallback] of profiles) test(`PWA instructions: ${name}`, () => {
  assert.deepEqual(detectInstallGuide(browser), { guide, fallback });
});
