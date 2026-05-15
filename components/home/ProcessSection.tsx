import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export default function ProcessSection({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'HOW WE WORK',
      title: 'From your first message to your container, in 5 steps',
      items: [
        { step: '01', title: 'Send us your brief', desc: 'A reference photo or competitor link is enough to start. Tell us target quantity, the price you have in mind, and your destination market. No NDA at this stage — just a sourcing conversation.' },
        { step: '02', title: 'We shortlist 2–3 factories', desc: 'From our established Taiwan + China supplier network plus targeted vetting. Factories that quote suspiciously low, refuse to share certificates, or have unverifiable history are ruled out before they reach you.' },
        { step: '03', title: 'You get one transparent quote', desc: 'Our resale price, the underlying FOB or EXW (on request), the lead time, and the payment terms. No surprise commission added at the end.' },
        { step: '04', title: 'We inspect before it ships', desc: 'Taiwan factories: our team drives to the site. China factories: goods enter our forwarder’s warehouse and we inspect before export. You get photos and video of the actual goods — not stock images.' },
        { step: '05', title: 'Goods ship under our name', desc: 'Because we are the seller of record, customs documents, B/L, and any after-sales claim sit cleanly between you and us. No three-way email chains with a factory that doesn’t reply.' }
      ]
    },
    cn: {
      kicker: '合作流程',
      title: '从您第一封讯息到您的货柜，5 步搞定',
      items: [
        { step: '01', title: '给我们一份简单的 brief', desc: '一张参考图、一个竞品连结就够。再告诉我们目标数量、心目中的价格、销往哪个市场。这阶段不签 NDA——就是单纯的采购对话。' },
        { step: '02', title: '我们筛 2–3 家工厂出来', desc: '从我们成熟的台湾与中国供应商网络出发，加上针对性查证。报价异常低、不肯提供认证、来历查不到的工厂在抵达您面前之前就已经被刷掉。' },
        { step: '03', title: '一份透明报价给您', desc: '我们的转售价、底下的 FOB 或 EXW（您问就给）、交期、付款条件。最后不会再冒出额外抽佣。' },
        { step: '04', title: '出货前我们亲自验货', desc: '台湾的工厂团队直接开车去。中国的工厂出货先进我们合作货代的仓库，验货后才放行出口。给您看的是实拍照片与影片，不是工厂样照。' },
        { step: '05', title: '以我们名义出货', desc: '因为我们才是卖方，报关单、提单、售后索赔都干净落在您和我们之间。不会出现「写信给工厂三天没人回」的状况。' }
      ]
    },
    zh: {
      kicker: '合作流程',
      title: '從你第一封訊息到你的貨櫃，5 步搞定',
      items: [
        { step: '01', title: '給我們一份簡單的 brief', desc: '一張參考圖、一個競品連結就夠。再告訴我們目標數量、心目中的價格、銷往哪個市場。這階段不簽 NDA——就是單純的採購對話。' },
        { step: '02', title: '我們篩 2–3 家工廠出來', desc: '從我們成熟的台灣與中國供應商網絡出發，加上針對性查證。報價異常低、不肯提供認證、來歷查不到的工廠在抵達你面前之前就已經被刷掉。' },
        { step: '03', title: '一份透明報價給你', desc: '我們的轉售價、底下的 FOB 或 EXW（你問就給）、交期、付款條件。最後不會再冒出額外抽佣。' },
        { step: '04', title: '出貨前我們親自驗貨', desc: '台灣的工廠團隊直接開車去。中國的工廠出貨先進我們合作貨代的倉庫，驗貨後才放行出口。給你看的是實拍照片與影片，不是工廠樣照。' },
        { step: '05', title: '以我們名義出貨', desc: '因為我們才是賣方，報關單、提單、售後索賠都乾淨落在你和我們之間。不會出現「寫信給工廠三天沒人回」的狀況。' }
      ]
    },
    fr: {
      kicker: 'NOTRE PROCESSUS',
      title: 'De votre premier message à votre conteneur, en 5 étapes',
      items: [
        { step: '01', title: 'Envoyez-nous un brief simple', desc: "Une photo de référence ou un lien concurrent suffit. Indiquez quantité cible, prix visé et marché de destination. Pas de NDA à ce stade — juste une conversation sourcing." },
        { step: '02', title: 'Nous présélectionnons 2–3 usines', desc: "Depuis notre réseau fournisseurs établi à Taïwan et en Chine, complété par une vérification ciblée. Les usines aux prix suspicieusement bas, qui refusent de partager leurs certificats ou dont l'historique est invérifiable sont écartées avant de vous être présentées." },
        { step: '03', title: 'Un devis transparent', desc: "Notre prix de revente, le FOB ou EXW sous-jacent (sur demande), le délai et les conditions de paiement. Pas de commission surprise ajoutée à la fin." },
        { step: '04', title: 'Inspection avant expédition', desc: "Usines à Taïwan : notre équipe se déplace. Usines en Chine : la marchandise arrive à l'entrepôt de notre transitaire et nous inspectons avant export. Photos et vidéo de la marchandise réelle — pas de visuel d'usine." },
        { step: '05', title: 'Expédition à notre nom', desc: "Comme nous sommes le vendeur enregistré, documents douaniers, B/L et réclamations après-vente passent proprement entre vous et nous. Pas de chaînes d'e-mails à trois avec une usine qui ne répond pas." }
      ]
    },
    es: {
      kicker: 'NUESTRO PROCESO',
      title: 'Desde su primer mensaje hasta su contenedor, en 5 pasos',
      items: [
        { step: '01', title: 'Envíenos un brief simple', desc: 'Una foto de referencia o un enlace de la competencia basta. Díganos cantidad objetivo, precio que tiene en mente y mercado de destino. Sin NDA en esta etapa — solo conversación de sourcing.' },
        { step: '02', title: 'Preseleccionamos 2–3 fábricas', desc: 'Desde nuestra red establecida de proveedores en Taiwán y China, más verificación dirigida. Fábricas con precios sospechosamente bajos, que se niegan a compartir certificados o con historial no verificable son descartadas antes de llegar a usted.' },
        { step: '03', title: 'Una cotización transparente', desc: 'Nuestro precio de reventa, el FOB o EXW subyacente (bajo petición), tiempo de entrega y condiciones de pago. Sin comisión sorpresa al final.' },
        { step: '04', title: 'Inspección antes del envío', desc: 'Fábricas en Taiwán: nuestro equipo se desplaza. Fábricas en China: la mercancía entra al almacén de nuestro agente de carga y la inspeccionamos antes de exportar. Fotos y video de la mercancía real — no imágenes de fábrica.' },
        { step: '05', title: 'La mercancía se exporta a nuestro nombre', desc: 'Como somos el vendedor registrado, los documentos aduaneros, B/L y cualquier reclamo post-venta quedan limpios entre usted y nosotros. Sin cadenas de correos a tres con una fábrica que no responde.' }
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

              {/* Process thumbnails removed — were stock machinery photos. */}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-accent-700"
          >
            {({ en: 'Start Step 1 →', cn: '开始第一步 →', zh: '開始第一步 →', fr: 'Commencer l\'étape 1 →', es: 'Iniciar paso 1 →', pt: 'Iniciar etapa 1 →', ko: '1단계 시작 →', ja: 'ステップ1を始める →', ar: 'ابدأ الخطوة الأولى ←', th: 'เริ่มขั้นตอนที่ 1 →', vi: 'Bắt đầu bước 1 →', de: 'Schritt 1 starten →' } as Record<string, string>)[lang] || 'Start Step 1 →'}
          </Link>
        </div>
      </Container>
    </section>
  )
}
