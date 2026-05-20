import { Lang } from '@/lib/i18n'
import { LANG_META, pageUrl, langMeta} from '@/lib/seo'
import { SITE_URL } from '@/lib/siteConfig'

export const BRAND = {
  legalName: 'SunGene Co., LTD.',
  alternateName: '上瑾錸有限公司',
  description: 'SunGene is a Taiwan + China dual-entity sourcing partner. Our Alibaba-verifiable specialty is custom paper gift packaging — gift boxes, mooncake boxes, retail packaging, corrugated cartons, paper bags. For other corporate gift categories (blankets, apparel, drinkware, accessories), we source through our vetted factory network across both markets. Dedicated SunGene QC staff at the China office conduct on-site pre-shipment AQL inspection. Taiwan-registered invoicing entity (Tax ID 94111922).',
  telephoneTW: '+886437032705',
  telephoneCN: '+8618144132078',
  email: 'contact@sungene.net',
  foundingDate: '2023',
  sameAs: [
    'https://momas.en.alibaba.com',
    'https://www.linkedin.com/company/sungene-co-ltd',
  ],
  knowsAbout: [
    'Custom Paper Gift Packaging',
    'Mooncake Gift Boxes', 'Premium Rigid Gift Boxes', 'Corrugated Mailer Boxes',
    'Paper Bags & Tubes', 'Book & Lookbook Printing',
    'Corporate Gift Sourcing', 'Branded Blankets & Soft Goods',
    'Promotional Products Sourcing', 'Branded Merchandise OEM',
    'Taiwan + China Dual-Entity Sourcing', 'Multi-Factory Partner Network',
    'On-site AQL Inspection', 'Dedicated In-house QC',
    'Taiwan-registered Invoicing', 'Principal Trader Model',
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
      { '@type': 'WebPage', url: pageUrl(lang, '/sourcing'), name: 'Sourcing' },
      { '@type': 'WebPage', url: pageUrl(lang, '/sourcing/packaging'), name: 'Packaging Sourcing' },
      { '@type': 'WebPage', url: pageUrl(lang, '/sourcing/home'), name: 'Home Goods Sourcing' },
      { '@type': 'WebPage', url: pageUrl(lang, '/sourcing/garden'), name: 'Garden Products Sourcing' },
      { '@type': 'WebPage', url: pageUrl(lang, '/sourcing/beauty'), name: 'Beauty Products Sourcing' },
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
    slogan: 'Taiwan + China sourcing window — paper gift packaging specialist with full corporate gifts catalog through our vetted factory network.',
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
      'Dual-entity Taiwan + China registration',
      'Dedicated in-house QC staff (not subcontracted)',
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gift Packaging & Boxes Sourcing', url: pageUrl(lang, '/sourcing/packaging') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drinkware & Tabletop Gift Sourcing', url: pageUrl(lang, '/sourcing/home') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outdoor Event Swag Sourcing', url: pageUrl(lang, '/sourcing/garden') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Beauty & Wellness Gift Sets Sourcing', url: pageUrl(lang, '/sourcing/beauty') } },
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
        name: 'Dual-entity Taiwan + Mainland China registration',
        credentialCategory: 'Business Registration',
        about: 'Registered trading entities: SunGene Co., LTD. (Taiwan, Tax ID 94111922) and a Mainland China office in Xiamen (factory liaison + dedicated QC staff base; not a production facility).',
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
      name: 'Sourcing Scope — Custom Paper Gift Packaging + Corporate Gifts via Factory Network',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Gift Packaging & Boxes', url: pageUrl(lang, '/sourcing/packaging'), description: 'Custom mooncake gift boxes, premium rigid gift boxes with magnetic closure, retail packaging, corrugated mailer boxes, paper bags and tubes. Our verifiable specialty on Alibaba.com.' },
        { '@type': 'OfferCatalog', name: 'Drinkware & Tabletop Gifts', url: pageUrl(lang, '/sourcing/home'), description: 'Mugs, tumblers, water bottles, ceramic gift sets, kitchen accessories for corporate gifting and event swag — sourced through our vetted factory network.' },
        { '@type': 'OfferCatalog', name: 'Outdoor Event Swag', url: pageUrl(lang, '/sourcing/garden'), description: 'Picnic blankets, sunhats and caps, cooler bags, branded umbrellas, outdoor accessories for trade shows and corporate retreats.' },
        { '@type': 'OfferCatalog', name: 'Beauty & Wellness Gift Sets', url: pageUrl(lang, '/sourcing/beauty'), description: 'Cosmetic sample kits, fragrance gift boxes, beauty gift sets, wellness kits, refillable packaging for corporate self-care gift programs.' },
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
      name: 'Custom Paper Gift Packaging Sourcing & OEM Coordination',
      description: 'Custom-spec gift packaging from our network of vetted paper factories: mooncake boxes, premium rigid gift boxes with magnetic closure, foil/UV/embossing finishes, corrugated mailer boxes, paper bags and tubes. Pantone color matching, structural sample iteration, and tooling coordination handled end-to-end.',
      serviceType: 'Paper Packaging Sourcing',
      url: pageUrl(lang, '/sourcing/packaging'),
    },
    {
      id: 'corporate-gifts',
      name: 'Multi-Category Corporate Gifts Sourcing via Factory Network',
      description: 'Corporate gift program sourcing across blankets, apparel and accessories, drinkware and tabletop, stationery, and branded merchandise — sourced through our vetted Taiwan + China factory network. End-to-end RFQ, sample, production, AQL inspection, and consolidated shipping. MOQ from USD 1,000.',
      serviceType: 'Corporate Gifts Sourcing',
      url: pageUrl(lang, '/sourcing'),
    },
    {
      id: 'aql-qc',
      name: 'On-site AQL 2.5 Inspection & Pre-shipment QC by In-house Staff',
      description: 'Dedicated SunGene QC personnel based at the China office travel to partner factories for on-site pre-shipment AQL 2.5 sampling — 200-unit sample per 5,000-unit order with photo + video documentation. Major defects worked back with the factory same-day before final payment release. Not subcontracted to third-party inspection firms.',
      serviceType: 'Quality Control',
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
