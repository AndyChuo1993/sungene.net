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
    url: baseUrl,
    inLanguage: LANG_META[lang].htmlLang,
    publisher: { '@id': `${baseUrl}/#org` },
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
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/${lang}/machinery?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildOrganizationSchema(opts: { baseUrl?: string; lang: Lang }) {
  const baseUrl = opts.baseUrl ?? SITE_URL
  const lang = opts.lang
  const logo = logoUrl(baseUrl)
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#org`,
    inLanguage: LANG_META[lang].htmlLang,
    name: BRAND.legalName,
    alternateName: BRAND.alternateName,
    description: BRAND.description,
    url: baseUrl,
    logo,
    telephone: BRAND.telephoneTW,
    email: BRAND.email,
    foundingDate: BRAND.foundingDate,
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 200 },
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
  }
}

export function buildLocalBusinessSchemas(opts: { baseUrl?: string }) {
  const baseUrl = opts.baseUrl ?? SITE_URL
  const logo = logoUrl(baseUrl)
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#business-tw`,
      name: BRAND.legalName,
      image: logo,
      url: baseUrl,
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
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#business-cn`,
      name: OFFICES.cn.name,
      image: logo,
      url: baseUrl,
      telephone: OFFICES.cn.telephone,
      email: BRAND.email,
      address: { '@type': 'PostalAddress', ...OFFICES.cn.address },
    },
  ]
}

