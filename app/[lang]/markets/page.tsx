import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { seoMarkets } from '@/data/seoMarkets'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: lang === 'zh' ? '市場外貿開發｜SunGene' : 'Markets | SunGene',
    description:
      lang === 'zh'
        ? '依市場提供出口 lead generation 與海外買家開發策略：美國、德國、日本、中東、東南亞與歐洲。'
        : 'Market-specific export lead generation strategies for the US, Germany, Japan, Middle East, Southeast Asia, and Europe.',
    alternates: {
      canonical: `/${lang}/markets`,
      languages: { zh: '/zh/markets', en: '/en/markets' },
    },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-gray-900">{lang === 'zh' ? '市場策略' : 'Markets'}</h1>
        <p className="mt-4 text-gray-600 max-w-3xl">
          {lang === 'zh'
            ? '不同市場的買家關心點與通路結構不同。用正確的內容與開發節奏，讓詢盤更穩定。'
            : 'Buyer priorities and channel structures differ by market. Use the right content and cadence to stabilize inbound inquiries.'}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {seoMarkets.map((m) => (
            <Link key={m.slug} href={`/${lang}/markets/${m.slug}`} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
              <div className="text-xl font-bold text-gray-900">{m.h1[lang]}</div>
              <div className="mt-2 text-gray-600">{m.description[lang]}</div>
              <div className="mt-4 text-sm font-medium text-blue-900">{lang === 'zh' ? '查看策略 →' : 'View strategy →'}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

