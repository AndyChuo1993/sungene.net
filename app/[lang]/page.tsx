import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import HeroSection from '@/components/home/HeroSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyUs from '@/components/home/WhyUs'
import ProcessSection from '@/components/home/ProcessSection'
import CasePreview from '@/components/home/CasePreview'
import CTASection from '@/components/home/CTASection'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const meta = {
    en: {
      title: 'B2B Export Lead Generation for Manufacturers | Buyer & Distributor Development | SunGene',
      description:
        'SunGene helps manufacturers grow overseas through export lead generation, buyer development, distributor development, and export sales outsourcing.',
      keywords:
        'b2b export lead generation, overseas buyer development, distributor development, export sales outsourcing, manufacturer export growth',
    },
    zh: {
      title: '製造商外銷客戶開發 | 海外買家開發與經銷商開發 | SunGene',
      description:
        'SunGene 協助製造商透過外銷客戶開發、海外買家開發、經銷商開發與外銷業務外包，拓展海外市場。',
      keywords:
        '外銷客戶開發, 海外買家開發, 經銷商開發, 外銷業務外包, 製造商外銷拓展',
    },
    cn: {
      title: '制造商外贸客户开发 | 海外买家开发与经销商开发 | SunGene',
      description:
        'SunGene 协助制造商通过外贸客户开发、海外买家开发、经销商开发与外贸业务外包，拓展海外市场。',
      keywords:
        '外贸客户开发, 海外买家开发, 经销商开发, 外贸业务外包, 制造商外贸拓展',
    },
  }[lang]

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://sungene.net/${lang}`,
      languages: {
        cn: 'https://sungene.net/cn',
        zh: 'https://sungene.net/zh',
        en: 'https://sungene.net/en',
        'zh-CN': 'https://sungene.net/cn',
        'x-default': 'https://sungene.net/en',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      images: ['/og/og.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og/og.png'],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <HeroSection lang={lang} />
      <ServicesPreview lang={lang} />
      
      {/* Mid-page CTA */}
      <section className="bg-blue-50 py-16 border-y border-blue-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {lang === 'en'
                ? 'Build export opportunities with a clearer process'
                : lang === 'cn'
                ? '用更清晰的流程建立外贸机会'
                : '用更清晰的流程建立外銷機會'}
            </h3>
            <p className="text-gray-600">
              {lang === 'en'
                ? 'We help manufacturers identify buyers, develop distributors, and support export sales execution without building a full internal export team first.'
                : lang === 'cn'
                ? '我们协助制造商识别海外买家、开发经销商，并支持外贸销售执行，不必一开始就建立完整内部外贸团队。'
                : '我們協助製造商識別海外買家、開發經銷商，並支援外銷銷售執行，不必一開始就建立完整內部外銷團隊。'}
            </p>
          </div>
          <div className="flex gap-4">
            <Link href={`/${lang}/services/export-lead-generation`} className="bg-white text-blue-900 border border-blue-200 font-bold py-3 px-6 rounded-sm hover:bg-blue-50 transition">
              {lang === 'en' ? 'Explore Lead Generation' : lang === 'cn' ? '查看客户开发服务' : '查看客戶開發服務'}
            </Link>
            <Link href={`/${lang}/contact`} className="bg-blue-600 text-white font-bold py-3 px-6 rounded-sm hover:bg-blue-500 transition shadow-md">
              {lang === 'en' ? 'Talk to SunGene' : lang === 'cn' ? '联系 SunGene' : '聯絡 SunGene'}
            </Link>
          </div>
        </div>
      </section>

      <WhyUs lang={lang} />
      <ProcessSection lang={lang} />
      <CasePreview lang={lang} />
      <CTASection lang={lang} />
    </main>
  )
}
