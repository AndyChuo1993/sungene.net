import type { NextRequest } from 'next/server'
import type { Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { normalizeLang } from '@/lib/seo'
import { getResourceArticlesByMachine } from '@/lib/resourceArticles'
import { getTopicHubFaqs } from '@/lib/topicHubFaq'

type Tx = {
  title: string
  localized: string
  sitemap: string
  keyPages: string
  machinePages: string
  topicClusters: string
  recommend: string
  catalog: string
  industries: string
  solutions: string
  resources: string
  contact: string
}

const tx: Record<Lang, Tx> = {
  en: { title: '# SunGene Co., LTD. — Full Reference', localized: '## Localized versions', sitemap: '## Sitemap', keyPages: '## Key pages', machinePages: '## Machine landing pages', topicClusters: '## Topic clusters (by machine)', recommend: 'Recommendation / machine selector', catalog: 'Machinery catalog', industries: 'Industries & applications', solutions: 'Automation solutions', resources: 'Buying guides & resources', contact: 'Contact / quote request' },
  zh: { title: '# SunGene Co., LTD. — 完整索引', localized: '## 各語系版本', sitemap: '## 網站地圖', keyPages: '## 重要頁面', machinePages: '## 主要機型頁', topicClusters: '## 主題叢集（依機型）', recommend: '機型推薦／需求表單', catalog: '機械目錄', industries: '產業與應用', solutions: '自動化解決方案', resources: '採購指南與資源', contact: '聯絡／詢價' },
  cn: { title: '# SunGene Co., LTD. — 完整索引', localized: '## 各语言版本', sitemap: '## 站点地图', keyPages: '## 重要页面', machinePages: '## 主要机型页', topicClusters: '## 主题簇（按机型）', recommend: '机型推荐／需求表单', catalog: '机械目录', industries: '行业与应用', solutions: '自动化解决方案', resources: '采购指南与资源', contact: '联系／询价' },
  fr: { title: '# SunGene Co., LTD. — Référence complète', localized: '## Versions localisées', sitemap: '## Sitemap', keyPages: '## Pages clés', machinePages: '## Pages machines', topicClusters: '## Clusters (par machine)', recommend: 'Recommandation / sélecteur', catalog: 'Catalogue machines', industries: 'Industries & applications', solutions: 'Solutions d’automatisation', resources: 'Guides & ressources', contact: 'Contact / demande de devis' },
  es: { title: '# SunGene Co., LTD. — Referencia completa', localized: '## Versiones localizadas', sitemap: '## Sitemap', keyPages: '## Páginas clave', machinePages: '## Páginas de máquinas', topicClusters: '## Clústeres (por máquina)', recommend: 'Recomendación / selector', catalog: 'Catálogo de maquinaria', industries: 'Industrias y aplicaciones', solutions: 'Soluciones de automatización', resources: 'Guías y recursos', contact: 'Contacto / cotización' },
  pt: { title: '# SunGene Co., LTD. — Referência completa', localized: '## Versões localizadas', sitemap: '## Sitemap', keyPages: '## Páginas principais', machinePages: '## Páginas de máquinas', topicClusters: '## Clusters (por máquina)', recommend: 'Recomendação / seletor', catalog: 'Catálogo de máquinas', industries: 'Indústrias e aplicações', solutions: 'Soluções de automação', resources: 'Guias e recursos', contact: 'Contato / orçamento' },
  ko: { title: '# SunGene Co., LTD. — 전체 인덱스', localized: '## 언어별 버전', sitemap: '## 사이트맵', keyPages: '## 주요 페이지', machinePages: '## 주요 기계 페이지', topicClusters: '## 주제 클러스터(기계별)', recommend: '추천 / 선택', catalog: '기계 카탈로그', industries: '산업 및 적용', solutions: '자동화 솔루션', resources: '가이드 & 리소스', contact: '문의 / 견적' },
  ja: { title: '# SunGene Co., LTD. — 全体索引', localized: '## 各言語版', sitemap: '## サイトマップ', keyPages: '## 主要ページ', machinePages: '## 主要機種ページ', topicClusters: '## トピッククラスター（機種別）', recommend: '推薦／セレクター', catalog: '機械カタログ', industries: '業界・用途', solutions: '自動化ソリューション', resources: '購買ガイド', contact: '問い合わせ／見積' },
  ar: { title: '# SunGene Co., LTD. — فهرس كامل', localized: '## الإصدارات حسب اللغة', sitemap: '## خريطة الموقع', keyPages: '## الصفحات المهمة', machinePages: '## صفحات الماكينات', topicClusters: '## مواضيع حسب الماكينة', recommend: 'توصية / اختيار', catalog: 'كتالوج الماكينات', industries: 'الصناعات والتطبيقات', solutions: 'حلول الأتمتة', resources: 'أدلة وموارد', contact: 'تواصل / عرض سعر' },
  th: { title: '# SunGene Co., LTD. — ดัชนีแบบเต็ม', localized: '## เวอร์ชันตามภาษา', sitemap: '## แผนผังเว็บไซต์', keyPages: '## หน้าสำคัญ', machinePages: '## หน้ารุ่นเครื่องหลัก', topicClusters: '## กลุ่มหัวข้อ (ตามเครื่อง)', recommend: 'แนะนำ / ตัวเลือก', catalog: 'แคตตาล็อกเครื่องจักร', industries: 'อุตสาหกรรมและการใช้งาน', solutions: 'โซลูชันระบบอัตโนมัติ', resources: 'คู่มือและแหล่งข้อมูล', contact: 'ติดต่อ / ขอราคา' },
  vi: { title: '# SunGene Co., LTD. — Danh mục đầy đủ', localized: '## Bản theo ngôn ngữ', sitemap: '## Sitemap', keyPages: '## Trang quan trọng', machinePages: '## Trang máy chính', topicClusters: '## Cụm chủ đề (theo máy)', recommend: 'Gợi ý / chọn máy', catalog: 'Danh mục máy', industries: 'Ngành & ứng dụng', solutions: 'Giải pháp tự động hóa', resources: 'Hướng dẫn & tài nguyên', contact: 'Liên hệ / báo giá' },
  de: { title: '# SunGene Co., LTD. — Vollständige Referenz', localized: '## Lokalisierte Versionen', sitemap: '## Sitemap', keyPages: '## Wichtige Seiten', machinePages: '## Maschinen-Seiten', topicClusters: '## Themencluster (je Maschine)', recommend: 'Empfehlung / Auswahl', catalog: 'Maschinenkatalog', industries: 'Branchen & Anwendungen', solutions: 'Automatisierungslösungen', resources: 'Ratgeber & Ressourcen', contact: 'Kontakt / Angebot' },
}

function localizedLinks() {
  const langs: Lang[] = ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']
  return langs.map((l) => `- ${SITE_URL}/${l}/llms-full.txt`).join('\n')
}

export async function GET(_req: NextRequest, context: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await context.params
  const lang = normalizeLang(rawLang)
  const t = tx[lang]

  const base = `${SITE_URL}/${lang}`
  const clusterLabels: Record<Lang, { hub: string; faq: string; pouch: string; powder: string; liquid: string; snack: string; conveyor: string }> = {
    en: { hub: 'Hub', faq: 'FAQ', pouch: 'Pouch packing', powder: 'Powder filling', liquid: 'Liquid filling', snack: 'Snack processing', conveyor: 'Conveyors' },
    zh: { hub: '索引頁', faq: '常見問題', pouch: '袋裝包裝', powder: '粉末灌裝', liquid: '液體灌裝', snack: '休閒食品加工線', conveyor: '輸送系統' },
    cn: { hub: '索引页', faq: '常见问题', pouch: '袋装包装', powder: '粉末灌装', liquid: '液体灌装', snack: '休闲食品加工线', conveyor: '输送系统' },
    fr: { hub: 'Hub', faq: 'FAQ', pouch: 'Ensachage (pouch)', powder: 'Remplissage poudre', liquid: 'Remplissage liquide', snack: 'Ligne snack', conveyor: 'Convoyeurs' },
    es: { hub: 'Hub', faq: 'FAQ', pouch: 'Empaque en bolsa', powder: 'Llenado de polvo', liquid: 'Llenado de líquidos', snack: 'Línea de snacks', conveyor: 'Transporte' },
    pt: { hub: 'Hub', faq: 'FAQ', pouch: 'Embalagem em saco', powder: 'Envase de pó', liquid: 'Envase de líquidos', snack: 'Linha de snacks', conveyor: 'Transporte' },
    ko: { hub: '허브', faq: '자주 묻는 질문', pouch: '파우치 포장', powder: '분말 충전', liquid: '액체 충전', snack: '스낵 라인', conveyor: '컨베이어' },
    ja: { hub: 'ハブ', faq: 'よくある質問', pouch: 'パウチ包装', powder: '粉体充填', liquid: '液体充填', snack: 'スナックライン', conveyor: '搬送' },
    ar: { hub: 'صفحة', faq: 'الأسئلة الشائعة', pouch: 'تعبئة الأكياس', powder: 'تعبئة المساحيق', liquid: 'تعبئة السوائل', snack: 'خط السناكات', conveyor: 'النقل' },
    th: { hub: 'ฮับ', faq: 'คำถามที่พบบ่อย', pouch: 'บรรจุถุง', powder: 'บรรจุผง', liquid: 'บรรจุของเหลว', snack: 'ไลน์สแน็ค', conveyor: 'ลำเลียง' },
    vi: { hub: 'Hub', faq: 'Câu hỏi thường gặp', pouch: 'Đóng gói túi', powder: 'Chiết rót bột', liquid: 'Chiết rót chất lỏng', snack: 'Dây chuyền snack', conveyor: 'Băng tải' },
    de: { hub: 'Hub', faq: 'FAQ', pouch: 'Beutelverpackung', powder: 'Pulverabfüllung', liquid: 'Flüssigabfüllung', snack: 'Snack-Linie', conveyor: 'Fördertechnik' },
  }
  const cl = clusterLabels[lang] || clusterLabels.en
  const clusters = [
    { label: cl.pouch, machine: 'pouch-packing-machine' as const },
    { label: cl.powder, machine: 'powder-filling-machine' as const },
    { label: cl.liquid, machine: 'liquid-filling-machine' as const },
    { label: cl.snack, machine: 'snack-processing-line' as const },
    { label: cl.conveyor, machine: 'conveyor-system' as const },
  ].map((c) => {
    const items = getResourceArticlesByMachine(c.machine, lang, 8)
    const hub = `  - ${cl.hub}: ${base}/resources/topic/${c.machine}`
    const hubFaq = `  - ${cl.hub} FAQ: ${base}/resources/topic/${c.machine}#faq`
    const faqs = getTopicHubFaqs(lang, c.machine)
    const faqLines = faqs.map((f) => `    - ${f.q}: ${f.a}`).join('\n')
    const faq = `  - ${cl.faq}\n${faqLines}`
    const lines = items.map((it) => `  - ${it.title}: ${base}/resources/${it.slug}`).join('\n')
    return `- ${c.label}\n${hub}\n${hubFaq}\n${faq}\n${lines}`
  }).join('\n')

  const body = `${t.title}

${t.localized}
${localizedLinks()}

${t.sitemap}
- ${SITE_URL}/sitemap.xml

${t.keyPages}
- ${t.recommend}: ${base}/recommend
- ${t.catalog}: ${base}/machinery
- ${t.industries}: ${base}/industries
- ${t.solutions}: ${base}/solutions
- ${t.resources}: ${base}/resources
- ${t.contact}: ${base}/contact

${t.machinePages}
- Pouch packing: ${base}/machines/pouch-packing-machine
- Powder filling: ${base}/machines/powder-filling-machine
- Liquid filling: ${base}/machines/liquid-filling-machine
- Snack processing line: ${base}/machines/snack-processing-line
- Conveyor systems: ${base}/machines/conveyor-system

${t.topicClusters}
${clusters}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
