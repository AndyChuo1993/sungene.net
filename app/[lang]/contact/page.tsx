import { Lang } from '@/lib/i18n'
import InquiryForm from '@/components/InquiryForm'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(lang)) ? lang : 'en'
  const titles = {
    en: 'Get a Free Quote | Contact SunGene Machinery',
    cn: '获取免费报价 | 联系 SunGene 机械',
    zh: '取得免費報價 | 聯繫 SunGene 機械',
    fr: 'Devis gratuit | Contacter SunGene Machinery',
    es: 'Cotización gratuita | Contactar SunGene Machinery',
    pt: 'Orçamento Grátis | Contato SunGene Machinery',
    ko: '무료 견적 받기 | SunGene 기계 문의',
    ja: '無料見積もり | SunGene 機械へのお問い合わせ',
    ar: 'احصل على عرض سعر مجاني | اتصل بـ SunGene Machinery',
    th: 'ขอใบเสนอราคาฟรี | ติดต่อ SunGene Machinery',
    vi: 'Nhận Báo Giá Miễn Phí | Liên Hệ SunGene Machinery',
    de: 'Kostenloses Angebot | SunGene Machinery kontaktieren',
  }
  const descriptions = {
    en: 'Request a free quote for packaging machinery, food processing equipment, or any industrial machinery. Our engineers will respond within 24 hours with a customized recommendation.',
    cn: '请求包装机械、食品加工设备或任何工业机械的免费报价。我们的工程师将在24小时内提供定制建议。',
    zh: '請求包裝機械、食品加工設備或任何工業機械的免費報價。我們的工程師將在24小時內提供客製建議。',
    fr: 'Demandez un devis gratuit pour des machines d\'emballage, des équipements de transformation alimentaire ou toute machine industrielle. Nos ingénieurs vous répondront sous 24 heures avec une recommandation personnalisée.',
    es: 'Solicite una cotización gratuita para maquinaria de empaque, equipos de procesamiento de alimentos o cualquier maquinaria industrial. Nuestros ingenieros responderán en 24 horas con una recomendación personalizada.',
    pt: 'Solicite um orçamento gratuito para máquinas de embalagem, equipamentos de processamento de alimentos ou qualquer máquina industrial. Nossos engenheiros responderão em 24 horas com uma recomendação personalizada.',
    ko: '포장 기계, 식품 가공 장비 또는 산업 기계에 대한 무료 견적을 요청하세요. 엔지니어가 24시간 이내에 맞춤 추천을 제공합니다.',
    ja: '包装機械、食品加工装置、その他産業機械の無料見積もりをご依頼ください。エンジニアが24時間以内にカスタマイズされた提案をお届けします。',
    ar: 'اطلب عرض سعر مجاني لآلات التعبئة والتغليف أو معدات تصنيع الأغذية أو أي آلات صناعية. سيرد مهندسونا خلال 24 ساعة بتوصية مخصصة.',
    th: 'ขอใบเสนอราคาฟรีสำหรับเครื่องจักรบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร หรือเครื่องจักรอุตสาหกรรมใดๆ วิศวกรของเราจะตอบกลับภายใน 24 ชั่วโมงพร้อมคำแนะนำที่ปรับแต่ง',
    vi: 'Yêu cầu báo giá miễn phí cho máy đóng gói, thiết bị chế biến thực phẩm hoặc máy móc công nghiệp. Kỹ sư của chúng tôi sẽ phản hồi trong vòng 24 giờ với đề xuất phù hợp.',
    de: 'Fordern Sie ein kostenloses Angebot für Verpackungsmaschinen, Lebensmittelverarbeitungsanlagen oder andere Industriemaschinen an. Unsere Ingenieure antworten innerhalb von 24 Stunden mit einer maßgeschneiderten Empfehlung.',
  }
  return { title: (titles as Record<string,string>)[l] || titles.en, description: (descriptions as Record<string,string>)[l] || descriptions.en }
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'GET A FREE QUOTE',
      title: 'Tell Us What You Need',
      desc: 'Share your product type, target output, and requirements. Our engineering team will analyze your needs and provide a customized machinery recommendation within 24 hours.',
      infoTitle: 'What to Include',
      formList: [
        'What product do you process or pack?',
        'Target output per hour or per day',
        'Packaging format (bags, bottles, pouches, etc.)',
        'Automation level preference',
        'Destination country & voltage',
        'Budget range (optional)',
      ],
      contactTitle: 'Direct Contact',
      contacts: [
        { label: 'Email', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: 'Location', value: 'Taichung, Taiwan' },
        { label: 'Hours', value: 'Mon-Fri 9:00-18:00 (GMT+8)' },
      ],
      btn: 'Submit Inquiry',
      responseNote: 'Average response time: < 24 hours',
    },
    cn: {
      kicker: '获取免费报价',
      title: '告诉我们您的需求',
      desc: '分享您的产品类型、目标产能和要求。我们的工程团队将在24小时内分析您的需求并提供定制机械建议。',
      infoTitle: '请提供以下信息',
      formList: [
        '您加工或包装什么产品？',
        '每小时或每天的目标产量',
        '包装形式（袋装、瓶装、袋包等）',
        '自动化水平偏好',
        '目的国及电压要求',
        '预算范围（可选）',
      ],
      contactTitle: '直接联系',
      contacts: [
        { label: '邮箱', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: '地址', value: '台湾台中' },
        { label: '工作时间', value: '周一至周五 9:00-18:00 (GMT+8)' },
      ],
      btn: '提交询价',
      responseNote: '平均回复时间：< 24小时',
    },
    zh: {
      kicker: '取得免費報價',
      title: '告訴我們您的需求',
      desc: '分享您的產品類型、目標產能和要求。我們的工程團隊將在24小時內分析您的需求並提供客製機械建議。',
      infoTitle: '請提供以下資訊',
      formList: [
        '您加工或包裝什麼產品？',
        '每小時或每天的目標產量',
        '包裝形式（袋裝、瓶裝、袋包等）',
        '自動化水平偏好',
        '目的國及電壓要求',
        '預算範圍（可選）',
      ],
      contactTitle: '直接聯繫',
      contacts: [
        { label: '信箱', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: '地址', value: '台灣台中' },
        { label: '工作時間', value: '週一至週五 9:00-18:00 (GMT+8)' },
      ],
      btn: '提交詢價',
      responseNote: '平均回覆時間：< 24小時',
    },
    fr: {
      kicker: 'DEVIS GRATUIT',
      title: 'Décrivez-nous vos besoins',
      desc: 'Partagez votre type de produit, objectif de production et exigences. Notre équipe d\'ingénierie analysera vos besoins et vous fournira une recommandation machine personnalisée sous 24 heures.',
      infoTitle: 'Informations à fournir',
      formList: ['Quel produit transformez-vous ou emballez-vous ?', 'Production cible par heure ou par jour', 'Format d\'emballage (sachets, bouteilles, poches, etc.)', 'Préférence de niveau d\'automatisation', 'Pays de destination et tension', 'Fourchette budgétaire (optionnel)'],
      contactTitle: 'Contact direct',
      contacts: [{ label: 'Email', value: 'contact@sungene.net' }, { label: 'WhatsApp', value: '+886 4-3703-2705' }, { label: 'Adresse', value: 'Taichung, Taïwan' }, { label: 'Horaires', value: 'Lun-Ven 9h-18h (GMT+8)' }],
      btn: 'Envoyer la demande',
      responseNote: 'Temps de réponse moyen : < 24 heures',
    },
    es: {
      kicker: 'COTIZACIÓN GRATIS',
      title: 'Cuéntenos qué necesita',
      desc: 'Comparta su tipo de producto, producción objetivo y requisitos. Nuestro equipo de ingeniería analizará sus necesidades y le proporcionará una recomendación de maquinaria personalizada en 24 horas.',
      infoTitle: 'Información a incluir',
      formList: ['¿Qué producto procesa o empaca?', 'Producción objetivo por hora o por día', 'Formato de empaque (bolsas, botellas, pouches, etc.)', 'Preferencia de nivel de automatización', 'País de destino y voltaje', 'Rango de presupuesto (opcional)'],
      contactTitle: 'Contacto directo',
      contacts: [{ label: 'Email', value: 'contact@sungene.net' }, { label: 'WhatsApp', value: '+886 4-3703-2705' }, { label: 'Ubicación', value: 'Taichung, Taiwán' }, { label: 'Horario', value: 'Lun-Vie 9:00-18:00 (GMT+8)' }],
      btn: 'Enviar consulta',
      responseNote: 'Tiempo de respuesta promedio: < 24 horas',
    },
    pt: {
      kicker: 'ORÇAMENTO GRÁTIS',
      title: 'Diga-nos o que você precisa',
      desc: 'Compartilhe seu tipo de produto, produção desejada e requisitos. Nossa equipe de engenharia analisará suas necessidades e fornecerá uma recomendação personalizada de máquinas em 24 horas.',
      infoTitle: 'O que incluir',
      formList: [
        'Qual produto você processa ou embala?',
        'Produção desejada por hora ou por dia',
        'Formato de embalagem (sacos, garrafas, sachês, etc.)',
        'Preferência de nível de automação',
        'País de destino e voltagem',
        'Faixa de orçamento (opcional)',
      ],
      contactTitle: 'Contato direto',
      contacts: [
        { label: 'E-mail', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: 'Localização', value: 'Taichung, Taiwan' },
        { label: 'Horário', value: 'Seg-Sex 9:00-18:00 (GMT+8)' },
      ],
      btn: 'Enviar consulta',
      responseNote: 'Tempo médio de resposta: < 24 horas',
    },
    ko: {
      kicker: '무료 견적',
      title: '필요한 사항을 알려주세요',
      desc: '제품 유형, 목표 생산량 및 요구 사항을 공유하세요. 엔지니어링 팀이 24시간 내에 맞춤 기계 추천을 제공합니다.',
      infoTitle: '포함할 정보',
      formList: [
        '어떤 제품을 가공 또는 포장하시나요?',
        '시간당 또는 일일 목표 생산량',
        '포장 형태 (봉지, 병, 파우치 등)',
        '자동화 수준 선호도',
        '목적 국가 및 전압',
        '예산 범위 (선택 사항)',
      ],
      contactTitle: '직접 연락',
      contacts: [
        { label: '이메일', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: '위치', value: '타이중, 대만' },
        { label: '업무시간', value: '월-금 9:00-18:00 (GMT+8)' },
      ],
      btn: '문의 제출',
      responseNote: '평균 응답 시간: 24시간 이내',
    },
    ja: {
      kicker: '無料見積もり',
      title: 'ご要望をお聞かせください',
      desc: '製品タイプ、目標生産量、要件をお伝えください。エンジニアリングチームが24時間以内にお客様のニーズを分析し、カスタマイズされた機械の提案をいたします。',
      infoTitle: '記載事項',
      formList: [
        '加工・包装する製品は何ですか？',
        '1時間または1日あたりの目標生産量',
        '包装形態（袋、ボトル、パウチなど）',
        '自動化レベルの希望',
        '仕向国と電圧',
        '予算範囲（任意）',
      ],
      contactTitle: '直接お問い合わせ',
      contacts: [
        { label: 'メール', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: '所在地', value: '台中、台湾' },
        { label: '営業時間', value: '月〜金 9:00-18:00 (GMT+8)' },
      ],
      btn: 'お問い合わせ送信',
      responseNote: '平均返信時間：24時間以内',
    },
    ar: {
      kicker: 'عرض سعر مجاني',
      title: 'أخبرنا بما تحتاجه',
      desc: 'شارك نوع منتجك والإنتاج المستهدف ومتطلباتك. سيقوم فريق الهندسة لدينا بتحليل احتياجاتك وتقديم توصية مخصصة للآلات خلال 24 ساعة.',
      infoTitle: 'المعلومات المطلوبة',
      formList: [
        'ما المنتج الذي تعالجه أو تعبئه؟',
        'الإنتاج المستهدف بالساعة أو باليوم',
        'شكل التعبئة (أكياس، زجاجات، أكياس مرنة، إلخ)',
        'تفضيل مستوى الأتمتة',
        'بلد الوجهة والجهد الكهربائي',
        'نطاق الميزانية (اختياري)',
      ],
      contactTitle: 'اتصال مباشر',
      contacts: [
        { label: 'البريد الإلكتروني', value: 'contact@sungene.net' },
        { label: 'واتساب', value: '+886 4-3703-2705' },
        { label: 'الموقع', value: 'تايتشونغ، تايوان' },
        { label: 'ساعات العمل', value: 'الإثنين-الجمعة 9:00-18:00 (GMT+8)' },
      ],
      btn: 'إرسال الاستفسار',
      responseNote: 'متوسط وقت الرد: أقل من 24 ساعة',
    },
    th: {
      kicker: 'ขอใบเสนอราคาฟรี',
      title: 'บอกเราเกี่ยวกับความต้องการของคุณ',
      desc: 'แจ้งประเภทผลิตภัณฑ์ กำลังการผลิตเป้าหมาย และข้อกำหนดของคุณ ทีมวิศวกรของเราจะวิเคราะห์ความต้องการและให้คำแนะนำเครื่องจักรที่เหมาะสมภายใน 24 ชั่วโมง',
      infoTitle: 'ข้อมูลที่ควรระบุ',
      formList: [
        'คุณแปรรูปหรือบรรจุผลิตภัณฑ์อะไร?',
        'กำลังการผลิตเป้าหมายต่อชั่วโมงหรือต่อวัน',
        'รูปแบบบรรจุภัณฑ์ (ถุง, ขวด, ซอง ฯลฯ)',
        'ระดับระบบอัตโนมัติที่ต้องการ',
        'ประเทศปลายทางและแรงดันไฟฟ้า',
        'งบประมาณ (ไม่บังคับ)',
      ],
      contactTitle: 'ติดต่อโดยตรง',
      contacts: [
        { label: 'อีเมล', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: 'ที่ตั้ง', value: 'ไถจง, ไต้หวัน' },
        { label: 'เวลาทำการ', value: 'จันทร์-ศุกร์ 9:00-18:00 (GMT+8)' },
      ],
      btn: 'ส่งคำถาม',
      responseNote: 'เวลาตอบกลับเฉลี่ย: น้อยกว่า 24 ชั่วโมง',
    },
    vi: {
      kicker: 'BÁO GIÁ MIỄN PHÍ',
      title: 'Cho chúng tôi biết bạn cần gì',
      desc: 'Chia sẻ loại sản phẩm, sản lượng mục tiêu và yêu cầu của bạn. Đội ngũ kỹ sư sẽ phân tích nhu cầu và cung cấp đề xuất máy móc phù hợp trong 24 giờ.',
      infoTitle: 'Thông tin cần cung cấp',
      formList: [
        'Bạn chế biến hoặc đóng gói sản phẩm gì?',
        'Sản lượng mục tiêu mỗi giờ hoặc mỗi ngày',
        'Dạng đóng gói (túi, chai, gói, v.v.)',
        'Mức độ tự động hóa mong muốn',
        'Quốc gia đích và điện áp',
        'Khoảng ngân sách (tùy chọn)',
      ],
      contactTitle: 'Liên hệ trực tiếp',
      contacts: [
        { label: 'Email', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: 'Địa điểm', value: 'Đài Trung, Đài Loan' },
        { label: 'Giờ làm việc', value: 'Thứ 2-6 9:00-18:00 (GMT+8)' },
      ],
      btn: 'Gửi yêu cầu',
      responseNote: 'Thời gian phản hồi trung bình: dưới 24 giờ',
    },
    de: {
      kicker: 'KOSTENLOSES ANGEBOT',
      title: 'Teilen Sie uns Ihren Bedarf mit',
      desc: 'Teilen Sie Ihren Produkttyp, die gewünschte Ausbringung und Ihre Anforderungen mit. Unser Ingenieurteam analysiert Ihre Bedürfnisse und liefert innerhalb von 24 Stunden eine maßgeschneiderte Maschinenempfehlung.',
      infoTitle: 'Anzugebende Informationen',
      formList: [
        'Welches Produkt verarbeiten oder verpacken Sie?',
        'Zielausbringung pro Stunde oder Tag',
        'Verpackungsformat (Beutel, Flaschen, Pouches, etc.)',
        'Gewünschter Automatisierungsgrad',
        'Zielland und Spannung',
        'Budgetrahmen (optional)',
      ],
      contactTitle: 'Direktkontakt',
      contacts: [
        { label: 'E-Mail', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: 'Standort', value: 'Taichung, Taiwan' },
        { label: 'Geschäftszeiten', value: 'Mo-Fr 9:00-18:00 (GMT+8)' },
      ],
      btn: 'Anfrage senden',
      responseNote: 'Durchschnittliche Antwortzeit: < 24 Stunden',
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 pt-8 pb-16">
        <Container>
          <span className="text-sm font-bold uppercase tracking-wider text-accent-400">{t.kicker}</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{t.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">{t.desc}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* Left side - info */}
            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-lg font-bold text-gray-950">{t.infoTitle}</h2>
                <ul className="mt-5 space-y-3">
                  {t.formList.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8">
                <h2 className="text-lg font-bold text-gray-950">{t.contactTitle}</h2>
                <ul className="mt-5 space-y-4">
                  {t.contacts.map((c: { label: string; value: string }, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-sm font-semibold text-gray-500 w-20">{c.label}</span>
                      <span className="text-sm text-gray-900">{c.value}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="rounded-xl bg-accent-50 p-4 text-center">
                <p className="text-sm font-semibold text-accent-700">{t.responseNote}</p>
              </div>
            </div>

            {/* Right side - form */}
            <Card className="p-8">
              <InquiryForm
                lang={lang}
                type="Contact"
                submitLabel={t.btn}
                fields={[
                  { name: 'name', label: ({ en: 'Your Name', cn: '联系人姓名', zh: '聯絡人姓名', fr: 'Votre nom', es: 'Su nombre', pt: 'Seu nome', ko: '이름', ja: 'お名前', ar: 'الاسم', th: 'ชื่อของคุณ', vi: 'Họ tên', de: 'Ihr Name' } as Record<string,string>)[lang] || 'Your Name', type: 'text', required: true, autoComplete: 'name' },
                  { name: 'email', label: ({ en: 'Email Address', cn: '邮箱地址', zh: '電子郵件', fr: 'Adresse e-mail', es: 'Correo electrónico', pt: 'Endereço de e-mail', ko: '이메일 주소', ja: 'メールアドレス', ar: 'البريد الإلكتروني', th: 'ที่อยู่อีเมล', vi: 'Địa chỉ email', de: 'E-Mail-Adresse' } as Record<string,string>)[lang] || 'Email Address', type: 'email', required: true, autoComplete: 'email' },
                  { name: 'company', label: ({ en: 'Company Name', cn: '公司名称', zh: '公司名稱', fr: 'Nom de l\'entreprise', es: 'Nombre de la empresa', pt: 'Nome da empresa', ko: '회사명', ja: '会社名', ar: 'اسم الشركة', th: 'ชื่อบริษัท', vi: 'Tên công ty', de: 'Firmenname' } as Record<string,string>)[lang] || 'Company Name', type: 'text', autoComplete: 'organization' },
                  { name: 'product', label: ({ en: 'Product / Application', cn: '产品 / 应用', zh: '產品 / 應用', fr: 'Produit / Application', es: 'Producto / Aplicación', pt: 'Produto / Aplicação', ko: '제품 / 용도', ja: '製品 / 用途', ar: 'المنتج / التطبيق', th: 'ผลิตภัณฑ์ / การใช้งาน', vi: 'Sản phẩm / Ứng dụng', de: 'Produkt / Anwendung' } as Record<string,string>)[lang] || 'Product / Application', type: 'text', required: true, placeholder: ({ en: 'e.g., Powder packaging, Liquid filling, Food processing...', fr: 'ex. Emballage poudre, Remplissage liquide, Transformation alimentaire...', es: 'ej. Empaque de polvo, Llenado de líquidos, Procesamiento de alimentos...', pt: 'ex. Embalagem de pó, Envase de líquidos, Processamento de alimentos...', ko: '예: 분말 포장, 액체 충전, 식품 가공...', ja: '例：粉末包装、液体充填、食品加工...', ar: 'مثال: تعبئة مسحوق، تعبئة سوائل، تصنيع أغذية...', th: 'เช่น บรรจุผง, บรรจุของเหลว, แปรรูปอาหาร...', vi: 'VD: Đóng gói bột, Chiết rót chất lỏng, Chế biến thực phẩm...', de: 'z.B. Pulververpackung, Flüssigkeitsabfüllung, Lebensmittelverarbeitung...' } as Record<string,string>)[lang] || '' },
                  { name: 'capacity', label: ({ en: 'Target Output', cn: '目标产能', zh: '目標產能', fr: 'Production cible', es: 'Producción objetivo', pt: 'Produção desejada', ko: '목표 생산량', ja: '目標生産量', ar: 'الإنتاج المستهدف', th: 'กำลังการผลิตเป้าหมาย', vi: 'Sản lượng mục tiêu', de: 'Zielausbringung' } as Record<string,string>)[lang] || 'Target Output', type: 'text', placeholder: ({ en: 'e.g., 30 bags/min, 1000 bottles/hour...', fr: 'ex. 30 sachets/min, 1000 bouteilles/heure...', es: 'ej. 30 bolsas/min, 1000 botellas/hora...', pt: 'ex. 30 sacos/min, 1000 garrafas/hora...', ko: '예: 30봉/분, 1000병/시간...', ja: '例：30袋/分、1000本/時間...', ar: 'مثال: 30 كيس/دقيقة، 1000 زجاجة/ساعة...', th: 'เช่น 30 ถุง/นาที, 1000 ขวด/ชั่วโมง...', vi: 'VD: 30 túi/phút, 1000 chai/giờ...', de: 'z.B. 30 Beutel/Min, 1000 Flaschen/Stunde...' } as Record<string,string>)[lang] || '' },
                  { name: 'country', label: ({ en: 'Destination Country', cn: '使用国家', zh: '使用國家', fr: 'Pays de destination', es: 'País de destino', pt: 'País de destino', ko: '목적 국가', ja: '仕向国', ar: 'بلد الوجهة', th: 'ประเทศปลายทาง', vi: 'Quốc gia đích', de: 'Zielland' } as Record<string,string>)[lang] || 'Destination Country', type: 'text' },
                  { name: 'voltage', label: ({ en: 'Voltage (if known)', cn: '电压（如已知）', zh: '電壓（如已知）', fr: 'Tension (si connue)', es: 'Voltaje (si lo sabe)', pt: 'Voltagem (se conhecida)', ko: '전압 (알고 있는 경우)', ja: '電圧（わかる場合）', ar: 'الجهد الكهربائي (إن عُرف)', th: 'แรงดันไฟฟ้า (ถ้าทราบ)', vi: 'Điện áp (nếu biết)', de: 'Spannung (falls bekannt)' } as Record<string,string>)[lang] || 'Voltage (if known)', type: 'text', placeholder: ({ en: 'e.g., 220V/380V/480V, 50Hz/60Hz', fr: 'ex. 220V/380V/480V, 50Hz/60Hz', es: 'ej. 220V/380V/480V, 50Hz/60Hz' } as Record<string,string>)[lang] || '' },
                  { name: 'budget', label: ({ en: 'Budget Range (USD)', cn: '预算范围（美元）', zh: '預算範圍（美元）', fr: 'Fourchette budgétaire (USD)', es: 'Rango de presupuesto (USD)', pt: 'Faixa de orçamento (USD)', ko: '예산 범위 (USD)', ja: '予算範囲（USD）', ar: 'نطاق الميزانية (USD)', th: 'งบประมาณ (USD)', vi: 'Khoảng ngân sách (USD)', de: 'Budgetrahmen (USD)' } as Record<string,string>)[lang] || 'Budget Range (USD)', type: 'text' },
                  { name: 'message', label: ({ en: 'Additional Details', cn: '补充说明', zh: '補充說明', fr: 'Détails supplémentaires', es: 'Detalles adicionales', pt: 'Detalhes adicionais', ko: '추가 사항', ja: '補足事項', ar: 'تفاصيل إضافية', th: 'รายละเอียดเพิ่มเติม', vi: 'Chi tiết bổ sung', de: 'Zusätzliche Details' } as Record<string,string>)[lang] || 'Additional Details', type: 'textarea', rows: 5, placeholder: ({ en: 'Tell us more about your requirements, current production setup, or any specific features you need...', fr: 'Dites-nous en plus sur vos besoins, votre configuration de production actuelle ou les fonctionnalités spécifiques recherchées...', es: 'Cuéntenos más sobre sus requisitos, configuración de producción actual o características específicas que necesita...', pt: 'Conte-nos mais sobre seus requisitos, configuração de produção atual ou recursos específicos que precisa...', ko: '요구 사항, 현재 생산 설정 또는 필요한 특정 기능에 대해 자세히 알려주세요...', ja: 'ご要件、現在の生産設備、必要な特定機能について詳しくお聞かせください...', ar: 'أخبرنا المزيد عن متطلباتك وإعداد الإنتاج الحالي أو أي ميزات محددة تحتاجها...', th: 'บอกเราเพิ่มเติมเกี่ยวกับความต้องการ การตั้งค่าการผลิตปัจจุบัน หรือคุณสมบัติเฉพาะที่คุณต้องการ...', vi: 'Cho chúng tôi biết thêm về yêu cầu, cấu hình sản xuất hiện tại hoặc tính năng cụ thể bạn cần...', de: 'Erzählen Sie uns mehr über Ihre Anforderungen, aktuelle Produktionsanlage oder spezielle Funktionen, die Sie benötigen...' } as Record<string,string>)[lang] || '' },
                ]}
              />
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
