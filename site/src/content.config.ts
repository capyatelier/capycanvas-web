import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string().optional(),
    description: z.string(),
    purpose: z.string(),
    techniques: z.array(z.string()).min(2).max(4),
    figure: z.string(),
    image: z.object({ light: z.string(), dark: z.string(), alt: z.string() }).optional(),
    related: z.array(z.string()).default([]),
  }),
});

const policies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/policies' }),
  schema: z.object({ effectiveDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/) }),
});

export const collections = { guides, policies };
