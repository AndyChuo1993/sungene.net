import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { getCases } from '@/data/cases'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'case_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const cases = getCases(lang)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t(lang, 'case_title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t(lang, 'hero_subtitle')}</p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          {cases.map((item) => (
            <div key={item.slug} className="flex flex-col bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden hover:shadow-xl transition duration-300 group">
              <Link href={`/${lang}/case-studies/${item.slug}`} className="block relative h-64 bg-gray-100 overflow-hidden">
                 {/* Placeholder for case image - replaced with icon/graphic if no image */}
                 {/* In a real app, use next/image with item.cover */}
                 <div className="absolute inset-0 bg-blue-50 flex items-center justify-center text-blue-900 group-hover:scale-105 transition duration-500">
                    <div className="text-center">
                        <div className="text-6xl font-bold opacity-10 mb-2">{item.title.charAt(0)}</div>
                        <div className="font-bold text-lg uppercase tracking-wider">{item.industry}</div>
                    </div>
                 </div>
                 <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                    {lang === 'zh' ? '成功案例' : 'Case Study'}
                 </div>
              </Link>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-sm text-gray-500 font-bold mb-2 uppercase tracking-wide">{item.industry}</div>
                <Link href={`/${lang}/case-studies/${item.slug}`} className="block">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition">{item.title}</h3>
                </Link>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{item.summary}</p>
                
                {item.highlights && (
                    <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-gray-100">
                        {item.highlights.map((h, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-blue-600 font-bold text-xl mb-1">{h.num}</div>
                                <div className="text-gray-500 text-xs uppercase">{h.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                <Link href={`/${lang}/case-studies/${item.slug}`} className="inline-block text-center w-full bg-gray-50 text-gray-900 font-bold py-3 px-6 rounded-sm hover:bg-blue-600 hover:text-white transition duration-300">
                  {lang === 'zh' ? '查看案例詳情' : 'View Case Study'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">{t(lang, 'hero_cta_start')}</h2>
          <Link href={`/${lang}/free-market-analysis`} className="inline-block bg-blue-900 text-white font-bold py-4 px-10 rounded-sm hover:bg-blue-800 transition duration-300 shadow-lg text-lg">
            {t(lang, 'cta_analysis')}
          </Link>
        </div>
      </section>
    </main>
  )
}
