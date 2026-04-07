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
        { q: 'What is the minimum order quantity (MOQ)?', a: 'Our MOQ is 1 unit for most standard machines. We support both sample orders and bulk procurement for production line setups.' },
        { q: 'Can you customize machines to our specifications?', a: 'Yes. Our engineering team can customize dimensions, materials (SUS304/316L), output capacity, voltage (110V-480V), and automation level to match your production environment.' },
        { q: 'What countries do you export to?', a: 'We export to 50+ countries across Southeast Asia, Middle East, Africa, Europe, and the Americas. All machines come with CE certification and international shipping support.' },
        { q: 'Do you provide after-sales support?', a: 'Yes. We offer remote video installation guidance, operator training, 24/7 technical support, and spare parts supply with fast international shipping.' },
        { q: 'How long is the production lead time?', a: 'Standard machines: 15-30 days. Custom machines: 30-60 days. We provide factory test videos and photos before shipment for your confirmation.' },
        { q: 'Can I visit your factory?', a: 'Absolutely. We welcome factory visits to our production facilities in Taichung, Taiwan. We can arrange pickup from the airport and provide a full tour of our production lines.' },
        { q: 'Do you run factory acceptance tests before shipping?', a: 'Yes. Every machine goes through a full FAT (factory acceptance test) with your product or an agreed substitute. We share test videos and a results report before shipment.' },
      ]
    },
    cn: {
      kicker: '常见问题',
      title: '常见问题解答',
      items: [
        { q: '最低起订量（MOQ）是多少？', a: '大部分标准机型MOQ为1台。我们支持样品订单和批量采购。' },
        { q: '可以按我们的规格定制机器吗？', a: '可以。我们的工程团队可定制尺寸、材料（SUS304/316L）、产能、电压（110V-480V）和自动化水平。' },
        { q: '你们出口到哪些国家？', a: '我们出口到50多个国家，覆盖东南亚、中东、非洲、欧洲和美洲。所有机器都有CE认证和国际物流支持。' },
        { q: '提供售后支持吗？', a: '是的。我们提供远程视频安装指导、操作培训、24/7技术支持和备件快速国际物流。' },
        { q: '生产交期多长？', a: '标准机型：15-30天。定制机型：30-60天。发货前提供工厂测试视频和照片供确认。' },
        { q: '可以参观工厂吗？', a: '当然可以。欢迎来我们台中工厂参观。我们可以安排机场接送和产线全程参观。' },
        { q: '出货前会做出厂测试吗？', a: '会。每台机器都会用您的产品或确认的替代品做完整出厂测试（FAT）。我们会在发货前分享测试视频和结果报告。' },
      ]
    },
    zh: {
      kicker: '常見問題',
      title: '常見問題解答',
      items: [
        { q: '最低起訂量（MOQ）是多少？', a: '大部分標準機型MOQ為1台。我們支援樣品訂單和批量採購。' },
        { q: '可以按我們的規格客製機器嗎？', a: '可以。我們的工程團隊可客製尺寸、材料（SUS304/316L）、產能、電壓（110V-480V）和自動化水平。' },
        { q: '你們出口到哪些國家？', a: '我們出口到50多個國家，覆蓋東南亞、中東、非洲、歐洲和美洲。所有機器都有CE認證和國際物流支援。' },
        { q: '提供售後支援嗎？', a: '是的。我們提供遠端視訊安裝指導、操作培訓、24/7技術支援和備件快速國際物流。' },
        { q: '生產交期多長？', a: '標準機型：15-30天。客製機型：30-60天。發貨前提供工廠測試影片和照片供確認。' },
        { q: '可以參觀工廠嗎？', a: '當然可以。歡迎來我們台中工廠參觀。我們可以安排機場接送和產線全程參觀。' },
        { q: '出貨前會做出廠測試嗎？', a: '會。每台機器都會用您的產品或確認的替代品做完整出廠測試（FAT）。我們會在出貨前分享測試影片和結果報告。' },
      ]
    },
    fr: {
      kicker: 'FAQ',
      title: 'Questions fréquentes',
      items: [
        { q: 'Quelle est la quantité minimum de commande (MOQ) ?', a: 'Notre MOQ est de 1 unité pour la plupart des machines standard. Nous acceptons les commandes d\'échantillons et les achats en gros pour l\'équipement de lignes de production.' },
        { q: 'Pouvez-vous personnaliser les machines selon nos spécifications ?', a: 'Oui. Notre équipe d\'ingénierie peut personnaliser les dimensions, les matériaux (SUS304/316L), la capacité de production, la tension (110V-480V) et le niveau d\'automatisation selon votre environnement de production.' },
        { q: 'Vers quels pays exportez-vous ?', a: 'Nous exportons vers plus de 50 pays en Asie du Sud-Est, au Moyen-Orient, en Afrique, en Europe et dans les Amériques. Toutes les machines sont certifiées CE avec support logistique international.' },
        { q: 'Proposez-vous un service après-vente ?', a: 'Oui. Nous offrons une assistance à l\'installation par vidéo à distance, la formation des opérateurs, un support technique 24h/24 et 7j/7, et la fourniture de pièces détachées avec expédition internationale rapide.' },
        { q: 'Quel est le délai de fabrication ?', a: 'Machines standard : 15-30 jours. Machines sur mesure : 30-60 jours. Nous fournissons des vidéos et photos de tests usine avant expédition pour votre validation.' },
        { q: 'Puis-je visiter votre usine ?', a: 'Absolument. Nous accueillons les visites d\'usine dans nos installations de production à Taichung, Taïwan. Nous pouvons organiser le transfert depuis l\'aéroport et une visite complète de nos lignes de production.' },
        { q: 'Faites-vous un test d\'acceptation en usine avant l\'expédition ?', a: 'Oui. Chaque machine passe un FAT complet avec votre produit ou un substitut convenu. Nous partageons la vidéo et le rapport avant expédition.' },
      ]
    },
    es: {
      kicker: 'FAQ',
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cuál es la cantidad mínima de pedido (MOQ)?', a: 'Nuestro MOQ es de 1 unidad para la mayoría de las máquinas estándar. Aceptamos pedidos de muestra y compras al por mayor para configuraciones de líneas de producción.' },
        { q: '¿Pueden personalizar las máquinas según nuestras especificaciones?', a: 'Sí. Nuestro equipo de ingeniería puede personalizar dimensiones, materiales (SUS304/316L), capacidad de producción, voltaje (110V-480V) y nivel de automatización según su entorno productivo.' },
        { q: '¿A qué países exportan?', a: 'Exportamos a más de 50 países en el Sudeste Asiático, Medio Oriente, África, Europa y las Américas. Todas las máquinas cuentan con certificación CE y soporte logístico internacional.' },
        { q: '¿Ofrecen soporte postventa?', a: 'Sí. Ofrecemos asistencia de instalación por video remoto, capacitación de operadores, soporte técnico 24/7 y suministro de repuestos con envío internacional rápido.' },
        { q: '¿Cuál es el tiempo de fabricación?', a: 'Máquinas estándar: 15-30 días. Máquinas personalizadas: 30-60 días. Proporcionamos videos y fotos de pruebas en fábrica antes del envío para su confirmación.' },
        { q: '¿Puedo visitar su fábrica?', a: 'Por supuesto. Recibimos visitas en nuestras instalaciones de producción en Taichung, Taiwán. Podemos organizar el traslado desde el aeropuerto y un recorrido completo por nuestras líneas de producción.' },
        { q: '¿Realizan pruebas de aceptación en fábrica antes del envío?', a: 'Sí. Cada máquina pasa un FAT completo con su producto o un sustituto acordado. Compartimos el video y el informe antes del envío.' },
      ]
    },
    pt: {
      kicker: 'FAQ',
      title: 'Perguntas Frequentes',
      items: [
        { q: 'Qual é a quantidade mínima de pedido (MOQ)?', a: 'Nosso MOQ é de 1 unidade para a maioria das máquinas padrão. Aceitamos pedidos de amostra e compras em grande quantidade para configurações de linhas de produção.' },
        { q: 'Vocês podem personalizar as máquinas conforme nossas especificações?', a: 'Sim. Nossa equipe de engenharia pode personalizar dimensões, materiais (SUS304/316L), capacidade de produção, voltagem (110V-480V) e nível de automação para atender ao seu ambiente de produção.' },
        { q: 'Para quais países vocês exportam?', a: 'Exportamos para mais de 50 países no Sudeste Asiático, Oriente Médio, África, Europa e Américas. Todas as máquinas possuem certificação CE e suporte logístico internacional.' },
        { q: 'Vocês oferecem suporte pós-venda?', a: 'Sim. Oferecemos orientação de instalação por vídeo remoto, treinamento de operadores, suporte técnico 24/7 e fornecimento de peças de reposição com envio internacional rápido.' },
        { q: 'Qual é o prazo de produção?', a: 'Máquinas padrão: 15-30 dias. Máquinas personalizadas: 30-60 dias. Fornecemos vídeos e fotos de testes de fábrica antes do envio para sua confirmação.' },
        { q: 'Posso visitar a fábrica?', a: 'Com certeza. Recebemos visitas em nossas instalações de produção em Taichung, Taiwan. Podemos organizar transporte do aeroporto e um tour completo pelas nossas linhas de produção.' },
        { q: 'Vocês fazem teste de aceitação em fábrica antes do envio?', a: 'Sim. Cada máquina passa por um FAT completo com seu produto ou substituto acordado. Compartilhamos o vídeo e o relatório antes do envio.' },
      ]
    },
    ko: {
      kicker: 'FAQ',
      title: '자주 묻는 질문',
      items: [
        { q: '최소 주문 수량(MOQ)은 얼마인가요?', a: '대부분의 표준 기계에 대해 MOQ는 1대입니다. 샘플 주문과 생산 라인 구축을 위한 대량 구매 모두 지원합니다.' },
        { q: '사양에 맞게 기계를 맞춤 제작할 수 있나요?', a: '네. 당사 엔지니어링 팀은 치수, 재료(SUS304/316L), 생산 용량, 전압(110V-480V) 및 자동화 수준을 귀사의 생산 환경에 맞게 맞춤 설정할 수 있습니다.' },
        { q: '어떤 국가로 수출하나요?', a: '동남아시아, 중동, 아프리카, 유럽 및 미주 지역의 50개 이상 국가에 수출합니다. 모든 기계는 CE 인증과 국제 물류 지원을 포함합니다.' },
        { q: '애프터서비스를 제공하나요?', a: '네. 원격 비디오 설치 안내, 운전자 교육, 24/7 기술 지원 및 빠른 국제 배송으로 예비 부품을 공급합니다.' },
        { q: '생산 리드타임은 얼마나 되나요?', a: '표준 기계: 15-30일. 맞춤 기계: 30-60일. 출하 전 공장 테스트 영상과 사진을 제공하여 확인하실 수 있습니다.' },
        { q: '공장 방문이 가능한가요?', a: '물론입니다. 대만 타이중에 위치한 생산 시설 방문을 환영합니다. 공항 픽업 및 생산 라인 전체 투어를 배정할 수 있습니다.' },
        { q: '출하 전 공장 인수 테스트(FAT)를 진행하나요?', a: '네. 모든 장비는 고객 제품 또는 합의된 대체품으로 FAT를 거칩니다. 출하 전 테스트 영상과 결과 보고서를 공유합니다.' },
      ]
    },
    ja: {
      kicker: 'FAQ',
      title: 'よくある質問',
      items: [
        { q: '最小注文数量（MOQ）はいくつですか？', a: 'ほとんどの標準機でMOQは1台です。サンプル注文と生産ライン構築のための一括購入の両方に対応しています。' },
        { q: '仕様に合わせて機械をカスタマイズできますか？', a: 'はい。当社のエンジニアリングチームは、寸法、材質（SUS304/316L）、生産能力、電圧（110V-480V）、自動化レベルをお客様の生産環境に合わせてカスタマイズできます。' },
        { q: 'どの国に輸出していますか？', a: '東南アジア、中東、アフリカ、ヨーロッパ、南北アメリカの50カ国以上に輸出しています。すべての機械にCE認証と国際物流サポートが付いています。' },
        { q: 'アフターサービスはありますか？', a: 'はい。リモートビデオによる設置ガイド、オペレーター研修、24時間年中無休の技術サポート、迅速な国際配送によるスペアパーツ供給を提供しています。' },
        { q: '生産リードタイムはどのくらいですか？', a: '標準機：15〜30日。カスタム機：30〜60日。出荷前に工場テスト動画と写真を提供し、ご確認いただけます。' },
        { q: '工場見学はできますか？', a: 'もちろんです。台湾・台中の生産施設への訪問を歓迎いたします。空港送迎と生産ラインの完全なツアーを手配できます。' },
        { q: '出荷前に工場受入試験（FAT）を行いますか？', a: 'はい。すべての機械はお客様の製品または合意した代替品でFATを実施します。出荷前にテスト動画と結果レポートを共有します。' },
      ]
    },
    ar: {
      kicker: 'الأسئلة الشائعة',
      title: 'الأسئلة المتكررة',
      items: [
        { q: 'ما هو الحد الأدنى لكمية الطلب (MOQ)؟', a: 'الحد الأدنى لكمية الطلب هو وحدة واحدة لمعظم الماكينات القياسية. ندعم طلبات العينات والشراء بالجملة لإعداد خطوط الإنتاج.' },
        { q: 'هل يمكنكم تخصيص الماكينات وفقاً لمواصفاتنا؟', a: 'نعم. يمكن لفريقنا الهندسي تخصيص الأبعاد والمواد (SUS304/316L) والطاقة الإنتاجية والجهد الكهربائي (110V-480V) ومستوى الأتمتة لتتناسب مع بيئة الإنتاج الخاصة بكم.' },
        { q: 'إلى أي دول تصدرون؟', a: 'نصدر إلى أكثر من 50 دولة في جنوب شرق آسيا والشرق الأوسط وأفريقيا وأوروبا والأمريكتين. جميع الماكينات حاصلة على شهادة CE مع دعم الشحن الدولي.' },
        { q: 'هل تقدمون دعم ما بعد البيع؟', a: 'نعم. نقدم إرشاد التركيب عبر الفيديو عن بُعد، وتدريب المشغلين، والدعم الفني على مدار الساعة طوال أيام الأسبوع، وتوريد قطع الغيار بشحن دولي سريع.' },
        { q: 'ما هي مدة التصنيع؟', a: 'الماكينات القياسية: 15-30 يوماً. الماكينات المخصصة: 30-60 يوماً. نقدم مقاطع فيديو وصور اختبارات المصنع قبل الشحن لتأكيدكم.' },
        { q: 'هل يمكنني زيارة مصنعكم؟', a: 'بالتأكيد. نرحب بزيارات المصنع في منشآت الإنتاج لدينا في تايتشونغ، تايوان. يمكننا ترتيب النقل من المطار وجولة كاملة في خطوط الإنتاج.' },
        { q: 'هل تجرون اختبار قبول المصنع (FAT) قبل الشحن؟', a: 'نعم. كل آلة تخضع لاختبار FAT كامل بمنتجكم أو بديل متفق عليه. نشارك الفيديو والتقرير قبل الشحن.' },
      ]
    },
    th: {
      kicker: 'คำถามที่พบบ่อย',
      title: 'คำถามที่พบบ่อย',
      items: [
        { q: 'จำนวนสั่งซื้อขั้นต่ำ (MOQ) คือเท่าไร?', a: 'MOQ ของเราคือ 1 เครื่องสำหรับเครื่องจักรมาตรฐานส่วนใหญ่ เรารองรับทั้งออเดอร์ตัวอย่างและการจัดซื้อจำนวนมากสำหรับการจัดตั้งสายการผลิต' },
        { q: 'สามารถปรับแต่งเครื่องจักรตามสเปคของเราได้หรือไม่?', a: 'ได้ ทีมวิศวกรรมของเราสามารถปรับแต่งขนาด วัสดุ (SUS304/316L) กำลังการผลิต แรงดันไฟฟ้า (110V-480V) และระดับอัตโนมัติให้เหมาะกับสภาพแวดล้อมการผลิตของคุณ' },
        { q: 'คุณส่งออกไปยังประเทศใดบ้าง?', a: 'เราส่งออกไปยังกว่า 50 ประเทศทั่วเอเชียตะวันออกเฉียงใต้ ตะวันออกกลาง แอฟริกา ยุโรป และอเมริกา เครื่องจักรทุกเครื่องมีใบรับรอง CE และบริการขนส่งระหว่างประเทศ' },
        { q: 'มีบริการหลังการขายหรือไม่?', a: 'มี เราให้บริการแนะนำการติดตั้งผ่านวิดีโอทางไกล การฝึกอบรมผู้ปฏิบัติงาน การสนับสนุนทางเทคนิคตลอด 24 ชั่วโมง และจัดส่งอะไหล่ด้วยการขนส่งระหว่างประเทศที่รวดเร็ว' },
        { q: 'ระยะเวลาในการผลิตนานเท่าไร?', a: 'เครื่องจักรมาตรฐาน: 15-30 วัน เครื่องจักรสั่งทำ: 30-60 วัน เราจัดส่งวิดีโอและรูปภาพทดสอบจากโรงงานก่อนจัดส่งเพื่อยืนยัน' },
        { q: 'สามารถเข้าเยี่ยมชมโรงงานได้หรือไม่?', a: 'ได้แน่นอน เรายินดีต้อนรับการเยี่ยมชมโรงงานผลิตของเราในไถจง ไต้หวัน เราสามารถจัดรับจากสนามบินและพาชมสายการผลิตทั้งหมด' },
        { q: 'มีการทดสอบรับรองที่โรงงาน (FAT) ก่อนจัดส่งหรือไม่?', a: 'มี เครื่องทุกเครื่องผ่าน FAT เต็มรูปแบบด้วยผลิตภัณฑ์ของคุณหรือตัวแทนที่ตกลงกัน เราแชร์วิดีโอและรายงานก่อนจัดส่ง' },
      ]
    },
    vi: {
      kicker: 'CÂU HỎI THƯỜNG GẶP',
      title: 'Câu Hỏi Thường Gặp',
      items: [
        { q: 'Số lượng đặt hàng tối thiểu (MOQ) là bao nhiêu?', a: 'MOQ của chúng tôi là 1 chiếc cho hầu hết các máy tiêu chuẩn. Chúng tôi hỗ trợ cả đơn hàng mẫu và mua sỉ cho thiết lập dây chuyền sản xuất.' },
        { q: 'Các bạn có thể tùy chỉnh máy theo thông số của chúng tôi không?', a: 'Có. Đội ngũ kỹ thuật có thể tùy chỉnh kích thước, vật liệu (SUS304/316L), công suất, điện áp (110V-480V) và mức độ tự động hóa phù hợp với môi trường sản xuất của bạn.' },
        { q: 'Các bạn xuất khẩu sang những quốc gia nào?', a: 'Chúng tôi xuất khẩu sang hơn 50 quốc gia ở Đông Nam Á, Trung Đông, Châu Phi, Châu Âu và Châu Mỹ. Tất cả máy đều có chứng nhận CE và hỗ trợ vận chuyển quốc tế.' },
        { q: 'Các bạn có hỗ trợ sau bán hàng không?', a: 'Có. Chúng tôi cung cấp hướng dẫn lắp đặt qua video từ xa, đào tạo vận hành, hỗ trợ kỹ thuật 24/7 và cung cấp phụ tùng thay thế với vận chuyển quốc tế nhanh chóng.' },
        { q: 'Thời gian sản xuất mất bao lâu?', a: 'Máy tiêu chuẩn: 15-30 ngày. Máy tùy chỉnh: 30-60 ngày. Chúng tôi cung cấp video và hình ảnh thử nghiệm tại nhà máy trước khi giao hàng để bạn xác nhận.' },
        { q: 'Tôi có thể tham quan nhà máy không?', a: 'Hoàn toàn có thể. Chúng tôi hoan nghênh tham quan nhà máy sản xuất tại Đài Trung, Đài Loan. Chúng tôi có thể sắp xếp đón tại sân bay và tham quan toàn bộ dây chuyền sản xuất.' },
        { q: 'Có kiểm tra nghiệm thu tại nhà máy (FAT) trước khi giao không?', a: 'Có. Mỗi máy đều qua FAT đầy đủ bằng sản phẩm của bạn hoặc sản phẩm thay thế đã thống nhất. Chúng tôi chia sẻ video và báo cáo trước khi giao.' },
      ]
    },
    de: {
      kicker: 'FAQ',
      title: 'Häufig gestellte Fragen',
      items: [
        { q: 'Wie hoch ist die Mindestbestellmenge (MOQ)?', a: 'Unsere MOQ beträgt 1 Einheit für die meisten Standardmaschinen. Wir unterstützen sowohl Musterbestellungen als auch Großeinkäufe für Produktionslinien.' },
        { q: 'Können Sie Maschinen nach unseren Spezifikationen anpassen?', a: 'Ja. Unser Ingenieurteam kann Abmessungen, Materialien (SUS304/316L), Produktionskapazität, Spannung (110V-480V) und Automatisierungsgrad an Ihre Produktionsumgebung anpassen.' },
        { q: 'In welche Länder exportieren Sie?', a: 'Wir exportieren in über 50 Länder in Südostasien, dem Nahen Osten, Afrika, Europa und Amerika. Alle Maschinen sind CE-zertifiziert und werden mit internationalem Logistiksupport geliefert.' },
        { q: 'Bieten Sie After-Sales-Support an?', a: 'Ja. Wir bieten Ferninstallation per Video, Bedienschulung, technischen Support rund um die Uhr und Ersatzteilversorgung mit schnellem internationalem Versand.' },
        { q: 'Wie lang ist die Produktionsvorlaufzeit?', a: 'Standardmaschinen: 15-30 Tage. Sondermaschinen: 30-60 Tage. Wir stellen Werkstestvideos und Fotos vor dem Versand zur Bestätigung bereit.' },
        { q: 'Kann ich Ihre Fabrik besuchen?', a: 'Selbstverständlich. Wir begrüßen Fabrikbesuche in unseren Produktionsanlagen in Taichung, Taiwan. Wir können den Transfer vom Flughafen und eine vollständige Tour durch unsere Produktionslinien arrangieren.' },
        { q: 'Führen Sie vor dem Versand einen Werksabnahmetest (FAT) durch?', a: 'Ja. Jede Maschine durchläuft einen vollständigen FAT mit Ihrem Produkt oder einem vereinbarten Ersatz. Wir teilen das Testvideo und den Bericht vor dem Versand.' },
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
