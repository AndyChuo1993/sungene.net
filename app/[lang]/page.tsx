import Link from 'next/link'
import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import HeroSection from '@/components/home/HeroSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyUs from '@/components/home/WhyUs'
import ProcessSection from '@/components/home/ProcessSection'
import CasePreview from '@/components/home/CasePreview'
import CTASection from '@/components/home/CTASection'

type PageParams = {
  params: Promise<{ lang?: string }>
}

const HOME_SEO = {
  en: {
    title: 'Export Lead Generation & Distributor Development | SunGene',
    description:
      'SunGene helps export companies build a repeatable system for overseas buyer development, channel expansion, and deal progression.',
    keywords: [
      'b2b export lead generation',
      'distributor development',
      'overseas market development',
      'SunGene',
    ],
    h1: 'Find overseas buyers and channels that actually order',
    midTitle: 'Our goal is actual orders, not just inquiries',
    midDesc:
      'We drive the entire process from finding leads to closing deals.',
    leadBtn: 'Get Market Entry Advice',
    contactBtn: 'Book Strategy Call',
  },
  zh: {
    title: '外銷企業海外客戶開發與通路拓展｜SunGene',
    description:
      'SunGene 協助外銷企業透過海外客戶開發、採購對接、經銷商拓展與外銷外包，建立可持續成交的海外開發系統。',
    keywords: [
      '海外客戶開發',
      '海外採購與決策人開發',
      '外銷業務外包',
      '海外通路招募',
    ],
    h1: '幫外銷企業找到「會下單」的海外客戶與通路',
    midTitle: '我們的合作目標不是詢盤，而是實際訂單',
    midDesc:
      '我們致力於推動從開發到成交的完整流程，而不是只停留在線索交付。',
    leadBtn: '取得市場切入建議',
    contactBtn: '預約策略通話',
  },
  cn: {
    title: '外贸企业海外客户开发与渠道拓展｜SunGene',
    description:
      'SunGene 协助外贸企业通过海外客户开发、采购对接、经销渠道拓展与外贸外包，建立可持续成交的海外开发系统。',
    keywords: [
      '海外客户开发',
      '海外采购与决策人开发',
      '外贸业务外包',
      '海外渠道招募',
    ],
    h1: '帮外贸企业找到「会下单」的海外客户与渠道',
    midTitle: '我们的合作目标不是询盘，而是实际订单',
    midDesc:
      '我们致力于推动从开发到成交的完整流程，而不是只停留在线索交付。',
    leadBtn: '取得市场切入建议',
    contactBtn: '预约策略通话',
  },
} as const

function normalizeLang(lang?: string): Lang {
  if (lang === 'en' || lang === 'zh' || lang === 'cn') return lang
  return 'en'
}

function getHomeSeo(lang?: string) {
  return HOME_SEO[normalizeLang(lang)]
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  const data = getHomeSeo(safeLang)

  // 判斷目前的 base url 應該是哪個
  // 由於這是 generateMetadata，無法直接拿到 request header 的 host，
  // 所以我們根據 safeLang 來決定 canonical 應該指去哪裡，確保 self-canonical
  const baseUrl = 'https://sungene.net'

  return {
    title: data.title,
    description: safeLang === 'en' 
      ? 'SunGene helps export companies develop overseas customers, build channel partnerships, and make the export development process more stable, sustainable, and deal-focused.' 
      : safeLang === 'cn'
      ? 'SunGene 协助外贸企业开发海外客户、建立渠道合作，并把外贸开发流程做得更稳定、更可持续、更能推进成交。'
      : 'SunGene 協助外銷企業開發海外客戶、建立通路合作，並把外銷開發流程做得更穩定、更可持續、更能推進成交。',
    keywords: [...data.keywords],
    alternates: {
      canonical: `${baseUrl}/${safeLang}`,
      languages: {
        'zh-CN': 'https://sungene.net/cn',
        'zh-TW': 'https://sungene.net/zh',
        'en': 'https://sungene.net/en',
        'x-default': 'https://sungene.net/cn',
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${baseUrl}/${safeLang}`,
      siteName: 'SunGene',
      type: 'website',
      locale: safeLang === 'zh' ? 'zh_TW' : safeLang === 'cn' ? 'zh_CN' : 'en_US',
      images: [
        {
          url: '/og/og.png',
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: ['/og/og.png'],
    },
  }
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  const data = getHomeSeo(safeLang)
  const baseUrl = 'https://sungene.net'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SunGene',
    url: `${baseUrl}/${safeLang}`,
    logo: `${baseUrl}/logo/sungene.png`,
    description: data.description,
    sameAs: [],
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType:
      safeLang === 'en'
        ? 'B2B Export Lead Generation and Distributor Development'
        : safeLang === 'cn'
        ? 'B2B外贸客户开发与经销商开发'
        : 'B2B 外銷客戶開發與經銷商開發',
    provider: {
      '@type': 'Organization',
      name: 'SunGene',
      url: baseUrl,
    },
    areaServed: 'Global',
    description: data.description,
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <HeroSection lang={safeLang} />
      <ServicesPreview lang={safeLang} />

      <section className="bg-blue-50 py-16 border-y border-blue-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.midTitle}</h2>
            <p className="text-gray-600">{data.midDesc}</p>
          </div>
          <div className="flex gap-4">
            <Link
              href={`/${safeLang}/services/export-lead-generation`}
              className="bg-white text-blue-900 border border-blue-200 font-bold py-3 px-6 rounded-sm hover:bg-blue-50 transition"
            >
              {data.leadBtn}
            </Link>
            <Link
              href={`/${safeLang}/contact`}
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-sm hover:bg-blue-500 transition shadow-md"
            >
              {data.contactBtn}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                {safeLang === 'en' ? 'You don\'t just see reports, you see progress' : safeLang === 'cn' ? '你看到的不是报表，而是进展' : '你會看到的不是報表，而是進展'}
              </h2>
              <ul className="space-y-5 text-lg text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {safeLang === 'en' ? 'We tell you exactly who replied' : safeLang === 'cn' ? '我们会告诉你谁回复了' : '我們會告訴你誰回覆了'}
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {safeLang === 'en' ? 'Which clients are worth quoting' : safeLang === 'cn' ? '哪些客户值得报价' : '哪些客戶值得報價'}
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {safeLang === 'en' ? 'Who is entering sampling and testing' : safeLang === 'cn' ? '哪些正在进入样品与测试' : '哪些正在進入樣品與測試'}
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {safeLang === 'en' ? 'How to advance the next steps' : safeLang === 'cn' ? '下一步该怎么推进' : '下一步該怎麼推進'}
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {safeLang === 'en' ? 'Weekly Update' : safeLang === 'cn' ? '每周进度更新' : '每週進度更新'}
              </div>
              <div className="space-y-5">
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex gap-4">
                   <div className="w-2 h-full bg-green-400 rounded-full shrink-0"></div>
                   <div>
                     <div className="text-sm font-bold text-gray-500 mb-1">{safeLang === 'en' ? 'Status: Quoting' : safeLang === 'cn' ? '进度：报价中' : '進度：報價中'}</div>
                     <div className="text-gray-900 font-medium">
                       {safeLang === 'en' 
                         ? 'TechCorp requested a quote for 5,000 units. Ready for technical review call next Tuesday.' 
                         : safeLang === 'cn' 
                         ? 'TechCorp 提出 5,000 件报价需求，已安排下周二进行技术规格确认会议。' 
                         : 'TechCorp 提出 5,000 件報價需求，已安排下週二進行技術規格確認會議。'}
                     </div>
                   </div>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex gap-4">
                   <div className="w-2 h-full bg-blue-400 rounded-full shrink-0"></div>
                   <div>
                     <div className="text-sm font-bold text-gray-500 mb-1">{safeLang === 'en' ? 'Status: Sampling' : safeLang === 'cn' ? '进度：样品测试' : '進度：樣品測試'}</div>
                     <div className="text-gray-900 font-medium">
                       {safeLang === 'en' 
                         ? 'EuroMach sample testing passed. Moving to annual vendor contract negotiation.' 
                         : safeLang === 'cn' 
                         ? 'EuroMach 样品测试已通过，本周推进年度供应商合约条件讨论。' 
                         : 'EuroMach 樣品測試已通過，本週推進年度供應商合約條件討論。'}
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyUs lang={safeLang} />
      <ProcessSection lang={safeLang} />
      <CasePreview lang={safeLang} />
      <CTASection lang={safeLang} />
    </main>
  )
}