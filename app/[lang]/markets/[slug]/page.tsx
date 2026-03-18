import { Lang } from '@/lib/i18n'
import SeoLandingPage from '@/components/SeoLandingPage'
import { getSeoMarket, seoMarkets } from '@/data/seoMarkets'
import JsonLd from '@/components/JsonLd'
import { notFound } from 'next/navigation'
import { cnText } from '@/lib/cnText'

export async function generateStaticParams() {
  const langs = ['en', 'zh', 'cn']
  return seoMarkets.flatMap((m) => langs.map((lang) => ({ lang, slug: m.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
  const baseUrl = lang === 'zh' ? 'https://sungenelite.com' : 'https://sungene.net'
  const page = getSeoMarket(slug)
  if (!page) return { title: 'Not Found' }
  return {
    title: cnText(lang, page.title[lang]),
    description: cnText(lang, page.description[lang]),
    alternates: {
      canonical: `${baseUrl}/${lang}/markets/${slug}`,
      languages: {
        'zh-CN': `https://sungene.net/cn/markets/${slug}`,
        'zh-TW': `https://sungenelite.com/zh/markets/${slug}`,
        'en': `https://sungene.net/en/markets/${slug}`,
        'x-default': `https://sungene.net/en/markets/${slug}`,
      },
    },
    openGraph: { 
      title: cnText(lang, page.title[lang]), 
      description: cnText(lang, page.description[lang]), 
      url: `${baseUrl}/${lang}/markets/${slug}`,
      type: 'article' 
    },
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
      { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Home' : (lang === 'cn' ? '首页' : '首頁'), item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: lang === 'en' ? 'Markets' : (lang === 'cn' ? '市场' : '市場'), item: `${baseUrl}/${lang}/markets` },
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
