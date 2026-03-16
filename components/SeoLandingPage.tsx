import Image from 'next/image'
import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { cnText } from '@/lib/cnText'

export type SeoSectionedPage = {
  slug: string
  title: Record<Lang, string>
  description: Record<Lang, string>
  h1: Record<Lang, string>
  introduction: Record<Lang, string[]>
  challenges: Record<Lang, string[]>
  opportunities: Record<Lang, string[]>
  strategy: Record<Lang, string[]>
  ctaTitle: Record<Lang, string>
  ctaDesc: Record<Lang, string>
  heroImage?: Record<Lang, string>
  faq: { q: Record<Lang, string>; a: Record<Lang, string> }[]
}

const industryHeroMap: Record<string, string> = {
  machinery: '/illustrations/industry-machinery.svg',
  electronics: '/illustrations/industry-electronics.svg',
  plastic: '/illustrations/industry-plastic.svg',
  chemical: '/illustrations/industry-chemical.svg',
  medical: '/illustrations/industry-medical.svg',
  automotive: '/illustrations/industry-automotive.svg',
  'industrial-equipment': '/illustrations/industry-industrial-equipment.svg',
}

export default function SeoLandingPage({ lang, page, basePath }: { lang: Lang; page: SeoSectionedPage; basePath: string }) {
  const heroImage = page.heroImage?.[lang] ?? industryHeroMap[page.slug] ?? '/illustrations/seo-landing-panel.svg'
  const isChinese = lang !== 'en'
  const tr = (value: string) => cnText(lang, value)

  return (
    <main className="pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href={`/${lang}`} className="hover:underline">
            {lang === 'en' ? 'Home' : (lang === 'cn' ? '首页' : '首頁')}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/${basePath}`} className="hover:underline">
            {lang === 'cn' ? (basePath === 'industries' ? '行业' : '市场') : isChinese ? (basePath === 'industries' ? '產業' : '市場') : basePath === 'industries' ? 'Industries' : 'Markets'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{tr(page.h1[lang])}</span>
        </nav>

        <header className="mb-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{tr(page.h1[lang])}</h1>
            <p className="mt-4 text-lg text-gray-600">{tr(page.description[lang])}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${lang}/export-market-analysis`}
                className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800"
              >
                {lang === 'en' ? 'Free Market Analysis' : (lang === 'cn' ? '免费出口市场分析' : '免費出口市場分析')}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-sm font-medium text-blue-900 transition hover:bg-blue-50"
              >
                {lang === 'en' ? 'Contact' : (lang === 'cn' ? '联系我们' : '聯絡我們')}
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white shadow-xl">
              <Image src={heroImage} alt={tr(page.h1[lang])} width={1200} height={720} className="h-auto w-full" priority />
            </div>
          </div>
        </header>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{lang === 'en' ? 'Introduction' : (lang === 'cn' ? '介紹' : '介紹')}</h2>
          {page.introduction[lang].map((p, i) => (
            <p key={i} className="leading-7 text-gray-700">
              {tr(p)}
            </p>
          ))}
        </section>

        <section className="mb-12 grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="mb-3 text-xl font-bold text-gray-900">{lang === 'en' ? 'Industry Challenges' : (lang === 'cn' ? '主要挑战' : '主要挑戰')}</h2>
            <ul className="space-y-2 text-gray-700">
              {page.challenges[lang].map((x, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                  <span>{tr(x)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="mb-3 text-xl font-bold text-gray-900">{lang === 'en' ? 'Export Opportunities' : (lang === 'cn' ? '出口机会' : '出口機會')}</h2>
            <ul className="space-y-2 text-gray-700">
              {page.opportunities[lang].map((x, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                  <span>{tr(x)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">{lang === 'en' ? 'Lead Generation Strategy' : (lang === 'cn' ? '外贸開發策略' : '外銷開發策略')}</h2>
          <ol className="space-y-3 text-gray-700">
            {page.strategy[lang].map((x, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-900">{i + 1}</span>
                <span className="leading-7">{tr(x)}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12 rounded-xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-bold">{tr(page.ctaTitle[lang])}</h2>
          <p className="mt-2 text-slate-200">{tr(page.ctaDesc[lang])}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/export-market-analysis`}
              className="inline-flex items-center justify-center rounded-sm bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              {lang === 'en' ? 'Get Free Analysis' : (lang === 'cn' ? '立即获取分析' : '立即取得分析')}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {lang === 'en' ? 'Contact Us' : (lang === 'cn' ? '直接联系' : '直接聯絡')}
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">{lang === 'en' ? 'FAQ' : (lang === 'cn' ? '常見問題' : '常見問題')}</h2>
          <div className="space-y-4">
            {page.faq.map((f, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="font-semibold text-gray-900">{tr(f.q[lang])}</div>
                <div className="mt-2 leading-7 text-gray-700">{tr(f.a[lang])}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
