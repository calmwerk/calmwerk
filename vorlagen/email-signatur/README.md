# E-Mail-Signatur

Signatur nach Markenentwurf 0.1: Name, Rolle, Kontaktzeile in Mono, Messing-Linie, Logo.
Nicht Teil der Website – liegt hier nur als Vorlage.

## Verwenden

1. `signatur.html` im Browser öffnen.
2. Alles markieren (Strg+A bzw. ⌘+A) und kopieren.
3. Im Mailprogramm als Signatur einfügen (Wege siehe unten).

Das Logo wird von `https://calmwerk.de/assets/img/signatur-logo.png` geladen. Die Datei
`public/assets/img/signatur-logo.png` darf deshalb nicht gelöscht oder umbenannt werden,
sonst fehlt das Logo in allen bereits versendeten und künftigen Mails.

## Für weitere Personen

In `signatur.html` drei Stellen ändern: Name, Rolle und E-Mail-Adresse (zweimal: im `href="mailto:…"` und im sichtbaren Text).
Alles andere bleibt gleich. E-Mail-Programme ignorieren Stylesheets und laden keine Webfonts,
deshalb stehen alle Angaben als Inline-Styles in Tabellen.

## Einrichten

| Programm | Weg |
|---|---|
| Zoho Mail | Einstellungen → Signatur → Neue Signatur hinzufügen, einfügen, dem Absender zuordnen, speichern |
| Outlook (Web und neues Outlook) | Einstellungen → Konto → Signaturen → Neue Signatur, einfügen, als Standard wählen, speichern |
| Outlook für Windows (klassisch) | Datei → Optionen → E-Mail → Signaturen → Neu, einfügen, als Standard wählen, OK |
| Gmail | Einstellungen → Alle Einstellungen → Allgemein → Signatur → Neu erstellen, einfügen, speichern |
| Apple Mail (Mac) | Mail → Einstellungen → Signaturen → „+“, einfügen; „Immer meiner Standardschrift entsprechen“ abwählen |
| iPhone (Mail-App, Zoho-App) | Speichert nur Text – Textversion unten verwenden |

## Textversion

```
Philipp Kremer
Websites · Shops · Automatisierung
philipp.kremer@calmwerk.de · calmwerk.de · Karlsruhe
Calmwerk
```
