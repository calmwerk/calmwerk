import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Referenzen / Fallstudien: eine Markdown-Datei pro Projekt in src/content/referenzen.
 * Der Fließtext der Datei ist die Projektbeschreibung auf der Startseite.
 */
const referenzen = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/referenzen' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      branche: z.string(),
      ort: z.string(),
      /** Reihenfolge auf der Startseite, aufsteigend. */
      order: z.number().int(),
      image: image(),
      imageAlt: z.string(),
      umfang: z.string(),
      fokus: z.string(),
      /** Auf false setzen, um eine Referenz auszublenden (z. B. bis zur Freigabe). */
      published: z.boolean().default(true),
    }),
});

export const collections = { referenzen };
