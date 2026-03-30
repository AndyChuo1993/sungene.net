'use client'

import { useState, useRef } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { Lang } from '@/lib/i18n'
import {
  trackRecommendStart,
  trackRecommendSubmit,
  trackFormSubmitSuccess,
  trackFormSubmitFail,
} from '@/lib/analytics'

interface RecommendFormProps {
  lang: Lang
}

const inputClass =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30'

const selectClass =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 appearance-none cursor-pointer'

// ── i18n strings ──────────────────────────────────────────────────────────────

const sectionTitles: Record<string, { s1: string; s2: string; submit: string }> = {
  en: {
    s1: 'Your Product Requirements',
    s2: 'Your Contact & Project Details',
    submit: 'Get My Machine Recommendation',
  },
  cn: {
    s1: '您的产品要求',
    s2: '您的联系方式与项目详情',
    submit: '获取我的机械推荐',
  },
  zh: {
    s1: '您的產品要求',
    s2: '您的聯絡方式與專案詳情',
    submit: '取得我的機械推薦',
  },
  fr: {
    s1: 'Vos exigences produit',
    s2: 'Vos coordonnées et détails du projet',
    submit: 'Obtenir ma recommandation de machine',
  },
  es: {
    s1: 'Requisitos de su producto',
    s2: 'Sus datos de contacto y proyecto',
    submit: 'Obtener mi recomendación de máquina',
  },
  pt: {
    s1: 'Requisitos do seu produto',
    s2: 'Seus dados de contato e detalhes do projeto',
    submit: 'Receber recomendação de máquina',
  },
  ko: {
    s1: '제품 요구사항',
    s2: '연락처 및 프로젝트 세부 정보',
    submit: '기계 추천 받기',
  },
  ja: {
    s1: '製品要件',
    s2: 'お客様情報とプロジェクト詳細',
    submit: '機械の推薦を受ける',
  },
  ar: {
    s1: 'متطلبات منتجك',
    s2: 'بيانات الاتصال وتفاصيل المشروع',
    submit: 'احصل على توصيتي للآلة',
  },
  th: {
    s1: 'ข้อกำหนดผลิตภัณฑ์ของคุณ',
    s2: 'ข้อมูลติดต่อและรายละเอียดโครงการ',
    submit: 'รับคำแนะนำเครื่องจักร',
  },
  vi: {
    s1: 'Yêu cầu sản phẩm của bạn',
    s2: 'Thông tin liên hệ và chi tiết dự án',
    submit: 'Nhận đề xuất máy',
  },
  de: {
    s1: 'Ihre Produktanforderungen',
    s2: 'Ihre Kontaktdaten und Projektdetails',
    submit: 'Maschinenempfehlung erhalten',
  },
}

function getSectionTitles(lang: Lang) {
  return sectionTitles[lang] ?? sectionTitles.en
}

const successMessages: Record<string, { title: string; body: string; also: string; anotherBtn: string }> = {
  en: {
    title: 'Request received',
    body: 'Our engineers will review your requirements and reply within 1–2 business days.',
    also: 'To help us give a precise recommendation, please also share: product photos, existing packaging samples, or spec sheets.',
    anotherBtn: 'Submit another request',
  },
  cn: {
    title: '请求已收到',
    body: '我们的工程师将审核您的需求，并在1-2个工作日内回复。',
    also: '为了给您更精准的推荐，请同时提供：产品照片、现有包装样品或规格说明书。',
    anotherBtn: '提交新的请求',
  },
  zh: {
    title: '請求已收到',
    body: '我們的工程師將審核您的需求，並在1-2個工作日內回覆。',
    also: '為了提供更精準的推薦，請同時提供：產品照片、現有包裝樣品或規格說明書。',
    anotherBtn: '提交新的請求',
  },
  fr: {
    title: 'Demande reçue',
    body: 'Nos ingénieurs examineront vos exigences et répondront dans 1 à 2 jours ouvrés.',
    also: 'Pour nous aider à formuler une recommandation précise, partagez également : photos produit, échantillons d\'emballage existants ou fiches techniques.',
    anotherBtn: 'Soumettre une autre demande',
  },
  es: {
    title: 'Solicitud recibida',
    body: 'Nuestros ingenieros revisarán sus requisitos y responderán en 1-2 días hábiles.',
    also: 'Para ayudarnos a dar una recomendación precisa, comparta también: fotos del producto, muestras de embalaje existentes o fichas técnicas.',
    anotherBtn: 'Enviar otra solicitud',
  },
  pt: {
    title: 'Pedido recebido',
    body: 'Nossos engenheiros analisarão seus requisitos e responderão em 1 a 2 dias úteis.',
    also: 'Para uma recomendação mais precisa, compartilhe também: fotos do produto, amostras de embalagem existentes ou fichas técnicas.',
    anotherBtn: 'Enviar outra solicitação',
  },
  ko: {
    title: '요청이 접수되었습니다',
    body: '엔지니어가 요구사항을 검토하고 1-2 영업일 내에 답변 드립니다.',
    also: '정확한 추천을 위해 제품 사진, 기존 포장 샘플 또는 사양서도 함께 보내주세요.',
    anotherBtn: '새 요청 제출',
  },
  ja: {
    title: 'リクエストを受け付けました',
    body: 'エンジニアがご要件を確認し、1〜2営業日以内にご返信します。',
    also: '正確な推薦のために、製品写真、既存パッケージサンプル、またはスペックシートもお送りください。',
    anotherBtn: '別のリクエストを送信',
  },
  ar: {
    title: 'تم استلام طلبك',
    body: 'سيراجع مهندسونا متطلباتك ويردون خلال 1-2 يوم عمل.',
    also: 'لمساعدتنا في تقديم توصية دقيقة، شارك أيضاً: صور المنتج، عينات التغليف الحالية، أو الكتالوجات التقنية.',
    anotherBtn: 'إرسال طلب آخر',
  },
  th: {
    title: 'ได้รับคำขอแล้ว',
    body: 'วิศวกรจะตรวจสอบข้อกำหนดและตอบกลับภายใน 1-2 วันทำการ',
    also: 'เพื่อให้ได้คำแนะนำที่แม่นยำ กรุณาแนบรูปผลิตภัณฑ์ ตัวอย่างบรรจุภัณฑ์ หรือสเปคชีต',
    anotherBtn: 'ส่งคำขอใหม่',
  },
  vi: {
    title: 'Đã nhận yêu cầu',
    body: 'Kỹ sư sẽ xem xét yêu cầu và phản hồi trong 1-2 ngày làm việc.',
    also: 'Để nhận đề xuất chính xác hơn, vui lòng cung cấp thêm: ảnh sản phẩm, mẫu bao bì hiện tại hoặc tài liệu kỹ thuật.',
    anotherBtn: 'Gửi yêu cầu mới',
  },
  de: {
    title: 'Anfrage eingegangen',
    body: 'Unsere Ingenieure werden Ihre Anforderungen prüfen und innerhalb von 1–2 Werktagen antworten.',
    also: 'Für eine präzisere Empfehlung senden Sie gerne: Produktfotos, vorhandene Verpackungsmuster oder Datenblätter.',
    anotherBtn: 'Weitere Anfrage senden',
  },
}

function getSuccessMsg(lang: Lang) {
  return successMessages[lang] ?? successMessages.en
}

const privacyNote: Record<string, string> = {
  en: 'Your information is used only to process your inquiry. We never share or sell your data.',
  cn: '您的信息仅用于处理您的咨询。我们从不共享或出售您的数据。',
  zh: '您的資訊僅用於處理您的詢問。我們絕不共享或出售您的資料。',
  fr: 'Vos informations servent uniquement à traiter votre demande. Nous ne les partageons ni ne les vendons jamais.',
  es: 'Su información se usa únicamente para procesar su consulta. Nunca compartimos ni vendemos sus datos.',
  pt: 'Suas informações são usadas apenas para processar sua solicitação. Nunca compartilhamos ou vendemos seus dados.',
  ko: '입력하신 정보는 문의 처리에만 사용되며, 절대 공유하거나 판매하지 않습니다.',
  ja: 'ご入力いただいた情報はお問い合わせ対応のためにのみ使用し、共有または販売することはありません。',
  ar: 'تُستخدم معلوماتك فقط لمعالجة طلبك. نحن لا نشارك بياناتك ولا نبيعها مطلقًا.',
  th: 'ข้อมูลของคุณใช้เพื่อดำเนินการตามคำขอเท่านั้น เราไม่แบ่งปันหรือขายข้อมูลของคุณ',
  vi: 'Thông tin của bạn chỉ được dùng để xử lý yêu cầu. Chúng tôi không chia sẻ hoặc bán dữ liệu của bạn.',
  de: 'Ihre Informationen werden nur zur Bearbeitung Ihrer Anfrage verwendet. Wir geben Ihre Daten niemals weiter oder verkaufen sie.',
}

function getPrivacy(lang: Lang) {
  return privacyNote[lang] ?? privacyNote.en
}

type Option = { value: string; label: string }

const uiText: Record<string, Record<string, string>> = {
  en: {
    selectPlaceholder: '— Select —',
    sending: 'Sending…',
    sendFiles: 'Send Files / Additional Info',
    errorFallback: 'Something went wrong. Please try again or email contact@sungene.net.',
    productType: 'Product Type *',
    productState: 'Product State *',
    packagingFormat: 'Target Packaging Format *',
    fillWeight: 'Fill Weight or Volume (e.g. 50g, 500ml)',
    targetOutput: 'Target Output *',
    automationLevel: 'Automation Level *',
    fullLine: 'Do you need a full production line?',
    name: 'Your Name *',
    company: 'Company / Factory Name',
    email: 'Email *',
    phone: 'WhatsApp / Phone',
    country: 'Country *',
    voltage: 'Local Voltage & Frequency',
    materialReq: 'Material Requirement',
    budget: 'Estimated Budget (USD)',
    timeline: 'When do you need the machine?',
    message: 'Additional Requirements or Questions',
    fillWeightPh: 'e.g. 250g or 500ml',
    phonePh: '+1 555 123 4567',
    countryPh: 'e.g. Mexico, Nigeria, Vietnam',
    messagePh: 'Describe your product, current pain points, or any specific requirements...',
  },
  cn: {
    selectPlaceholder: '— 请选择 —',
    sending: '发送中…',
    sendFiles: '发送文件 / 补充信息',
    errorFallback: '发生错误。请重试或邮件联系 contact@sungene.net。',
    productType: '产品类型 *',
    productState: '产品状态 *',
    packagingFormat: '目标包装形式 *',
    fillWeight: '充填重量或容量（例如 50g、500ml）',
    targetOutput: '目标产能 *',
    automationLevel: '自动化程度 *',
    fullLine: '是否需要整条生产线？',
    name: '您的姓名 *',
    company: '公司 / 工厂名称',
    email: '邮箱 *',
    phone: 'WhatsApp / 电话',
    country: '国家 *',
    voltage: '当地电压与频率',
    materialReq: '材质要求',
    budget: '预估预算（美元）',
    timeline: '您何时需要机器？',
    message: '其他需求或问题',
    fillWeightPh: '例如 250g 或 500ml',
    phonePh: '+86 138 0000 0000',
    countryPh: '例如 墨西哥、尼日利亚、越南',
    messagePh: '描述您的产品、当前痛点或任何特殊要求…',
  },
  zh: {
    selectPlaceholder: '— 請選擇 —',
    sending: '傳送中…',
    sendFiles: '傳送檔案 / 補充資訊',
    errorFallback: '發生錯誤。請重試或寄信至 contact@sungene.net。',
    productType: '產品類型 *',
    productState: '產品狀態 *',
    packagingFormat: '目標包裝形式 *',
    fillWeight: '充填重量或容量（例如 50g、500ml）',
    targetOutput: '目標產能 *',
    automationLevel: '自動化程度 *',
    fullLine: '是否需要整條生產線？',
    name: '您的姓名 *',
    company: '公司 / 工廠名稱',
    email: 'Email *',
    phone: 'WhatsApp / 電話',
    country: '國家 *',
    voltage: '當地電壓與頻率',
    materialReq: '材質要求',
    budget: '預估預算（美元）',
    timeline: '您何時需要機器？',
    message: '其他需求或問題',
    fillWeightPh: '例如 250g 或 500ml',
    phonePh: '+886 9xx xxx xxx',
    countryPh: '例如 墨西哥、奈及利亞、越南',
    messagePh: '描述您的產品、目前痛點或任何特殊需求…',
  },
  fr: {
    selectPlaceholder: '— Sélectionner —',
    sending: 'Envoi…',
    sendFiles: 'Envoyer des fichiers / infos',
    errorFallback: 'Une erreur est survenue. Réessayez ou envoyez un e-mail à contact@sungene.net.',
    productType: 'Type de produit *',
    productState: 'État du produit *',
    packagingFormat: 'Format d’emballage cible *',
    fillWeight: 'Poids ou volume (ex. 50g, 500ml)',
    targetOutput: 'Cadence cible *',
    automationLevel: 'Niveau d’automatisation *',
    fullLine: 'Avez-vous besoin d’une ligne complète ?',
    name: 'Votre nom *',
    company: 'Société / Usine',
    email: 'E-mail *',
    phone: 'WhatsApp / Téléphone',
    country: 'Pays *',
    voltage: 'Tension & fréquence locales',
    materialReq: 'Exigence matériau',
    budget: 'Budget estimé (USD)',
    timeline: 'Quand en avez-vous besoin ?',
    message: 'Exigences ou questions supplémentaires',
    fillWeightPh: 'ex. 250g ou 500ml',
    phonePh: '+33 6 12 34 56 78',
    countryPh: 'ex. Mexique, Nigeria, Vietnam',
    messagePh: 'Décrivez votre produit, vos contraintes, ou des exigences spécifiques…',
  },
  es: {
    selectPlaceholder: '— Seleccionar —',
    sending: 'Enviando…',
    sendFiles: 'Enviar archivos / info',
    errorFallback: 'Ocurrió un error. Intente de nuevo o escriba a contact@sungene.net.',
    productType: 'Tipo de producto *',
    productState: 'Estado del producto *',
    packagingFormat: 'Formato de empaque objetivo *',
    fillWeight: 'Peso o volumen (ej. 50g, 500ml)',
    targetOutput: 'Producción objetivo *',
    automationLevel: 'Nivel de automatización *',
    fullLine: '¿Necesita una línea completa?',
    name: 'Su nombre *',
    company: 'Empresa / Fábrica',
    email: 'Correo *',
    phone: 'WhatsApp / Teléfono',
    country: 'País *',
    voltage: 'Voltaje y frecuencia',
    materialReq: 'Requisito de material',
    budget: 'Presupuesto estimado (USD)',
    timeline: '¿Cuándo necesita la máquina?',
    message: 'Requisitos o preguntas adicionales',
    fillWeightPh: 'ej. 250g o 500ml',
    phonePh: '+34 600 000 000',
    countryPh: 'ej. México, Nigeria, Vietnam',
    messagePh: 'Describa su producto, problemas actuales o requisitos específicos…',
  },
  pt: {
    selectPlaceholder: '— Selecionar —',
    sending: 'Enviando…',
    sendFiles: 'Enviar arquivos / info',
    errorFallback: 'Algo deu errado. Tente novamente ou envie e-mail para contact@sungene.net.',
    productType: 'Tipo de produto *',
    productState: 'Estado do produto *',
    packagingFormat: 'Formato de embalagem *',
    fillWeight: 'Peso ou volume (ex.: 50g, 500ml)',
    targetOutput: 'Produção desejada *',
    automationLevel: 'Nível de automação *',
    fullLine: 'Você precisa de uma linha completa?',
    name: 'Seu nome *',
    company: 'Empresa / Fábrica',
    email: 'E-mail *',
    phone: 'WhatsApp / Telefone',
    country: 'País *',
    voltage: 'Tensão e frequência',
    materialReq: 'Requisito de material',
    budget: 'Orçamento estimado (USD)',
    timeline: 'Quando você precisa da máquina?',
    message: 'Requisitos ou dúvidas adicionais',
    fillWeightPh: 'ex.: 250g ou 500ml',
    phonePh: '+55 11 90000-0000',
    countryPh: 'ex.: México, Nigéria, Vietnã',
    messagePh: 'Descreva seu produto, dores atuais ou requisitos específicos…',
  },
  ko: {
    selectPlaceholder: '— 선택 —',
    sending: '전송 중…',
    sendFiles: '파일/추가 정보 보내기',
    errorFallback: '오류가 발생했습니다. 다시 시도하거나 contact@sungene.net 으로 이메일 주세요.',
    productType: '제품 유형 *',
    productState: '제품 상태 *',
    packagingFormat: '목표 포장 형식 *',
    fillWeight: '충진 중량/용량 (예: 50g, 500ml)',
    targetOutput: '목표 생산량 *',
    automationLevel: '자동화 수준 *',
    fullLine: '전체 생산 라인이 필요하신가요?',
    name: '이름 *',
    company: '회사 / 공장명',
    email: '이메일 *',
    phone: 'WhatsApp / 전화',
    country: '국가 *',
    voltage: '현지 전압/주파수',
    materialReq: '재질 요구사항',
    budget: '예상 예산(USD)',
    timeline: '기계가 필요한 시기',
    message: '추가 요구사항/질문',
    fillWeightPh: '예: 250g 또는 500ml',
    phonePh: '+82 10-0000-0000',
    countryPh: '예: 멕시코, 나이지리아, 베트남',
    messagePh: '제품, 현재 문제점, 또는 특별 요구사항을 적어주세요…',
  },
  ja: {
    selectPlaceholder: '— 選択 —',
    sending: '送信中…',
    sendFiles: '資料/追加情報を送る',
    errorFallback: 'エラーが発生しました。再試行するか contact@sungene.net へメールしてください。',
    productType: '製品タイプ *',
    productState: '製品状態 *',
    packagingFormat: '希望包装形式 *',
    fillWeight: '充填重量/容量（例：50g、500ml）',
    targetOutput: '目標生産量 *',
    automationLevel: '自動化レベル *',
    fullLine: '生産ライン一式が必要ですか？',
    name: 'お名前 *',
    company: '会社 / 工場名',
    email: 'メール *',
    phone: 'WhatsApp / 電話',
    country: '国 *',
    voltage: '電圧・周波数',
    materialReq: '材質要件',
    budget: '概算予算（USD）',
    timeline: '導入希望時期',
    message: '追加要件・質問',
    fillWeightPh: '例：250g または 500ml',
    phonePh: '+81 90-0000-0000',
    countryPh: '例：メキシコ、ナイジェリア、ベトナム',
    messagePh: '製品、課題、特別要件などをご記入ください…',
  },
  ar: {
    selectPlaceholder: '— اختر —',
    sending: 'جارٍ الإرسال…',
    sendFiles: 'إرسال ملفات / معلومات إضافية',
    errorFallback: 'حدث خطأ. حاول مرة أخرى أو أرسل بريدًا إلى contact@sungene.net.',
    productType: 'نوع المنتج *',
    productState: 'حالة المنتج *',
    packagingFormat: 'تنسيق التغليف المستهدف *',
    fillWeight: 'وزن/حجم التعبئة (مثال: 50g، 500ml)',
    targetOutput: 'الإنتاج المستهدف *',
    automationLevel: 'مستوى الأتمتة *',
    fullLine: 'هل تحتاج إلى خط إنتاج كامل؟',
    name: 'الاسم *',
    company: 'الشركة / المصنع',
    email: 'البريد الإلكتروني *',
    phone: 'واتساب / هاتف',
    country: 'الدولة *',
    voltage: 'الجهد والتردد المحلي',
    materialReq: 'متطلبات المواد',
    budget: 'الميزانية التقديرية (USD)',
    timeline: 'متى تحتاج الآلة؟',
    message: 'متطلبات أو أسئلة إضافية',
    fillWeightPh: 'مثال: 250g أو 500ml',
    phonePh: '+966 5xxxxxxxx',
    countryPh: 'مثال: المكسيك، نيجيريا، فيتنام',
    messagePh: 'صف منتجك أو التحديات الحالية أو أي متطلبات خاصة…',
  },
  th: {
    selectPlaceholder: '— เลือก —',
    sending: 'กำลังส่ง…',
    sendFiles: 'ส่งไฟล์ / ข้อมูลเพิ่มเติม',
    errorFallback: 'เกิดข้อผิดพลาด โปรดลองอีกครั้งหรืออีเมล contact@sungene.net',
    productType: 'ประเภทสินค้า *',
    productState: 'สถานะสินค้า *',
    packagingFormat: 'รูปแบบบรรจุภัณฑ์ *',
    fillWeight: 'น้ำหนัก/ปริมาตร (เช่น 50g, 500ml)',
    targetOutput: 'กำลังการผลิตที่ต้องการ *',
    automationLevel: 'ระดับอัตโนมัติ *',
    fullLine: 'ต้องการสายการผลิตทั้งไลน์หรือไม่?',
    name: 'ชื่อ *',
    company: 'บริษัท / โรงงาน',
    email: 'อีเมล *',
    phone: 'WhatsApp / โทรศัพท์',
    country: 'ประเทศ *',
    voltage: 'แรงดันและความถี่ไฟฟ้า',
    materialReq: 'ข้อกำหนดวัสดุ',
    budget: 'งบประมาณโดยประมาณ (USD)',
    timeline: 'ต้องการเครื่องเมื่อไหร่?',
    message: 'ความต้องการ/คำถามเพิ่มเติม',
    fillWeightPh: 'เช่น 250g หรือ 500ml',
    phonePh: '+66 xx xxx xxxx',
    countryPh: 'เช่น เม็กซิโก ไนจีเรีย เวียดนาม',
    messagePh: 'อธิบายสินค้า ปัญหาปัจจุบัน หรือข้อกำหนดพิเศษ…',
  },
  vi: {
    selectPlaceholder: '— Chọn —',
    sending: 'Đang gửi…',
    sendFiles: 'Gửi tệp / thông tin bổ sung',
    errorFallback: 'Có lỗi xảy ra. Vui lòng thử lại hoặc email contact@sungene.net.',
    productType: 'Loại sản phẩm *',
    productState: 'Trạng thái sản phẩm *',
    packagingFormat: 'Định dạng bao bì *',
    fillWeight: 'Khối lượng/thể tích (vd: 50g, 500ml)',
    targetOutput: 'Sản lượng mục tiêu *',
    automationLevel: 'Mức độ tự động hóa *',
    fullLine: 'Bạn có cần dây chuyền hoàn chỉnh không?',
    name: 'Tên *',
    company: 'Công ty / Nhà máy',
    email: 'Email *',
    phone: 'WhatsApp / Điện thoại',
    country: 'Quốc gia *',
    voltage: 'Điện áp & tần số',
    materialReq: 'Yêu cầu vật liệu',
    budget: 'Ngân sách ước tính (USD)',
    timeline: 'Khi nào bạn cần máy?',
    message: 'Yêu cầu/câu hỏi thêm',
    fillWeightPh: 'vd: 250g hoặc 500ml',
    phonePh: '+84 xxx xxx xxx',
    countryPh: 'vd: Mexico, Nigeria, Việt Nam',
    messagePh: 'Mô tả sản phẩm, vấn đề hiện tại hoặc yêu cầu cụ thể…',
  },
  de: {
    selectPlaceholder: '— Auswählen —',
    sending: 'Wird gesendet…',
    sendFiles: 'Dateien / Zusatzinfos senden',
    errorFallback: 'Etwas ist schiefgelaufen. Bitte erneut versuchen oder an contact@sungene.net mailen.',
    productType: 'Produkttyp *',
    productState: 'Produktzustand *',
    packagingFormat: 'Ziel-Verpackungsformat *',
    fillWeight: 'Füllgewicht oder Volumen (z. B. 50g, 500ml)',
    targetOutput: 'Ziel-Ausstoß *',
    automationLevel: 'Automatisierungsgrad *',
    fullLine: 'Benötigen Sie eine komplette Linie?',
    name: 'Name *',
    company: 'Firma / Werk',
    email: 'E-Mail *',
    phone: 'WhatsApp / Telefon',
    country: 'Land *',
    voltage: 'Lokale Spannung & Frequenz',
    materialReq: 'Materialanforderung',
    budget: 'Geschätztes Budget (USD)',
    timeline: 'Wann benötigen Sie die Maschine?',
    message: 'Zusätzliche Anforderungen oder Fragen',
    fillWeightPh: 'z. B. 250g oder 500ml',
    phonePh: '+49 170 0000000',
    countryPh: 'z. B. Mexiko, Nigeria, Vietnam',
    messagePh: 'Beschreiben Sie Ihr Produkt, aktuelle Probleme oder besondere Anforderungen…',
  },
}

function getUi(lang: Lang) {
  return uiText[lang] ?? uiText.en
}

const choiceLabels: Record<'cn' | 'zh', Record<string, string>> = {
  cn: {
    'Powder / Flour': '粉末 / 面粉',
    'Granule / Pellet': '颗粒 / 颗粒料',
    'Liquid / Sauce': '液体 / 酱料',
    'Paste / Cream': '膏体 / 奶油状',
    'Solid / Block': '固体 / 块状',
    'Snack / Food Item': '零食 / 食品',
    'Other': '其他',
    'Dry / Free-flowing': '干燥 / 易流动',
    'Sticky / Clumping': '黏稠 / 易结块',
    'Viscous / Thick': '高黏度 / 较稠',
    'Liquid / Watery': '液体 / 稀薄',
    'Pillow Bag (VFFS)': '枕式袋（VFFS）',
    'Stand-up Pouch / Doypack': '自立袋 / Doypack',
    'Zipper Pouch': '拉链袋',
    'Pre-made Pouch (HFFS)': '预制袋（HFFS）',
    'Bottle / Jar': '瓶 / 罐',
    'Cup / Tray': '杯 / 托盘',
    'Sachet / Stick Pack': '小袋 / 条包',
    'Bulk Bag': '大袋',
    'Other / Not Sure': '其他 / 不确定',
    '< 20 bags/min': '< 20 袋/分钟',
    '20–60 bags/min': '20–60 袋/分钟',
    '60–120 bags/min': '60–120 袋/分钟',
    '> 120 bags/min': '> 120 袋/分钟',
    'Not sure — advise me': '不确定 — 请建议',
    'Single manual-fed machine': '单机（人工上料）',
    'Semi-automatic (operator assisted)': '半自动（需操作员辅助）',
    'Fully automatic line': '全自动生产线',
    'Turnkey / complete line': '交钥匙 / 整线项目',
    'Single machine only': '仅单机',
    'Partial line integration': '部分产线整合',
    'Full turnkey line': '整线交钥匙',
    'Other / Tell me what you need': '其他 / 请告知需求',
    'Standard (SUS304)': '标准（SUS304）',
    'Food-grade (SUS316L)': '食品级（SUS316L）',
    'Pharmaceutical grade': '制药等级',
    'Not sure': '不确定',
    'Prefer not to say': '不方便透露',
    'Urgent (< 1 month)': '紧急（< 1个月）',
    '1–3 months': '1–3 个月',
    '3–6 months': '3–6 个月',
    '> 6 months': '> 6 个月',
    'Planning stage': '规划阶段',
  },
  zh: {
    'Powder / Flour': '粉末 / 麵粉',
    'Granule / Pellet': '顆粒 / 顆粒料',
    'Liquid / Sauce': '液體 / 醬料',
    'Paste / Cream': '膏體 / 奶油狀',
    'Solid / Block': '固體 / 塊狀',
    'Snack / Food Item': '零食 / 食品',
    'Other': '其他',
    'Dry / Free-flowing': '乾燥 / 易流動',
    'Sticky / Clumping': '黏稠 / 易結塊',
    'Viscous / Thick': '高黏度 / 較稠',
    'Liquid / Watery': '液體 / 稀薄',
    'Pillow Bag (VFFS)': '枕式袋（VFFS）',
    'Stand-up Pouch / Doypack': '自立袋 / Doypack',
    'Zipper Pouch': '拉鍊袋',
    'Pre-made Pouch (HFFS)': '預製袋（HFFS）',
    'Bottle / Jar': '瓶 / 罐',
    'Cup / Tray': '杯 / 托盤',
    'Sachet / Stick Pack': '小袋 / 條包',
    'Bulk Bag': '大袋',
    'Other / Not Sure': '其他 / 不確定',
    '< 20 bags/min': '< 20 袋/分鐘',
    '20–60 bags/min': '20–60 袋/分鐘',
    '60–120 bags/min': '60–120 袋/分鐘',
    '> 120 bags/min': '> 120 袋/分鐘',
    'Not sure — advise me': '不確定 — 請建議',
    'Single manual-fed machine': '單機（人工上料）',
    'Semi-automatic (operator assisted)': '半自動（需操作員輔助）',
    'Fully automatic line': '全自動生產線',
    'Turnkey / complete line': '交鑰匙 / 整線專案',
    'Single machine only': '僅單機',
    'Partial line integration': '部分產線整合',
    'Full turnkey line': '整線交鑰匙',
    'Other / Tell me what you need': '其他 / 請告知需求',
    'Standard (SUS304)': '標準（SUS304）',
    'Food-grade (SUS316L)': '食品級（SUS316L）',
    'Pharmaceutical grade': '製藥等級',
    'Not sure': '不確定',
    'Prefer not to say': '不方便透露',
    'Urgent (< 1 month)': '緊急（< 1個月）',
    '1–3 months': '1–3 個月',
    '3–6 months': '3–6 個月',
    '> 6 months': '> 6 個月',
    'Planning stage': '規劃階段',
  },
}

function mapOptions(lang: Lang, values: string[]): Option[] {
  if (lang === 'cn' || lang === 'zh') {
    const dict = choiceLabels[lang]
    return values.map((v) => ({ value: v, label: dict[v] ?? v }))
  }
  return values.map((v) => ({ value: v, label: v }))
}

// ── Field helpers ──────────────────────────────────────────────────────────────

interface SelectFieldProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  options: Option[]
  required?: boolean
  placeholder?: string
}

function SelectField({ id, label, value, onChange, options, required, placeholder }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={selectClass}
        >
          <option value="">{placeholder ?? '— Select —'}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

interface RadioFieldProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  options: Option[]
  required?: boolean
}

function RadioField({ id, label, value, onChange, options, required }: RadioFieldProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-700">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <label key={opt.value} className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name={id}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              required={required && !value}
              className="h-4 w-4 cursor-pointer accent-accent-500 border-gray-300 focus:ring-accent-500"
            />
            <span className="text-sm text-gray-700">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

interface TextFieldProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  type?: 'text' | 'email' | 'tel'
  required?: boolean
  placeholder?: string
  autoComplete?: string
}

function TextField({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required,
  placeholder,
  autoComplete,
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </div>
  )
}

interface TextareaFieldProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  rows?: number
  required?: boolean
  placeholder?: string
}

function TextareaField({
  id,
  label,
  value,
  onChange,
  rows = 4,
  required,
  placeholder,
}: TextareaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className={`${inputClass} resize-y`}
      />
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

type FormState = {
  // Section 1
  productType: string
  productState: string
  packagingFormat: string
  fillWeight: string
  targetOutput: string
  automationLevel: string
  fullLine: string
  // Section 2
  name: string
  company: string
  email: string
  phone: string
  country: string
  voltage: string
  materialReq: string
  budget: string
  timeline: string
  message: string
  // Honeypot
  website: string
}

const initialState: FormState = {
  productType: '',
  productState: '',
  packagingFormat: '',
  fillWeight: '',
  targetOutput: '',
  automationLevel: '',
  fullLine: '',
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  voltage: '',
  materialReq: '',
  budget: '',
  timeline: '',
  message: '',
  website: '',
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function RecommendForm({ lang }: RecommendFormProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [refId, setRefId] = useState('')

  const st = getSectionTitles(lang)
  const sm = getSuccessMsg(lang)
  const privacy = getPrivacy(lang)
  const ui = getUi(lang)

  const hasStarted = useRef(false)

  function set(field: keyof FormState) {
    return (value: string) => {
      if (!hasStarted.current) {
        hasStarted.current = true
        trackRecommendStart({ lang })
      }
      setForm((prev) => ({ ...prev, [field]: value }))
    }
  }

  function getDeviceType(): string {
    if (typeof navigator === 'undefined') return 'unknown'
    const ua = navigator.userAgent
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) return 'mobile'
    if (/Tablet|iPad/i.test(ua)) return 'tablet'
    return 'desktop'
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Honeypot check
    if (form.website) return

    setStatus('loading')
    setErrorMsg('')

    trackRecommendSubmit({
      lang,
      product_type: form.productType,
      product_state: form.productState,
      packaging_format: form.packagingFormat,
      automation_level: form.automationLevel,
      budget: form.budget,
      country: form.country,
    })

    const payload = {
      ...form,
      // hidden fields
      _source_url: pathname,
      _lang: lang,
      _utm_source: searchParams.get('utm_source') ?? '',
      _utm_medium: searchParams.get('utm_medium') ?? '',
      _utm_campaign: searchParams.get('utm_campaign') ?? '',
      _utm_term: searchParams.get('utm_term') ?? '',
      _utm_content: searchParams.get('utm_content') ?? '',
      _device: getDeviceType(),
      _form_type: 'machinery_recommendation',
    }

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data?.error ?? `Server error ${res.status}`)
      }

      const resolvedRefId = data?.id ?? data?.ref ?? ''
      setRefId(resolvedRefId)
      trackFormSubmitSuccess({ form_type: 'recommend', lang, ref_id: resolvedRefId })
      setStatus('success')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unexpected error. Please try again.'
      setErrorMsg(message)
      trackFormSubmitFail({ form_type: 'recommend', lang, error_type: 'server' })
      setStatus('error')
    }
  }

  function handleReset() {
    setForm(initialState)
    setStatus('idle')
    setErrorMsg('')
    setRefId('')
  }

  // ── Success state ──────────────────────────────────────────────────────────

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 px-8 py-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-7 w-7 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-xl font-semibold text-green-800">
          {sm.title}
          {refId && (
            <span className="ml-2 font-mono text-base text-green-600">— Ref: {refId}</span>
          )}
        </p>
        <p className="mt-3 text-gray-700">{sm.body}</p>
        <p className="mt-4 rounded-lg bg-white px-6 py-4 text-left text-sm text-gray-600 shadow-sm ring-1 ring-green-100">
          {sm.also}
        </p>
        <a
          href="mailto:contact@sungene.net?subject=Additional%20Files%20for%20My%20Recommendation%20Request"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          {ui.sendFiles}
        </a>
        <div className="mt-4">
          <button
            type="button"
            onClick={handleReset}
            className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-700"
          >
            {sm.anotherBtn}
          </button>
        </div>
      </div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <div aria-hidden="true" className="hidden">
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* ── SECTION 1 ── */}
      <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">{st.s1}</h2>
        <div className="space-y-5">
          <SelectField
            id="productType"
            label={ui.productType}
            value={form.productType}
            onChange={set('productType')}
            required
            placeholder={ui.selectPlaceholder}
            options={mapOptions(lang, [
              'Powder / Flour',
              'Granule / Pellet',
              'Liquid / Sauce',
              'Paste / Cream',
              'Solid / Block',
              'Snack / Food Item',
              'Other',
            ])}
          />

          <RadioField
            id="productState"
            label={ui.productState}
            value={form.productState}
            onChange={set('productState')}
            required
            options={mapOptions(lang, ['Dry / Free-flowing', 'Sticky / Clumping', 'Viscous / Thick', 'Liquid / Watery'])}
          />

          <SelectField
            id="packagingFormat"
            label={ui.packagingFormat}
            value={form.packagingFormat}
            onChange={set('packagingFormat')}
            required
            placeholder={ui.selectPlaceholder}
            options={mapOptions(lang, [
              'Pillow Bag (VFFS)',
              'Stand-up Pouch / Doypack',
              'Zipper Pouch',
              'Pre-made Pouch (HFFS)',
              'Bottle / Jar',
              'Cup / Tray',
              'Sachet / Stick Pack',
              'Bulk Bag',
              'Other / Not Sure',
            ])}
          />

          <TextField
            id="fillWeight"
            label={ui.fillWeight}
            value={form.fillWeight}
            onChange={set('fillWeight')}
            placeholder={ui.fillWeightPh}
          />

          <SelectField
            id="targetOutput"
            label={ui.targetOutput}
            value={form.targetOutput}
            onChange={set('targetOutput')}
            required
            placeholder={ui.selectPlaceholder}
            options={mapOptions(lang, [
              '< 20 bags/min',
              '20–60 bags/min',
              '60–120 bags/min',
              '> 120 bags/min',
              'Not sure — advise me',
            ])}
          />

          <SelectField
            id="automationLevel"
            label={ui.automationLevel}
            value={form.automationLevel}
            onChange={set('automationLevel')}
            required
            placeholder={ui.selectPlaceholder}
            options={mapOptions(lang, [
              'Single manual-fed machine',
              'Semi-automatic (operator assisted)',
              'Fully automatic line',
              'Turnkey / complete line',
              'Not sure — advise me',
            ])}
          />

          <RadioField
            id="fullLine"
            label={ui.fullLine}
            value={form.fullLine}
            onChange={set('fullLine')}
            options={mapOptions(lang, ['Single machine only', 'Partial line integration', 'Full turnkey line'])}
          />
        </div>
      </div>

      {/* ── SECTION 2 ── */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">{st.s2}</h2>
        <div className="space-y-5">
          <TextField
            id="name"
            label={ui.name}
            value={form.name}
            onChange={set('name')}
            required
            autoComplete="name"
          />

          <TextField
            id="company"
            label={ui.company}
            value={form.company}
            onChange={set('company')}
            autoComplete="organization"
          />

          <TextField
            id="email"
            label={ui.email}
            value={form.email}
            onChange={set('email')}
            type="email"
            required
            autoComplete="email"
          />

          <TextField
            id="phone"
            label={ui.phone}
            value={form.phone}
            onChange={set('phone')}
            type="tel"
            placeholder={ui.phonePh}
            autoComplete="tel"
          />

          <TextField
            id="country"
            label={ui.country}
            value={form.country}
            onChange={set('country')}
            required
            placeholder={ui.countryPh}
            autoComplete="country-name"
          />

          <SelectField
            id="voltage"
            label={ui.voltage}
            value={form.voltage}
            onChange={set('voltage')}
            placeholder={ui.selectPlaceholder}
            options={mapOptions(lang, [
              '220V/50Hz',
              '380V/50Hz',
              '110V/60Hz',
              '220V/60Hz',
              'Other / Tell me what you need',
            ])}
          />

          <RadioField
            id="materialReq"
            label={ui.materialReq}
            value={form.materialReq}
            onChange={set('materialReq')}
            options={mapOptions(lang, [
              'Standard (SUS304)',
              'Food-grade (SUS316L)',
              'Pharmaceutical grade',
              'Not sure',
            ])}
          />

          <SelectField
            id="budget"
            label={ui.budget}
            value={form.budget}
            onChange={set('budget')}
            placeholder={ui.selectPlaceholder}
            options={mapOptions(lang, [
              '< $5,000',
              '$5,000–$15,000',
              '$15,000–$50,000',
              '$50,000–$150,000',
              '> $150,000',
              'Prefer not to say',
            ])}
          />

          <SelectField
            id="timeline"
            label={ui.timeline}
            value={form.timeline}
            onChange={set('timeline')}
            placeholder={ui.selectPlaceholder}
            options={mapOptions(lang, [
              'Urgent (< 1 month)',
              '1–3 months',
              '3–6 months',
              '> 6 months',
              'Planning stage',
            ])}
          />

          <TextareaField
            id="message"
            label={ui.message}
            value={form.message}
            onChange={set('message')}
            rows={4}
            placeholder={ui.messagePh}
          />
        </div>
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg || ui.errorFallback}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-accent-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            {ui.sending}
          </>
        ) : (
          st.submit
        )}
      </button>

      {/* Privacy */}
      <p className="mt-3 text-center text-xs text-gray-400">{privacy}</p>
    </form>
  )
}
