import Image from 'next/image'
import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

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
                {lang === 'en' ? 'Designed for Enterprises' : (lang === 'cn' ? '專為外贸企业建立' : '專為外銷企業建立')}
              </span>
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-7xl">
              {t(lang, 'hero_title')}
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl lg:mx-0">
              {t(lang, 'hero_description')}
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href={`/${lang}/export-market-analysis`}
                className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
              >
                {t(lang, 'cta_analysis')}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center rounded-sm border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition duration-300 hover:border-blue-900 hover:text-blue-900"
              >
                {t(lang, 'cta_consult')}
              </Link>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <span className="rounded-full bg-gray-100 px-3 py-1">{lang === 'en' ? 'Built for manufacturers and export teams' : (lang === 'cn' ? '適合外贸企业與業務团队' : '適合外銷企業與業務團隊')}</span>
              <span className="rounded-full bg-gray-100 px-3 py-1">{lang === 'en' ? 'Lists, Outreach, Leads' : (lang === 'cn' ? '买家名单、開發信、詢問交付' : '買家名單、開發信、詢問交付')}</span>
              <span className="rounded-full bg-gray-100 px-3 py-1">{lang === 'en' ? 'Trackable process' : (lang === 'cn' ? '流程可追踪' : '流程可追蹤')}</span>
            </div>

            <div className="mt-14 grid gap-4 border-t border-gray-100 pt-8 text-left md:grid-cols-3">
              {[
                {
                  title: lang === 'en' ? 'Serving 50+ enterprises' : (lang === 'cn' ? '已服务超過 50 家企业' : '已服務超過 50 家企業'),
                  desc: lang === 'en' ? 'Built around the real needs of export enterprises and teams.' : (lang === 'cn' ? '聚焦外贸企业與業務团队的實際開發需求。' : '聚焦外銷企業與業務團隊的實際開發需求。'),
                },
                {
                  title: lang === 'en' ? 'Focused on export growth' : (lang === 'cn' ? '专注企业外贸開發' : '專注企業外銷開發'),
                  desc: lang === 'en' ? 'Trackable workflow from target lists to outreach and handoff.' : (lang === 'cn' ? '從买家名单、開發節奏到詢問交付，流程可追踪。' : '從買家名單、開發節奏到詢問交付，流程可追蹤。'),
                },
                {
                  title: lang === 'en' ? 'Global market execution' : (lang === 'cn' ? '全球市场落地' : '全球市場落地'),
                  desc: lang === 'en' ? 'Support for the US, Europe, Japan, and Southeast Asia.' : (lang === 'cn' ? '協助企业切入美国、歐洲、日本與东南亚等市场。' : '協助企業切入美國、歐洲、日本與東南亞等市場。'),
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
                alt={lang === 'en' ? 'Export lead generation workflow illustration' : (lang === 'cn' ? '海外买家開發流程示意圖' : '海外買家開發流程示意圖')}
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
