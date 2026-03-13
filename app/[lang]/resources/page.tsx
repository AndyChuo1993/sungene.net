import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { getArticles } from '@/data/articles'
import { getBlogPosts } from '@/data/blog'
import { seoIndustries } from '@/data/seoIndustries'
import { seoMarkets } from '@/data/seoMarkets'
import Newsletter from '@/components/Newsletter'
import { LayoutGrid, Globe, FileText } from 'lucide-react'

export async function generateMetadata({ params, searchParams }: { params: { lang: Lang }, searchParams: { tab?: string } }) {
  const lang = params.lang
  const tab = searchParams.tab || 'articles'
  
  let title = lang === 'zh' ? '外貿資源' : 'Export Resources'
  if (tab === 'industries') title = lang === 'zh' ? '產業外貿指南' : 'Industry Export Guides'
  if (tab === 'markets') title = lang === 'zh' ? '市場開發指南' : 'Market Export Guides'

  return {
    title: `${title} | SunGene`,
    description: t(lang, 'meta_home_desc'),
  }
}

export default function Page({ 
  params, 
  searchParams 
}: { 
  params: { lang: Lang }, 
  searchParams: { category?: string, tab?: string } 
}) {
  const lang = params.lang
  const tab = searchParams.tab || 'articles'
  
  // Data for Articles
  const resourceArticles = getArticles(lang)
  const blogPosts = getBlogPosts()
  const blogItems = blogPosts.map((p) => ({
    id: `blog-${p.slug}`,
    href: `/${lang}/resources/blog/${p.slug}`,
    title: p.title[lang],
    category: lang === 'zh' ? '指南文章' : 'Guides',
    date: p.date,
    excerpt: p.description[lang],
    image: p.heroImage,
  }))
  const articleItems = resourceArticles.map((a) => ({
    id: a.id,
    href: `/${lang}/resources/${a.id}`,
    title: a.title,
    category: a.category,
    date: a.date,
    excerpt: a.content[0] || '',
    image: a.image,
  }))
  const allArticles = [...blogItems, ...articleItems].sort(
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
    { id: 'articles', label: lang === 'zh' ? '精選文章' : 'Articles', icon: FileText },
    { id: 'industries', label: lang === 'zh' ? '產業指南' : 'Industries', icon: LayoutGrid },
    { id: 'markets', label: lang === 'zh' ? '市場指南' : 'Markets', icon: Globe },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{lang === 'zh' ? '外貿資源' : 'Export Resources'}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {lang === 'zh' ? '外貿開發知識庫、產業洞察與市場攻略' : 'Export Knowledge Base, Industry Insights, and Market Strategies'}
          </p>
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
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((post) => (
                      <Link href={post.href} key={post.id} className="block group h-full">
                        <div className="bg-white border border-gray-200 rounded-sm hover:shadow-md transition duration-300 flex flex-col h-full">
                          <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 relative overflow-hidden group">
                            <div 
                              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
                              style={{ 
                                backgroundImage: post.image ? `url(${post.image})` : 'none'
                              }}
                            >
                              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition"></div>
                            </div>
                            {!post.image && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                                  <div className="text-4xl text-gray-300 font-serif mb-2 font-bold">
                                      GUIDE
                                  </div>
                                </div>
                            )}
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
                      {lang === 'zh' ? '查看指南' : 'View Guide'} 
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
