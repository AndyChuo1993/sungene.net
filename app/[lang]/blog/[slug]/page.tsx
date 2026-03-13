import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { getBlogPost, getBlogPosts } from '@/data/blog'
import JsonLd from '@/components/JsonLd'

function slugifyAnchor(s: string) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u4e00-\u9fa5\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export async function generateStaticParams() {
  return getBlogPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { lang: Lang; slug: string } }) {
  const { lang, slug } = params
  const post = getBlogPost(slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.title[lang]} | SunGene`,
    description: post.description[lang],
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: {
        zh: `/zh/blog/${slug}`,
        en: `/en/blog/${slug}`,
      },
    },
    openGraph: { title: post.title[lang], description: post.description[lang], type: 'article' },
  }
}

export default function Page({ params }: { params: { lang: Lang; slug: string } }) {
  const { lang, slug } = params
  const post = getBlogPost(slug)
  if (!post) return null

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const url = `${baseUrl}/${lang}/blog/${slug}`
  const anchors = post.sections.map(s => ({ id: s.id, label: s.heading[lang], anchor: slugifyAnchor(s.heading[lang]) }))
  const related = getBlogPosts().filter(p => p.slug !== post.slug).slice(0, 2)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title[lang],
    description: post.description[lang],
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'SunGene Co., LTD.' },
    publisher: { '@type': 'Organization', name: 'SunGene Co., LTD.' },
    image: `${baseUrl}${post.heroImage}`,
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(f => ({
      '@type': 'Question',
      name: f.q[lang],
      acceptedAnswer: { '@type': 'Answer', text: f.a[lang] },
    })),
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'zh' ? '首頁' : 'Home', item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: lang === 'zh' ? '部落格' : 'Blog', item: `${baseUrl}/${lang}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title[lang], item: url },
    ],
  }

  const serviceHref = `/${lang}${post.internalLinks.servicePath}`
  const caseHref = `/${lang}${post.internalLinks.caseStudyPath}`
  const magnetHref = `/${lang}${post.internalLinks.leadMagnetPath}`

  return (
    <main className="pt-28">
      <JsonLd data={[breadcrumb, articleSchema, faqSchema]} />

      <div className="mx-auto max-w-6xl px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href={`/${lang}`} className="hover:underline">
            {lang === 'zh' ? '首頁' : 'Home'}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/blog`} className="hover:underline">
            {lang === 'zh' ? '部落格' : 'Blog'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.title[lang]}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article>
            <header>
              <div className="text-sm text-gray-500">{new Date(post.date).toISOString().slice(0, 10)}</div>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">{post.title[lang]}</h1>
              <p className="mt-4 text-lg text-gray-600">{post.description[lang]}</p>
            </header>

            <section className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '目錄' : 'Table of Contents'}</div>
              <ol className="mt-3 space-y-2 text-sm">
                {anchors.map(a => (
                  <li key={a.id}>
                    <a href={`#${a.anchor}`} className="text-blue-900 hover:underline">
                      {a.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-10 space-y-12">
              {post.sections.map(s => {
                const anchor = slugifyAnchor(s.heading[lang])
                return (
                  <section key={s.id} id={anchor} className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-gray-900">{s.heading[lang]}</h2>
                    <div className="mt-4 space-y-4 text-gray-700 leading-7">
                      {s.content[lang].map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>

            <section className="mt-12 rounded-xl bg-slate-900 text-white p-8">
              <h2 className="text-2xl font-bold">{lang === 'zh' ? '想把這套方法落地？' : 'Want to implement this system?'}</h2>
              <p className="mt-2 text-slate-200">
                {lang === 'zh'
                  ? '從服務頁、文章群集到資源磁鐵與內部連結，我們可以協助你建立可持續的 inbound 成長系統。'
                  : 'From service pages and clusters to lead magnets and internal linking, we can help you build sustainable inbound growth.'}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={serviceHref} className="inline-flex items-center justify-center rounded-sm bg-blue-500 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-400 transition">
                  {lang === 'zh' ? '查看服務' : 'View Service'}
                </Link>
                <Link href={magnetHref} className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-white font-medium text-sm hover:bg-white/10 transition">
                  {lang === 'zh' ? '免費資源/分析' : 'Free Resource'}
                </Link>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">{lang === 'zh' ? '常見問題' : 'FAQ'}</h2>
              <div className="mt-6 space-y-4">
                {post.faq.map((f, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                    <div className="font-semibold text-gray-900">{f.q[lang]}</div>
                    <div className="mt-2 text-gray-700 leading-7">{f.a[lang]}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 mb-16">
              <h2 className="text-2xl font-bold text-gray-900">{lang === 'zh' ? '相關內容' : 'Related Content'}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {related.map(r => (
                  <Link key={r.slug} href={`/${lang}/blog/${r.slug}`} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
                    <div className="text-sm text-gray-500">{new Date(r.date).toISOString().slice(0, 10)}</div>
                    <div className="mt-2 font-bold text-gray-900">{r.title[lang]}</div>
                    <div className="mt-2 text-gray-600">{r.description[lang]}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={serviceHref} className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-blue-900 font-medium text-sm hover:bg-blue-50 transition">
                  {lang === 'zh' ? 'Export Lead Generation 服務' : 'Export Lead Generation Service'}
                </Link>
                <Link href={caseHref} className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-blue-900 font-medium text-sm hover:bg-blue-50 transition">
                  {lang === 'zh' ? '成功案例' : 'Case Study'}
                </Link>
                <Link href={magnetHref} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition">
                  {lang === 'zh' ? '免費出口市場分析' : 'Free Market Analysis'}
                </Link>
              </div>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '快速入口' : 'Quick Links'}</div>
                <div className="mt-4 space-y-2 text-sm">
                  <Link href={serviceHref} className="block text-blue-900 hover:underline">
                    {lang === 'zh' ? '服務：Export Lead Generation' : 'Service: Export Lead Generation'}
                  </Link>
                  <Link href={caseHref} className="block text-blue-900 hover:underline">
                    {lang === 'zh' ? '成功案例' : 'Case Studies'}
                  </Link>
                  <Link href={magnetHref} className="block text-blue-900 hover:underline">
                    {lang === 'zh' ? '免費出口市場分析' : 'Free Market Analysis'}
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '本頁目錄' : 'On this page'}</div>
                <ol className="mt-4 space-y-2 text-sm">
                  {anchors.map(a => (
                    <li key={a.id}>
                      <a href={`#${a.anchor}`} className="text-blue-900 hover:underline">
                        {a.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

