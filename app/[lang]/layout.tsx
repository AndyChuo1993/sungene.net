import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { t, Lang } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(rawLang) ? rawLang : 'en') as Lang

  const baseUrl = 'https://sungene.net'

  const descriptions: Record<string, string> = {
    en: 'SunGene is a leading manufacturer and exporter of packaging machinery, food processing equipment, filling & sealing systems, and automated production lines from Taiwan. CE certified, serving 50+ countries worldwide. Get factory-direct pricing today.',
    cn: 'SunGene 是台湾领先的包装机械、食品加工设备、灌装封口系统和自动化生产线制造商与出口商。CE认证，服务全球50多个国家。立即获取工厂直销价格。',
    zh: 'SunGene 是台灣領先的包裝機械、食品加工設備、灌裝封口系統和自動化生產線製造商與出口商。CE認證，服務全球50多個國家。立即取得工廠直銷價格。',
    fr: 'SunGene est un fabricant et exportateur leader de machines d\'emballage, d\'équipements de transformation alimentaire, de systèmes de remplissage et de scellage, et de lignes de production automatisées depuis Taïwan. Certifié CE, desservant plus de 50 pays.',
    es: 'SunGene es un fabricante y exportador líder de maquinaria de empaque, equipos de procesamiento de alimentos, sistemas de llenado y sellado, y líneas de producción automatizadas desde Taiwán. Certificado CE, sirviendo a más de 50 países.',
  }

  return {
    metadataBase: new URL(baseUrl),
    title: t(lang, 'meta_home_title'),
    description: descriptions[lang],
    openGraph: {
      title: t(lang, 'meta_home_title'),
      description: descriptions[lang],
      url: `${baseUrl}/${lang}`,
      type: 'website',
      images: [{ url: '/og/og.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
    icons: { icon: '/logo/sungene.png' },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'en': 'https://sungene.net/en', 'zh-TW': 'https://sungene.net/zh', 'zh-CN': 'https://sungene.net/cn',
        'fr': 'https://sungene.net/fr', 'es': 'https://sungene.net/es', 'pt': 'https://sungene.net/pt',
        'ko': 'https://sungene.net/ko', 'ja': 'https://sungene.net/ja', 'ar': 'https://sungene.net/ar',
        'th': 'https://sungene.net/th', 'vi': 'https://sungene.net/vi', 'de': 'https://sungene.net/de',
        'x-default': 'https://sungene.net/en',
      },
    },
  }
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(rawLang) ? rawLang : 'en') as Lang

  const baseUrl = 'https://sungene.net'
  const logoUrl = `${baseUrl}/logo/sungene.png`

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SunGene Co., LTD.',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/${lang}/machinery?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SunGene Co., LTD.',
    description: 'Leading manufacturer and exporter of packaging machinery, food processing equipment, filling & sealing systems, and automated production lines from Taiwan.',
    url: baseUrl,
    logo: logoUrl,
    telephone: '+886-4-37032705',
    email: 'contact@sungene.net',
    foundingDate: '2010',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 200 },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 201, Guangfu Rd., Central Dist.',
      addressLocality: 'Taichung City',
      addressRegion: 'Taichung',
      postalCode: '400',
      addressCountry: 'TW'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+886-4-37032705',
        contactType: 'sales',
        areaServed: ['TW', 'CN', 'VN', 'TH', 'MY', 'ID', 'PH', 'IN', 'US', 'CA', 'MX', 'BR', 'DE', 'FR', 'NL', 'GB', 'IT', 'ES', 'JP', 'KR', 'AU', 'SA', 'AE', 'NG', 'EG', 'ZA'],
        availableLanguage: ['en', 'zh-Hant', 'zh-Hans', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+886-4-37032705',
        contactType: 'technical support',
        availableLanguage: ['en', 'zh-Hant', 'fr', 'es', 'pt', 'ko', 'ja', 'de']
      }
    ],
    sameAs: [
      'https://momas.en.alibaba.com',
      'https://www.linkedin.com/company/sungene-co-ltd'
    ],
    knowsAbout: [
      'Packaging Machinery', 'Food Processing Equipment', 'Filling Machines',
      'Sealing Machines', 'Conveyor Systems', 'Industrial Automation',
      'VFFS Machines', 'HFFS Machines', 'Powder Packaging', 'Liquid Filling'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industrial Machinery Catalog',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Packaging Machinery' },
        { '@type': 'OfferCatalog', name: 'Food Processing Equipment' },
        { '@type': 'OfferCatalog', name: 'Filling & Sealing Systems' },
        { '@type': 'OfferCatalog', name: 'Conveying & Automation' },
        { '@type': 'OfferCatalog', name: 'Customized Machinery' },
      ]
    }
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: 'SunGene Co., LTD.',
    image: logoUrl,
    url: baseUrl,
    telephone: '+886-4-37032705',
    email: 'contact@sungene.net',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 201, Guangfu Rd., Central Dist.',
      addressLocality: 'Taichung City',
      postalCode: '400',
      addressCountry: 'TW'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.1433,
      longitude: 120.6845
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
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
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <Header lang={lang} />
      <main id="page-content" className="break-words">{children}</main>
      <Footer lang={lang} />
    </>
  )
}
