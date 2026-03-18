import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const baseUrl = lang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'

  return {
    title: t(lang, 'process_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
    alternates: {
      canonical: `${baseUrl}/${lang}/how-it-works`,
      languages: {
        'zh-CN': 'https://sungene.net/cn/how-it-works',
        'zh-TW': 'https://sungenelite.com/zh/how-it-works',
        'en': 'https://sungene.net/en/how-it-works',
        'x-default': 'https://sungene.net/en/how-it-works',
      },
    },
    openGraph: {
      title: t(lang, 'process_title') + ' | SunGene',
      description: t(lang, 'meta_home_desc'),
      url: `${baseUrl}/${lang}/how-it-works`,
      images: ['/og/og.png'],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'

  const steps = [
    {
      id: 1,
      title: t(lang, 'process_1_title'),
      desc: lang === 'en' ? 'In-depth analysis of target market competition, pricing trends, and buyer personas to ensure accurate product positioning.' : (lang === 'cn' ? '深入分析目标市场的竞争狀況、價格趨勢與潜在买家类别型，確保產品定位準確。' : '深入分析目標市場的競爭狀況、價格趨勢與潛在買家類別型，確保產品定位準確。'),
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
      )
    },
    {
      id: 2,
      title: t(lang, 'process_2_title'),
      desc: lang === 'en' ? 'Using customs data and industry databases to build precise buyer lists including key decision-maker contacts.' : (lang === 'cn' ? '利用海關数据與行业数据数据库，建立包含关键决策人联系方式的精准买家名单。' : '利用海關資料與產業資料函式庫，建立包含關鍵決策人聯絡方式的精準買家名單。'),
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      )
    },
    {
      id: 3,
      title: t(lang, 'process_3_title'),
      desc: lang === 'en' ? 'Executing multi-touch Email and LinkedIn campaigns to proactively reach and qualify potential clients with professional copy.' : (lang === 'cn' ? '执行多波段的邮件與商務社群開發，通过專業文案主动触达並筛选意向客戶。' : '執行多波段的郵件與商務社群開發，透過專業文案主動觸達並篩選意向客戶。'),
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      id: 4,
      title: t(lang, 'process_4_title'),
      desc: lang === 'en' ? 'Handing over high-quality inquiries and business opportunities to you, and assisting with subsequent sampling and quotation negotiations.' : (lang === 'cn' ? '將高质量的询盘與商務机会轉交給您，並協助後續的样品寄送與报价谈判。' : '將高品質的詢價與商務機會轉交給您，並協助後續的樣品寄送與報價談判。'),
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t(lang, 'process_title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {isChinese 
              ? '從市場分析到訂單成交，我們提供端到端的系統化解決方案。' 
              : 'From market analysis to closed deals, we provide an end-to-end systematic solution.'}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6">
            <div className="space-y-24 relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block"></div>
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 md:hidden"></div>

                {steps.map((s, idx) => (
                    <div key={s.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Icon/Number */}
                        <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 shadow-lg">
                            <div className="w-8 h-8 md:w-10 md:h-10">
                                {s.icon}
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {idx + 1}
                            </div>
                        </div>

                        {/* Content */}
                        <div className={`flex-1 text-left md:text-${idx % 2 === 1 ? 'right' : 'left'} pl-16 md:pl-0`}>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{s.title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {s.desc}
                            </p>
                        </div>
                        
                        {/* Spacer for layout balance */}
                        <div className="flex-1 hidden md:block"></div>
                    </div>
                ))}
            </div>

            <div className="mt-24 text-center">
                <Link href={`/${lang}/contact`} className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-sm hover:bg-blue-700 transition duration-300 shadow-lg text-lg">
                    {t(lang, 'cta_start')}
                </Link>
            </div>
        </div>
      </section>
    </main>
  )
}
