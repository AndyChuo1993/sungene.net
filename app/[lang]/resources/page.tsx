import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { getArticles } from '@/data/articles'
import { seoIndustries } from '@/data/seoIndustries'
import { seoMarkets } from '@/data/seoMarkets'
import Newsletter from '@/components/Newsletter'
import { LayoutGrid, Globe, FileText } from 'lucide-react'

export async function generateMetadata({ params, searchParams }: { params: Promise<{ lang: Lang }>; searchParams: { tab?: string } }) {
  const { lang } = await params
  const tab = searchParams.tab || 'articles'
  
  let title = lang === 'zh' ? '外貿資源' : 'Export Resources'
  if (tab === 'industries') title = lang === 'zh' ? '產業應用頁' : 'Industry Pages'
  if (tab === 'markets') title = lang === 'zh' ? '市場頁面' : 'Market Pages'

  return {
    title: `${title} | SunGene`,
    description: t(lang, 'meta_home_desc'),
    openGraph: {
      title: `${title} | SunGene`,
      description: t(lang, 'meta_home_desc'),
      images: ['/og/og.png'],
    },
  }
}

export default async function Page({
  params,
  searchParams
}: {
  params: Promise<{ lang: Lang }>
  searchParams: { category?: string; tab?: string }
}) {
  const { lang } = await params
  const tab = searchParams.tab || 'articles'
  
  // Data for Resources only (avoid overlap with blog)
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
  const allArticles = articleItems.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Filter Articles
  const categoryCounts = allArticles.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  const categories = Object.keys(categoryCounts).map(cat => ({
    title: cat,
    count: categoryCounts[cat]
  }))
  const currentCategory = searchParams.category
  const filteredArticles = currentCategory
    ? allArticles.filter(a => a.category === currentCategory)
    : allArticles

  // Tabs Configuration
  const tabs = [
    { id: 'articles', label: lang === 'zh' ? '下載資源' : 'Resources', icon: FileText },
    { id: 'industries', label: lang === 'zh' ? '產業頁' : 'Industries', icon: LayoutGrid },
    { id: 'markets', label: lang === 'zh' ? '市場頁' : 'Markets', icon: Globe },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 text-center relative z-10 lg:grid-cols-[0.95fr_1.05fr] lg:text-left">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{lang === 'zh' ? '資源中心' : 'Resource Center'}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0">
              {lang === 'zh' ? '把外貿開發常用的指南、檢查表與市場素材集中在這裡，方便快速找到可直接參考與使用的內容。' : 'This area centralizes reusable export guides, checklists, and market assets. The blog focuses on education and commentary, while industry and market pages capture specific search intent.'}
            </p>
          </div>
          <div className="hidden lg:block">
            <Image src="/illustrations/resource-library.svg" alt={lang === 'zh' ? '資源中心示意圖' : 'Resource center illustration'} width={1200} height={720} className="h-auto w-full rounded-[1.75rem] border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 bg-white sticky top-20 z-40 shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((t) => {
              const Icon = t.icon
              const isActive = tab === t.id
              return (
                <Link
                  key={t.id}
                  href={`/${lang}/resources?tab=${t.id}`}
                  className={`flex items-center gap-2 py-4 border-b-2 text-sm font-medium transition whitespace-nowrap ${
                    isActive
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {t.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 min-h-[600px]">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* ARTICLES TAB */}
          {tab === 'articles' && (
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-3 space-y-8">
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 sticky top-40">
                  <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{lang === 'zh' ? '分類瀏覽' : 'Categories'}</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        href={`/${lang}/resources?tab=articles`}
                        className={`flex justify-between items-center cursor-pointer transition ${!currentCategory ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`}
                      >
                        <span>{lang === 'zh' ? '全部文章' : 'All Articles'}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${!currentCategory ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>{allArticles.length}</span>
                      </Link>
                    </li>
                    {categories.map((c, i) => (
                      <li key={i}>
                        <Link 
                          href={`/${lang}/resources?tab=articles&category=${encodeURIComponent(c.title)}`}
                          className={`flex justify-between items-center cursor-pointer transition ${currentCategory === c.title ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'}`}
                        >
                          <span>{c.title}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${currentCategory === c.title ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>{c.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sticky top-[400px]">
                  <Newsletter lang={lang} />
                </div>
              </div>

              {/* Articles Grid */}
              <div className="lg:col-span-9">
                <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50 p-6 text-blue-950">
                  <div className="text-sm font-bold uppercase tracking-wide text-blue-700">{lang === 'zh' ? '本區定位' : 'What belongs here'}</div>
                  <p className="mt-3 leading-7">
                    {lang === 'zh'
                      ? '資源中心整理的是可直接參考與應用的內容；若目前下載素材較少，會先整合精選文章，方便你先找到可讀、可用的內容。'
                      : 'The resource center is for reusable assets. When downloadable materials are limited, featured articles are shown here first so visitors still have practical content to explore.'}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((post) => (
                      <Link href={post.href} key={post.id} className="block group h-full">
                        <div className="bg-white border border-gray-200 rounded-sm hover:shadow-md transition duration-300 flex flex-col h-full">
                          <div className="relative h-48 overflow-hidden bg-slate-950">
                            {post.image ? (
                              <Image src={post.image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                            ) : (
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.38),_transparent_35%),linear-gradient(135deg,_#0f172a,_#1e3a8a_55%,_#0f172a)]" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                              {post.category}
                            </div>
                          </div>
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="flex items-center gap-3 mb-3 text-xs">
                              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-sm font-bold">{post.category}</span>
                              <span className="text-gray-400">{post.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">{post.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                            <span className="text-blue-600 font-bold text-sm hover:underline">{lang === 'zh' ? '閱讀更多' : 'Read More'} →</span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12 text-gray-500">
                      {lang === 'zh' ? '此分類暫無文章' : 'No articles found in this category'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* INDUSTRIES TAB */}
          {tab === 'industries' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoIndustries.map((ind) => (
                <Link href={`/${lang}/industries/${ind.slug}`} key={ind.slug} className="block group h-full">
                  <div className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-lg transition duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                      <LayoutGrid className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                      {ind.h1[lang].replace('外貿客戶開發', '').replace('Export Lead Generation for ', '')}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                      {ind.description[lang]}
                    </p>
                    <div className="flex items-center text-blue-600 font-bold text-sm">
                      {lang === 'zh' ? '查看指南' : 'View Guide'} 
                      <span className="ml-2 group-hover:translate-x-1 transition">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* MARKETS TAB */}
          {tab === 'markets' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoMarkets.map((mkt) => (
                <Link href={`/${lang}/markets/${mkt.slug}`} key={mkt.slug} className="block group h-full">
                  <div className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-lg transition duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
                      {mkt.h1[lang].replace('市場外貿客戶開發', '').replace('Market Export Lead Generation', '')}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                      {mkt.description[lang]}
                    </p>
                    <div className="flex items-center text-green-600 font-bold text-sm">
                      {lang === 'zh' ? '查看市場頁' : 'View page'} 
                      <span className="ml-2 group-hover:translate-x-1 transition">→</span>
                    </div>
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
