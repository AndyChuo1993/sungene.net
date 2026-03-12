import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'
import { getCases } from '@/data/cases'

export default function CasePreview({ lang }: { lang: Lang }) {
  const cases = getCases(lang).slice(0, 2) // Show first 2 cases

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t(lang, 'case_title')}</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">{lang === 'zh' ? '看看我們如何幫助台灣製造商走向世界' : 'See how we help manufacturers go global'}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {cases.map((item) => (
            <div key={item.slug} className="group bg-white border border-gray-200 rounded-sm hover:border-blue-900 hover:shadow-xl transition duration-300 flex flex-col h-full">
              <div className="h-64 bg-gray-100 relative overflow-hidden">
                 {/* Case Image Placeholder - Replaced with Graphic */}
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center group-hover:scale-105 transition duration-500">
                    <div className="text-center">
                        <div className="text-6xl font-bold text-gray-200 mb-2">{item.title.charAt(0)}</div>
                        <div className="font-bold text-lg text-gray-400 uppercase tracking-wider">{item.industry}</div>
                    </div>
                 </div>
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-900 shadow-sm">
                    {item.industry}
                 </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition">{item.title}</h3>
                <div className="space-y-3 mb-6 flex-grow">
                    <p className="text-gray-600 font-medium border-l-2 border-blue-500 pl-3">
                        {lang === 'zh' ? '目標市場：' : 'Market: '} {item.sections.find(s => s.heading.includes('背景') || s.heading.includes('Background'))?.paragraphs?.[0]?.slice(0, 50)}...
                    </p>
                    <p className="text-blue-900 font-bold text-lg bg-blue-50 p-3 rounded-sm">
                        {item.result}
                    </p>
                </div>
                <Link href={`/${lang}/case-studies/${item.slug}`} className="inline-block text-center w-full border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition duration-300">
                  {lang === 'zh' ? '閱讀完整案例' : 'Read Case Study'}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href={`/${lang}/case-studies`} className="inline-flex items-center text-blue-900 font-bold hover:underline text-lg">
            {t(lang, 'case_cta')} 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
