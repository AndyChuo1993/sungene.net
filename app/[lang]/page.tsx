import Link from 'next/link'
import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import HeroSection from '@/components/home/HeroSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyUs from '@/components/home/WhyUs'
import WhoWeWorkWith from '@/components/home/WhoWeWorkWith'
import ProcessSection from '@/components/home/ProcessSection'
import Applications from '@/components/home/Applications'
import CTASection from '@/components/home/CTASection'
import FAQ from '@/components/home/FAQ'

type PageParams = {
  params: Promise<{ lang?: string }>
}

const HOME_SEO = {
  en: {
    title: 'Packaging, Food Processing & Industrial Machinery | SunGene',
    description: 'SunGene provides machinery solutions for packaging, food processing, and industrial applications — helping global buyers move from machine selection to export delivery with greater clarity and efficiency.',
    keywords: ['packaging machinery', 'food processing machinery', 'custom machinery', 'industrial equipment', 'export delivery'],
  },
  zh: {
    title: '包裝、食品加工與工業應用機械解決方案｜SunGene',
    description: 'SunGene 為全球買家提供包裝、食品加工與工業應用機械解決方案，從設備匹配到出口交付，協助客戶找到更合適的設備方案。',
    keywords: ['包裝機械', '食品加工機械', '客製機械', '工業設備', '設備出口'],
  },
  cn: {
    title: '包装、食品加工与工业应用机械解决方案｜SunGene',
    description: 'SunGene 为全球买家提供包装、食品加工与工业应用机械解决方案，从设备匹配到出口交付，协助客户找到更合适的设备方案。',
    keywords: ['包装机械', '食品加工机械', '定制机械', '工业设备', '设备出口'],
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

  const baseUrl = 'https://sungene.net'

  return {
    title: data.title,
    description: data.description,
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

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <HeroSection lang={safeLang} />
      <ServicesPreview lang={safeLang} />
      <WhyUs lang={safeLang} />
      <WhoWeWorkWith lang={safeLang} />
      <ProcessSection lang={safeLang} />
      <Applications lang={safeLang} />
      <CTASection lang={safeLang} />
      <FAQ lang={safeLang} />
    </main>
  )
}
