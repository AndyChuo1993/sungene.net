import { Lang } from '@/lib/i18n'
import InquiryForm from '@/components/InquiryForm'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(lang)) ? lang : 'en'
  const titles: Record<string, string> = {
    en: 'Get a Machine Recommendation | SunGene Machinery',
    cn: '获取机器推荐 | SunGene 机械',
    zh: '取得機器推薦 | SunGene 機械',
    fr: 'Obtenez une recommandation de machine | SunGene Machinery',
    es: 'Obtenga una recomendación de máquina | SunGene Machinery',
    pt: 'Receba uma recomendação de máquina | SunGene Machinery',
    ko: '기계 추천 받기 | SunGene Machinery',
    ja: '機械推薦を受ける | SunGene Machinery',
    ar: 'احصل على توصية بالماكينة | SunGene Machinery',
    th: 'รับคำแนะนำเครื่องจักร | SunGene Machinery',
    vi: 'Nhận đề xuất máy | SunGene Machinery',
    de: 'Maschinenempfehlung erhalten | SunGene Machinery',
  }
  const descriptions: Record<string, string> = {
    en: 'Tell us about your product and production goals. Our engineers will recommend the best machinery solution within 24 hours. Free consultation, no obligation.',
    cn: '告诉我们您的产品和生产目标。我们的工程师将在24小时内推荐最佳机械方案。免费咨询，无义务。',
    zh: '告訴我們您的產品和生產目標。我們的工程師將在24小時內推薦最佳機械方案。免費諮詢，無義務。',
    fr: 'Parlez-nous de votre produit et de vos objectifs de production. Nos ingénieurs vous recommanderont la meilleure solution machines sous 24 heures. Consultation gratuite, sans obligation.',
    es: 'Cuéntenos sobre su producto y objetivos de producción. Nuestros ingenieros le recomendarán la mejor solución de maquinaria en 24 horas. Consulta gratuita, sin compromiso.',
    pt: 'Conte-nos sobre seu produto e metas de produção. Nossos engenheiros recomendarão a melhor solução em maquinário em 24 horas. Consulta gratuita, sem compromisso.',
    ko: '제품과 생산 목표를 알려주세요. 당사 엔지니어가 24시간 이내에 최적의 기계 솔루션을 추천해 드립니다. 무료 상담, 의무 없음.',
    ja: '製品と生産目標をお知らせください。エンジニアが24時間以内に最適な機械ソリューションをご提案します。無料相談、義務なし。',
    ar: 'أخبرنا عن منتجك وأهداف الإنتاج. سيوصي مهندسونا بأفضل حل للماكينات خلال 24 ساعة. استشارة مجانية بدون التزام.',
    th: 'บอกเราเกี่ยวกับผลิตภัณฑ์และเป้าหมายการผลิตของคุณ วิศวกรจะแนะนำโซลูชันเครื่องจักรที่ดีที่สุดภายใน 24 ชั่วโมง ปรึกษาฟรี ไม่มีข้อผูกมัด',
    vi: 'Cho chúng tôi biết về sản phẩm và mục tiêu sản xuất của bạn. Kỹ sư sẽ đề xuất giải pháp máy móc tốt nhất trong vòng 24 giờ. Tư vấn miễn phí, không ràng buộc.',
    de: 'Erzählen Sie uns von Ihrem Produkt und Ihren Produktionszielen. Unsere Ingenieure empfehlen die beste Maschinenlösung innerhalb von 24 Stunden. Kostenlose Beratung, unverbindlich.',
  }
  return {
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    keywords: ['get machinery recommendation', 'packaging machine recommendation', 'find the right packaging machine', 'machinery selection service', 'product packaging consultation'],
    alternates: {
      canonical: `https://sungene.net/${l}/recommend`,
      languages: {
        'en': 'https://sungene.net/en/recommend',
        'zh-TW': 'https://sungene.net/zh/recommend',
        'zh-CN': 'https://sungene.net/cn/recommend',
        'fr': 'https://sungene.net/fr/recommend',
        'es': 'https://sungene.net/es/recommend',
        'pt': 'https://sungene.net/pt/recommend',
        'ko': 'https://sungene.net/ko/recommend',
        'ja': 'https://sungene.net/ja/recommend',
        'ar': 'https://sungene.net/ar/recommend',
        'th': 'https://sungene.net/th/recommend',
        'vi': 'https://sungene.net/vi/recommend',
        'de': 'https://sungene.net/de/recommend',
        'x-default': 'https://sungene.net/en/recommend',
      }
    },
    openGraph: {
      title: titles[l] || titles.en,
      description: descriptions[l] || descriptions.en,
      url: `https://sungene.net/${l}/recommend`,
      siteName: 'SunGene Machinery',
      images: [{ url: 'https://sungene.net/og/og.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: titles[l] || titles.en, description: descriptions[l] || descriptions.en, images: ['https://sungene.net/og/og.png'] },
  }
}

export default async function RecommendPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      title: 'Send Us Your Product — We\'ll Recommend the Right Machine',
      subtitle: 'You don\'t need to know the machine name. Just tell us about your product, and our engineers will recommend the best solution within 24 hours.',
      sidebar: [
        'Free consultation — no obligation',
        'Response within 24 hours',
        'Factory test video available',
        'CE certified machines',
      ],
      fields: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        productDescription: 'What is your product?',
        productDescPlaceholder: 'e.g., Coffee powder, 500g bags, need 30 bags/min',
        productCategory: 'Product Category',
        productCategoryPlaceholder: 'Powder / Liquid / Granule / Snack / Mixed / Other',
        packagingFormat: 'Desired Packaging Format',
        packagingFormatPlaceholder: 'Bag / Pouch / Bottle / Can / Bulk / Other',
        targetOutput: 'Target Output',
        targetOutputPlaceholder: 'e.g., 30 bags/min, 1000 bottles/hour',
        country: 'Destination Country',
        message: 'Additional Notes',
      },
      submit: 'Send Product Details → Get Recommendation',
    },
    cn: {
      title: '发送您的产品信息——我们推荐合适的机器',
      subtitle: '您不需要知道机器的名称。只需告诉我们您的产品，我们的工程师将在24小时内推荐最佳方案。',
      sidebar: [
        '免费咨询——无义务',
        '24小时内回复',
        '可提供工厂测试视频',
        'CE认证机器',
      ],
      fields: {
        name: '您的姓名',
        email: '电子邮箱',
        phone: '电话号码',
        productDescription: '您的产品是什么？',
        productDescPlaceholder: '例如：咖啡粉，500克袋装，需要30袋/分钟',
        productCategory: '产品类别',
        productCategoryPlaceholder: '粉末 / 液体 / 颗粒 / 休闲食品 / 混合 / 其他',
        packagingFormat: '期望的包装形式',
        packagingFormatPlaceholder: '袋 / 自立袋 / 瓶 / 罐 / 散装 / 其他',
        targetOutput: '目标产量',
        targetOutputPlaceholder: '例如：30袋/分钟，1000瓶/小时',
        country: '目的地国家',
        message: '补充说明',
      },
      submit: '发送产品信息 → 获取推荐',
    },
    zh: {
      title: '發送您的產品資訊——我們推薦合適的機器',
      subtitle: '您不需要知道機器的名稱。只需告訴我們您的產品，我們的工程師將在24小時內推薦最佳方案。',
      sidebar: [
        '免費諮詢——無義務',
        '24小時內回覆',
        '可提供工廠測試影片',
        'CE認證機器',
      ],
      fields: {
        name: '您的姓名',
        email: '電子郵件',
        phone: '電話號碼',
        productDescription: '您的產品是什麼？',
        productDescPlaceholder: '例如：咖啡粉，500克袋裝，需要30袋/分鐘',
        productCategory: '產品類別',
        productCategoryPlaceholder: '粉末 / 液體 / 顆粒 / 休閒食品 / 混合 / 其他',
        packagingFormat: '期望的包裝形式',
        packagingFormatPlaceholder: '袋 / 自立袋 / 瓶 / 罐 / 散裝 / 其他',
        targetOutput: '目標產量',
        targetOutputPlaceholder: '例如：30袋/分鐘，1000瓶/小時',
        country: '目的地國家',
        message: '補充說明',
      },
      submit: '發送產品資訊 → 取得推薦',
    },
    fr: {
      title: 'Envoyez-nous votre produit — Nous vous recommanderons la bonne machine',
      subtitle: 'Vous n\'avez pas besoin de connaître le nom de la machine. Décrivez simplement votre produit, et nos ingénieurs vous recommanderont la meilleure solution sous 24 heures.',
      sidebar: [
        'Consultation gratuite — sans obligation',
        'Réponse sous 24 heures',
        'Vidéo de test usine disponible',
        'Machines certifiées CE',
      ],
      fields: {
        name: 'Votre nom',
        email: 'Adresse e-mail',
        phone: 'Numéro de téléphone',
        productDescription: 'Quel est votre produit ?',
        productDescPlaceholder: 'ex. Poudre de café, sachets de 500g, besoin de 30 sachets/min',
        productCategory: 'Catégorie de produit',
        productCategoryPlaceholder: 'Poudre / Liquide / Granulé / Snack / Mixte / Autre',
        packagingFormat: 'Format d\'emballage souhaité',
        packagingFormatPlaceholder: 'Sac / Sachet / Bouteille / Boîte / Vrac / Autre',
        targetOutput: 'Production cible',
        targetOutputPlaceholder: 'ex. 30 sachets/min, 1000 bouteilles/heure',
        country: 'Pays de destination',
        message: 'Notes supplémentaires',
      },
      submit: 'Envoyer les détails du produit → Obtenir une recommandation',
    },
    es: {
      title: 'Envíenos su producto — Le recomendaremos la máquina adecuada',
      subtitle: 'No necesita saber el nombre de la máquina. Solo cuéntenos sobre su producto, y nuestros ingenieros le recomendarán la mejor solución en 24 horas.',
      sidebar: [
        'Consulta gratuita — sin compromiso',
        'Respuesta en 24 horas',
        'Video de prueba de fábrica disponible',
        'Máquinas certificadas CE',
      ],
      fields: {
        name: 'Su nombre',
        email: 'Correo electrónico',
        phone: 'Número de teléfono',
        productDescription: '¿Cuál es su producto?',
        productDescPlaceholder: 'ej. Café en polvo, bolsas de 500g, necesito 30 bolsas/min',
        productCategory: 'Categoría del producto',
        productCategoryPlaceholder: 'Polvo / Líquido / Granulado / Snack / Mixto / Otro',
        packagingFormat: 'Formato de empaque deseado',
        packagingFormatPlaceholder: 'Bolsa / Sobre / Botella / Lata / Granel / Otro',
        targetOutput: 'Producción objetivo',
        targetOutputPlaceholder: 'ej. 30 bolsas/min, 1000 botellas/hora',
        country: 'País de destino',
        message: 'Notas adicionales',
      },
      submit: 'Enviar detalles del producto → Obtener recomendación',
    },
    pt: {
      title: 'Envie-nos seu produto — Recomendaremos a máquina certa',
      subtitle: 'Você não precisa saber o nome da máquina. Apenas conte-nos sobre seu produto, e nossos engenheiros recomendarão a melhor solução em 24 horas.',
      sidebar: [
        'Consulta gratuita — sem compromisso',
        'Resposta em 24 horas',
        'Vídeo de teste de fábrica disponível',
        'Máquinas certificadas CE',
      ],
      fields: {
        name: 'Seu nome',
        email: 'Endereço de e-mail',
        phone: 'Número de telefone',
        productDescription: 'Qual é o seu produto?',
        productDescPlaceholder: 'ex. Café em pó, sacos de 500g, preciso de 30 sacos/min',
        productCategory: 'Categoria do produto',
        productCategoryPlaceholder: 'Pó / Líquido / Grânulo / Snack / Misto / Outro',
        packagingFormat: 'Formato de embalagem desejado',
        packagingFormatPlaceholder: 'Saco / Sachê / Garrafa / Lata / Granel / Outro',
        targetOutput: 'Produção alvo',
        targetOutputPlaceholder: 'ex. 30 sacos/min, 1000 garrafas/hora',
        country: 'País de destino',
        message: 'Notas adicionais',
      },
      submit: 'Enviar detalhes do produto → Receber recomendação',
    },
    ko: {
      title: '제품 정보를 보내주세요 — 최적의 기계를 추천해 드립니다',
      subtitle: '기계 이름을 몰라도 괜찮습니다. 제품에 대해 알려주시면, 엔지니어가 24시간 이내에 최적의 솔루션을 추천해 드립니다.',
      sidebar: [
        '무료 상담 — 의무 없음',
        '24시간 이내 응답',
        '공장 테스트 영상 제공 가능',
        'CE 인증 기계',
      ],
      fields: {
        name: '이름',
        email: '이메일 주소',
        phone: '전화번호',
        productDescription: '제품이 무엇인가요?',
        productDescPlaceholder: '예: 커피 분말, 500g 봉지, 30봉지/분 필요',
        productCategory: '제품 카테고리',
        productCategoryPlaceholder: '분말 / 액체 / 과립 / 스낵 / 혼합 / 기타',
        packagingFormat: '원하는 포장 형태',
        packagingFormatPlaceholder: '봉지 / 파우치 / 병 / 캔 / 대량 / 기타',
        targetOutput: '목표 생산량',
        targetOutputPlaceholder: '예: 30봉지/분, 1000병/시간',
        country: '목적지 국가',
        message: '추가 메모',
      },
      submit: '제품 정보 보내기 → 추천 받기',
    },
    ja: {
      title: '製品情報をお送りください — 最適な機械をご提案します',
      subtitle: '機械の名前をご存じなくても大丈夫です。製品についてお知らせいただければ、エンジニアが24時間以内に最適なソリューションをご提案します。',
      sidebar: [
        '無料相談 — 義務なし',
        '24時間以内に返答',
        '工場テスト動画あり',
        'CE認証機械',
      ],
      fields: {
        name: 'お名前',
        email: 'メールアドレス',
        phone: '電話番号',
        productDescription: '製品は何ですか？',
        productDescPlaceholder: '例：コーヒー粉末、500g袋、30袋/分必要',
        productCategory: '製品カテゴリ',
        productCategoryPlaceholder: '粉末 / 液体 / 顆粒 / スナック / ミックス / その他',
        packagingFormat: '希望の包装形態',
        packagingFormatPlaceholder: '袋 / パウチ / ボトル / 缶 / バルク / その他',
        targetOutput: '目標生産量',
        targetOutputPlaceholder: '例：30袋/分、1000本/時間',
        country: '仕向地国',
        message: '追加メモ',
      },
      submit: '製品情報を送信 → 提案を受ける',
    },
    ar: {
      title: 'أرسل لنا منتجك — وسنوصي بالماكينة المناسبة',
      subtitle: 'لا تحتاج لمعرفة اسم الماكينة. فقط أخبرنا عن منتجك، وسيوصي مهندسونا بأفضل حل خلال 24 ساعة.',
      sidebar: [
        'استشارة مجانية — بدون التزام',
        'رد خلال 24 ساعة',
        'فيديو اختبار المصنع متاح',
        'ماكينات معتمدة CE',
      ],
      fields: {
        name: 'اسمك',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        productDescription: 'ما هو منتجك؟',
        productDescPlaceholder: 'مثال: مسحوق القهوة، أكياس 500 جرام، أحتاج 30 كيس/دقيقة',
        productCategory: 'فئة المنتج',
        productCategoryPlaceholder: 'مسحوق / سائل / حبيبات / وجبات خفيفة / مختلط / أخرى',
        packagingFormat: 'شكل التغليف المطلوب',
        packagingFormatPlaceholder: 'كيس / كيس قائم / زجاجة / علبة / سائب / أخرى',
        targetOutput: 'الطاقة الإنتاجية المستهدفة',
        targetOutputPlaceholder: 'مثال: 30 كيس/دقيقة، 1000 زجاجة/ساعة',
        country: 'بلد الوجهة',
        message: 'ملاحظات إضافية',
      },
      submit: 'أرسل تفاصيل المنتج → احصل على توصية',
    },
    th: {
      title: 'ส่งข้อมูลผลิตภัณฑ์ของคุณ — เราจะแนะนำเครื่องจักรที่เหมาะสม',
      subtitle: 'คุณไม่จำเป็นต้องรู้ชื่อเครื่องจักร แค่บอกเราเกี่ยวกับผลิตภัณฑ์ของคุณ วิศวกรของเราจะแนะนำโซลูชันที่ดีที่สุดภายใน 24 ชั่วโมง',
      sidebar: [
        'ปรึกษาฟรี — ไม่มีข้อผูกมัด',
        'ตอบกลับภายใน 24 ชั่วโมง',
        'วิดีโอทดสอบจากโรงงานพร้อมให้',
        'เครื่องจักรรับรอง CE',
      ],
      fields: {
        name: 'ชื่อของคุณ',
        email: 'ที่อยู่อีเมล',
        phone: 'หมายเลขโทรศัพท์',
        productDescription: 'ผลิตภัณฑ์ของคุณคืออะไร?',
        productDescPlaceholder: 'เช่น ผงกาแฟ ถุง 500 กรัม ต้องการ 30 ถุง/นาที',
        productCategory: 'หมวดหมู่ผลิตภัณฑ์',
        productCategoryPlaceholder: 'ผง / ของเหลว / เม็ด / ขนม / ผสม / อื่นๆ',
        packagingFormat: 'รูปแบบบรรจุภัณฑ์ที่ต้องการ',
        packagingFormatPlaceholder: 'ถุง / ซอง / ขวด / กระป๋อง / สินค้าเทกอง / อื่นๆ',
        targetOutput: 'กำลังการผลิตเป้าหมาย',
        targetOutputPlaceholder: 'เช่น 30 ถุง/นาที, 1000 ขวด/ชั่วโมง',
        country: 'ประเทศปลายทาง',
        message: 'หมายเหตุเพิ่มเติม',
      },
      submit: 'ส่งรายละเอียดผลิตภัณฑ์ → รับคำแนะนำ',
    },
    vi: {
      title: 'Gửi thông tin sản phẩm — Chúng tôi sẽ đề xuất máy phù hợp',
      subtitle: 'Bạn không cần biết tên máy. Chỉ cần cho chúng tôi biết về sản phẩm của bạn, đội ngũ kỹ sư sẽ đề xuất giải pháp tốt nhất trong vòng 24 giờ.',
      sidebar: [
        'Tư vấn miễn phí — không ràng buộc',
        'Phản hồi trong 24 giờ',
        'Video thử nghiệm tại nhà máy',
        'Máy đạt chứng nhận CE',
      ],
      fields: {
        name: 'Họ và tên',
        email: 'Địa chỉ email',
        phone: 'Số điện thoại',
        productDescription: 'Sản phẩm của bạn là gì?',
        productDescPlaceholder: 'VD: Bột cà phê, túi 500g, cần 30 túi/phút',
        productCategory: 'Danh mục sản phẩm',
        productCategoryPlaceholder: 'Bột / Lỏng / Hạt / Đồ ăn nhẹ / Hỗn hợp / Khác',
        packagingFormat: 'Hình thức đóng gói mong muốn',
        packagingFormatPlaceholder: 'Túi / Bao bì / Chai / Lon / Rời / Khác',
        targetOutput: 'Công suất mục tiêu',
        targetOutputPlaceholder: 'VD: 30 túi/phút, 1000 chai/giờ',
        country: 'Quốc gia đích',
        message: 'Ghi chú thêm',
      },
      submit: 'Gửi thông tin sản phẩm → Nhận đề xuất',
    },
    de: {
      title: 'Senden Sie uns Ihr Produkt — Wir empfehlen die richtige Maschine',
      subtitle: 'Sie müssen den Maschinennamen nicht kennen. Beschreiben Sie einfach Ihr Produkt, und unsere Ingenieure empfehlen die beste Lösung innerhalb von 24 Stunden.',
      sidebar: [
        'Kostenlose Beratung — unverbindlich',
        'Antwort innerhalb von 24 Stunden',
        'Werkstestvideos verfügbar',
        'CE-zertifizierte Maschinen',
      ],
      fields: {
        name: 'Ihr Name',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer',
        productDescription: 'Was ist Ihr Produkt?',
        productDescPlaceholder: 'z.B. Kaffeepulver, 500g-Beutel, 30 Beutel/Min benötigt',
        productCategory: 'Produktkategorie',
        productCategoryPlaceholder: 'Pulver / Flüssigkeit / Granulat / Snack / Gemischt / Andere',
        packagingFormat: 'Gewünschtes Verpackungsformat',
        packagingFormatPlaceholder: 'Beutel / Standbeutel / Flasche / Dose / Schüttgut / Andere',
        targetOutput: 'Zielleistung',
        targetOutputPlaceholder: 'z.B. 30 Beutel/Min, 1000 Flaschen/Stunde',
        country: 'Zielland',
        message: 'Zusätzliche Anmerkungen',
      },
      submit: 'Produktdetails senden → Empfehlung erhalten',
    },
  }

  const t = content[lang] || content['en']
  const f = t.fields

  return (
    <>
      <section className="bg-brand-950 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              {t.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <InquiryForm
                  lang={lang}
                  type="Product Recommendation"
                  submitLabel={t.submit}
                  fields={[
                    { name: 'name', label: f.name, type: 'text', required: true, autoComplete: 'name' },
                    { name: 'email', label: f.email, type: 'email', required: true, autoComplete: 'email' },
                    { name: 'phone', label: f.phone, type: 'tel', required: true, autoComplete: 'tel' },
                    { name: 'productDescription', label: f.productDescription, type: 'textarea', required: true, placeholder: f.productDescPlaceholder, rows: 4 },
                    { name: 'productCategory', label: f.productCategory, type: 'text', placeholder: f.productCategoryPlaceholder },
                    { name: 'packagingFormat', label: f.packagingFormat, type: 'text', placeholder: f.packagingFormatPlaceholder },
                    { name: 'targetOutput', label: f.targetOutput, type: 'text', placeholder: f.targetOutputPlaceholder },
                    { name: 'country', label: f.country, type: 'text', autoComplete: 'country-name' },
                    { name: 'message', label: f.message, type: 'textarea', required: true, rows: 3 },
                  ]}
                />
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {t.sidebar.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-4 rounded-xl bg-white px-6 py-5 shadow-sm ring-1 ring-gray-100">
                  <svg className="h-6 w-6 shrink-0 text-accent-500 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
