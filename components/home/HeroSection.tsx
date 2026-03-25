import Link from 'next/link'
import { Lang } from '@/lib/i18n'

export default function HeroSection({ lang }: { lang: Lang }) {
  const content = {
    en: {
      h1: 'Machinery Solutions for Packaging, Food Processing, and Industrial Production',
      sub: 'We help importers, distributors, and manufacturers find suitable machinery solutions from Asia — from machine selection and customization to export delivery.',
      btnExplore: 'Explore Solutions',
      btnInquiry: 'Send an Inquiry',
      shortTitle: 'Not sure which machine fits your production needs?',
      shortDesc: 'We work with buyers who are still comparing options, evaluating automation levels, or planning future production upgrades. Instead of pushing a single machine, we help you identify a more suitable solution based on product type, capacity, budget, and application.'
    },
    cn: {
      h1: '为包装、食品加工与工业生产提供机械解决方案',
      sub: '我们协助进口商、经销商与制造商寻找合适的亚洲机械解决方案——从设备匹配、定制化到出口交付。',
      btnExplore: '探索解决方案',
      btnInquiry: '发送询价',
      shortTitle: '不确定哪款机器适合您的生产需求？',
      shortDesc: '我们协助仍在比较选项、评估自动化程度或规划未来生产升级的买家。与其推销单一机器，我们更倾向于根据产品类型、产能、预算和应用，帮您找出更合适的解决方案。'
    },
    zh: {
      h1: '為包裝、食品加工與工業生產提供機械解決方案',
      sub: '我們協助進口商、經銷商與製造商尋找合適的亞洲機械解決方案——從設備匹配、客製化到出口交付。',
      btnExplore: '探索解決方案',
      btnInquiry: '發送詢價',
      shortTitle: '不確定哪款機器適合您的生產需求？',
      shortDesc: '我們協助仍在比較選項、評估自動化程度或規劃未來生產升級的買家。與其推銷單一機器，我們更傾向於根據產品類型、產能、預算和應用，幫您找出更合適的解決方案。'
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-32 text-center lg:text-left md:pb-32 md:pt-40">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
            {t.h1}
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-600 lg:mx-0">
            {t.sub}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start mb-20">
            <Link
              href={`/${lang}/solutions`}
              className="inline-flex items-center justify-center rounded-sm bg-orange-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:bg-orange-700"
            >
              {t.btnExplore}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-sm border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition duration-300 hover:border-blue-900 hover:text-blue-900"
            >
              {t.btnInquiry}
            </Link>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 md:p-10 text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.shortTitle}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{t.shortDesc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
