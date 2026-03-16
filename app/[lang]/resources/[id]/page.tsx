import { Lang } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { getArticle } from '@/data/articles'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang; id: string }> }) {
  const { lang, id } = await params
  const article = getArticle(lang, id)
  if (!article) return { title: 'Not Found' }

  return {
    title: `${article.title} | SunGene`,
    description: article.content[0]?.slice(0, 150) || '',
    alternates: { canonical: `/${lang}/resources/${id}` },
    openGraph: {
      title: `${article.title} | SunGene`,
      description: article.content[0]?.slice(0, 150) || '',
      type: 'article',
      publishedTime: article.date,
      images: article.image ? [article.image] : ['/og/og.png'],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang; id: string }> }) {
  const { lang, id } = await params
  const article = getArticle(lang, id)

  if (!article) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    datePublished: article.date,
    author: { '@type': 'Organization', name: 'SunGene' },
    publisher: {
      '@type': 'Organization',
      name: 'SunGene',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo/sungene.png`,
      },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="border-b border-gray-100 bg-gray-50 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-800">
              {article.category}
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">{article.title}</h1>
            <div className="font-medium text-gray-500">{article.date}</div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-xl">
            <Image src={article.image || '/illustrations/resource-detail-panel.svg'} alt={article.title} width={1200} height={720} className="h-auto w-full" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm">
            <Image src="/illustrations/resource-detail-panel.svg" alt={lang === 'zh' ? '資源詳頁示意圖' : 'Resource detail illustration'} width={1200} height={720} className="h-auto w-full" />
          </div>

          <div className="prose prose-lg prose-orange mx-auto text-gray-700">
            {article.content.map((p, idx) => (
              <p key={idx} className="mb-6 leading-relaxed">
                {p}
              </p>
            ))}

            {article.sections &&
              article.sections.map((section, idx) => (
                <div key={idx} className="mt-12">
                  <h2 className="mb-6 border-l-4 border-orange-500 pl-4 text-2xl font-bold text-gray-900">{section.heading}</h2>
                  <div className="space-y-4">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-16 rounded-2xl border border-orange-100 bg-orange-50 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-orange-900">{lang === 'zh' ? '想把這個主旨用在你的市場？' : 'Want to apply this to your market?'}</h3>
            <p className="mx-auto mb-8 max-w-xl text-orange-800">
              {lang === 'zh'
                ? '如果你想把這份內容延伸到自己的產品、產業與目標市場，可以直接申請免費市場分析。'
                : 'If you want to adapt this content to your own product, industry, and target market, start with a free market analysis.'}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={`/${lang}/export-market-analysis`} className="inline-block rounded-sm bg-orange-600 px-8 py-3 font-bold text-white transition duration-300 hover:bg-orange-500">
                {lang === 'zh' ? '免費出口市場分析' : 'Free Export Market Analysis'}
              </Link>
              <Link href={`/${lang}/resources`} className="inline-block rounded-sm border border-orange-300 px-8 py-3 font-bold text-orange-700 transition duration-300 hover:bg-white">
                {lang === 'zh' ? '返回資源中心' : 'Back to Resources'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
