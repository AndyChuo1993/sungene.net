import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { getArticles } from '@/data/articles'
import { getBlogPosts } from '@/data/blog'
import { seoIndustries } from '@/data/seoIndustries'
import { seoMarkets } from '@/data/seoMarkets'
import Newsletter from '@/components/Newsletter'
import { LayoutGrid, Globe, FileText } from 'lucide-react'

export async function generateMetadata({ params, searchParams }: { params: Promise<{ lang: Lang }>; searchParams: Promise<{ tab?: string }> }) {
  const { lang } = await params
  const resolved = await searchParams
  const tab = resolved.tab || 'articles'

  let title = lang === 'zh' ? '外銷資源中心' : 'Export Resource Center'
  if (tab === 'industries') title = lang === 'zh' ? '產業頁精選' : 'Industry Highlights'
  if (tab === 'markets') title = lang === 'zh' ? '市場頁精選' : 'Market Highlights'

  return {
    title: `${title} | SunGene`,
    description: lang === 'zh' ? '整合文章、產業頁、市場頁與可下載素材，方便快速找到外銷開發所需內容。' : 'A unified content hub for export articles, industry pages, market pages, and reusable resources.',
    openGraph: {
      title: `${title} | SunGene`,
      description: lang === 'zh' ? '整合文章、產業頁、市場頁與可下載素材，方便快速找到外銷開發所需內容。' : 'A unified content hub for export articles, industry pages, market pages, and reusable resources.',
      images: ['/og/og.png'],
    },
  }
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ lang: Lang }>
  searchParams: Promise<{ category?: string; tab?: string }>
}) {
  const { lang } = await params
  const resolvedSearch = await searchParams
  const tab = resolvedSearch.tab || 'articles'

  const resourceArticles = getArticles(lang)
  const articleItems = resourceArticles.map((a) => ({
    id: a.id,
    href: `/${lang}/resources/${a.id}`,
    title: a.title,
    category: a.category,
    date: a.date,
    excerpt: a.content[0] || '',
    image: a.image,
  }))

  const blogFallbackItems = getBlogPosts().slice(0, 8).map((post) => ({
    id: `blog-${post.slug}`,
    href: `/${lang}/blog/${post.slug}`,
    title: post.title[lang],
    category: lang === 'zh' ? '精選文章' : 'Featured Articles',
    date: post.date,
    excerpt: post.description[lang],
    image: post.heroImage,
  }))

  const allArticles = (articleItems.length > 0 ? articleItems : blogFallbackItems).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const categoryCounts = allArticles.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const categories = Object.keys(categoryCounts).map((cat) => ({ title: cat, count: categoryCounts[cat] }))
  const currentCategory = resolvedSearch.category
  const filteredArticles = currentCategory ? allArticles.filter((a) => a.category === currentCategory) : allArticles

  const tabs = [
    { id: 'articles', label: lang === 'zh' ? '精選內容' : 'Featured Content', icon: FileText },
    { id: 'industries', label: lang === 'zh' ? '產業頁' : 'Industries', icon: LayoutGrid },
    { id: 'markets', label: lang === 'zh' ? '市場頁' : 'Markets', icon: Globe },
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gray-900 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="text-center lg:text-left">
            <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-200">{lang === 'zh' ? '內容入口' : 'Content Hub'}</div>
            <h1 className="mt-5 text-4xl font-bold md:text-5xl">{lang === 'zh' ? '資源中心' : 'Resource Center'}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-300 lg:mx-0">
              {lang === 'zh'
                ? '把外銷開發常用的文章、產業頁、市場頁與可下載素材集中在這裡，讓閱讀、比較與下一步行動都更順。'
                : 'A unified hub for export articles, industry pages, market pages, and reusable resources—so discovery and next steps feel connected.'}
            </p>
          </div>
          <div className="hidden lg:block overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
            <Image src="/illustrations/resources-hub-panel.svg" alt={lang === 'zh' ? '資源中心主視覺' : 'Resource center hero'} width={1200} height={760} className="h-auto w-full" priority />
          </div>
        </div>
      </section>

      <div className="sticky top-20 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((t) => {
              const Icon = t.icon
              const isActive = tab === t.id
              return (
                <Link
                  key={t.id}
                  href={`/${lang}/resources?tab=${t.id}`}
                  className={`flex items-center gap-2 whitespace-nowrap border-b-2 py-4 text-sm font-medium transition ${
                    isActive ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <section className="min-h-[600px] bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          {tab === 'articles' && (
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="space-y-8 lg:col-span-3">
                <div className="sticky top-40 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 border-b border-gray-100 pb-2 font-bold text-gray-900">{lang === 'zh' ? '分類瀏覽' : 'Categories'}</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href={`/${lang}/resources?tab=articles`}
                        className={`flex items-center justify-between transition ${!currentCategory ? 'font-medium text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
                      >
                        <span>{lang === 'zh' ? '全部內容' : 'All Content'}</span>
                        <span className={`rounded-full px-2 py-1 text-xs ${!currentCategory ? 'bg-orange-50 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>{allArticles.length}</span>
                      </Link>
                    </li>
                    {categories.map((c) => (
                      <li key={c.title}>
                        <Link
                          href={`/${lang}/resources?tab=articles&category=${encodeURIComponent(c.title)}`}
                          className={`flex items-center justify-between transition ${currentCategory === c.title ? 'font-medium text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
                        >
                          <span>{c.title}</span>
                          <span className={`rounded-full px-2 py-1 text-xs ${currentCategory === c.title ? 'bg-orange-50 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>{c.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sticky top-[420px]">
                  <Newsletter lang={lang} />
                </div>
              </div>

              <div className="lg:col-span-9">
                <div className="mb-8 grid gap-6 rounded-3xl border border-orange-100 bg-orange-50/70 p-6 md:grid-cols-3">
                  {[
                    {
                      title: lang === 'zh' ? '文章先帶路' : 'Articles first',
                      desc: lang === 'zh' ? '如果下載素材還不多，就先用精選文章承接讀者。' : 'When downloadable assets are limited, featured articles keep the hub useful.',
                    },
                    {
                      title: lang === 'zh' ? '搭配產業 / 市場頁' : 'Pair with industries / markets',
                      desc: lang === 'zh' ? '把文章閱讀延伸到產業頁與市場頁，補足買家語境。' : 'Extend article reading into industry and market context.',
                    },
                    {
                      title: lang === 'zh' ? '最後回到行動' : 'End with action',
                      desc: lang === 'zh' ? '最終可銜接免費市場分析與聯絡表單。' : 'Guide readers back to analysis requests or contact forms.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                      <div className="text-base font-bold text-slate-900">{item.title}</div>
                      <div className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((post) => (
                      <Link href={post.href} key={post.id} className="group block h-full">
                        <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-md">
                          <div className="relative h-52 overflow-hidden rounded-t-2xl bg-slate-950">
                            {post.image ? (
                              <Image src={post.image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                            ) : (
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.35),_transparent_35%),linear-gradient(135deg,_#0f172a,_#9a3412_55%,_#0f172a)]" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                              {post.category}
                            </div>
                          </div>
                          <div className="flex flex-grow flex-col p-6">
                            <div className="mb-3 flex items-center gap-3 text-xs">
                              <span className="rounded-sm bg-orange-50 px-2 py-1 font-bold text-orange-600">{post.category}</span>
                              <span className="text-gray-400">{post.date}</span>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900 transition group-hover:text-orange-600">{post.title}</h3>
                            <p className="mb-4 line-clamp-3 flex-grow text-gray-600">{post.excerpt}</p>
                            <span className="text-sm font-bold text-orange-600">{lang === 'zh' ? '繼續閱讀' : 'Continue reading'} →</span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full py-12 text-center text-gray-500">{lang === 'zh' ? '此分類暫無內容' : 'No content found in this category'}</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {tab === 'industries' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {seoIndustries.map((ind) => (
                <Link href={`/${lang}/industries/${ind.slug}`} key={ind.slug} className="group block h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <LayoutGrid className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition group-hover:text-blue-600">
                      {ind.h1[lang].replace('外貿客戶開發', '').replace('Export Lead Generation for ', '')}
                    </h3>
                    <p className="mb-6 line-clamp-3 flex-grow text-gray-600">{ind.description[lang]}</p>
                    <div className="text-sm font-bold text-blue-600">{lang === 'zh' ? '查看產業頁' : 'View guide'} →</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {tab === 'markets' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {seoMarkets.map((mkt) => (
                <Link href={`/${lang}/markets/${mkt.slug}`} key={mkt.slug} className="group block h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                      <Globe className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition group-hover:text-green-600">
                      {mkt.h1[lang].replace('市場外貿客戶開發', '').replace('Market Export Lead Generation', '')}
                    </h3>
                    <p className="mb-6 line-clamp-3 flex-grow text-gray-600">{mkt.description[lang]}</p>
                    <div className="text-sm font-bold text-green-600">{lang === 'zh' ? '查看市場頁' : 'View page'} →</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
