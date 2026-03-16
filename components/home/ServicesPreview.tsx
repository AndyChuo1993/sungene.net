import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function ServicesPreview({ lang }: { lang: Lang }) {
  const services = [
    {
      id: 1,
      title: lang === 'zh' ? '外銷客戶開發' : 'Export Lead Generation',
      desc:
        lang === 'zh'
          ? '為製造商建立海外買家名單並交付可跟進的詢價'
          : 'Verified buyer lists and qualified inquiries for manufacturers',
      items:
        lang === 'zh'
          ? ['買家名單整理與驗證', '電子郵件與商務社群開發節奏', '合格詢價交付']
          : ['Verified buyer list building', 'Email / LinkedIn cadence', 'Qualified inquiry handoff'],
      link: `/${lang}/services/export-lead-generation`,
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: lang === 'zh' ? '經銷商開發' : 'Distributor Development',
      desc:
        lang === 'zh'
          ? '協助你找到海外通路夥伴並推進合作條件'
          : 'Build a distributor pipeline with terms and market mapping',
      items:
        lang === 'zh'
          ? ['市場分層與通路地圖', '候選夥伴清單', '合作條件與會議推進']
          : ['Market tiers and channel mapping', 'Partner shortlist', 'Terms and meeting progression'],
      link: `/${lang}/services/distributor-development`,
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: lang === 'zh' ? '外銷業務外套件' : 'Export Sales Outsourcing',
      desc:
        lang === 'zh'
          ? '你專注報價與出貨，其餘開發與跟進交給我們'
          : 'You quote and ship. We run the outreach and follow-up system.',
      items:
        lang === 'zh'
          ? ['前段開發與跟進外套件', '回覆分類別與需求整理', '建立可複製的標準作業流程']
          : ['Managed outreach and follow-ups', 'Reply triage and qualification', 'Repeatable SOP'],
      link: `/${lang}/services/export-sales-outsourcing`,
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="border-y border-gray-100 bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{t(lang, 'service_title')}</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-500">
            {lang === 'zh'
              ? '從買家名單、主動開發到詢價交付，讓外銷增長變成可追蹤流程'
              : 'From buyer research to outreach and inquiry delivery, built as a trackable export workflow'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="group rounded-sm border border-gray-100 bg-white p-10 shadow-sm transition duration-300 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
                {s.icon}
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">{s.title}</h3>
              <p className="mb-6 text-sm font-bold uppercase tracking-wide text-blue-600">{s.desc}</p>
              <ul className="mb-8 space-y-3">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={s.link} className="inline-block border-b-2 border-transparent pb-0.5 font-bold text-gray-900 transition group-hover:border-blue-600">
                {lang === 'zh' ? '了解更多' : 'Learn More'} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
