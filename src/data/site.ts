/**
 * Zentrale Inhalte der Website. Preise, Pakete und Kontaktdaten stehen nur hier –
 * Startseite und strukturierte Daten für Google lesen beide aus dieser Datei.
 */

export const site = {
  name: 'Calmwerk',
  legalName: 'Calmwerk – Philipp Kremer',
  url: 'https://calmwerk.de',
  claim: 'Digitale Systeme, die ruhig laufen.',
  description:
    'Calmwerk baut digitale Systeme für kleine und mittlere Unternehmen in Karlsruhe: Website oder Shop als Fundament, darauf Automatisierung und KI. Festpreis, 3–4 Wochen, ein Ansprechpartner.',
  shortDescription:
    'Websites, Shops und Automatisierung für kleine und mittlere Unternehmen in Karlsruhe. Festpreis, 3–4 Wochen, ein Ansprechpartner.',
  email: 'philipp@calmwerk.de',
  /** Anzeige im Impressum. */
  phone: '+49 163 7285172',
  /** Für Links und strukturierte Daten (E.164). */
  phoneE164: '+491637285172',
  founder: {
    name: 'Philipp Kremer',
    jobTitle: 'Gründer',
    credentials: ['GitHub Foundations', 'Claude Certified Architect'],
  },
  address: {
    locality: 'Karlsruhe',
    region: 'Baden-Württemberg',
    country: 'DE',
    street: 'Keßlaustraße 28',
    postalCode: '76187',
  },
  areaServed: ['Karlsruhe', 'Ettlingen', 'Südpfalz'],
  /** Pfad relativ zur Website. */
  ogImage: 'assets/img/og-image.png',
  ogImageAlt: 'Calmwerk Logo auf dunklem Grund',
  themeColor: '#F3F3F0',
} as const;

export interface Paket {
  name: string;
  inhalt: string;
  dauer: string;
  /** Nettopreis in Euro. */
  preis: number;
  /** true = „ab“-Preis. */
  ab: boolean;
}

export const pakete: Paket[] = [
  { name: 'Start-Website', inhalt: 'Onepager oder kleine Website bis 5 Seiten, Domain, E-Mail, einfach selbst zu pflegen', dauer: '1–2 Wochen', preis: 1490, ab: true },
  { name: 'Business-Website', inhalt: 'Konzept, Design nach Ihrem Erscheinungsbild, bis 15 Seiten, Suchmaschinen-Grundlagen, auf Anfragen optimiert', dauer: '3–4 Wochen', preis: 2900, ab: true },
  { name: 'Shopify-Shop', inhalt: 'Einrichtung, eigenes Theme, Zahlung, Versand, Einbindung der Rechtstexte', dauer: '3–4 Wochen', preis: 3490, ab: true },
  { name: 'Automatisierung', inhalt: 'Ein Ablauf analysiert und automatisiert, zum Beispiel Anfrage → Kundenliste → Antwortmail', dauer: '1–2 Wochen', preis: 990, ab: true },
  { name: 'KI-Assistent', inhalt: 'Internes Dashboard mit Anbindung an Mail, Kalender und Daten; KI für Routineaufgaben', dauer: '4–6 Wochen', preis: 3900, ab: true },
  { name: 'Digital-Check', inhalt: 'Analyse Ihres Auftritts mit Befundliste und Maßnahmenplan; wird bei Auftrag angerechnet', dauer: '1 Tag', preis: 290, ab: false },
];

export interface Betreuung {
  name: string;
  /** Nettopreis pro Monat in Euro. */
  preis: number;
  ab: boolean;
  text: string;
}

export const betreuung: Betreuung[] = [
  { name: 'Care', preis: 49, ab: false, text: 'Überwachung, Updates, Backups, Sicherheit, kleine Änderungen bis 30 Minuten.' },
  { name: 'Care Plus', preis: 149, ab: false, text: 'Wie Care, dazu zwei Stunden Änderungen und Pflege Ihres Shops.' },
  { name: 'Growth', preis: 390, ab: false, text: 'Monatliche Auswertung, Optimierung für Suche und Anfragen, vier Stunden Weiterentwicklung.' },
  { name: 'Automation Care', preis: 99, ab: true, text: 'Betrieb und Anpassung Ihrer Automatisierungen, KI-Kosten transparent.' },
];

export const zahlungshinweis =
  'Alle Preise netto. Zahlung: 50 % bei Auftrag, 50 % bei Abnahme. Betreuung monatlich kündbar.';

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
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#preise', label: 'Preise' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#ueber', label: 'Über mich' },
];
