import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyContactFAB from '@/components/StickyContactFAB'
import PageViewTracker from '@/components/PageViewTracker'
import CookieBanner from '@/components/CookieBanner'
import { SITE_URL } from '@/lib/siteConfig'
import { buildAlternates, buildOpenGraph, buildRobots, buildTwitter, normalizeLang } from '@/lib/seo'
import { buildBrandSchema, buildLocalBusinessSchemas, buildOrganizationSchema, buildServiceSchemas, buildWebsiteSchema } from '@/lib/business'

export const viewport = {
  themeColor: '#0c1a3d',
  width: 'device-width',
  initialScale: 1,
}

// Pre-render all 5 active language variants at build time. With PM2 cluster
// mode the in-process ISR memory cache cannot be shared across workers, so
// fully-static pages (every leaf page below uses force-static) must declare
// their params explicitly to land on disk during the build.
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }, { lang: 'cn' }, { lang: 'fr' }, { lang: 'es' }]
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = normalizeLang(rawLang)

  const baseUrl = SITE_URL
  const title = 'SunGene | Taiwan + China Paper Gift Packaging Sourcing — Mooncake Boxes, Corporate Gifts'
  const description = 'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Custom packaging, home & living, outdoor. Pre-shipment AQL by in-house staff. MOQ USD 1,000.'

  return {
    metadataBase: new URL(baseUrl),
    title: { default: title, template: '%s | SunGene' },
    alternates: buildAlternates(lang, '/'),
    openGraph: buildOpenGraph({ lang, title, description, pathname: '/', type: 'website' }),
    twitter: buildTwitter({ lang, title, description, pathname: '/' }),
    icons: { icon: '/logo/sungene.png', apple: '/logo/sungene.png' },
    manifest: '/site.webmanifest',
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

  // Fix <html lang> for static-built pages: middleware-set headers do not
  // run at build time, so the root layout bakes lang="en" into every pre-rendered
  // variant. This inline script updates documentElement.lang/dir synchronously
  // before paint — screen readers and JS-aware crawlers (Googlebot) pick it up.
  const _htmlLangMap: Record<string, { lang: string; dir: string }> = {
    en: { lang: 'en', dir: 'ltr' },
    zh: { lang: 'zh-Hant', dir: 'ltr' },
    cn: { lang: 'zh-Hans', dir: 'ltr' },
    fr: { lang: 'fr', dir: 'ltr' },
    es: { lang: 'es', dir: 'ltr' },
    ar: { lang: 'ar', dir: 'rtl' },
  }
  const _htmlLang = _htmlLangMap[lang] || _htmlLangMap.en

  return (
    <>
      {/* WCAG 3.1.1 / SEO lang fix — runs synchronously before paint */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(_htmlLang.lang)};document.documentElement.dir=${JSON.stringify(_htmlLang.dir)};`
        }}
      />
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
      <CookieBanner lang={lang} />
    </>
  )
}
