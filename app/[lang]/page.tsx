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
    title: 'B2B Export Lead Generation & Distributor Development | SunGene',
    description:
      'SunGene helps companies grow overseas through B2B export lead generation, buyer development, distributor development, and export sales support.',
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
    leadBtn: 'Explore Lead Generation',
    contactBtn: 'Talk to SunGene',
  },
  zh: {
    title: '外銷客戶開發與海外買家開發服務 | SunGene',
    description:
      'SunGene 協助企業透過外銷客戶開發、海外買家開發、經銷商開發與外銷銷售支援，拓展海外市場。',
    keywords: [
      '外銷客戶開發',
      '海外買家開發',
      '經銷商開發',
      'SunGene',
    ],
    h1: '幫外銷企業找到「會下單」的海外客戶與通路',
    midTitle: '我們的目標不是詢盤，而是訂單',
    midDesc:
      '我們專注推進以下進展：對接採購決策人、進入報價流程、推進樣品與測試、協助成交與下單。',
    leadBtn: '查看客戶開發服務',
    contactBtn: '聯絡 SunGene',
  },
  cn: {
    title: '外贸客户开发与海外买家开发服务 | SunGene',
    description:
      'SunGene 协助企业通过外贸客户开发、海外买家开发、经销商开发与外贸销售支持，拓展海外市场。',
    keywords: [
      '外贸客户开发',
      '海外买家开发',
      '经销商开发',
      'SunGene',
    ],
    h1: '帮外贸企业找到「会下单」的海外客户与渠道',
    midTitle: '我们的目标不是询盘，而是订单',
    midDesc:
      '我们专注推进以下进展：对接采购决策人、进入报价流程、推进样品与测试、协助成交与下单。',
    leadBtn: '查看客户开发服务',
    contactBtn: '联系 SunGene',
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
  const baseUrl = safeLang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'

  return {
    title: data.title,
    description: data.description,
    keywords: [...data.keywords],
    alternates: {
      canonical: `${baseUrl}/${safeLang}`,
      languages: {
        'zh-CN': 'https://sungene.net/cn',
        'zh-TW': 'https://sungenelite.com/zh',
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
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  const data = getHomeSeo(safeLang)
  const baseUrl = safeLang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'

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

      <WhyUs lang={safeLang} />
      <ProcessSection lang={safeLang} />
      <CasePreview lang={safeLang} />
      <CTASection lang={safeLang} />
    </main>
  )
}