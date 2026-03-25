import { ReactNode } from 'react'
import { headers } from 'next/headers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { t, Lang } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = (['en', 'zh', 'cn'].includes(rawLang) ? rawLang : 'zh') as Lang

  const baseUrl = 'https://sungene.net'

  return {
    metadataBase: new URL(baseUrl),
    title: t(lang, 'meta_home_title'),
    description: lang === 'en' 
      ? 'SunGene provides machinery solutions for packaging, food processing, and industrial applications — helping global buyers move from machine selection to export delivery with greater clarity and efficiency.' 
      : lang === 'cn'
      ? 'SunGene 为全球买家提供包装、食品加工与工业应用机械解决方案，从设备匹配到出口交付，协助客户找到更合适的设备方案。'
      : 'SunGene 為全球買家提供包裝、食品加工與工業應用機械解決方案，從設備匹配到出口交付，協助客戶找到更合適的設備方案。',
    openGraph: {
      title: t(lang, 'meta_home_title'),
      description: lang === 'en' 
        ? 'SunGene provides machinery solutions for packaging, food processing, and industrial applications — helping global buyers move from machine selection to export delivery with greater clarity and efficiency.' 
        : lang === 'cn'
        ? 'SunGene 为全球买家提供包装、食品加工与工业应用机械解决方案，从设备匹配到出口交付，协助客户找到更合适的设备方案。'
        : 'SunGene 為全球買家提供包裝、食品加工與工業應用機械解決方案，從設備匹配到出口交付，協助客戶找到更合適的設備方案。',
      url: `${baseUrl}/${lang}`,
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    icons: { icon: '/logo/sungene.png' },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'zh-CN': 'https://sungene.net/cn',
        'zh-TW': 'https://sungene.net/zh',
        'en': 'https://sungene.net/en',
        'x-default': 'https://sungene.net/cn',
      },
    },
  }
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = (['en', 'zh', 'cn'].includes(rawLang) ? rawLang : 'zh') as Lang

  const baseUrl = 'https://sungene.net'
  const logoUrl = `${baseUrl}/logo/sungene.png`

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SunGene Co., LTD.',
    url: baseUrl,
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SunGene Co., LTD.',
    description: t(lang, 'meta_home_desc'),
    url: baseUrl,
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
    '@id': baseUrl,
    url: baseUrl,
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
      <main id="page-content" className="break-words pt-20">{children}</main>
      <Footer lang={lang} />
    </>
  )
}
