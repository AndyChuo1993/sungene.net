import Link from 'next/link'
import { ReactNode } from 'react'
import { Lang } from '@/lib/i18n'
import JsonLd from '@/components/JsonLd'

export type ServiceSeo = {
  slug: string
  path?: string
  title: Record<Lang, string>
  description: Record<Lang, string>
  h1: Record<Lang, string>
  problem: Record<Lang, string[]>
  solution: Record<Lang, string[]>
  whatIs: Record<Lang, string[]>
  howWorks: Record<Lang, string[]>
  process: Record<Lang, string[]>
  tools: Record<Lang, string[]>
  checklist: Record<Lang, string[]>
  results: Record<Lang, { label: string; value: string; desc: string }[]>
  funnel: Record<Lang, { label: string; value: string }[]>
  workflow?: Record<Lang, string[]>
  industries: Record<Lang, string[]>
  caseStudy: { title: Record<Lang, string>; desc: Record<Lang, string>; link: string }
  faq: { q: Record<Lang, string>; a: Record<Lang, string> }[]
  ctaTitle: Record<Lang, string>
  ctaDesc: Record<Lang, string>
  relatedLinks?: { label: Record<Lang, string>; href: string }[]
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
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const canonicalPath = service.path ? `/${lang}${service.path}` : `/${lang}/${service.slug}`
  const workflow = service.workflow?.[lang] ?? (
    lang === 'zh'
      ? ['市場研究', '目標買家清單', '線索資格審核', '主動開發', '會議']
      : ['Market Research', 'Target Buyer List', 'Lead Qualification', 'Cold Outreach', 'Meetings']
  )
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: f.q[lang],
      acceptedAnswer: { '@type': 'Answer', 'text': f.a[lang] },
    })),
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'zh' ? '首頁' : 'Home', item: `${base}/${lang}` },
      { '@type': 'ListItem', position: 2, name: lang === 'zh' ? '服務' : 'Services', item: `${base}/${lang}/services` },
      { '@type': 'ListItem', position: 3, name: service.h1[lang], item: `${base}${canonicalPath}` },
    ],
  }
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title[lang],
    description: service.description[lang],
    provider: {
      '@type': 'Organization',
      name: 'SunGene Co., LTD.',
      url: base,
    },
    areaServed: ['Worldwide'],
  }

  return (
    <main className="pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <JsonLd data={[breadcrumbSchema, faqSchema, serviceSchema]} />
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

        <Section title={lang === 'zh' ? '你可能遇到的問題' : 'The problem'}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'zh' ? '現況' : 'Common symptoms'}</div>
              <ul className="mt-3 space-y-2 text-gray-700">
                {service.problem[lang].map((x, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'zh' ? '影響' : 'Why it matters'}</div>
              <div className="mt-3 space-y-3 text-gray-700 leading-7">
                {service.solution[lang].slice(0, 2).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{lang === 'zh' ? '可追蹤' : 'Trackable'}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{lang === 'zh' ? '可複製' : 'Repeatable'}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{lang === 'zh' ? '可交付' : 'Deliverable'}</span>
              </div>
            </div>
          </div>
        </Section>

        <Section title={lang === 'zh' ? '我們的解法' : 'The solution'}>
          <div className="space-y-3 text-gray-700 leading-7">
            {service.solution[lang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'zh' ? '定義（Definition）' : 'Definition'}</div>
              <div className="mt-3 space-y-3 text-gray-700 leading-7">
                {service.whatIs[lang].map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'zh' ? '製造業怎麼找到海外買家' : 'How manufacturers find overseas buyers'}</div>
              <div className="mt-3 space-y-3 text-gray-700 leading-7">
                {service.howWorks[lang].map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title={lang === 'zh' ? '流程（Process）' : 'Process'}>
          <ol className="space-y-3 text-gray-700">
            {service.process[lang].map((x, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-900 font-bold">{i + 1}</span>
                <span className="leading-7">{x}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'zh' ? '流程圖（Workflow）' : 'Workflow diagram'}</div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {workflow.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="rounded-sm border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-800">{s}</div>
                    {idx !== workflow.length - 1 && <div className="text-gray-400">→</div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'zh' ? '工具（Tools）' : 'Tools we use'}</div>
              <ul className="mt-3 space-y-2 text-gray-700">
                {service.tools[lang].map((x, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-blue-50 p-4">
                <div className="text-sm font-semibold text-blue-900">{lang === 'zh' ? 'Checklist' : 'Checklist'}</div>
                <ul className="mt-2 space-y-1 text-sm text-blue-900/90">
                  {service.checklist[lang].map((x, i) => (
                    <li key={i} className="flex gap-2">
                      <span>•</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title={lang === 'zh' ? '交付與成果' : 'Deliverables & results'}>
          <div className="grid gap-6 md:grid-cols-3">
            {service.results[lang].map((x, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-semibold text-gray-900">{x.label}</div>
                <div className="mt-2 text-3xl font-bold text-blue-900">{x.value}</div>
                <div className="mt-2 text-gray-700 leading-7">{x.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
            <div className="text-sm font-semibold text-gray-900">{lang === 'zh' ? 'Lead Funnel（示意）' : 'Lead funnel (example)'} </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-5">
              {service.funnel[lang].map((x, i) => (
                <div key={i} className="rounded-sm bg-gray-50 border border-gray-200 p-4">
                  <div className="text-2xl font-bold text-gray-900">{x.value}</div>
                  <div className="mt-1 text-sm text-gray-600">{x.label}</div>
                </div>
              ))}
            </div>
          </div>
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

        {service.relatedLinks && service.relatedLinks.length > 0 && (
          <Section title={lang === 'zh' ? '延伸閱讀與內部連結' : 'Related links'}>
            <div className="grid gap-4 md:grid-cols-2">
              {service.relatedLinks.map((l, i) => (
                <Link key={i} href={l.href} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">{l.label[lang]}</div>
                  <div className="mt-2 text-sm text-gray-600">{lang === 'zh' ? '查看內容與下一步 →' : 'Open and continue →'}</div>
                </Link>
              ))}
            </div>
          </Section>
        )}

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
