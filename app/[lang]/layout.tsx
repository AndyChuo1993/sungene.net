import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyContactFAB from '@/components/StickyContactFAB'
import PageViewTracker from '@/components/PageViewTracker'
import { SITE_URL } from '@/lib/siteConfig'
import { buildAlternates, buildOpenGraph, buildRobots, buildTwitter, normalizeLang } from '@/lib/seo'
import { buildBrandSchema, buildLocalBusinessSchemas, buildOrganizationSchema, buildServiceSchemas, buildWebsiteSchema } from '@/lib/business'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = normalizeLang(rawLang)

  const baseUrl = SITE_URL
  const title = 'SunGene | Industrial Equipment & Automation Sourcing Partner'
  const description = 'Industrial equipment and automation sourcing support for packaging systems, supplier evaluation, configuration planning, components, and selected technical projects across Taiwan and China.'

  return {
    metadataBase: new URL(baseUrl),
    title: { default: title, template: '%s | SunGene' },
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
  const brand = buildBrandSchema({ baseUrl })
  const localBusinesses = buildLocalBusinessSchemas({ baseUrl })
  const services = buildServiceSchemas({ baseUrl, lang })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brand) }} />
      {localBusinesses.map((b) => (
        <script key={String(b['@id'])} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }} />
      ))}
      {services.map((s) => (
        <script key={String(s['@id'])} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <PageViewTracker lang={lang} />
      <Header lang={lang} />
      <main id="page-content" className="break-words">{children}</main>
      <Footer lang={lang} />
      <StickyContactFAB lang={lang} />
    </>
  )
}
