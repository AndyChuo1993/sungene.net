import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Lang } from '@/lib/i18n'
import JsonLd from '@/components/JsonLd'
import { cnText } from '@/lib/cnText'

export type ServiceSeo = {
  slug: string
  annualPlanTitle?: Partial<Record<Lang, string>>
  annualPlan?: Partial<Record<Lang, { phase: string; focus: string; deliverables: string[] }[]>>
  path?: string
  title: Record<Lang, string>
  description: Record<Lang, string>
  h1: Record<Lang, string>
  heroSubtitle?: Partial<Record<Lang, string>>
  heroPromise?: Partial<Record<Lang, string>>
  heroBestFor?: Partial<Record<Lang, string>>
  heroDeliverablesLine?: Partial<Record<Lang, string>>
  heroTrustSignal?: Partial<Record<Lang, string>>
  whoFor?: Partial<Record<Lang, string[]>>
  whatYouGet?: Partial<Record<Lang, string[]>>
  typicalResults?: Partial<Record<Lang, { label: string; value: string }[]>>
  problem: Record<Lang, string[]>
  whyItMatters?: Partial<Record<Lang, string[]>>
  solution: Record<Lang, string[]>
  whatIs: Record<Lang, string[]>
  howWorks: Record<Lang, string[]>
  process: Record<Lang, string[]>
  tools: Record<Lang, string[]>
  checklist: Record<Lang, string[]>
  results: Record<Lang, { label: string; value: string; desc: string }[]>
  funnel: Record<Lang, { label: string; value: string }[]>
  workflow?: Partial<Record<Lang, string[]>>
  marketMap?: Partial<Record<Lang, string[]>>
  marketMapItems?: Partial<Record<Lang, { region: string; note: string }[]>>
  industries: Record<Lang, string[]>
  caseStudy: { title: Record<Lang, string>; desc: Record<Lang, string>; link: string }
  caseStudyEvidence?: Partial<Record<Lang, { label: string; value: string }[]>>
  caseStudyBeforeAfter?: Partial<Record<Lang, { before: string[]; after: string[] }>>
  caseStudyStats?: Partial<Record<Lang, { label: string; value: string }[]>>
  caseStudySections?: { title: Partial<Record<Lang, string>>; content: Partial<Record<Lang, string[]>> }[]
  proofArtifacts?: Partial<Record<Lang, { title: string; caption?: string; lines: string[] }[]>>
  faq: { q: Record<Lang, string>; a: Record<Lang, string> }[]
  ctaTitle: Record<Lang, string>
  ctaDesc: Record<Lang, string>
  ctaButtons?: { primary?: { label: Record<Lang, string>; href: string }; secondary?: { label: Record<Lang, string>; href: string }; tertiary?: { label: Record<Lang, string>; href: string } }
  seoSections?: { id: string; title: Partial<Record<Lang, string>>; content: Partial<Record<Lang, string[]>>; bullets?: Partial<Record<Lang, string[]>> }[]
  geoGroupTitle?: Partial<Record<Lang, string>>
  geoSections?: { id: string; title: Partial<Record<Lang, string>>; items: Partial<Record<Lang, string[]>>; note?: Partial<Record<Lang, string>> }[]
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

function StatGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-5">
      {items.map((x, i) => (
        <div key={i} className="rounded-sm bg-gray-50 border border-gray-200 p-4">
          <div className="text-2xl font-bold text-gray-900">{x.value}</div>
          <div className="mt-1 text-sm text-gray-600">{x.label}</div>
        </div>
      ))}
    </div>
  )
}

function FunnelViz({ items }: { items: { label: string; value: string }[] }) {
  const widths = items.map((_, i) => 100 - i * (60 / Math.max(1, items.length - 1)))
  return (
    <div className="space-y-3">
      {items.map((x, i) => (
        <div key={`${x.label}-${i}`} className="flex items-center gap-3">
          <div className="w-28 shrink-0 text-sm text-gray-700">{x.label}</div>
          <div className="flex-1">
            <div className="h-10 rounded-sm border border-gray-200 bg-gray-50 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-900 to-blue-600 px-3 flex items-center justify-between"
                style={{ width: `${widths[i]}%` }}
              >
                <div className="text-sm font-semibold text-white">{x.value}</div>
                <div className="text-xs text-white/80">{Math.round(widths[i])}%</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function WorkflowViz({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="grid gap-3 md:grid-cols-5">
        {steps.map((s, i) => (
          <div key={`${s}-${i}`} className="relative rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="text-xs font-semibold text-blue-900">{String(i + 1).padStart(2, '0')}</div>
            <div className="mt-2 font-semibold text-gray-900">{s}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ArtifactPreview({ title, caption, lines }: { title: string; caption?: string; lines: string[] }) {
  const maybeTable = lines.length >= 2 && lines[0].includes('\t') && lines.slice(1).every((l) => l.includes('\t'))
  const tableRows = maybeTable
    ? lines.map((l) => l.split('\t').filter((x) => x !== ''))
    : null

  const parseKeyValueBlock = (input: string) => {
    const rows = input
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => {
        const idx = l.indexOf(':')
        if (idx === -1) return null
        return { k: l.slice(0, idx).trim(), v: l.slice(idx + 1).trim() }
      })
      .filter(Boolean) as { k: string; v: string }[]
    return rows
  }

  const keyValue = lines.length === 1 ? parseKeyValueBlock(lines[0]) : null

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="text-sm font-semibold text-gray-900">{title}</div>
      {caption && <div className="mt-1 text-sm text-gray-600">{caption}</div>}
      <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
        {tableRows && tableRows.length >= 2 ? (
          <div className="overflow-auto">
            <table className="min-w-full text-left text-xs">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  {tableRows[0].map((h, i) => (
                    <th key={i} className="px-3 py-2 font-semibold whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((r, ri) => (
                  <tr key={ri} className="border-t border-gray-200">
                    {tableRows[0].map((_, ci) => (
                      <td key={ci} className="px-3 py-2 text-gray-800 whitespace-nowrap">
                        {r[ci] ?? ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : keyValue && keyValue.length >= 2 ? (
          <div className="p-4 space-y-2">
            {keyValue.map((kv, i) => (
              <div key={i} className="grid grid-cols-3 gap-3">
                <div className="text-gray-600 font-medium">{kv.k}</div>
                <div className="col-span-2 text-gray-900">{kv.v}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 overflow-auto">
            <pre className="text-xs leading-5 text-gray-800 whitespace-pre">{lines.join('\n')}</pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ServiceSeoPage({ lang, service }: { lang: Lang; service: ServiceSeo }) {
  const isChinese = lang !== 'en'
  const tr = (value: string) => cnText(lang, value)
  const imageMap: Record<string, string> = {
    'export-marketing': '/illustrations/seo-landing-panel.svg',
    'export-lead-generation': '/illustrations/service-export-leads.svg',
    'distributor-development': '/illustrations/service-distributor.svg',
    'export-sales-outsourcing': '/illustrations/service-outsourcing.svg'
  }
  const serviceIllustration = imageMap[service.slug] || '/illustrations/seo-landing-panel.svg'
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const canonicalPath = service.path ? `/${lang}${service.path}` : `/${lang}/${service.slug}`
  const workflow = service.workflow?.[lang] ?? (
    isChinese
      ? ['市場研究', '目標買家清單', '線索資格審核', '主動開發', '會議']
      : ['Market Research', 'Target Buyer List', 'Lead Qualification', 'Cold Outreach', 'Meetings']
  )
  const normalizedWorkflow = workflow.map((step) => tr(step))

  const heroRows = [
    service.heroPromise?.[lang] ? { k: lang === 'en' ? 'Promise' : (lang === 'cn' ? '承諾' : '承諾'), v: service.heroPromise[lang] } : null,
    service.heroBestFor?.[lang] ? { k: lang === 'en' ? 'Best for' : (lang === 'cn' ? '適合誰' : '適合誰'), v: service.heroBestFor[lang] } : null,
    service.heroDeliverablesLine?.[lang] ? { k: lang === 'en' ? 'Deliverables' : (lang === 'cn' ? '交付' : '交付'), v: service.heroDeliverablesLine[lang] } : null,
    service.heroTrustSignal?.[lang] ? { k: lang === 'en' ? 'Signal' : (lang === 'cn' ? '信任訊號' : '信任訊號'), v: service.heroTrustSignal[lang] } : null,
  ].filter(Boolean) as { k: string; v: string }[]
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: tr(f.q[lang]),
      acceptedAnswer: { '@type': 'Answer', 'text': tr(f.a[lang]) },
    })),
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Home' : (lang === 'cn' ? '首页' : '首頁'), item: `${base}/${lang}` },
      { '@type': 'ListItem', position: 2, name: lang === 'en' ? 'Services' : (lang === 'cn' ? '服务' : '服務'), item: `${base}/${lang}/services` },
      { '@type': 'ListItem', position: 3, name: tr(service.h1[lang]), item: `${base}${canonicalPath}` },
    ],
  }
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: tr(service.title[lang]),
    description: tr(service.description[lang]),
    provider: {
      '@type': 'Organization',
      name: 'SunGene Co., LTD.',
      url: base,
    },
    areaServed: ['Worldwide'],
    audience: lang === 'en' ? 'Manufacturers and export teams' : (lang === 'cn' ? '製造業與外贸团队' : '製造業與外銷團隊'),
  }

  return (
    <main className="pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <JsonLd data={[breadcrumbSchema, faqSchema, serviceSchema]} />
        <header className="mb-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{tr(service.h1[lang])}</h1>
          <p className="mt-4 text-lg text-gray-600">{tr(service.heroSubtitle?.[lang] ?? service.description[lang])}</p>
          {heroRows.length > 0 && (
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {heroRows.map((x) => (
                <div key={x.k} className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{x.k}</div>
                  <div className="mt-2 text-gray-900 font-semibold leading-6">{tr(x.v)}</div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {service.ctaButtons?.primary ? (
              <Link href={`/${lang}${service.ctaButtons.primary.href}`} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition">
                {tr(service.ctaButtons.primary.label[lang])}
              </Link>
            ) : (
              <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition">
                {lang === 'en' ? 'Contact' : (lang === 'cn' ? '联系我们' : '聯絡我們')}
              </Link>
            )}
            {service.ctaButtons?.secondary ? (
              <Link href={`/${lang}${service.ctaButtons.secondary.href}`} className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-blue-900 font-medium text-sm hover:bg-blue-50 transition">
                {tr(service.ctaButtons.secondary.label[lang])}
              </Link>
            ) : (
              <Link href={`/${lang}/export-market-analysis`} className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-blue-900 font-medium text-sm hover:bg-blue-50 transition">
                {lang === 'en' ? 'Free Export Market Analysis' : (lang === 'cn' ? '免费出口市场分析' : '免費出口市場分析')}
              </Link>
            )}
          </div>
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-4 shadow-xl">
              <Image src={serviceIllustration} alt={tr(service.h1[lang])} width={1200} height={720} className="h-auto w-full rounded-[1.5rem]" priority />
            </div>
          </div>
        </header>

        {service.whoFor?.[lang] && service.whoFor[lang].length > 0 && (
          <Section title={lang === 'en' ? 'Who this service is for' : (lang === 'cn' ? '适用物件' : '適用物件')}>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Best fit for' : (lang === 'cn' ? '最適合' : '最適合')}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.whoFor[lang].map((x, i) => (
                  <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    {tr(x)}
                  </span>
                ))}
              </div>
            </div>
          </Section>
        )}

        {service.whatYouGet?.[lang] && service.whatYouGet[lang].length > 0 && (
          <Section title={lang === 'en' ? 'What you will get' : (lang === 'cn' ? '你會拿到什麼' : '你會拿到什麼')}>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Deliverables' : (lang === 'cn' ? '交付成果' : '交付成果')}</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.whatYouGet[lang].map((x, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-800">
                    {tr(x)}
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {service.annualPlan?.[lang] && service.annualPlan[lang].length > 0 && (
          <Section title={service.annualPlanTitle?.[lang] ?? (lang === 'en' ? 'One-year engagement plan' : (lang === 'cn' ? '一年期合作節奏' : '一年期合作節奏'))}>
            <div className="grid gap-4 lg:grid-cols-4">
              {service.annualPlan[lang].map((step, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-900">{tr(step.phase)}</div>
                  <div className="mt-2 text-lg font-bold text-gray-900">{tr(step.focus)}</div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-700">
                    {step.deliverables.map((d, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                        <span>{tr(d)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section title={lang === 'en' ? 'The problem' : (lang === 'cn' ? '你可能遇到的問題' : '你可能遇到的問題')}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Common symptoms' : (lang === 'cn' ? '現況' : '現況')}</div>
              <ul className="mt-3 space-y-2 text-gray-700">
                {service.problem[lang].map((x, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                    <span>{tr(x)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Why it matters' : (lang === 'cn' ? '影響' : '影響')}</div>
              <div className="mt-3 space-y-3 text-gray-700 leading-7">
                {(service.whyItMatters?.[lang] ?? []).map((p, i) => (
                  <p key={i}>{tr(p)}</p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{lang === 'en' ? 'Trackable' : (lang === 'cn' ? '可追踪' : '可追蹤')}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{lang === 'en' ? 'Repeatable' : (lang === 'cn' ? '可复制' : '可複製')}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{lang === 'en' ? 'Deliverable' : (lang === 'cn' ? '可交付' : '可交付')}</span>
              </div>
            </div>
          </div>
        </Section>

        <Section title={lang === 'en' ? 'The solution' : (lang === 'cn' ? '我們的解法' : '我們的解法')}>
          <div className="space-y-3 text-gray-700 leading-7">
            {service.solution[lang].map((p, i) => (
              <p key={i}>{tr(p)}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Definition' : (lang === 'cn' ? '定义' : '定義')}</div>
              <div className="mt-3 space-y-3 text-gray-700 leading-7">
                {service.whatIs[lang].map((p, i) => (
                  <p key={i}>{tr(p)}</p>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'How manufacturers find overseas buyers' : (lang === 'cn' ? '製造業如何找到海外买家' : '製造業如何找到海外買家')}</div>
              <div className="mt-3 space-y-3 text-gray-700 leading-7">
                {service.howWorks[lang].map((p, i) => (
                  <p key={i}>{tr(p)}</p>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title={lang === 'en' ? 'Process' : (lang === 'cn' ? '開發流程' : '開發流程')}>
          <ol className="space-y-3 text-gray-700">
            {service.process[lang].map((x, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-900 font-bold">{i + 1}</span>
                <span className="leading-7">{tr(x)}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Workflow' : (lang === 'cn' ? '流程圖' : '流程圖')}</div>
              <div className="mt-3">
                <WorkflowViz steps={normalizedWorkflow} />
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Tools we use' : (lang === 'cn' ? '工具與数据来源' : '工具與資料來源')}</div>
              <ul className="mt-3 space-y-2 text-gray-700">
                {service.tools[lang].map((x, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                    <span>{tr(x)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-blue-50 p-4">
                <div className="text-sm font-semibold text-blue-900">{lang === 'en' ? 'Checklist' : (lang === 'cn' ? '檢查清单' : '檢查清單')}</div>
                <ul className="mt-2 space-y-1 text-sm text-blue-900/90">
                  {service.checklist[lang].map((x, i) => (
                    <li key={i} className="flex gap-2">
                      <span>•</span>
                      <span>{tr(x)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {service.marketMap?.[lang] && service.marketMap[lang].length > 0 && (
          <Section title={lang === 'en' ? 'Market map' : (lang === 'cn' ? '市场地图' : '市場地圖')}>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Common regions we work with' : (lang === 'cn' ? '我們常見的市场區域' : '我們常見的市場區域')}</div>
              {service.marketMapItems?.[lang] && service.marketMapItems[lang].length > 0 ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {service.marketMapItems[lang].map((x, i) => (
                    <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <div className="font-semibold text-gray-900">{tr(x.region)}</div>
                      <div className="mt-2 text-sm text-gray-600">{tr(x.note)}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {service.marketMap[lang].map((x, i) => (
                    <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <div className="font-semibold text-gray-900">{tr(x)}</div>
                      <div className="mt-2 text-sm text-gray-600">
                        {lang === 'en' ? 'Research, lists, outreach, and progression' : (lang === 'cn' ? '市场研究、名单、開發與推進' : '市場研究、名單、開發與推進')}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Section>
        )}

        <Section title={lang === 'en' ? 'Deliverables & results' : (lang === 'cn' ? '交付與成果' : '交付與成果')}>
          <div className="grid gap-6 md:grid-cols-3">
            {service.results[lang].map((x, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-semibold text-gray-900">{tr(x.label)}</div>
                <div className="mt-2 text-3xl font-bold text-blue-900">{x.value}</div>
                <div className="mt-2 text-gray-700 leading-7">{tr(x.desc)}</div>
              </div>
            ))}
          </div>
        </Section>

        {service.typicalResults?.[lang] && service.typicalResults[lang].length > 0 && (
          <Section title={lang === 'en' ? 'Typical lead generation results' : (lang === 'cn' ? '常見数据' : '常見資料')}>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Example metrics (not guaranteed)' : (lang === 'cn' ? '範例数据（非保证）' : '範例資料（非保證）')}</div>
              <div className="mt-4">
                <StatGrid items={service.typicalResults[lang].map((x) => ({ label: tr(x.label), value: x.value }))} />
              </div>
              <div className="mt-4 text-xs text-gray-500 leading-5">
                {isChinese
                  ? '資料會因市場、產品、資料可得性、客戶配合速度而異，以下僅為常見專案範圍示意，非承諾保證。'
                  : 'Metrics vary by market, product, data availability, and client response speed. The figures below illustrate typical project ranges, not guarantees.'}
              </div>
            </div>
          </Section>
        )}

        <Section title={lang === 'en' ? 'Lead generation funnel' : (lang === 'cn' ? '開發漏斗' : '開發漏斗')}>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Example conversion from market to meetings' : (lang === 'cn' ? '從市场到会议的轉換示意' : '從市場到會議的轉換示意')}</div>
            <div className="mt-4">
              <FunnelViz items={service.funnel[lang].map((x) => ({ label: tr(x.label), value: x.value }))} />
            </div>
            <div className="mt-6">
              <StatGrid items={service.funnel[lang].map((x) => ({ label: tr(x.label), value: x.value }))} />
            </div>
          </div>
        </Section>

        <Section title={lang === 'en' ? 'Industries we work with' : (lang === 'cn' ? '我們服务的行业' : '我們服務的產業')}>
          <div className="flex flex-wrap gap-2">
            {service.industries[lang].map((x, i) => (
              <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                {tr(x)}
              </span>
            ))}
          </div>
        </Section>

        {service.proofArtifacts?.[lang] && service.proofArtifacts[lang].length > 0 && (
          <Section title={lang === 'en' ? 'Delivery samples (anonymized)' : (lang === 'cn' ? '交付樣本（匿名化）' : '交付樣本（匿名化）')}>
            <div className="grid gap-6 lg:grid-cols-2">
              {service.proofArtifacts[lang].map((a, i) => (
                <ArtifactPreview key={i} title={tr(a.title)} caption={a.caption ? tr(a.caption) : undefined} lines={a.lines.map((line) => tr(line))} />
              ))}
            </div>
          </Section>
        )}

        <Section title={lang === 'en' ? 'Case study' : (lang === 'cn' ? '案例' : '案例')}>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="text-lg font-bold text-gray-900">{tr(service.caseStudy.title[lang])}</div>
            <div className="mt-2 text-gray-700 leading-7">{tr(service.caseStudy.desc[lang])}</div>

            {service.caseStudyEvidence?.[lang] && service.caseStudyEvidence[lang].length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {service.caseStudyEvidence[lang].map((x, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{tr(x.label)}</div>
                    <div className="mt-1 text-lg font-bold text-gray-900">{x.value}</div>
                  </div>
                ))}
              </div>
            )}

            {service.caseStudyBeforeAfter?.[lang] && (
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-lg border border-gray-200 p-5">
                  <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'Before' : (lang === 'cn' ? '合作前' : '合作前')}</div>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    {service.caseStudyBeforeAfter[lang].before.map((x, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                        <span className="leading-7">{tr(x)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-gray-200 p-5">
                  <div className="text-sm font-semibold text-gray-900">{lang === 'en' ? 'After' : (lang === 'cn' ? '合作後' : '合作後')}</div>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    {service.caseStudyBeforeAfter[lang].after.map((x, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                        <span className="leading-7">{tr(x)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {service.caseStudyStats?.[lang] && service.caseStudyStats[lang].length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {service.caseStudyStats[lang].map((s, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                    <div className="mt-1 text-sm text-gray-600">{tr(s.label)}</div>
                  </div>
                ))}
              </div>
            )}

            {service.caseStudySections && service.caseStudySections.length > 0 && (
              <div className="mt-6 space-y-6">
                {service.caseStudySections.map((sec, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 p-5">
                    <div className="text-sm font-semibold text-gray-900">{tr(sec.title[lang] ?? sec.title.zh ?? sec.title.en ?? '')}</div>
                    <div className="mt-2 space-y-3 text-gray-700 leading-7">
                      {(sec.content[lang] ?? sec.content.zh ?? sec.content.en ?? []).map((p, j) => (
                        <p key={j}>{tr(p)}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4">
              <Link href={service.caseStudy.link} className="text-blue-900 font-medium hover:underline">
                {lang === 'en' ? 'View case study →' : (lang === 'cn' ? '查看成功案例 →' : '查看成功案例 →')}
              </Link>
            </div>
          </div>
        </Section>

        {service.geoSections && service.geoSections.length > 0 && (
          <Section title={service.geoGroupTitle?.[lang] ?? (lang === 'en' ? 'How we work' : (lang === 'cn' ? '我們怎麼做' : '我們怎麼做'))}>
            <div className="space-y-6">
              {service.geoSections.map((g) => (
                <div key={g.id} className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="text-lg font-bold text-gray-900">{tr(g.title[lang] ?? g.title.zh ?? g.title.en ?? '')}</div>
                  {(g.note?.[lang] ?? g.note?.zh ?? g.note?.en) && <p className="mt-2 text-gray-600">{tr(g.note?.[lang] ?? g.note?.zh ?? g.note?.en ?? '')}</p>}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {(g.items[lang] ?? g.items.zh ?? g.items.en ?? []).map((x, i) => (
                      <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-800">
                        {tr(x)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {service.relatedLinks && service.relatedLinks.length > 0 && (
          <Section title={lang === 'en' ? 'Related links' : (lang === 'cn' ? '延伸閱讀' : '延伸閱讀')}>
            <div className="grid gap-4 md:grid-cols-2">
              {service.relatedLinks.map((l, i) => (
                <Link key={i} href={l.href} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">{tr(l.label[lang])}</div>
                  <div className="mt-2 text-sm text-gray-600">{lang === 'en' ? 'Open and continue →' : (lang === 'cn' ? '查看內容 →' : '查看內容 →')}</div>
                </Link>
              ))}
            </div>
          </Section>
        )}

        <Section title={lang === 'en' ? 'FAQ' : (lang === 'cn' ? '常見問題' : '常見問題')}>
          <div className="space-y-4">
            {service.faq.map((f, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="font-semibold text-gray-900">{tr(f.q[lang])}</div>
                <div className="mt-2 text-gray-700 leading-7">{tr(f.a[lang])}</div>
              </div>
            ))}
          </div>
        </Section>

        <section className="rounded-xl bg-slate-900 text-white p-8 mb-16">
          <h2 className="text-2xl font-bold">{tr(service.ctaTitle[lang])}</h2>
          <p className="mt-2 text-slate-200">{tr(service.ctaDesc[lang])}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.ctaButtons?.primary ? (
              <Link href={`/${lang}${service.ctaButtons.primary.href}`} className="inline-flex items-center justify-center rounded-sm bg-blue-500 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-400 transition">
                {tr(service.ctaButtons.primary.label[lang])}
              </Link>
            ) : (
              <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-sm bg-blue-500 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-400 transition">
                {lang === 'en' ? 'Get a Consultation' : (lang === 'cn' ? '立即咨询' : '立即諮詢')}
              </Link>
            )}
            {service.ctaButtons?.secondary ? (
              <Link href={`/${lang}${service.ctaButtons.secondary.href}`} className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-white font-medium text-sm hover:bg-white/10 transition">
                {tr(service.ctaButtons.secondary.label[lang])}
              </Link>
            ) : (
              <Link href={`/${lang}/export-market-analysis`} className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-white font-medium text-sm hover:bg-white/10 transition">
                {lang === 'en' ? 'Free Export Market Analysis' : (lang === 'cn' ? '免费出口市场分析' : '免費出口市場分析')}
              </Link>
            )}
            {service.ctaButtons?.tertiary && (
              <Link href={`/${lang}${service.ctaButtons.tertiary.href}`} className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-white font-medium text-sm hover:bg-white/10 transition">
                {tr(service.ctaButtons.tertiary.label[lang])}
              </Link>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
