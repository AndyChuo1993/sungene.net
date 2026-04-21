import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { PHOTO } from '@/lib/photoLibrary'
import { getCaseStudyBySlug, buildCaseStudySchema } from '@/lib/cmsContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = await getCaseStudyBySlug(slug)
  if (!cs) return {}
  const title = cs.meta_title || `${cs.title} — SunGene Case Study`
  const description = cs.meta_description || cs.summary || undefined
  const imageUrl = cs.hero_image_url || `${SITE_URL}/og/og.png`
  const canonical = `${SITE_URL}/case-studies/${cs.slug}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description: description || cs.title,
      url: canonical,
      type: 'article',
      siteName: 'SunGene',
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description || cs.title,
      images: [imageUrl],
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = await getCaseStudyBySlug(slug)
  if (!cs) notFound()

  const schema = buildCaseStudySchema(cs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        kicker="CASE STUDY"
        title={cs.title}
        desc={cs.summary || ''}
        image={{
          src: cs.hero_image_url || PHOTO.home.hero,
          alt: cs.title,
          priority: true,
          aspectClassName: 'aspect-[16/10]',
        }}
      />

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          {/* Facts row */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:grid-cols-4">
            {cs.country ? <Fact label="Country" value={cs.country} /> : null}
            {cs.client_type ? <Fact label="Client" value={cs.client_type} /> : null}
            {cs.machine_slug ? <Fact label="Machine" value={cs.machine_slug.replace(/-/g, ' ')} /> : null}
            {cs.year ? <Fact label="Year" value={String(cs.year)} /> : null}
          </div>

          {/* Story */}
          <div className="prose prose-gray mt-12 max-w-none">
            {cs.problem ? (
              <>
                <h2>The Challenge</h2>
                <p className="whitespace-pre-wrap">{cs.problem}</p>
              </>
            ) : null}
            {cs.solution ? (
              <>
                <h2>Our Solution</h2>
                <p className="whitespace-pre-wrap">{cs.solution}</p>
              </>
            ) : null}
            {cs.results ? (
              <>
                <h2>Results</h2>
                <p className="whitespace-pre-wrap">{cs.results}</p>
              </>
            ) : null}
          </div>

          {/* Related machine */}
          {cs.machine_slug ? (
            <div className="mt-12 rounded-2xl border border-accent-200 bg-accent-50 p-6">
              <div className="text-sm font-bold uppercase tracking-wider text-accent-700">Machine used</div>
              <Link
                href={`/en/machines/${cs.machine_slug}`}
                className="mt-2 block text-lg font-bold text-brand-900 hover:text-accent-700"
              >
                {cs.machine_slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="bg-brand-950 py-16 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Want similar results for your site?</h2>
          <p className="mt-3 text-sm text-white/70">
            Share your product and target output — we’ll shortlist sourcing options and propose a line configuration that fits your site.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <ButtonLink href="/en/assessment" size="lg">Get Assessment</ButtonLink>
            <Link href="/en/contact" className="text-sm font-semibold text-white/80 underline underline-offset-4 hover:text-white">
              Request Sourcing Assessment
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-gray-900">{value}</div>
    </div>
  )
}
