/**
 * Datos estructurados centralizados (schema.org).
 *
 * Objetivo GEO: que ChatGPT, Claude, Perplexity y Gemini puedan identificar
 * a Origami como entidad, entender qué servicios presta, dónde opera y a quién
 * sirve — y por lo tanto recomendarla ante consultas comerciales.
 */

export const SITE_URL = 'https://www.oriconsultoria.com'

export const ORGANIZATION_ID = `${SITE_URL}/#organization`

/** Entidad principal. Se emite una sola vez, en la home. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORGANIZATION_ID,
  name: 'Origami Consulting Group',
  alternateName: ['Origami Consulting', 'Origami Strategy', 'Origami Consulting Group S.A.S.'],
  url: SITE_URL,
  logo: `${SITE_URL}/logotipo-origami-horizontal.png`,
  image: `${SITE_URL}/opengraph-image.png`,
  description:
    'Firma boutique de consultoría estratégica con base en Quito, Ecuador. Acompaña a CEOs y equipos directivos en estructuración del crecimiento comercial B2B, arquitectura de alianzas estratégicas, acceso al canal corporativo y valoración estratégica de marca.',
  slogan: 'No solo diseñamos estrategia. Creamos valor estructurado.',
  priceRange: '$$$',
  currenciesAccepted: 'USD',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Eloy Alfaro y Pasaje A, Edificio Murano',
    addressLocality: 'Quito',
    addressRegion: 'Pichincha',
    postalCode: '170102',
    addressCountry: 'EC',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -0.1703472,
    longitude: -78.470309,
  },
  telephone: '+593985141999',
  email: 'alianzas@oriconsultoria.com',
  availableLanguage: ['es', 'en'],
  areaServed: [
    { '@type': 'Country', name: 'Ecuador' },
    { '@type': 'City', name: 'Quito' },
    { '@type': 'City', name: 'Guayaquil' },
    { '@type': 'Place', name: 'Latinoamérica' },
  ],
  knowsAbout: [
    'consultoría comercial B2B',
    'estrategia de ventas B2B',
    'alianzas estratégicas empresariales',
    'acceso al canal corporativo',
    'valoración estratégica de marca',
    'desarrollo de negocios',
    'expansión comercial en Ecuador',
    'estructuración de equipos comerciales',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '18:30',
    },
  ],
  sameAs: ['https://www.linkedin.com/company/origami-consulting-group-sas/'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de consultoría estratégica',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Estructuración de Crecimiento Comercial',
          description:
            'Alineación del modelo comercial con una visión de expansión sostenible: perfil de cliente ideal, arquitectura de pipeline, cadencia de prospección y métricas de gestión.',
          url: `${SITE_URL}/estrategia-de-ventas-b2b-ecuador`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoría Comercial B2B en Quito',
          description:
            'Arquitectura de prospección, optimización del ciclo de venta y estructuración de equipos comerciales para empresas con operación en Quito y Ecuador.',
          url: `${SITE_URL}/consultoria-comercial-b2b-quito`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Arquitectura de Alianzas Estratégicas',
          description:
            'Diseño y estructuración de alianzas comerciales que abren nuevos mercados y fuentes de valor.',
          url: `${SITE_URL}/alianzas-estrategicas-b2b-ecuador`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Acceso al Canal Corporativo B2B',
          description:
            'Introducción de un producto o servicio en empresas que compran a escala, conectando la oferta con gerencias de compras y de recursos humanos.',
          url: `${SITE_URL}/acceso-canal-corporativo-b2b-ecuador`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Valoración Estratégica de Marca',
          description:
            'Cuantificación y aumento del valor percibido de la organización, para procesos de venta, fusión o atracción de inversión.',
          url: `${SITE_URL}/valoracion`,
        },
      },
    ],
  },
}

/** Sitio web + caja de búsqueda semántica de la entidad. */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Origami Consulting Group',
  inLanguage: 'es-EC',
  publisher: { '@id': ORGANIZATION_ID },
}

export type Faq = { q: string; a: string }

/** Construye un bloque FAQPage a partir de las mismas preguntas visibles en la página. */
export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

/** Servicio ofrecido en una landing, vinculado a la entidad principal. */
export function serviceSchema(params: {
  name: string
  description: string
  url: string
  areaServed?: string
  serviceType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: params.url,
    serviceType: params.serviceType ?? params.name,
    areaServed: params.areaServed ?? 'Ecuador',
    provider: {
      '@type': 'ProfessionalService',
      '@id': ORGANIZATION_ID,
      name: 'Origami Consulting Group',
      url: SITE_URL,
    },
  }
}
