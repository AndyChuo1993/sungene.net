import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { getArticles } from '@/data/articles'
import Newsletter from '@/components/Newsletter'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: (lang === 'zh' ? '資源中心' : 'Resources') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const articles = getArticles(lang)

  const categories = [
    { title: lang === 'zh' ? '外貿開發指南' : 'Export Guide', count: 3 },
    { title: lang === 'zh' ? '市場分析報告' : 'Market Analysis', count: 1 },
    { title: lang === 'zh' ? '成功案例解析' : 'Case Insights', count: 0 },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{lang === 'zh' ? '資源中心' : 'Resources'}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {lang === 'zh' ? '外貿開發知識庫、市場洞察與實戰技巧' : 'Export Knowledge Base, Market Insights, and Practical Tactics'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
            
            {/* Sidebar */}
            <div className="lg:col-span-3 space-y-8">
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{lang === 'zh' ? '分類瀏覽' : 'Categories'}</h3>
                    <ul className="space-y-3">
                        {categories.map((c, i) => (
                            <li key={i} className="flex justify-between items-center text-gray-600 hover:text-blue-600 cursor-pointer transition">
                                <span>{c.title}</span>
                                <span className="bg-gray-100 text-gray-400 text-xs px-2 py-1 rounded-full">{c.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <Newsletter lang={lang} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
                <div className="grid md:grid-cols-2 gap-8">
                    {articles.map((post) => (
                        <Link href={`/${lang}/resources/${post.id}`} key={post.id} className="block group">
                            <div className="bg-white border border-gray-200 rounded-sm hover:shadow-md transition duration-300 flex flex-col h-full">
                                <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 relative overflow-hidden group">
                                    <div 
                                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
                                      style={{ 
                                        backgroundImage: post.id === 'german-hardware-2026' 
                                          ? `url(https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('Modern industrial hardware factory in Germany, automated production line, high tech, blue and white tone, photorealistic')}&image_size=landscape_16_9)`
                                          : post.id === 'cold-email-structure'
                                          ? `url(https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('Professional business email communication, laptop on desk, modern office, focus on screen, blue theme, photorealistic')}&image_size=landscape_16_9)`
                                          : post.id === 'finding-buyers'
                                          ? `url(https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('Global trade map connection, business handshake, international logistics, blue technology style, photorealistic')}&image_size=landscape_16_9)`
                                          : post.id === 'export-dev-guide-2026'
                                          ? `url(https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('Strategic business planning, compass and charts on table, export growth concept, blue professional style, photorealistic')}&image_size=landscape_16_9)`
                                          : 'none'
                                      }}
                                    >
                                      {/* Overlay for readability if needed, but here we just want the image */}
                                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition"></div>
                                    </div>
                                    
                                    {/* Fallback if image fails or loading (though we are using URLs directly) */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
                                      <div className="text-4xl text-gray-300 font-serif mb-2 font-bold opacity-30">
                                          {post.category === (lang === 'zh' ? '市場分析' : 'Market Analysis') ? 'DATA' : 'GUIDE'}
                                      </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-3 mb-3 text-xs">
                                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-sm font-bold">{post.category}</span>
                                        <span className="text-gray-400">{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">{post.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.content[0]}</p>
                                    <span className="text-blue-600 font-bold text-sm hover:underline">{lang === 'zh' ? '閱讀更多' : 'Read More'} →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                    
                    {/* Coming Soon Card */}
                    <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-sm flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
                        <div className="text-gray-400 font-bold text-lg mb-2">{lang === 'zh' ? '更多內容準備中...' : 'More content coming soon...'}</div>
                        <p className="text-gray-500 text-sm max-w-xs">{lang === 'zh' ? '我們正在整理更多實戰案例與市場數據。' : 'We are compiling more case studies and market data.'}</p>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </main>
  )
}
