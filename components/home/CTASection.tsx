import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import CTAButtonWrapper from '@/components/home/CTAButtonWrapper'

export default function CTASection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      title: 'Ready for a real sourcing conversation?',
      desc: 'Send us a reference image, your target quantity, and the market you sell into. We will reply the same day with two or three factories we would shortlist and the rough price band you should expect.',
      btn: 'Start a sourcing conversation',
      features: ['Reply same Taipei business day', 'Inspection video & photos with every shipment', 'FOB or EXW factory price disclosed on request', 'Pay our Taiwan entity — clean banking trail'],
    },
    cn: {
      title: '准备好开始一次真正的采购对话了吗？',
      desc: '给我们一张参考图、目标数量、销往的市场。台北上班时间内当天回讯，附上我们会筛出来的 2–3 家工厂方向，以及您大致可以预期的价格区间。',
      btn: '开始一次采购对话',
      features: ['台北上班时间当天回讯', '每批附验货影片与照片', '问就给您 FOB 或 EXW 工厂价', '付款给台湾公司——银行往来干净'],
    },
    zh: {
      title: '準備好開始一次真正的採購對話了嗎？',
      desc: '給我們一張參考圖、目標數量、銷往的市場。台北上班時間內當天回訊，附上我們會篩出來的 2–3 家工廠方向，以及你大致可以預期的價格區間。',
      btn: '開始一次採購對話',
      features: ['台北上班時間當天回訊', '每批附驗貨影片與照片', '問就給你 FOB 或 EXW 工廠價', '付款給台灣公司——銀行往來乾淨'],
    },
    fr: {
      title: 'Prêt pour une vraie conversation sourcing ?',
      desc: "Envoyez une photo de référence, votre quantité cible et le marché visé. Réponse le jour même (heures de bureau Taipei) avec 2–3 usines que nous présélectionnerions et la fourchette de prix à laquelle vous attendre.",
      btn: 'Démarrer une conversation sourcing',
      features: ['Réponse le jour même (heures Taipei)', "Vidéo et photos d'inspection à chaque expédition", 'Prix usine FOB ou EXW communiqué sur demande', 'Paiement à notre entité taïwanaise — banque claire'],
    },
    es: {
      title: '¿Listo para una conversación de sourcing real?',
      desc: 'Envíenos una foto de referencia, su cantidad objetivo y el mercado al que vende. Respondemos el mismo día (horario Taipéi) con 2–3 fábricas que preseleccionaríamos y el rango de precios que debería esperar.',
      btn: 'Iniciar conversación de sourcing',
      features: ['Respuesta el mismo día (horario Taipéi)', 'Video y fotos de inspección con cada envío', 'Precio FOB o EXW de fábrica bajo petición', 'Pago a nuestra entidad taiwanesa — banca limpia'],
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
