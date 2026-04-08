import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/siteConfig'
import { buildRobots, LANG_META, normalizeLang } from '@/lib/seo'
import { buildLocalBusinessSchemas, buildOrganizationSchema, buildWebsiteSchema } from '@/lib/business'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = normalizeLang(rawLang)

  const baseUrl = SITE_URL

  return {
    metadataBase: new URL(baseUrl),
    title: { default: 'SunGene Machinery', template: '%s | SunGene Machinery' },
    openGraph: {
      siteName: 'SunGene Machinery',
      locale: LANG_META[lang].ogLocale,
      alternateLocale: Object.values(LANG_META).map(v => v.ogLocale).filter(v => v !== LANG_META[lang].ogLocale),
      images: [{ url: `/og-image?lang=${lang}&title=SunGene%20Machinery&desc=Industrial%20Machinery%20Manufacturer%20%26%20Exporter%20from%20Taiwan.&path=%2F${lang}`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', images: [`/og-image?lang=${lang}&title=SunGene%20Machinery&desc=Industrial%20Machinery%20Manufacturer%20%26%20Exporter%20from%20Taiwan.&path=%2F${lang}`] },
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
