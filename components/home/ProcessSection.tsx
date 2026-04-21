import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import Link from 'next/link'
import { PHOTO } from '@/lib/photoLibrary'

const stepThumbs = {
  0: PHOTO.home.processThumbs[0],
  1: PHOTO.home.processThumbs[1],
  2: PHOTO.home.processThumbs[2],
  3: PHOTO.home.processThumbs[3],
  4: PHOTO.home.processThumbs[4],
} as const

export default function ProcessSection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'HOW WE WORK',
      title: 'From Inquiry to Delivery in 5 Steps',
      items: [
        { step: '01', title: 'Share Your Requirements', desc: 'Tell us your product type, target output, packaging format, and destination country. We start from your application, not a catalog.' },
        { step: '02', title: 'Engineering Consultation', desc: 'Our technical team analyzes your needs and recommends the optimal machine configuration, materials, and automation level.' },
        { step: '03', title: 'Assessment & Proposal', desc: 'Receive a detailed assessment and proposal with specifications, layout drawings, pricing, delivery timeline, and warranty terms.' },
        { step: '04', title: 'Supplier Coordination & QC', desc: 'We coordinate supplier scheduling, inspections, and quality checks. We share verification videos and photos before shipment.' },
        { step: '05', title: 'Export & Installation', desc: 'Professional crating, international shipping, customs documentation, and remote video-guided installation support.' }
      ]
    },
    cn: {
      kicker: '合作流程',
      title: '从需求到交付只需5步',
      items: [
        { step: '01', title: '提交需求', desc: '告诉我们您的产品类型、目标产能、包装形式和目的国。我们从您的应用出发，而非产品目录。' },
        { step: '02', title: '工程咨询', desc: '我们的技术团队分析您的需求，推荐最优的机器配置、材料和自动化水平。' },
        { step: '03', title: '评估与方案', desc: '获取详细方案书，包含设备规格、布局图、价格、交期和保修条款。' },
        { step: '04', title: '供应商协作与质检', desc: '我们协调供应商排程、检验与品质检验。发货前提供验证视频和照片。' },
        { step: '05', title: '出口与安装', desc: '专业木箱包装、国际运输、报关文件及远程视频安装指导。' }
      ]
    },
    zh: {
      kicker: '合作流程',
      title: '從需求到交付只需5步',
      items: [
        { step: '01', title: '提交需求', desc: '告訴我們您的產品類型、目標產能、包裝形式和目的國。我們從您的應用出發，而非產品目錄。' },
        { step: '02', title: '工程諮詢', desc: '我們的技術團隊分析您的需求，推薦最優的機器配置、材料和自動化水平。' },
        { step: '03', title: '評估與方案', desc: '獲取詳細方案書，包含設備規格、佈局圖、價格、交期和保修條款。' },
        { step: '04', title: '供應商協作與質檢', desc: '我們協調供應商排程、檢驗與品質檢驗。出貨前提供驗證影片和照片。' },
        { step: '05', title: '出口與安裝', desc: '專業木箱包裝、國際運輸、報關文件及遠端視訊安裝指導。' }
      ]
    },
    fr: {
      kicker: 'NOTRE PROCESSUS',
      title: 'De la demande à la livraison en 5 étapes',
      items: [
        { step: '01', title: 'Décrivez vos besoins', desc: 'Indiquez-nous votre type de produit, votre objectif de production, le format d\'emballage et le pays de destination. Nous partons de votre application, pas d\'un catalogue.' },
        { step: '02', title: 'Consultation technique', desc: 'Notre équipe technique analyse vos besoins et recommande la configuration machine, les matériaux et le niveau d\'automatisation optimaux.' },
        { step: '03', title: 'Évaluation et proposition', desc: 'Recevez une évaluation et une proposition détaillées avec spécifications, plans d\'implantation, tarifs, calendrier de livraison et conditions de garantie.' },
        { step: '04', title: 'Coordination fournisseur & qualité', desc: 'Nous coordonnons planning, inspections et contrôles qualité avec le fournisseur sélectionné. Nous partageons vidéos et photos de vérification avant expédition.' },
        { step: '05', title: 'Export et installation', desc: 'Mise en caisse professionnelle, expédition internationale, documents douaniers et assistance à l\'installation guidée par vidéo à distance.' }
      ]
    },
    es: {
      kicker: 'NUESTRO PROCESO',
      title: 'De la consulta a la entrega en 5 pasos',
      items: [
        { step: '01', title: 'Comparta sus requisitos', desc: 'Indíquenos su tipo de producto, producción objetivo, formato de empaque y país de destino. Partimos de su aplicación, no de un catálogo.' },
        { step: '02', title: 'Consulta de ingeniería', desc: 'Nuestro equipo técnico analiza sus necesidades y recomienda la configuración de máquina, materiales y nivel de automatización óptimos.' },
        { step: '03', title: 'Evaluación y propuesta', desc: 'Reciba una evaluación y propuesta detallada con especificaciones, planos, precios, cronograma de entrega y términos de garantía.' },
        { step: '04', title: 'Coordinación con proveedor y QC', desc: 'Coordinamos programación, inspecciones y control de calidad con el proveedor seleccionado. Compartimos videos y fotos de verificación antes del envío.' },
        { step: '05', title: 'Exportación e instalación', desc: 'Embalaje profesional en cajas de madera, envío internacional, documentación aduanera y asistencia de instalación guiada por video remoto.' }
      ]
    },
    pt: {
      kicker: 'NOSSO PROCESSO',
      title: 'Da Consulta à Entrega em 5 Etapas',
      items: [
        { step: '01', title: 'Compartilhe Seus Requisitos', desc: 'Informe-nos o tipo de produto, produção desejada, formato de embalagem e país de destino. Partimos da sua aplicação, não de um catálogo.' },
        { step: '02', title: 'Consultoria de Engenharia', desc: 'Nossa equipe técnica analisa suas necessidades e recomenda a configuração ideal da máquina, materiais e nível de automação.' },
        { step: '03', title: 'Avaliação e Proposta', desc: 'Receba uma avaliação e proposta detalhada com especificações, layout, preços, cronograma de entrega e termos de garantia.' },
        { step: '04', title: 'Coordenação com fornecedor & QC', desc: 'Coordenamos programação, inspeções e controle de qualidade com o fornecedor selecionado. Compartilhamos vídeos e fotos de verificação antes do envio.' },
        { step: '05', title: 'Exportação e Instalação', desc: 'Embalagem profissional em caixas de madeira, envio internacional, documentação aduaneira e suporte de instalação guiada por vídeo remoto.' }
      ]
    },
    ko: {
      kicker: '작업 프로세스',
      title: '문의부터 납품까지 5단계',
      items: [
        { step: '01', title: '요구사항 공유', desc: '제품 유형, 목표 생산량, 포장 형태, 수출국을 알려주세요. 카탈로그가 아닌 귀사의 응용 분야에서 시작합니다.' },
        { step: '02', title: '엔지니어링 상담', desc: '기술팀이 귀사의 요구사항을 분석하고 최적의 기계 구성, 재료 및 자동화 수준을 추천합니다.' },
        { step: '03', title: '평가 및 제안', desc: '기계 사양, 레이아웃 도면, 가격, 납기 및 보증 조건이 포함된 상세 제안서를 받으세요.' },
        { step: '04', title: '공급업체 협업 및 품질검사', desc: '선정된 공급업체와 함께 제작 및 품질 검사를 조율합니다. 출하 전 검증 영상과 사진을 공유합니다.' },
        { step: '05', title: '수출 및 설치', desc: '전문 목재 포장, 국제 운송, 통관 서류 및 원격 영상 가이드 설치 지원을 제공합니다.' }
      ]
    },
    ja: {
      kicker: 'ワークフロー',
      title: 'お問い合わせから納品まで5ステップ',
      items: [
        { step: '01', title: 'ご要望の共有', desc: '製品タイプ、目標生産量、包装形態、仕向国をお知らせください。カタログからではなく、お客様の用途から始めます。' },
        { step: '02', title: 'エンジニアリング相談', desc: '技術チームがお客様のニーズを分析し、最適な機械構成、材料、自動化レベルをご提案します。' },
        { step: '03', title: '評価・提案', desc: '機械仕様、レイアウト図面、価格、納期、保証条件を含む詳細な提案書をお届けします。' },
        { step: '04', title: 'サプライヤー連携・品質検査', desc: '選定したサプライヤーと製作・品質検査を連携します。出荷前に検証動画と写真を共有します。' },
        { step: '05', title: '輸出・設置', desc: '専門的な木枠梱包、国際輸送、通関書類、リモートビデオによる設置ガイドサポートを提供します。' }
      ]
    },
    ar: {
      kicker: 'آلية العمل',
      title: 'من الاستفسار إلى التسليم في 5 خطوات',
      items: [
        { step: '01', title: 'شارك متطلباتك', desc: 'أخبرنا بنوع منتجك، والطاقة الإنتاجية المستهدفة، وشكل التعبئة، وبلد الوجهة. نبدأ من تطبيقك، وليس من كتالوج.' },
        { step: '02', title: 'استشارة هندسية', desc: 'يقوم فريقنا الفني بتحليل احتياجاتك والتوصية بالتكوين الأمثل للماكينة والمواد ومستوى الأتمتة.' },
        { step: '03', title: 'التقييم والمقترح', desc: 'احصل على تقييم ومقترح مفصل يتضمن المواصفات ورسومات التخطيط والأسعار والجدول الزمني للتسليم وشروط الضمان.' },
        { step: '04', title: 'تنسيق المورد ومراقبة الجودة', desc: 'ننسّق الجدولة والفحوصات ومراقبة الجودة مع المورد المختار. نشارك مقاطع فيديو وصور التحقق قبل الشحن.' },
        { step: '05', title: 'التصدير والتركيب', desc: 'تعبئة احترافية في صناديق خشبية، شحن دولي، وثائق جمركية، ودعم التركيب عن بُعد عبر الفيديو.' }
      ]
    },
    th: {
      kicker: 'ขั้นตอนการทำงาน',
      title: 'จากการสอบถามถึงการส่งมอบใน 5 ขั้นตอน',
      items: [
        { step: '01', title: 'แจ้งความต้องการ', desc: 'บอกเราเกี่ยวกับประเภทผลิตภัณฑ์ กำลังการผลิตเป้าหมาย รูปแบบบรรจุภัณฑ์ และประเทศปลายทาง เราเริ่มจากการใช้งานของคุณ ไม่ใช่แค่แคตตาล็อก' },
        { step: '02', title: 'ปรึกษาวิศวกรรม', desc: 'ทีมเทคนิคของเราวิเคราะห์ความต้องการและแนะนำการกำหนดค่าเครื่องจักร วัสดุ และระดับอัตโนมัติที่เหมาะสมที่สุด' },
        { step: '03', title: 'การประเมินและข้อเสนอ', desc: 'รับการประเมินและข้อเสนอโดยละเอียดพร้อมสเปคเครื่องจักร แปลนการจัดวาง ราคา ระยะเวลาส่งมอบ และเงื่อนไขการรับประกัน' },
        { step: '04', title: 'ประสานงานซัพพลายเออร์และควบคุมคุณภาพ', desc: 'เราประสานงานการผลิตและการตรวจสอบคุณภาพกับซัพพลายเออร์ที่คัดเลือกแล้ว แชร์วิดีโอและรูปภาพการตรวจสอบก่อนจัดส่ง' },
        { step: '05', title: 'การส่งออกและติดตั้ง', desc: 'บรรจุหีบห่ออย่างมืออาชีพ จัดส่งระหว่างประเทศ เอกสารศุลกากร และบริการติดตั้งทางไกลผ่านวิดีโอ' }
      ]
    },
    vi: {
      kicker: 'QUY TRÌNH LÀM VIỆC',
      title: 'Từ Yêu Cầu đến Giao Hàng trong 5 Bước',
      items: [
        { step: '01', title: 'Chia Sẻ Yêu Cầu', desc: 'Cho chúng tôi biết loại sản phẩm, công suất mục tiêu, hình thức đóng gói và quốc gia đích. Chúng tôi bắt đầu từ ứng dụng của bạn, không phải từ danh mục sản phẩm.' },
        { step: '02', title: 'Tư Vấn Kỹ Thuật', desc: 'Đội ngũ kỹ thuật phân tích nhu cầu của bạn và đề xuất cấu hình máy, vật liệu và mức độ tự động hóa tối ưu.' },
        { step: '03', title: 'Đánh Giá & Đề Xuất', desc: 'Nhận đánh giá và đề xuất chi tiết gồm thông số máy, bản vẽ bố trí, giá cả, thời gian giao hàng và điều khoản bảo hành.' },
        { step: '04', title: 'Phối hợp nhà cung cấp & QC', desc: 'Chúng tôi phối hợp sản xuất và kiểm tra chất lượng với nhà cung cấp đã chọn. Chia sẻ video và hình ảnh kiểm chứng trước khi giao hàng.' },
        { step: '05', title: 'Xuất Khẩu & Lắp Đặt', desc: 'Đóng kiện chuyên nghiệp, vận chuyển quốc tế, chứng từ hải quan và hỗ trợ lắp đặt từ xa qua video.' }
      ]
    },
    de: {
      kicker: 'UNSER PROZESS',
      title: 'Von der Anfrage bis zur Lieferung in 5 Schritten',
      items: [
        { step: '01', title: 'Anforderungen mitteilen', desc: 'Teilen Sie uns Ihren Produkttyp, die Zielleistung, das Verpackungsformat und das Bestimmungsland mit. Wir beginnen bei Ihrer Anwendung, nicht beim Katalog.' },
        { step: '02', title: 'Technische Beratung', desc: 'Unser Technikteam analysiert Ihre Anforderungen und empfiehlt die optimale Maschinenkonfiguration, Materialien und den Automatisierungsgrad.' },
        { step: '03', title: 'Bewertung & Vorschlag', desc: 'Erhalten Sie eine detaillierte Bewertung und einen Vorschlag mit Spezifikationen, Layoutzeichnungen, Preisen, Lieferzeiten und Garantiebedingungen.' },
        { step: '04', title: 'Lieferantenkoordination & Qualitätskontrolle', desc: 'Wir koordinieren Fertigung und Qualitätsprüfung mit dem ausgewählten Lieferanten. Wir teilen Verifikationsvideos und Fotos vor dem Versand.' },
        { step: '05', title: 'Export & Installation', desc: 'Professionelle Holzkistenverpackung, internationaler Versand, Zolldokumentation und ferngestützte Videoinstallationsunterstützung.' }
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-brand-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-400">{t.kicker}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t.title}</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-5">
          {t.items.map((item: any, i: number) => (
            <div key={i} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-600 text-xl font-bold text-white shadow-lg">
                {item.step}
              </div>
              {i < t.items.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-accent-500/50 to-accent-500/10 md:block" />
              )}
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.desc}</p>

              {i in stepThumbs ? (
                <div className="mx-auto mt-5 hidden w-[150px] overflow-hidden rounded-xl ring-1 ring-white/10 md:block">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={stepThumbs[i as keyof typeof stepThumbs]}
                      alt={`${item.title} - process photo`}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={`/${lang}/assessment`}
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-accent-700"
          >
            {({ en: 'Start Step 1 →', cn: '开始第一步 →', zh: '開始第一步 →', fr: 'Commencer l\'étape 1 →', es: 'Iniciar paso 1 →', pt: 'Iniciar etapa 1 →', ko: '1단계 시작 →', ja: 'ステップ1を始める →', ar: 'ابدأ الخطوة الأولى ←', th: 'เริ่มขั้นตอนที่ 1 →', vi: 'Bắt đầu bước 1 →', de: 'Schritt 1 starten →' } as Record<string, string>)[lang] || 'Start Step 1 →'}
          </Link>
        </div>
      </Container>
    </section>
  )
}
