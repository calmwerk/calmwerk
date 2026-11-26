/**
 * Zentrale Inhalte der Website. Startseite und strukturierte Daten für Google lesen beide aus dieser Datei.
 */

import { z } from 'astro/zod';
import firmaJson from '../content/einstellungen/firma.json';
import preiseJson from '../content/einstellungen/preise.json';
import startseiteJson from '../content/einstellungen/startseite.json';

/*
 * Inhalte, die im CMS (/admin/) gepflegt werden, liegen als JSON in src/content/einstellungen/.
 * Hier werden sie beim Build geprüft – ein Tippfehler im CMS bricht den Build mit klarer Meldung ab,
 * statt eine kaputte Seite zu veröffentlichen.
 */

const firma = z
  .object({
    email: z.email(),
    telefon: z.string().regex(/^\+?[\d\s/()-]+$/, 'Telefonnummer nur mit Ziffern, Leerzeichen, +, -, /'),
    strasse: z.string().min(1),
    plz: z.string().regex(/^\d{5}$/, 'Postleitzahl mit fünf Ziffern'),
    ort: z.string().min(1),
    region: z.array(z.string().min(1)).min(1),
  })
  .parse(firmaJson);

const paketSchema = z.object({
  name: z.string().min(1),
  inhalt: z.string().min(1),
  dauer: z.string().min(1),
  /** Preis in Euro. */
  preis: z.number().int().nonnegative(),
  /** true = „ab“-Preis. */
  ab: z.boolean(),
});

const betreuungSchema = z.object({
  name: z.string().min(1),
  /** Preis pro Monat in Euro. */
  preis: z.number().int().nonnegative(),
  ab: z.boolean(),
  text: z.string().min(1),
});

const preise = z
  .object({
    pakete: z.array(paketSchema).min(1),
    betreuung: z.array(betreuungSchema),
    hinweis: z.string(),
  })
  .parse(preiseJson);

export const startseite = z
  .object({
    referenzenIntro: z.string().min(1),
    /** Teil des Intros, der wie mit der Maus markiert erscheint (leer = keine Markierung). */
    referenzenMarkierung: z.string().default(''),
  })
  .parse(startseiteJson);

export type Paket = z.infer<typeof paketSchema>;
export type Betreuung = z.infer<typeof betreuungSchema>;

export const pakete: Paket[] = preise.pakete;
export const betreuung: Betreuung[] = preise.betreuung;
export const zahlungshinweis = preise.hinweis;

export const site = {
  name: 'Calmwerk',
  legalName: 'Calmwerk – Philipp Kremer',
  claim: 'Digitale Systeme, die ruhig laufen.',
  description:
    'Calmwerk baut digitale Systeme für kleine und mittlere Unternehmen in Karlsruhe: Website oder Shop als Fundament, darauf Automatisierung und KI. Festpreis, 3–4 Wochen, ein Ansprechpartner.',
  shortDescription:
    'Websites, Shops und Automatisierung für kleine und mittlere Unternehmen in Karlsruhe. Festpreis, 3–4 Wochen, ein Ansprechpartner.',
  email: firma.email,
  /** Anzeige im Impressum. */
  phone: firma.telefon,
  /** Für strukturierte Daten (E.164), aus der Anzeige abgeleitet: „+49 163 …“ → „+49163…“. */
  phoneE164: firma.telefon.replace(/[^\d+]/g, '').replace(/^0/, '+49'),
  founder: {
    name: 'Philipp Kremer',
    jobTitle: 'Gründer',
    credentials: ['GitHub Foundations', 'Claude Certified Architect'],
  },
  address: {
    street: firma.strasse,
    postalCode: firma.plz,
    locality: firma.ort,
    region: 'Baden-Württemberg',
    country: 'DE',
  },
  areaServed: firma.region,
  /** Pfad relativ zur Website. */
  ogImage: 'assets/img/og-image.png',
  ogImageAlt: 'Calmwerk Logo auf dunklem Grund',
  themeColor: '#F3F3F0',
} as const;

export interface Schicht {
  nummer: number;
  titel: string;
  text: string;
  punkte: string[];
}

export const schichten: Schicht[] = [
  { nummer: 1, titel: 'Präsenz', text: 'Der Auftritt, mit dem Kunden Sie finden und Ihnen vertrauen.', punkte: ['Website mit eigenem Design', 'Shopify-Shop mit eigenem Theme', 'Domain, E-Mail und Hosting', 'Barrierefreiheit nach WCAG'] },
  { nummer: 2, titel: 'Prozesse', text: 'Abläufe, die heute Zeit kosten, laufen automatisch.', punkte: ['Online-Terminbuchung', 'Anfragen automatisch beantworten', 'Daten zwischen Ihren Tools verbinden', 'Wöchentliche Berichte'] },
  { nummer: 3, titel: 'Intelligenz', text: 'KI-Assistenten übernehmen Routinearbeit, mit Kosten im Blick.', punkte: ['Ein Dashboard für Postfach, Kalender und Aufträge', 'Antwortentwürfe und Zusammenfassungen', 'Passendes KI-Modell je Aufgabe', 'Ihre Daten bleiben unter Ihrer Kontrolle'] },
];

export interface Schritt {
  titel: string;
  text: string;
  dauer: string;
}

export const ablauf: Schritt[] = [
  { titel: 'Erstgespräch', text: 'Ziele, Budget und Zeitrahmen. Vor Ort in Karlsruhe oder online.', dauer: '30 Min. · kostenlos' },
  { titel: 'Konzept und Festpreis', text: 'Seitenstruktur, Funktionen und Ideen für Automatisierung, mit verbindlichem Angebot.', dauer: 'ca. 1 Woche' },
  { titel: 'Design und Umsetzung', text: 'Entwurf nach Ihrem Erscheinungsbild, eine Korrekturschleife inklusive, Umsetzung mit Live-Vorschau.', dauer: '2–3 Wochen' },
  { titel: 'Übergabe und Betreuung', text: 'Prüfung auf Smartphone, Ladezeit und Rechtliches, Schulung und auf Wunsch laufende Betreuung.', dauer: 'Livegang' },
];

export const prinzipien = [
  { titel: 'Festpreis', text: 'Keine Abrechnung nach Stunden, keine Überraschungen auf der Rechnung.' },
  { titel: 'Ein Ansprechpartner', text: 'Von der Beratung bis zum Code sprechen Sie mit derselben Person.' },
  { titel: 'Gebaut zum Wachsen', text: 'Jede Website ist von Anfang an bereit für Automatisierungen.' },
];

export const fakten: [string, string][] = [
  ['Ausbildung', 'Fachinformatiker Anwendungsentwicklung'],
  ['Erfahrung', '8 Jahre Softwareentwicklung'],
  ['Technik', '.NET · TypeScript · Vue · Shopify'],
  ['Zertifikate', site.founder.credentials.join(' · ')],
  ['Standort', site.address.locality],
];

export const navigation = [
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#preise', label: 'Preise' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#ueber', label: 'Über mich' },
];
