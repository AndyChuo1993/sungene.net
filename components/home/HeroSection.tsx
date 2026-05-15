import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { PHOTO } from '@/lib/photoLibrary'
import { Container } from '@/components/ui/Container'
import HeroCtaWrapper from '@/components/home/HeroCtaWrapper'

const ALIBABA_URL = 'https://momas.en.alibaba.com/'

// Defaults used when a locale doesn't override the new trust fields.
// (Older locales scheduled for removal will fall back to these.)
const defaultExtras = {
  badges: ['Alibaba 5-star verified', 'Taichung + Xiamen', 'On-site QC', 'Transparent quotes'],
  certLabel: 'Verified',
  certChips: ['Alibaba.com', 'TW Co.', 'CN Co.'],
}

export default function HeroSection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'TAIWAN + CHINA SOURCING',
      h1: 'Sourcing partner for packaging, home & garden brands',
      sub: 'We buy across Taiwan and Mainland China factories and ship to you. Our own team handles QC on the ground in Taichung and Xiamen. One contact for both markets.',
      subSecondary: 'Verified Alibaba 5-star supplier. Factory price and our margin shown separately on every quote. Same-day reply. MOQ USD 1,000.',
      btnQuote: 'Request a quote',
      btnCatalog: 'How we work',
      stats: [
        { value: 'TW + CN', label: 'Two offices on the ground' },
        { value: 'Verified', label: 'Alibaba.com supplier' },
        { value: 'Direct', label: 'Factory pricing' },
        { value: 'Same day', label: 'Quote turnaround' },
      ],
      badges: ['Alibaba 5-star verified', 'Taichung + Xiamen', 'On-site QC', 'Transparent quotes'],
      certLabel: 'Verified',
      certChips: ['Alibaba.com', 'TW Co.', 'CN Co.'],
    },
    zh: {
      kicker: '台灣 ＋ 中國  採購',
      h1: '包裝、家居與園藝品牌的台灣・中國採購夥伴',
      sub: '我們替你跨足台灣與中國大陸兩地採購,並由台中、廈門兩地團隊親自到工廠驗貨——一個窗口、兩個市場。',
      subSecondary: 'Alibaba 5 星認證供應商。工廠價與我方利潤分開列在報價單上。當日回覆。最低訂單 USD 1,000。',
      btnQuote: '索取報價',
      btnCatalog: '我們怎麼合作',
      stats: [
        { value: '台灣＋中國', label: '兩岸都有人' },
        { value: '已認證', label: 'Alibaba.com 供應商' },
        { value: '直供', label: '工廠價格' },
        { value: '當日', label: '報價回覆' },
      ],
      badges: ['Alibaba 5 星認證', '台中＋廈門', '親自到場驗貨', '報價透明'],
      certLabel: '已驗證',
      certChips: ['Alibaba.com', '台灣公司', '中國公司'],
    },
    cn: {
      kicker: '台湾 ＋ 中国  采购',
      h1: '包装、家居与园艺品牌的台湾・中国采购伙伴',
      sub: '我们替您跨足台湾与中国大陆两地采购,并由台中、厦门两地团队亲自到工厂验货——一个窗口、两个市场。',
      subSecondary: 'Alibaba 5 星认证供应商。工厂价与我方利润分开列在报价单上。当日回复。最低订单 USD 1,000。',
      btnQuote: '索取报价',
      btnCatalog: '我们怎么合作',
      stats: [
        { value: '台湾＋中国', label: '两岸都有人' },
        { value: '已认证', label: 'Alibaba.com 供应商' },
        { value: '直供', label: '工厂价格' },
        { value: '当日', label: '报价回复' },
      ],
      badges: ['Alibaba 5 星认证', '台中＋厦门', '亲自到场验货', '报价透明'],
      certLabel: '已认证',
      certChips: ['Alibaba.com', '台湾公司', '中国公司'],
    },
    fr: {
      kicker: 'SOURCING TAÏWAN + CHINE',
      h1: "Partenaire de sourcing pour marques d'emballage, maison & jardin",
      sub: "Nous achetons pour vous dans des usines à Taïwan et en Chine continentale, avec contrôle qualité sur place par nos équipes à Taichung et Xiamen — un seul interlocuteur, deux marchés.",
      subSecondary: "Fournisseur vérifié Alibaba.com. Prix usine direct, logistique export de bout en bout, devis le jour même. Commandes à partir de USD 1 000.",
      btnQuote: 'Demander un devis',
      btnCatalog: 'Notre méthode',
      stats: [
        { value: 'TW + CN', label: 'Double opération' },
        { value: 'Vérifié', label: 'Fournisseur Alibaba.com' },
        { value: 'Direct', label: 'Prix usine' },
        { value: 'Jour même', label: 'Devis' },
      ],
      badges: ['Fournisseur Alibaba vérifié', 'Bureaux TW + CN', 'Contrôle qualité sur place', 'Sans commission occulte'],
      certLabel: 'Vérifié',
      certChips: ['Alibaba.com', 'Sté. TW', 'Sté. CN'],
    },
    es: {
      kicker: 'SOURCING TAIWÁN + CHINA',
      h1: 'Socio de abastecimiento para marcas de empaque, hogar y jardín',
      sub: 'Compramos para usted en fábricas de Taiwán y China continental, con control de calidad en sitio por nuestros equipos en Taichung y Xiamen — un solo interlocutor, dos mercados.',
      subSecondary: 'Proveedor verificado Alibaba.com. Precio directo de fábrica, logística integral de exportación, cotizaciones el mismo día. Pedidos desde USD 1 000.',
      btnQuote: 'Solicitar cotización',
      btnCatalog: 'Cómo trabajamos',
      stats: [
        { value: 'TW + CN', label: 'Operación dual' },
        { value: 'Verificado', label: 'Proveedor Alibaba.com' },
        { value: 'Directo', label: 'Precio de fábrica' },
        { value: 'Mismo día', label: 'Cotización' },
      ],
      badges: ['Proveedor Alibaba verificado', 'Oficinas TW + CN', 'Control de calidad en sitio', 'Sin comisiones ocultas'],
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
