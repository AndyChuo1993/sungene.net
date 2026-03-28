import { Lang } from '@/lib/i18n'
import InquiryForm from '@/components/InquiryForm'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import JsonLd from '@/components/JsonLd'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(lang)) ? lang : 'en'
  const titles: Record<string,string> = {
    en: 'Get a Free Quote | Contact SunGene Machinery',
    cn: '获取免费报价 | 联系 SunGene 机械',
    zh: '取得免費報價 | 聯絡 SunGene 機械',
    fr: 'Devis gratuit | Contacter SunGene Machinery',
    es: 'Cotización gratuita | Contactar SunGene Machinery',
    pt: 'Orçamento Grátis | Contato SunGene Machinery',
    ko: '무료 견적 받기 | SunGene 기계 문의',
    ja: '無料見積もり | SunGene 機械へのお問い合わせ',
    ar: 'احصل على عرض سعر مجاني | اتصل بـ SunGene',
    th: 'ขอใบเสนอราคาฟรี | ติดต่อ SunGene Machinery',
    vi: 'Nhận Báo Giá Miễn Phí | Liên Hệ SunGene Machinery',
    de: 'Kostenloses Angebot | SunGene Machinery kontaktieren',
  }
  const descriptions: Record<string,string> = {
    en: 'Request a free quote for packaging machinery, food processing equipment, or any industrial machinery. Our engineers respond within 24 hours.',
    cn: '请求包装机械、食品加工设备的免费报价。我们的工程师将在24小时内回复。',
    zh: '請求包裝機械、食品加工設備的免費報價。我們的工程師將在24小時內回覆。',
    fr: 'Demandez un devis gratuit pour machines industrielles. Nos ingénieurs répondent sous 24 heures.',
    es: 'Solicite cotización gratis para maquinaria industrial. Nuestros ingenieros responden en 24 horas.',
    pt: 'Solicite orçamento grátis para máquinas industriais. Nossos engenheiros respondem em 24 horas.',
    ko: '산업 기계 무료 견적을 요청하세요. 24시간 내 응답 보장.',
    ja: '産業機械の無料見積もりをご依頼ください。24時間以内にご返信します。',
    ar: 'اطلب عرض سعر مجاني للآلات الصناعية. مهندسونا يردون خلال 24 ساعة.',
    th: 'ขอใบเสนอราคาฟรีสำหรับเครื่องจักรอุตสาหกรรม วิศวกรตอบกลับภายใน 24 ชั่วโมง',
    vi: 'Yêu cầu báo giá miễn phí cho máy móc công nghiệp. Kỹ sư phản hồi trong 24 giờ.',
    de: 'Kostenloses Angebot für Industriemaschinen. Unsere Ingenieure antworten innerhalb von 24 Stunden.',
  }
  return {
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    keywords: ['SunGene contact', 'packaging machinery quote', 'machinery inquiry Taiwan', 'industrial machinery quotation', 'free machinery quote', 'Taiwan factory contact'],
    alternates: {
      canonical: `https://sungene.net/${l}/contact`,
      languages: {
        'en': 'https://sungene.net/en/contact',
        'zh-TW': 'https://sungene.net/zh/contact',
        'zh-CN': 'https://sungene.net/cn/contact',
        'fr': 'https://sungene.net/fr/contact',
        'es': 'https://sungene.net/es/contact',
        'pt': 'https://sungene.net/pt/contact',
        'ko': 'https://sungene.net/ko/contact',
        'ja': 'https://sungene.net/ja/contact',
        'ar': 'https://sungene.net/ar/contact',
        'th': 'https://sungene.net/th/contact',
        'vi': 'https://sungene.net/vi/contact',
        'de': 'https://sungene.net/de/contact',
        'x-default': 'https://sungene.net/en/contact',
      }
    },
    openGraph: {
      title: titles[l] || titles.en,
      description: descriptions[l] || descriptions.en,
      url: `https://sungene.net/${l}/contact`,
      siteName: 'SunGene Machinery',
      images: [{ url: 'https://sungene.net/og/og.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: titles[l] || titles.en, description: descriptions[l] || descriptions.en, images: ['https://sungene.net/og/og.png'] },
  }
}

type OfficeInfo = { company: string; taxId?: string; address: string; tel: string }
type Offices = { heading: string; twLabel: string; cnLabel: string; tw: OfficeInfo; cn: OfficeInfo }

const officesData: Record<string, Offices> = {
  en: {
    heading: 'Our Offices',
    twLabel: 'Taiwan HQ',
    cnLabel: 'China (Xiamen)',
    tw: { company: 'SunGene Co., LTD.', taxId: 'Tax ID: 94111922', address: '201 Guangfu Rd., Central District, Taichung 40041, Taiwan R.O.C.', tel: '+886 4-3703-2705' },
    cn: { company: 'SunGene Co., LTD.', address: 'Rm. 1001-2, Bldg. A1, Yincheng Zhigu, No. 6788-1 Binhai W. Ave., Tong\'an District, Xiamen, China', tel: '+86 18144132078 (WeChat)' },
  },
  zh: {
    heading: '我們的辦公室',
    twLabel: '台灣總部',
    cnLabel: '廈門辦公室',
    tw: { company: '上瑾錸有限公司', taxId: '統編：94111922', address: '40041 台中市中區光復路201號', tel: '+886 4-3703-2705' },
    cn: { company: '廈門上瑾錸貿易有限公司', address: '廈門市同安區濱海西大道6788-1號銀城智谷A1棟1001單元之二', tel: '+86 18144132078（微信）' },
  },
  cn: {
    heading: '我们的办公室',
    twLabel: '台湾总部',
    cnLabel: '厦门办公室',
    tw: { company: '上瑾錸有限公司', taxId: '统编：94111922', address: '台中市中区光复路201号', tel: '+886 4-3703-2705' },
    cn: { company: '厦门上瑾铼贸易有限公司', address: '厦门市同安区滨海西大道6788-1号银城智谷A1栋1001单元之二', tel: '+86 18144132078（微信）' },
  },
  fr: {
    heading: 'Nos bureaux',
    twLabel: 'Siège social Taïwan',
    cnLabel: 'Bureau Chine (Xiamen)',
    tw: { company: 'SunGene Co., LTD.', taxId: 'Tax ID: 94111922', address: '201 Guangfu Rd., District Central, Taichung 40041, Taïwan R.O.C.', tel: '+886 4-3703-2705' },
    cn: { company: 'SunGene Co., LTD.', address: 'Rm. 1001-2, Bât. A1, Yincheng Zhigu, 6788-1 Ave. Binhai Ouest, District Tong\'an, Xiamen, Chine', tel: '+86 18144132078 (WeChat)' },
  },
  es: {
    heading: 'Nuestras oficinas',
    twLabel: 'Sede Taiwán',
    cnLabel: 'Oficina China (Xiamen)',
    tw: { company: 'SunGene Co., LTD.', taxId: 'Tax ID: 94111922', address: '201 Guangfu Rd., Distrito Central, Taichung 40041, Taiwán R.O.C.', tel: '+886 4-3703-2705' },
    cn: { company: 'SunGene Co., LTD.', address: 'Hab. 1001-2, Edif. A1, Yincheng Zhigu, No. 6788-1 Ave. Binhai Oeste, Dist. Tong\'an, Xiamen, China', tel: '+86 18144132078 (WeChat)' },
  },
  pt: {
    heading: 'Nossos escritórios',
    twLabel: 'Sede Taiwan',
    cnLabel: 'Escritório China (Xiamen)',
    tw: { company: 'SunGene Co., LTD.', taxId: 'Tax ID: 94111922', address: '201 Guangfu Rd., Distrito Central, Taichung 40041, Taiwan R.O.C.', tel: '+886 4-3703-2705' },
    cn: { company: 'SunGene Co., LTD.', address: 'Sala 1001-2, Bloco A1, Yincheng Zhigu, No. 6788-1 Av. Binhai Oeste, Dist. Tong\'an, Xiamen, China', tel: '+86 18144132078 (WeChat)' },
  },
  ko: {
    heading: '사무소',
    twLabel: '대만 본사',
    cnLabel: '중국(샤먼) 사무소',
    tw: { company: 'SunGene Co., LTD.', taxId: 'Tax ID: 94111922', address: '201 Guangfu Rd., 중구, 타이중 40041, 대만', tel: '+886 4-3703-2705' },
    cn: { company: 'SunGene Co., LTD.', address: 'Rm. 1001-2, Bldg. A1, Yincheng Zhigu, Binhai W. Ave. 6788-1, Tong\'an, 샤먼, 중국', tel: '+86 18144132078 (WeChat)' },
  },
  ja: {
    heading: 'オフィス',
    twLabel: '台湾本社',
    cnLabel: '中国（厦門）事務所',
    tw: { company: 'SunGene Co., LTD.', taxId: '統一番号: 94111922', address: '台湾・台中市中区光復路201号 40041', tel: '+886 4-3703-2705' },
    cn: { company: 'SunGene Co., LTD.', address: '中国厦門市同安区濱海西大道6788-1号銀城智谷A1棟1001単元之二', tel: '+86 18144132078 (WeChat)' },
  },
  ar: {
    heading: 'مكاتبنا',
    twLabel: 'المقر الرئيسي – تايوان',
    cnLabel: 'مكتب الصين (شيامن)',
    tw: { company: 'SunGene Co., LTD.', taxId: 'Tax ID: 94111922', address: '201 Guangfu Rd.، المنطقة المركزية، تايتشونغ 40041، تايوان', tel: '+886 4-3703-2705' },
    cn: { company: 'SunGene Co., LTD.', address: 'غرفة 1001-2، مبنى A1، Yincheng Zhigu، شارع Binhai الغربي 6788-1، منطقة Tong\'an، شيامن، الصين', tel: '+86 18144132078 (WeChat)' },
  },
  th: {
    heading: 'สำนักงานของเรา',
    twLabel: 'สำนักงานใหญ่ไต้หวัน',
    cnLabel: 'สำนักงานจีน (เซียเหมิน)',
    tw: { company: 'SunGene Co., LTD.', taxId: 'Tax ID: 94111922', address: '201 Guangfu Rd., เขต Central, ไทจุง 40041, ไต้หวัน', tel: '+886 4-3703-2705' },
    cn: { company: 'SunGene Co., LTD.', address: 'ห้อง 1001-2, อาคาร A1, Yincheng Zhigu, Binhai W. Ave. 6788-1, Tong\'an, เซียเหมิน, จีน', tel: '+86 18144132078 (WeChat)' },
  },
  vi: {
    heading: 'Văn phòng của chúng tôi',
    twLabel: 'Trụ sở Đài Loan',
    cnLabel: 'Văn phòng Trung Quốc (Hạ Môn)',
    tw: { company: 'SunGene Co., LTD.', taxId: 'Tax ID: 94111922', address: '201 Đường Guangfu, Quận Trung, Đài Trung 40041, Đài Loan', tel: '+886 4-3703-2705' },
    cn: { company: 'SunGene Co., LTD.', address: 'P. 1001-2, Tòa A1, Yincheng Zhigu, Đường Binhai W. No. 6788-1, Q. Tong\'an, Hạ Môn, Trung Quốc', tel: '+86 18144132078 (WeChat)' },
  },
  de: {
    heading: 'Unsere Büros',
    twLabel: 'Hauptsitz Taiwan',
    cnLabel: 'Büro China (Xiamen)',
    tw: { company: 'SunGene Co., LTD.', taxId: 'Steuer-ID: 94111922', address: 'Guangfu-Str. 201, Central District, Taichung 40041, Taiwan R.O.C.', tel: '+886 4-3703-2705' },
    cn: { company: 'SunGene Co., LTD.', address: 'Zi. 1001-2, Geb. A1, Yincheng Zhigu, Binhai-W.-Str. 6788-1, Tong\'an, Xiamen, China', tel: '+86 18144132078 (WeChat)' },
  },
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'GET A FREE QUOTE',
      title: 'Tell Us What You Need',
      desc: 'Share your product type, target output, and requirements. Our engineering team will respond with a customized machinery recommendation within 24 hours.',
      infoTitle: 'What to Include',
      formList: [
        'What product do you process or pack?',
        'Target output per hour or per day',
        'Packaging format (bags, bottles, pouches, etc.)',
        'Automation level preference',
        'Destination country & voltage',
        'Budget range (optional)',
      ],
      methodsTitle: 'Quick Contact',
      btn: 'Submit Inquiry',
      responseNote: '⚡ Average response time: within 24 hours',
    },
    cn: {
      kicker: '获取免费报价',
      title: '告诉我们您的需求',
      desc: '分享您的产品类型、目标产能和要求。我们的工程团队将在24小时内提供定制机械建议。',
      infoTitle: '请提供以下信息',
      formList: [
        '您加工或包装什么产品？',
        '每小时或每天的目标产量',
        '包装形式（袋装、瓶装、袋包等）',
        '自动化水平偏好',
        '目的国及电压要求',
        '预算范围（可选）',
      ],
      methodsTitle: '快速联系',
      btn: '提交询价',
      responseNote: '⚡ 平均回复时间：24小时内',
    },
    zh: {
      kicker: '取得免費報價',
      title: '告訴我們您的需求',
      desc: '分享您的產品類型、目標產能和要求。我們的工程團隊將在24小時內提供客製機械建議。',
      infoTitle: '請提供以下資訊',
      formList: [
        '您加工或包裝什麼產品？',
        '每小時或每天的目標產量',
        '包裝形式（袋裝、瓶裝、袋包等）',
        '自動化水平偏好',
        '目的國及電壓要求',
        '預算範圍（可選）',
      ],
      methodsTitle: '快速聯繫',
      btn: '提交詢價',
      responseNote: '⚡ 平均回覆時間：24小時內',
    },
    fr: {
      kicker: 'DEVIS GRATUIT',
      title: 'Décrivez-nous vos besoins',
      desc: 'Partagez votre type de produit, objectif de production et exigences. Notre équipe d\'ingénierie vous répondra avec une recommandation personnalisée sous 24 heures.',
      infoTitle: 'Informations à fournir',
      formList: ['Quel produit transformez-vous ou emballez-vous ?', 'Production cible par heure ou par jour', 'Format d\'emballage (sachets, bouteilles, poches, etc.)', 'Niveau d\'automatisation souhaité', 'Pays de destination et tension', 'Fourchette budgétaire (optionnel)'],
      methodsTitle: 'Contact rapide',
      btn: 'Envoyer la demande',
      responseNote: '⚡ Temps de réponse moyen : moins de 24 heures',
    },
    es: {
      kicker: 'COTIZACIÓN GRATIS',
      title: 'Cuéntenos qué necesita',
      desc: 'Comparta su tipo de producto, producción objetivo y requisitos. Nuestro equipo de ingeniería le proporcionará una recomendación personalizada en 24 horas.',
      infoTitle: 'Información a incluir',
      formList: ['¿Qué producto procesa o empaca?', 'Producción objetivo por hora o por día', 'Formato de empaque (bolsas, botellas, pouches, etc.)', 'Preferencia de nivel de automatización', 'País de destino y voltaje', 'Rango de presupuesto (opcional)'],
      methodsTitle: 'Contacto rápido',
      btn: 'Enviar consulta',
      responseNote: '⚡ Tiempo de respuesta promedio: menos de 24 horas',
    },
    pt: {
      kicker: 'ORÇAMENTO GRÁTIS',
      title: 'Diga-nos o que você precisa',
      desc: 'Compartilhe seu tipo de produto, produção desejada e requisitos. Nossa equipe de engenharia fornecerá uma recomendação personalizada em 24 horas.',
      infoTitle: 'O que incluir',
      formList: ['Qual produto você processa ou embala?', 'Produção desejada por hora ou por dia', 'Formato de embalagem (sacos, garrafas, sachês, etc.)', 'Preferência de nível de automação', 'País de destino e voltagem', 'Faixa de orçamento (opcional)'],
      methodsTitle: 'Contato rápido',
      btn: 'Enviar consulta',
      responseNote: '⚡ Tempo médio de resposta: menos de 24 horas',
    },
    ko: {
      kicker: '무료 견적',
      title: '필요한 사항을 알려주세요',
      desc: '제품 유형, 목표 생산량 및 요구 사항을 공유하세요. 엔지니어링 팀이 24시간 내에 맞춤 기계 추천을 제공합니다.',
      infoTitle: '포함할 정보',
      formList: ['어떤 제품을 가공 또는 포장하시나요?', '시간당 또는 일일 목표 생산량', '포장 형태 (봉지, 병, 파우치 등)', '자동화 수준 선호도', '목적 국가 및 전압', '예산 범위 (선택 사항)'],
      methodsTitle: '빠른 연락',
      btn: '문의 제출',
      responseNote: '⚡ 평균 응답 시간: 24시간 이내',
    },
    ja: {
      kicker: '無料見積もり',
      title: 'ご要望をお聞かせください',
      desc: '製品タイプ、目標生産量、要件をお伝えください。エンジニアリングチームが24時間以内にカスタマイズされた機械の提案をいたします。',
      infoTitle: '記載事項',
      formList: ['加工・包装する製品は何ですか？', '1時間または1日あたりの目標生産量', '包装形態（袋、ボトル、パウチなど）', '自動化レベルの希望', '仕向国と電圧', '予算範囲（任意）'],
      methodsTitle: '直接お問い合わせ',
      btn: 'お問い合わせ送信',
      responseNote: '⚡ 平均返信時間：24時間以内',
    },
    ar: {
      kicker: 'عرض سعر مجاني',
      title: 'أخبرنا بما تحتاجه',
      desc: 'شارك نوع منتجك والإنتاج المستهدف ومتطلباتك. سيقوم فريق الهندسة بتقديم توصية مخصصة للآلات خلال 24 ساعة.',
      infoTitle: 'المعلومات المطلوبة',
      formList: ['ما المنتج الذي تعالجه أو تعبئه؟', 'الإنتاج المستهدف بالساعة أو باليوم', 'شكل التعبئة (أكياس، زجاجات، أكياس مرنة، إلخ)', 'تفضيل مستوى الأتمتة', 'بلد الوجهة والجهد الكهربائي', 'نطاق الميزانية (اختياري)'],
      methodsTitle: 'تواصل سريع',
      btn: 'إرسال الاستفسار',
      responseNote: '⚡ متوسط وقت الرد: أقل من 24 ساعة',
    },
    th: {
      kicker: 'ขอใบเสนอราคาฟรี',
      title: 'บอกเราเกี่ยวกับความต้องการของคุณ',
      desc: 'แจ้งประเภทผลิตภัณฑ์ กำลังการผลิตเป้าหมาย และข้อกำหนด ทีมวิศวกรจะแนะนำเครื่องจักรที่เหมาะสมภายใน 24 ชั่วโมง',
      infoTitle: 'ข้อมูลที่ควรระบุ',
      formList: ['คุณแปรรูปหรือบรรจุผลิตภัณฑ์อะไร?', 'กำลังการผลิตเป้าหมายต่อชั่วโมงหรือต่อวัน', 'รูปแบบบรรจุภัณฑ์ (ถุง, ขวด, ซอง ฯลฯ)', 'ระดับระบบอัตโนมัติที่ต้องการ', 'ประเทศปลายทางและแรงดันไฟฟ้า', 'งบประมาณ (ไม่บังคับ)'],
      methodsTitle: 'ติดต่อด่วน',
      btn: 'ส่งคำถาม',
      responseNote: '⚡ เวลาตอบกลับเฉลี่ย: น้อยกว่า 24 ชั่วโมง',
    },
    vi: {
      kicker: 'BÁO GIÁ MIỄN PHÍ',
      title: 'Cho chúng tôi biết bạn cần gì',
      desc: 'Chia sẻ loại sản phẩm, sản lượng mục tiêu và yêu cầu. Đội ngũ kỹ sư sẽ phản hồi với đề xuất máy móc phù hợp trong 24 giờ.',
      infoTitle: 'Thông tin cần cung cấp',
      formList: ['Bạn chế biến hoặc đóng gói sản phẩm gì?', 'Sản lượng mục tiêu mỗi giờ hoặc mỗi ngày', 'Dạng đóng gói (túi, chai, gói, v.v.)', 'Mức độ tự động hóa mong muốn', 'Quốc gia đích và điện áp', 'Khoảng ngân sách (tùy chọn)'],
      methodsTitle: 'Liên hệ nhanh',
      btn: 'Gửi yêu cầu',
      responseNote: '⚡ Thời gian phản hồi trung bình: dưới 24 giờ',
    },
    de: {
      kicker: 'KOSTENLOSES ANGEBOT',
      title: 'Teilen Sie uns Ihren Bedarf mit',
      desc: 'Teilen Sie Produkttyp, Ausbringung und Anforderungen mit. Unser Ingenieurteam antwortet innerhalb von 24 Stunden mit einer maßgeschneiderten Empfehlung.',
      infoTitle: 'Anzugebende Informationen',
      formList: ['Welches Produkt verarbeiten oder verpacken Sie?', 'Zielausbringung pro Stunde oder Tag', 'Verpackungsformat (Beutel, Flaschen, Pouches, etc.)', 'Gewünschter Automatisierungsgrad', 'Zielland und Spannung', 'Budgetrahmen (optional)'],
      methodsTitle: 'Schnellkontakt',
      btn: 'Anfrage senden',
      responseNote: '⚡ Durchschnittliche Antwortzeit: unter 24 Stunden',
    },
  }

  const t = content[lang] || content['en']
  const offices = officesData[lang] || officesData['en']

  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 py-16 sm:py-20">
        <Container>
          <span className="text-sm font-bold uppercase tracking-wider text-accent-400">{t.kicker}</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{t.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">{t.desc}</p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <Container className="max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-5">

            {/* ── Left column ── */}
            <div className="space-y-6 lg:col-span-2">

              {/* Dual Office Card */}
              <div className="rounded-2xl bg-brand-950 p-6 text-white overflow-hidden">
                <h2 className="mb-5 text-xs font-bold uppercase tracking-widest text-accent-400">{offices.heading}</h2>
                <div className="grid gap-6 sm:grid-cols-2">

                  {/* Taiwan */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-base">🇹🇼</span>
                      <span className="text-sm font-bold text-white">{offices.twLabel}</span>
                    </div>
                    <p className="text-sm font-semibold text-accent-300">{offices.tw.company}</p>
                    {offices.tw.taxId && (
                      <p className="text-xs text-gray-500 mt-0.5">{offices.tw.taxId}</p>
                    )}
                    <p className="mt-2 text-xs leading-relaxed text-gray-300">{offices.tw.address}</p>
                    <p className="mt-2 text-xs text-gray-400">📞 {offices.tw.tel}</p>
                  </div>

                  {/* Xiamen */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-base">🇨🇳</span>
                      <span className="text-sm font-bold text-white">{offices.cnLabel}</span>
                    </div>
                    <p className="text-sm font-semibold text-accent-300">{offices.cn.company}</p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-300">{offices.cn.address}</p>
                    <p className="mt-2 text-xs text-gray-400">📞 {offices.cn.tel}</p>
                  </div>
                </div>

                {/* Contact methods */}
                <div className="mt-5 pt-5 border-t border-white/10 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{t.methodsTitle}</p>
                  <a href="mailto:contact@sungene.net" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent-300 transition-colors">
                    <span className="text-base">✉️</span>
                    <span>contact@sungene.net</span>
                  </a>
                  <a href="https://wa.me/8618144132078" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent-300 transition-colors">
                    <span className="text-base">💬</span>
                    <span>WhatsApp: +86 18144132078</span>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-base">🟩</span>
                    <span>LINE: @sungene</span>
                  </div>
                </div>
              </div>

              {/* What to Include */}
              <Card className="p-6">
                <h2 className="text-base font-bold text-gray-950">{t.infoTitle}</h2>
                <ul className="mt-4 space-y-3">
                  {t.formList.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Response badge */}
              <div className="rounded-xl bg-accent-50 px-6 py-4 text-center">
                <p className="text-sm font-semibold text-accent-700">{t.responseNote}</p>
              </div>
            </div>

            {/* ── Right column — Form ── */}
            <div className="lg:col-span-3">
              <Card className="p-8 shadow-elev-2">
                <InquiryForm
                  lang={lang}
                  type="Contact"
                  submitLabel={t.btn}
                  fields={[
                    { name: 'name', label: ({ en: 'Your Name', cn: '联系人姓名', zh: '聯絡人姓名', fr: 'Votre nom', es: 'Su nombre', pt: 'Seu nome', ko: '이름', ja: 'お名前', ar: 'الاسم', th: 'ชื่อของคุณ', vi: 'Họ tên', de: 'Ihr Name' } as Record<string,string>)[lang] || 'Your Name', type: 'text', required: true, autoComplete: 'name' },
                    { name: 'email', label: ({ en: 'Email Address', cn: '邮箱地址', zh: '電子郵件', fr: 'Adresse e-mail', es: 'Correo electrónico', pt: 'Endereço de e-mail', ko: '이메일 주소', ja: 'メールアドレス', ar: 'البريد الإلكتروني', th: 'ที่อยู่อีเมล', vi: 'Địa chỉ email', de: 'E-Mail-Adresse' } as Record<string,string>)[lang] || 'Email Address', type: 'email', required: true, autoComplete: 'email' },
                    { name: 'phone', label: ({ en: 'Phone Number', cn: '手机号码', zh: '手機號碼', fr: 'Numéro de téléphone', es: 'Número de teléfono', pt: 'Número de telefone', ko: '전화번호', ja: '電話番号', ar: 'رقم الهاتف', th: 'หมายเลขโทรศัพท์', vi: 'Số điện thoại', de: 'Telefonnummer' } as Record<string,string>)[lang] || 'Phone Number', type: 'phone-intl', required: true },
                    { name: 'company', label: ({ en: 'Company Name', cn: '公司名称', zh: '公司名稱', fr: 'Nom de l\'entreprise', es: 'Nombre de la empresa', pt: 'Nome da empresa', ko: '회사명', ja: '会社名', ar: 'اسم الشركة', th: 'ชื่อบริษัท', vi: 'Tên công ty', de: 'Firmenname' } as Record<string,string>)[lang] || 'Company Name', type: 'text', autoComplete: 'organization' },
                    { name: 'product', label: ({ en: 'Product / Application', cn: '产品 / 应用', zh: '產品 / 應用', fr: 'Produit / Application', es: 'Producto / Aplicación', pt: 'Produto / Aplicação', ko: '제품 / 용도', ja: '製品 / 用途', ar: 'المنتج / التطبيق', th: 'ผลิตภัณฑ์ / การใช้งาน', vi: 'Sản phẩm / Ứng dụng', de: 'Produkt / Anwendung' } as Record<string,string>)[lang] || 'Product / Application', type: 'text', required: true, placeholder: ({ en: 'e.g., Powder packaging, Liquid filling, Food processing...', cn: '例如：粉末包装、液体灌装、食品加工...', zh: '例如：粉末包裝、液體灌裝、食品加工...', fr: 'ex. Emballage poudre, Remplissage liquide...', es: 'ej. Empaque de polvo, Llenado de líquidos...', pt: 'ex. Embalagem de pó, Envase de líquidos...', ko: '예: 분말 포장, 액체 충전...', ja: '例：粉末包装、液体充填...', ar: 'مثال: تعبئة مسحوق، تعبئة سوائل...', th: 'เช่น บรรจุผง, บรรจุของเหลว...', vi: 'VD: Đóng gói bột, Chiết rót chất lỏng...', de: 'z.B. Pulververpackung, Flüssigkeitsabfüllung...' } as Record<string,string>)[lang] || '' },
                    { name: 'capacity', label: ({ en: 'Target Output', cn: '目标产能', zh: '目標產能', fr: 'Production cible', es: 'Producción objetivo', pt: 'Produção desejada', ko: '목표 생산량', ja: '目標生産量', ar: 'الإنتاج المستهدف', th: 'กำลังการผลิตเป้าหมาย', vi: 'Sản lượng mục tiêu', de: 'Zielausbringung' } as Record<string,string>)[lang] || 'Target Output', type: 'text', placeholder: ({ en: 'e.g., 30 bags/min, 1000 bottles/hour', cn: '例如：30袋/分钟, 1000瓶/小时', zh: '例如：30袋/分鐘, 1000瓶/小時', fr: 'ex. 30 sachets/min, 1000 bouteilles/heure', es: 'ej. 30 bolsas/min, 1000 botellas/hora', pt: 'ex. 30 sacos/min, 1000 garrafas/hora' } as Record<string,string>)[lang] || '' },
                    { name: 'country', label: ({ en: 'Destination Country', cn: '目标国家', zh: '目標國家', fr: 'Pays de destination', es: 'País de destino', pt: 'País de destino', ko: '목적 국가', ja: '仕向国', ar: 'بلد الوجهة', th: 'ประเทศปลายทาง', vi: 'Quốc gia đích', de: 'Zielland' } as Record<string,string>)[lang] || 'Destination Country', type: 'text' },
                    { name: 'voltage', label: ({ en: 'Voltage (if known)', cn: '电压（如已知）', zh: '電壓（如已知）', fr: 'Tension (si connue)', es: 'Voltaje (si lo sabe)', pt: 'Voltagem (se conhecida)', ko: '전압 (알고 있는 경우)', ja: '電圧（わかる場合）', ar: 'الجهد (إن عُرف)', th: 'แรงดันไฟฟ้า (ถ้าทราบ)', vi: 'Điện áp (nếu biết)', de: 'Spannung (falls bekannt)' } as Record<string,string>)[lang] || 'Voltage (if known)', type: 'text', placeholder: 'e.g., 220V/380V, 50Hz/60Hz' },
                    { name: 'budget', label: ({ en: 'Budget Range (USD)', cn: '预算范围（USD）', zh: '預算範圍（USD）', fr: 'Fourchette budgétaire (USD)', es: 'Rango de presupuesto (USD)', pt: 'Faixa de orçamento (USD)', ko: '예산 범위 (USD)', ja: '予算範囲（USD）', ar: 'نطاق الميزانية (USD)', th: 'งบประมาณ (USD)', vi: 'Khoảng ngân sách (USD)', de: 'Budgetrahmen (USD)' } as Record<string,string>)[lang] || 'Budget Range (USD)', type: 'text' },
                    { name: 'message', label: ({ en: 'Additional Details', cn: '补充说明', zh: '補充說明', fr: 'Détails supplémentaires', es: 'Detalles adicionales', pt: 'Detalhes adicionais', ko: '추가 사항', ja: '補足事項', ar: 'تفاصيل إضافية', th: 'รายละเอียดเพิ่มเติม', vi: 'Chi tiết bổ sung', de: 'Zusätzliche Details' } as Record<string,string>)[lang] || 'Additional Details', type: 'textarea', required: true, rows: 4, placeholder: ({ en: 'Tell us more about your requirements, current production setup, or any specific features you need...', cn: '请告诉我们更多关于您的需求、当前生产配置或所需特定功能...', zh: '請告訴我們更多關於您的需求、目前生產配置或所需特定功能...', fr: 'Dites-nous en plus sur vos besoins, configuration de production ou fonctionnalités spécifiques...', es: 'Cuéntenos más sobre sus requisitos, configuración de producción o características específicas...', pt: 'Conte-nos mais sobre seus requisitos, configuração de produção ou recursos específicos...', ko: '요구 사항, 현재 생산 설정 또는 필요한 특정 기능에 대해 알려주세요...', ja: 'ご要件、現在の生産設備、必要な特定機能について詳しくお聞かせください...', ar: 'أخبرنا المزيد عن متطلباتك وإعداد الإنتاج...', th: 'บอกเราเพิ่มเติมเกี่ยวกับความต้องการของคุณ...', vi: 'Cho chúng tôi biết thêm về yêu cầu của bạn...', de: 'Erzählen Sie uns mehr über Ihre Anforderungen...' } as Record<string,string>)[lang] || '' },
                  ]}
                />
              </Card>
            </div>

          </div>
        </Container>
      </section>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SunGene Co., LTD.',
        url: 'https://sungene.net',
        logo: 'https://sungene.net/logo/sungene.png',
        email: 'contact@sungenelite.com',
        location: [
          {
            '@type': 'Place',
            name: 'SunGene Taiwan HQ',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '201 Guangfu Rd., Central District',
              addressLocality: 'Taichung',
              postalCode: '40041',
              addressCountry: 'TW',
            },
            telephone: '+886-4-3703-2705',
          },
          {
            '@type': 'Place',
            name: 'SunGene Xiamen Office',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Rm. 1001-2, Bldg. A1, Yincheng Zhigu, No. 6788-1 Binhai W. Ave., Tong\'an District',
              addressLocality: 'Xiamen',
              addressCountry: 'CN',
            },
            telephone: '+86-18144132078',
          },
        ],
      }} />
    </>
  )
}
