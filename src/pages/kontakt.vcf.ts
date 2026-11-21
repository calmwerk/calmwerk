import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { absoluteUrl } from '../lib/url';

/**
 * Kontakt als vCard (3.0) – Ziel des QR-Codes auf der Visitenkarte.
 * Beim Öffnen bieten iPhone und Android „Kontakt hinzufügen“ an.
 * Daten kommen aus den CMS-Einstellungen, damit Karte und Website nie auseinanderlaufen.
 */

/** Sonderzeichen nach RFC 2426 maskieren. */
const esc = (value: string): string => value.replace(/[\;,]/g, (c) => `\\${c}`);

export const GET: APIRoute = () => {
  const [vorname, ...rest] = site.founder.name.split(' ');
  const nachname = rest.join(' ');
  const { address } = site;

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(nachname)};${esc(vorname)};;;`,
    `FN:${esc(site.founder.name)}`,
    `ORG:${esc(site.name)}`,
    'TITLE:Websites · Shops · Automatisierung',
    `EMAIL;TYPE=INTERNET,WORK:${site.email}`,
    `TEL;TYPE=CELL,VOICE:${site.phoneE164}`,
    `URL:${absoluteUrl()}`,
    `ADR;TYPE=WORK:;;${esc(address.street)};${esc(address.locality)};${esc(address.region)};${address.postalCode};Deutschland`,
    'END:VCARD',
    '',
  ];

  return new Response(lines.join('\r\n'), {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  });
};
