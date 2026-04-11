import { Lang } from '@/lib/i18n'
import { LANG_META, pageUrl } from '@/lib/seo'
import { SITE_URL } from '@/lib/siteConfig'

export const BRAND = {
  legalName: 'SunGene Co., LTD.',
  alternateName: '上瑾錸有限公司',
  description: 'Leading manufacturer and exporter of packaging machinery, food processing equipment, filling & sealing systems, and automated production lines from Taiwan.',
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
    'Packaging Machinery', 'Food Processing Equipment', 'Filling Machines',
    'Sealing Machines', 'Conveyor Systems', 'Industrial Automation',
    'VFFS Machines', 'HFFS Machines', 'Powder Packaging', 'Liquid Filling',
    'Snack Processing Lines', 'CE Certified Machinery', 'OEM/ODM Manufacturing',
    'Export Machinery from Taiwan',
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
    alternateName: ['SunGene', 'SunGene Machinery', BRAND.alternateName],
    url: baseUrl,
    inLanguage: LANG_META[lang].htmlLang,
    publisher: { '@id': `${baseUrl}/#org` },
    copyrightHolder: { '@id': `${baseUrl}/#org` },
    copyrightYear: BRAND.foundingDate,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/${lang}/recommend?machine={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    siteNavigationElement: [
      { '@type': 'WebPage', url: pageUrl(lang, '/machinery'), name: 'Machinery' },
      { '@type': 'WebPage', url: pageUrl(lang, '/machines/pouch-packing-machine'), name: 'Pouch Packing Machine' },
      { '@type': 'WebPage', url: pageUrl(lang, '/machines/powder-filling-machine'), name: 'Powder Filling Machine' },
      { '@type': 'WebPage', url: pageUrl(lang, '/machines/liquid-filling-machine'), name: 'Liquid Filling Machine' },
      { '@type': 'WebPage', url: pageUrl(lang, '/machines/snack-processing-line'), name: 'Snack Processing Line' },
      { '@type': 'WebPage', url: pageUrl(lang, '/machines/conveyor-system'), name: 'Conveyor System' },
      { '@type': 'WebPage', url: pageUrl(lang, '/resources'), name: 'Resources' },
      { '@type': 'WebPage', url: pageUrl(lang, '/recommend'), name: 'Recommendation' },
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
    '@type': ['Organization', 'Manufacturer'],
    '@id': `${baseUrl}/#org`,
    inLanguage: LANG_META[lang].htmlLang,
    name: BRAND.legalName,
    legalName: BRAND.legalName,
    alternateName: [BRAND.alternateName, 'SunGene', 'SunGene Machinery'],
    description: BRAND.description,
    slogan: 'Industrial machinery engineered in Taiwan, shipped worldwide.',
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
      'CE Certified Machinery',
      '40+ countries export experience',
      'SUS304/316L food-grade stainless construction',
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Pouch Packing Machine', url: pageUrl(lang, '/machines/pouch-packing-machine') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Powder Filling Machine', url: pageUrl(lang, '/machines/powder-filling-machine') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Liquid Filling Machine', url: pageUrl(lang, '/machines/liquid-filling-machine') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Snack Processing Line', url: pageUrl(lang, '/machines/snack-processing-line') } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Conveyor System', url: pageUrl(lang, '/machines/conveyor-system') } },
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
        name: 'CE Certification',
        credentialCategory: 'Product Compliance',
        recognizedBy: { '@type': 'Organization', name: 'European Union' },
        about: 'Packaging, filling, food processing and conveyor machinery — SunGene machines are CE certified and comply with relevant EU Machinery, Low Voltage and EMC directives.',
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
      name: 'Industrial Machinery Catalog',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Packaging Machinery', url: pageUrl(lang, '/machinery/packaging'), description: 'VFFS, HFFS, flow wrappers, carton packing, shrink wrapping' },
        { '@type': 'OfferCatalog', name: 'Food Processing Equipment', url: pageUrl(lang, '/machinery/food-processing'), description: 'Fryers, roasters, seasoning tumblers, mixing and blanching systems' },
        { '@type': 'OfferCatalog', name: 'Filling & Sealing Systems', url: pageUrl(lang, '/machinery/filling-sealing'), description: 'Piston, gravity, pump liquid fillers, powder auger fillers, sealers' },
        { '@type': 'OfferCatalog', name: 'Conveying & Automation', url: pageUrl(lang, '/machinery/conveying-automation'), description: 'Belt/roller conveyors, PLC+HMI controls, metal detectors, palletizers' },
        { '@type': 'OfferCatalog', name: 'Customized Machinery', url: pageUrl(lang, '/machinery/custom'), description: 'OEM/ODM, custom dimensions, materials, automation levels' },
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

// ─── Service schemas (OEM/ODM, export, after-sales) ──────────────────────────
export function buildServiceSchemas(opts: { baseUrl?: string; lang: Lang }) {
  const baseUrl = opts.baseUrl ?? SITE_URL
  const lang = opts.lang
  const provider = { '@id': `${baseUrl}/#org` }
  const services = [
    {
      id: 'oem-odm',
      name: 'OEM / ODM Machinery Manufacturing',
      description: 'Custom-built packaging, filling, and food processing machinery. Materials, dimensions, capacity, voltage/frequency, HMI language, and automation modules configured to the customer’s product and factory.',
      serviceType: 'OEM/ODM Manufacturing',
      url: pageUrl(lang, '/machinery/custom'),
    },
    {
      id: 'export',
      name: 'Export & Turnkey Line Delivery',
      description: 'Factory-direct export from Taichung Port to 40+ countries. FOB or CIF shipping, export documentation, voltage configuration, and packaging for sea freight.',
      serviceType: 'Export Manufacturing',
      url: pageUrl(lang, '/solutions'),
    },
    {
      id: 'after-sales',
      name: 'Installation, Training & After-Sales Support',
      description: 'Remote video installation guidance, operator training, lifetime technical support, and spare parts shipped within 48 hours. On-site installation available for turnkey projects.',
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

