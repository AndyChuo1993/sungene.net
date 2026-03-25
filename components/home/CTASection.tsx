import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'

export default function CTASection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      title: 'Ready to Find the Right Machine?',
      desc: 'Tell us what you need to produce or pack — product type, target output, and budget range. Our engineering team will recommend the best machinery solution within 24 hours.',
      btn: 'Get a Free Quote Now',
      features: ['No minimum order required', 'Factory test video before shipment', 'Voltage customization available', 'International shipping arranged'],
    },
    cn: {
      title: '准备好找到合适的机器了吗？',
      desc: '告诉我们您需要生产或包装什么——产品类型、目标产能和预算范围。我们的工程团队将在24小时内为您推荐最佳机械方案。',
      btn: '立即获取免费报价',
      features: ['无最低起订量要求', '发货前提供工厂测试视频', '可定制电压', '安排国际物流'],
    },
    zh: {
      title: '準備好找到合適的機器了嗎？',
      desc: '告訴我們您需要生產或包裝什麼——產品類型、目標產能和預算範圍。我們的工程團隊將在24小時內為您推薦最佳機械方案。',
      btn: '立即取得免費報價',
      features: ['無最低起訂量要求', '發貨前提供工廠測試影片', '可客製電壓', '安排國際物流'],
    },
    fr: {
      title: 'Prêt à trouver la bonne machine ?',
      desc: 'Dites-nous ce que vous devez produire ou emballer — type de produit, objectif de production et fourchette budgétaire. Notre équipe d\'ingénierie vous recommandera la meilleure solution machines sous 24 heures.',
      btn: 'Obtenir un devis gratuit',
      features: ['Aucune quantité minimum requise', 'Vidéo de test usine avant expédition', 'Adaptation de tension disponible', 'Expédition internationale organisée'],
    },
    es: {
      title: '¿Listo para encontrar la máquina adecuada?',
      desc: 'Cuéntenos qué necesita producir o empacar — tipo de producto, producción objetivo y rango de presupuesto. Nuestro equipo de ingeniería le recomendará la mejor solución de maquinaria en 24 horas.',
      btn: 'Obtener cotización gratuita',
      features: ['Sin pedido mínimo requerido', 'Video de prueba en fábrica antes del envío', 'Personalización de voltaje disponible', 'Envío internacional coordinado'],
    },
    pt: {
      title: 'Pronto para Encontrar a Máquina Certa?',
      desc: 'Diga-nos o que você precisa produzir ou embalar — tipo de produto, produção desejada e faixa de orçamento. Nossa equipe de engenharia recomendará a melhor solução em maquinário em 24 horas.',
      btn: 'Solicitar Orçamento Grátis',
      features: ['Sem quantidade mínima de pedido', 'Vídeo de teste de fábrica antes do envio', 'Personalização de voltagem disponível', 'Envio internacional organizado'],
    },
    ko: {
      title: '적합한 기계를 찾을 준비가 되셨나요?',
      desc: '생산 또는 포장에 필요한 것을 알려주세요 — 제품 유형, 목표 생산량, 예산 범위. 당사 엔지니어링 팀이 24시간 내에 최적의 기계 솔루션을 추천해 드립니다.',
      btn: '무료 견적 받기',
      features: ['최소 주문 수량 없음', '출하 전 공장 테스트 영상 제공', '전압 맞춤 설정 가능', '국제 운송 주선'],
    },
    ja: {
      title: '最適な機械を見つける準備はできましたか？',
      desc: '生産・包装したいものをお知らせください — 製品タイプ、目標生産量、予算範囲。当社のエンジニアリングチームが24時間以内に最適な機械ソリューションをご提案します。',
      btn: '無料見積りを依頼する',
      features: ['最小注文数量の制限なし', '出荷前の工場テスト動画', '電圧カスタマイズ対応', '国際配送手配'],
    },
    ar: {
      title: 'هل أنت مستعد للعثور على الماكينة المناسبة؟',
      desc: 'أخبرنا بما تحتاج إلى إنتاجه أو تعبئته — نوع المنتج، والطاقة الإنتاجية المستهدفة، ونطاق الميزانية. سيوصي فريقنا الهندسي بأفضل حل للماكينات خلال 24 ساعة.',
      btn: 'احصل على عرض أسعار مجاني',
      features: ['لا يوجد حد أدنى للطلب', 'فيديو اختبار المصنع قبل الشحن', 'إمكانية تخصيص الجهد الكهربائي', 'ترتيب الشحن الدولي'],
    },
    th: {
      title: 'พร้อมที่จะค้นหาเครื่องจักรที่เหมาะสมหรือยัง?',
      desc: 'บอกเราว่าคุณต้องการผลิตหรือบรรจุอะไร — ประเภทผลิตภัณฑ์ กำลังการผลิตเป้าหมาย และงบประมาณ ทีมวิศวกรรมของเราจะแนะนำโซลูชันเครื่องจักรที่ดีที่สุดภายใน 24 ชั่วโมง',
      btn: 'รับใบเสนอราคาฟรี',
      features: ['ไม่มีจำนวนสั่งซื้อขั้นต่ำ', 'วิดีโอทดสอบจากโรงงานก่อนจัดส่ง', 'ปรับแรงดันไฟฟ้าได้', 'จัดส่งระหว่างประเทศ'],
    },
    vi: {
      title: 'Sẵn Sàng Tìm Máy Phù Hợp?',
      desc: 'Cho chúng tôi biết bạn cần sản xuất hoặc đóng gói gì — loại sản phẩm, công suất mục tiêu và phạm vi ngân sách. Đội ngũ kỹ thuật sẽ đề xuất giải pháp máy móc tốt nhất trong vòng 24 giờ.',
      btn: 'Nhận Báo Giá Miễn Phí',
      features: ['Không yêu cầu đơn hàng tối thiểu', 'Video thử nghiệm tại nhà máy trước khi giao', 'Tùy chỉnh điện áp theo yêu cầu', 'Sắp xếp vận chuyển quốc tế'],
    },
    de: {
      title: 'Bereit, die richtige Maschine zu finden?',
      desc: 'Teilen Sie uns mit, was Sie produzieren oder verpacken möchten — Produkttyp, Zielleistung und Budgetrahmen. Unser Ingenieurteam empfiehlt Ihnen die beste Maschinenlösung innerhalb von 24 Stunden.',
      btn: 'Kostenloses Angebot anfordern',
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
              <ButtonLink href={`/${lang}/contact`} size="lg">
                {t.btn}
              </ButtonLink>
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
