import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/siteConfig'
import { buildAlternates, buildOpenGraph, buildRobots, buildTwitter, normalizeLang } from '@/lib/seo'
import { buildLocalBusinessSchemas, buildOrganizationSchema, buildWebsiteSchema } from '@/lib/business'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = normalizeLang(rawLang)

  const baseUrl = SITE_URL
  const title = 'SunGene Machinery'
  const description = 'Industrial machinery manufacturer & exporter from Taiwan. Packaging machinery, food processing equipment, filling & sealing systems, and automation.'

  return {
    metadataBase: new URL(baseUrl),
    title: { default: 'SunGene Machinery', template: '%s | SunGene Machinery' },
    alternates: buildAlternates(lang, '/'),
    openGraph: buildOpenGraph({ lang, title, description, pathname: '/', type: 'website' }),
    twitter: buildTwitter({ lang, title, description, pathname: '/' }),
    icons: { icon: '/logo/sungene.png' },
    robots: buildRobots(),
  }
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = normalizeLang(rawLang)

  const baseUrl = SITE_URL
  const websiteSchema = buildWebsiteSchema({ baseUrl, lang })
  const org = buildOrganizationSchema({ baseUrl, lang })
  const localBusinesses = buildLocalBusinessSchemas({ baseUrl })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      {localBusinesses.map((b) => (
        <script key={String(b['@id'])} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }} />
      ))}
      <Header lang={lang} />
      <main id="page-content" className="break-words">{children}</main>
      <Footer lang={lang} />
    </>
  )
}
