import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { seoIndustries } from '@/data/seoIndustries'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: lang === 'zh' ? '產業外貿開發｜SunGene' : 'Industries | SunGene',
    description:
      lang === 'zh'
        ? '依產業提供出口 lead generation 與海外買家開發策略：機械、電子、塑膠、化工、醫療、汽車與工業設備。'
        : 'Industry-specific export lead generation strategies for machinery, electronics, plastics, chemicals, medical, automotive and industrial equipment.',
    alternates: {
      canonical: `/${lang}/industries`,
      languages: { zh: '/zh/industries', en: '/en/industries' },
    },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-gray-900">{lang === 'zh' ? '產業解決方案' : 'Industries'}</h1>
        <p className="mt-4 text-gray-600 max-w-3xl">
          {lang === 'zh'
            ? '依產業建立內容架構與開發策略，讓買家更快理解你的產品定位並留下詢盤。'
            : 'Industry-specific content and outreach strategy that helps buyers understand your positioning and respond faster.'}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {seoIndustries.map((i) => (
            <Link key={i.slug} href={`/${lang}/industries/${i.slug}`} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
              <div className="text-xl font-bold text-gray-900">{i.h1[lang]}</div>
              <div className="mt-2 text-gray-600">{i.description[lang]}</div>
              <div className="mt-4 text-sm font-medium text-blue-900">{lang === 'zh' ? '查看策略 →' : 'View strategy →'}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

