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
| `src/content/einstellungen/*.json` | Im CMS gepflegt: Preise und Pakete, Kontakt und Anschrift, Texte der Startseite |
| `src/data/site.ts` | Liest und prüft die Einstellungen; dazu feste Inhalte wie Leistungen, Ablauf und Über mich. Startseite und Google-Daten lesen beide hieraus. |
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

## Inhalte bearbeiten (CMS)

Unter **https://calmwerk.github.io/calmwerk/admin/** (später `calmwerk.de/admin/`) läuft [Sveltia CMS](https://sveltiacms.app). Dort lassen sich ohne Code bearbeiten:

- **Referenzen:** Projekt anlegen, Bild hochladen, Texte ändern, Reihenfolge, **„Sichtbar“** zum Ein- und Ausblenden
- **Preise und Pakete:** Pakete, Betreuung, Hinweis unter den Preisen
- **Kontakt und Anschrift:** E-Mail, Telefon, Anschrift, Region (Impressum, Datenschutz, Kontakt und Google-Daten übernehmen sie)
- **Über mich:** Foto, Einleitung, Text und markierter Teil
- **Texte der Startseite:** Einleitung der Referenzen samt markiertem Teil

**Anmelden:** „Sign In Using Access Token“ wählen. Der Dialog verlinkt auf GitHub; dort einen Fine-grained Token für `calmwerk/calmwerk` mit **Contents: Read and write** erzeugen und einfügen. Der Token bleibt nur in diesem Browser gespeichert. „Sign In with GitHub“ funktioniert ohne eigenen OAuth-Dienst nicht.

**Speichern = veröffentlichen:** Jede Änderung ist ein Commit auf `main` (`docs: update …`); der Workflow baut und veröffentlicht die Seite in etwa einer Minute. Vor dem nächsten Code-Release `main` in `develop` mergen, damit die CMS-Änderungen dort ankommen. Fehlerhafte Eingaben (z. B. eine Postleitzahl mit vier Ziffern) lassen den Build mit einer klaren Meldung scheitern; die Live-Seite bleibt dann unverändert.

**Lokal:** In Chrome oder Edge „Work with Local Repository“ wählen und den Projektordner öffnen – Änderungen landen direkt in den Dateien, ohne Token.

Konfiguration: `public/admin/config.yml`. Die Inhalte liegen in `src/content/referenzen/`, `src/content/ueber/` und `src/content/einstellungen/`; geprüft werden sie in `src/data/site.ts` und `src/content.config.ts`.

## Veröffentlichen mit GitHub Pages

Der Workflow `.github/workflows/deploy.yml` baut bei jedem Push auf `main` und veröffentlicht die Seite unter https://calmwerk.github.io/calmwerk/. Für die eigene Domain: Settings → Pages → „Custom domain“ `calmwerk.de` eintragen, beim Domain-Anbieter die DNS-Einträge setzen und den Workflow einmal neu starten – Links, Canonical und Sitemap stellen sich dann von selbst auf `calmwerk.de` um. Bei Pull Requests baut der Workflow nur (Typprüfung inklusive), ohne zu veröffentlichen.

Netlify oder Cloudflare Pages gehen genauso: Build-Befehl `npm run build`, Ausgabeordner `dist`.

## Vor dem Livegang

- [ ] Domain `calmwerk.de` registrieren, E-Mail-Postfach `philipp@calmwerk.de` einrichten
- [ ] Impressum und Datenschutzerklärung rechtlich prüfen lassen (Hosting-Absatz ist auf GitHub Pages ausgelegt; bei einem anderen Hoster anpassen)
- [x] Anschrift und Telefon in Impressum, Datenschutz und `src/data/site.ts`
- [x] Freigabe der Referenzkunden (MOVE ON Studio 76, Arte Sacra Studios, JD Cosmetics) für Namen und Bilder
- [ ] Nach dem Livegang: Domain in der Google Search Console bestätigen und `sitemap-index.xml` einreichen; Vorschau mit dem Rich-Results-Test und einem Link-Teilen auf LinkedIn prüfen
