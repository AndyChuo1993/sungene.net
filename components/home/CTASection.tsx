import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import CTAButtonWrapper from '@/components/home/CTAButtonWrapper'

export default function CTASection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      title: 'Not Sure Which Machine You Need?',
      desc: 'Send us your product details — type, target output, and packaging format. Our engineering team will recommend the best machinery solution within 24 hours.',
      btn: 'Send Your Product → Get Recommendation',
      features: ['No minimum order required', 'Factory test video before shipment', 'Voltage customization available', 'International shipping arranged'],
    },
    cn: {
      title: '不确定需要哪台机器？',
      desc: '发送您的产品详情——类型、目标产量和包装形式。我们的工程团队将在24小时内推荐最佳机械方案。',
      btn: '发送产品信息 → 获取推荐',
      features: ['无最低起订量要求', '发货前提供工厂测试视频', '可定制电压', '安排国际物流'],
    },
    zh: {
      title: '不確定需要哪台機器？',
      desc: '發送您的產品詳情——類型、目標產量和包裝形式。我們的工程團隊將在24小時內推薦最佳機械方案。',
      btn: '發送產品資訊 → 取得推薦',
      features: ['無最低起訂量要求', '發貨前提供工廠測試影片', '可客製電壓', '安排國際物流'],
    },
    fr: {
      title: 'Pas sûr de quelle machine vous avez besoin ?',
      desc: 'Envoyez-nous les détails de votre produit — type, production cible et format d\'emballage. Notre équipe d\'ingénierie vous recommandera la meilleure solution machines sous 24 heures.',
      btn: 'Envoyez votre produit → Obtenez une recommandation',
      features: ['Aucune quantité minimum requise', 'Vidéo de test usine avant expédition', 'Adaptation de tension disponible', 'Expédition internationale organisée'],
    },
    es: {
      title: '¿No sabe qué máquina necesita?',
      desc: 'Envíenos los detalles de su producto — tipo, producción objetivo y formato de empaque. Nuestro equipo de ingeniería le recomendará la mejor solución de maquinaria en 24 horas.',
      btn: 'Envíe su producto → Obtenga recomendación',
      features: ['Sin pedido mínimo requerido', 'Video de prueba en fábrica antes del envío', 'Personalización de voltaje disponible', 'Envío internacional coordinado'],
    },
    pt: {
      title: 'Não tem certeza de qual máquina precisa?',
      desc: 'Envie-nos os detalhes do seu produto — tipo, produção desejada e formato de embalagem. Nossa equipe de engenharia recomendará a melhor solução em maquinário em 24 horas.',
      btn: 'Envie seu produto → Receba recomendação',
      features: ['Sem quantidade mínima de pedido', 'Vídeo de teste de fábrica antes do envio', 'Personalização de voltagem disponível', 'Envio internacional organizado'],
    },
    ko: {
      title: '어떤 기계가 필요한지 모르시나요?',
      desc: '제품 세부정보를 보내주세요 — 유형, 목표 생산량, 포장 형태. 당사 엔지니어링 팀이 24시간 이내에 최적의 기계 솔루션을 추천해 드립니다.',
      btn: '제품 정보 보내기 → 추천 받기',
      features: ['최소 주문 수량 없음', '출하 전 공장 테스트 영상 제공', '전압 맞춤 설정 가능', '국제 운송 주선'],
    },
    ja: {
      title: 'どの機械が必要かわからない？',
      desc: '製品の詳細をお送りください — 種類、目標生産量、包装形態。当社のエンジニアリングチームが24時間以内に最適な機械ソリューションをご提案します。',
      btn: '製品情報を送信 → 提案を受ける',
      features: ['最小注文数量の制限なし', '出荷前の工場テスト動画', '電圧カスタマイズ対応', '国際配送手配'],
    },
    ar: {
      title: 'لست متأكدًا من الماكينة التي تحتاجها؟',
      desc: 'أرسل لنا تفاصيل منتجك — النوع، والطاقة الإنتاجية المستهدفة، وشكل التغليف. سيوصي فريقنا الهندسي بأفضل حل للماكينات خلال 24 ساعة.',
      btn: 'أرسل منتجك → احصل على توصية',
      features: ['لا يوجد حد أدنى للطلب', 'فيديو اختبار المصنع قبل الشحن', 'إمكانية تخصيص الجهد الكهربائي', 'ترتيب الشحن الدولي'],
    },
    th: {
      title: 'ไม่แน่ใจว่าต้องใช้เครื่องจักรใด?',
      desc: 'ส่งรายละเอียดผลิตภัณฑ์ของคุณมา — ประเภท กำลังการผลิตเป้าหมาย และรูปแบบบรรจุภัณฑ์ ทีมวิศวกรรมจะแนะนำโซลูชันเครื่องจักรที่ดีที่สุดภายใน 24 ชั่วโมง',
      btn: 'ส่งข้อมูลผลิตภัณฑ์ → รับคำแนะนำ',
      features: ['ไม่มีจำนวนสั่งซื้อขั้นต่ำ', 'วิดีโอทดสอบจากโรงงานก่อนจัดส่ง', 'ปรับแรงดันไฟฟ้าได้', 'จัดส่งระหว่างประเทศ'],
    },
    vi: {
      title: 'Không chắc cần máy nào?',
      desc: 'Gửi cho chúng tôi thông tin sản phẩm — loại, công suất mục tiêu và hình thức đóng gói. Đội ngũ kỹ thuật sẽ đề xuất giải pháp máy móc tốt nhất trong vòng 24 giờ.',
      btn: 'Gửi thông tin sản phẩm → Nhận đề xuất',
      features: ['Không yêu cầu đơn hàng tối thiểu', 'Video thử nghiệm tại nhà máy trước khi giao', 'Tùy chỉnh điện áp theo yêu cầu', 'Sắp xếp vận chuyển quốc tế'],
    },
    de: {
      title: 'Nicht sicher, welche Maschine Sie brauchen?',
      desc: 'Senden Sie uns Ihre Produktdetails — Typ, Zielleistung und Verpackungsformat. Unser Ingenieurteam empfiehlt die beste Maschinenlösung innerhalb von 24 Stunden.',
      btn: 'Produkt senden → Empfehlung erhalten',
      features: ['Keine Mindestbestellmenge erforderlich', 'Werkstestvideos vor dem Versand', 'Spannungsanpassung verfügbar', 'Internationaler Versand organisiert'],
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
