import type { Lang } from '@/lib/i18n'
import type { ResourceSection } from '@/lib/resourceArticles'
import { getResourceArticle } from '@/lib/resourceArticles'

type Pack = {
  headingInputs: string
  headingPitfalls: string
  headingFAT: string
  inputs: string[]
  pitfalls: string[]
  fat: string[]
}

const pack: Record<Lang, Pack> = {
  en: {
    headingInputs: 'Inputs we need for an accurate sourcing assessment',
    headingPitfalls: 'Common failure points (what usually goes wrong)',
    headingFAT: 'FAT acceptance test checklist',
    inputs: [
      'Product state and behavior (powder flowability, viscosity, particulates, temperature)',
      'Package format and size range (bag/bottle/jar; material and seal type)',
      'Fill range and target tolerance (e.g., 100–500 g, ±1–2 g)',
      'Target output (units/min or hr) and expected runtime per day',
      'Local utilities (voltage/phase/frequency, compressed air, clean-room/hygiene level)',
      'Photos or sample pack + label requirements (if any)',
    ],
    pitfalls: [
      'Filler choice not matching product behavior (bridging, foaming, shear sensitivity)',
      'Poor dust control contaminating seals (powders)',
      'Unstable feeding causing speed fluctuations and weight drift',
      'Bag material/seal spec not compatible with sealing temperature or contamination',
      'Underestimating footprint and maintenance access space',
    ],
    fat: [
      'Run with your product or a confirmed substitute and record output stability',
      'Check weight accuracy vs tolerance at different speeds',
      'Verify sealing integrity (leak test / visual inspection) across a full shift simulation',
      'Confirm safety, emergency stop, guards, and basic alarms',
      'Capture test video and final configuration list for handover',
    ],
  },
  zh: {
    headingInputs: '快速、準確採購評估需要的資料',
    headingPitfalls: '常見失敗點（通常卡在哪裡）',
    headingFAT: '出廠測試（FAT）檢查項目',
    inputs: [
      '產品狀態與特性（粉體流動性/黏度/含顆粒/溫度）',
      '包材形式與尺寸範圍（袋/瓶/罐；材質與封口形式）',
      '灌裝範圍與允收公差（例如 100–500 g、±1–2 g）',
      '目標產速（每分鐘/每小時）與每日稼動時間',
      '現場公用工程（電壓/相數/頻率、壓縮空氣、衛生等級）',
      '現有包裝/樣品照片與標籤需求（如需）',
    ],
    pitfalls: [
      '計量方式與產品特性不符（架橋、起泡、剪切敏感）',
      '除塵不足造成封口區污染（粉末）',
      '供料不穩導致速度波動、重量漂移',
      '包材/封口規格與封口溫度或污染容忍度不匹配',
      '忽略設備佔地與維修保養空間',
    ],
    fat: [
      '用實際產品或確認替代品跑測試並記錄穩定性',
      '不同速度下檢核重量精度與公差',
      '確認封口完整性（漏氣/外觀）並模擬連續運轉',
      '確認安全防護、急停、護罩與基本警報',
      '提供測試影片與最終配置清單作為交付資料',
    ],
  },
  cn: {
    headingInputs: '快速、准确采购评估需要的资料',
    headingPitfalls: '常见失败点（通常卡在哪里）',
    headingFAT: '出厂测试（FAT）检查项',
    inputs: [
      '产品形态与特性（粉体流动性/黏度/含颗粒/温度）',
      '包装形式与尺寸范围（袋/瓶/罐；材质与封口形式）',
      '灌装范围与允收公差（如 100–500 g、±1–2 g）',
      '目标产速（每分钟/每小时）与每日稼动时间',
      '现场公用工程（电压/相数/频率、压缩空气、卫生等级）',
      '现有包装/样品照片与标签需求（如需）',
    ],
    pitfalls: [
      '计量方式与产品特性不匹配（架桥、起泡、剪切敏感）',
      '除尘不足造成封口区污染（粉末）',
      '供料不稳导致速度波动、重量漂移',
      '包材/封口规格与封口温度或污染容忍度不匹配',
      '忽略设备占地与维护空间',
    ],
    fat: [
      '用实际产品或确认替代品跑测试并记录稳定性',
      '不同速度下核对重量精度与公差',
      '确认封口完整性（漏气/外观）并模拟连续运行',
      '确认安全防护、急停、护罩与基本报警',
      '提供测试视频与最终配置清单作为交付资料',
    ],
  },
  fr: {
    headingInputs: 'Données nécessaires pour une évaluation précise',
    headingPitfalls: 'Points de défaillance fréquents',
    headingFAT: 'Check-list de test usine (FAT)',
    inputs: [
      'État produit (fluidité poudre, viscosité, particules, température)',
      'Format et plage de dimensions (sachet/bouteille; matériau et type de scellage)',
      'Plage de dosage et tolérance (ex. 100–500 g, ±1–2 g)',
      'Cadence cible et temps de marche quotidien',
      'Utilités (tension/phases/fréquence, air comprimé, niveau d’hygiène)',
      'Photos/échantillons d’emballage et exigences d’étiquetage (si besoin)',
    ],
    pitfalls: [
      'Mauvais choix de doseur vs comportement produit (pontage, mousse, sensibilité)',
      'Poussière qui contamine la zone de scellage (poudres)',
      'Alimentation instable ⇒ dérive de poids et variations de cadence',
      'Film/scellage non adaptés à la température ou à la contamination',
      'Sous-estimation de l’encombrement et de l’accès maintenance',
    ],
    fat: [
      'Essai avec votre produit (ou substitut validé) et enregistrement de stabilité',
      'Vérification précision de poids à plusieurs vitesses',
      'Contrôle intégrité de scellage sur une simulation de production continue',
      'Vérification sécurité (arrêt d’urgence, protections, alarmes de base)',
      'Vidéo de test et liste de configuration finale pour remise',
    ],
  },
  es: {
    headingInputs: 'Datos necesarios para una evaluación precisa',
    headingPitfalls: 'Fallos típicos (lo que suele fallar)',
    headingFAT: 'Checklist de prueba en fábrica (FAT)',
    inputs: [
      'Estado y comportamiento del producto (fluidez, viscosidad, partículas, temperatura)',
      'Formato y rango de tamaño del empaque (bolsa/botella; material y tipo de sellado)',
      'Rango de llenado y tolerancia (p. ej. 100–500 g, ±1–2 g)',
      'Velocidad objetivo y horas de operación diarias',
      'Utilidades (voltaje/fases/frecuencia, aire comprimido, higiene)',
      'Fotos o muestras del empaque y requisitos de etiquetado (si aplica)',
    ],
    pitfalls: [
      'Dosificador incorrecto vs comportamiento del producto (puentes, espuma, cizalla)',
      'Polvo contaminando la zona de sellado (polvos)',
      'Alimentación inestable ⇒ variación de velocidad y deriva de peso',
      'Material de bolsa/sellado incompatible con temperatura o contaminación',
      'Subestimar huella y acceso de mantenimiento',
    ],
    fat: [
      'Prueba con su producto (o sustituto validado) y registro de estabilidad',
      'Verificar precisión de peso a distintas velocidades',
      'Verificar integridad de sellado durante corrida continua',
      'Verificar seguridad (E-stop, protecciones, alarmas básicas)',
      'Video de prueba y lista final de configuración',
    ],
  },
  pt: {
    headingInputs: 'Dados necessários para uma avaliação precisa',
    headingPitfalls: 'Falhas comuns (onde costuma dar errado)',
    headingFAT: 'Checklist de teste em fábrica (FAT)',
    inputs: [
      'Estado e comportamento do produto (fluidez, viscosidade, partículas, temperatura)',
      'Formato e faixa de tamanho (saco/garrafa; material e tipo de selagem)',
      'Faixa de enchimento e tolerância (ex. 100–500 g, ±1–2 g)',
      'Velocidade alvo e horas de operação por dia',
      'Utilidades (tensão/fases/frequência, ar comprimido, higiene)',
      'Fotos/amostras de embalagem e requisitos de rótulo (se houver)',
    ],
    pitfalls: [
      'Dosagem incompatível com o produto (ponte, espuma, sensibilidade)',
      'Pó contaminando a área de selagem (pós)',
      'Alimentação instável ⇒ variação de velocidade e deriva de peso',
      'Filme/selagem incompatíveis com temperatura ou contaminação',
      'Subestimar área e acesso de manutenção',
    ],
    fat: [
      'Teste com seu produto (ou substituto validado) e registro de estabilidade',
      'Checar precisão de peso em diferentes velocidades',
      'Checar integridade de selagem em corrida contínua',
      'Checar segurança (E-stop, proteções, alarmes básicos)',
      'Vídeo de teste e lista final de configuração',
    ],
  },
  ko: {
    headingInputs: '정확한 소싱 평가를 위한 필수 정보',
    headingPitfalls: '자주 발생하는 문제(주로 어디서 막히는지)',
    headingFAT: '출하 전 공장 시험(FAT) 체크리스트',
    inputs: [
      '제품 상태/특성(분말 유동성, 점도, 입자, 온도)',
      '포장 형식 및 규격 범위(파우치/병 등, 재질/실링 방식)',
      '충전 범위와 허용 오차(예: 100–500 g, ±1–2 g)',
      '목표 속도(분/시간당)와 일일 가동 시간',
      '유틸리티(전압/상/주파수, 압축 공기, 위생 등급)',
      '기존 포장 사진/샘플 및 라벨 요구(해당 시)',
    ],
    pitfalls: [
      '제품 특성과 맞지 않는 계량/충전 방식(브리징, 거품, 민감도)',
      '분진이 실링부를 오염(분말)',
      '불안정한 공급으로 속도 변동 및 중량 드리프트',
      '필름/실링 사양이 온도·오염 조건과 불일치',
      '설치 면적과 정비 공간을 과소 산정',
    ],
    fat: [
      '제품(또는 검증된 대체품)으로 시험 운전 및 안정성 기록',
      '속도별 중량 정확도/오차 확인',
      '연속 운전 시 실링 품질(누설/외관) 확인',
      '안전(비상정지, 가드, 기본 알람) 확인',
      '시험 영상 및 최종 구성 리스트 제공',
    ],
  },
  ja: {
    headingInputs: '正確な調達評価に必要な情報',
    headingPitfalls: 'よくある失敗点（詰まりやすいところ）',
    headingFAT: '出荷前工場試験（FAT）チェック項目',
    inputs: [
      '製品状態/特性（粉体流動性、粘度、粒子、温度）',
      '包装形態とサイズ範囲（袋/ボトル等、材質とシール方式）',
      '充填範囲と許容差（例：100–500 g、±1–2 g）',
      '目標能力（分/時）と稼働時間',
      'ユーティリティ（電圧/相/周波数、圧縮空気、衛生要件）',
      '現行包材の写真/サンプルとラベル要件（必要時）',
    ],
    pitfalls: [
      '製品特性に合わない計量方式（ブリッジ、泡、剪断敏感）',
      '粉塵によるシール部汚染（粉体）',
      '供給不安定による速度変動・重量ドリフト',
      'フィルム/シール条件が温度や汚染許容と不一致',
      '設置面積とメンテナンススペースの見積不足',
    ],
    fat: [
      '実製品（または合意済み代替品）で試運転し安定性を記録',
      '複数速度で重量精度/許容差を確認',
      '連続運転でシール品質（漏れ/外観）を確認',
      '安全（非常停止、ガード、基本アラーム）を確認',
      '試験動画と最終構成リストを引き渡し',
    ],
  },
  ar: {
    headingInputs: 'معلومات نحتاجها لتقييم توريد دقيق',
    headingPitfalls: 'أخطاء شائعة (أين تحدث المشكلة عادة)',
    headingFAT: 'قائمة فحص اختبار المصنع (FAT)',
    inputs: [
      'حالة المنتج وخصائصه (انسيابية المسحوق، اللزوجة، الجزيئات، الحرارة)',
      'شكل العبوة ونطاق المقاسات (كيس/زجاجة… نوع المادة وطريقة الإغلاق)',
      'نطاق التعبئة والتفاوت المسموح (مثال 100–500 g، ±1–2 g)',
      'القدرة المطلوبة وساعات التشغيل اليومية',
      'المرافق (الجهد/الطور/التردد، الهواء المضغوط، مستوى النظافة)',
      'صور أو عينات العبوة ومتطلبات الملصق (إن وجدت)',
    ],
    pitfalls: [
      'اختيار جرعات لا يناسب المنتج (تجسر، رغوة، حساسية للقص)',
      'غبار يلوث منطقة الإغلاق (مساحيق)',
      'تغذية غير مستقرة تسبب تذبذب السرعة وانحراف الوزن',
      'مادة الكيس/الإغلاق غير مناسبة للحرارة أو التلوث',
      'تقليل تقدير المساحة المطلوبة والوصول للصيانة',
    ],
    fat: [
      'تشغيل تجريبي بمنتجك (أو بديل معتمد) وتوثيق الاستقرار',
      'فحص دقة الوزن على سرعات مختلفة',
      'فحص جودة الإغلاق أثناء تشغيل مستمر',
      'فحص السلامة (إيقاف طارئ، حواجز، إنذارات أساسية)',
      'فيديو الاختبار وقائمة الإعدادات النهائية للتسليم',
    ],
  },
  th: {
    headingInputs: 'ข้อมูลที่ต้องใช้เพื่อประเมินให้แม่นยำ',
    headingPitfalls: 'จุดที่มักพลาด (ปัญหาที่เจอบ่อย)',
    headingFAT: 'เช็กลิสต์ทดสอบโรงงาน (FAT)',
    inputs: [
      'ลักษณะสินค้า (การไหลของผง/ความหนืด/มีชิ้น/อุณหภูมิ)',
      'รูปแบบและช่วงขนาดบรรจุภัณฑ์ (ถุง/ขวด… วัสดุและการซีล)',
      'ช่วงการบรรจุและค่าคลาดเคลื่อน (เช่น 100–500 g, ±1–2 g)',
      'กำลังการผลิตเป้าหมายและชั่วโมงการทำงานต่อวัน',
      'ยูทิลิตี้ (แรงดัน/เฟส/ความถี่, ลมอัด, ระดับสุขอนามัย)',
      'รูป/ตัวอย่างบรรจุภัณฑ์ และข้อกำหนดฉลาก (ถ้ามี)',
    ],
    pitfalls: [
      'เลือกระบบตวง/เติมไม่ตรงกับสินค้า (พาน, ฟอง, ไวต่อแรงเฉือน)',
      'ฝุ่นเข้าโซนซีล (ผง)',
      'การป้อนไม่คงที่ทำให้สปีดแกว่งและน้ำหนักเพี้ยน',
      'วัสดุถุง/การซีลไม่เข้ากับอุณหภูมิหรือการปนเปื้อน',
      'ประเมินพื้นที่ติดตั้งและทางซ่อมบำรุงต่ำเกินไป',
    ],
    fat: [
      'ทดสอบด้วยสินค้าจริง (หรือทดแทนที่ยืนยันแล้ว) และบันทึกความเสถียร',
      'ตรวจความแม่นยำของน้ำหนักที่หลายสปีด',
      'ตรวจคุณภาพซีลระหว่างเดินเครื่องต่อเนื่อง',
      'ตรวจระบบความปลอดภัย (E-stop, การ์ด, อลาร์มพื้นฐาน)',
      'วิดีโอทดสอบและรายการสเปกสุดท้ายสำหรับส่งมอบ',
    ],
  },
  vi: {
    headingInputs: 'Thông tin cần để đánh giá chính xác',
    headingPitfalls: 'Lỗi thường gặp (hay vướng ở đâu)',
    headingFAT: 'Checklist chạy thử tại nhà máy (FAT)',
    inputs: [
      'Trạng thái/đặc tính sản phẩm (độ chảy bột, độ nhớt, hạt, nhiệt độ)',
      'Format và dải kích thước bao bì (túi/chai… vật liệu & kiểu hàn)',
      'Dải chiết rót và dung sai (vd 100–500 g, ±1–2 g)',
      'Công suất mục tiêu và thời gian chạy mỗi ngày',
      'Tiện ích (điện áp/pha/tần số, khí nén, mức vệ sinh)',
      'Ảnh/mẫu bao bì và yêu cầu nhãn (nếu có)',
    ],
    pitfalls: [
      'Chọn cơ cấu định lượng không đúng với đặc tính sản phẩm (vón, tạo bọt, nhạy cắt)',
      'Bụi làm bẩn vùng hàn (bột)',
      'Cấp liệu không ổn định gây dao động tốc độ và lệch khối lượng',
      'Vật liệu/điều kiện hàn không phù hợp nhiệt độ hoặc nhiễm bẩn',
      'Đánh giá thiếu diện tích và không gian bảo trì',
    ],
    fat: [
      'Chạy thử với sản phẩm (hoặc mẫu thay thế đã xác nhận) và ghi lại độ ổn định',
      'Kiểm tra độ chính xác khối lượng ở nhiều tốc độ',
      'Kiểm tra chất lượng đường hàn khi chạy liên tục',
      'Kiểm tra an toàn (E-stop, che chắn, cảnh báo cơ bản)',
      'Video chạy thử và danh sách cấu hình cuối cùng để bàn giao',
    ],
  },
  de: {
    headingInputs: 'Daten für eine präzise Bewertung',
    headingPitfalls: 'Typische Fehlerquellen',
    headingFAT: 'Checkliste Werksabnahme (FAT)',
    inputs: [
      'Produktzustand/Verhalten (Fließfähigkeit, Viskosität, Partikel, Temperatur)',
      'Verpackungsformat und Größenbereich (Beutel/Flasche; Material & Siegelart)',
      'Füllbereich und Toleranz (z. B. 100–500 g, ±1–2 g)',
      'Zielleistung und tägliche Laufzeit',
      'Utilities (Spannung/Phasen/Frequenz, Druckluft, Hygienelevel)',
      'Fotos/Muster der Verpackung und Etikettanforderungen (falls nötig)',
    ],
    pitfalls: [
      'Falscher Dosierer vs Produktverhalten (Bridging, Schaum, Empfindlichkeit)',
      'Staub kontaminiert die Siegelzone (Pulver)',
      'Unstete Zuführung ⇒ Gewichtsd drift und Takt-Schwankung',
      'Film/Siegel nicht kompatibel mit Temperatur oder Kontamination',
      'Stellfläche und Wartungszugang unterschätzt',
    ],
    fat: [
      'Testlauf mit Produkt (oder validiertem Ersatz) und Stabilität dokumentieren',
      'Gewichtsgenauigkeit bei verschiedenen Geschwindigkeiten prüfen',
      'Siegelqualität im Dauerlauf prüfen (Lecktest/Optik)',
      'Sicherheit prüfen (Not-Aus, Schutzhauben, Basisalarme)',
      'Testvideo und finale Konfigurationsliste zur Übergabe',
    ],
  },
}

export function getResourceBoostSections(slug: string, lang: Lang): ResourceSection[] {
  const article = getResourceArticle(slug)
  if (!article) return []

  const p = pack[lang] ?? pack.en
  const s: ResourceSection[] = []

  s.push({ type: 'h2', text: p.headingInputs })
  s.push({ type: 'ul', items: p.inputs })

  if (article.category !== 'comparison') {
    s.push({ type: 'h2', text: p.headingPitfalls })
    s.push({ type: 'ul', items: p.pitfalls })
  }

  s.push({ type: 'h2', text: p.headingFAT })
  s.push({ type: 'ul', items: p.fat })

  return s
}
