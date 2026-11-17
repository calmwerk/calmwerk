import type { APIRoute } from 'astro';
import { absoluteUrl, withBase } from '../lib/url';

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\nDisallow: ${withBase('admin/')}\n\nSitemap: ${absoluteUrl('sitemap-index.xml')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
