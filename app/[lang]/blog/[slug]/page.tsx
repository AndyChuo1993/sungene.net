import Link from 'next/link'
import Image from 'next/image'
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

function estimateReadTime(text: string) {
  const asciiWords = (text.match(/[A-Za-z0-9]+/g) || []).length
  const cjkChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length
  const wordLike = asciiWords + Math.ceil(cjkChars / 2)
  const minutes = Math.max(3, Math.ceil(wordLike / 200))
  return minutes
}

export async function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
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
        'x-default': `/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title[lang],
      description: post.description[lang],
      type: 'article',
      url: `/${lang}/blog/${slug}`,
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.title[lang] }],
    },
    twitter: { card: 'summary_large_image', title: post.title[lang], description: post.description[lang], images: [post.heroImage] },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
  const post = getBlogPost(slug)
  if (!post) return null

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const url = `${baseUrl}/${lang}/blog/${slug}`
  const anchors = post.sections.map((s) => ({ id: s.id, label: s.heading[lang], anchor: slugifyAnchor(s.heading[lang]) }))
  const related = getBlogPosts().filter((p) => p.slug !== post.slug).slice(0, 3)

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
    mainEntity: post.faq.map((f) => ({
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
  const marketIndustryHref = `/${lang}${post.internalLinks.marketOrIndustryPath ?? '/industries/machinery'}`
  const distributorServiceHref = `/${lang}/services/distributor-development`
  const outsourcingServiceHref = `/${lang}/services/export-sales-outsourcing`
  const marketsIndexHref = `/${lang}/markets`
  const industriesIndexHref = `/${lang}/industries`

  const funnelImage = lang === 'zh' ? '/articles/list-to-meeting-funnel-zh.svg' : '/articles/list-to-meeting-funnel-en.svg'
  const channelsImage = lang === 'zh' ? '/articles/buyer-channels-matrix-zh.svg' : '/articles/buyer-channels-matrix-en.svg'

  const combinedText = [post.title[lang], post.description[lang], ...post.sections.flatMap((s) => s.content[lang])].join(' ')
  const readMinutes = estimateReadTime(combinedText)
  const dateIso = new Date(post.date).toISOString().slice(0, 10)
  const author = lang === 'zh' ? 'SunGene 研究團隊' : 'SunGene Research Team'
  const reviewer = lang === 'zh' ? 'SunGene 外銷顧問' : 'SunGene Export Advisors'

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
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                <div>{lang === 'zh' ? `更新：${dateIso}` : `Updated: ${dateIso}`}</div>
                <div>·</div>
                <div>{lang === 'zh' ? `閱讀時間：約 ${readMinutes} 分鐘` : `Read time: ~${readMinutes} min`}</div>
                <div>·</div>
                <div>{author}</div>
                <div>·</div>
                <div>{lang === 'zh' ? `審稿：${reviewer}` : `Reviewed by ${reviewer}`}</div>
              </div>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">{post.title[lang]}</h1>
              <p className="mt-4 text-lg text-gray-600">{post.description[lang]}</p>
              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                <Image src={post.heroImage} alt={post.title[lang]} width={1200} height={630} className="h-auto w-full" priority />
              </div>
            </header>

            <section className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '目錄' : 'Table of Contents'}</div>
              <ol className="mt-3 space-y-2 text-sm">
                {anchors.map((a) => (
                  <li key={a.id}>
                    <a href={`#${a.anchor}`} className="text-blue-900 hover:underline">
                      {a.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-10 space-y-12">
              {post.sections.map((s, idx) => {
                const anchor = slugifyAnchor(s.heading[lang])
                return (
                  <section key={s.id} id={anchor} className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-gray-900">{s.heading[lang]}</h2>
                    <div className="mt-4 space-y-4 text-gray-700 leading-7">
                      {s.content[lang].map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}

                      {idx === 2 && (
                        <div className="rounded-xl border border-gray-200 bg-white p-6">
                          <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '圖表：從名單到會議的轉換漏斗（示意）' : 'Diagram: list → outreach → reply → meeting funnel (example)'}</div>
                          <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                            <Image src={funnelImage} alt={lang === 'zh' ? '名單到會議漏斗示意圖' : 'List-to-meeting funnel diagram'} width={1200} height={630} className="h-auto w-full" />
                          </div>
                          <div className="mt-3 text-sm text-gray-600">
                            {lang === 'zh'
                              ? '這張圖用來幫你抓住最小可行流程：先讓名單可投遞、再用節奏跟進、把回覆分類別後推進下一步。'
                              : 'This visual helps you align the minimum viable workflow: deliverable list → cadence → triage → next step.'}
                          </div>
                        </div>
                      )}

                      {idx === 1 && (
                        <p>
                          {lang === 'zh' ? (
                            <>
                              如果你想把本文的框架落地，可以先看核心服務{' '}
                              <Link href={serviceHref} className="text-blue-900 font-medium hover:underline">外銷客戶開發</Link>
                              ，再搭配{' '}
                              <Link href={caseHref} className="text-blue-900 font-medium hover:underline">成功案例</Link>
                              與{' '}
                              <Link href={magnetHref} className="text-blue-900 font-medium hover:underline">免費出口市場分析</Link>
                              。同時也建議讀一個市場/產業頁，建立買家語境（例如{' '}
                              <Link href={marketIndustryHref} className="text-blue-900 font-medium hover:underline">機械產業</Link>
                              ）。
                            </>
                          ) : (
                            <>
                              If you want to implement this framework, start with the core service{' '}
                              <Link href={serviceHref} className="text-blue-900 font-medium hover:underline">Export Lead Generation</Link>
                              , then review{' '}
                              <Link href={caseHref} className="text-blue-900 font-medium hover:underline">case studies</Link>
                              and use the{' '}
                              <Link href={magnetHref} className="text-blue-900 font-medium hover:underline">free export market analysis</Link>
                              . Also add a market/industry context page (for example,{' '}
                              <Link href={marketIndustryHref} className="text-blue-900 font-medium hover:underline">the machinery industry page</Link>
                              ) to match buyer intent.
                            </>
                          )}
                        </p>
                      )}

                      {idx === 3 && (
                        <p>
                          {lang === 'zh' ? (
                            <>
                              如果你文章裡提到「經銷商／通路」或「市場切入」，建議把閱讀動線接到{' '}
                              <Link href={distributorServiceHref} className="text-blue-900 font-medium hover:underline">經銷商開發</Link>
                              ，再回到{' '}
                              <Link href={marketsIndexHref} className="text-blue-900 font-medium hover:underline">市場頁</Link>
                              與{' '}
                              <Link href={industriesIndexHref} className="text-blue-900 font-medium hover:underline">產業頁</Link>
                              找到更符合你產品的買家語境。
                            </>
                          ) : (
                            <>
                              If you are considering channels or market entry, connect this guide to{' '}
                              <Link href={distributorServiceHref} className="text-blue-900 font-medium hover:underline">Distributor Development</Link>
                              , then browse the{' '}
                              <Link href={marketsIndexHref} className="text-blue-900 font-medium hover:underline">market pages</Link>
                              {' '}and{' '}
                              <Link href={industriesIndexHref} className="text-blue-900 font-medium hover:underline">industry pages</Link>
                              {' '}to match buyer intent by region and vertical.
                            </>
                          )}
                        </p>
                      )}

                      {idx === 4 && (
                        <div className="rounded-xl border border-gray-200 bg-white p-6">
                          <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '圖表：常見買家來源與適用情境（示意）' : 'Chart: buyer discovery channels and when to use them (example)'}</div>
                          <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                            <Image src={channelsImage} alt={lang === 'zh' ? '買家來源比較圖' : 'Buyer discovery channels comparison'} width={1200} height={630} className="h-auto w-full" />
                          </div>
                          <div className="mt-3 text-sm text-gray-600">
                            {lang === 'zh'
                              ? '你可以用這張表快速決定：先用哪個來源跑小規模驗證，再把有效的做法放大。'
                              : 'Use this to pick 1–2 channels for validation first, then scale the ones that work.'}
                          </div>
                        </div>
                      )}

                      {idx === post.sections.length - 2 && (
                        <p>
                          {lang === 'zh' ? (
                            <>
                              想把內容變成可交付成果，可以對照服務頁的交付與流程：{' '}
                              <Link href={serviceHref} className="text-blue-900 font-medium hover:underline">核心服務</Link>
                              ，以及團隊常用的{' '}
                              <Link href={outsourcingServiceHref} className="text-blue-900 font-medium hover:underline">外銷業務外套件</Link>
                              。若你希望先用低成本驗證，也可以先拿{' '}
                              <Link href={magnetHref} className="text-blue-900 font-medium hover:underline">免費市場分析</Link>
                              當起點。
                            </>
                          ) : (
                            <>
                              To turn this into deliverables, compare the workflow and outputs on the{' '}
                              <Link href={serviceHref} className="text-blue-900 font-medium hover:underline">core service page</Link>
                              and{' '}
                              <Link href={outsourcingServiceHref} className="text-blue-900 font-medium hover:underline">Export Sales Outsourcing</Link>
                              . For a low-friction starting point, use the{' '}
                              <Link href={magnetHref} className="text-blue-900 font-medium hover:underline">free market analysis</Link>
                              as your first validation step.
                            </>
                          )}
                        </p>
                      )}

                      {idx % 2 === 1 && (
                        <div className="rounded-xl border border-gray-200 bg-white p-6">
                          <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '示意表：從名單到會議的最小流程' : 'Example table: minimal list-to-meeting workflow'}</div>
                          <div className="mt-4 overflow-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="text-left text-gray-500">
                                  <th className="py-2 pr-4">{lang === 'zh' ? '階段' : 'Stage'}</th>
                                  <th className="py-2 pr-4">{lang === 'zh' ? '輸入' : 'Input'}</th>
                                  <th className="py-2">{lang === 'zh' ? '輸出' : 'Output'}</th>
                                </tr>
                              </thead>
                              <tbody className="text-gray-800">
                                <tr className="border-t">
                                  <td className="py-2 pr-4 font-semibold">{lang === 'zh' ? '理想買家' : 'ICP'}</td>
                                  <td className="py-2 pr-4">{lang === 'zh' ? '市場/產業/角色/規模' : 'market/industry/role/size'}</td>
                                  <td className="py-2">{lang === 'zh' ? '買家畫像與篩選規則' : 'buyer profile and filters'}</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 pr-4 font-semibold">{lang === 'zh' ? '名單' : 'List'}</td>
                                  <td className="py-2 pr-4">{lang === 'zh' ? '多來源蒐集 + 驗證' : 'multi-source + validation'}</td>
                                  <td className="py-2">{lang === 'zh' ? '可投遞聯絡方式' : 'deliverable contacts'}</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 pr-4 font-semibold">{lang === 'zh' ? '訊息' : 'Message'}</td>
                                  <td className="py-2 pr-4">{lang === 'zh' ? '痛點 + 證據 + CTA' : 'pain + proof + CTA'}</td>
                                  <td className="py-2">{lang === 'zh' ? '可回覆的問題' : 'replyable question'}</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 pr-4 font-semibold">{lang === 'zh' ? '跟進' : 'Follow-up'}</td>
                                  <td className="py-2 pr-4">{lang === 'zh' ? '4–6 次節奏' : '4–6 touches'}</td>
                                  <td className="py-2">{lang === 'zh' ? '有效回覆與分類別' : 'replies + triage'}</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 pr-4 font-semibold">{lang === 'zh' ? '推進' : 'Progress'}</td>
                                  <td className="py-2 pr-4">{lang === 'zh' ? '需求摘要/下一步' : 'summary/next steps'}</td>
                                  <td className="py-2">{lang === 'zh' ? '會議/樣品/報價' : 'meetings/samples/quotes'}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                )
              })}
            </div>

            <section className="mt-12 rounded-xl bg-slate-900 text-white p-8">
              <h2 className="text-2xl font-bold">{lang === 'zh' ? '想把這套方法落地？' : 'Want to implement this system?'}</h2>
              <p className="mt-2 text-slate-200">
                {lang === 'zh'
                  ? '我們可以協助你把服務頁、文章群集與 Lead Magnet 串成一套可持續的 B2B 增長系統。'
                  : 'We can help you connect service pages, clusters, and lead magnets into a sustainable B2B growth system.'}
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
              <h2 className="text-2xl font-bold text-gray-900">{lang === 'zh' ? '相關內容' : 'Related content'}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} href={`/${lang}/blog/${r.slug}`} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
                    <div className="text-sm text-gray-500">{new Date(r.date).toISOString().slice(0, 10)}</div>
                    <div className="mt-2 font-bold text-gray-900">{r.title[lang]}</div>
                    <div className="mt-2 text-gray-600">{r.description[lang]}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={serviceHref} className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-blue-900 font-medium text-sm hover:bg-blue-50 transition">
                  {lang === 'zh' ? '查看服務' : 'View service'}
                </Link>
                <Link href={caseHref} className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-blue-900 font-medium text-sm hover:bg-blue-50 transition">
                  {lang === 'zh' ? '成功案例' : 'Case studies'}
                </Link>
                <Link href={magnetHref} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition">
                  {lang === 'zh' ? '免費出口市場分析' : 'Free export market analysis'}
                </Link>
              </div>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '快速入口' : 'Quick links'}</div>
                <div className="mt-4 space-y-2 text-sm">
                  <Link href={serviceHref} className="block text-blue-900 hover:underline">
                    {lang === 'zh' ? '查看服務' : 'View service'}
                  </Link>
                  <Link href={caseHref} className="block text-blue-900 hover:underline">
                    {lang === 'zh' ? '成功案例' : 'Case studies'}
                  </Link>
                  <Link href={magnetHref} className="block text-blue-900 hover:underline">
                    {lang === 'zh' ? '免費出口市場分析' : 'Free export market analysis'}
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '本頁目錄' : 'On this page'}</div>
                <ol className="mt-4 space-y-2 text-sm">
                  {anchors.map((a) => (
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
