import { readFile } from 'node:fs/promises';
import { fetchReleases, publishedReleases } from './releases.mjs';

export interface ReleaseFile { name: string; url: string; size: number }
export interface Release {
  version: string;
  date: string;
  notes: string;
  files: Partial<Record<'linux' | 'windows' | 'mac', ReleaseFile>>;
  checksums?: ReleaseFile;
}

const source = process.env.RELEASES_FILE;
export const releases: Release[] = publishedReleases(source ? JSON.parse(await readFile(source, 'utf8')) : await fetchReleases());
