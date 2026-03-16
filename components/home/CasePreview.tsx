import Image from 'next/image'
import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'
import { getCases } from '@/data/cases'

export default function CasePreview({ lang }: { lang: Lang }) {
  const dataLang = lang === 'cn' ? 'zh' : lang
  const cases = getCases(dataLang).slice(0, 2)

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{lang === 'en' ? 'Success Stories' : (lang === 'cn' ? '成功案例' : '成功案例')}</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">{lang === 'en' ? 'See how we help enterprises go global' : (lang === 'cn' ? '看看我們如何幫助企业走向世界' : '看看我們如何幫助企業走向世界')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {cases.map((item) => (
            <div key={item.slug} className="group bg-white border border-gray-200 rounded-sm hover:border-blue-900 hover:shadow-xl transition duration-300 flex flex-col h-full overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-slate-950">
                 {item.cover ? (
                   <Image
                     src={item.cover}
                     alt={`${item.title} cover`}
                     fill
                     className="object-cover transition duration-500 group-hover:scale-105"
                     sizes="(min-width: 768px) 50vw, 100vw"
                   />
                 ) : (
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800" />
                 )}
                 <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(15,23,42,0.9),transparent)]" />
                 <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:22px_22px]" />
                 <div className="absolute left-6 top-6 max-w-[75%]">
                    <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                      {item.industry}
                    </div>
                    <div className="mt-4 text-2xl font-bold leading-tight text-white">
                      {item.title}
                    </div>
                 </div>
                 <div className="absolute bottom-4 left-4 border border-white/15 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-900 shadow-sm backdrop-blur">
                    {lang === 'en' ? 'Market: ' : (lang === 'cn' ? '目标市场：' : '目標市場：')} {item.market}
                 </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition leading-tight">{item.title}</h3>
                <div className="mb-6 flex-grow">
                    <p className="text-blue-900 font-bold text-lg bg-blue-50 p-4 rounded-sm border-l-4 border-blue-600">
                        {item.result}
                    </p>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed line-clamp-2">
                        {item.summary}
                    </p>
                </div>
                <Link href={`/${lang}/case-studies/${item.slug}`} className="inline-block text-center w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-sm hover:bg-blue-800 transition duration-300">
                  {lang === 'en' ? 'Read Case Study' : (lang === 'cn' ? '閱讀完整案例' : '閱讀完整案例')}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href={`/${lang}/case-studies`} className="inline-flex items-center text-blue-900 font-bold hover:underline text-lg">
            {lang === 'en' ? 'View More Case Studies' : (lang === 'cn' ? '查看更多成功案例' : '查看更多成功案例')} 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
