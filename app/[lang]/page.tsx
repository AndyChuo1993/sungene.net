import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'
import HeroSection from '@/components/home/HeroSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyUs from '@/components/home/WhyUs'
import ProcessSection from '@/components/home/ProcessSection'
import CasePreview from '@/components/home/CasePreview'
import CTASection from '@/components/home/CTASection'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'meta_home_title'),
    description: t(lang, 'meta_home_desc'),
    keywords: t(lang, 'meta_keywords'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <HeroSection lang={lang} />
      <ServicesPreview lang={lang} />
      <WhyUs lang={lang} />
      <ProcessSection lang={lang} />
      <CasePreview lang={lang} />
      <CTASection lang={lang} />
    </main>
  )
}
