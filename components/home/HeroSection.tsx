import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import { PHOTO } from '@/lib/photoLibrary'
import HeroCtaWrapper from '@/components/home/HeroCtaWrapper'

export default function HeroSection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'INDUSTRIAL EQUIPMENT & TECH SOURCING',
      h1: 'Industrial Equipment & Automation Sourcing across Taiwan and China',
      sub: 'We don’t just supply machines — we help you make the right sourcing decisions before you commit capital.',
      subSecondary: 'From packaging systems to automation components, we support sourcing conversations that need stronger fit, compatibility, and long-term reliability.',
      btnQuote: 'Send Your Product → Get Recommendation',
      btnCatalog: 'Browse All Machinery',
      stats: [
        { value: '500+', label: 'Machines Exported' },
        { value: '50+', label: 'Countries Served' },
        { value: '15+', label: 'Years Experience' },
        { value: '24/7', label: 'Technical Support' },
      ]
    },
    cn: {
      kicker: '工业设备与技术采购',
      h1: '台灣与中国工业设备与自动化采购支持',
      sub: '我们不只是供应机器，而是在您投入资本之前，协助您做出更正确的采购判断。',
      subSecondary: '从包装系统到自动化零组件，我们支持更重视适配性、兼容性与长期可靠性的采购沟通。',
      btnQuote: '发送产品信息 → 获取推荐',
      btnCatalog: '浏览所有机械',
      stats: [
        { value: '500+', label: '台设备出口' },
        { value: '50+', label: '个国家服务' },
        { value: '15+', label: '年行业经验' },
        { value: '24/7', label: '技术支持' },
      ]
    },
    zh: {
      kicker: '工業設備與技術採購',
      h1: '台灣與中國工業設備與自動化採購支援',
      sub: '我們不只是供應機器，而是在您投入資本之前，協助您做出更正確的採購判斷。',
      subSecondary: '從包裝系統到自動化零組件，我們支援更重視適配性、相容性與長期可靠性的採購溝通。',
      btnQuote: '發送產品資訊 → 取得推薦',
      btnCatalog: '瀏覽所有機械',
      stats: [
        { value: '500+', label: '台設備出口' },
        { value: '50+', label: '個國家服務' },
        { value: '15+', label: '年行業經驗' },
        { value: '24/7', label: '技術支援' },
      ]
    },
    fr: {
      kicker: 'ÉQUIPEMENTS INDUSTRIELS & SOURCING TECHNIQUE',
      h1: "Sourcing d'équipements industriels et d'automatisation — Taïwan & Chine",
      sub: "Nous ne livrons pas que des machines — nous vous aidons à prendre les bonnes décisions d'achat avant d'engager votre capital.",
      subSecondary: "Des systèmes d'emballage aux composants d'automatisation, nous accompagnons les démarches de sourcing qui exigent compatibilité, intégration et fiabilité sur le long terme.",
      btnQuote: 'Envoyez votre produit → Obtenez une recommandation',
      btnCatalog: 'Parcourir toutes les machines',
      stats: [
        { value: '500+', label: 'Machines exportées' },
        { value: '50+', label: 'Pays desservis' },
        { value: '15+', label: "Années d'expérience" },
        { value: '24/7', label: 'Support technique' },
      ]
    },
    es: {
      kicker: 'EQUIPOS INDUSTRIALES & SOURCING TÉCNICO',
      h1: 'Abastecimiento de equipos industriales y automatización — Taiwán & China',
      sub: 'No solo suministramos máquinas — le ayudamos a tomar las decisiones de abastecimiento correctas antes de comprometer su capital.',
      subSecondary: 'Desde sistemas de empaque hasta componentes de automatización, apoyamos conversaciones de sourcing que exigen compatibilidad, integración y confiabilidad a largo plazo.',
      btnQuote: 'Envíe su producto → Obtenga recomendación',
      btnCatalog: 'Ver toda la maquinaria',
      stats: [
        { value: '500+', label: 'Máquinas exportadas' },
        { value: '50+', label: 'Países atendidos' },
        { value: '15+', label: 'Años de experiencia' },
        { value: '24/7', label: 'Soporte técnico' },
      ]
    },
    pt: {
      kicker: 'EQUIPAMENTOS INDUSTRIAIS & SOURCING TÉCNICO',
      h1: 'Sourcing de equipamentos industriais e automação — Taiwan & China',
      sub: 'Não apenas fornecemos máquinas — ajudamos você a tomar as decisões de abastecimento certas antes de comprometer capital.',
      subSecondary: 'De sistemas de embalagem a componentes de automação, apoiamos conversas de sourcing que exigem compatibilidade, integração e confiabilidade a longo prazo.',
      btnQuote: 'Envie seu produto → Receba recomendação',
      btnCatalog: 'Ver todas as máquinas',
      stats: [
        { value: '500+', label: 'Máquinas Exportadas' },
        { value: '50+', label: 'Países Atendidos' },
        { value: '15+', label: 'Anos de Experiência' },
        { value: '24/7', label: 'Suporte Técnico' },
      ]
    },
    ko: {
      kicker: '산업 장비 & 기술 소싱',
      h1: '대만 & 중국 산업 장비 및 자동화 소싱',
      sub: '단순히 기계를 공급하는 것이 아닙니다 — 자본을 투자하기 전에 올바른 조달 결정을 내릴 수 있도록 도와드립니다.',
      subSecondary: '포장 시스템에서 자동화 부품까지, 적합성·호환성·장기 신뢰성을 중시하는 소싱 상담을 지원합니다.',
      btnQuote: '제품 정보 보내기 → 추천 받기',
      btnCatalog: '전체 기계 보기',
      stats: [
        { value: '500+', label: '수출 기계' },
        { value: '50+', label: '서비스 국가' },
        { value: '15+', label: '년 경력' },
        { value: '24/7', label: '기술 지원' },
      ]
    },
    ja: {
      kicker: '産業機器 & 技術ソーシング',
      h1: '台湾・中国における産業機器・自動化のソーシング',
      sub: '機械を供給するだけでなく — 資本を投じる前に、最適な調達判断を支援します。',
      subSecondary: '包装システムから自動化部品まで、適合性・互換性・長期的信頼性を重視するソーシング相談に対応します。',
      btnQuote: '製品情報を送信 → 提案を受ける',
      btnCatalog: 'すべての機械を見る',
      stats: [
        { value: '500+', label: '輸出台数' },
        { value: '50+', label: 'カ国に対応' },
        { value: '15+', label: '年の実績' },
        { value: '24/7', label: '技術サポート' },
      ]
    },
    ar: {
      kicker: 'معدات صناعية وتوريد تقني',
      h1: 'توريد المعدات الصناعية والأتمتة — تايوان والصين',
      sub: 'لا نوفر الآلات فحسب — نساعدك على اتخاذ قرارات التوريد الصحيحة قبل أن تلتزم برأس المال.',
      subSecondary: 'من أنظمة التعبئة إلى مكونات الأتمتة، ندعم نقاشات التوريد التي تتطلب التوافق والتكامل والموثوقية على المدى البعيد.',
      btnQuote: 'أرسل معلومات منتجك → احصل على توصية',
      btnCatalog: 'تصفح جميع الآلات',
      stats: [
        { value: '500+', label: 'آلة مُصدَّرة' },
        { value: '50+', label: 'دولة مخدومة' },
        { value: '15+', label: 'سنة خبرة' },
        { value: '24/7', label: 'دعم فني' },
      ]
    },
    th: {
      kicker: 'อุปกรณ์อุตสาหกรรม & การจัดหาเชิงเทคนิค',
      h1: 'การจัดหาอุปกรณ์อุตสาหกรรมและระบบอัตโนมัติ — ไต้หวัน & จีน',
      sub: 'เราไม่ได้แค่จัดหาเครื่องจักร — เราช่วยให้คุณตัดสินใจจัดซื้อที่ถูกต้องก่อนที่จะลงทุน',
      subSecondary: 'ตั้งแต่ระบบบรรจุภัณฑ์ไปจนถึงชิ้นส่วนระบบอัตโนมัติ เราสนับสนุนการสนทนาด้านการจัดหาที่ต้องการความเหมาะสม ความเข้ากันได้ และความน่าเชื่อถือในระยะยาว',
      btnQuote: 'ส่งข้อมูลผลิตภัณฑ์ → รับคำแนะนำ',
      btnCatalog: 'ดูเครื่องจักรทั้งหมด',
      stats: [
        { value: '500+', label: 'เครื่องจักรส่งออก' },
        { value: '50+', label: 'ประเทศที่ให้บริการ' },
        { value: '15+', label: 'ปีประสบการณ์' },
        { value: '24/7', label: 'สนับสนุนทางเทคนิค' },
      ]
    },
    vi: {
      kicker: 'THIẾT BỊ CÔNG NGHIỆP & TÌM NGUỒN CUNG KỸ THUẬT',
      h1: 'Tìm nguồn cung thiết bị công nghiệp và tự động hóa — Đài Loan & Trung Quốc',
      sub: 'Chúng tôi không chỉ cung cấp máy móc — chúng tôi giúp bạn đưa ra quyết định tìm nguồn cung đúng đắn trước khi cam kết vốn.',
      subSecondary: 'Từ hệ thống đóng gói đến linh kiện tự động hóa, chúng tôi hỗ trợ các cuộc thảo luận tìm nguồn cung đòi hỏi sự phù hợp, tương thích và độ tin cậy lâu dài.',
      btnQuote: 'Gửi thông tin sản phẩm → Nhận đề xuất',
      btnCatalog: 'Xem tất cả máy móc',
      stats: [
        { value: '500+', label: 'Máy Đã Xuất Khẩu' },
        { value: '50+', label: 'Quốc Gia Phục Vụ' },
        { value: '15+', label: 'Năm Kinh Nghiệm' },
        { value: '24/7', label: 'Hỗ Trợ Kỹ Thuật' },
      ]
    },
    de: {
      kicker: 'INDUSTRIEANLAGEN & TECHNISCHES SOURCING',
      h1: 'Sourcing für Industrieanlagen und Automatisierung — Taiwan & China',
      sub: 'Wir liefern nicht nur Maschinen — wir helfen Ihnen, die richtigen Beschaffungsentscheidungen vor der Kapitalinvestition zu treffen.',
      subSecondary: 'Von Verpackungssystemen bis hin zu Automatisierungskomponenten unterstützen wir Sourcing-Gespräche, die Kompatibilität, Integration und langfristige Zuverlässigkeit erfordern.',
      btnQuote: 'Produkt senden → Empfehlung erhalten',
      btnCatalog: 'Alle Maschinen ansehen',
      stats: [
        { value: '500+', label: 'Exportierte Maschinen' },
        { value: '50+', label: 'Belieferte Länder' },
        { value: '15+', label: 'Jahre Erfahrung' },
        { value: '24/7', label: 'Technischer Support' },
      ]
    }
  }

  const t = content[lang] || content['en']
  const heroPhoto = PHOTO.home.hero

  return (
    <section className="relative overflow-hidden bg-brand-950 min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src={heroPhoto}
          alt="SunGene supply network"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-950/70 to-brand-950/95" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.06]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-600/[0.08] rounded-full blur-[120px] pointer-events-none" />
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

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-8">
              {['CE Docs Support', 'ISO Quality', 'SUS304 Steel', 'Supplier Vetted'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-brand-300">
                  <svg className="h-4 w-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats column — industrial data panel */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {t.stats.map((stat: any, i: number) => (
                <div key={i} className="relative bg-brand-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent-500/30 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent-500 rounded-l-xl" />
                  <div className="text-3xl font-black text-accent-400">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-brand-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Industrial certification bar */}
            <div className="mt-4 bg-brand-900/40 border border-white/10 rounded-xl p-4 flex items-center justify-between">
              <span className="text-xs text-brand-400 uppercase tracking-wider">Certifications</span>
              <div className="flex gap-3">
                {['CE Docs', 'ISO', 'SUS304'].map(c => (
                  <span key={c} className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
