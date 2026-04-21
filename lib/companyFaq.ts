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
    { q: 'Where is SunGene located?', a: 'SunGene Co., LTD. is headquartered at 201 Guangfu Rd., Central District, Taichung 40041, Taiwan, with a regional office in Xiamen, China. All machines are sourced and assembled through our network in Taiwan and China and shipped from Taichung Port.' },
    { q: 'Does SunGene support CE documentation?', a: 'Yes. For export projects, SunGene supports CE-oriented documentation where applicable (depending on machine category, supplier scope, and destination market). Food-contact surfaces can be specified as SUS304 or SUS316L.' },
    { q: 'What is the minimum order quantity?', a: 'There is no MOQ — SunGene accepts orders as small as 1 unit. Each machine is configured to the customer\'s product, packaging format, target output, and local voltage/frequency.' },
    { q: 'What is the typical lead time?', a: 'Lead time is 30–60 days for single machines and 45–90 days for complete lines, counting from confirmed order and deposit receipt.' },
    { q: 'What payment and shipping terms do you offer?', a: 'Payment: T/T (30% deposit, 70% before shipment) or L/C at sight. Shipping: FOB Taichung Port or CIF to any world port.' },
    { q: 'How fast does SunGene reply to inquiries?', a: 'The engineering team in Taichung replies within 1 business day (UTC+8). WhatsApp and email are the fastest channels.' },
    { q: 'Does SunGene offer spec customization?', a: 'Yes. Materials, dimensions, throughput target, voltage/frequency, HMI language, and automation modules can be configured. Line layout and site planning support is included for turnkey projects.' },
    { q: 'Which countries does SunGene export to?', a: 'SunGene exports to over 40 countries across Southeast Asia, Middle East, Europe, Americas, Africa, and Oceania. Voltage and frequency are configured to the destination country as part of the order.' },
  ],
  zh: [
    { q: 'SunGene 位於哪裡？', a: 'SunGene Co., LTD.（上瑾錸有限公司）總部設於台灣台中市中區光復路 201 號（40041），中國廈門設有辦公室。所有設備透過我們在台灣與中國的供應鏈網路進行整合並由台中港出口。' },
    { q: 'SunGene 有提供 CE 文件支援嗎？', a: '有。針對出口專案，我們可視機型、供應商範圍與目的地市場需求，提供 CE 導向文件支援（適用時）。食品接觸面可指定 SUS304 或 SUS316L。' },
    { q: '最小訂購量是多少？', a: '沒有 MOQ——SunGene 最低接受 1 台訂單；每台機器依客戶產品、包材形式、目標產速與當地電壓頻率客製配置。' },
    { q: '交期大約多久？', a: '單機交期 30–60 天、整線 45–90 天，自確認訂單並收到訂金後起算。' },
    { q: '付款與出貨條件是什麼？', a: '付款：T/T（30% 訂金、70% 出貨前付清）或即期 L/C。出貨：FOB 台中港或 CIF 至任一世界港口。' },
    { q: 'SunGene 多久回覆詢盤？', a: '台中工程團隊於 1 個工作日內回覆（UTC+8）。WhatsApp 與電郵為最快管道。' },
    { q: 'SunGene 提供規格客製嗎？', a: '提供。材質、尺寸、目標產速（處理量）、電壓／頻率、HMI 語言與自動化模組皆可客製；整線案件也包含線體佈局與場地規劃支援。' },
    { q: 'SunGene 出口到哪些國家？', a: '已出口至 40+ 國家，涵蓋東南亞、中東、歐洲、美洲、非洲與大洋洲。電壓與頻率依目的地訂單配置。' },
  ],
  cn: [
    { q: 'SunGene 位于哪里？', a: 'SunGene Co., LTD.（上瑾锐有限公司）总部设于台湾台中市中区光复路 201 号（40041），中国厦门设有办公室。所有设备透过我们在台湾与中国的供应链网络进行整合并由台中港出口。' },
    { q: 'SunGene 有提供 CE 文件支持吗？', a: '有。针对出口项目，我们可视机型、供应商范围与目的地市场需求，提供 CE 导向文件支持（适用时）。食品接触面可指定 SUS304 或 SUS316L。' },
    { q: '最小起订量是多少？', a: '没有 MOQ——SunGene 最少接受 1 台订单；每台机器依客户产品、包材形式、目标产速与当地电压频率定制配置。' },
    { q: '交期大约多久？', a: '单机交期 30–60 天、整线 45–90 天，自确认订单并收到定金后起算。' },
    { q: '付款与出货条件是什么？', a: '付款：T/T（30% 定金、70% 出货前付清）或即期 L/C。出货：FOB 台中港或 CIF 至任一世界港口。' },
    { q: 'SunGene 多久回复询盘？', a: '台中工程团队于 1 个工作日内回复（UTC+8）。WhatsApp 与邮件为最快渠道。' },
    { q: 'SunGene 提供规格定制吗？', a: '提供。材质、尺寸、目标产速（处理量）、电压/频率、HMI 语言与自动化模块皆可定制；整线项目包含线体布局与场地规划支持。' },
    { q: 'SunGene 出口到哪些国家？', a: '已出口至 40+ 个国家，涵盖东南亚、中东、欧洲、美洲、非洲与大洋洲。电压与频率依目的地订单配置。' },
  ],
  fr: [
    { q: 'Où se trouve SunGene ?', a: 'SunGene Co., LTD. a son siège au 201 Guangfu Rd., Central District, Taichung 40041, Taïwan, avec un bureau régional à Xiamen, Chine. Toutes les machines sont sourcées et assemblées via notre réseau à Taïwan et en Chine et expédiées depuis le port de Taichung.' },
    { q: 'SunGene accompagne-t-il la documentation CE ?', a: 'Oui. Pour les projets export, SunGene accompagne la documentation CE lorsque c’est applicable (selon la machine, le fournisseur et le pays de destination). Les surfaces en contact produit peuvent être spécifiées en SUS304 ou SUS316L.' },
    { q: 'Quelle est la quantité minimum de commande ?', a: 'Aucun MOQ — commandes possibles dès 1 unité. Chaque machine est configurée selon le produit, le format d\'emballage, la cadence cible et la tension/fréquence locale.' },
    { q: 'Quel est le délai typique ?', a: '30 à 60 jours pour une machine individuelle, 45 à 90 jours pour une ligne complète, à compter de la commande confirmée et de l\'acompte.' },
    { q: 'Quelles sont les conditions de paiement et d\'expédition ?', a: 'Paiement : T/T (30% acompte, 70% avant expédition) ou L/C à vue. Expédition : FOB Taichung ou CIF vers tout port mondial.' },
    { q: 'En combien de temps SunGene répond-il ?', a: 'L\'équipe d\'ingénierie à Taichung répond sous 1 jour ouvré (UTC+8). WhatsApp et e-mail sont les canaux les plus rapides.' },
    { q: 'SunGene propose-t-il une personnalisation des spécifications ?', a: 'Oui. Matériaux, dimensions, débit cible, tension/fréquence, langue HMI et modules d’automatisation sont configurables. Support d’implantation de ligne et planification de site inclus pour les projets clés en main.' },
    { q: 'Dans quels pays SunGene exporte-t-il ?', a: 'SunGene exporte dans plus de 40 pays en Asie du Sud-Est, Moyen-Orient, Europe, Amériques, Afrique et Océanie. La tension et la fréquence sont configurées selon le pays de destination.' },
  ],
  es: [
    { q: '¿Dónde está SunGene?', a: 'SunGene Co., LTD. tiene su sede en 201 Guangfu Rd., Central District, Taichung 40041, Taiwán, con oficina regional en Xiamen, China. Todas las máquinas se abastecen y ensamblan a través de nuestra red en Taiwán y China y se envían desde el puerto de Taichung.' },
    { q: '¿SunGene apoya la documentación CE?', a: 'Sí. Para proyectos de exportación, SunGene apoya la documentación CE cuando aplica (según la máquina, el proveedor y el destino). Las superficies en contacto con producto pueden especificarse en SUS304 o SUS316L.' },
    { q: '¿Cuál es la cantidad mínima de pedido?', a: 'Sin MOQ — pedidos desde 1 unidad. Cada máquina se configura según producto, formato de envasado, velocidad objetivo y tensión/frecuencia local.' },
    { q: '¿Cuál es el plazo típico?', a: '30–60 días para máquinas individuales, 45–90 días para líneas completas, contando desde el pedido confirmado y el anticipo.' },
    { q: '¿Condiciones de pago y envío?', a: 'Pago: T/T (30% anticipo, 70% antes del envío) o L/C a la vista. Envío: FOB Taichung o CIF a cualquier puerto mundial.' },
    { q: '¿En cuánto responde SunGene?', a: 'El equipo de ingeniería en Taichung responde en 1 día hábil (UTC+8). WhatsApp y correo son los canales más rápidos.' },
    { q: '¿SunGene ofrece personalización de especificaciones?', a: 'Sí. Materiales, dimensiones, capacidad objetivo, tensión/frecuencia, idioma HMI y módulos de automatización son configurables. Se incluye soporte de layout de línea y planificación del sitio para proyectos llave en mano.' },
    { q: '¿A qué países exporta SunGene?', a: 'SunGene exporta a más de 40 países en Sudeste Asiático, Oriente Medio, Europa, América, África y Oceanía. Tensión y frecuencia se configuran según el país de destino.' },
  ],
  pt: [
    { q: 'Onde fica a SunGene?', a: 'A SunGene Co., LTD. tem sede na 201 Guangfu Rd., Central District, Taichung 40041, Taiwan, com escritório regional em Xiamen, China. Todas as máquinas são fornecidas e montadas através de nossa rede em Taiwan e na China e embarcadas pelo porto de Taichung.' },
    { q: 'A SunGene dá suporte à documentação CE?', a: 'Sim. Para projetos de exportação, a SunGene dá suporte à documentação CE quando aplicável (conforme a máquina, o fornecedor e o destino). As superfícies em contato com produto podem ser especificadas em SUS304 ou SUS316L.' },
    { q: 'Qual o pedido mínimo?', a: 'Sem MOQ — pedidos a partir de 1 unidade. Cada máquina é configurada conforme produto, formato de embalagem, velocidade-alvo e tensão/frequência local.' },
    { q: 'Qual o prazo típico?', a: '30–60 dias para máquina individual, 45–90 dias para linha completa, a partir do pedido confirmado e do sinal.' },
    { q: 'Condições de pagamento e envio?', a: 'Pagamento: T/T (30% adiantamento, 70% antes do embarque) ou L/C à vista. Envio: FOB Taichung ou CIF para qualquer porto mundial.' },
    { q: 'Em quanto tempo a SunGene responde?', a: 'A equipe de engenharia em Taichung responde em 1 dia útil (UTC+8). WhatsApp e e-mail são os canais mais rápidos.' },
    { q: 'A SunGene oferece personalização de especificações?', a: 'Sim. Materiais, dimensões, capacidade-alvo, tensão/frequência, idioma do IHM e módulos de automação são configuráveis. Suporte de layout de linha e planejamento de site incluído para projetos turnkey.' },
    { q: 'Para quais países a SunGene exporta?', a: 'A SunGene exporta para mais de 40 países no Sudeste Asiático, Oriente Médio, Europa, Américas, África e Oceania. Tensão e frequência são configuradas por país de destino.' },
  ],
  ko: [
    { q: 'SunGene은 어디에 있나요?', a: 'SunGene Co., LTD.의 본사는 대만 타이중시 중구 광복로 201번지(40041)이며, 중국 샤먼에 지역 사무소가 있습니다. 모든 장비는 대만과 중국의 공급망을 통해 통합되어 타이중 항에서 선적됩니다.' },
    { q: 'CE 문서 지원이 가능한가요?', a: '가능합니다. 수출 프로젝트의 경우 기종, 공급업체 범위, 목적지에 따라 CE 관련 문서 지원을 제공합니다(해당 시). 식품 접촉면은 SUS304 또는 SUS316L로 지정할 수 있습니다.' },
    { q: '최소 주문 수량은?', a: 'MOQ 없음 — 1대부터 주문 가능합니다. 각 기계는 제품, 포장 형식, 목표 생산량, 현지 전압/주파수에 맞춰 구성됩니다.' },
    { q: '납기는 얼마나 걸리나요?', a: '단일 기계 30–60일, 전체 라인 45–90일이며, 주문 확정 및 계약금 수령 후부터 계산됩니다.' },
    { q: '결제 및 선적 조건은?', a: '결제: T/T (계약금 30%, 선적 전 70%) 또는 일람불 L/C. 선적: FOB 타이중 또는 CIF 전 세계 항구.' },
    { q: 'SunGene은 얼마나 빨리 답변하나요?', a: '타이중 엔지니어링팀이 1영업일 내(UTC+8) 회신합니다. WhatsApp과 이메일이 가장 빠른 채널입니다.' },
    { q: '사양 맞춤이 가능한가요?', a: '가능합니다. 재료, 치수, 목표 처리량, 전압/주파수, HMI 언어, 자동화 모듈 모두 구성 가능하며 턴키 프로젝트에는 라인 레이아웃 및 현장 계획 지원이 포함됩니다.' },
    { q: 'SunGene은 어느 나라에 수출하나요?', a: 'SunGene은 동남아, 중동, 유럽, 미주, 아프리카, 오세아니아의 40개국 이상에 수출합니다. 전압과 주파수는 목적지 국가에 맞춰 구성됩니다.' },
  ],
  ja: [
    { q: 'SunGeneはどこにありますか?', a: 'SunGene Co., LTD.の本社は台湾台中市中区光復路201号(40041)、中国厦門に支社があります。すべての設備は台湾と中国のサプライチェーンネットワークを通じて統合され、台中港から出荷されます。' },
    { q: 'CE書類のサポートはありますか?', a: 'あります。輸出案件では、機種・供給範囲・仕向地要件に応じて、CE関連書類をサポートします（該当する場合）。食品接触部はSUS304またはSUS316Lを指定できます。' },
    { q: '最小発注数量は?', a: 'MOQはありません。1台から発注可能で、各機械は製品、包装形態、目標能力、現地の電圧・周波数に合わせて構成します。' },
    { q: '納期はどれくらいですか?', a: '単機30〜60日、ライン全体で45〜90日。注文確定と前金受領から起算します。' },
    { q: '支払いと出荷の条件は?', a: '支払い: T/T(手付30%、出荷前70%)または一覧払L/C。出荷: FOB台中またはCIFで世界各港へ。' },
    { q: 'SunGeneの返信はどのくらい早いですか?', a: '台中のエンジニアチームが1営業日以内(UTC+8)にご返信します。WhatsAppとメールが最も早い手段です。' },
    { q: '仕様カスタマイズは可能ですか?', a: '可能です。材質、寸法、目標処理量、電圧・周波数、HMI言語、自動化モジュールはいずれも構成可能。ターンキー案件にはラインレイアウトと現場計画の支援も含まれます。' },
    { q: 'どの国に輸出していますか?', a: 'SunGeneは東南アジア、中東、欧州、米州、アフリカ、オセアニアの40カ国以上に輸出しています。電圧と周波数は仕向国に合わせて構成されます。' },
  ],
  ar: [
    { q: 'أين تقع SunGene؟', a: 'مقر SunGene Co., LTD. في 201 شارع قوانغفو، المنطقة المركزية، تايتشونغ 40041، تايوان، مع مكتب إقليمي في شيامن، الصين. يتم توريد وتجميع جميع الآلات عبر شبكتنا في تايوان والصين وتُشحن من ميناء تايتشونغ.' },
    { q: 'هل تدعم SunGene وثائق CE؟', a: 'نعم. لمشاريع التصدير، ندعم وثائق CE عندما ينطبق ذلك (حسب الماكينة ونطاق المورد ودولة الوجهة). يمكن تحديد SUS304 أو SUS316L لأسطح تلامس المنتج.' },
    { q: 'ما الحد الأدنى للطلب؟', a: 'لا يوجد حد أدنى — يمكن الطلب ابتداءً من وحدة واحدة. يتم تهيئة كل آلة حسب المنتج وشكل التعبئة والسرعة المستهدفة والجهد/التردد المحلي.' },
    { q: 'ما مدة التسليم النموذجية؟', a: '30–60 يوماً للآلة المفردة، 45–90 يوماً للخط الكامل، تُحسب من تأكيد الطلب واستلام الدفعة الأولى.' },
    { q: 'ما شروط الدفع والشحن؟', a: 'الدفع: T/T (30% دفعة أولى، 70% قبل الشحن) أو L/C عند الاطلاع. الشحن: FOB ميناء تايتشونغ أو CIF إلى أي ميناء عالمي.' },
    { q: 'كم تستغرق SunGene للرد؟', a: 'يرد فريق الهندسة في تايتشونغ خلال يوم عمل واحد (UTC+8). WhatsApp والبريد الإلكتروني هما أسرع القنوات.' },
    { q: 'هل تقبل SunGene تخصيص المواصفات؟', a: 'نعم. المواد والأبعاد والطاقة المستهدفة والجهد/التردد ولغة HMI ووحدات الأتمتة كلها قابلة للتخصيص، مع دعم تخطيط الخط وموقع التركيب لمشاريع التسليم الجاهزة.' },
    { q: 'إلى أي دول تُصدّر SunGene؟', a: 'تُصدّر SunGene إلى أكثر من 40 دولة في جنوب شرق آسيا والشرق الأوسط وأوروبا والأمريكتين وأفريقيا وأوقيانوسيا. يتم تهيئة الجهد والتردد حسب دولة الوجهة.' },
  ],
  th: [
    { q: 'SunGene อยู่ที่ไหน?', a: 'สำนักงานใหญ่ SunGene Co., LTD. ตั้งอยู่ที่ 201 ถนน Guangfu เขตกลาง เมืองไทจง 40041 ไต้หวัน และมีสำนักงานภูมิภาคที่เซียะเหมิน ประเทศจีน อุปกรณ์ทั้งหมดถูกจัดหาและประกอบผ่านเครือข่ายของเราในไต้หวันและจีนและจัดส่งจากท่าเรือไทจง' },
    { q: 'SunGene รองรับเอกสาร CE ไหม?', a: 'รองรับ สำหรับโปรเจกต์ส่งออก เราช่วยสนับสนุนเอกสาร CE เมื่อมีความเหมาะสม (ขึ้นอยู่กับรุ่น/ซัพพลายเออร์/ประเทศปลายทาง) และสามารถระบุวัสดุส่วนสัมผัสอาหารเป็น SUS304 หรือ SUS316L ได้' },
    { q: 'สั่งซื้อขั้นต่ำเท่าไหร่?', a: 'ไม่มี MOQ — สั่งได้ตั้งแต่ 1 เครื่อง แต่ละเครื่องปรับตามสินค้า รูปแบบบรรจุภัณฑ์ ความเร็วเป้าหมาย และแรงดัน/ความถี่ในประเทศ' },
    { q: 'ระยะเวลาผลิตนานแค่ไหน?', a: 'เครื่องเดี่ยว 30–60 วัน ระบบแบบบูรณาการทั้งไลน์ 45–90 วัน นับจากวันที่ยืนยันคำสั่งซื้อและรับมัดจำ' },
    { q: 'เงื่อนไขการชำระเงินและการจัดส่ง?', a: 'การชำระ: T/T (มัดจำ 30%, ชำระ 70% ก่อนจัดส่ง) หรือ L/C at sight. จัดส่ง: FOB ท่าเรือไทจง หรือ CIF ไปยังท่าเรือใดก็ได้ทั่วโลก' },
    { q: 'SunGene ตอบกลับเร็วแค่ไหน?', a: 'ทีมวิศวกรที่ไทจงตอบกลับภายใน 1 วันทำการ (UTC+8) WhatsApp และอีเมลเป็นช่องทางที่เร็วที่สุด' },
    { q: 'SunGene รับปรับสเปกตามต้องการไหม?', a: 'รับ วัสดุ ขนาด เป้าหมาย throughput แรงดัน/ความถี่ ภาษา HMI และโมดูลอัตโนมัติสามารถกำหนดได้ทั้งหมด งาน turnkey มีการสนับสนุนเลย์เอาต์ไลน์และการวางแผนหน้างาน' },
    { q: 'SunGene ส่งออกไปประเทศใดบ้าง?', a: 'SunGene ส่งออกไปกว่า 40 ประเทศในเอเชียตะวันออกเฉียงใต้ ตะวันออกกลาง ยุโรป อเมริกา แอฟริกา และโอเชียเนีย แรงดันและความถี่ปรับตามประเทศปลายทาง' },
  ],
  vi: [
    { q: 'SunGene ở đâu?', a: 'Trụ sở SunGene Co., LTD. tại số 201 đường Guangfu, quận Central, Đài Trung 40041, Đài Loan, với văn phòng khu vực tại Hạ Môn, Trung Quốc. Tất cả thiết bị được cung cấp và lắp ráp thông qua mạng lưới của chúng tôi tại Đài Loan và Trung Quốc và xuất từ cảng Đài Trung.' },
    { q: 'SunGene có hỗ trợ tài liệu CE không?', a: 'Có. Với dự án xuất khẩu, SunGene hỗ trợ tài liệu CE khi phù hợp (tùy máy, phạm vi nhà cung cấp và thị trường đến). Bề mặt tiếp xúc sản phẩm có thể chỉ định SUS304 hoặc SUS316L.' },
    { q: 'Số lượng đặt hàng tối thiểu?', a: 'Không có MOQ — đặt từ 1 máy. Mỗi máy được cấu hình theo sản phẩm, loại bao bì, tốc độ mục tiêu và điện áp/tần số địa phương.' },
    { q: 'Thời gian sản xuất bao lâu?', a: '30–60 ngày cho máy đơn, 45–90 ngày cho hệ thống tích hợp hoàn chỉnh, tính từ khi xác nhận đơn hàng và nhận đặt cọc.' },
    { q: 'Điều kiện thanh toán và giao hàng?', a: 'Thanh toán: T/T (đặt cọc 30%, 70% trước khi giao hàng) hoặc L/C trả ngay. Giao hàng: FOB cảng Đài Trung hoặc CIF đến bất kỳ cảng nào trên thế giới.' },
    { q: 'SunGene phản hồi nhanh không?', a: 'Đội ngũ kỹ sư tại Đài Trung phản hồi trong 1 ngày làm việc (UTC+8). WhatsApp và email là kênh nhanh nhất.' },
    { q: 'SunGene có nhận tùy chỉnh thông số không?', a: 'Có. Vật liệu, kích thước, công suất mục tiêu, điện áp/tần số, ngôn ngữ HMI và các mô-đun tự động hóa đều có thể tùy chỉnh. Dự án turnkey có hỗ trợ layout dây chuyền và khảo sát mặt bằng.' },
    { q: 'SunGene xuất khẩu đến những nước nào?', a: 'SunGene xuất khẩu đến hơn 40 quốc gia ở Đông Nam Á, Trung Đông, châu Âu, châu Mỹ, châu Phi và châu Đại Dương. Điện áp và tần số được cấu hình theo quốc gia đến.' },
  ],
  de: [
    { q: 'Wo befindet sich SunGene?', a: 'SunGene Co., LTD. hat seinen Hauptsitz in No. 201 Guangfu Rd., Central District, Taichung 40041, Taiwan, mit Regionalbüro in Xiamen, China. Alle Maschinen werden über unser Netzwerk in Taiwan und China beschafft und montiert und vom Hafen Taichung verschifft.' },
    { q: 'Unterstützt SunGene CE-Dokumentation?', a: 'Ja. Für Exportprojekte unterstützen wir CE-Dokumentation, sofern anwendbar (je nach Maschine, Lieferant und Zielmarkt). Produktberührende Flächen können in SUS304 oder SUS316L spezifiziert werden.' },
    { q: 'Wie hoch ist die Mindestbestellmenge?', a: 'Keine MOQ — Bestellungen ab 1 Stück. Jede Maschine wird nach Produkt, Verpackungsformat, Zielleistung und örtlicher Spannung/Frequenz konfiguriert.' },
    { q: 'Wie lange ist die typische Lieferzeit?', a: '30–60 Tage für Einzelmaschinen, 45–90 Tage für komplette Linien, ab bestätigter Bestellung und Anzahlung.' },
    { q: 'Zahlungs- und Versandbedingungen?', a: 'Zahlung: T/T (30% Anzahlung, 70% vor Versand) oder L/C bei Sicht. Versand: FOB Taichung oder CIF zu jedem Welthafen.' },
    { q: 'Wie schnell antwortet SunGene?', a: 'Das Ingenieurteam in Taichung antwortet innerhalb von 1 Werktag (UTC+8). WhatsApp und E-Mail sind die schnellsten Kanäle.' },
    { q: 'Bietet SunGene Spezifikationsanpassungen an?', a: 'Ja. Materialien, Abmessungen, Zielleistung, Spannung/Frequenz, HMI-Sprache und Automatisierungsmodule sind konfigurierbar. Linienlayout- und Standortplanung ist bei Turnkey-Projekten inbegriffen.' },
    { q: 'In welche Länder exportiert SunGene?', a: 'SunGene exportiert in über 40 Länder in Südostasien, Nahost, Europa, Amerika, Afrika und Ozeanien. Spannung und Frequenz werden je nach Zielland konfiguriert.' },
  ],
}
