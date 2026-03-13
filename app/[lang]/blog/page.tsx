import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { getBlogPosts } from '@/data/blog'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: lang === 'zh' ? '部落格｜外貿開發與海外買家攻略' : 'Blog | Export Lead Generation Guides',
    description:
      lang === 'zh'
        ? '外貿開發、海外買家開發、經銷通路與出口策略的實戰文章，包含工具、範例、清單與 FAQ。'
        : 'Actionable guides on export lead generation, overseas buyers, distributors, tools, examples, checklists, and FAQs.',
    alternates: { canonical: `/${lang}/blog`, languages: { zh: '/zh/blog', en: '/en/blog' } },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const posts = getBlogPosts().slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-gray-900">{lang === 'zh' ? '部落格' : 'Blog'}</h1>
        <p className="mt-4 text-gray-600 max-w-3xl">
          {lang === 'zh'
            ? '以 SEO + GEO 友善的內容結構撰寫：摘要、定義、框架、步驟、清單與 FAQ，讓內容更容易被搜尋與 AI 引用。'
            : 'Written with SEO + AI-search friendly structure: summary, definition, frameworks, steps, checklists and FAQ.'}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map(p => (
            <Link key={p.slug} href={`/${lang}/blog/${p.slug}`} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
              <div className="text-sm text-gray-500">{new Date(p.date).toISOString().slice(0, 10)}</div>
              <div className="mt-2 text-xl font-bold text-gray-900">{p.title[lang]}</div>
              <div className="mt-2 text-gray-600">{p.description[lang]}</div>
              <div className="mt-4 text-sm font-medium text-blue-900">{lang === 'zh' ? '閱讀文章 →' : 'Read →'}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

