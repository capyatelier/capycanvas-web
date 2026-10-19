import { readFile } from 'node:fs/promises';
import { getCollection } from 'astro:content';
import { fetchReleases, publishedReleases, upcomingReleases } from './releases.mjs';
import { origin, type Platform } from './site';

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
export interface UpcomingRelease { version: string; notes: string }

const source = process.env.RELEASES_FILE;
export const releases: Release[] = publishedReleases(source ? JSON.parse(await readFile(source, 'utf8')) : await fetchReleases());
export const upcoming: UpcomingRelease[] = upcomingReleases(releases,
  (await getCollection('releaseNotes')).map(entry => ({ version: entry.data.version, markdown: entry.body ?? '' })),
  { base: `${origin}/` },
);
