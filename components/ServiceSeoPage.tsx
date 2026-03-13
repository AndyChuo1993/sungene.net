import Link from 'next/link'
import { ReactNode } from 'react'
import { Lang } from '@/lib/i18n'

export type ServiceSeo = {
  slug: string
  title: Record<Lang, string>
  description: Record<Lang, string>
  h1: Record<Lang, string>
  whatIs: Record<Lang, string[]>
  howWorks: Record<Lang, string[]>
  process: Record<Lang, string[]>
  industries: Record<Lang, string[]>
  caseStudy: { title: Record<Lang, string>; desc: Record<Lang, string>; link: string }
  faq: { q: Record<Lang, string>; a: Record<Lang, string> }[]
  ctaTitle: Record<Lang, string>
  ctaDesc: Record<Lang, string>
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export default function ServiceSeoPage({ lang, service }: { lang: Lang; service: ServiceSeo }) {
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{service.h1[lang]}</h1>
          <p className="mt-4 text-lg text-gray-600">{service.description[lang]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition"
            >
              {lang === 'zh' ? '聯絡我們' : 'Contact'}
            </Link>
            <Link
              href={`/${lang}/free-market-analysis`}
              className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-blue-900 font-medium text-sm hover:bg-blue-50 transition"
            >
              {lang === 'zh' ? '免費市場分析' : 'Free Market Analysis'}
            </Link>
          </div>
        </header>

        <Section title={lang === 'zh' ? '這項服務是什麼' : 'What is this service'}>
          <div className="space-y-3 text-gray-700 leading-7">
            {service.whatIs[lang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section title={lang === 'zh' ? '服務如何運作' : 'How the service works'}>
          <div className="space-y-3 text-gray-700 leading-7">
            {service.howWorks[lang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section title={lang === 'zh' ? '我們的 Lead Generation 流程' : 'Our lead generation process'}>
          <ol className="space-y-3 text-gray-700">
            {service.process[lang].map((x, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-900 font-bold">{i + 1}</span>
                <span className="leading-7">{x}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section title={lang === 'zh' ? '我們服務的產業' : 'Industries we work with'}>
          <div className="flex flex-wrap gap-2">
            {service.industries[lang].map((x, i) => (
              <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                {x}
              </span>
            ))}
          </div>
        </Section>

        <Section title={lang === 'zh' ? '案例' : 'Case study'}>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="text-lg font-bold text-gray-900">{service.caseStudy.title[lang]}</div>
            <div className="mt-2 text-gray-700 leading-7">{service.caseStudy.desc[lang]}</div>
            <div className="mt-4">
              <Link href={service.caseStudy.link} className="text-blue-900 font-medium hover:underline">
                {lang === 'zh' ? '查看成功案例 →' : 'View case study →'}
              </Link>
            </div>
          </div>
        </Section>

        <Section title={lang === 'zh' ? '常見問題' : 'FAQ'}>
          <div className="space-y-4">
            {service.faq.map((f, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="font-semibold text-gray-900">{f.q[lang]}</div>
                <div className="mt-2 text-gray-700 leading-7">{f.a[lang]}</div>
              </div>
            ))}
          </div>
        </Section>

        <section className="rounded-xl bg-slate-900 text-white p-8 mb-16">
          <h2 className="text-2xl font-bold">{service.ctaTitle[lang]}</h2>
          <p className="mt-2 text-slate-200">{service.ctaDesc[lang]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-sm bg-blue-500 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-400 transition"
            >
              {lang === 'zh' ? '立即諮詢' : 'Get a Consultation'}
            </Link>
            <Link
              href={`/${lang}/export-market-analysis`}
              className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-white font-medium text-sm hover:bg-white/10 transition"
            >
              {lang === 'zh' ? '免費出口市場分析' : 'Free Export Market Analysis'}
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
