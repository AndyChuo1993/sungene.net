import { ReactNode } from 'react'
import { headers } from 'next/headers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyContactFAB from '@/components/StickyContactFAB'
import { normalizeLang } from '@/lib/seo'
import { SITE_URL } from '@/lib/siteConfig'
import { buildBrandSchema, buildLocalBusinessSchemas, buildOrganizationSchema, buildServiceSchemas, buildWebsiteSchema } from '@/lib/business'

export default async function CaseStudiesLayout({ children }: { children: ReactNode }) {
  const h = await headers()
  const lang = normalizeLang(h.get('x-lang'))
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
      <Header lang={lang} />
      <main id="page-content" className="break-words">{children}</main>
      <Footer lang={lang} />
      <StickyContactFAB lang={lang} />
    </>
  )
}
