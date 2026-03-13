import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { t, Lang } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'),
    title: t(lang, 'meta_home_title'),
    description: t(lang, 'meta_home_desc'),
    openGraph: { title: t(lang, 'meta_home_title'), description: t(lang, 'meta_home_desc'), type: 'website' },
    twitter: { card: 'summary_large_image' },
    icons: { icon: '/logo/sungene.png' },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'zh': '/zh',
        'x-default': '/en',
      },
    },
  }
}

export default function RootLayout({ children, params }: { children: ReactNode, params: { lang: Lang } }) {
  const lang = params.lang
  
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const logoUrl = `${site}/logo/sungene.png`
  
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SunGene Co., LTD.',
    url: site,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SunGene Co., LTD.',
    description: t(lang, 'about_desc'),
    url: site,
    logo: logoUrl,
    telephone: '04-37032705',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 201, Guangfu Rd., Central Dist.',
      addressLocality: 'Taichung City',
      addressRegion: 'Taichung',
      addressCountry: 'TW'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+886-4-37032705',
      contactType: 'sales',
      areaServed: [
        'TW',
        'CN',
        'VN',
        'TH',
        'MY',
        'ID',
        'US',
        'CA',
        'DE',
        'FR',
        'NL',
        'JP'
      ],
      availableLanguage: ['en', 'zh-Hant']
    },
    sameAs: [
      'https://momas.en.alibaba.com',
      'https://www.linkedin.com/company/sungene-co-ltd'
    ]
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SunGene Co., LTD.',
    image: logoUrl,
    '@id': site,
    url: site,
    telephone: '+886-4-37032705',
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
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    areaServed: [
      'TW',
      'CN',
      'VN',
      'TH',
      'MY',
      'ID',
      'US',
      'CA',
      'DE',
      'FR',
      'NL',
      'JP'
    ],
    priceRange: '$$'
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  )
}
