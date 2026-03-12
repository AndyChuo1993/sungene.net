import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { getCase } from '@/data/cases'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { lang: Lang, slug: string } }) {
  const { lang, slug } = params
  const item = getCase(lang, slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.title} | SunGene`,
    description: item.summary,
  }
}

export default function Page({ params }: { params: { lang: Lang, slug: string } }) {
  const { lang, slug } = params
  const item = getCase(lang, slug)

  if (!item) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-block bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-sm uppercase tracking-wide mb-6">
            {item.industry}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{item.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{item.summary}</p>
        </div>
      </section>

      {/* Highlights */}
      {item.highlights && (
        <section className="py-12 border-b border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-3 gap-8">
              {item.highlights.map((h, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{h.num}</div>
                  <div className="text-gray-500 font-medium uppercase tracking-wide text-sm md:text-base">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 space-y-16">
          
          {/* Before/After if available */}
          {(item.before && item.after) && (
            <div className="bg-white border border-gray-200 rounded-sm p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-center">{lang === 'zh' ? '合作前後對比' : 'Before & After'}</h3>
              <div className="grid md:grid-cols-2 gap-12 relative">
                {/* Vertical Divider */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>
                
                <div>
                  <div className="text-red-500 font-bold mb-4 uppercase tracking-wide flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    {lang === 'zh' ? '合作前 (Before)' : 'Before'}
                  </div>
                  <ul className="space-y-3">
                    {item.before.map((point, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="mr-3 text-red-300">✕</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="text-green-500 font-bold mb-4 uppercase tracking-wide flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {lang === 'zh' ? '合作後 (After)' : 'After'}
                  </div>
                  <ul className="space-y-3">
                    {item.after.map((point, i) => (
                      <li key={i} className="flex items-start text-gray-900 font-medium">
                        <span className="mr-3 text-green-500">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="space-y-16">
            {item.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">{section.heading}</h3>
                {section.paragraphs && (
                  <div className="space-y-4 mb-6">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-lg text-gray-600 leading-relaxed">{p}</p>
                    ))}
                  </div>
                )}
                {section.items && (
                  <ul className="space-y-4">
                    {section.items.map((li, liIdx) => (
                      <li key={liIdx} className="flex items-start text-lg text-gray-700 bg-gray-50 p-4 rounded-sm">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0 mt-0.5">✓</span>
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t(lang, 'hero_cta_start')}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/free-market-analysis`} className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-sm hover:bg-gray-100 transition duration-300 shadow-lg text-lg">
                {t(lang, 'cta_analysis')}
            </Link>
            <Link href={`/${lang}/contact`} className="inline-block bg-transparent border border-white text-white font-bold py-4 px-10 rounded-sm hover:bg-white hover:text-blue-900 transition duration-300 text-lg">
                {t(lang, 'cta_consult')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
