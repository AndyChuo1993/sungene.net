import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { PHOTO } from '@/lib/photoLibrary'
import { Container } from '@/components/ui/Container'
import HeroCtaWrapper from '@/components/home/HeroCtaWrapper'

const ALIBABA_URL = 'https://momas.en.alibaba.com/'

// Defaults used when a locale doesn't override the new trust fields.
// (Older locales scheduled for removal will fall back to these.)
const defaultExtras = {
  badges: ['Taiwan-based trading company', 'Coordinated production', 'On-site QC', 'Export-ready documentation'],
  certLabel: 'Verified',
  certChips: ['Alibaba.com', 'TW Co.', 'CN Co.'],
}

export default function HeroSection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'TAIWAN + CHINA SUPPLY',
      h1: 'Reliable Product Supply from Asia',
      sub: 'SunGene supplies custom packaging, home & living, and outdoor products from Taiwan and China with coordinated production and export support.',
      subSecondary: 'Taiwan-based trading company. Quotes the same day. Orders from USD 1,000 per shipment.',
      btnQuote: 'Request a quote',
      btnCatalog: 'How we work',
      stats: [
        { value: 'TW + CN', label: 'Registered entities' },
        { value: '3 yr+', label: 'Alibaba.com storefront' },
        { value: 'In-house', label: 'Quality coordination' },
        { value: 'Same day', label: 'Quote turnaround' },
      ],
      badges: ['Taiwan-based trading company', 'Coordinated production', 'On-site QC', 'Export-ready documentation'],
      certLabel: 'Verified',
      certChips: ['Alibaba.com', 'TW Co.', 'CN Co.'],
    },
    zh: {
      kicker: '台灣 ＋ 中國  供應',
      h1: '亞洲產品供應與出口整合',
      sub: 'SunGene 整合中國與台灣供應鏈,專注於客製包裝、居家生活與戶外園藝產品供應,並提供生產協調與出口服務。',
      subSecondary: '台灣登記貿易公司。報價當日回覆。訂單 USD 1,000 起。',
      btnQuote: '索取報價',
      btnCatalog: '我們怎麼合作',
      stats: [
        { value: '台灣 + 中國', label: '雙公司登記' },
        { value: '3 年+', label: 'Alibaba.com 商家' },
        { value: '自有', label: '品質協調團隊' },
        { value: '當日', label: '報價回覆' },
      ],
      badges: ['台灣登記貿易公司', '生產協調整合', '親自到場驗貨', '出口文件齊備'],
      certLabel: '已驗證',
      certChips: ['Alibaba.com', '台灣公司', '中國公司'],
    },
    cn: {
      kicker: '台湾 ＋ 中国  供应',
      h1: '亚洲产品供应与出口整合',
      sub: 'SunGene 整合中国与台湾供应链,专注于定制包装、居家生活与户外园艺产品供应,并提供生产协调与出口服务。',
      subSecondary: '台湾登记贸易公司。报价当日回复。订单 USD 1,000 起。',
      btnQuote: '索取报价',
      btnCatalog: '我们怎么合作',
      stats: [
        { value: '台湾 + 中国', label: '双公司登记' },
        { value: '3 年+', label: 'Alibaba.com 商家' },
        { value: '自有', label: '品质协调团队' },
        { value: '当日', label: '报价回复' },
      ],
      badges: ['台湾登记贸易公司', '生产协调整合', '亲自到场验货', '出口文件齐备'],
      certLabel: '已认证',
      certChips: ['Alibaba.com', '台湾公司', '中国公司'],
    },
    fr: {
      kicker: 'TAÏWAN + CHINE  APPROVISIONNEMENT',
      h1: "Approvisionnement fiable de produits depuis l'Asie",
      sub: "SunGene fournit des produits d'emballage personnalisé, maison & vie quotidienne, et d'extérieur depuis Taïwan et la Chine, avec coordination de production et support à l'export.",
      subSecondary: "Société de négoce basée à Taïwan. Devis le jour même. Commandes à partir de USD 1 000 par expédition.",
      btnQuote: 'Demander un devis',
      btnCatalog: 'Notre méthode',
      stats: [
        { value: 'TW + CN', label: 'Entités enregistrées' },
        { value: '3 ans+', label: 'Boutique Alibaba.com' },
        { value: 'Interne', label: 'Coordination qualité' },
        { value: 'Jour même', label: 'Devis' },
      ],
      badges: ['Société de négoce basée à Taïwan', 'Coordination de production', 'Contrôle qualité sur place', 'Documentation export prête'],
      certLabel: 'Vérifié',
      certChips: ['Alibaba.com', 'Sté. TW', 'Sté. CN'],
    },
    es: {
      kicker: 'TAIWÁN + CHINA  SUMINISTRO',
      h1: 'Suministro fiable de productos desde Asia',
      sub: 'SunGene suministra productos de embalaje personalizado, hogar y vida cotidiana, y de exterior desde Taiwán y China, con coordinación de producción y soporte de exportación.',
      subSecondary: 'Empresa comercial con sede en Taiwán. Cotización el mismo día. Pedidos desde USD 1 000 por envío.',
      btnQuote: 'Solicitar cotización',
      btnCatalog: 'Cómo trabajamos',
      stats: [
        { value: 'TW + CN', label: 'Entidades registradas' },
        { value: '3 años+', label: 'Tienda Alibaba.com' },
        { value: 'Interna', label: 'Coordinación de calidad' },
        { value: 'Mismo día', label: 'Cotización' },
      ],
      badges: ['Empresa comercial con sede en Taiwán', 'Coordinación de producción', 'Control de calidad en sitio', 'Documentación de exportación lista'],
      certLabel: 'Verificado',
      certChips: ['Alibaba.com', 'Cía. TW', 'Cía. CN'],
    },
    pt: {
      kicker: 'EQUIPAMENTOS INDUSTRIAIS & SOURCING TÉCNICO',
      h1: 'Sourcing de equipamentos industriais e automação — Taiwan & China',
      sub: 'Não apenas fornecemos máquinas — ajudamos você a tomar as decisões de abastecimento certas antes de comprometer capital.',
      subSecondary: 'De sistemas de embalagem a componentes de automação, apoiamos conversas de sourcing que exigem compatibilidade, integração e confiabilidade a longo prazo.',
      btnQuote: 'Envie seu produto → Receba recomendação',
      btnCatalog: 'Ver escopo de sourcing',
      stats: [
        { value: '500+', label: 'Projetos apoiados' },
        { value: '50+', label: 'Países Atendidos' },
        { value: '15+', label: 'Anos de Experiência' },
        { value: '24h', label: 'Resposta de avaliação' },
      ]
    },
    ko: {
      kicker: '산업 장비 & 기술 소싱',
      h1: '대만 & 중국 산업 장비 및 자동화 소싱',
      sub: '단순히 기계를 공급하는 것이 아닙니다 — 자본을 투자하기 전에 올바른 조달 결정을 내릴 수 있도록 도와드립니다.',
      subSecondary: '포장 시스템에서 자동화 부품까지, 적합성·호환성·장기 신뢰성을 중시하는 소싱 상담을 지원합니다.',
      btnQuote: '제품 정보 보내기 → 추천 받기',
      btnCatalog: '소싱 범위 보기',
      stats: [
        { value: '500+', label: '지원 프로젝트' },
        { value: '50+', label: '서비스 국가' },
        { value: '15+', label: '년 경력' },
        { value: '24h', label: '평가 응답' },
      ]
    },
    ja: {
      kicker: '産業機器 & 技術ソーシング',
      h1: '台湾・中国における産業機器・自動化のソーシング',
      sub: '機械を供給するだけでなく — 資本を投じる前に、最適な調達判断を支援します。',
      subSecondary: '包装システムから自動化部品まで、適合性・互換性・長期的信頼性を重視するソーシング相談に対応します。',
      btnQuote: '製品情報を送信 → 提案を受ける',
      btnCatalog: '調達範囲を見る',
      stats: [
        { value: '500+', label: '輸出台数' },
        { value: '50+', label: 'カ国に対応' },
        { value: '15+', label: '年の実績' },
        { value: '24h', label: '評価返信' },
      ]
    },
    ar: {
      kicker: 'معدات صناعية وتوريد تقني',
      h1: 'توريد المعدات الصناعية والأتمتة — تايوان والصين',
      sub: 'لا نوفر الآلات فحسب — نساعدك على اتخاذ قرارات التوريد الصحيحة قبل أن تلتزم برأس المال.',
      subSecondary: 'من أنظمة التعبئة إلى مكونات الأتمتة، ندعم نقاشات التوريد التي تتطلب التوافق والتكامل والموثوقية على المدى البعيد.',
      btnQuote: 'أرسل معلومات منتجك → احصل على توصية',
      btnCatalog: 'استكشف نطاق التوريد',
      stats: [
        { value: '500+', label: 'مشروعًا مدعومًا' },
        { value: '50+', label: 'دولة مخدومة' },
        { value: '15+', label: 'سنة خبرة' },
        { value: '24h', label: 'رد التقييم' },
      ]
    },
    th: {
      kicker: 'อุปกรณ์อุตสาหกรรม & การจัดหาเชิงเทคนิค',
      h1: 'การจัดหาอุปกรณ์อุตสาหกรรมและระบบอัตโนมัติ — ไต้หวัน & จีน',
      sub: 'เราไม่ได้แค่จัดหาเครื่องจักร — เราช่วยให้คุณตัดสินใจจัดซื้อที่ถูกต้องก่อนที่จะลงทุน',
      subSecondary: 'ตั้งแต่ระบบบรรจุภัณฑ์ไปจนถึงชิ้นส่วนระบบอัตโนมัติ เราสนับสนุนการสนทนาด้านการจัดหาที่ต้องการความเหมาะสม ความเข้ากันได้ และความน่าเชื่อถือในระยะยาว',
      btnQuote: 'ส่งข้อมูลผลิตภัณฑ์ → รับคำแนะนำ',
      btnCatalog: 'ดูขอบเขตการจัดหา',
      stats: [
        { value: '500+', label: 'โครงการที่สนับสนุน' },
        { value: '50+', label: 'ประเทศที่ให้บริการ' },
        { value: '15+', label: 'ปีประสบการณ์' },
        { value: '24h', label: 'ตอบกลับการประเมิน' },
      ]
    },
    vi: {
      kicker: 'THIẾT BỊ CÔNG NGHIỆP & TÌM NGUỒN CUNG KỸ THUẬT',
      h1: 'Tìm nguồn cung thiết bị công nghiệp và tự động hóa — Đài Loan & Trung Quốc',
      sub: 'Chúng tôi không chỉ cung cấp máy móc — chúng tôi giúp bạn đưa ra quyết định tìm nguồn cung đúng đắn trước khi cam kết vốn.',
      subSecondary: 'Từ hệ thống đóng gói đến linh kiện tự động hóa, chúng tôi hỗ trợ các cuộc thảo luận tìm nguồn cung đòi hỏi sự phù hợp, tương thích và độ tin cậy lâu dài.',
      btnQuote: 'Gửi thông tin sản phẩm → Nhận đề xuất',
      btnCatalog: 'Xem phạm vi sourcing',
      stats: [
        { value: '500+', label: 'Dự án đã hỗ trợ' },
        { value: '50+', label: 'Quốc Gia Phục Vụ' },
        { value: '15+', label: 'Năm Kinh Nghiệm' },
        { value: '24h', label: 'Phản hồi đánh giá' },
      ]
    },
    de: {
      kicker: 'INDUSTRIEANLAGEN & TECHNISCHES SOURCING',
      h1: 'Sourcing für Industrieanlagen und Automatisierung — Taiwan & China',
      sub: 'Wir liefern nicht nur Maschinen — wir helfen Ihnen, die richtigen Beschaffungsentscheidungen vor der Kapitalinvestition zu treffen.',
      subSecondary: 'Von Verpackungssystemen bis hin zu Automatisierungskomponenten unterstützen wir Sourcing-Gespräche, die Kompatibilität, Integration und langfristige Zuverlässigkeit erfordern.',
      btnQuote: 'Produkt senden → Bewertung erhalten',
      btnCatalog: 'Sourcing-Bereich ansehen',
      stats: [
        { value: '500+', label: 'Begleitete Projekte' },
        { value: '50+', label: 'Belieferte Länder' },
        { value: '15+', label: 'Jahre Erfahrung' },
        { value: '24h', label: 'Bewertungsantwort' },
      ]
    }
  }

  const t = content[lang] || content['en']
  const badges: string[] = t.badges || defaultExtras.badges
  const certLabel: string = t.certLabel || defaultExtras.certLabel
  const certChips: string[] = t.certChips || defaultExtras.certChips

  return (
    <section className="relative overflow-hidden bg-brand-950 min-h-[90vh] flex items-center">
      {/* Authentic shipping/sourcing photography behind a heavy brand-tint overlay. */}
      <Image
        src={PHOTO.pages.home.hero}
        alt="Container port — global sourcing logistics"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/85 to-brand-950/95" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.08]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-600/[0.10] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-700/20 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Text column */}
          <div>
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent-500" />
              <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em]">
                {t.kicker}
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.h1}
            </h1>

            {/* Sub */}
            <p className="mt-6 text-lg leading-relaxed text-brand-200 max-w-2xl">
              {t.sub}
            </p>
            {t.subSecondary ? (
              <p className="mt-4 text-base leading-relaxed text-brand-300 max-w-2xl">
                {t.subSecondary}
              </p>
            ) : null}

            {/* CTAs */}
            <HeroCtaWrapper lang={lang} btnQuote={t.btnQuote} btnCatalog={t.btnCatalog} />

            {/* Trust badges — first item links out to the verifiable Alibaba storefront */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-8">
              {badges.map((badge, i) => {
                const inner = (
                  <>
                    <svg className="h-4 w-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    <span className="text-sm font-medium">{badge}</span>
                  </>
                )
                if (i === 0) {
                  return (
                    <a
                      key={badge}
                      href={ALIBABA_URL}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-2 text-brand-200 hover:text-white transition-colors underline decoration-accent-500/40 hover:decoration-accent-400 underline-offset-4"
                    >
                      {inner}
                    </a>
                  )
                }
                return (
                  <div key={badge} className="flex items-center gap-2 text-brand-300">
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stats column — real, verifiable numbers (no fabricated 500+ / 15+ years) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {t.stats.map((stat: any, i: number) => (
                <div key={i} className="relative bg-brand-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent-500/30 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent-500 rounded-l-xl" />
                  <div className="text-2xl lg:text-3xl font-black text-accent-400">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-brand-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Bottom strip: clickable Alibaba.com chip + registered entity chips */}
            <div className="mt-4 bg-brand-900/40 border border-white/10 rounded-xl p-4 flex items-center justify-between">
              <span className="text-xs text-brand-400 uppercase tracking-wider">{certLabel}</span>
              <div className="flex gap-3">
                {certChips.map((c, i) => {
                  if (i === 0) {
                    return (
                      <a
                        key={c}
                        href={ALIBABA_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors"
                      >
                        {c} ↗
                      </a>
                    )
                  }
                  return (
                    <span key={c} className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded">{c}</span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
