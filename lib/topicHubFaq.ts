import type { Lang } from '@/lib/i18n'

export const TOPIC_MACHINES = [
  'pouch-packing-machine',
  'powder-filling-machine',
  'liquid-filling-machine',
  'snack-processing-line',
  'conveyor-system',
] as const

export type TopicMachine = typeof TOPIC_MACHINES[number]
export type TopicHubFaq = { q: string; a: string }

export const TOPIC_HUB_FAQ_TITLE: Record<Lang, string> = {
  en: 'Frequently asked questions',
  cn: '常见问题',
  zh: '常見問題',
  fr: 'Questions fréquentes',
  es: 'Preguntas frecuentes',
  pt: 'Perguntas frequentes',
  ko: '자주 묻는 질문',
  ja: 'よくある質問',
  ar: 'الأسئلة الشائعة',
  th: 'คำถามที่พบบ่อย',
  vi: 'Câu hỏi thường gặp',
  de: 'Häufige Fragen',
}

const faqTx: Record<
  Lang,
  { q1: string; a1: string; q2: string; a2: string; q3: string; a3: string; q4: string; a4: string }
> = {
  en: {
    q1: 'What do you need to recommend a configuration?',
    a1: 'Product, package format, fill range, target output, and destination voltage/frequency. If available, share photos or a sample pack.',
    q2: 'Which formats and options are common for this category?',
    a2: 'Typical options: ',
    q3: 'What usually affects stability and output?',
    a3: 'Main factors: ',
    q4: 'Can you run a factory acceptance test (FAT) before shipment?',
    a4: 'Yes. We can run FAT with your product or a confirmed substitute and provide test video and results for handover.',
  },
  zh: {
    q1: '要怎麼提供資料，才能快速確認配置並報價？',
    a1: '產品、包材/容器形式、灌裝範圍、目標產速，以及目的地電壓/頻率。若方便，提供現有包裝照片或樣品更快。',
    q2: '這個類別常見的形式與選配有哪些？',
    a2: '常見配置：',
    q3: '哪些因素最容易影響穩定性與產速？',
    a3: '常見影響點：',
    q4: '出貨前可以做出廠測試（FAT）嗎？',
    a4: '可以。可用實際產品或確認替代品做 FAT，提供測試影片與結果作為交付資料。',
  },
  cn: {
    q1: '要怎么提供资料，才能快速确认配置并报价？',
    a1: '产品、包装/容器形式、灌装范围、目标产速，以及目的地电压/频率。若方便，提供现有包装照片或样品更快。',
    q2: '这个类别常见的形式与选配有哪些？',
    a2: '常见配置：',
    q3: '哪些因素最容易影响稳定性与产速？',
    a3: '常见影响点：',
    q4: '出货前可以做出厂测试（FAT）吗？',
    a4: '可以。可用实际产品或确认替代品做 FAT，提供测试视频与结果作为交付资料。',
  },
  fr: {
    q1: 'Quelles infos faut-il pour recommander une configuration ?',
    a1: 'Produit, format d’emballage, plage de dosage, cadence cible et tension/fréquence du pays. Photos ou échantillon d’emballage si possible.',
    q2: 'Quels formats/options sont courants pour cette catégorie ?',
    a2: 'Options courantes : ',
    q3: 'Qu’est-ce qui influence le plus la stabilité et la cadence ?',
    a3: 'Facteurs principaux : ',
    q4: 'Pouvez-vous faire un test usine (FAT) avant expédition ?',
    a4: 'Oui. FAT avec votre produit (ou substitut validé) et remise de vidéos et résultats de test.',
  },
  es: {
    q1: '¿Qué información necesitan para recomendar una configuración?',
    a1: 'Producto, formato, rango de llenado/dosificado, velocidad objetivo y voltaje/frecuencia del destino. Fotos o muestra del empaque ayudan.',
    q2: '¿Qué formatos/opciones son comunes en esta categoría?',
    a2: 'Opciones típicas: ',
    q3: '¿Qué suele afectar la estabilidad y la producción?',
    a3: 'Factores principales: ',
    q4: '¿Se puede realizar FAT antes del envío?',
    a4: 'Sí. FAT con su producto (o sustituto validado) y entrega de video y resultados.',
  },
  pt: {
    q1: 'Quais informações são necessárias para recomendar a configuração?',
    a1: 'Produto, formato, faixa de enchimento/dosagem, velocidade-alvo e tensão/frequência do destino. Fotos ou amostras ajudam.',
    q2: 'Quais formatos/opções são comuns nesta categoria?',
    a2: 'Opções típicas: ',
    q3: 'O que mais afeta estabilidade e produção?',
    a3: 'Fatores principais: ',
    q4: 'Vocês fazem FAT antes do envio?',
    a4: 'Sim. FAT com seu produto (ou substituto validado) e entrega de vídeo e resultados.',
  },
  ko: {
    q1: '구성 추천을 위해 어떤 정보가 필요하나요?',
    a1: '제품, 포장 형식, 충전 범위, 목표 속도, 목적지 전압/주파수. 가능하면 포장 사진이나 샘플도 함께 보내주세요.',
    q2: '이 카테고리에서 흔한 형식/옵션은 무엇인가요?',
    a2: '일반 구성: ',
    q3: '안정성과 생산량에 가장 큰 영향을 주는 요소는?',
    a3: '주요 요인: ',
    q4: '출하 전에 FAT를 진행할 수 있나요?',
    a4: '가능합니다. 제품(또는 합의된 대체품)으로 FAT를 진행하고 영상/결과를 제공합니다.',
  },
  ja: {
    q1: '構成提案に必要な情報は？',
    a1: '製品、包装形態、充填範囲、目標能力、仕向地の電圧/周波数。可能なら包材の写真やサンプルも共有ください。',
    q2: 'このカテゴリで一般的な形式/オプションは？',
    a2: '一般的な構成：',
    q3: '安定性と能力に影響しやすい要因は？',
    a3: '主な要因：',
    q4: '出荷前にFAT（工場試験）はできますか？',
    a4: '可能です。製品（または合意済み代替品）でFATを実施し、動画と結果を提出します。',
  },
  ar: {
    q1: 'ما المعلومات المطلوبة لاقتراح التكوين؟',
    a1: 'المنتج، شكل العبوة، نطاق التعبئة، القدرة المطلوبة، ومعيار الجهد/التردد. الصور أو عينة العبوة تساعد.',
    q2: 'ما الخيارات الشائعة لهذه الفئة؟',
    a2: 'خيارات شائعة: ',
    q3: 'ما الذي يؤثر عادةً على الاستقرار والإنتاج؟',
    a3: 'العوامل الرئيسية: ',
    q4: 'هل يمكن إجراء FAT قبل الشحن؟',
    a4: 'نعم. يمكن إجراء FAT بمنتجك (أو بديل معتمد) مع تسليم فيديو ونتائج الاختبار.',
  },
  th: {
    q1: 'ต้องใช้ข้อมูลอะไรเพื่อแนะนำสเปกได้เร็ว?',
    a1: 'สินค้า รูปแบบบรรจุภัณฑ์ ช่วงการบรรจุ ความเร็วเป้าหมาย และแรงดัน/ความถี่ปลายทาง รูปหรือชิ้นตัวอย่างช่วยได้มาก',
    q2: 'รูปแบบ/ออปชันที่พบบ่อยในหมวดนี้คืออะไร?',
    a2: 'ตัวเลือกที่พบบ่อย: ',
    q3: 'อะไรมีผลต่อความเสถียรและกำลังการผลิตมากที่สุด?',
    a3: 'ปัจจัยหลัก: ',
    q4: 'ทำ FAT ก่อนส่งได้ไหม?',
    a4: 'ได้ ทำ FAT ด้วยสินค้าจริง (หรือทดแทนที่ยืนยันแล้ว) และส่งวิดีโอ/ผลทดสอบให้',
  },
  vi: {
    q1: 'Cần thông tin gì để đề xuất cấu hình nhanh?',
    a1: 'Sản phẩm, format bao bì, dải chiết rót/định lượng, tốc độ mục tiêu và điện áp/tần số tại điểm đến. Ảnh hoặc mẫu bao bì sẽ giúp nhanh hơn.',
    q2: 'Các format/tùy chọn thường gặp trong nhóm này?',
    a2: 'Tùy chọn phổ biến: ',
    q3: 'Yếu tố nào hay ảnh hưởng ổn định và công suất?',
    a3: 'Yếu tố chính: ',
    q4: 'Có thể chạy FAT trước khi giao hàng không?',
    a4: 'Có. Chạy FAT với sản phẩm (hoặc mẫu thay thế đã xác nhận) và bàn giao video/kết quả test.',
  },
  de: {
    q1: 'Welche Informationen brauchen Sie für eine Konfigurationsempfehlung?',
    a1: 'Produkt, Verpackungsformat, Füllbereich, Zielleistung sowie Spannung/Frequenz am Einsatzort. Fotos oder Muster helfen.',
    q2: 'Welche Formate/Optionen sind in dieser Kategorie üblich?',
    a2: 'Typische Optionen: ',
    q3: 'Was beeinflusst Stabilität und Output am meisten?',
    a3: 'Hauptfaktoren: ',
    q4: 'Ist eine Werksabnahme (FAT) vor Versand möglich?',
    a4: 'Ja. FAT mit Ihrem Produkt (oder validiertem Ersatz) inkl. Video und Testergebnissen zur Übergabe.',
  },
}

const faqMachineNotes: Record<Lang, Record<TopicMachine, { options: string; factors: string }>> = {
  en: {
    'pouch-packing-machine': {
      options: 'VFFS vs premade pouch; zipper/stand-up/pillow; gas flush; checkweigher; metal detector.',
      factors: 'product feeding stability, dust control, bag material, seal contamination, changeover frequency.',
    },
    'powder-filling-machine': {
      options: 'auger filler, volumetric cup, or multi-head weigher; dust extraction; nitrogen flush; checkweigher.',
      factors: 'powder flowability, bridging, dosing method, dust at seal area, humidity and temperature.',
    },
    'liquid-filling-machine': {
      options: 'piston, pump, gravity/overflow, or flow meter; anti-drip nozzles; CIP options.',
      factors: 'viscosity, foaming, particulates, temperature, container stability, cleaning requirements.',
    },
    'snack-processing-line': {
      options: 'fryer/roaster + de-oiling + seasoning + cooling + integrated packaging modules.',
      factors: 'product moisture/oil content, target throughput, oil management, footprint, hygiene and cleaning access.',
    },
    'conveyor-system': {
      options: 'belt/roller/modular; incline/decline; side guards; washdown design; integration sensors.',
      factors: 'product shape, line speed, transfer points, incline angle, sanitation level, space constraints.',
    },
  },
  zh: {
    'pouch-packing-machine': {
      options: 'VFFS 或預製袋；夾鏈/立袋/枕式；充氮；檢重；金檢。',
      factors: '供料穩定性、除塵、包材材質、封口污染容忍度、換型頻率。',
    },
    'powder-filling-machine': {
      options: '螺旋計量、量杯或多頭秤；除塵；充氮；檢重。',
      factors: '粉體流動性、架橋/結塊、計量方式、封口區粉塵、溼度與溫度。',
    },
    'liquid-filling-machine': {
      options: '活塞、泵式、重力/溢流或流量計；防滴嘴；CIP 選配。',
      factors: '黏度、起泡、含顆粒、溫度、容器穩定性、清洗與衛生要求。',
    },
    'snack-processing-line': {
      options: '油炸/烘烤 + 脫油 + 調味 + 冷卻 + 可整合包裝模組。',
      factors: '含水/含油、目標產能、油品管理、場地佈局、衛生與清潔保養空間。',
    },
    'conveyor-system': {
      options: '皮帶/滾筒/模組帶；爬坡/下降；護欄；可沖洗設計；感測整合。',
      factors: '產品形狀、線速、轉接點、坡度角、衛生等級、空間限制。',
    },
  },
  cn: {
    'pouch-packing-machine': {
      options: 'VFFS 或预制袋；夹链/立袋/枕式；充氮；检重；金检。',
      factors: '供料稳定性、除尘、包材材质、封口污染容忍度、换型频率。',
    },
    'powder-filling-machine': {
      options: '螺杆计量、量杯或多头秤；除尘；充氮；检重。',
      factors: '粉体流动性、架桥/结块、计量方式、封口区粉尘、湿度与温度。',
    },
    'liquid-filling-machine': {
      options: '活塞、泵式、重力/溢流或流量计；防滴嘴；CIP 选配。',
      factors: '黏度、起泡、含颗粒、温度、容器稳定性、清洗与卫生要求。',
    },
    'snack-processing-line': {
      options: '油炸/烘烤 + 脱油 + 调味 + 冷却 + 可整合包装模块。',
      factors: '含水/含油、目标产能、油品管理、场地布局、卫生与清洁维护空间。',
    },
    'conveyor-system': {
      options: '皮带/滚筒/模块带；爬坡/下降；护栏；可冲洗设计；传感整合。',
      factors: '产品形状、线速、转接点、坡度角、卫生等级、空间限制。',
    },
  },
  fr: {
    'pouch-packing-machine': {
      options: 'VFFS vs poche préformée; zip/doypack/pillow; gaz; contrôle de poids; détecteur de métaux.',
      factors: 'stabilité d’alimentation, poussière, film, contamination de scellage, fréquence de changement.',
    },
    'powder-filling-machine': {
      options: 'doseur à vis, volumétrique ou peseuse; dépoussiérage; gaz; contrôle de poids.',
      factors: 'fluidité, pontage, méthode de dosage, poussière au scellage, humidité/température.',
    },
    'liquid-filling-machine': {
      options: 'piston, pompe, gravité/débordement ou débitmètre; anti-goutte; options CIP.',
      factors: 'viscosité, mousse, particules, température, stabilité du contenant, nettoyage.',
    },
    'snack-processing-line': {
      options: 'friture/torréfaction + dégraissage + assaisonnement + refroidissement + modules d’emballage.',
      factors: 'humidité/huile, cadence, gestion d’huile, implantation, hygiène et accès nettoyage.',
    },
    'conveyor-system': {
      options: 'bande/rouleaux/modulaire; pente; guides latéraux; lavage; capteurs.',
      factors: 'forme produit, vitesse, transferts, angle, niveau d’hygiène, contraintes d’espace.',
    },
  },
  es: {
    'pouch-packing-machine': {
      options: 'VFFS vs bolsa preformada; zipper/stand-up/pillow; gas; checkweigher; detector de metales.',
      factors: 'alimentación, polvo, material de bolsa, contaminación de sellado, frecuencia de cambio.',
    },
    'powder-filling-machine': {
      options: 'tornillo, volumétrico o multicabezal; extracción de polvo; gas; checkweigher.',
      factors: 'fluidez, puentes, método de dosificación, polvo en sellado, humedad/temperatura.',
    },
    'liquid-filling-machine': {
      options: 'pistón, bomba, gravedad/overflow o caudalímetro; anti-goteo; CIP.',
      factors: 'viscosidad, espuma, partículas, temperatura, estabilidad del envase, limpieza.',
    },
    'snack-processing-line': {
      options: 'freír/tostar + desaceitado + sazonado + enfriado + módulos de empaque.',
      factors: 'humedad/aceite, capacidad, gestión de aceite, layout, higiene y acceso.',
    },
    'conveyor-system': {
      options: 'banda/rodillos/modular; inclinación; guías; lavado; sensores.',
      factors: 'forma, velocidad, transferencias, ángulo, higiene, espacio.',
    },
  },
  pt: {
    'pouch-packing-machine': {
      options: 'VFFS vs pouch pronto; zipper/stand-up/pillow; gás; checkweigher; detector de metais.',
      factors: 'alimentação, poeira, filme, contaminação de selagem, frequência de troca.',
    },
    'powder-filling-machine': {
      options: 'rosca, volumétrico ou multicabeçote; exaustão de pó; gás; checkweigher.',
      factors: 'fluidez, ponte, método de dosagem, pó na selagem, umidade/temperatura.',
    },
    'liquid-filling-machine': {
      options: 'pistão, bomba, gravidade/overflow ou medidor de vazão; anti-gotejo; CIP.',
      factors: 'viscosidade, espuma, partículas, temperatura, estabilidade do frasco, limpeza.',
    },
    'snack-processing-line': {
      options: 'fritura/torra + desoleificação + tempero + resfriamento + módulos de embalagem.',
      factors: 'umidade/óleo, capacidade, gestão de óleo, layout, higiene e acesso.',
    },
    'conveyor-system': {
      options: 'correia/roletes/modular; inclinação; guias; lavagem; sensores.',
      factors: 'formato, velocidade, transferências, ângulo, higiene, espaço.',
    },
  },
  ko: {
    'pouch-packing-machine': {
      options: 'VFFS vs 프리메이드 파우치; 지퍼/스탠드업/필로우; 가스 플러시; 체크웨이어; 금속검출.',
      factors: '공급 안정, 분진, 필름, 실링 오염, 포맷 전환 빈도.',
    },
    'powder-filling-machine': {
      options: '오거/용적/멀티헤드; 분진 집진; 가스; 체크웨이어.',
      factors: '유동성, 브리징, 계량 방식, 실링부 분진, 습도/온도.',
    },
    'liquid-filling-machine': {
      options: '피스톤/펌프/중력·오버플로우/유량계; 안티드립; CIP.',
      factors: '점도, 거품, 입자, 온도, 용기 안정, 세척 요구.',
    },
    'snack-processing-line': {
      options: '튀김/로스팅 + 탈유 + 시즈닝 + 냉각 + 포장 모듈 통합.',
      factors: '수분/유분, 목표 처리량, 오일 관리, 설치 공간, 위생/접근.',
    },
    'conveyor-system': {
      options: '벨트/롤러/모듈; 경사; 가이드; 워시다운; 센서 통합.',
      factors: '형상, 속도, 이송 포인트, 경사각, 위생 등급, 공간.',
    },
  },
  ja: {
    'pouch-packing-machine': {
      options: 'VFFS/プレメードパウチ、チャック/スタンド/ピロー、ガス置換、検重、金検。',
      factors: '供給安定、粉塵、包材、シール汚染、段取り替え頻度。',
    },
    'powder-filling-machine': {
      options: 'オーガー/容積/マルチヘッド、集塵、ガス置換、検重。',
      factors: '流動性、架橋、計量方式、シール部粉塵、湿度/温度。',
    },
    'liquid-filling-machine': {
      options: 'ピストン/ポンプ/重力・オーバーフロー/流量計、防滴、CIP。',
      factors: '粘度、泡、粒子、温度、容器安定、洗浄要件。',
    },
    'snack-processing-line': {
      options: 'フライ/ロースト＋脱油＋調味＋冷却＋包装モジュール統合。',
      factors: '水分/油分、能力、油管理、レイアウト、衛生と清掃アクセス。',
    },
    'conveyor-system': {
      options: 'ベルト/ローラ/モジュール、傾斜、ガイド、洗浄仕様、センサー統合。',
      factors: '形状、速度、受け渡し点、角度、衛生レベル、スペース。',
    },
  },
  ar: {
    'pouch-packing-machine': {
      options: 'VFFS أو أكياس جاهزة، سحاب/ستاند أب، غاز، فحص وزن، كاشف معادن.',
      factors: 'ثبات التغذية، الغبار، مادة الكيس، تلوث الإغلاق، تغيير المقاسات.',
    },
    'powder-filling-machine': {
      options: 'لولبي/حجمي/متعدد الرؤوس، شفط غبار، غاز، فحص وزن.',
      factors: 'انسيابية، تجسر، طريقة الجرعات، غبار عند الإغلاق، رطوبة/حرارة.',
    },
    'liquid-filling-machine': {
      options: 'مكبس/مضخة/جاذبية-فيضان/عداد تدفق، مانع تنقيط، CIP.',
      factors: 'لزوجة، رغوة، جزيئات، حرارة، ثبات العبوة، متطلبات تنظيف.',
    },
    'snack-processing-line': {
      options: 'قلي/تحميص + إزالة زيت + تتبيل + تبريد + دمج التغليف.',
      factors: 'رطوبة/زيت، القدرة، إدارة الزيت، المساحة، النظافة والوصول.',
    },
    'conveyor-system': {
      options: 'سير/رول/موديول، ميل، حواجز، غسل، حساسات.',
      factors: 'شكل المنتج، السرعة، نقاط النقل، زاوية، مستوى نظافة، مساحة.',
    },
  },
  th: {
    'pouch-packing-machine': {
      options: 'VFFS หรือถุงสำเร็จรูป; ซิป/ตั้งได้/หมอน; เติมแก๊ส; เช็คเวย์เออร์; ตรวจโลหะ',
      factors: 'การป้อนที่นิ่ง, ฝุ่น, ฟิล์ม, สิ่งปนเปื้อนที่โซนซีล, ความถี่เปลี่ยนฟอร์แมต',
    },
    'powder-filling-machine': {
      options: 'ออเกอร์/ปริมาตร/หลายหัว; ดูดฝุ่น; เติมแก๊ส; เช็คเวย์เออร์',
      factors: 'การไหล, พาน, วิธีตวง, ฝุ่นที่โซนซีล, ความชื้น/อุณหภูมิ',
    },
    'liquid-filling-machine': {
      options: 'ลูกสูบ/ปั๊ม/แรงโน้มถ่วง-ล้น/มิเตอร์; กันหยด; CIP',
      factors: 'ความหนืด, ฟอง, มีชิ้น, อุณหภูมิ, ความนิ่งของภาชนะ, การทำความสะอาด',
    },
    'snack-processing-line': {
      options: 'ทอด/อบ + ลดน้ำมัน + ปรุงรส + ทำความเย็น + รวมบรรจุภัณฑ์',
      factors: 'ความชื้น/น้ำมัน, กำลังการผลิต, การจัดการน้ำมัน, เลย์เอาต์, สุขอนามัย/การเข้าถึง',
    },
    'conveyor-system': {
      options: 'สายพาน/ลูกกลิ้ง/โมดูล; ทางชัน; ราว; ล้างได้; เซนเซอร์',
      factors: 'รูปทรงสินค้า, ความเร็วไลน์, จุดส่งต่อ, มุมชัน, สุขอนามัย, พื้นที่',
    },
  },
  vi: {
    'pouch-packing-machine': {
      options: 'VFFS hoặc túi thành phẩm; zipper/đứng/pillow; thổi khí; checkweigher; dò kim loại.',
      factors: 'ổn định cấp liệu, bụi, vật liệu túi, nhiễm bẩn vùng hàn, tần suất đổi format.',
    },
    'powder-filling-machine': {
      options: 'trục vít/thể tích/cân nhiều đầu; hút bụi; thổi khí; checkweigher.',
      factors: 'độ chảy, vón, cơ cấu định lượng, bụi vùng hàn, độ ẩm/nhiệt.',
    },
    'liquid-filling-machine': {
      options: 'piston/bơm/trọng lực-tràn/lưu lượng kế; chống nhỏ giọt; CIP.',
      factors: 'độ nhớt, tạo bọt, hạt, nhiệt, ổn định chai, yêu cầu vệ sinh.',
    },
    'snack-processing-line': {
      options: 'chiên/nướng + tách dầu + tẩm gia vị + làm nguội + tích hợp đóng gói.',
      factors: 'độ ẩm/dầu, công suất, quản lý dầu, layout, vệ sinh và lối bảo trì.',
    },
    'conveyor-system': {
      options: 'băng tải/roller/modular; dốc; chắn; washdown; cảm biến.',
      factors: 'hình dạng sản phẩm, tốc độ line, điểm chuyển, góc dốc, mức vệ sinh, không gian.',
    },
  },
  de: {
    'pouch-packing-machine': {
      options: 'VFFS vs Fertigbeutel; Zipper/Standbeutel; Gas; Kontrollwaage; Metalldetektor.',
      factors: 'Zuführstabilität, Staub, Folie, Siegelkontamination, Formatwechsel.',
    },
    'powder-filling-machine': {
      options: 'Schnecke/volumetrisch/Mehrkopf; Entstaubung; Gas; Kontrollwaage.',
      factors: 'Fließfähigkeit, Bridging, Dosierprinzip, Staub an der Siegelzone, Feuchte/Temperatur.',
    },
    'liquid-filling-machine': {
      options: 'Kolben/Pumpe/Schwerkraft-Überlauf/Durchfluss; Antitropf; CIP.',
      factors: 'Viskosität, Schaum, Partikel, Temperatur, Behälterstabilität, Reinigung.',
    },
    'snack-processing-line': {
      options: 'Frittieren/Rösten + Entölen + Würzen + Kühlen + Verpackung integrierbar.',
      factors: 'Feuchte/Öl, Zielleistung, Ölmanagement, Layout, Hygiene & Zugang.',
    },
    'conveyor-system': {
      options: 'Band/Rolle/Modular; Steigung; Führungen; Washdown; Sensorik.',
      factors: 'Form, Liniengeschwindigkeit, Übergaben, Steigungswinkel, Hygienelevel, Platz.',
    },
  },
}

export function getTopicHubFaqs(lang: Lang, machine: TopicMachine): TopicHubFaq[] {
  const t = faqTx[lang] || faqTx.en
  const m = (faqMachineNotes[lang] || faqMachineNotes.en)[machine]
  return [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: `${t.a2}${m.options}` },
    { q: t.q3, a: `${t.a3}${m.factors}` },
    { q: t.q4, a: t.a4 },
  ]
}
