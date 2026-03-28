export type AiImageSize =
  | 'square_hd'
  | 'square'
  | 'portrait_4_3'
  | 'portrait_16_9'
  | 'landscape_4_3'
  | 'landscape_16_9'

export type PhotoKind =
  | 'factoryWide'
  | 'lineWide'
  | 'machinePortrait'
  | 'machineDetail'
  | 'qcDetail'
  | 'shipping'
  | 'engineering'

function hashToInt(input: string) {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function extractKind(prompt: string): PhotoKind {
  const m = prompt.match(/\bkind=(factoryWide|lineWide|machinePortrait|machineDetail|qcDetail|shipping|engineering)\b/)
  return (m?.[1] as PhotoKind) || 'factoryWide'
}

export function aiImageUrl(prompt: string, imageSize: AiImageSize) {
  const kind = extractKind(prompt)
  const bank: Record<PhotoKind, string[]> = {
    factoryWide: [
      '/photos/factory/factory-wide-01.png',
      '/photos/factory/factory-wide-02.png',
      '/photos/factory/factory-wide-03.png',
    ],
    lineWide: [
      '/photos/line/line-wide-01.png',
      '/photos/line/line-wide-02.png',
      '/photos/line/line-wide-03.png',
    ],
    machinePortrait: [
      '/photos/machines/machine-portrait-01.png',
      '/photos/machines/machine-portrait-02.png',
      '/photos/machines/machine-portrait-03.png',
    ],
    machineDetail: [
      '/photos/details/machine-detail-01.png',
      '/photos/details/machine-detail-02.png',
      '/photos/details/machine-detail-03.png',
      '/photos/details/machine-detail-04.png',
    ],
    qcDetail: ['/photos/qc/qc-detail-01.png', '/photos/qc/qc-detail-02.png'],
    shipping: ['/photos/shipping/shipping-01.png', '/photos/shipping/shipping-02.png'],
    engineering: ['/photos/team/engineering-01.png'],
  }

  const picks = bank[kind]
  const idx = hashToInt(`${prompt}|${imageSize}`) % picks.length
  return picks[idx]
}

function cameraSpec(kind: PhotoKind) {
  switch (kind) {
    case 'factoryWide':
      return 'full-frame photo, 24mm lens, f/5.6, ISO 400, 1/125s, 5000K'
    case 'lineWide':
      return 'full-frame photo, 35mm lens, f/4, ISO 500, 1/160s, 5000K'
    case 'machinePortrait':
      return 'full-frame photo, 50mm lens, f/2.8, ISO 320, 1/200s, 4800K'
    case 'machineDetail':
      return 'macro photo, 85mm lens, f/3.2, ISO 320, 1/200s, 4800K'
    case 'qcDetail':
      return 'documentary photo, 50mm lens, f/2.8, ISO 640, 1/160s, 4800K'
    case 'shipping':
      return 'documentary photo, 35mm lens, f/4, ISO 800, 1/250s, 5200K'
    case 'engineering':
      return 'documentary photo, 35mm lens, f/2.8, ISO 640, 1/200s, 4800K'
  }
}

const STYLE =
  'real world industrial photography, natural ambient factory lighting, neutral cool color grading, subtle film grain, realistic micro-contrast, believable reflections, slight micro-scratches on stainless steel, clean background, no people faces, not overprocessed'

const NEGATIVE =
  'no text, no watermark, no logo, no brand, no CGI, no render, no 3d, no illustration, no cartoon, no fake lens flare, no oversaturated colors, no plastic look, no oversharpening, no HDR halos'

export function photoPrompt(scene: string, kind: PhotoKind = 'factoryWide') {
  return `kind=${kind}; ${scene}, ${STYLE}, ${cameraSpec(kind)}, ${NEGATIVE}`
}
