import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import ServiceComparison from '@/components/ServiceComparison'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'service_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
    alternates: {
      canonical: `/${lang}/services`,
      languages: {
        zh: '/zh/services',
        en: '/en/services',
        'x-default': '/en/services',
      },
    },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  type Card = { href: string; title: string; desc: string; tags?: string[] }

  const core: Card[] = [
    {
      href: `/${lang}/services/export-lead-generation`,
      title: lang === 'zh' ? '外貿客戶開發（Export Lead Generation）' : 'Export Lead Generation',
      desc: lang === 'zh'
        ? '為製造業找海外買家：名單 + 節奏 + 詢盤交付。'
        : 'Find overseas buyers with lists, cadence, and qualified inquiry delivery.',
      tags: lang === 'zh' ? ['製造業', '海外買家', '詢盤'] : ['Manufacturers', 'Overseas buyers', 'Leads'],
    },
    {
      href: `/${lang}/services/distributor-development`,
      title: lang === 'zh' ? '經銷商開發（Distributor Development）' : 'Distributor Development',
      desc: lang === 'zh'
        ? '市場分層 + 通路策略 + 合作條件，建立可推進的通路 pipeline。'
        : 'Market tiers, channel strategy, and term frameworks to build a partner pipeline.',
      tags: lang === 'zh' ? ['通路', '代理', '市場落地'] : ['Channels', 'Partners', 'Market entry'],
    },
    {
      href: `/${lang}/services/export-sales-outsourcing`,
      title: lang === 'zh' ? '外貿業務外包（Export Sales Outsourcing）' : 'Export Sales Outsourcing',
      desc: lang === 'zh'
        ? '你只需報價與出貨；其餘外貿開發與跟進由我們完成。'
        : 'You quote and ship; we run outreach and follow-ups end-to-end.',
      tags: lang === 'zh' ? ['不擴編', 'SOP', '交付'] : ['No hiring', 'SOP', 'Delivery'],
    },
  ]

  const methods: Card[] = [
    {
      href: `/${lang}/buyer-database-building`,
      title: lang === 'zh' ? 'Buyer Database Building' : 'Buyer Database Building',
      desc: lang === 'zh' ? '建立可直接使用的海外買家名單與決策人資料。' : 'Build ready-to-use overseas buyer lists with decision-makers.',
    },
    {
      href: `/${lang}/cold-email-outreach`,
      title: lang === 'zh' ? 'Cold Email Outreach' : 'Cold Email Outreach',
      desc: lang === 'zh' ? '開發信框架 + 4–6 次跟進節奏，穩定獲取回覆。' : 'Framework + 4–6 follow-ups to generate replies consistently.',
    },
    {
      href: `/${lang}/linkedin-prospecting`,
      title: lang === 'zh' ? 'LinkedIn Prospecting' : 'LinkedIn Prospecting',
      desc: lang === 'zh' ? '多點觸達決策鏈，突破大廠封閉採購流程。' : 'Multi-touch decision chains to break into closed procurement.',
    },
    {
      href: `/${lang}/market-entry-strategy`,
      title: lang === 'zh' ? 'Market Entry Strategy' : 'Market Entry Strategy',
      desc: lang === 'zh' ? '市場分層、通路角色與切入假設，降低試錯成本。' : 'Tiers, roles, and hypotheses to reduce trial-and-error.',
    },
  ]

  const outcomes: Card[] = [
    {
      href: `/${lang}/overseas-buyer-lists`,
      title: lang === 'zh' ? 'Overseas Buyer Lists' : 'Overseas Buyer Lists',
      desc: lang === 'zh' ? '寄信名單 + 開信名單（Excel）交付。' : 'Sent list + opens list delivered as Excel.',
    },
    {
      href: `/${lang}/qualified-b2b-leads`,
      title: lang === 'zh' ? 'Qualified B2B Leads' : 'Qualified B2B Leads',
      desc: lang === 'zh' ? '將有效回覆整理成可交付詢盤。' : 'Replies triaged into sales-ready inquiries.',
    },
    {
      href: `/${lang}/distributor-network`,
      title: lang === 'zh' ? 'Distributor Network' : 'Distributor Network',
      desc: lang === 'zh' ? '建立可推進的海外經銷/代理網絡。' : 'Build a progressable distributor/agent network.',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{lang === 'zh' ? '外貿服務架構：核心 / 方法 / 成果' : 'Service Architecture: Core / Methods / Outcomes'}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto whitespace-pre-line">
            {lang === 'zh'
              ? '概念不重疊、對訪客更清楚：\n先選「你要的成果」，再看「方法」，最後選「最適合的核心服務」。'
              : 'No overlapping concepts: pick your outcome, review the methods, then choose the best-fit core service.'}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/export-market-analysis`} className="bg-white text-blue-900 font-bold py-3 px-8 rounded-sm hover:bg-gray-100 transition">
              {lang === 'zh' ? '取得出口市場分析' : 'Get Export Market Analysis'}
            </Link>
            <Link href={`/${lang}/case-studies`} className="bg-transparent border border-white/40 text-white font-bold py-3 px-8 rounded-sm hover:bg-white/10 transition">
              {lang === 'zh' ? '查看成功案例' : 'View Case Studies'}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {[{ title: lang === 'zh' ? '核心服務' : 'Core services', items: core }, { title: lang === 'zh' ? '方法' : 'Methods', items: methods }, { title: lang === 'zh' ? '成果' : 'Outcomes', items: outcomes }].map((group, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-semibold text-gray-900">{group.title}</div>
                <div className="mt-4 space-y-4">
                  {group.items.map((x, i) => (
                    <Link key={i} href={x.href} className="block rounded-lg border border-gray-200 bg-gray-50 p-4 hover:shadow-md transition">
                      <div className="font-bold text-gray-900">{x.title}</div>
                      <div className="mt-1 text-sm text-gray-600 leading-6">{x.desc}</div>
                      {x.tags && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {x.tags.map((t, j) => (
                            <span key={j} className="rounded-full bg-white px-3 py-1 text-xs text-gray-700 border border-gray-200">{t}</span>
                          ))}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900">{lang === 'zh' ? '三個服務，不重疊' : 'Three services, no overlap'}</h2>
              <p className="mt-4 text-gray-600 leading-7">
                {lang === 'zh'
                  ? '我們把常見混淆（名單、開發、外包）拆成三個可獨立排名的服務頁，讓訪客快速自我篩選，Google 也能清楚理解每頁主題。'
                  : 'We split list building, channel development, and managed sales ops into three pages so users self-select fast and search engines understand each topic.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={core[0].href} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition">
                  {lang === 'zh' ? '看外貿客戶開發' : 'View Export Lead Gen'}
                </Link>
                <Link href={core[1].href} className="inline-flex items-center justify-center rounded-sm border border-gray-200 bg-white px-5 py-2.5 text-gray-900 font-medium text-sm hover:bg-gray-50 transition">
                  {lang === 'zh' ? '看經銷商開發' : 'View Distributor Dev'}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ServiceComparison lang={lang} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{lang === 'zh' ? '從「成果」開始選服務' : 'Start with outcomes'}</h2>
              <p className="mt-4 text-gray-600 leading-7">
                {lang === 'zh'
                  ? '如果你要的是「名單」，先看 Overseas Buyer Lists；如果你要的是「詢盤」，看 Qualified B2B Leads；如果你要的是「通路」，看 Distributor Network。'
                  : 'If you need lists, start with Overseas Buyer Lists. If you need inquiries, start with Qualified B2B Leads. If you need channels, start with Distributor Network.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/${lang}/resources`} className="inline-flex items-center justify-center rounded-sm bg-white border border-gray-200 px-5 py-2.5 text-gray-900 font-medium text-sm hover:bg-gray-50 transition">
                  {lang === 'zh' ? '外貿資源（指南與清單）' : 'Export Resources (Guides)'}
                </Link>
                <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition">
                  {lang === 'zh' ? '描述你的目標，我們給建議' : 'Tell us your goal'}
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'zh' ? '你可能在找' : 'You may be searching for'}</div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {[
                  'how to find overseas buyers',
                  'find international buyers',
                  'how to find distributors',
                  'b2b export marketing',
                  'how to export products',
                ].map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href={`/${lang}/resources/blog/how-to-find-overseas-buyers`} className="text-blue-900 font-medium hover:underline">
                  {lang === 'zh' ? '先看指南文章 →' : 'Read the guide →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{lang === 'zh' ? '先拿一份出口市場分析，再決定怎麼做' : 'Get a market analysis first, then decide your plan'}</h2>
          <p className="text-slate-200 max-w-2xl mx-auto mb-10">
            {lang === 'zh'
              ? '提交產品與目標市場，我們回覆市場切入、買家角色與可行的 lead generation 路徑。'
              : 'Submit your product and markets. We’ll reply with entry approach, buyer roles, and a feasible lead-gen path.'}
          </p>
          <Link href={`/${lang}/free-market-analysis`} className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-sm hover:bg-gray-100 transition duration-300 shadow-lg text-lg">
            {t(lang, 'cta_analysis')}
          </Link>
        </div>
      </section>
    </main>
  )
}
