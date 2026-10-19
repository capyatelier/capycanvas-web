import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({
    pattern: '**/*.md', base: './src/content/guides',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string().optional(),
    description: z.string(),
    related: z.array(z.string()).default([]),
  }),
});

const policies = defineCollection({
  loader: glob({
    pattern: '*.md', base: './src/content/policies',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({ effectiveDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/) }),
});

const releaseNotes = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/releases' }),
  schema: z.object({ version: z.string().regex(/^\d+\.\d+\.\d+$/) }),
});

export const collections = { guides, policies, releaseNotes };
