import { readFile } from 'node:fs/promises';
import { fetchReleases, publishedReleases } from './releases.mjs';
import type { Platform } from './site';

export type Variant = 'apk' | 'flatpak' | 'x64' | 'arm64' | 'appleSilicon';
export interface ReleaseFile { name: string; url: string }
export interface PlatformFile extends ReleaseFile { variant: Variant; install?: ReleaseFile }
export interface Release {
  version: string;
  date: string;
  url: string;
  notes: string;
  files: Partial<Record<Platform, PlatformFile[]>>;
}

const source = process.env.RELEASES_FILE;
export const releases: Release[] = publishedReleases(source ? JSON.parse(await readFile(source, 'utf8')) : await fetchReleases());
