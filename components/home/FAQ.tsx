'use client'
import { useState } from 'react'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function FAQ({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'FAQ',
      title: 'Common questions before we talk',
      items: [
        { q: 'What products do you source?', a: 'Packaging products (bags, boxes, jars, pumps, closures), home goods (kitchenware, decor, organisation), and garden tools and accessories. For long-term partners we also take adjacent categories — cosmetics, candles, glass, light hardware.' },
        { q: 'What is your minimum order?', a: 'USD 1,000 per shipment. We turn down very small mixed orders so we can give the orders we take the attention they need.' },
        { q: 'How does pricing work? Is there a commission on top?', a: 'We are a trading company, not a commission agent. We buy the goods from the factory and resell to you. The price you see is the final landed cost we quote — no hidden factory kickback, no per-shipment commission. We disclose the relevant FOB or EXW factory price on request.' },
        { q: 'How do you handle factory inspection?', a: 'We inspect personally. Taiwan factories: our team drives to the site. China factories: goods enter our forwarder’s warehouse and we inspect before export. We have walked away from factories that offered envelopes to pass sub-spec goods. Inspection videos and photos with every shipment.' },
        { q: 'Where are you based?', a: 'Two registered companies — one in Taichung, Taiwan; one in mainland China. The Taiwan entity invoices and receives payment; the China entity handles factory relationships and pre-shipment logistics.' },
        { q: 'Can I see your Alibaba.com track record?', a: 'Yes — momas.en.alibaba.com. Verified supplier for three years. Star rating fluctuates between 3 and 5 stars depending on the period; check the live page for current standing.' },
        { q: 'How fast do you reply?', a: 'Same day during Taipei business hours (UTC+8, Mon–Fri 09:00–18:00). Outside hours, within 12 hours.' },
        { q: 'What language do you communicate in?', a: 'We are Chinese-native and use machine translation plus chat tools (WhatsApp, WeChat, LINE, email) for English/French/Spanish customers. Communication is via text — typos may happen but the meaning carries cleanly.' },
      ]
    },
    cn: {
      kicker: '常见问题',
      title: '聊之前先看这些问题',
      items: [
        { q: '你们采购哪些产品？', a: '主要是包装产品（袋、盒、瓶、泵头、封口）、家居用品（厨房、布置、收纳）、园艺工具与配件。长期合作客户的相邻品类——化妆品、蜡烛、玻璃、轻五金——也可以接。' },
        { q: '最低订单是多少？', a: 'USD 1,000 起。一次很多项、杂小单我们会婉拒——这样才有余力把接下来的订单做好。' },
        { q: '报价怎么算？工厂价之外会抽佣吗？', a: '我们是贸易商，不是抽佣代理。我们把货从工厂买下，再转卖给您。您看到的就是最终到岸价，没有躲在后面的工厂红包，也没有每笔出货的抽成。您要看 FOB 或 EXW 工厂价我们会直接揭露。' },
        { q: '验货怎么做？', a: '我们亲自验。台湾工厂团队直接开车去；中国工厂出货先进我们合作货代仓库，由我们验货后才放行出口。曾经遇过工厂塞红包想让我们放行不合规的货，我们选择不合作。每批附验货视频与照片。' },
        { q: '你们在哪？', a: '两家公司——一家在台湾台中，一家在中国大陆。台湾公司开发票、收款；中国公司管工厂关系与出口前的物流。' },
        { q: '能查得到你们的 Alibaba.com 记录吗？', a: '可以——momas.en.alibaba.com。已经是认证供应商三年。星等会随期间在 3 到 5 星之间波动，建议直接点过去看当下状态。' },
        { q: '回复多快？', a: '台北上班时间（UTC+8，周一至五 09:00–18:00）当日回复。下班时段 12 小时内。' },
        { q: '你们用什么语言沟通？', a: '我们是中文母语，对英、法、西语客户用翻译软体加上 WhatsApp / WeChat / LINE / Email 文字沟通。错别字偶尔有，但意思传达干净。' },
      ]
    },
    zh: {
      kicker: '常見問題',
      title: '聊之前先看這些問題',
      items: [
        { q: '你們採購哪些產品？', a: '主要是包裝產品（袋、盒、瓶、泵頭、封口）、家居用品（廚房、佈置、收納）、園藝工具與配件。長期合作客戶的相鄰品類——化妝品、蠟燭、玻璃、輕五金——也可以接。' },
        { q: '最低訂單是多少？', a: 'USD 1,000 起。一次很多項、雜小單我們會婉拒——這樣才有餘力把接下來的訂單做好。' },
        { q: '報價怎麼算？工廠價之外會抽佣嗎？', a: '我們是貿易商，不是抽佣代理。我們把貨從工廠買下、再轉賣給你。你看到的就是最終到岸價，沒有躲在後面的工廠紅包，也沒有每筆出貨的抽成。你要看 FOB 或 EXW 工廠價我們會直接揭露。' },
        { q: '驗貨怎麼做？', a: '我們親自驗。台灣工廠團隊直接開車去；中國工廠出貨先進我們合作貨代倉庫，由我們驗貨後才放行出口。曾經遇過工廠塞紅包想讓我們放行不合規的貨，我們選擇不合作。每批附驗貨影片與照片。' },
        { q: '你們在哪？', a: '兩家公司——一家在台灣台中，一家在中國大陸。台灣公司開發票、收款；中國公司管工廠關係與出口前的物流。' },
        { q: '能查得到你們的 Alibaba.com 紀錄嗎？', a: '可以——momas.en.alibaba.com。已經是認證供應商三年。星等會隨期間在 3 到 5 星之間波動，建議直接點過去看當下狀態。' },
        { q: '回覆多快？', a: '台灣上班時間（UTC+8，週一至五 09:00–18:00）當日回。下班時段 12 小時內。' },
        { q: '你們用什麼語言溝通？', a: '我們是中文母語，對英、法、西語客戶用翻譯軟體加上 WhatsApp / WeChat / LINE / Email 文字溝通。錯別字偶爾有，但意思傳達乾淨。' },
      ]
    },
    fr: {
      kicker: 'FAQ',
      title: 'Les questions à éclaircir avant de discuter',
      items: [
        { q: 'Quels produits sourcez-vous ?', a: "Principalement de l'emballage (sachets, boîtes, flacons, pompes, fermetures), des articles de maison (cuisine, décoration, rangement) et des outils et accessoires de jardin. Catégories voisines (cosmétiques, bougies, verre, petite quincaillerie) acceptées pour les partenariats de long terme." },
        { q: 'Quelle est la commande minimum ?', a: 'USD 1 000 par expédition. Nous refusons les très petites commandes éparpillées pour pouvoir donner aux commandes prises le suivi nécessaire.' },
        { q: 'Comment est calculé le prix ? Y a-t-il une commission ?', a: "Nous sommes une société de négoce, pas un agent à la commission. Nous achetons la marchandise à l'usine et vous la revendons. Le prix affiché est le coût final livré — pas de pourboire d'usine, pas de commission par expédition. Le prix FOB ou EXW usine est communiqué sur demande." },
        { q: "Comment se passe l'inspection en usine ?", a: "Nous inspectons en personne. Usines à Taïwan : notre équipe se déplace. Usines en Chine : la marchandise arrive à l'entrepôt de notre transitaire et nous inspectons avant export. Nous avons refusé des usines qui proposaient une enveloppe pour faire passer de la marchandise hors spécification. Vidéos et photos d'inspection à chaque expédition." },
        { q: 'Où êtes-vous basés ?', a: "Deux sociétés enregistrées — une à Taichung, Taïwan ; une en Chine continentale. L'entité taïwanaise facture et reçoit les paiements ; l'entité chinoise gère les relations usines et la logistique pré-export." },
        { q: "Peut-on vérifier votre historique sur Alibaba.com ?", a: "Oui — momas.en.alibaba.com. Fournisseur vérifié depuis trois ans. La note fluctue entre 3 et 5 étoiles selon la période ; vérifiez en direct." },
        { q: 'Délai de réponse ?', a: "Le jour même pendant les heures de bureau de Taipei (UTC+8, lun.–ven. 09:00–18:00). Hors horaires, sous 12 heures." },
        { q: 'En quelle langue communiquez-vous ?', a: "Notre langue maternelle est le chinois. Pour les clients anglo/franco/hispanophones, nous utilisons la traduction automatique combinée à WhatsApp / WeChat / LINE / e-mail. Communication par écrit — quelques coquilles possibles, mais le sens passe clairement." },
      ]
    },
    es: {
      kicker: 'FAQ',
      title: 'Preguntas a aclarar antes de hablar',
      items: [
        { q: '¿Qué productos abastecen?', a: 'Principalmente productos de empaque (bolsas, cajas, frascos, bombas, cierres), artículos del hogar (cocina, decoración, organización) y herramientas y accesorios de jardín. Para socios de largo plazo, también categorías cercanas: cosmética, velas, vidrio, ferretería ligera.' },
        { q: '¿Cuál es el pedido mínimo?', a: 'USD 1 000 por envío. Rechazamos pedidos muy pequeños y dispersos para poder dar a los aceptados la atención que necesitan.' },
        { q: '¿Cómo se calcula el precio? ¿Hay comisión sobre el precio de fábrica?', a: 'Somos una empresa comercial, no un agente a comisión. Compramos la mercancía a la fábrica y se la revendemos. El precio mostrado es el costo final entregado — sin propina oculta de fábrica, sin comisión por envío. El precio FOB o EXW de fábrica se comunica bajo petición.' },
        { q: '¿Cómo realizan la inspección en fábrica?', a: 'Inspeccionamos en persona. Fábricas en Taiwán: nuestro equipo se desplaza. Fábricas en China: la mercancía entra al almacén de nuestro agente de carga y la inspeccionamos antes de exportar. Hemos rechazado fábricas que ofrecían sobres para aprobar mercancía fuera de especificación. Video y fotos de inspección con cada envío.' },
        { q: '¿Dónde están ubicados?', a: 'Dos empresas registradas — una en Taichung, Taiwán; otra en China continental. La entidad taiwanesa factura y recibe pagos; la entidad china gestiona relaciones con fábricas y logística pre-exportación.' },
        { q: '¿Puedo verificar su historial en Alibaba.com?', a: 'Sí — momas.en.alibaba.com. Proveedor verificado desde hace tres años. La calificación fluctúa entre 3 y 5 estrellas según el período; verifique en vivo.' },
        { q: '¿Qué tan rápido responden?', a: 'Mismo día en horario laboral de Taipéi (UTC+8, lun–vie 09:00–18:00). Fuera de horario, en 12 horas.' },
        { q: '¿En qué idioma se comunican?', a: 'Nuestro idioma materno es el chino. Para clientes en inglés/francés/español usamos traducción automática combinada con WhatsApp / WeChat / LINE / correo. Comunicación por escrito — alguna errata puntual, pero el sentido se mantiene claro.' },
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
