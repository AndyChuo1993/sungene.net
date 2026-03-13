import { Lang } from '@/lib/i18n'
import SeoLandingPage from '@/components/SeoLandingPage'
import { getSeoIndustry, seoIndustries } from '@/data/seoIndustries'
import JsonLd from '@/components/JsonLd'

export async function generateStaticParams() {
  return seoIndustries.map(i => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: { lang: Lang; slug: string } }) {
  const { lang, slug } = params
  const page = getSeoIndustry(slug)
  if (!page) return { title: 'Not Found' }
  return {
    title: page.title[lang],
    description: page.description[lang],
    alternates: {
      canonical: `/${lang}/industries/${slug}`,
      languages: {
        zh: `/zh/industries/${slug}`,
        en: `/en/industries/${slug}`,
      },
    },
    openGraph: { title: page.title[lang], description: page.description[lang], type: 'article' },
  }
}

export default function Page({ params }: { params: { lang: Lang; slug: string } }) {
  const { lang, slug } = params
  const page = getSeoIndustry(slug)
  if (!page) return null

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const url = `${baseUrl}/${lang}/industries/${slug}`
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'zh' ? '首頁' : 'Home', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: lang === 'zh' ? '產業' : 'Industries', item: `${baseUrl}/${lang}/industries` },
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

