import Link from 'next/link'
import { Lang } from '@/lib/i18n'

export default function ServicesPreview({ lang }: { lang: Lang }) {
  const isEn = lang === 'en'
  const isCn = lang === 'cn'
  const isZh = lang === 'zh' || (!isEn && !isCn) // fallback to zh if somehow not en/cn

  const services = [
    {
      id: 1,
      title: isEn ? 'Export Lead Generation' : isCn ? '外贸客户开发' : '外銷客戶開發',
      desc: isEn
        ? 'Identify and approach qualified overseas buyers for companies'
        : isCn
        ? '协助企业找到并接触合适的海外买家'
        : '協助企業找到並接觸合適的海外買家',
      items: isEn
        ? ['Buyer research and qualification', 'Structured outreach cadence', 'Qualified opportunity handoff']
        : isCn
        ? ['买家名单研究与验证', '开发节奏规划', '可跟进商机整理']
        : ['買家名單研究與驗證', '開發節奏規劃', '可跟進商機整理'],
      link: `/${lang}/services/export-lead-generation`,
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: isEn ? 'Distributor Development' : isCn ? '经销商开发' : '經銷商開發',
      desc: isEn
        ? 'Build and develop overseas distributor opportunities'
        : isCn
        ? '协助你建立海外经销伙伴开发名单与推进流程'
        : '協助你建立海外經銷夥伴開發名單與推進流程',
      items: isEn
        ? ['Market and channel mapping', 'Partner qualification', 'Early-stage business development support']
        : isCn
        ? ['市场与渠道盘点', '潜在伙伴筛选', '合作推进支持']
        : ['市場與通路盤點', '潛在夥伴篩選', '合作推進支援'],
      link: `/${lang}/services/distributor-development`,
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: isEn ? 'Export Sales Outsourcing' : isCn ? '外贸业务外包服务' : '外銷業務外包服務',
      desc: isEn
        ? 'External support for export sales development and follow-up'
        : isCn
        ? '以外部支持方式协助推进外贸开发与跟进'
        : '以外部支援方式協助推進外銷開發與跟進',
      items: isEn
        ? ['Managed outreach support', 'Reply handling and qualification', 'Reduced internal workload']
        : isCn
        ? ['前段开发支持', '回复与需求整理', '降低内部负担']
        : ['前段開發支援', '回覆與需求整理', '降低內部負擔'],
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
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {isEn ? 'Core Export Growth Services' : isCn ? '核心外贸增长服务' : '核心外銷增長服務'}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-500">
            {isEn
              ? 'From buyer development to distributor development and export sales support, built into a clearer growth path'
              : isCn
              ? '从海外买家开发、经销商开发到外贸执行支持，建立更清楚的增长路径'
              : '從海外買家開發、經銷商開發到外銷執行支援，建立更清楚的成長路徑'}
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
                {lang === 'en' ? 'View Service Details' : lang === 'cn' ? '查看服务内容' : '查看服務內容'} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
