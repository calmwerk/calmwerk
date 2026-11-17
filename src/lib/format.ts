const euro = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 });

/** 1490 → „1.490 €“, mit ab = true → „ab 1.490 €“. */
export function formatEuro(betrag: number, ab = false): string {
  return `${ab ? 'ab ' : ''}${euro.format(betrag)} €`;
}

/** Betreuungspreis: 49 → „49 € / Monat“. */
export function formatMonat(betrag: number, ab = false): string {
  return `${formatEuro(betrag, ab)} / Monat`;
}
