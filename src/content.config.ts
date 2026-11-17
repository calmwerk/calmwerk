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

/** „Über mich“ auf der Startseite: eine Datei, im CMS unter „Über mich“. */
const ueber = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ueber' }),
  schema: ({ image }) =>
    z.object({
      /** Porträt; ohne Foto zeigt die Seite nur Text und Eckdaten. */
      foto: image().optional(),
      fotoAlt: z.string().default(''),
      einleitung: z.string().min(1),
      text: z.string().min(1),
      markierung: z.string().default(''),
    }),
});

export const collections = { referenzen, ueber };
