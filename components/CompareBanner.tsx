import { Container } from '@/components/ui/Container'
import { Lang } from '@/lib/i18n'

const COPY: Record<string, {
  kicker: string
  title: string
  vsAlibaba: string
  vsAgent: string
}> = {
  en: {
    kicker: 'COMPARING YOUR OPTIONS',
    title: 'Honest comparisons before you commit',
    vsAlibaba: 'SunGene vs buying direct on Alibaba',
    vsAgent: 'SunGene vs commission sourcing agents',
  },
  zh: {
    kicker: '在你決定之前',
    title: '誠實對比給你看',
    vsAlibaba: 'SunGene vs 直接在 Alibaba 採購',
    vsAgent: 'SunGene vs 抽佣型採購代理',
  },
  cn: {
    kicker: '在您决定之前',
    title: '诚实对比给您看',
    vsAlibaba: 'SunGene vs 直接在 Alibaba 采购',
    vsAgent: 'SunGene vs 抽佣型采购代理',
  },
  fr: {
    kicker: 'COMPARER VOS OPTIONS',
    title: 'Comparaisons honnêtes avant de vous engager',
    vsAlibaba: 'SunGene vs acheter direct sur Alibaba',
    vsAgent: 'SunGene vs agents à commission',
  },
  es: {
    kicker: 'COMPARAR SUS OPCIONES',
    title: 'Comparaciones honestas antes de comprometerse',
    vsAlibaba: 'SunGene vs comprar directo en Alibaba',
    vsAgent: 'SunGene vs agentes a comisión',
  },
}

export default function CompareBanner({ lang }: { lang: Lang }) {
  const c = COPY[lang] || COPY.en
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-10 sm:py-14">
      <Container className="max-w-4xl">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{c.kicker}</div>
        <h2 className="mt-2 text-2xl font-bold text-gray-950 sm:text-3xl">{c.title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            href={`/${lang}/vs-alibaba-direct`}
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:border-accent-300 hover:bg-accent-50"
          >
            <span className="text-sm font-semibold text-gray-900">{c.vsAlibaba}</span>
            <span className="text-accent-600 transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href={`/${lang}/vs-sourcing-agent`}
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:border-accent-300 hover:bg-accent-50"
          >
            <span className="text-sm font-semibold text-gray-900">{c.vsAgent}</span>
            <span className="text-accent-600 transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
