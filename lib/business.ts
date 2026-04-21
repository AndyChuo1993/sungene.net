import { Lang } from '@/lib/i18n'
import { LANG_META, pageUrl } from '@/lib/seo'
import { SITE_URL } from '@/lib/siteConfig'

export const BRAND = {
  legalName: 'SunGene Co., LTD.',
  alternateName: '上瑾錸有限公司',
  description: 'Industrial equipment and automation sourcing partner supporting packaging systems, supplier evaluation, configuration planning, components, and selected technical projects across Taiwan and China.',
  telephoneTW: '+886-4-37032705',
  telephoneCN: '+86-18144132078',
  email: 'contact@sungene.net',
  foundingDate: '2010',
  sameAs: [
    'https://momas.en.alibaba.com',
    'https://www.linkedin.com/company/sungene-co-ltd',
    'https://sungene.en.alibaba.com',
  ],
  knowsAbout: [
    'Packaging Systems Sourcing', 'Food Processing Equipment Sourcing', 'Filling Systems',
    'Sealing Systems', 'Conveyor Systems', 'Industrial Automation',
    'VFFS', 'HFFS', 'Powder Packaging', 'Liquid Filling',
    'Snack Processing Lines', 'CE Documentation Support', 'Spec Customization',
    'Industrial Equipment Sourcing', 'Automation Components Sourcing',
    'Supplier Vetting', 'FAT Planning', 'Acceptance Criteria',
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
    inLanguage: LANG_META[lang].htmlLang,
    publisher: { '@id': `${baseUrl}/#org` },
    copyrightHolder: { '@id': `${baseUrl}/#org` },
    copyrightYear: new Date().getFullYear(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/${lang}/assessment`,
      },
      'query-input': 'required name=search_term_string',
    },
    siteNavigationElement: [
      { '@type': 'WebPage', url: pageUrl(lang, '/machinery'), name: 'Sourcing Scope' },
      { '@type': 'WebPage', url: pageUrl(lang, '/industries'), name: 'Industries' },
      { '@type': 'WebPage', url: pageUrl(lang, '/solutions'), name: 'Solutions' },
      { '@type': 'WebPage', url: pageUrl(lang, '/markets'), name: 'Export Markets' },
      { '@type': 'WebPage', url: pageUrl(lang, '/resources'), name: 'Resources' },
      { '@type': 'WebPage', url: pageUrl(lang, '/assessment'), name: 'Sourcing Assessment' },
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
    inLanguage: LANG_META[lang].htmlLang,
    name: BRAND.legalName,
    legalName: BRAND.legalName,
    alternateName: [BRAND.alternateName, 'SunGene'],
    description: BRAND.description,
    slogan: 'Source the right industrial solution before you commit capital.',
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
    naics: '333200',
    isicV4: '2825',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 200 },
    keywords: [...BRAND.knowsAbout].join(', '),
    award: [
      'CE documentation support (where applicable)',
      '40+ countries export experience',
      'SUS304/316L stainless options for food-contact surfaces',
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Packaging System Sourcing', url: pageUrl(lang, '/machinery/packaging') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Food Equipment Sourcing', url: pageUrl(lang, '/machinery/food-processing') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Filling and Sealing Project Sourcing', url: pageUrl(lang, '/machinery/filling-sealing') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation Integration Sourcing', url: pageUrl(lang, '/machinery/conveying-automation') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Project Coordination', url: pageUrl(lang, '/machinery/custom') } },
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
        name: 'CE Documentation Support',
        credentialCategory: 'Product Compliance',
        recognizedBy: { '@type': 'Organization', name: 'European Union' },
        about: 'SunGene supports CE-oriented documentation where applicable for export projects, depending on machine category, supplier scope, and destination market requirements.',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Food-grade construction (SUS304 / 316L)',
        credentialCategory: 'Material Standard',
      },
    ],
    address: { '@type': 'PostalAddress', ...OFFICES.tw.address },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BRAND.telephoneTW,
        contactType: 'sales',
        areaServed: ['TW', 'CN', 'VN', 'TH', 'MY', 'ID', 'PH', 'IN', 'US', 'CA', 'MX', 'BR', 'DE', 'FR', 'NL', 'GB', 'IT', 'ES', 'JP', 'KR', 'AU', 'SA', 'AE', 'NG', 'EG', 'ZA'],
        availableLanguage: ['en', 'zh-Hant', 'zh-Hans', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de'],
      },
      {
        '@type': 'ContactPoint',
        telephone: BRAND.telephoneTW,
        contactType: 'technical support',
        availableLanguage: ['en', 'zh-Hant', 'fr', 'es', 'pt', 'ko', 'ja', 'de'],
      },
    ],
    sameAs: [...BRAND.sameAs],
    knowsAbout: [...BRAND.knowsAbout],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industrial Equipment Sourcing Scope',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Packaging System Sourcing', url: pageUrl(lang, '/machinery/packaging'), description: 'VFFS, HFFS, flow wrappers, cartoning, shrink wrapping, and supplier-fit review' },
        { '@type': 'OfferCatalog', name: 'Food Equipment Sourcing', url: pageUrl(lang, '/machinery/food-processing'), description: 'Fryers, roasters, seasoning tumblers, mixing and blanching systems with supplier vetting' },
        { '@type': 'OfferCatalog', name: 'Filling & Sealing Projects', url: pageUrl(lang, '/machinery/filling-sealing'), description: 'Liquid filling, powder dosing, sealing, accuracy checks, and acceptance planning' },
        { '@type': 'OfferCatalog', name: 'Conveying & Automation Integration', url: pageUrl(lang, '/machinery/conveying-automation'), description: 'Conveyors, controls, inspection, line integration, and automation coordination' },
        { '@type': 'OfferCatalog', name: 'Custom Project Coordination', url: pageUrl(lang, '/machinery/custom'), description: 'Spec customization, custom dimensions, materials, automation levels, and project coordination' },
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
      id: 'oem-odm',
      name: 'Spec Customization & Supplier Coordination',
      description: 'Custom-specified packaging, filling, and food processing systems. Materials, dimensions, throughput target, voltage/frequency, HMI language, and automation modules configured to the customer’s product and site requirements.',
      serviceType: 'Spec Customization',
      url: pageUrl(lang, '/machinery/custom'),
    },
    {
      id: 'export',
      name: 'Export & Turnkey Line Delivery',
      description: 'Export coordination from Taichung Port to 40+ countries. FOB or CIF shipping, export documentation, voltage configuration, and sea-freight packaging support.',
      serviceType: 'Export Coordination',
      url: pageUrl(lang, '/solutions'),
    },
    {
      id: 'after-sales',
      name: 'Installation, Training & After-Sales Support',
      description: 'Remote video installation guidance, operator training, long-term technical support, and spare parts typically shipped within 48 hours (subject to stock and destination). On-site installation available for turnkey projects.',
      serviceType: 'After-sales Support',
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
    availableLanguage: ['en', 'zh-Hant', 'zh-Hans', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de'],
    inLanguage: LANG_META[lang].htmlLang,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: s.name,
      itemListElement: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: s.url } }],
    },
  }))
}
