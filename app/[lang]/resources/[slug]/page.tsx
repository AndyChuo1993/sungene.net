import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ALL_LANGS, Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getRelatedResourceArticles, getResourceArticle, getResourceArticleI18n, RESOURCE_DEFAULT_PUBLISHED_AT, RESOURCE_SLUGS, ResourceSection } from '@/lib/resourceArticles'
import { buildPageMetadata, normalizeLang } from '@/lib/seo'
import { LANG_META } from '@/lib/seo'
import { getStableLastModifiedISO } from '@/lib/buildTime'
import { getResourceBoostSections } from '@/lib/resourceBoost'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return ALL_LANGS.flatMap(lang => RESOURCE_SLUGS.map(slug => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const l = normalizeLang(lang)
  const i18n = getResourceArticleI18n(slug, l)
  if (!i18n) {
    return buildPageMetadata({
      lang: l,
      title: 'Resources | SunGene',
      description: 'Machinery buying guides and practical selection notes.',
      pathname: '/resources',
      type: 'website',
    })
  }

  return buildPageMetadata({
    lang: l,
    title: i18n.metaTitle,
    description: i18n.metaDescription,
    pathname: `/resources/${slug}`,
    type: 'article',
  })
}

function renderSection(s: ResourceSection, key: number) {
  if (s.type === 'h2') return <h2 key={key}>{s.text}</h2>
  if (s.type === 'h3') return <h3 key={key}>{s.text}</h3>
  if (s.type === 'p') return <p key={key}>{s.text}</p>
  if (s.type === 'ul') return <ul key={key}>{s.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
  if (s.type === 'table') {
    return (
      <div key={key} className="not-prose overflow-x-auto">
        <table className="table-auto w-full text-sm border-collapse">
          <thead>
            <tr className="bg-brand-50">
              {s.headers.map((h, i) => (
                <th key={i} className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.rows.map((row, r) => (
              <tr key={r} className={r % 2 === 1 ? 'bg-gray-50' : undefined}>
                {row.map((cell, c) => (
                  <td key={c} className="border border-gray-200 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}

const ui: Record<Lang, { faqTitle: string; speakTitle: string; speakBody: string; speakLink: string; viewAll: string }> = {
  en: { faqTitle: 'Frequently Asked Questions', speakTitle: 'Speak to an Engineer', speakBody: 'Our technical team can advise on machine selection, packaging compatibility, and line layout.', speakLink: 'Contact Us →', viewAll: 'View All Machinery' },
  zh: { faqTitle: '常見問題', speakTitle: '與工程師聊聊', speakBody: '技術團隊可協助機型選擇、包裝相容性與產線佈局建議。', speakLink: '聯絡我們 →', viewAll: '查看全部機械' },
  cn: { faqTitle: '常见问题', speakTitle: '联系工程师', speakBody: '技术团队可协助机型选择、包装兼容性与产线布局建议。', speakLink: '联系我们 →', viewAll: '查看全部机械' },
  fr: { faqTitle: 'FAQ', speakTitle: 'Parler à un ingénieur', speakBody: 'Notre équipe technique vous conseille sur le choix machine, la compatibilité packaging et l’implantation de ligne.', speakLink: 'Nous contacter →', viewAll: 'Voir toutes les machines' },
  es: { faqTitle: 'Preguntas frecuentes', speakTitle: 'Hable con un ingeniero', speakBody: 'Nuestro equipo técnico puede asesorarle sobre selección de máquina, compatibilidad de empaque y layout de línea.', speakLink: 'Contáctenos →', viewAll: 'Ver toda la maquinaria' },
  pt: { faqTitle: 'Perguntas frequentes', speakTitle: 'Fale com um engenheiro', speakBody: 'Nossa equipe técnica orienta na seleção da máquina, compatibilidade de embalagem e layout de linha.', speakLink: 'Fale conosco →', viewAll: 'Ver todas as máquinas' },
  ko: { faqTitle: '자주 묻는 질문', speakTitle: '엔지니어 상담', speakBody: '기술팀이 기종 선택, 포장 호환성, 라인 레이아웃을 안내해드립니다.', speakLink: '문의하기 →', viewAll: '전체 기계 보기' },
  ja: { faqTitle: 'よくある質問', speakTitle: 'エンジニアに相談', speakBody: '機種選定、包装の適合性、ラインレイアウトについて技術チームがご案内します。', speakLink: 'お問い合わせ →', viewAll: '機械一覧を見る' },
  ar: { faqTitle: 'الأسئلة الشائعة', speakTitle: 'تحدث إلى مهندس', speakBody: 'يمكن لفريقنا الفني مساعدتك في اختيار الماكينة وتوافق مواد التغليف وتخطيط خط الإنتاج.', speakLink: 'اتصل بنا →', viewAll: 'عرض جميع الماكينات' },
  th: { faqTitle: 'คำถามที่พบบ่อย', speakTitle: 'พูดคุยกับวิศวกร', speakBody: 'ทีมเทคนิคของเราช่วยแนะนำการเลือกเครื่อง ความเข้ากันได้ของบรรจุภัณฑ์ และการจัดวางไลน์ผลิต.', speakLink: 'ติดต่อเรา →', viewAll: 'ดูเครื่องทั้งหมด' },
  vi: { faqTitle: 'Câu hỏi thường gặp', speakTitle: 'Trao đổi với kỹ sư', speakBody: 'Đội ngũ kỹ thuật có thể tư vấn chọn máy, tương thích bao bì và bố trí dây chuyền.', speakLink: 'Liên hệ →', viewAll: 'Xem tất cả máy' },
  de: { faqTitle: 'Häufige Fragen', speakTitle: 'Mit einem Ingenieur sprechen', speakBody: 'Unser Technikteam berät zu Maschinenauswahl, Verpackungskompatibilität und Linienlayout.', speakLink: 'Kontakt →', viewAll: 'Alle Maschinen ansehen' },
}

type MachineSlug =
  | 'powder-filling-machine'
  | 'liquid-filling-machine'
  | 'pouch-packing-machine'
  | 'snack-processing-line'
  | 'conveyor-system'

const machineLabels: Record<Lang, Record<MachineSlug, string>> = {
  en: {
    'powder-filling-machine': 'Powder Filling Machine',
    'liquid-filling-machine': 'Liquid Filling Machine',
    'pouch-packing-machine': 'Pouch Packing Machine',
    'snack-processing-line': 'Snack Processing Line',
    'conveyor-system': 'Conveyor System',
  },
  zh: {
    'powder-filling-machine': '粉末充填機',
    'liquid-filling-machine': '液體充填機',
    'pouch-packing-machine': '袋裝包裝機',
    'snack-processing-line': '零食加工線',
    'conveyor-system': '輸送帶系統',
  },
  cn: {
    'powder-filling-machine': '粉末灌装机',
    'liquid-filling-machine': '液体灌装机',
    'pouch-packing-machine': '袋装包装机',
    'snack-processing-line': '零食加工线',
    'conveyor-system': '输送带系统',
  },
  fr: {
    'powder-filling-machine': 'Machine de remplissage poudre',
    'liquid-filling-machine': 'Machine de remplissage liquide',
    'pouch-packing-machine': 'Machine de conditionnement sachets',
    'snack-processing-line': 'Ligne de snacks',
    'conveyor-system': 'Système de convoyage',
  },
  es: {
    'powder-filling-machine': 'Máquina llenadora de polvo',
    'liquid-filling-machine': 'Máquina llenadora de líquido',
    'pouch-packing-machine': 'Máquina empacadora de bolsas',
    'snack-processing-line': 'Línea de snacks',
    'conveyor-system': 'Sistema de transporte',
  },
  pt: {
    'powder-filling-machine': 'Máquina de envase de pó',
    'liquid-filling-machine': 'Máquina de envase de líquido',
    'pouch-packing-machine': 'Máquina de embalagem em sachês',
    'snack-processing-line': 'Linha de snacks',
    'conveyor-system': 'Sistema de transportadores',
  },
  ko: {
    'powder-filling-machine': '분말 충전기',
    'liquid-filling-machine': '액체 충전기',
    'pouch-packing-machine': '파우치 포장기',
    'snack-processing-line': '스낵 가공 라인',
    'conveyor-system': '컨베이어 시스템',
  },
  ja: {
    'powder-filling-machine': '粉体充填機',
    'liquid-filling-machine': '液体充填機',
    'pouch-packing-machine': 'パウチ包装機',
    'snack-processing-line': 'スナック加工ライン',
    'conveyor-system': 'コンベアシステム',
  },
  ar: {
    'powder-filling-machine': 'ماكينة تعبئة المساحيق',
    'liquid-filling-machine': 'ماكينة تعبئة السوائل',
    'pouch-packing-machine': 'ماكينة تعبئة الأكياس',
    'snack-processing-line': 'خط معالجة السناكات',
    'conveyor-system': 'نظام السيور الناقلة',
  },
  th: {
    'powder-filling-machine': 'เครื่องบรรจุผง',
    'liquid-filling-machine': 'เครื่องบรรจุของเหลว',
    'pouch-packing-machine': 'เครื่องแพ็กถุง',
    'snack-processing-line': 'ไลน์แปรรูปสแน็ก',
    'conveyor-system': 'ระบบสายพานลำเลียง',
  },
  vi: {
    'powder-filling-machine': 'Máy chiết rót bột',
    'liquid-filling-machine': 'Máy chiết rót chất lỏng',
    'pouch-packing-machine': 'Máy đóng gói túi',
    'snack-processing-line': 'Dây chuyền snack',
    'conveyor-system': 'Hệ thống băng tải',
  },
  de: {
    'powder-filling-machine': 'Pulverfüllmaschine',
    'liquid-filling-machine': 'Flüssigkeitsfüllmaschine',
    'pouch-packing-machine': 'Beutelverpackungsmaschine',
    'snack-processing-line': 'Snack-Produktionslinie',
    'conveyor-system': 'Fördersystem',
  },
}

export default async function ResourceArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const l = (ALL_LANGS.includes(lang as Lang) ? lang : 'en') as Lang

  const article = getResourceArticle(slug)
  if (!article) notFound()

  const i18n = getResourceArticleI18n(slug, l)
  if (!i18n) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANG_META[l].htmlLang,
    mainEntity: i18n.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const dateModified = getStableLastModifiedISO()
  const datePublished = article.publishedAt ?? RESOURCE_DEFAULT_PUBLISHED_AT
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: LANG_META[l].htmlLang,
    headline: i18n.title,
    description: i18n.description,
    author: { '@type': 'Organization', name: 'SunGene Machinery', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'SunGene Machinery', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo/sungene.png` } },
    url: `${SITE_URL}/${l}/resources/${slug}`,
    image: [`${SITE_URL}/og/og.png`],
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${l}/resources/${slug}` },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  }

  const t = ui[l] ?? ui.en

  const relatedItems = article.relatedMachine ? [{
    href: `/${l}/machines/${article.relatedMachine}`,
    label: (machineLabels[l] ?? machineLabels.en)[article.relatedMachine],
  }] : []
  const relatedGuides = getRelatedResourceArticles(slug, l, 6)
  const relatedGuidesTitle =
    ({
      en: 'Related guides',
      cn: '相关指南',
      zh: '相關指南',
      fr: 'Guides associés',
      es: 'Guías relacionadas',
      pt: 'Guias relacionados',
      ko: '관련 가이드',
      ja: '関連ガイド',
      ar: 'أدلة ذات صلة',
      th: 'คู่มือที่เกี่ยวข้อง',
      vi: 'Bài hướng dẫn liên quan',
      de: 'Ähnliche Ratgeber',
    } as Record<string, string>)[l] || 'Related guides'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="bg-white">
        <Container className="py-12 lg:py-16">
          <Breadcrumbs lang={l} items={[
            { label: i18n.resourcesLabel, href: `/${l}/resources` },
            { label: i18n.title, href: `/${l}/resources/${slug}` },
          ]} />

          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
                {i18n.categoryLabel}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-brand-950 sm:text-4xl">{i18n.title}</h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{i18n.description}</p>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_300px]">
            <article className="prose prose-gray max-w-none prose-headings:text-brand-950 prose-a:text-accent-600">
              <p className="lead font-semibold text-brand-900">{i18n.lead}</p>
              {i18n.sections.map((s, idx) => renderSection(s, idx))}
              {getResourceBoostSections(slug, l).map((s, idx) => renderSection(s, 10_000 + idx))}
              <h2>{t.faqTitle}</h2>
              {i18n.faqs.map((f, idx) => (
                <div key={idx}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">{i18n.sidebarCtaTitle}</h3>
                <p className="mt-2 text-sm text-gray-600">{i18n.sidebarCtaBody}</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  {i18n.sidebarCtaBtn}
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">{i18n.sidebarRelatedTitle}</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {relatedItems.map((it) => (
                    <li key={it.href}>
                      <a href={it.href} className="text-accent-600 hover:underline">{it.label}</a>
                    </li>
                  ))}
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">{t.viewAll}</a>
                  </li>
                </ul>
              </div>

              {relatedGuides.length > 0 ? (
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-base font-bold text-brand-950">{relatedGuidesTitle}</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {relatedGuides.map((g) => (
                      <li key={g.slug}>
                        <a href={`/${l}/resources/${g.slug}`} className="text-accent-600 hover:underline">{g.title}</a>
                      </li>
                    ))}
                    <li>
                      <a href={article.relatedMachine ? `/${l}/resources/topic/${article.relatedMachine}` : `/${l}/resources`} className="text-accent-600 hover:underline">{i18n.readMoreLabel}</a>
                    </li>
                  </ul>
                </div>
              ) : null}

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">{t.speakTitle}</h3>
                <p className="mt-2 text-sm text-gray-600">{t.speakBody}</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">{t.speakLink}</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
