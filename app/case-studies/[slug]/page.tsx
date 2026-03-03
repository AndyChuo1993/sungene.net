import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'
import cases, { getCase } from '@/data/cases'
import type { Metadata } from 'next'
import BreadcrumbJSONLD from '@/components/BreadcrumbJSONLD'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const lang = getLang()
  const data = getCase(lang, params.slug)
  const title = data ? `${data.title} | ${data.industry} | ${data.result}` : `Case Study${t(lang, 'meta_cases_suffix')}`
  const desc = data ? `${data.title}: ${data.summary} ${data.result}` : 'SunGene Case Study'
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungene.net'
  
  return {
    title,
    description: desc,
    openGraph: { title, description: desc, images: ['/og/og.png'] },
    alternates: {
      canonical: `${site}/case-studies/${params.slug}`,
    },
  }
}

export default async function CasePage({ params }: { params: { slug: string } }) {
  const lang = getLang()
  const allCases = cases.filter(c => c.lang === lang)
  const currentIndex = allCases.findIndex(c => c.slug === params.slug)
  const nextCase = allCases[(currentIndex + 1) % allCases.length]
  const data = getCase(lang, params.slug)
  
  if (!data) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-3xl font-semibold">{t(lang, 'article_not_found')}</h1>
        <p className="mt-2 text-white/70">Please check the URL.</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 min-h-screen">
      <BreadcrumbJSONLD items={[
        { name: 'Home', url: '/' },
        { name: 'Cases', url: '/case-studies' },
        { name: data.title, url: `/case-studies/${data.slug}` },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CaseStudy',
            headline: data.title,
            description: data.summary,
            image: data.cover ? (data.cover.startsWith('http') ? data.cover : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'}${data.cover}`) : undefined,
            author: {
              '@type': 'Organization',
              name: 'SunGene Co., LTD.'
            },
            publisher: {
              '@type': 'Organization',
              name: 'SunGene Co., LTD.',
              logo: {
                '@type': 'ImageObject',
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'}/logo/sungene.png`
              }
            }
          })
        }}
      />
      
      {data.cover && (
        <div className="relative w-full h-[320px] md:h-[500px] rounded-none overflow-hidden border border-white/10 mb-16 transition duration-700 bg-white/5">
          <Image 
            src={data.cover} 
            alt={data.title} 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/90 via-[#0B1C2D]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">{data.title}</h1>
            {data.summary && <p className="mt-6 text-xl md:text-2xl text-cyan-400 font-light max-w-4xl drop-shadow-md border-l-4 border-cyan-500 pl-6">{data.summary}</p>}
          </div>
        </div>
      )}

      {!data.cover && (
        <h1 className="text-5xl font-bold mt-10 mb-12 border-b border-white/10 pb-6">{data.title}</h1>
      )}

      {/* Before / After Comparison */}
      {(data.before || data.after) && (
        <section className="mb-20 grid md:grid-cols-2 gap-0 border border-white/10">
          <div className="p-10 bg-white/5 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">{t(lang, 'case_before_title')}</h3>
            <ul className="space-y-4">
              {data.before?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500/70 mt-1 text-lg">×</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 bg-cyan-900/10">
            <h3 className="text-cyan-400 text-sm uppercase tracking-widest mb-4">{t(lang, 'case_after_title')}</h3>
            <ul className="space-y-4">
              {data.after?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white">
                  <span className="text-cyan-400 mt-1 text-lg">✔</span>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="grid gap-16">
        {data.highlights && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 py-12">
            {data.highlights.map((h, i) => (
              <div key={i} className="px-8 text-center md:text-left group">
                <div className="text-6xl font-bold text-white group-hover:text-cyan-400 transition duration-300">{h.num}</div>
                <div className="mt-3 text-gray-400 text-sm uppercase tracking-widest">{h.label}</div>
              </div>
            ))}
          </div>
        )}
        
        <div className="grid gap-12 max-w-4xl">
          {data.sections.map((s, i) => (
            <article key={i} className="">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="text-cyan-500/50">0{i + 1}.</span>
                {s.heading}
              </h2>
              {s.paragraphs && s.paragraphs.map((p, idx) => (
                <p key={idx} className="mt-4 text-gray-300 leading-relaxed text-xl font-light">{p}</p>
              ))}
              {s.items && (
                <ul className="mt-6 space-y-4 pl-4 border-l border-white/10 ml-2">
                  {s.items.map((li, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-cyan-500 mt-2 w-2 h-2 rounded-full bg-cyan-500 block"></span>
                      <span className="text-lg text-gray-300 leading-relaxed">{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center text-center">
        <h3 className="text-2xl font-light text-white mb-8">{t(lang, 'case_replicate_title')}</h3>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-none bg-cyan-500 px-10 py-5 text-black font-bold text-xl hover:bg-cyan-400 transition shadow-[0_0_30px_rgba(6,182,212,0.2)]">
          {t(lang, 'case_cta_deploy')}
          <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
        <div className="mt-12 flex flex-wrap gap-6 justify-center">
          <Link href="/product" className="text-white hover:text-cyan-400 transition border-b border-transparent hover:border-cyan-400 pb-1">
            {t(lang, 'case_cta_platform')}
          </Link>
          <Link href="/case-studies" className="text-white hover:text-cyan-400 transition border-b border-transparent hover:border-cyan-400 pb-1">
            {t(lang, 'case_cta_more')}
          </Link>
          <Link href="/contact" className="text-white hover:text-cyan-400 transition border-b border-transparent hover:border-cyan-400 pb-1">
            {t(lang, 'case_cta_strategy')}
          </Link>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <Link href={`/case-studies/${nextCase.slug}`} className="group p-4 bg-white/5 border border-white/10 hover:border-cyan-500 transition">
              <div className="text-gray-500 mb-1">{t(lang, 'next_case')}</div>
              <div className="text-white group-hover:text-cyan-400 font-medium truncate">{nextCase.title}</div>
          </Link>
          <Link href="/case-studies" className="group p-4 bg-white/5 border border-white/10 hover:border-cyan-500 transition">
              <div className="text-gray-500 mb-1">{t(lang, 'back_to_cases')}</div>
              <div className="text-white group-hover:text-cyan-400 font-medium">{t(lang, 'nav_cases')}</div>
          </Link>
          <Link href="/solutions" className="group p-4 bg-white/5 border border-white/10 hover:border-cyan-500 transition">
              <div className="text-gray-500 mb-1">{t(lang, 'explore_solutions')}</div>
              <div className="text-white group-hover:text-cyan-400 font-medium">{t(lang, 'nav_solutions')}</div>
          </Link>
          <Link href="/contact" className="group p-4 bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500 transition">
              <div className="text-cyan-500/70 mb-1">{t(lang, 'book_consultation')}</div>
              <div className="text-cyan-400 group-hover:text-cyan-300 font-medium">{t(lang, 'nav_contact')}</div>
          </Link>
      </div>
    </main>
  )
}
