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
      'https://images.unsplash.com/photo-1681823291555-5eff16619bc9?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566930665082-4ae9dbbb5b6b?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568561586426-10f4ce2dafc5?w=1200&q=80&auto=format&fit=crop',
    ],
    lineWide: [
      'https://images.unsplash.com/photo-1661962510909-4be27f3637a2?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1651525670114-2b8117390b28?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617448570646-652843c87581?w=1200&q=80&auto=format&fit=crop',
    ],
    machinePortrait: [
      'https://images.unsplash.com/photo-1682144944581-7ed4b3e8ea93?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1200&q=80&auto=format&fit=crop',
    ],
    machineDetail: [
      'https://images.unsplash.com/photo-1682146121756-10d8209fe077?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512843481120-4dacde663335?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1683129724452-f22cabb0ff4d?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1670490340295-95b418fe59a4?w=1200&q=80&auto=format&fit=crop',
    ],
    qcDetail: [
      'https://images.unsplash.com/photo-1664475199571-78ba92b90e24?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599583863916-e06c29087f51?w=1200&q=80&auto=format&fit=crop',
    ],
    shipping: [
      'https://images.unsplash.com/photo-1578351709091-33ee78a1565d?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608497454474-29b2a8e9fa91?w=1200&q=80&auto=format&fit=crop',
    ],
    engineering: [
      'https://images.unsplash.com/photo-1681822947398-fa5de700de71?w=1200&q=80&auto=format&fit=crop',
    ],
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
