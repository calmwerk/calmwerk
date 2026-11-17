# Calmwerk – Website

Firmenwebsite von Calmwerk (Philipp Kremer, Karlsruhe): Websites, Shopify-Shops und Automatisierung für kleine und mittlere Unternehmen.

Statische Website ohne Build-Schritt: HTML, CSS und etwas JavaScript. Keine Cookies, kein Tracking, Schriften liegen im Repo.

## Lokal ansehen

```bash
python -m http.server 8080
```

Dann <http://localhost:8080> öffnen.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `index.html` | Startseite: Leistungen, Preise, Referenzen, Ablauf, Über mich, Kontakt |
| `impressum.html`, `datenschutz.html` | Rechtliches (Platzhalter in eckigen Klammern ausfüllen) |
| `assets/css/style.css` | Gestaltung nach Markenentwurf 0.1 (Farben, Schriften, Abstände) |
| `assets/js/main.js` | Menü auf dem Smartphone, E-Mail kopieren |
| `assets/fonts/` | Jost, Instrument Sans, IBM Plex Mono (SIL Open Font License) |
| `assets/img/` | Logo, Referenzbilder, Vorschaubild für Social Media, App-Icons (192/512, maskable) |
| `favicon.ico`, `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Favicons für Browser, Lesezeichen und Homescreen |
| `site.webmanifest` | Name, Farben und Icons für „Zum Homescreen hinzufügen“ |
| `robots.txt`, `sitemap.xml` | Hinweise für Suchmaschinen; Impressum und Datenschutz stehen auf `noindex` |
| `404.html` | Fehlerseite (GitHub Pages und Netlify nutzen sie automatisch) |

## Vor dem Livegang

- [ ] Domain `calmwerk.de` registrieren, E-Mail-Postfach `philipp@calmwerk.de` einrichten
- [ ] Impressum und Datenschutz: Anschrift, Telefon, Umsatzsteuer-Angabe, Hosting-Anbieter eintragen und rechtlich prüfen lassen
- [ ] Freigabe der Referenzkunden (MOVE ON Studio 76, Arte Sacra Studios, JD Cosmetics) für Namen und Bilder einholen
- [ ] Hosting wählen, z. B. GitHub Pages, Netlify oder ein deutscher Anbieter
- [ ] Nach dem Livegang: Domain in der Google Search Console bestätigen und `sitemap.xml` einreichen; Vorschau mit dem Rich-Results-Test und einem Link-Teilen auf LinkedIn prüfen
- [ ] Sobald die Anschrift feststeht, `streetAddress` und `postalCode` in den strukturierten Daten (`index.html`) ergänzen

## Veröffentlichen mit GitHub Pages

Settings → Pages → Branch `main`, Ordner `/ (root)`. Danach die eigene Domain unter „Custom domain“ eintragen und beim Domain-Anbieter die DNS-Einträge setzen.
