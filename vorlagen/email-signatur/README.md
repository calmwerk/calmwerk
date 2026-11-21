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

Das Logo ist ein transparentes PNG in Grau (#7A8087) mit Messing-Akzent, damit es auf hellem und
dunklem Hintergrund (Dunkelmodus in iOS-Mail, Outlook, Zoho) gleich gut lesbar ist. Eine weiße Fläche
hinter dem Logo würde im Dunkelmodus als Kasten erscheinen.

## Für weitere Personen

In `signatur.html` ändern: Name, Rolle, E-Mail-Adresse und Telefon (die beiden letzten jeweils zweimal: im Link `mailto:…` bzw. `tel:…` und im sichtbaren Text).
Alles andere bleibt gleich. E-Mail-Programme ignorieren Stylesheets und laden keine Webfonts,
deshalb stehen alle Angaben als Inline-Styles in Tabellen.

## Gestaltung

- Größen passend zum Mailtext auf dem Smartphone (17 px): Name 17 px fett, Rolle 15 px, Kontakt 14 px.
- Kontakt untereinander wie auf der Visitenkarte, damit auf dem Handy nichts mitten in der Zeile umbricht.
- Schriftart steht zusätzlich an jedem Text (`span`/`a`), weil manche Mailprogramme sie an Tabellenzellen entfernen.
- Farben dunkel genug, dass iOS und Outlook sie im Dunkelmodus hell und gut lesbar umrechnen.

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
philipp.kremer@calmwerk.de
+49 163 7285172
calmwerk.de · Karlsruhe
```
