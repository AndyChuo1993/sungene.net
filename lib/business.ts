import { Lang } from '@/lib/i18n'
import { LANG_META, pageUrl, langMeta} from '@/lib/seo'
import { SITE_URL } from '@/lib/siteConfig'

export const BRAND = {
  legalName: 'SunGene Co., LTD.',
  alternateName: '上瑾錸有限公司',
  description: 'SunGene is a Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Three capability areas: custom packaging (mooncake boxes, premium gift boxes, retail packaging, corrugated cartons, paper bags), home & living (drinkware, ceramics, blankets, branded merchandise), and outdoor products (event swag, branded headwear, cooler bags). Pre-shipment AQL inspection by in-house SunGene staff at partner factories. Taiwan-registered invoicing entity (Tax ID 94111922).',
  telephoneTW: '+886437032705',
  telephoneCN: '+8618144132078',
  email: 'contact@sungene.net',
  foundingDate: '2023',
  sameAs: [
    'https://momas.en.alibaba.com',
    'https://www.linkedin.com/company/sungene-co-ltd',
  ],
  knowsAbout: [
    'Custom Packaging Supply', 'Mooncake Gift Boxes', 'Premium Rigid Gift Boxes',
    'Corrugated Mailer Boxes', 'Paper Bags & Tubes', 'Book & Lookbook Printing',
    'Home & Living Products Supply', 'Drinkware & Ceramics',
    'Branded Blankets & Soft Goods',
    'Outdoor Products Supply', 'Branded Headwear & Caps',
    'Event Swag & Cooler Bags',
    'Manufacturing Coordination', 'Export Management',
    'Taiwan-based Trading Company', 'Pre-shipment AQL Inspection',
    'Taiwan-registered Invoicing',
  ],
} as const

export const OFFICES = {
  tw: {
    name: 'SunGene Taiwan HQ',
    address: {
      streetAddress: 'No. 201, Guangfu Rd., Central Dist.',
      addressLocality: 'Taichung City',
      addressRegion: 'Taichung',
      postalCode: '400',
      addressCountry: 'TW',
    },
    geo: { latitude: 24.1433, longitude: 120.6845 },
    telephone: BRAND.telephoneTW,
  },
  cn: {
    name: 'SunGene Xiamen Office',
    address: {
      streetAddress: 'Rm. 1001-2, Bldg. A1, Yincheng Zhigu, No. 6788-1 Binhai W. Ave., Tong\'an District',
      addressLocality: 'Xiamen',
      addressCountry: 'CN',
    },
    telephone: BRAND.telephoneCN,
  },
} as const

export function logoUrl(baseUrl: string) {
  return `${baseUrl}/logo/sungene.png`
}

export function buildWebsiteSchema(opts: { baseUrl?: string; lang: Lang }) {
  const baseUrl = opts.baseUrl ?? SITE_URL
  const lang = opts.lang
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: BRAND.legalName,
    alternateName: ['SunGene', BRAND.alternateName],
    url: baseUrl,
    inLanguage: langMeta(lang).htmlLang,
    publisher: { '@id': `${baseUrl}/#org` },
    copyrightHolder: { '@id': `${baseUrl}/#org` },
    copyrightYear: new Date().getFullYear(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/${lang}/contact`,
      },
      'query-input': 'required name=search_term_string',
    },
    siteNavigationElement: [
      { '@type': 'WebPage', url: pageUrl(lang, '/sourcing'), name: 'Products' },
      { '@type': 'WebPage', url: pageUrl(lang, '/sourcing/packaging'), name: 'Custom Packaging' },
      { '@type': 'WebPage', url: pageUrl(lang, '/sourcing/home'), name: 'Home & Living' },
      { '@type': 'WebPage', url: pageUrl(lang, '/sourcing/garden'), name: 'Outdoor Products' },
      { '@type': 'WebPage', url: pageUrl(lang, '/sourcing/beauty'), name: 'Beauty & Wellness' },
      { '@type': 'WebPage', url: pageUrl(lang, '/about'), name: 'About SunGene' },
      { '@type': 'WebPage', url: pageUrl(lang, '/resources'), name: 'Sourcing Guides' },
      { '@type': 'WebPage', url: pageUrl(lang, '/contact'), name: 'Contact' },
    ],
  }
}

export function buildOrganizationSchema(opts: { baseUrl?: string; lang: Lang }) {
  const baseUrl = opts.baseUrl ?? SITE_URL
  const lang = opts.lang
  const logo = logoUrl(baseUrl)
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${baseUrl}/#org`,
    inLanguage: langMeta(lang).htmlLang,
    name: BRAND.legalName,
    legalName: BRAND.legalName,
    alternateName: [BRAND.alternateName, 'SunGene'],
    description: BRAND.description,
    slogan: 'Reliable Product Supply from Asia — Taiwan-based trading company across Taiwan and China.',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      '@id': `${baseUrl}/#logo`,
      url: logo,
      contentUrl: logo,
      caption: BRAND.legalName,
      width: 512,
      height: 512,
    },
    image: logo,
    telephone: BRAND.telephoneTW,
    email: BRAND.email,
    foundingDate: BRAND.foundingDate,
    foundingLocation: { '@type': 'Place', name: 'Taichung, Taiwan' },
    naics: '425120',
    isicV4: '4690',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 25 },
    keywords: [...BRAND.knowsAbout].join(', '),
    award: [
      '3+ years operating public Alibaba.com supplier storefront (momas.en.alibaba.com)',
      'Taiwan + China dual-entity registration (Taiwan-registered invoicing)',
      'In-house pre-shipment AQL inspection (not subcontracted)',
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Packaging Supply', url: pageUrl(lang, '/sourcing/packaging') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home & Living Products Supply', url: pageUrl(lang, '/sourcing/home') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outdoor Products Supply', url: pageUrl(lang, '/sourcing/garden') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Beauty & Wellness Gift Sets', url: pageUrl(lang, '/sourcing/beauty') } },
    ],
    areaServed: [
      { '@type': 'Country', name: 'Taiwan' },
      { '@type': 'Country', name: 'Vietnam' },
      { '@type': 'Country', name: 'Thailand' },
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'Country', name: 'Malaysia' },
      { '@type': 'Country', name: 'Philippines' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'Japan' },
      { '@type': 'Country', name: 'South Korea' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'Country', name: 'Brazil' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Country', name: 'Italy' },
      { '@type': 'Country', name: 'Turkey' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Egypt' },
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'Country', name: 'South Africa' },
      { '@type': 'Country', name: 'Australia' },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Public Alibaba.com supplier storefront, 3+ years active',
        credentialCategory: 'Marketplace Presence',
        recognizedBy: { '@type': 'Organization', name: 'Alibaba.com' },
        about: 'SunGene maintains a public supplier storefront at momas.en.alibaba.com active since ~2023. Star rating and verification badges visible on the storefront for direct buyer inspection.',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Taiwan + China registered entities',
        credentialCategory: 'Business Registration',
        about: 'Registered trading entities: SunGene Co., LTD. (Taiwan, Tax ID 94111922) and a Mainland China office (factory liaison + dedicated QC staff base; not a production facility).',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Dedicated in-house QC staff',
        credentialCategory: 'Operational Capability',
        about: 'Full-time QC personnel based at the China office travel to partner factories for on-site pre-shipment AQL 2.5 inspection. Not subcontracted to third-party inspection firms (QIMA / Bureau Veritas / TÜV etc.).',
      },
    ],
    address: { '@type': 'PostalAddress', ...OFFICES.tw.address },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BRAND.telephoneTW,
        contactType: 'sales',
        areaServed: ['TW', 'CN', 'VN', 'TH', 'MY', 'ID', 'PH', 'IN', 'US', 'CA', 'MX', 'BR', 'DE', 'FR', 'NL', 'GB', 'IT', 'ES', 'JP', 'KR', 'AU', 'SA', 'AE', 'NG', 'EG', 'ZA'],
        availableLanguage: ['en', 'zh-Hant', 'zh-Hans', 'fr', 'es'],
      },
      {
        '@type': 'ContactPoint',
        telephone: BRAND.telephoneTW,
        contactType: 'technical support',
        availableLanguage: ['en', 'zh-Hant', 'zh-Hans', 'fr', 'es'],
      },
    ],
    sameAs: [...BRAND.sameAs],
    knowsAbout: [...BRAND.knowsAbout],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Product Supply Scope — Custom Packaging, Home & Living, Outdoor',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Custom Packaging', url: pageUrl(lang, '/sourcing/packaging'), description: 'Custom mooncake gift boxes, premium rigid gift boxes, retail packaging, corrugated mailer boxes, paper bags and tubes. Coordinated production across Taiwan and China; public Alibaba.com storefront catalog.' },
        { '@type': 'OfferCatalog', name: 'Home & Living', url: pageUrl(lang, '/sourcing/home'), description: 'Drinkware, ceramic gift sets, kitchen accessories, branded blankets and soft goods supplied through selected manufacturing partners across Taiwan and China.' },
        { '@type': 'OfferCatalog', name: 'Outdoor Products', url: pageUrl(lang, '/sourcing/garden'), description: 'Picnic blankets, sunhats and caps, cooler bags, branded umbrellas, outdoor event swag for trade shows and corporate retreats.' },
        { '@type': 'OfferCatalog', name: 'Beauty & Wellness Gift Sets', url: pageUrl(lang, '/sourcing/beauty'), description: 'Beauty and wellness gift sets, fragrance gift boxes, sample kits — secondary category (Phase 2 deprioritization). Available on request.' },
      ],
    },
    brand: { '@id': `${baseUrl}/#brand` },
    location: [
      {
        '@type': 'Place',
        name: OFFICES.tw.name,
        address: { '@type': 'PostalAddress', ...OFFICES.tw.address },
        geo: { '@type': 'GeoCoordinates', ...OFFICES.tw.geo },
        telephone: OFFICES.tw.telephone,
      },
      {
        '@type': 'Place',
        name: OFFICES.cn.name,
        address: { '@type': 'PostalAddress', ...OFFICES.cn.address },
        telephone: OFFICES.cn.telephone,
      },
    ],
  }
}

export function buildBrandSchema(opts: { baseUrl?: string }) {
  const baseUrl = opts.baseUrl ?? SITE_URL
  return {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    '@id': `${baseUrl}/#brand`,
    name: 'SunGene',
    url: baseUrl,
  }
}

export function buildLocalBusinessSchemas(opts: { baseUrl?: string }) {
  const baseUrl = opts.baseUrl ?? SITE_URL
  const logo = logoUrl(baseUrl)
  return [
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${baseUrl}/#business-tw`,
      name: BRAND.legalName,
      image: logo,
      url: baseUrl,
      sameAs: [...BRAND.sameAs],
      hasMap: `https://www.google.com/maps?q=${OFFICES.tw.geo.latitude},${OFFICES.tw.geo.longitude}`,
      parentOrganization: { '@id': `${baseUrl}/#org` },
      telephone: BRAND.telephoneTW,
      email: BRAND.email,
      address: { '@type': 'PostalAddress', ...OFFICES.tw.address },
      geo: { '@type': 'GeoCoordinates', ...OFFICES.tw.geo },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      areaServed: [
        { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 13.0, longitude: 105.0 }, geoRadius: '5000 km', name: 'Southeast Asia' },
        { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 50.0, longitude: 10.0 }, geoRadius: '3000 km', name: 'Europe' },
        { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 25.0, longitude: 45.0 }, geoRadius: '3000 km', name: 'Middle East' },
        { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 0.0, longitude: 25.0 }, geoRadius: '5000 km', name: 'Africa' },
        { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 40.0, longitude: -100.0 }, geoRadius: '4000 km', name: 'Americas' },
      ],
      priceRange: '$$',
      currenciesAccepted: 'USD, EUR, TWD',
      paymentAccepted: 'Wire Transfer, L/C, T/T',
    },
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${baseUrl}/#business-cn`,
      name: OFFICES.cn.name,
      image: logo,
      url: baseUrl,
      sameAs: [...BRAND.sameAs],
      hasMap: `https://www.google.com/maps?q=${encodeURIComponent(`${OFFICES.cn.address.streetAddress}, ${OFFICES.cn.address.addressLocality}`)}`,
      parentOrganization: { '@id': `${baseUrl}/#org` },
      telephone: OFFICES.cn.telephone,
      email: BRAND.email,
      address: { '@type': 'PostalAddress', ...OFFICES.cn.address },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      areaServed: [
        { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 13.0, longitude: 105.0 }, geoRadius: '5000 km', name: 'Southeast Asia' },
        { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 50.0, longitude: 10.0 }, geoRadius: '3000 km', name: 'Europe' },
        { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 25.0, longitude: 45.0 }, geoRadius: '3000 km', name: 'Middle East' },
        { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 0.0, longitude: 25.0 }, geoRadius: '5000 km', name: 'Africa' },
        { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 40.0, longitude: -100.0 }, geoRadius: '4000 km', name: 'Americas' },
      ],
      priceRange: '$$',
      currenciesAccepted: 'USD, EUR, CNY',
      paymentAccepted: 'Wire Transfer, L/C, T/T',
    },
  ]
}

// ─── Service schemas (custom specs, export, after-sales) ─────────────────────
export function buildServiceSchemas(opts: { baseUrl?: string; lang: Lang }) {
  const baseUrl = opts.baseUrl ?? SITE_URL
  const lang = opts.lang
  const provider = { '@id': `${baseUrl}/#org` }
  const services = [
    {
      id: 'gift-packaging',
      name: 'Custom Packaging Supply',
      description: 'Custom-spec packaging supplied through selected manufacturing partners across Taiwan and China: mooncake boxes, premium rigid gift boxes with magnetic closure, foil/UV/embossing finishes, corrugated mailer boxes, paper bags and tubes. Pantone color matching, structural sample iteration, and tooling coordination handled end-to-end by SunGene.',
      serviceType: 'Packaging Supply',
      url: pageUrl(lang, '/sourcing/packaging'),
    },
    {
      id: 'corporate-gifts',
      name: 'Home & Living + Outdoor Products Supply',
      description: 'Home & living products (drinkware, ceramics, blankets, branded merchandise) and outdoor products (event swag, branded headwear, cooler bags) supplied through selected manufacturing partners across Taiwan and China. End-to-end RFQ, sample, production, pre-shipment AQL inspection, and consolidated shipping. MOQ from USD 1,000.',
      serviceType: 'Product Supply',
      url: pageUrl(lang, '/sourcing'),
    },
    {
      id: 'aql-qc',
      name: 'Pre-shipment AQL Inspection (In-house)',
      description: 'In-house SunGene staff travel to partner factories for on-site pre-shipment AQL 2.5 sampling — 200-unit sample per 5,000-unit order with photo + video documentation. Major defects worked back with the factory same-day before final payment release. Not subcontracted to third-party inspection firms. Quality consistency is part of every product supply, not a standalone service.',
      serviceType: 'Quality Coordination',
      url: pageUrl(lang, '/contact'),
    },
  ] as const

  return services.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#service-${s.id}`,
    name: s.name,
    description: s.description,
    serviceType: s.serviceType,
    url: s.url,
    provider,
    brand: { '@id': `${baseUrl}/#brand` },
    areaServed: [
      { '@type': 'Country', name: 'Worldwide' },
    ],
    availableLanguage: ['en', 'zh-Hant', 'zh-Hans', 'fr', 'es'],
    inLanguage: langMeta(lang).htmlLang,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: s.name,
      itemListElement: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: s.url } }],
    },
  }))
}
