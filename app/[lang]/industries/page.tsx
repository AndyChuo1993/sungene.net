import Image from 'next/image'
import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { seoIndustries } from '@/data/seoIndustries'
import { cnText } from '@/lib/cnText'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  return {
    title: `${lang === 'en' ? 'Industry Pages' : (lang === 'cn' ? '行业頁總覽' : '產業頁總覽')} | SunGene`,
    description:
      isChinese
        ? '依產業查看 SunGene 的外銷內容頁，快速找到適合你產品與買家語境的產業頁面。'
        : 'Browse industry-specific SunGene pages to find the right context for your product and buyer profile.',
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const tr = (value: string) => cnText(lang, value)

  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{lang === 'en' ? 'Industry Pages' : (lang === 'cn' ? '行业頁總覽' : '產業頁總覽')}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              {isChinese
                ? '這裡依產業整理常見的採購情境、風險與切入方式，方便快速找到更貼近你產品與買家的參考內容。'
                : 'These pages are organized by industry so buyers can quickly understand typical sourcing context, risks, and entry points.'}
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white shadow-xl">
            <Image src="/illustrations/industries-hub-hero.svg" alt={lang === 'en' ? 'Industry pages hero' : (lang === 'cn' ? '行业頁主視覺' : '產業頁主視覺')} width={1200} height={760} className="h-auto w-full" priority />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto mb-10 grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[
            {
              title: lang === 'en' ? 'Read by buyer context' : (lang === 'cn' ? '依买家场景閱讀' : '依買家情境閱讀'),
              desc: lang === 'en' ? 'Start from sourcing flow, onboarding conditions, and risks.' : (lang === 'cn' ? '從行业采购流程、導入條件與风险點切入。' : '從產業採購流程、導入條件與風險點切入。'),
            },
            {
              title: lang === 'en' ? 'Pair with market pages' : (lang === 'cn' ? '搭配市场頁閱讀' : '搭配市場頁閱讀'),
              desc: lang === 'en' ? 'Industry pages explain demand logic; market pages explain regional differences.' : (lang === 'cn' ? '行业頁看需求邏輯，市场頁看地區差異。' : '產業頁看需求邏輯，市場頁看地區差異。'),
            },
            {
              title: lang === 'en' ? 'Connect to service pages' : (lang === 'cn' ? '對應外贸開發內容' : '對應外銷開發內容'),
              desc: lang === 'en' ? 'Use these pages as bridges to services and market analysis.' : (lang === 'cn' ? '可直接回到服务頁與免费市场分析做下一步。' : '可直接回到服務頁與免費市場分析做下一步。'),
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-base font-bold text-gray-900">{item.title}</div>
              <div className="mt-2 text-sm leading-7 text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {seoIndustries.map((industry) => (
            <Link key={industry.slug} href={`/${lang}/industries/${industry.slug}`} className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
              <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                {lang === 'en' ? 'Industry Page' : (lang === 'cn' ? '行业頁' : '產業頁')}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-blue-700">
                {tr(industry.h1[lang].replace('外銷客戶開發', '').replace('Export Lead Generation for ', ''))}
              </h2>
              <p className="mt-3 line-clamp-4 text-gray-600">{tr(industry.description[lang])}</p>
              <div className="mt-6 text-sm font-bold text-blue-700">{lang === 'en' ? 'View page →' : (lang === 'cn' ? '查看行业頁 →' : '查看產業頁 →')}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
