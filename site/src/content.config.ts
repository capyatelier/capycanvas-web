import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    figure: z.string(),
    image: z.object({ light: z.string(), dark: z.string(), alt: z.string() }).optional(),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { guides };
