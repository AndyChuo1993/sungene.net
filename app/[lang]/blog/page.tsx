import { Lang } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/data/blog'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: (lang === 'zh' ? '部落格' : 'Blog') + ' | SunGene',
    description: lang === 'zh' ? '外銷開發、找海外買家與經銷商的實作指南與清單。' : 'Practical guides on export lead generation, overseas buyers, and distributor development.',
    alternates: {
      canonical: `/${lang}/blog`,
      languages: {
        zh: '/zh/blog',
        en: '/en/blog',
        'x-default': '/en/blog',
      },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const posts = getBlogPosts().slice().sort((a, b) => (a.date > b.date ? -1 : 1))

  return (
    <main className="pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{lang === 'zh' ? '部落格' : 'Blog'}</h1>
          <p className="mt-4 text-lg text-gray-600">
            {lang === 'zh'
              ? '部落格放的是教學、觀點與做法拆解；資源中心放可直接套用的指南與檢查表；產業頁與市場頁則用來承接特定搜尋需求。'
              : 'The blog is for guides, commentary, and method breakdowns. Resources contains reusable guides and checklists, while industry and market pages target specific search intent.'}
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/${lang}/blog/${p.slug}`} className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-52 bg-slate-950">
                <Image src={p.heroImage} alt={p.title[lang]} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                  {lang === 'zh' ? '部落格文章' : 'Blog Article'}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500">{new Date(p.date).toISOString().slice(0, 10)}</div>
                <div className="mt-2 text-xl font-bold text-gray-900">{p.title[lang]}</div>
                <div className="mt-2 text-gray-600 leading-7">{p.description[lang]}</div>
                <div className="mt-4 text-blue-900 font-medium">{lang === 'zh' ? '閱讀全文 →' : 'Read →'}</div>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-12 mb-16 rounded-xl bg-slate-900 text-white p-8">
          <h2 className="text-2xl font-bold">{lang === 'zh' ? '想把方法落地成詢盤？' : 'Want to turn this into inquiries?'}</h2>
          <p className="mt-2 text-slate-200">
            {lang === 'zh'
              ? '拿走一份免費出口市場分析，我們會回覆市場切入、買家角色與可行的開發策略。'
              : 'Get a free export market analysis. We’ll reply with entry approach, buyer roles, and a feasible outreach plan.'}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/${lang}/export-market-analysis`} className="inline-flex items-center justify-center rounded-sm bg-blue-500 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-400 transition">
              {lang === 'zh' ? '免費出口市場分析' : 'Free Export Market Analysis'}
            </Link>
            <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-white font-medium text-sm hover:bg-white/10 transition">
              {lang === 'zh' ? '預約諮詢' : 'Book Consultation'}
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
