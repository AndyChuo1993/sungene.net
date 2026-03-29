const IMAGE_BASE_URL = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image'

type ImageSize =
  | 'square_hd'
  | 'square'
  | 'portrait_4_3'
  | 'portrait_16_9'
  | 'landscape_4_3'
  | 'landscape_16_9'

function img(prompt: string, imageSize: ImageSize) {
  return `${IMAGE_BASE_URL}?prompt=${encodeURIComponent(prompt)}&image_size=${imageSize}`
}

const STYLE =
  'ultra realistic professional photograph, modern high-tech stainless steel factory, clean lighting, sharp focus, high detail, natural colors, no text, no logo, no watermark'

export const PHOTO = {
  home: {
    hero: img(
      `wide shot of an automated packaging line with stainless steel machinery inside a modern clean factory, cinematic perspective, ${STYLE}`,
      'landscape_16_9',
    ),
    machineByProduct: [
      img(
        `auger powder filling machine with stainless steel hopper and enclosed safety guard, modern factory background, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `multi-nozzle liquid filling machine on a bottling line, stainless steel, hygienic design, modern factory, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `premade pouch packing machine with open pouches on conveyor, stainless steel, modern packaging equipment, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `industrial conveyor system with stainless steel frame and blue belt, automated material handling, modern factory, ${STYLE}`,
        'landscape_4_3',
      ),
    ],
    trustGallery: [
      img(
        `close-up of a perfect TIG weld bead on stainless steel machinery frame, macro detail, modern factory lighting, ${STYLE}`,
        'square',
      ),
      img(
        `PLC control cabinet interior with neatly routed wires and labeled terminals, industrial automation, ${STYLE}`,
        'square',
      ),
      img(
        `packaging machine sealing station with heat sealing jaws, stainless steel, production environment, ${STYLE}`,
        'square',
      ),
      img(
        `factory acceptance test scene: technician checking packaging machine parameters on a laptop beside running line, ${STYLE}`,
        'square',
      ),
      img(
        `export wooden crate being built around a stainless steel machine, protective packing materials, warehouse setting, ${STYLE}`,
        'square',
      ),
      img(
        `industrial machine being loaded into a shipping container with straps and wooden supports, logistics scene, ${STYLE}`,
        'square',
      ),
      img(
        `engineering team on factory floor reviewing a machine layout on a tablet, stainless steel equipment behind, ${STYLE}`,
        'square',
      ),
      img(
        `quality control inspection in a modern factory: calipers measuring a stainless steel part, macro detail, ${STYLE}`,
        'square',
      ),
    ],
    processThumbs: {
      0: img(
        `requirements workshop: engineer pointing at a machine layout drawing with stainless steel equipment in background, ${STYLE}`,
        'landscape_4_3',
      ),
      3: img(
        `quality control process: inspector checking packaged product and machine settings on production line, ${STYLE}`,
        'landscape_4_3',
      ),
      4: img(
        `export shipping: secured stainless steel machinery pallet being staged for container loading, warehouse logistics, ${STYLE}`,
        'landscape_4_3',
      ),
    } as const,
  },
  pages: {
    about: {
      hero: img(
        `modern manufacturing workshop with stainless steel packaging machines and clean lighting, wide hero shot, ${STYLE}`,
        'landscape_16_9',
      ),
      gallery: [
        img(
          `bright modern machine workshop with stainless steel frames and precision tools on benches, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `industrial machine assembly area with technicians installing components on stainless steel equipment, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `clean factory production line with multiple packaging machines in sequence, depth perspective, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `close-up of industrial control panel with HMI touchscreen and status lights, modern automation cabinet, ${STYLE}`,
          'landscape_4_3',
        ),
      ],
    },
    contact: {
      hero: img(
        `technical service engineer in a modern factory office area, laptop and machine background, professional tone, ${STYLE}`,
        'landscape_16_9',
      ),
      formSide: img(
        `engineer writing a project checklist on clipboard beside stainless steel packaging equipment, shallow depth of field, ${STYLE}`,
        'portrait_4_3',
      ),
    },
    resources: {
      hero: img(
        `technical documentation and machine commissioning scene in a modern factory, engineer reviewing manuals next to equipment, ${STYLE}`,
        'landscape_16_9',
      ),
      cards: [
        img(
          `engineer comparing packaging machine options on a tablet with stainless steel machines in the background, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `vertical form fill seal machine (VFFS) with film roll and forming tube, stainless steel, modern packaging line, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `industrial automation: robotic arm near conveyor with control cabinets, modern smart factory, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `international shipping logistics: container yard with secured industrial machinery pallet, modern port scene, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `electrical compliance scene: technician measuring voltage inside an industrial control panel with multimeter, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `supplier audit in a modern factory: inspector reviewing checklist while observing stainless steel machine line, ${STYLE}`,
          'landscape_4_3',
        ),
      ],
    },
    industries: {
      hero: img(
        `high-tech industrial production floor with automation and stainless steel machinery, modern factory hero shot, ${STYLE}`,
        'landscape_16_9',
      ),
      cards: [
        img(
          `powder packaging industry: auger filler dosing powder into bags on a clean packaging line, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `liquid industry: hygienic stainless steel filling line with nozzles and bottles, modern factory, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `snack industry: automated snack processing and packaging line with conveyors and seasoning station, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `food industry: stainless steel food-grade packaging equipment in a cleanroom-like facility, ${STYLE}`,
          'landscape_4_3',
        ),
        img(
          `industrial goods: automated case packing with conveyor and labeling station, modern warehouse factory, ${STYLE}`,
          'landscape_4_3',
        ),
      ],
    },
    solutions: {
      hero: img(
        `end-to-end automation solution: integrated conveying filling sealing and packing line, stainless steel, modern factory, ${STYLE}`,
        'landscape_16_9',
      ),
    },
  },
  machinery: {
    catalogHero: img(
      `machinery catalog hero: showroom-like factory area with multiple stainless steel packaging machines, wide shot, ${STYLE}`,
      'landscape_16_9',
    ),
    categoryPhotos: [
      img(
        `packaging machinery category: vertical form fill seal packaging machine with film roll, stainless steel, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `food processing category: stainless steel mixing and processing equipment in a clean food factory, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `filling and sealing category: rotary filling machine with sealing station, hygienic stainless steel design, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `conveying automation category: modular conveyor system with sensors and stainless steel frame, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `custom machinery category: engineering workshop with custom-built stainless steel machine frame and tools, ${STYLE}`,
        'landscape_4_3',
      ),
    ],
    subpageHeroes: {
      packaging: img(
        `packaging subpage hero: modern packaging line with stainless steel VFFS machine and conveyor, wide shot, ${STYLE}`,
        'landscape_16_9',
      ),
      foodProcessing: img(
        `food processing subpage hero: stainless steel food processing line with clean lighting and safety guards, wide shot, ${STYLE}`,
        'landscape_16_9',
      ),
      fillingSealing: img(
        `filling and sealing subpage hero: hygienic liquid filling and sealing line in modern factory, wide shot, ${STYLE}`,
        'landscape_16_9',
      ),
      conveyingAutomation: img(
        `conveying automation subpage hero: long conveyor network with sensors and stainless steel frames in a modern facility, ${STYLE}`,
        'landscape_16_9',
      ),
      custom: img(
        `custom machinery subpage hero: engineers commissioning a custom stainless steel machine with laptop and tools, wide shot, ${STYLE}`,
        'landscape_16_9',
      ),
    },
  },
  machines: {
    pouchPackingHero: img(
      `pouch packing machine hero: stainless steel premade pouch packing machine in modern factory, dramatic lighting, ${STYLE}`,
      'landscape_16_9',
    ),
    powderFillingHero: img(
      `powder filling machine hero: stainless steel auger filler dosing system with hopper and guard, modern factory, ${STYLE}`,
      'landscape_16_9',
    ),
    liquidFillingHero: img(
      `liquid filling machine hero: multi-head stainless steel filling nozzles over bottles on conveyor, modern facility, ${STYLE}`,
      'landscape_16_9',
    ),
    conveyorSystemHero: img(
      `conveyor system hero: automated conveyor line with stainless steel structure and sensors, modern factory depth shot, ${STYLE}`,
      'landscape_16_9',
    ),
    snackProcessingHero: img(
      `snack processing line hero: conveyor-based processing and packaging line with stainless steel equipment, modern plant, ${STYLE}`,
      'landscape_16_9',
    ),
  },
  legacy: {
    pouch: [
      img(
        `pouch packing gallery: pouch filling station with open pouches, stainless steel machine, modern packaging line, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `pouch packing gallery: pouch sealing and zipper inspection close-up on a stainless steel packing machine, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `pouch packing gallery: finished pouches exiting packing machine onto conveyor with sensors, modern factory, ${STYLE}`,
        'landscape_4_3',
      ),
    ],
    powder: [
      img(
        `powder filling gallery: auger filler head dispensing powder into a bag, stainless steel, macro detail, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `powder filling gallery: stainless steel powder hopper with dust extraction and level sensors, modern factory, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `powder filling gallery: checkweigher conveyor downstream of powder filling station, modern packaging line, ${STYLE}`,
        'landscape_4_3',
      ),
    ],
    liquid: [
      img(
        `liquid filling gallery: stainless steel filling nozzles aligned over containers, hygienic design, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `liquid filling gallery: CIP-ready stainless steel piping and valves on a liquid filling system, macro detail, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `liquid filling gallery: capping or sealing station on a liquid bottling line with conveyor, modern factory, ${STYLE}`,
        'landscape_4_3',
      ),
    ],
    conveyor: [
      img(
        `conveyor gallery: modular belt conveyor with side guards and sensors, stainless steel frame, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `conveyor gallery: incline conveyor transferring packaged products between machines, clean factory lighting, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `conveyor gallery: accumulation conveyor section with rollers and photoelectric sensors, modern automation, ${STYLE}`,
        'landscape_4_3',
      ),
    ],
    powderPackaging: [
      img(
        `powder packaging gallery: VFFS machine forming tube with powder dosing auger attached, stainless steel, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `powder packaging gallery: heat sealing and cutting area of VFFS machine producing pillow bags, macro detail, ${STYLE}`,
        'landscape_4_3',
      ),
      img(
        `powder packaging gallery: finished powder bags on conveyor heading to case packer, modern factory, ${STYLE}`,
        'landscape_4_3',
      ),
    ],
  },
  details: {
    items: [
      img(
        `industrial HMI touchscreen on a stainless steel packaging machine, clear UI glow, close-up, ${STYLE}`,
        'square_hd',
      ),
      img(
        `neatly labeled wiring inside an electrical control cabinet for industrial automation, close-up, ${STYLE}`,
        'square_hd',
      ),
      img(
        `stainless steel filling nozzle close-up with drip-free design on a hygienic filling machine, ${STYLE}`,
        'square_hd',
      ),
      img(
        `precision heat sealing jaws on a packaging machine, stainless steel, macro mechanical detail, ${STYLE}`,
        'square_hd',
      ),
      img(
        `food-grade stainless steel surface finish on industrial machinery, brushed texture macro shot, ${STYLE}`,
        'square_hd',
      ),
    ],
  },
} as const
