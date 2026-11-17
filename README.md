# Calmwerk – Website

Firmenwebsite von Calmwerk (Philipp Kremer, Karlsruhe): Websites, Shopify-Shops und Automatisierung für kleine und mittlere Unternehmen.

Gebaut mit [Astro](https://astro.build) und TypeScript. Astro erzeugt beim Build reines HTML und CSS; im Browser läuft nur ein kleines Script (Menü, E-Mail kopieren). Keine Cookies, kein Tracking, Schriften liegen im Repo.

## Lokal starten

Voraussetzung: Node.js 22.12 oder neuer.

```bash
npm install
npm run dev        # Entwicklungsserver mit Live-Neuladen, http://localhost:4321
npm run build      # Typprüfung und Build nach dist/
npm run preview    # gebaute Seite lokal ansehen
```

## Wo was steht

| Pfad | Inhalt |
| --- | --- |
| `src/data/site.ts` | **Alle Texte mit Zahlen an einer Stelle:** Pakete und Preise, Betreuung, Ablauf, Kontaktdaten, Anschrift. Startseite und Google-Daten lesen beide hieraus. |
| `src/content/referenzen/*.md` | Eine Datei pro Referenz: Kopfdaten (Titel, Branche, Bild, Umfang, Fokus) und Beschreibung. Neue Fallstudie = neue Datei. `published: false` blendet eine Referenz aus. |
| `src/assets/referenzen/` | Referenzbilder; Astro erzeugt daraus automatisch kleine WebP-Dateien in mehreren Größen. |
| `src/components/sections/` | Die Abschnitte der Startseite (Hero, Leistungen, Preise, Referenzen, Ablauf, Über mich, Kontakt). |
| `src/components/` | Kopfzeile, Fußzeile, Abschnittsüberschrift |
| `src/layouts/BaseLayout.astro` | Gemeinsamer `<head>`: Titel, Beschreibung, Canonical, Social-Media-Vorschau, Icons, strukturierte Daten |
| `src/layouts/LegalLayout.astro` | Rahmen für Impressum, Datenschutz und 404 (`noindex`) |
| `src/pages/` | Seiten: `index`, `impressum`, `datenschutz`, `404` |
| `src/lib/schema.ts` | Strukturierte Daten (schema.org) für Google, aus `site.ts` erzeugt |
| `src/styles/global.css` | Gestaltung nach Markenentwurf 0.1 (Farben, Schriften, Abstände) |
| `src/scripts/main.ts` | Menü auf dem Smartphone, Kopfzeile beim Scrollen, E-Mail kopieren |
| `src/lib/url.ts` | `withBase()` und `absoluteUrl()`: alle Links und Dateipfade passen sich dem Veröffentlichungsort an |
| `src/assets/fonts/` | Schriften; werden beim Build mit Hash im Dateinamen ausgeliefert |
| `public/` | Wird unverändert ausgeliefert: Favicons, Web-Manifest, Logo, Vorschaubild |

Die Sitemap (`sitemap-index.xml`) und `robots.txt` entstehen beim Build automatisch; Impressum, Datenschutz und 404 sind in der Sitemap ausgenommen.

**Pfade:** Im Code nie `/datei` schreiben, sondern `withBase('datei')` aus `src/lib/url.ts`. So läuft die Seite unter `calmwerk.github.io/calmwerk/` genauso wie unter `calmwerk.de`. Der Workflow liest Adresse und Basispfad aus GitHub Pages; lokal gilt `https://calmwerk.de`. Testweise mit Unterpfad bauen: `SITE_URL=https://calmwerk.github.io BASE_PATH=/calmwerk npm run build`.

## Veröffentlichen mit GitHub Pages

Der Workflow `.github/workflows/deploy.yml` baut bei jedem Push auf `main` und veröffentlicht die Seite unter https://calmwerk.github.io/calmwerk/. Für die eigene Domain: Settings → Pages → „Custom domain“ `calmwerk.de` eintragen, beim Domain-Anbieter die DNS-Einträge setzen und den Workflow einmal neu starten – Links, Canonical und Sitemap stellen sich dann von selbst auf `calmwerk.de` um. Bei Pull Requests baut der Workflow nur (Typprüfung inklusive), ohne zu veröffentlichen.

Netlify oder Cloudflare Pages gehen genauso: Build-Befehl `npm run build`, Ausgabeordner `dist`.

## Vor dem Livegang

- [ ] Domain `calmwerk.de` registrieren, E-Mail-Postfach `philipp@calmwerk.de` einrichten
- [ ] Impressum und Datenschutzerklärung rechtlich prüfen lassen (Hosting-Absatz ist auf GitHub Pages ausgelegt; bei einem anderen Hoster anpassen)
- [x] Anschrift und Telefon in Impressum, Datenschutz und `src/data/site.ts`
- [x] Freigabe der Referenzkunden (MOVE ON Studio 76, Arte Sacra Studios, JD Cosmetics) für Namen und Bilder
- [ ] Nach dem Livegang: Domain in der Google Search Console bestätigen und `sitemap-index.xml` einreichen; Vorschau mit dem Rich-Results-Test und einem Link-Teilen auf LinkedIn prüfen
