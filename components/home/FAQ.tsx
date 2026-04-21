'use client'
import { useState } from 'react'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function FAQ({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'FAQ',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What is the minimum order quantity (MOQ)?', a: 'Our MOQ is 1 unit for most standard machines. We support both sample orders and bulk procurement for line integration setups.' },
        { q: 'Can you customize machines to our specifications?', a: 'Yes. Our engineering team can customize dimensions, materials (SUS304/316L), output capacity, voltage (110V-480V), and automation level to match your site conditions.' },
        { q: 'What countries do you support shipments to?', a: 'We support shipments to 50+ countries across Southeast Asia, Middle East, Africa, Europe, and the Americas. We provide export coordination and CE-oriented documentation support where applicable.' },
        { q: 'Do you provide after-sales support?', a: 'Yes. We offer remote video installation guidance, operator training, 24/7 technical support, and spare parts supply with fast international shipping.' },
        { q: 'How long is the delivery lead time?', a: 'Standard machines: 15-30 days. Custom configurations: 30-60 days. We provide verification videos and photos before shipment for your confirmation.' },
        { q: 'Can I arrange a site visit?', a: 'Yes. We can help arrange supplier site visits and engineering reviews in Taiwan or China depending on your project. We can also provide a practical on-site checklist.' },
        { q: 'Do you coordinate FAT/SAT tests before shipping?', a: 'When applicable, we coordinate supplier FAT/SAT and function checks with your product or an agreed substitute. We share test videos and a results report before shipment.' },
      ]
    },
    cn: {
      kicker: '常见问题',
      title: '常见问题解答',
      items: [
        { q: '最低起订量（MOQ）是多少？', a: '大部分标准机型MOQ为1台。我们支持样品订单和批量采购。' },
        { q: '可以按我们的规格定制机器吗？', a: '可以。我们的工程团队可定制尺寸、材料（SUS304/316L）、产能、电压（110V-480V）和自动化水平。' },
        { q: '你们支持哪些国家的交付？', a: '我们支持50多个国家的交付，覆盖东南亚、中东、非洲、欧洲和美洲。可提供CE文件支持与国际物流协调。' },
        { q: '提供售后支持吗？', a: '是的。我们提供远程视频安装指导、操作培训、24/7技术支持和备件快速国际物流。' },
        { q: '交付交期多长？', a: '标准机型：15-30天。定制配置：30-60天。发货前提供验证视频和照片供确认。' },
        { q: '可以安排现场参访吗？', a: '当然可以。可依项目安排供应商现场参访与工程确认（台湾或中国），并提供现场核对清单。' },
        { q: '出货前会做 FAT/SAT 测试吗？', a: '视设备与供应商而定，我们可协助协调供应商端的 FAT/SAT 与功能检测（以您的产品或确认的替代品）。出货前分享测试视频和结果报告。' },
      ]
    },
    zh: {
      kicker: '常見問題',
      title: '常見問題解答',
      items: [
        { q: '最低起訂量（MOQ）是多少？', a: '大部分標準機型MOQ為1台。我們支援樣品訂單和批量採購。' },
        { q: '可以按我們的規格客製機器嗎？', a: '可以。我們的工程團隊可客製尺寸、材料（SUS304/316L）、產能、電壓（110V-480V）和自動化水平。' },
        { q: '你們支援哪些國家的交付？', a: '我們支援50多個國家的交付，覆蓋東南亞、中東、非洲、歐洲和美洲。可提供CE文件支援與國際物流協調。' },
        { q: '提供售後支援嗎？', a: '是的。我們提供遠端視訊安裝指導、操作培訓、24/7技術支援和備件快速國際物流。' },
        { q: '交付交期多長？', a: '標準機型：15-30天。客製配置：30-60天。出貨前提供驗證影片和照片供確認。' },
        { q: '可以安排現場參訪嗎？', a: '當然可以。可依專案安排供應商現場參訪與工程確認（台灣或中國），並提供現場核對清單。' },
        { q: '出貨前會做 FAT/SAT 測試嗎？', a: '視設備與供應商而定，我們可協助協調供應商端的 FAT/SAT 與功能檢測（以您的產品或確認的替代品）。出貨前分享測試影片和結果報告。' },
      ]
    },
    fr: {
      kicker: 'FAQ',
      title: 'Questions fréquentes',
      items: [
        { q: 'Quelle est la quantité minimum de commande (MOQ) ?', a: 'Notre MOQ est de 1 unité pour la plupart des machines standard. Nous acceptons les commandes d\'échantillons et les achats en gros pour des configurations d’intégration de ligne.' },
        { q: 'Pouvez-vous personnaliser les machines selon nos spécifications ?', a: 'Oui. Notre équipe d\'ingénierie peut personnaliser les dimensions, les matériaux (SUS304/316L), la capacité, la tension (110V-480V) et le niveau d\'automatisation selon vos contraintes de site.' },
        { q: 'Vers quels pays exportez-vous ?', a: 'Nous exportons vers plus de 50 pays en Asie du Sud-Est, au Moyen-Orient, en Afrique, en Europe et dans les Amériques. Nous fournissons la coordination export et la documentation CE lorsque c’est applicable.' },
        { q: 'Proposez-vous un service après-vente ?', a: 'Oui. Nous offrons une assistance à l\'installation par vidéo à distance, la formation des opérateurs, un support technique 24h/24 et 7j/7, et la fourniture de pièces détachées avec expédition internationale rapide.' },
        { q: 'Quel est le délai de livraison ?', a: 'Machines standard : 15-30 jours. Configurations sur mesure : 30-60 jours. Nous fournissons des vidéos et photos de vérification avant expédition pour votre validation.' },
        { q: 'Puis-je organiser une visite sur site ?', a: 'Oui. Nous pouvons organiser des visites chez les fournisseurs et des revues techniques à Taïwan ou en Chine selon votre projet, avec une checklist de contrôle.' },
        { q: 'Coordonnez-vous des tests FAT/SAT avant l\'expédition ?', a: 'Selon l’équipement et le fournisseur, nous coordonnons FAT/SAT et des contrôles fonctionnels avec votre produit ou un substitut convenu. Nous partageons la vidéo et le rapport avant expédition.' },
      ]
    },
    es: {
      kicker: 'FAQ',
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cuál es la cantidad mínima de pedido (MOQ)?', a: 'Nuestro MOQ es de 1 unidad para la mayoría de las máquinas estándar. Aceptamos pedidos de muestra y compras al por mayor para configuraciones de integración de línea.' },
        { q: '¿Pueden personalizar las máquinas según nuestras especificaciones?', a: 'Sí. Nuestro equipo de ingeniería puede personalizar dimensiones, materiales (SUS304/316L), capacidad, voltaje (110V-480V) y nivel de automatización según las condiciones de su sitio.' },
        { q: '¿A qué países exportan?', a: 'Exportamos a más de 50 países en el Sudeste Asiático, Medio Oriente, África, Europa y las Américas. Ofrecemos coordinación logística internacional y soporte de documentación CE cuando aplica.' },
        { q: '¿Ofrecen soporte postventa?', a: 'Sí. Ofrecemos asistencia de instalación por video remoto, capacitación de operadores, soporte técnico 24/7 y suministro de repuestos con envío internacional rápido.' },
        { q: '¿Cuál es el tiempo de entrega?', a: 'Máquinas estándar: 15-30 días. Configuraciones personalizadas: 30-60 días. Proporcionamos videos y fotos de verificación antes del envío para su confirmación.' },
        { q: '¿Puedo organizar una visita en sitio?', a: 'Sí. Podemos coordinar visitas a proveedores y revisiones de ingeniería en Taiwán o China según su proyecto, con una lista de verificación práctica.' },
        { q: '¿Coordinan pruebas FAT/SAT antes del envío?', a: 'Según el equipo y el proveedor, coordinamos FAT/SAT y verificaciones funcionales con su producto o un sustituto acordado. Compartimos el video y el informe antes del envío.' },
      ]
    },
    pt: {
      kicker: 'FAQ',
      title: 'Perguntas Frequentes',
      items: [
        { q: 'Qual é a quantidade mínima de pedido (MOQ)?', a: 'Nosso MOQ é de 1 unidade para a maioria das máquinas padrão. Aceitamos pedidos de amostra e compras em grande quantidade para configurações de integração de linha.' },
        { q: 'Vocês podem personalizar as máquinas conforme nossas especificações?', a: 'Sim. Nossa equipe de engenharia pode personalizar dimensões, materiais (SUS304/316L), capacidade, voltagem (110V-480V) e nível de automação para atender às condições do seu site.' },
        { q: 'Para quais países vocês exportam?', a: 'Exportamos para mais de 50 países no Sudeste Asiático, Oriente Médio, África, Europa e Américas. Oferecemos coordenação logística internacional e suporte de documentação CE quando aplicável.' },
        { q: 'Vocês oferecem suporte pós-venda?', a: 'Sim. Oferecemos orientação de instalação por vídeo remoto, treinamento de operadores, suporte técnico 24/7 e fornecimento de peças de reposição com envio internacional rápido.' },
        { q: 'Qual é o prazo de entrega?', a: 'Máquinas padrão: 15-30 dias. Configurações personalizadas: 30-60 dias. Fornecemos vídeos e fotos de verificação antes do envio para sua confirmação.' },
        { q: 'Posso organizar uma visita presencial?', a: 'Sim. Podemos coordenar visitas a fornecedores e revisões de engenharia em Taiwan ou China conforme seu projeto, com um checklist prático.' },
        { q: 'Vocês coordenam testes FAT/SAT antes do envio?', a: 'Conforme o equipamento e o fornecedor, coordenamos FAT/SAT e verificações funcionais com seu produto ou substituto acordado. Compartilhamos o vídeo e o relatório antes do envio.' },
      ]
    },
    ko: {
      kicker: 'FAQ',
      title: '자주 묻는 질문',
      items: [
        { q: '최소 주문 수량(MOQ)은 얼마인가요?', a: '대부분의 표준 장비에 대해 MOQ는 1대입니다. 샘플 주문과 라인 통합 구성을 위한 대량 구매 모두 지원합니다.' },
        { q: '사양에 맞게 기계를 맞춤 설정할 수 있나요?', a: '네. 치수, 재질(SUS304/316L), 용량, 전압(110V-480V) 및 자동화 수준을 현장 조건에 맞춰 구성할 수 있습니다.' },
        { q: '어떤 국가로 수출하나요?', a: '동남아시아, 중동, 아프리카, 유럽 및 미주 지역의 50개 이상 국가에 수출합니다. 국제 물류 조율과 CE 문서 지원(해당 시)을 제공합니다.' },
        { q: '애프터서비스를 제공하나요?', a: '네. 원격 비디오 설치 안내, 운전자 교육, 24/7 기술 지원 및 빠른 국제 배송으로 예비 부품을 공급합니다.' },
        { q: '납기(리드타임)는 얼마나 되나요?', a: '표준 장비: 15-30일. 맞춤 구성: 30-60일. 출하 전 검증 영상과 사진을 제공하여 확인하실 수 있습니다.' },
        { q: '현장 방문을 조율할 수 있나요?', a: '네. 프로젝트에 따라 대만 또는 중국에서 공급업체 현장 방문과 엔지니어링 리뷰를 조율할 수 있으며, 체크리스트도 제공합니다.' },
        { q: '출하 전 FAT/SAT를 조율하나요?', a: '장비와 공급사에 따라 FAT/SAT 및 기능 검사를 조율할 수 있습니다(고객 제품 또는 합의된 대체품). 출하 전 테스트 영상과 결과 보고서를 공유합니다.' },
      ]
    },
    ja: {
      kicker: 'FAQ',
      title: 'よくある質問',
      items: [
        { q: '最小注文数量（MOQ）はいくつですか？', a: 'ほとんどの標準機でMOQは1台です。サンプル注文とライン統合構成のための一括購入の両方に対応しています。' },
        { q: '仕様に合わせて機械をカスタマイズできますか？', a: 'はい。当社のエンジニアリングチームは、寸法、材質（SUS304/316L）、生産能力、電圧（110V-480V）、自動化レベルをお客様の生産環境に合わせてカスタマイズできます。' },
        { q: 'どの国に輸出していますか？', a: '東南アジア、中東、アフリカ、ヨーロッパ、南北アメリカの50カ国以上に輸出しています。国際物流の調整と、必要に応じたCE関連書類サポートを提供します。' },
        { q: 'アフターサービスはありますか？', a: 'はい。リモートビデオによる設置ガイド、オペレーター研修、24時間年中無休の技術サポート、迅速な国際配送によるスペアパーツ供給を提供しています。' },
        { q: '納期（リードタイム）はどのくらいですか？', a: '標準機：15〜30日。カスタム構成：30〜60日。出荷前に検証動画と写真を提供し、ご確認いただけます。' },
        { q: '現地訪問の調整は可能ですか？', a: 'はい。プロジェクトに応じて台湾または中国でサプライヤー現地訪問と技術レビューを調整できます。実務的なチェックリストも提供します。' },
        { q: '出荷前にFAT/SATは調整できますか？', a: '設備とサプライヤーにより、FAT/SATおよび機能確認を出荷前に調整できます（お客様の製品または合意した代替品）。出荷前にテスト動画と結果レポートを共有します。' },
      ]
    },
    ar: {
      kicker: 'الأسئلة الشائعة',
      title: 'الأسئلة المتكررة',
      items: [
        { q: 'ما هو الحد الأدنى لكمية الطلب (MOQ)؟', a: 'الحد الأدنى لكمية الطلب هو وحدة واحدة لمعظم الماكينات القياسية. ندعم طلبات العينات والشراء بالجملة لإعداد خطوط الإنتاج.' },
        { q: 'هل يمكنكم تخصيص الماكينات وفقاً لمواصفاتنا؟', a: 'نعم. يمكن لفريقنا الهندسي تخصيص الأبعاد والمواد (SUS304/316L) والطاقة الإنتاجية والجهد الكهربائي (110V-480V) ومستوى الأتمتة لتتناسب مع بيئة الإنتاج الخاصة بكم.' },
        { q: 'إلى أي دول تصدرون؟', a: 'نصدر إلى أكثر من 50 دولة في جنوب شرق آسيا والشرق الأوسط وأفريقيا وأوروبا والأمريكتين. نوفر تنسيق الشحن الدولي ودعم وثائق CE عند الحاجة.' },
        { q: 'هل تقدمون دعم ما بعد البيع؟', a: 'نعم. نقدم إرشاد التركيب عبر الفيديو عن بُعد، وتدريب المشغلين، والدعم الفني على مدار الساعة طوال أيام الأسبوع، وتوريد قطع الغيار بشحن دولي سريع.' },
        { q: 'ما هي مدة التصنيع؟', a: 'الماكينات القياسية: 15-30 يوماً. الماكينات المخصصة: 30-60 يوماً. نقدم مقاطع فيديو وصور تحقق قبل الشحن لتأكيدكم.' },
        { q: 'هل يمكنني ترتيب زيارة ميدانية؟', a: 'نعم. يمكننا تنسيق زيارات مواقع الموردين والمراجعات الهندسية في تايوان أو الصين حسب مشروعك، مع قائمة تحقق عملية.' },
        { q: 'هل تنسقون اختبارات FAT/SAT قبل الشحن؟', a: 'حسب المعدة والمورد، يمكننا تنسيق FAT/SAT وفحوصات الوظائف باستخدام منتجكم أو بديل متفق عليه. نشارك الفيديو والتقرير قبل الشحن.' },
      ]
    },
    th: {
      kicker: 'คำถามที่พบบ่อย',
      title: 'คำถามที่พบบ่อย',
      items: [
        { q: 'จำนวนสั่งซื้อขั้นต่ำ (MOQ) คือเท่าไร?', a: 'MOQ ของเราคือ 1 เครื่องสำหรับเครื่องจักรมาตรฐานส่วนใหญ่ เรารองรับทั้งออเดอร์ตัวอย่างและการจัดซื้อจำนวนมากสำหรับการบูรณาการไลน์' },
        { q: 'สามารถปรับแต่งเครื่องจักรตามสเปคของเราได้หรือไม่?', a: 'ได้ ทีมวิศวกรรมของเราสามารถปรับแต่งขนาด วัสดุ (SUS304/316L) กำลังการผลิต แรงดันไฟฟ้า (110V-480V) และระดับอัตโนมัติให้เหมาะกับสภาพแวดล้อมการผลิตของคุณ' },
        { q: 'คุณส่งออกไปยังประเทศใดบ้าง?', a: 'เราส่งออกไปยังกว่า 50 ประเทศทั่วเอเชียตะวันออกเฉียงใต้ ตะวันออกกลาง แอฟริกา ยุโรป และอเมริกา พร้อมการประสานงานโลจิสติกส์และการสนับสนุนเอกสาร CE เมื่อเหมาะสม' },
        { q: 'มีบริการหลังการขายหรือไม่?', a: 'มี เราให้บริการแนะนำการติดตั้งผ่านวิดีโอทางไกล การฝึกอบรมผู้ปฏิบัติงาน การสนับสนุนทางเทคนิคตลอด 24 ชั่วโมง และจัดส่งอะไหล่ด้วยการขนส่งระหว่างประเทศที่รวดเร็ว' },
        { q: 'ระยะเวลาในการผลิตนานเท่าไร?', a: 'เครื่องจักรมาตรฐาน: 15-30 วัน เครื่องจักรสั่งทำ: 30-60 วัน เราจัดส่งวิดีโอและรูปภาพการตรวจสอบก่อนจัดส่งเพื่อยืนยัน' },
        { q: 'สามารถจัดตารางเยี่ยมชมหน้างานได้หรือไม่?', a: 'ได้ เราสามารถประสานงานการเยี่ยมชมซัพพลายเออร์และรีวิวด้านวิศวกรรมในไต้หวันหรือจีนตามโปรเจกต์ พร้อมเช็กลิสต์ตรวจสอบ' },
        { q: 'มีการทดสอบ FAT/SAT ก่อนจัดส่งหรือไม่?', a: 'ขึ้นอยู่กับอุปกรณ์และซัพพลายเออร์ เราสามารถประสาน FAT/SAT และการตรวจสอบการทำงานด้วยผลิตภัณฑ์ของคุณหรือสิ่งทดแทนที่ตกลงกัน พร้อมแชร์วิดีโอและรายงานก่อนจัดส่ง' },
      ]
    },
    vi: {
      kicker: 'CÂU HỎI THƯỜNG GẶP',
      title: 'Câu Hỏi Thường Gặp',
      items: [
        { q: 'Số lượng đặt hàng tối thiểu (MOQ) là bao nhiêu?', a: 'MOQ của chúng tôi là 1 chiếc cho hầu hết các máy tiêu chuẩn. Chúng tôi hỗ trợ cả đơn hàng mẫu và mua sỉ cho dự án tích hợp dây chuyền.' },
        { q: 'Các bạn có thể tùy chỉnh máy theo thông số của chúng tôi không?', a: 'Có. Đội ngũ kỹ thuật có thể tùy chỉnh kích thước, vật liệu (SUS304/316L), công suất, điện áp (110V-480V) và mức độ tự động hóa phù hợp với môi trường sản xuất của bạn.' },
        { q: 'Các bạn xuất khẩu sang những quốc gia nào?', a: 'Chúng tôi xuất khẩu sang hơn 50 quốc gia ở Đông Nam Á, Trung Đông, Châu Phi, Châu Âu và Châu Mỹ. Chúng tôi hỗ trợ điều phối logistics quốc tế và tài liệu CE khi phù hợp.' },
        { q: 'Các bạn có hỗ trợ sau bán hàng không?', a: 'Có. Chúng tôi cung cấp hướng dẫn lắp đặt qua video từ xa, đào tạo vận hành, hỗ trợ kỹ thuật 24/7 và cung cấp phụ tùng thay thế với vận chuyển quốc tế nhanh chóng.' },
        { q: 'Thời gian sản xuất mất bao lâu?', a: 'Máy tiêu chuẩn: 15-30 ngày. Máy tùy chỉnh: 30-60 ngày. Chúng tôi cung cấp video và hình ảnh kiểm chứng trước khi giao hàng để bạn xác nhận.' },
        { q: 'Tôi có thể sắp xếp tham quan thực địa không?', a: 'Có. Tùy theo dự án, chúng tôi có thể điều phối tham quan nhà cung cấp và rà soát kỹ thuật tại Đài Loan hoặc Trung Quốc, kèm checklist thực tế.' },
        { q: 'Có thể điều phối FAT/SAT trước khi giao không?', a: 'Tùy theo thiết bị và nhà cung cấp, chúng tôi có thể điều phối FAT/SAT và kiểm tra chức năng bằng sản phẩm của bạn hoặc sản phẩm thay thế đã thống nhất. Chúng tôi chia sẻ video và báo cáo trước khi giao.' },
      ]
    },
    de: {
      kicker: 'FAQ',
      title: 'Häufig gestellte Fragen',
      items: [
        { q: 'Wie hoch ist die Mindestbestellmenge (MOQ)?', a: 'Unsere MOQ beträgt 1 Einheit für die meisten Standardmaschinen. Wir unterstützen sowohl Musterbestellungen als auch Großeinkäufe für Produktionslinien.' },
        { q: 'Können Sie Maschinen nach unseren Spezifikationen anpassen?', a: 'Ja. Unser Ingenieurteam kann Abmessungen, Materialien (SUS304/316L), Produktionskapazität, Spannung (110V-480V) und Automatisierungsgrad an Ihre Produktionsumgebung anpassen.' },
        { q: 'In welche Länder unterstützen Sie Lieferungen?', a: 'Wir unterstützen Lieferungen in über 50 Länder in Südostasien, dem Nahen Osten, Afrika, Europa und Amerika. Wir bieten CE-Unterstützung und internationale Logistikkoordination.' },
        { q: 'Bieten Sie After-Sales-Support an?', a: 'Ja. Wir bieten Ferninstallation per Video, Bedienschulung, technischen Support rund um die Uhr und Ersatzteilversorgung mit schnellem internationalem Versand.' },
        { q: 'Wie lang ist die Lieferzeit?', a: 'Standardmaschinen: 15-30 Tage. Sonderkonfigurationen: 30-60 Tage. Wir stellen Verifikationsvideos und Fotos vor dem Versand zur Bestätigung bereit.' },
        { q: 'Kann ich einen Vor-Ort-Besuch organisieren?', a: 'Ja. Je nach Projekt koordinieren wir Lieferantenbesuche und Engineering-Reviews in Taiwan oder China und stellen eine praktische Checkliste bereit.' },
        { q: 'Koordinieren Sie FAT/SAT vor dem Versand?', a: 'Je nach Maschine und Lieferant koordinieren wir FAT/SAT und Funktionsprüfungen mit Ihrem Produkt oder einem vereinbarten Ersatz. Wir teilen das Testvideo und den Bericht vor dem Versand.' },
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-200/60">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-600">{t.kicker}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">{t.title}</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200">
          {t.items.map((item: any, i: number) => (
            <AccordionItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-base font-semibold text-gray-950 pr-4">{question}</span>
        <svg className={`h-5 w-5 shrink-0 text-gray-400 transition ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-base leading-relaxed text-gray-600">{answer}</p>
      </div>
    </div>
  )
}
