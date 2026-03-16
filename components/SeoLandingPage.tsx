import Image from 'next/image'
import Link from 'next/link'
import { Lang } from '@/lib/i18n'

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

  return (
    <main className="pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href={`/${lang}`} className="hover:underline">
            {lang === 'zh' ? '首頁' : 'Home'}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/${basePath}`} className="hover:underline">
            {lang === 'zh' ? (basePath === 'industries' ? '產業' : '市場') : basePath === 'industries' ? 'Industries' : 'Markets'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{page.h1[lang]}</span>
        </nav>

        <header className="mb-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{page.h1[lang]}</h1>
            <p className="mt-4 text-lg text-gray-600">{page.description[lang]}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${lang}/export-market-analysis`}
                className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800"
              >
                {lang === 'zh' ? '免費出口市場分析' : 'Free Market Analysis'}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-sm font-medium text-blue-900 transition hover:bg-blue-50"
              >
                {lang === 'zh' ? '聯絡我們' : 'Contact'}
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white shadow-xl">
              <Image src={heroImage} alt={page.h1[lang]} width={1200} height={720} className="h-auto w-full" priority />
            </div>
          </div>
        </header>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{lang === 'zh' ? '介紹' : 'Introduction'}</h2>
          {page.introduction[lang].map((p, i) => (
            <p key={i} className="leading-7 text-gray-700">
              {p}
            </p>
          ))}
        </section>

        <section className="mb-12 grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="mb-3 text-xl font-bold text-gray-900">{lang === 'zh' ? '主要挑戰' : 'Industry Challenges'}</h2>
            <ul className="space-y-2 text-gray-700">
              {page.challenges[lang].map((x, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="mb-3 text-xl font-bold text-gray-900">{lang === 'zh' ? '出口機會' : 'Export Opportunities'}</h2>
            <ul className="space-y-2 text-gray-700">
              {page.opportunities[lang].map((x, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">{lang === 'zh' ? '外銷開發策略' : 'Lead Generation Strategy'}</h2>
          <ol className="space-y-3 text-gray-700">
            {page.strategy[lang].map((x, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-900">{i + 1}</span>
                <span className="leading-7">{x}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12 rounded-xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-bold">{page.ctaTitle[lang]}</h2>
          <p className="mt-2 text-slate-200">{page.ctaDesc[lang]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/export-market-analysis`}
              className="inline-flex items-center justify-center rounded-sm bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              {lang === 'zh' ? '立即取得分析' : 'Get Free Analysis'}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {lang === 'zh' ? '直接聯絡' : 'Contact Us'}
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">{lang === 'zh' ? '常見問題' : 'FAQ'}</h2>
          <div className="space-y-4">
            {page.faq.map((f, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="font-semibold text-gray-900">{f.q[lang]}</div>
                <div className="mt-2 leading-7 text-gray-700">{f.a[lang]}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
