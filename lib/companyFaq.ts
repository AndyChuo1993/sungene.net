/**
 * Company-level FAQs surfaced as FAQPage schema on /about and /contact.
 * Questions that apply to the company as a whole — not machine-specific.
 *
 * These appear as rich result FAQ accordions in Google search when the
 * page ranks, increasing SERP real estate by ~40% and lifting CTR.
 */

import type { Lang } from '@/lib/i18n'

type Faq = { q: string; a: string }

export const COMPANY_FAQS: Record<Lang, Faq[]> = {
  en: [
    { q: 'Where is SunGene located?', a: 'SunGene Co., LTD. is headquartered at 201 Guangfu Rd., Central District, Taichung 40041, Taiwan, with a regional office in Xiamen, China. All machines are manufactured in Taichung and shipped from Taichung Port.' },
    { q: 'Is SunGene CE certified?', a: 'Yes. All SunGene packaging and food processing machinery is CE certified and built with SUS304 or 316L stainless steel on food-contact surfaces. Certificates are delivered with every shipment.' },
    { q: 'What is the minimum order quantity?', a: 'There is no MOQ — SunGene accepts orders as small as 1 unit. Each machine is configured to the customer\'s product, packaging format, target output, and local voltage/frequency.' },
    { q: 'What is the typical lead time?', a: 'Lead time is 30–60 days for single machines and 45–90 days for complete lines, counting from confirmed order and deposit receipt.' },
    { q: 'What payment and shipping terms do you offer?', a: 'Payment: T/T (30% deposit, 70% before shipment) or L/C at sight. Shipping: FOB Taichung Port or CIF to any world port.' },
    { q: 'How fast does SunGene reply to inquiries?', a: 'The engineering team in Taichung replies within 1 business day (UTC+8). WhatsApp and email are the fastest channels.' },
    { q: 'Does SunGene offer OEM / ODM customization?', a: 'Yes. Materials, dimensions, capacity, voltage/frequency, HMI language, and automation modules can all be configured. Factory layout consulting is included for turnkey projects.' },
    { q: 'Which countries does SunGene export to?', a: 'SunGene exports to over 40 countries across Southeast Asia, Middle East, Europe, Americas, Africa, and Oceania. Voltage and frequency are configured to the destination country as part of the order.' },
  ],
  zh: [
    { q: 'SunGene 位於哪裡？', a: 'SunGene Co., LTD.（上瑾錸有限公司）總部設於台灣台中市中區光復路 201 號（40041），中國廈門設有辦公室。所有機器於台中製造並由台中港出口。' },
    { q: 'SunGene 的機器有 CE 認證嗎？', a: '有。所有 SunGene 包裝與食品加工機械均通過 CE 認證，食品接觸面採用 SUS304 或 316L 不鏽鋼；每台出貨附證書。' },
    { q: '最小訂購量是多少？', a: '沒有 MOQ——SunGene 最低接受 1 台訂單；每台機器依客戶產品、包材形式、目標產速與當地電壓頻率客製配置。' },
    { q: '交期大約多久？', a: '單機交期 30–60 天、整線 45–90 天，自確認訂單並收到訂金後起算。' },
    { q: '付款與出貨條件是什麼？', a: '付款：T/T（30% 訂金、70% 出貨前付清）或即期 L/C。出貨：FOB 台中港或 CIF 至任一世界港口。' },
    { q: 'SunGene 多久回覆詢盤？', a: '台中工程團隊於 1 個工作日內回覆（UTC+8）。WhatsApp 與電郵為最快管道。' },
    { q: 'SunGene 提供 OEM／ODM 客製嗎？', a: '提供。材質、尺寸、產能、電壓／頻率、HMI 語言與自動化模組皆可客製；整線案件包含工廠佈局諮詢。' },
    { q: 'SunGene 出口到哪些國家？', a: '已出口至 40+ 國家，涵蓋東南亞、中東、歐洲、美洲、非洲與大洋洲。電壓與頻率依目的地訂單配置。' },
  ],
  cn: [
    { q: 'SunGene 位于哪里？', a: 'SunGene Co., LTD.（上瑾锐有限公司）总部设于台湾台中市中区光复路 201 号（40041），中国厦门设有办公室。所有机器于台中制造并由台中港出口。' },
    { q: 'SunGene 的机器有 CE 认证吗？', a: '有。所有 SunGene 包装与食品加工机械均通过 CE 认证，食品接触面采用 SUS304 或 316L 不锈钢；每台出货附证书。' },
    { q: '最小起订量是多少？', a: '没有 MOQ——SunGene 最少接受 1 台订单；每台机器依客户产品、包材形式、目标产速与当地电压频率定制配置。' },
    { q: '交期大约多久？', a: '单机交期 30–60 天、整线 45–90 天，自确认订单并收到定金后起算。' },
    { q: '付款与出货条件是什么？', a: '付款：T/T（30% 定金、70% 出货前付清）或即期 L/C。出货：FOB 台中港或 CIF 至任一世界港口。' },
    { q: 'SunGene 多久回复询盘？', a: '台中工程团队于 1 个工作日内回复（UTC+8）。WhatsApp 与邮件为最快渠道。' },
    { q: 'SunGene 提供 OEM/ODM 定制吗？', a: '提供。材质、尺寸、产能、电压/频率、HMI 语言与自动化模块皆可定制；整线项目包含工厂布局咨询。' },
    { q: 'SunGene 出口到哪些国家？', a: '已出口至 40+ 个国家，涵盖东南亚、中东、欧洲、美洲、非洲与大洋洲。电压与频率依目的地订单配置。' },
  ],
  fr: [
    { q: 'Où se trouve SunGene ?', a: 'SunGene Co., LTD. a son siège au 201 Guangfu Rd., Central District, Taichung 40041, Taïwan, avec un bureau régional à Xiamen, Chine. Toutes les machines sont fabriquées à Taichung et expédiées depuis le port de Taichung.' },
    { q: 'SunGene est-il certifié CE ?', a: 'Oui. Toutes les machines d\'emballage et de transformation alimentaire SunGene sont certifiées CE et construites en acier inoxydable SUS304 ou 316L sur les surfaces en contact alimentaire. Les certificats sont livrés avec chaque expédition.' },
    { q: 'Quelle est la quantité minimum de commande ?', a: 'Aucun MOQ — commandes possibles dès 1 unité. Chaque machine est configurée selon le produit, le format d\'emballage, la cadence cible et la tension/fréquence locale.' },
    { q: 'Quel est le délai typique ?', a: '30 à 60 jours pour une machine individuelle, 45 à 90 jours pour une ligne complète, à compter de la commande confirmée et de l\'acompte.' },
    { q: 'Quelles sont les conditions de paiement et d\'expédition ?', a: 'Paiement : T/T (30% acompte, 70% avant expédition) ou L/C à vue. Expédition : FOB Taichung ou CIF vers tout port mondial.' },
    { q: 'En combien de temps SunGene répond-il ?', a: 'L\'équipe d\'ingénierie à Taichung répond sous 1 jour ouvré (UTC+8). WhatsApp et e-mail sont les canaux les plus rapides.' },
    { q: 'SunGene propose-t-il OEM/ODM ?', a: 'Oui. Matériaux, dimensions, capacité, tension/fréquence, langue HMI et modules d\'automatisation sont configurables. Conseil en implantation d\'usine inclus pour les projets clés en main.' },
    { q: 'Dans quels pays SunGene exporte-t-il ?', a: 'SunGene exporte dans plus de 40 pays en Asie du Sud-Est, Moyen-Orient, Europe, Amériques, Afrique et Océanie. La tension et la fréquence sont configurées selon le pays de destination.' },
  ],
  es: [
    { q: '¿Dónde está SunGene?', a: 'SunGene Co., LTD. tiene su sede en 201 Guangfu Rd., Central District, Taichung 40041, Taiwán, con oficina regional en Xiamen, China. Todas las máquinas se fabrican en Taichung y se envían desde el puerto de Taichung.' },
    { q: '¿SunGene tiene certificación CE?', a: 'Sí. Toda la maquinaria de envasado y procesamiento de alimentos de SunGene está certificada CE y construida con acero inoxidable SUS304 o 316L en superficies de contacto con alimentos. Los certificados se entregan con cada envío.' },
    { q: '¿Cuál es la cantidad mínima de pedido?', a: 'Sin MOQ — pedidos desde 1 unidad. Cada máquina se configura según producto, formato de envasado, velocidad objetivo y tensión/frecuencia local.' },
    { q: '¿Cuál es el plazo típico?', a: '30–60 días para máquinas individuales, 45–90 días para líneas completas, contando desde el pedido confirmado y el anticipo.' },
    { q: '¿Condiciones de pago y envío?', a: 'Pago: T/T (30% anticipo, 70% antes del envío) o L/C a la vista. Envío: FOB Taichung o CIF a cualquier puerto mundial.' },
    { q: '¿En cuánto responde SunGene?', a: 'El equipo de ingeniería en Taichung responde en 1 día hábil (UTC+8). WhatsApp y correo son los canales más rápidos.' },
    { q: '¿SunGene ofrece OEM/ODM?', a: 'Sí. Materiales, dimensiones, capacidad, tensión/frecuencia, idioma HMI y módulos de automatización son configurables. Consultoría de distribución incluida en proyectos llave en mano.' },
    { q: '¿A qué países exporta SunGene?', a: 'SunGene exporta a más de 40 países en Sudeste Asiático, Oriente Medio, Europa, América, África y Oceanía. Tensión y frecuencia se configuran según el país de destino.' },
  ],
  pt: [
    { q: 'Onde fica a SunGene?', a: 'A SunGene Co., LTD. tem sede na 201 Guangfu Rd., Central District, Taichung 40041, Taiwan, com escritório regional em Xiamen, China. Todas as máquinas são fabricadas em Taichung e embarcadas pelo porto de Taichung.' },
    { q: 'A SunGene é certificada CE?', a: 'Sim. Todas as máquinas de embalagem e processamento de alimentos da SunGene são certificadas CE e construídas em aço inox SUS304 ou 316L nas superfícies de contato com alimentos. Os certificados são entregues com cada embarque.' },
    { q: 'Qual o pedido mínimo?', a: 'Sem MOQ — pedidos a partir de 1 unidade. Cada máquina é configurada conforme produto, formato de embalagem, velocidade-alvo e tensão/frequência local.' },
    { q: 'Qual o prazo típico?', a: '30–60 dias para máquina individual, 45–90 dias para linha completa, a partir do pedido confirmado e do sinal.' },
    { q: 'Condições de pagamento e envio?', a: 'Pagamento: T/T (30% adiantamento, 70% antes do embarque) ou L/C à vista. Envio: FOB Taichung ou CIF para qualquer porto mundial.' },
    { q: 'Em quanto tempo a SunGene responde?', a: 'A equipe de engenharia em Taichung responde em 1 dia útil (UTC+8). WhatsApp e e-mail são os canais mais rápidos.' },
    { q: 'A SunGene oferece OEM/ODM?', a: 'Sim. Materiais, dimensões, capacidade, tensão/frequência, idioma do IHM e módulos de automação são configuráveis. Consultoria de layout incluída em projetos turnkey.' },
    { q: 'Para quais países a SunGene exporta?', a: 'A SunGene exporta para mais de 40 países no Sudeste Asiático, Oriente Médio, Europa, Américas, África e Oceania. Tensão e frequência são configuradas por país de destino.' },
  ],
  ko: [
    { q: 'SunGene은 어디에 있나요?', a: 'SunGene Co., LTD.의 본사는 대만 타이중시 중구 광복로 201번지(40041)이며, 중국 샤먼에 지역 사무소가 있습니다. 모든 기계는 타이중에서 제조되어 타이중 항에서 선적됩니다.' },
    { q: 'SunGene의 기계는 CE 인증을 받았나요?', a: '네. 모든 SunGene 포장 및 식품가공 기계는 CE 인증을 받았으며 식품 접촉면은 SUS304 또는 316L 스테인리스로 제작됩니다. 인증서는 선적 시 함께 제공됩니다.' },
    { q: '최소 주문 수량은?', a: 'MOQ 없음 — 1대부터 주문 가능합니다. 각 기계는 제품, 포장 형식, 목표 생산량, 현지 전압/주파수에 맞춰 구성됩니다.' },
    { q: '납기는 얼마나 걸리나요?', a: '단일 기계 30–60일, 전체 라인 45–90일이며, 주문 확정 및 계약금 수령 후부터 계산됩니다.' },
    { q: '결제 및 선적 조건은?', a: '결제: T/T (계약금 30%, 선적 전 70%) 또는 일람불 L/C. 선적: FOB 타이중 또는 CIF 전 세계 항구.' },
    { q: 'SunGene은 얼마나 빨리 답변하나요?', a: '타이중 엔지니어링팀이 1영업일 내(UTC+8) 회신합니다. WhatsApp과 이메일이 가장 빠른 채널입니다.' },
    { q: 'OEM/ODM 주문이 가능한가요?', a: '가능합니다. 재료, 치수, 용량, 전압/주파수, HMI 언어, 자동화 모듈 모두 구성 가능하며 턴키 프로젝트에는 공장 레이아웃 컨설팅이 포함됩니다.' },
    { q: 'SunGene은 어느 나라에 수출하나요?', a: 'SunGene은 동남아, 중동, 유럽, 미주, 아프리카, 오세아니아의 40개국 이상에 수출합니다. 전압과 주파수는 목적지 국가에 맞춰 구성됩니다.' },
  ],
  ja: [
    { q: 'SunGeneはどこにありますか?', a: 'SunGene Co., LTD.の本社は台湾台中市中区光復路201号(40041)、中国厦門に支社があります。すべての機械は台中で製造され、台中港から出荷されます。' },
    { q: 'SunGeneの機械はCE認証ですか?', a: 'はい。SunGeneのすべての包装機械および食品加工機械はCE認証取得済みで、食品接触部はSUS304または316Lステンレスを使用。認証書は出荷時に同梱されます。' },
    { q: '最小発注数量は?', a: 'MOQはありません。1台から発注可能で、各機械は製品、包装形態、目標能力、現地の電圧・周波数に合わせて構成します。' },
    { q: '納期はどれくらいですか?', a: '単機30〜60日、ライン全体で45〜90日。注文確定と前金受領から起算します。' },
    { q: '支払いと出荷の条件は?', a: '支払い: T/T(手付30%、出荷前70%)または一覧払L/C。出荷: FOB台中またはCIFで世界各港へ。' },
    { q: 'SunGeneの返信はどのくらい早いですか?', a: '台中のエンジニアチームが1営業日以内(UTC+8)にご返信します。WhatsAppとメールが最も早い手段です。' },
    { q: 'OEM/ODMは可能ですか?', a: '可能です。材質、寸法、能力、電圧・周波数、HMI言語、自動化モジュールはいずれも構成可能。ターンキー案件には工場レイアウトのコンサルティングも含まれます。' },
    { q: 'どの国に輸出していますか?', a: 'SunGeneは東南アジア、中東、欧州、米州、アフリカ、オセアニアの40カ国以上に輸出しています。電圧と周波数は仕向国に合わせて構成されます。' },
  ],
  ar: [
    { q: 'أين تقع SunGene؟', a: 'مقر SunGene Co., LTD. في 201 شارع قوانغفو، المنطقة المركزية، تايتشونغ 40041، تايوان، مع مكتب إقليمي في شيامن، الصين. تُصنَّع جميع الآلات في تايتشونغ وتُشحن من ميناء تايتشونغ.' },
    { q: 'هل آلات SunGene حاصلة على شهادة CE؟', a: 'نعم. جميع آلات التعبئة والتغليف ومعالجة الأغذية حاصلة على شهادة CE ومصنوعة من الفولاذ المقاوم SUS304 أو 316L على الأسطح الملامسة للأغذية. تُسلَّم الشهادات مع كل شحنة.' },
    { q: 'ما الحد الأدنى للطلب؟', a: 'لا يوجد حد أدنى — يمكن الطلب ابتداءً من وحدة واحدة. يتم تهيئة كل آلة حسب المنتج وشكل التعبئة والسرعة المستهدفة والجهد/التردد المحلي.' },
    { q: 'ما مدة التسليم النموذجية؟', a: '30–60 يوماً للآلة المفردة، 45–90 يوماً للخط الكامل، تُحسب من تأكيد الطلب واستلام الدفعة الأولى.' },
    { q: 'ما شروط الدفع والشحن؟', a: 'الدفع: T/T (30% دفعة أولى، 70% قبل الشحن) أو L/C عند الاطلاع. الشحن: FOB ميناء تايتشونغ أو CIF إلى أي ميناء عالمي.' },
    { q: 'كم تستغرق SunGene للرد؟', a: 'يرد فريق الهندسة في تايتشونغ خلال يوم عمل واحد (UTC+8). WhatsApp والبريد الإلكتروني هما أسرع القنوات.' },
    { q: 'هل تقدم SunGene تخصيصاً OEM/ODM؟', a: 'نعم. المواد والأبعاد والطاقة والجهد/التردد ولغة HMI ووحدات الأتمتة كلها قابلة للتخصيص. استشارة تخطيط المصنع مشمولة في مشاريع التسليم الجاهز.' },
    { q: 'إلى أي دول تُصدّر SunGene؟', a: 'تُصدّر SunGene إلى أكثر من 40 دولة في جنوب شرق آسيا والشرق الأوسط وأوروبا والأمريكتين وأفريقيا وأوقيانوسيا. يتم تهيئة الجهد والتردد حسب دولة الوجهة.' },
  ],
  th: [
    { q: 'SunGene อยู่ที่ไหน?', a: 'สำนักงานใหญ่ SunGene Co., LTD. ตั้งอยู่ที่ 201 ถนน Guangfu เขตกลาง เมืองไทจง 40041 ไต้หวัน และมีสำนักงานภูมิภาคที่เซียะเหมิน ประเทศจีน เครื่องทั้งหมดผลิตที่ไทจงและจัดส่งจากท่าเรือไทจง' },
    { q: 'เครื่องของ SunGene ผ่าน CE ไหม?', a: 'ผ่าน เครื่องบรรจุภัณฑ์และเครื่องจักรแปรรูปอาหารของ SunGene ทุกตัวได้รับการรับรอง CE และส่วนที่สัมผัสอาหารใช้สแตนเลส SUS304 หรือ 316L ใบรับรองจะจัดส่งพร้อมสินค้าทุกครั้ง' },
    { q: 'สั่งซื้อขั้นต่ำเท่าไหร่?', a: 'ไม่มี MOQ — สั่งได้ตั้งแต่ 1 เครื่อง แต่ละเครื่องปรับตามสินค้า รูปแบบบรรจุภัณฑ์ ความเร็วเป้าหมาย และแรงดัน/ความถี่ในประเทศ' },
    { q: 'ระยะเวลาผลิตนานแค่ไหน?', a: 'เครื่องเดี่ยว 30–60 วัน สายการผลิตทั้งระบบ 45–90 วัน นับจากวันที่ยืนยันคำสั่งซื้อและรับมัดจำ' },
    { q: 'เงื่อนไขการชำระเงินและการจัดส่ง?', a: 'การชำระ: T/T (มัดจำ 30%, ชำระ 70% ก่อนจัดส่ง) หรือ L/C at sight. จัดส่ง: FOB ท่าเรือไทจง หรือ CIF ไปยังท่าเรือใดก็ได้ทั่วโลก' },
    { q: 'SunGene ตอบกลับเร็วแค่ไหน?', a: 'ทีมวิศวกรที่ไทจงตอบกลับภายใน 1 วันทำการ (UTC+8) WhatsApp และอีเมลเป็นช่องทางที่เร็วที่สุด' },
    { q: 'SunGene รับทำ OEM/ODM ไหม?', a: 'รับ วัสดุ ขนาด กำลังการผลิต แรงดัน/ความถี่ ภาษา HMI และโมดูลอัตโนมัติสามารถกำหนดได้ทั้งหมด งาน turnkey มีคำปรึกษาวางผังโรงงานให้ด้วย' },
    { q: 'SunGene ส่งออกไปประเทศใดบ้าง?', a: 'SunGene ส่งออกไปกว่า 40 ประเทศในเอเชียตะวันออกเฉียงใต้ ตะวันออกกลาง ยุโรป อเมริกา แอฟริกา และโอเชียเนีย แรงดันและความถี่ปรับตามประเทศปลายทาง' },
  ],
  vi: [
    { q: 'SunGene ở đâu?', a: 'Trụ sở SunGene Co., LTD. tại số 201 đường Guangfu, quận Central, Đài Trung 40041, Đài Loan, với văn phòng khu vực tại Hạ Môn, Trung Quốc. Tất cả máy được sản xuất tại Đài Trung và xuất từ cảng Đài Trung.' },
    { q: 'Máy của SunGene có đạt CE không?', a: 'Có. Tất cả máy đóng gói và chế biến thực phẩm SunGene đều đạt chứng nhận CE, bề mặt tiếp xúc thực phẩm dùng inox SUS304 hoặc 316L. Chứng chỉ được cung cấp kèm mỗi lô hàng.' },
    { q: 'Số lượng đặt hàng tối thiểu?', a: 'Không có MOQ — đặt từ 1 máy. Mỗi máy được cấu hình theo sản phẩm, loại bao bì, tốc độ mục tiêu và điện áp/tần số địa phương.' },
    { q: 'Thời gian sản xuất bao lâu?', a: '30–60 ngày cho máy đơn, 45–90 ngày cho dây chuyền hoàn chỉnh, tính từ khi xác nhận đơn hàng và nhận đặt cọc.' },
    { q: 'Điều kiện thanh toán và giao hàng?', a: 'Thanh toán: T/T (đặt cọc 30%, 70% trước khi giao hàng) hoặc L/C trả ngay. Giao hàng: FOB cảng Đài Trung hoặc CIF đến bất kỳ cảng nào trên thế giới.' },
    { q: 'SunGene phản hồi nhanh không?', a: 'Đội ngũ kỹ sư tại Đài Trung phản hồi trong 1 ngày làm việc (UTC+8). WhatsApp và email là kênh nhanh nhất.' },
    { q: 'SunGene có nhận OEM/ODM không?', a: 'Có. Vật liệu, kích thước, công suất, điện áp/tần số, ngôn ngữ HMI và các mô-đun tự động hóa đều có thể tùy chỉnh. Các dự án turnkey được tư vấn bố trí nhà máy.' },
    { q: 'SunGene xuất khẩu đến những nước nào?', a: 'SunGene xuất khẩu đến hơn 40 quốc gia ở Đông Nam Á, Trung Đông, châu Âu, châu Mỹ, châu Phi và châu Đại Dương. Điện áp và tần số được cấu hình theo quốc gia đến.' },
  ],
  de: [
    { q: 'Wo befindet sich SunGene?', a: 'SunGene Co., LTD. hat seinen Hauptsitz in No. 201 Guangfu Rd., Central District, Taichung 40041, Taiwan, mit Regionalbüro in Xiamen, China. Alle Maschinen werden in Taichung hergestellt und vom Hafen Taichung verschifft.' },
    { q: 'Sind die Maschinen CE-zertifiziert?', a: 'Ja. Alle SunGene-Verpackungs- und Lebensmittelverarbeitungsmaschinen sind CE-zertifiziert und an produktberührenden Flächen aus SUS304 oder 316L-Edelstahl gefertigt. Zertifikate werden mit jeder Lieferung ausgestellt.' },
    { q: 'Wie hoch ist die Mindestbestellmenge?', a: 'Keine MOQ — Bestellungen ab 1 Stück. Jede Maschine wird nach Produkt, Verpackungsformat, Zielleistung und örtlicher Spannung/Frequenz konfiguriert.' },
    { q: 'Wie lange ist die typische Lieferzeit?', a: '30–60 Tage für Einzelmaschinen, 45–90 Tage für komplette Linien, ab bestätigter Bestellung und Anzahlung.' },
    { q: 'Zahlungs- und Versandbedingungen?', a: 'Zahlung: T/T (30% Anzahlung, 70% vor Versand) oder L/C bei Sicht. Versand: FOB Taichung oder CIF zu jedem Welthafen.' },
    { q: 'Wie schnell antwortet SunGene?', a: 'Das Ingenieurteam in Taichung antwortet innerhalb von 1 Werktag (UTC+8). WhatsApp und E-Mail sind die schnellsten Kanäle.' },
    { q: 'Bietet SunGene OEM/ODM an?', a: 'Ja. Materialien, Abmessungen, Leistung, Spannung/Frequenz, HMI-Sprache und Automatisierungsmodule sind konfigurierbar. Werkslayout-Beratung bei Turnkey-Projekten inbegriffen.' },
    { q: 'In welche Länder exportiert SunGene?', a: 'SunGene exportiert in über 40 Länder in Südostasien, Nahost, Europa, Amerika, Afrika und Ozeanien. Spannung und Frequenz werden je nach Zielland konfiguriert.' },
  ],
}
