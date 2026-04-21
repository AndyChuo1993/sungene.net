import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import CTAButtonWrapper from '@/components/home/CTAButtonWrapper'

export default function CTASection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      title: 'Not Sure How to Start Your Sourcing Assessment?',
      desc: 'Send us your product details — type, target output, packaging format, and destination market. Our team will reply with a sourcing path, configuration direction, and key risk checkpoints within 24 hours.',
      btn: 'Send Your Product → Get Recommendation',
      features: ['No minimum order required', 'Verification video before shipment', 'Voltage customization available', 'International shipping arranged'],
    },
    cn: {
      title: '不确定该怎么开始采购评估？',
      desc: '发送您的产品详情——类型、目标产量、包装形式与目的市场。我们的团队将在24小时内回复采购路径、配置方向与关键风险点。',
      btn: '发送产品信息 → 获取评估',
      features: ['无最低起订量要求', '发货前提供验证视频', '可定制电压', '安排国际物流'],
    },
    zh: {
      title: '不確定該怎麼開始採購評估？',
      desc: '發送您的產品詳情——類型、目標產量、包材形式與目的市場。我們的團隊將在24小時內回覆採購路徑、配置方向與關鍵風險點。',
      btn: '發送產品資訊 → 取得評估',
      features: ['無最低起訂量要求', '出貨前提供驗證影片', '可客製電壓', '安排國際物流'],
    },
    fr: {
      title: 'Pas sûr de comment démarrer votre évaluation sourcing ?',
      desc: 'Envoyez les détails de votre produit — type, cadence cible, format d’emballage et marché de destination. Notre équipe répondra sous 24 h avec un parcours de sourcing, une direction de configuration et les principaux points de risque.',
      btn: 'Envoyez votre produit → Obtenez une recommandation',
      features: ['Aucune quantité minimum requise', 'Vidéo de vérification avant expédition', 'Adaptation de tension disponible', 'Expédition internationale organisée'],
    },
    es: {
      title: '¿No sabe cómo iniciar su evaluación de abastecimiento?',
      desc: 'Envíenos los detalles de su producto — tipo, capacidad objetivo, formato de empaque y mercado destino. Nuestro equipo responderá en 24 horas con la ruta de abastecimiento, la dirección de configuración y los riesgos clave.',
      btn: 'Envíe su producto → Obtenga recomendación',
      features: ['Sin pedido mínimo requerido', 'Video de verificación antes del envío', 'Personalización de voltaje disponible', 'Envío internacional coordinado'],
    },
    pt: {
      title: 'Não sabe como iniciar sua avaliação de sourcing?',
      desc: 'Envie os detalhes do seu produto — tipo, produção alvo, formato de embalagem e mercado de destino. Nossa equipe responderá em 24 horas com o caminho de sourcing, a direção de configuração e os principais riscos.',
      btn: 'Envie seu produto → Receba recomendação',
      features: ['Sem quantidade mínima de pedido', 'Vídeo de verificação antes do envio', 'Personalização de voltagem disponível', 'Envio internacional organizado'],
    },
    ko: {
      title: '소싱 평가를 어떻게 시작해야 할지 모르시나요?',
      desc: '제품 정보와 목표 생산량, 포장 형식, 판매 시장을 보내주시면 24시간 내에 소싱 경로, 구성 방향, 핵심 리스크 포인트를 안내해드립니다.',
      btn: '제품 정보 보내기 → 추천 받기',
      features: ['최소 주문 수량 없음', '출하 전 검증 영상 제공', '전압 맞춤 설정 가능', '국제 운송 주선'],
    },
    ja: {
      title: '調達評価をどう始めるべきかわからない？',
      desc: '製品情報、目標能力、包装形態、販売市場を送ってください。24時間以内に調達ルート、構成方針、主要リスクを返信します。',
      btn: '製品情報を送信 → 提案を受ける',
      features: ['最小注文数量の制限なし', '出荷前の検証動画', '電圧カスタマイズ対応', '国際配送手配'],
    },
    ar: {
      title: 'لست متأكدًا كيف تبدأ تقييم التوريد؟',
      desc: 'أرسل تفاصيل منتجك ونوع العبوة والطاقة المستهدفة وسوق الوجهة، وسنرد خلال 24 ساعة بمسار التوريد واتجاه التهيئة ونقاط المخاطر الرئيسية.',
      btn: 'أرسل منتجك → احصل على توصية',
      features: ['لا يوجد حد أدنى للطلب', 'فيديو تحقق قبل الشحن', 'إمكانية تخصيص الجهد الكهربائي', 'ترتيب الشحن الدولي'],
    },
    th: {
      title: 'ยังไม่แน่ใจว่าจะเริ่มประเมินการจัดหาอย่างไร?',
      desc: 'ส่งรายละเอียดสินค้า กำลังการผลิต รูปแบบบรรจุภัณฑ์ และตลาดปลายทางมาให้เรา ภายใน 24 ชั่วโมงเราจะตอบกลับด้วยแนวทางการจัดหา ทิศทางการจัดวาง และจุดเสี่ยงสำคัญ',
      btn: 'ส่งข้อมูลผลิตภัณฑ์ → รับคำแนะนำ',
      features: ['ไม่มีจำนวนสั่งซื้อขั้นต่ำ', 'วิดีโอยืนยันก่อนจัดส่ง', 'ปรับแรงดันไฟฟ้าได้', 'จัดส่งระหว่างประเทศ'],
    },
    vi: {
      title: 'Chưa rõ nên bắt đầu đánh giá sourcing từ đâu?',
      desc: 'Gửi cho chúng tôi thông tin sản phẩm, công suất mục tiêu, dạng bao bì và thị trường đích. Trong 24 giờ, đội ngũ sẽ phản hồi với lộ trình sourcing, hướng cấu hình và các điểm rủi ro chính.',
      btn: 'Gửi thông tin sản phẩm → Nhận đề xuất',
      features: ['Không yêu cầu đơn hàng tối thiểu', 'Video kiểm chứng trước khi giao', 'Tùy chỉnh điện áp theo yêu cầu', 'Sắp xếp vận chuyển quốc tế'],
    },
    de: {
      title: 'Nicht sicher, wie Sie Ihre Sourcing-Bewertung starten sollen?',
      desc: 'Senden Sie Produktdetails, Zielausbringung, Verpackungsformat und Zielmarkt. Unser Team antwortet innerhalb von 24 Stunden mit Sourcing-Pfad, Konfigurationsrichtung und wichtigen Risikopunkten.',
      btn: 'Produkt senden → Bewertung erhalten',
      features: ['Keine Mindestbestellmenge erforderlich', 'Verifikationsvideos vor dem Versand', 'Spannungsanpassung verfügbar', 'Internationaler Versand organisiert'],
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background with industrial pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-brand-950" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/90 to-brand-950" />
      </div>

      <Container className="relative text-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">{t.desc}</p>
            <div className="mt-8">
              <CTAButtonWrapper lang={lang} label={t.btn} />
            </div>
          </div>

          <div className="space-y-4">
            {t.features.map((feature: any, i: number) => (
              <div key={i} className="flex items-center gap-4 rounded-xl bg-white/5 px-6 py-4 ring-1 ring-white/10">
                <svg className="h-6 w-6 shrink-0 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
