import test from 'node:test';
import assert from 'node:assert/strict';
import { detectInstallGuide } from '../site/assets/pwa.js';

import { profiles } from './pwa-profiles.mjs';


for (const [name, profile, guide, fallback, os, browser] of profiles) test(`PWA instructions: ${name}`, () => {
  assert.deepEqual(detectInstallGuide(profile), { os, browser, guide, fallback });
});
