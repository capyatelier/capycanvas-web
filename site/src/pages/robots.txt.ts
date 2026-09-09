import type { APIRoute } from 'astro';
import { origin } from '../lib/site';

export const GET: APIRoute = () => new Response(
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
