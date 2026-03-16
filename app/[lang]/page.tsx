import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { t, Lang } from '@/lib/i18n'
import HeroSection from '@/components/home/HeroSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyUs from '@/components/home/WhyUs'
import ProcessSection from '@/components/home/ProcessSection'
import CasePreview from '@/components/home/CasePreview'
import CTASection from '@/components/home/CTASection'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: t(lang, 'meta_home_title'),
    description: t(lang, 'meta_home_desc'),
    keywords: t(lang, 'meta_keywords'),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        zh: '/zh',
        en: '/en',
        'x-default': '/en',
      },
    },
    openGraph: {
      title: t(lang, 'meta_home_title'),
      description: t(lang, 'meta_home_desc'),
      type: 'website',
      images: ['/og/og.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: t(lang, 'meta_home_title'),
      description: t(lang, 'meta_home_desc'),
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
                    {lang === 'zh' ? '先看案例，再決定合作方式' : 'Review the proof before choosing a service'}
                </h3>
                <p className="text-gray-600">
                    {lang === 'zh' ? '先從成功案例了解我們怎麼做，再決定你需要買家開發、經銷商開發，還是外銷業務外套件。' : 'Start with case studies to see how we work, then decide whether you need lead generation, distributor development, or export sales outsourcing.'}
                </p>
            </div>
            <div className="flex gap-4">
                <Link href={`/${lang}/case-studies`} className="bg-white text-blue-900 border border-blue-200 font-bold py-3 px-6 rounded-sm hover:bg-blue-50 transition">
                    {lang === 'zh' ? '查看成功案例' : 'View Case Studies'}
                </Link>
                <Link href={`/${lang}/export-market-analysis`} className="bg-blue-600 text-white font-bold py-3 px-6 rounded-sm hover:bg-blue-500 transition shadow-md">
                    {lang === 'zh' ? '免費出口市場分析' : 'Free Export Market Analysis'}
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
