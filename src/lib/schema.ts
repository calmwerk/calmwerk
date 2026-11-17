import { pakete, site } from '../data/site';
import { absoluteUrl } from './url';

/**
 * Strukturierte Daten (schema.org) für die Startseite.
 * Pakete und Preise kommen aus src/data/site.ts, damit Seite und Google-Daten nie auseinanderlaufen.
 */
export function startseiteSchema() {
  // Ohne Schrägstrich am Ende, damit `${base}/#business` korrekt wird.
  const base = absoluteUrl().replace(/\/$/, '');
  const { address } = site;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${base}/#business`,
        name: site.name,
        legalName: site.legalName,
        slogan: site.claim,
        description: site.shortDescription,
        url: `${base}/`,
        email: site.email,
        telephone: site.phoneE164,
        logo: `${base}/assets/img/icon-512.png`,
        image: absoluteUrl(site.ogImage),
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        address: {
          '@type': 'PostalAddress',
          streetAddress: address.street,
          postalCode: address.postalCode,
          addressLocality: address.locality,
          addressRegion: address.region,
          addressCountry: address.country,
        },
        areaServed: site.areaServed.map((name) => ({
          '@type': name === 'Südpfalz' ? 'AdministrativeArea' : 'City',
          name,
        })),
        founder: { '@id': `${base}/#founder` },
        knowsAbout: ['Webdesign', 'Shopify', 'Barrierefreiheit (WCAG)', 'Prozessautomatisierung', 'Künstliche Intelligenz'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Pakete',
          itemListElement: pakete.map((p) => ({
            '@type': 'Offer',
            name: p.name,
            description: p.inhalt,
            priceSpecification: {
              '@type': 'PriceSpecification',
              ...(p.ab ? { minPrice: p.preis } : { price: p.preis }),
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': `${base}/#founder`,
        name: site.founder.name,
        jobTitle: site.founder.jobTitle,
        worksFor: { '@id': `${base}/#business` },
        hasCredential: site.founder.credentials.map((name) => ({
          '@type': 'EducationalOccupationalCredential',
          name,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        url: `${base}/`,
        name: site.name,
        inLanguage: 'de-DE',
        publisher: { '@id': `${base}/#business` },
      },
    ],
  };
}
