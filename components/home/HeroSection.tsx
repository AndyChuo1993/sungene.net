import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function HeroSection({ lang }: { lang: Lang }) {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-white text-center overflow-hidden">
        {/* Background Decorative Elements - Taiwan Market Focused */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
                <span className="text-blue-800 font-bold text-sm tracking-wide uppercase">
                    {lang === 'zh' ? '專為台灣製造商打造' : 'Designed for Manufacturers'}
                </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-gray-900">
              {t(lang, 'hero_title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              {t(lang, 'hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href={`/${lang}/free-market-analysis`} 
                className="inline-flex justify-center items-center px-8 py-4 bg-blue-900 text-white font-bold rounded-sm hover:bg-blue-800 transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t(lang, 'cta_analysis')}
              </Link>
              <Link 
                href={`/${lang}/contact`} 
                className="inline-flex justify-center items-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-sm hover:border-blue-900 hover:text-blue-900 transition duration-300 text-lg"
              >
                {t(lang, 'cta_consult')}
              </Link>
            </div>
            
            {/* Trust Badges / Social Proof */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-gray-400 font-medium text-sm uppercase tracking-wider">
                <span>{lang === 'zh' ? '服務超過 50+ 台灣工廠' : 'Serving 50+ Factories'}</span>
                <span className="hidden md:inline-block">•</span>
                <span>{lang === 'zh' ? '專注 B2B 外貿開發' : 'Focus on B2B Export'}</span>
                <span className="hidden md:inline-block">•</span>
                <span>{lang === 'zh' ? '歐美日市場落地' : 'Global Market Reach'}</span>
            </div>
          </div>
        </div>
    </section>
  )
}
