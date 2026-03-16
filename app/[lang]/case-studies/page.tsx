import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { getCases } from '@/data/cases'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: t(lang, 'case_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const dataLang = lang === 'cn' ? 'zh' : lang
  const cases = getCases(dataLang)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold md:text-5xl">{t(lang, 'case_title')}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300 lg:mx-0">{t(lang, 'hero_subtitle')}</p>
            <div className="mt-6 max-w-3xl rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-gray-200">
              {lang === 'en' ? 'The following content represents anonymized project scenarios and common outcomes. It does not identify any single client or manufacturer by name.' : (lang === 'cn' ? '以下内容为代表性项目场景与常见合作成果，已去识别化与重组，不对应单一客户名称或个别合作厂商。' : '以下內容為代表性專案情境與常見合作成果，已去識別化與重組，不對應單一客戶名稱或個別合作廠商。')}
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
            <Image src="/illustrations/case-hub-hero.svg" alt={lang === 'en' ? 'Case studies hero illustration' : (lang === 'cn' ? '成功案例主视觉' : '成功案例主視覺')} width={1200} height={760} className="h-auto w-full" priority />
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          {cases.map((item) => (
            <div key={item.slug} className="flex flex-col bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden hover:shadow-xl transition duration-300 group">
              <Link href={`/${lang}/case-studies/${item.slug}`} className="block relative h-64 bg-gray-100 overflow-hidden">
                 {item.cover ? (
                    <div className="absolute inset-0">
                      <Image
                        src={item.cover}
                        alt={`${item.title} cover`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent" />
                    </div>
                 ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 group-hover:scale-105 transition duration-500">
                        <div className="text-center">
                            <div className="text-6xl font-bold opacity-10 mb-2">{lang === 'en' ? 'B2B' : (lang === 'cn' ? '企业' : '企業')}</div>
                            <div className="font-bold text-lg uppercase tracking-wider">{item.industry}</div>
                        </div>
                    </div>
                 )}
                 <div className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                    {lang === 'en' ? 'Representative Case' : (lang === 'cn' ? '示意案例' : '示意案例')}
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="text-white font-bold text-sm uppercase tracking-wide flex gap-4">
                        <span>{item.industry}</span>
                        <span>•</span>
                        <span>{item.market}</span>
                    </div>
                 </div>
              </Link>
              
              <div className="p-8 flex-grow flex flex-col">
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
                  {lang === 'en' ? 'View Case Study' : (lang === 'cn' ? '查看案例详情' : '查看案例詳情')}
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
          <Link href={`/${lang}/export-market-analysis`} className="inline-block bg-blue-900 text-white font-bold py-4 px-10 rounded-sm hover:bg-blue-800 transition duration-300 shadow-lg text-lg">
            {t(lang, 'cta_analysis')}
          </Link>
        </div>
      </section>
    </main>
  )
}
