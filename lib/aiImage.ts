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

const BASE = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image'

export function aiImageUrl(prompt: string, imageSize: AiImageSize) {
  const p = encodeURIComponent(prompt)
  return `${BASE}?prompt=${p}&image_size=${imageSize}`
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
  return `${scene}, ${STYLE}, ${cameraSpec(kind)}, ${NEGATIVE}`
}
