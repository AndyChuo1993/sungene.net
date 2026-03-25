import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'

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
    <section className="relative overflow-hidden bg-hero-radial pb-20 pt-16 sm:pt-20 md:pb-28">
      <Container className="relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
            {t.h1}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
            {t.sub}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/${lang}/solutions`} size="lg">
              {t.btnExplore}
            </ButtonLink>
            <ButtonLink href={`/${lang}/contact`} variant="secondary" size="lg">
              {t.btnInquiry}
            </ButtonLink>
          </div>

          <div className="mt-12 rounded-2xl bg-white/80 p-8 shadow-elev-1 ring-1 ring-gray-200/60 backdrop-blur">
            <h3 className="text-base font-semibold text-gray-950">{t.shortTitle}</h3>
            <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">{t.shortDesc}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
