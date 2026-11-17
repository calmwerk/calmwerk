// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Veröffentlichungsort: der Workflow übergibt die Werte aus GitHub Pages
// (calmwerk.github.io/calmwerk/ oder später calmwerk.de). Lokal gilt calmwerk.de.
const site = process.env.SITE_URL || 'https://calmwerk.de';
const base = process.env.BASE_PATH || '/';

// Seiten, die nicht in die Sitemap gehören (stehen auf noindex).
const NOINDEX = ['impressum', 'datenschutz', 'signatur', '404'];

export default defineConfig({
  site,
  base,
  // Ausgabe als impressum.html statt impressum/index.html – die bisherigen URLs bleiben gültig.
  build: { format: 'file' },
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.some((name) => new URL(page).pathname.includes(`/${name}`)),
    }),
  ],
});
