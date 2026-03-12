import '../../styles/globals.css'
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
      areaServed: 'TW',
      availableLanguage: ['en', 'zh-Hant']
    },
    sameAs: [
      'https://momas.en.alibaba.com',
      'https://www.linkedin.com/company/sungene-co-ltd'
    ]
  }

  return (
    <html lang={lang}>
      <body className="min-h-screen bg-white text-gray-900 antialiased font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  )
}
