import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'process_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t(lang, 'process_title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t(lang, 'hero_subtitle')}</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start">
                 {/* Icon/Number */}
                 <div className="flex-shrink-0 w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    {i}
                 </div>
                 
                 {/* Content */}
                 <div className="pt-2">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{t(lang, `process_${i}_title`)}</h3>
                    <p className="text-xl text-gray-500 font-medium mb-2">{t(lang, `process_${i}_desc`)}</p>
                    <div className="w-16 h-1 bg-blue-100 mt-4"></div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t(lang, 'hero_cta_start')}</h2>
          <Link href={`/${lang}/free-market-analysis`} className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-sm hover:bg-gray-100 transition duration-300 shadow-lg text-lg">
            {t(lang, 'cta_analysis')}
          </Link>
        </div>
      </section>
    </main>
  )
}
