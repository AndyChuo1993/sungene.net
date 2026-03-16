import { Lang } from '@/lib/i18n'
import SeoLandingPage from '@/components/SeoLandingPage'
import { getSeoIndustry, seoIndustries } from '@/data/seoIndustries'
import JsonLd from '@/components/JsonLd'
import { notFound } from 'next/navigation'
import { cnText } from '@/lib/cnText'

export async function generateStaticParams() {
  const langs = ['en', 'zh', 'cn']
  return seoIndustries.flatMap((i) => langs.map((lang) => ({ lang, slug: i.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
  const page = getSeoIndustry(slug)
  if (!page) return { title: 'Not Found' }
  return {
    title: cnText(lang, page.title[lang]),
    description: cnText(lang, page.description[lang]),
    alternates: {
      canonical: `/${lang}/industries/${slug}`,
      languages: {
        cn: `/zh/industries/${slug}`,
        zh: `/zh/industries/${slug}`,
        en: `/en/industries/${slug}`,
        'x-default': `/en/industries/${slug}`,
      },
    },
    openGraph: { title: cnText(lang, page.title[lang]), description: cnText(lang, page.description[lang]), type: 'article' },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
  const page = getSeoIndustry(slug)
  if (!page) return null

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const url = `${baseUrl}/${lang}/industries/${slug}`
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Home' : (lang === 'cn' ? '首页' : '首頁'), item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: lang === 'en' ? 'Industries' : (lang === 'cn' ? '行业' : '產業'), item: `${baseUrl}/${lang}/industries` },
      { '@type': 'ListItem', position: 3, name: page.h1[lang], item: url },
    ],
  }
  return (
    <>
      <JsonLd data={breadcrumb} />
      <SeoLandingPage lang={lang} page={page} basePath="industries" />
    </>
  )
}
