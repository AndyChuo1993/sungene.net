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
                  ? 'For Manufacturers Expanding Overseas'
                  : lang === 'cn'
                  ? '為拓展海外市場的制造商而設'
                  : '為拓展海外市場的製造商而設'}
              </span>
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-7xl">
              {lang === 'en'
                ? 'B2B Export Lead Generation for Manufacturers'
                : lang === 'cn'
                ? '制造商 B2B 外贸客户开发'
                : '製造商 B2B 外銷客戶開發'}
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl lg:mx-0">
              {lang === 'en'
                ? 'SunGene helps manufacturers develop overseas buyers, build distributor channels, and support export sales execution through a more structured and trackable process.'
                : lang === 'cn'
                ? 'SunGene 协助制造商开发海外买家、建立经销渠道，并以更结构化、可追踪的方式支持外贸销售执行。'
                : 'SunGene 協助製造商開發海外買家、建立經銷通路，並以更結構化、可追蹤的方式支援外銷銷售執行。'}
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
              >
                {lang === 'en' ? 'Request a Consultation' : lang === 'cn' ? '预约咨询' : '預約諮詢'}
              </Link>
              <Link
                href={`/${lang}/services`}
                className="inline-flex items-center justify-center rounded-sm border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition duration-300 hover:border-blue-900 hover:text-blue-900"
              >
                {lang === 'en' ? 'View Services' : lang === 'cn' ? '查看服务' : '查看服務'}
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
                  title: lang === 'en' ? 'Clear export positioning' : lang === 'cn' ? '明确外贸定位' : '明確外銷定位',
                  desc: lang === 'en'
                    ? 'Built around buyer development, distributor development, and export growth support.'
                    : lang === 'cn'
                    ? '围绕买家开发、经销商开发与外贸增长支持建立。'
                    : '圍繞買家開發、經銷商開發與外銷增長支援建立。',
                },
                {
                  title: lang === 'en' ? 'Trackable workflow' : lang === 'cn' ? '可追踪流程' : '可追蹤流程',
                  desc: lang === 'en'
                    ? 'From target research to outreach and follow-up, the process is more structured.'
                    : lang === 'cn'
                    ? '从目标研究、开发到跟进，流程更结构化。'
                    : '從目標研究、開發到跟進，流程更結構化。',
                },
                {
                  title: lang === 'en' ? 'Built for manufacturers' : lang === 'cn' ? '为制造商设计' : '為製造商設計',
                  desc: lang === 'en'
                    ? 'Suitable for companies that want overseas growth without building a full export team first.'
                    : lang === 'cn'
                    ? '适合想拓展海外市场、但不想一开始就建立完整外贸团队的企业。'
                    : '適合想拓展海外市場、但不想一開始就建立完整外銷團隊的企業。',
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
