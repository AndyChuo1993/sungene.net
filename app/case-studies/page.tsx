import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { PHOTO } from '@/lib/photoLibrary'
import { SITE_URL } from '@/lib/siteConfig'
import { getAllPublishedCaseStudies } from '@/lib/cmsContent'

export const metadata: Metadata = {
  title: 'Customer Case Studies | SunGene Machinery',
  description: 'Real customer success stories from SunGene Taiwan machinery deployments worldwide — from coffee packaging to snack processing lines.',
  alternates: { canonical: `${SITE_URL}/case-studies` },
}

export const revalidate = 60

export default async function CaseStudiesIndexPage() {
  const caseStudies = await getAllPublishedCaseStudies()

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/case-studies#collection`,
    name: 'SunGene Customer Case Studies',
    url: `${SITE_URL}/case-studies`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: caseStudies.map((cs, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: cs.title,
        url: `${SITE_URL}/case-studies/${cs.slug}`,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <PageHero
        kicker="CASE STUDIES"
        title="Customer Success Stories"
        desc="Real-world deployments of SunGene machinery — from smallholder roasters in Vietnam to turnkey snack lines in Mexico."
        image={{
          src: PHOTO.home.hero,
          alt: 'SunGene customer case studies',
          priority: true,
          aspectClassName: 'aspect-[16/9]',
        }}
      />

      <section className="py-12 sm:py-16">
        <Container className="max-w-6xl">
          {caseStudies.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
              <p className="text-sm text-gray-500">
                Case studies will appear here once they&apos;re published from the admin.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.id}
                  href={`/case-studies/${cs.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-brand-400 hover:shadow-md"
                >
                  {cs.hero_image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={cs.hero_image_url} alt={cs.title} className="aspect-[16/10] w-full object-cover" />
                  ) : (
                    <div className="flex aspect-[16/10] w-full items-center justify-center bg-gray-100 text-gray-400 text-sm">
                      No image
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-accent-600">
                      {[cs.country, cs.industry_slug, cs.year].filter(Boolean).join(' · ')}
                    </div>
                    <h3 className="mt-2 text-base font-bold text-gray-950 group-hover:text-brand-700">{cs.title}</h3>
                    {cs.summary ? (
                      <p className="mt-2 line-clamp-3 text-sm text-gray-600">{cs.summary}</p>
                    ) : null}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
