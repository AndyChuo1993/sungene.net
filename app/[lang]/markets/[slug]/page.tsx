import { Lang } from '@/lib/i18n'
import SeoLandingPage from '@/components/SeoLandingPage'
import { getSeoMarket, seoMarkets } from '@/data/seoMarkets'
import JsonLd from '@/components/JsonLd'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return seoMarkets.map(m => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
  const page = getSeoMarket(slug)
  if (!page) return { title: 'Not Found' }
  return {
    title: page.title[lang],
    description: page.description[lang],
    alternates: {
      canonical: `/${lang}/markets/${slug}`,
      languages: {
        zh: `/zh/markets/${slug}`,
        en: `/en/markets/${slug}`,
        'x-default': `/en/markets/${slug}`,
      },
    },
    openGraph: { title: page.title[lang], description: page.description[lang], type: 'article' },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
  const page = getSeoMarket(slug)
  if (!page) return null

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const url = `${baseUrl}/${lang}/markets/${slug}`
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'zh' ? '首頁' : 'Home', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: lang === 'zh' ? '市場' : 'Markets', item: `${baseUrl}/${lang}/markets` },
      { '@type': 'ListItem', position: 3, name: page.h1[lang], item: url },
    ],
  }
  return (
    <>
      <JsonLd data={breadcrumb} />
      <SeoLandingPage lang={lang} page={page} basePath="markets" />
    </>
  )
}
