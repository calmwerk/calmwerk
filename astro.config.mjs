// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Seiten, die nicht in die Sitemap gehören (stehen auf noindex).
const NOINDEX = ['/impressum', '/datenschutz', '/404'];

export default defineConfig({
  site: 'https://calmwerk.de',
  // Ausgabe als impressum.html statt impressum/index.html – die bisherigen URLs bleiben gültig.
  build: { format: 'file' },
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.some((path) => new URL(page).pathname.startsWith(path)),
    }),
  ],
});
