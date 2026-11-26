/**
 * Eigene Projekte für die Projektübersicht im Hero, neben den Kundenreferenzen aus dem CMS.
 */
import type { ImageMetadata } from 'astro';
import harborOs from '../assets/showcase/harbor-os.jpg';
import finanzplaner from '../assets/showcase/finanzplaner.jpg';
import kopfOderZahl from '../assets/showcase/kopf-oder-zahl.jpg';

/** Eigene Projekte für den persönlichen Gebrauch: zeigen, was technisch hinter Calmwerk steckt. */
export interface EigenesProjekt {
  id: string;
  name: string;
  art: string;
  bild: ImageMetadata;
  /** true = Bildschirmfoto der App; false = Projektkarte ohne echte Oberfläche. */
  screenshot: boolean;
  text: string;
  technik: string;
}

export const eigeneProjekte: EigenesProjekt[] = [
  {
    id: 'harbor-os',
    name: 'Harbor OS',
    art: 'Persönlicher Assistent',
    bild: harborOs,
    screenshot: true,
    text: 'Mein persönliches Dashboard mit einem Team aus KI-Agenten: Aufgaben, Freigaben, Termine und Wetter auf einen Blick, getrennt nach Job, Selbstständigkeit und Privat. Agenten dürfen lesen, schreiben nur nach Freigabe.',
    technik: 'Next.js · TypeScript · Postgres · Claude',
  },
  {
    id: 'finanzplaner',
    name: 'Finanzplaner',
    art: 'Web-App fürs iPhone',
    bild: finanzplaner,
    screenshot: false,
    text: 'Lohn, Raten und Budget an einem Ort. Rechnungen, Lohnabrechnungen und Kontoauszüge werden als PDF eingelesen, komplett offline. Mit Ratenrechner, GiroCode zum Überweisen und Anmeldung per Passkey.',
    technik: '.NET 10 · Aspire · React · PWA',
  },
  {
    id: 'kopf-oder-zahl',
    name: 'Kopf oder Zahl',
    art: 'Kleine App',
    bild: kopfOderZahl,
    screenshot: true,
    text: 'Eine Münzwurf-App zum Installieren auf dem Handy. Mit Statistik, eigenen Beschriftungen, Tönen und Vibration, läuft offline. In zwei Prozent der Würfe passiert etwas Unerwartetes.',
    technik: 'HTML · CSS · JavaScript · PWA',
  },
];
