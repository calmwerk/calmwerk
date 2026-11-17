/**
 * Pfade und absolute URLs, die zum Veröffentlichungsort passen.
 * Unter calmwerk.de ist der Basispfad „/“, unter calmwerk.github.io/calmwerk/ ist er „/calmwerk/“.
 * Der Workflow setzt beides beim Build (SITE_URL, BASE_PATH); lokal gilt calmwerk.de.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Pfad innerhalb der Website, z. B. withBase('impressum.html') → „/calmwerk/impressum.html“. */
export function withBase(path = ''): string {
  return BASE + path.replace(/^\//, '');
}

/** Absolute URL, z. B. für Canonical, Social-Media-Vorschau und strukturierte Daten. */
export function absoluteUrl(path = ''): string {
  return new URL(withBase(path), import.meta.env.SITE).href;
}
