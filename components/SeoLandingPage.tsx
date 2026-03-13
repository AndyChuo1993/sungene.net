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
  faq: { q: Record<Lang, string>; a: Record<Lang, string> }[]
}

export default function SeoLandingPage({ lang, page, basePath }: { lang: Lang; page: SeoSectionedPage; basePath: string }) {
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <nav className="text-sm text-gray-500 mb-6">
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

        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{page.h1[lang]}</h1>
          <p className="mt-4 text-lg text-gray-600">{page.description[lang]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/free-market-analysis`}
              className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition"
            >
              {lang === 'zh' ? '免費市場分析' : 'Free Market Analysis'}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-blue-900 font-medium text-sm hover:bg-blue-50 transition"
            >
              {lang === 'zh' ? '聯絡我們' : 'Contact'}
            </Link>
          </div>
        </header>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900">{lang === 'zh' ? '介紹' : 'Introduction'}</h2>
          {page.introduction[lang].map((p, i) => (
            <p key={i} className="text-gray-700 leading-7">
              {p}
            </p>
          ))}
        </section>

        <section className="grid gap-10 md:grid-cols-2 mb-12">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{lang === 'zh' ? '主要挑戰' : 'Industry Challenges'}</h2>
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
            <h2 className="text-xl font-bold text-gray-900 mb-3">{lang === 'zh' ? '出口機會' : 'Export Opportunities'}</h2>
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

        <section className="rounded-xl border border-gray-200 bg-white p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{lang === 'zh' ? 'Lead Generation 策略' : 'Lead Generation Strategy'}</h2>
          <ol className="space-y-3 text-gray-700">
            {page.strategy[lang].map((x, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-900 font-bold">{i + 1}</span>
                <span className="leading-7">{x}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl bg-slate-900 text-white p-8 mb-12">
          <h2 className="text-2xl font-bold">{page.ctaTitle[lang]}</h2>
          <p className="mt-2 text-slate-200">{page.ctaDesc[lang]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/free-market-analysis`}
              className="inline-flex items-center justify-center rounded-sm bg-blue-500 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-400 transition"
            >
              {lang === 'zh' ? '立即取得分析' : 'Get Free Analysis'}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-white font-medium text-sm hover:bg-white/10 transition"
            >
              {lang === 'zh' ? '直接聯絡' : 'Contact Us'}
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '常見問題' : 'FAQ'}</h2>
          <div className="space-y-4">
            {page.faq.map((f, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="font-semibold text-gray-900">{f.q[lang]}</div>
                <div className="mt-2 text-gray-700 leading-7">{f.a[lang]}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

