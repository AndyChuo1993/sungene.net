import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function CTASection({ lang }: { lang: Lang }) {
  return (
    <section className="py-24 bg-blue-900 text-white text-center relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-blue-800 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-blue-800 rounded-full blur-3xl opacity-50 z-0"></div>
        
        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">{t(lang, 'home_cta_title')}</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            {lang === 'en' ? 'Scale your export sales without building an internal team.' : (lang === 'cn' ? '不用自建团队，也能擁有專業的外贸開發能力。' : '不用自建團隊，也能擁有專業的外銷開發能力。')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href={`/${lang}/export-market-analysis`} 
              className="inline-flex justify-center items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-sm hover:bg-gray-100 transition duration-300 shadow-lg text-lg transform hover:-translate-y-0.5"
            >
              {t(lang, 'cta_analysis')}
            </Link>
            <Link 
              href={`/${lang}/contact`} 
              className="inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-blue-900 transition duration-300 text-lg"
            >
              {t(lang, 'cta_consult')}
            </Link>
          </div>
        </div>
    </section>
  )
}
