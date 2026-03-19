import Image from 'next/image'
import Link from 'next/link'
import { Lang } from '@/lib/i18n'

export default function HeroSection({ lang }: { lang: Lang }) {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-32 text-center md:pb-32 md:pt-40 lg:text-left">
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute right-[-5%] top-[-10%] h-[500px] w-[500px] rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-gray-50 opacity-60 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="mx-auto max-w-5xl lg:mx-0">
            <div className="mb-6 inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
              <span className="text-sm font-bold uppercase tracking-wide text-blue-800">
                {lang === 'en'
                  ? 'For Companies Expanding Overseas'
                  : lang === 'cn'
                  ? '适合想拓展欧美市场、但缺乏稳定开发能力的外贸企业'
                  : '適合想拓展歐美市場、但缺乏穩定開發能力的外銷企業'}
              </span>
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-7xl">
              {lang === 'en'
                ? 'Find overseas buyers and channels that actually order'
                : lang === 'cn'
                ? '帮外贸企业找到「会下单」的海外客户与渠道'
                : '幫外銷企業找到「會下單」的海外客戶與通路'}
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl lg:mx-0">
              {lang === 'en'
                ? 'From prospecting and procurement matchmaking to inquiry triage and quoting. We build an export development system that continuously generates orders.'
                : lang === 'cn'
                ? '从客户开发、采购对接、询价筛选到报价推进，建立一套能持续产生订单的外贸开发系统。'
                : '從客戶開發、採購對接、詢價篩選到報價推進，建立一套能持續產生訂單的外銷開發系統。'}
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href={`/${lang}/export-market-analysis`}
                className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
              >
                {lang === 'en' ? 'Get Market Entry Advice' : lang === 'cn' ? '取得市场切入建议' : '取得市場切入建議'}
              </Link>
              <Link
                href={`/${lang}/services/export-lead-generation`}
                className="inline-flex items-center justify-center rounded-sm border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition duration-300 hover:border-blue-900 hover:text-blue-900"
              >
                {lang === 'en' ? 'See How We Find Clients' : lang === 'cn' ? '看看我们怎么帮你找到客户' : '看看我們怎麼幫你找到客戶'}
              </Link>
            </div>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <span className="rounded-full bg-gray-100 px-3 py-1">
                {lang === 'en' ? 'Overseas Buyer Development' : lang === 'cn' ? '海外买家开发' : '海外買家開發'}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1">
                {lang === 'en' ? 'Distributor Development' : lang === 'cn' ? '经销商开发' : '經銷商開發'}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1">
                {lang === 'en' ? 'Export Sales Outsourcing' : lang === 'cn' ? '外贸业务外包' : '外銷業務外包'}
              </span>
            </div>

            <div className="mt-14 grid gap-4 border-t border-gray-100 pt-8 text-left md:grid-cols-3">
              {[
                {
                  title: lang === 'en' ? 'Continuous Overseas Opportunities' : lang === 'cn' ? '持续拿到海外商机' : '持續拿到海外商機',
                  desc: lang === 'en'
                    ? 'Proactively develop overseas procurement and decision-makers instead of waiting for inquiries.'
                    : lang === 'cn'
                    ? '主动开发海外采购与决策人，而不是等待询盘，不靠运气也能成交。'
                    : '主動開發海外採購與決策人，而不是等待詢盤，不靠運氣也能成交。',
                },
                {
                  title: lang === 'en' ? 'No Need for a Full Team' : lang === 'cn' ? '不用养整个外贸团队' : '不用養整個外銷團隊',
                  desc: lang === 'en'
                    ? 'Activate an external team immediately to start market development and follow-up.'
                    : lang === 'cn'
                    ? '直接启动外部团队，开始市场开发与跟进，大幅降低人事成本。'
                    : '直接啟動外部團隊，開始市場開發與跟進，大幅降低人事成本。',
                },
                {
                  title: lang === 'en' ? 'Weekly Visible Progress' : lang === 'cn' ? '每周看得到实际进展' : '每週看得到實際進展',
                  desc: lang === 'en'
                    ? 'Everything from lists and replies to inquiries and next steps is fully transparent.'
                    : lang === 'cn'
                    ? '从名单、回复到询价与下一步全部透明，随时掌握开发节奏。'
                    : '從名單、回覆到詢價與下一步全部透明，隨時掌握開發節奏。',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <div className="text-base font-bold tracking-normal text-gray-900">{item.title}</div>
                  <div className="mt-2 text-sm font-normal normal-case tracking-normal text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[560px] lg:block">
            <div className="absolute inset-0 rounded-[2rem] bg-blue-100/70 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-4 shadow-2xl">
              <Image
                src="/illustrations/hero-export.svg"
                alt={lang === 'en' 
                  ? 'Export lead generation workflow illustration' 
                  : lang === 'cn' 
                  ? '海外买家开发流程示意图' 
                  : '海外買家開發流程示意圖'}
                width={1200}
                height={900}
                className="h-auto w-full rounded-[1.5rem]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
