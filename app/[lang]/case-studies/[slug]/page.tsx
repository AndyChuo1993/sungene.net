import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { getCase, getCases } from '@/data/cases'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const langs = ['en', 'zh', 'cn'] as const
  return getCases('en').flatMap((c) => langs.map((lang) => ({ lang, slug: c.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
  const dataLang = lang === 'cn' ? 'zh' : lang
  const item = getCase(dataLang, slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.title} | SunGene`,
    description: item.summary,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
  const dataLang = lang === 'cn' ? 'zh' : lang
  const item = getCase(dataLang, slug)

  if (!item) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gray-900 py-24 text-white">
        {item.cover && (
          <div className="absolute inset-0 opacity-20 blur-sm">
            <Image src={item.cover} alt={item.title} fill className="object-cover" />
          </div>
        )}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex gap-2">
            <span className="rounded-sm bg-blue-600 px-3 py-1 text-sm font-bold uppercase tracking-wide text-white">{item.industry}</span>
            <span className="rounded-sm bg-gray-700 px-3 py-1 text-sm font-bold uppercase tracking-wide text-white">{item.market}</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">{item.title}</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">{item.summary}</p>
          <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-gray-200">
            {lang === 'en' ? 'This page is a representative case scenario. Details have been anonymized to illustrate common workflows, execution methods, and result ranges.' : (lang === 'cn' ? '此页为代表性案例场景，内容已做去识别化整理，用于说明常见合作流程、执行方式与成果范围。' : '此頁為代表性案例情境，內容已做去識別化整理，用於說明常見合作流程、執行方式與成果範圍。')}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-400">
            <div className="flex items-center rounded-full border border-gray-700 bg-gray-800/50 px-4 py-2">
              <span className="mr-2 text-blue-400">●</span> {lang === 'en' ? 'Service' : (lang === 'cn' ? '服务类别' : '服務類別')}: {item.serviceType}
            </div>
            <div className="flex items-center rounded-full border border-gray-700 bg-gray-800/50 px-4 py-2">
              <span className="mr-2 text-green-400">●</span> {lang === 'en' ? 'Engagement' : (lang === 'cn' ? '合作周期' : '合作週期')}: {item.duration}
            </div>
          </div>

          {item.proofImages && item.proofImages.length > 0 && (
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4">
              {item.proofImages.map((img, idx) => (
                <div key={idx} className="relative aspect-video overflow-hidden rounded-sm border border-gray-700/50 shadow-2xl">
                  <Image src={img} alt={`${item.title} proof ${idx + 1}`} fill className="object-cover transition duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {item.highlights && (
        <section className="border-b border-gray-100 bg-gray-50 py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-3 gap-8">
              {item.highlights.map((h, idx) => (
                <div key={idx} className="text-center">
                  <div className="mb-2 text-4xl font-bold text-blue-600 md:text-5xl">{h.num}</div>
                  <div className="text-sm font-medium uppercase tracking-wide text-gray-500 md:text-base">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="mx-auto max-w-3xl space-y-16 px-6">
          {item.before && item.after && (
            <div className="rounded-sm border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-8 text-center text-2xl font-bold">{lang === 'en' ? 'Before & After' : (lang === 'cn' ? '合作前后对比' : '合作前後對比')}</h3>
              <div className="relative grid gap-12 md:grid-cols-2">
                <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gray-200 md:block"></div>
                <div>
                  <div className="mb-4 flex items-center font-bold uppercase tracking-wide text-red-500">
                    <span className="mr-2 h-2 w-2 rounded-full bg-red-500"></span>
                    {lang === 'en' ? 'Before' : (lang === 'cn' ? '合作前' : '合作前')}
                  </div>
                  <ul className="space-y-3">
                    {item.before.map((point, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="mr-3 text-red-300">✕</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-4 flex items-center font-bold uppercase tracking-wide text-green-500">
                    <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                    {lang === 'en' ? 'After' : (lang === 'cn' ? '合作后' : '合作後')}
                  </div>
                  <ul className="space-y-3">
                    {item.after.map((point, i) => (
                      <li key={i} className="flex items-start font-medium text-gray-900">
                        <span className="mr-3 text-green-500">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-16">
            {item.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-6 border-l-4 border-blue-600 pl-4 text-2xl font-bold text-gray-900">{section.heading}</h3>
                {section.paragraphs && (
                  <div className="mb-6 space-y-4">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-lg leading-relaxed text-gray-600">{p}</p>
                    ))}
                  </div>
                )}
                {section.items && (
                  <ul className="space-y-4">
                    {section.items.map((li, liIdx) => (
                      <li key={liIdx} className="flex items-start rounded-sm bg-gray-50 p-4 text-lg text-gray-700">
                        <span className="mr-4 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">✓</span>
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">{t(lang, 'hero_cta_start')}</h2>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/export-market-analysis`} className="inline-block rounded-sm bg-white px-10 py-4 text-lg font-bold text-blue-900 shadow-lg transition duration-300 hover:bg-gray-100">
              {t(lang, 'cta_analysis')}
            </Link>
            <Link href={`/${lang}/contact`} className="inline-block rounded-sm border border-white bg-transparent px-10 py-4 text-lg font-bold text-white transition duration-300 hover:bg-white hover:text-blue-900">
              {t(lang, 'cta_consult')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
