import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'

export default function HeroSection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'TRUSTED MACHINERY SUPPLIER FROM TAIWAN',
      h1: 'Industrial Machinery for Packaging, Food Processing & Automation',
      sub: 'We manufacture and export high-performance packaging machines, food processing equipment, filling & sealing systems, and automated production lines to buyers worldwide.',
      btnQuote: 'Get a Free Quote',
      btnCatalog: 'View Machinery Catalog',
      stats: [
        { value: '500+', label: 'Machines Exported' },
        { value: '50+', label: 'Countries Served' },
        { value: '15+', label: 'Years Experience' },
        { value: '24/7', label: 'Technical Support' },
      ]
    },
    cn: {
      kicker: '来自台湾的值得信赖的机械供应商',
      h1: '包装、食品加工与自动化工业机械',
      sub: '我们制造并出口高性能包装机、食品加工设备、灌装封口系统及自动化生产线，面向全球买家。',
      btnQuote: '获取免费报价',
      btnCatalog: '查看机械目录',
      stats: [
        { value: '500+', label: '台设备出口' },
        { value: '50+', label: '个国家服务' },
        { value: '15+', label: '年行业经验' },
        { value: '24/7', label: '技术支持' },
      ]
    },
    zh: {
      kicker: '來自台灣的值得信賴的機械供應商',
      h1: '包裝、食品加工與自動化工業機械',
      sub: '我們製造並出口高性能包裝機、食品加工設備、灌裝封口系統及自動化生產線，面向全球買家。',
      btnQuote: '取得免費報價',
      btnCatalog: '查看機械目錄',
      stats: [
        { value: '500+', label: '台設備出口' },
        { value: '50+', label: '個國家服務' },
        { value: '15+', label: '年行業經驗' },
        { value: '24/7', label: '技術支援' },
      ]
    },
    fr: {
      kicker: 'FOURNISSEUR DE MACHINES DE CONFIANCE DEPUIS TAÏWAN',
      h1: 'Machines industrielles pour l\'emballage, l\'agroalimentaire et l\'automatisation',
      sub: 'Nous fabriquons et exportons des machines d\'emballage haute performance, des équipements de transformation alimentaire, des systèmes de remplissage et de scellage, ainsi que des lignes de production automatisées à destination d\'acheteurs du monde entier.',
      btnQuote: 'Devis gratuit',
      btnCatalog: 'Voir le catalogue machines',
      stats: [
        { value: '500+', label: 'Machines exportées' },
        { value: '50+', label: 'Pays desservis' },
        { value: '15+', label: 'Années d\'expérience' },
        { value: '24/7', label: 'Support technique' },
      ]
    },
    es: {
      kicker: 'PROVEEDOR DE MAQUINARIA DE CONFIANZA DESDE TAIWÁN',
      h1: 'Maquinaria industrial para empaque, procesamiento de alimentos y automatización',
      sub: 'Fabricamos y exportamos máquinas de empaque de alto rendimiento, equipos de procesamiento de alimentos, sistemas de llenado y sellado, y líneas de producción automatizadas para compradores de todo el mundo.',
      btnQuote: 'Cotización gratuita',
      btnCatalog: 'Ver catálogo de maquinaria',
      stats: [
        { value: '500+', label: 'Máquinas exportadas' },
        { value: '50+', label: 'Países atendidos' },
        { value: '15+', label: 'Años de experiencia' },
        { value: '24/7', label: 'Soporte técnico' },
      ]
    },
    pt: {
      kicker: 'FORNECEDOR DE MÁQUINAS DE CONFIANÇA DE TAIWAN',
      h1: 'Máquinas Industriais para Embalagem, Processamento de Alimentos e Automação',
      sub: 'Fabricamos e exportamos máquinas de embalagem de alto desempenho, equipamentos de processamento de alimentos, sistemas de envase e selagem, e linhas de produção automatizadas para compradores em todo o mundo.',
      btnQuote: 'Solicitar Orçamento Gratuito',
      btnCatalog: 'Ver Catálogo de Máquinas',
      stats: [
        { value: '500+', label: 'Máquinas Exportadas' },
        { value: '50+', label: 'Países Atendidos' },
        { value: '15+', label: 'Anos de Experiência' },
        { value: '24/7', label: 'Suporte Técnico' },
      ]
    },
    ko: {
      kicker: '대만의 신뢰할 수 있는 기계 공급업체',
      h1: '포장, 식품 가공 및 자동화를 위한 산업용 기계',
      sub: '고성능 포장기, 식품 가공 장비, 충전 및 밀봉 시스템, 자동화 생산 라인을 제조하여 전 세계 바이어에게 수출합니다.',
      btnQuote: '무료 견적 요청',
      btnCatalog: '기계 카탈로그 보기',
      stats: [
        { value: '500+', label: '수출 기계' },
        { value: '50+', label: '서비스 국가' },
        { value: '15+', label: '년 경력' },
        { value: '24/7', label: '기술 지원' },
      ]
    },
    ja: {
      kicker: '台湾の信頼できる機械サプライヤー',
      h1: '包装・食品加工・自動化のための産業機械',
      sub: '高性能包装機、食品加工設備、充填・シール システム、自動化生産ラインを製造し、世界中のバイヤーに輸出しています。',
      btnQuote: '無料見積もりを取得',
      btnCatalog: '機械カタログを見る',
      stats: [
        { value: '500+', label: '輸出台数' },
        { value: '50+', label: 'カ国に対応' },
        { value: '15+', label: '年の実績' },
        { value: '24/7', label: '技術サポート' },
      ]
    },
    ar: {
      kicker: 'مورد آلات موثوق من تايوان',
      h1: 'آلات صناعية للتعبئة والتغليف ومعالجة الأغذية والأتمتة',
      sub: 'نصنع ونصدر آلات تعبئة وتغليف عالية الأداء، ومعدات معالجة الأغذية، وأنظمة التعبئة والختم، وخطوط الإنتاج الآلية للمشترين حول العالم.',
      btnQuote: 'احصل على عرض سعر مجاني',
      btnCatalog: 'عرض كتالوج الآلات',
      stats: [
        { value: '500+', label: 'آلة مُصدَّرة' },
        { value: '50+', label: 'دولة مخدومة' },
        { value: '15+', label: 'سنة خبرة' },
        { value: '24/7', label: 'دعم فني' },
      ]
    },
    th: {
      kicker: 'ผู้จำหน่ายเครื่องจักรที่เชื่อถือได้จากไต้หวัน',
      h1: 'เครื่องจักรอุตสาหกรรมสำหรับการบรรจุภัณฑ์ การแปรรูปอาหาร และระบบอัตโนมัติ',
      sub: 'เราผลิตและส่งออกเครื่องบรรจุภัณฑ์ประสิทธิภาพสูง อุปกรณ์แปรรูปอาหาร ระบบบรรจุและปิดผนึก และสายการผลิตอัตโนมัติให้กับผู้ซื้อทั่วโลก',
      btnQuote: 'ขอใบเสนอราคาฟรี',
      btnCatalog: 'ดูแคตตาล็อกเครื่องจักร',
      stats: [
        { value: '500+', label: 'เครื่องจักรส่งออก' },
        { value: '50+', label: 'ประเทศที่ให้บริการ' },
        { value: '15+', label: 'ปีประสบการณ์' },
        { value: '24/7', label: 'สนับสนุนทางเทคนิค' },
      ]
    },
    vi: {
      kicker: 'NHÀ CUNG CẤP MÁY MÓC UY TÍN TỪ ĐÀI LOAN',
      h1: 'Máy Móc Công Nghiệp cho Đóng Gói, Chế Biến Thực Phẩm & Tự Động Hóa',
      sub: 'Chúng tôi sản xuất và xuất khẩu máy đóng gói hiệu suất cao, thiết bị chế biến thực phẩm, hệ thống chiết rót và hàn kín, cùng dây chuyền sản xuất tự động cho khách hàng toàn cầu.',
      btnQuote: 'Nhận Báo Giá Miễn Phí',
      btnCatalog: 'Xem Danh Mục Máy Móc',
      stats: [
        { value: '500+', label: 'Máy Đã Xuất Khẩu' },
        { value: '50+', label: 'Quốc Gia Phục Vụ' },
        { value: '15+', label: 'Năm Kinh Nghiệm' },
        { value: '24/7', label: 'Hỗ Trợ Kỹ Thuật' },
      ]
    },
    de: {
      kicker: 'VERTRAUENSWÜRDIGER MASCHINENLIEFERANT AUS TAIWAN',
      h1: 'Industriemaschinen für Verpackung, Lebensmittelverarbeitung & Automatisierung',
      sub: 'Wir fertigen und exportieren Hochleistungs-Verpackungsmaschinen, Lebensmittelverarbeitungsanlagen, Abfüll- und Versiegelungssysteme sowie automatisierte Produktionslinien für Käufer weltweit.',
      btnQuote: 'Kostenloses Angebot anfordern',
      btnCatalog: 'Maschinenkatalog ansehen',
      stats: [
        { value: '500+', label: 'Exportierte Maschinen' },
        { value: '50+', label: 'Belieferte Länder' },
        { value: '15+', label: 'Jahre Erfahrung' },
        { value: '24/7', label: 'Technischer Support' },
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="relative overflow-hidden bg-brand-950 pb-0 pt-12 sm:pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-500/10 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text content */}
          <div className="py-8 lg:py-16">
            <span className="inline-block rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-400">
              {t.kicker}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
              {t.sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/${lang}/contact`} size="lg">
                {t.btnQuote}
              </ButtonLink>
              <ButtonLink href={`/${lang}/machinery`} variant="secondary" size="lg" className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/20">
                {t.btnCatalog}
              </ButtonLink>
            </div>
          </div>

          {/* Hero image - machinery illustration */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-t-2xl">
              <Image
                src="/machinery/hero-main.svg"
                alt="SunGene Industrial Production Line - Packaging Machinery, Conveyor Systems, and Palletizer"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative -mb-px grid grid-cols-2 gap-px rounded-t-2xl bg-white/10 md:grid-cols-4">
          {t.stats.map((stat: any, i: number) => (
            <div key={i} className="bg-brand-900/50 px-6 py-6 text-center backdrop-blur first:rounded-tl-2xl last:rounded-tr-2xl">
              <div className="text-3xl font-bold text-accent-400">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
