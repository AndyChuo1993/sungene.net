const BASE = '/photo-real/library'

export const PHOTO = {
  home: {
    hero: `${BASE}/hero/home.jpg`,
    machineByProduct: [
      `${BASE}/home/machine-by-product-01-powder.jpg`,
      `${BASE}/home/machine-by-product-02-liquid.jpg`,
      `${BASE}/home/machine-by-product-03-pouch.png`,
      `${BASE}/home/machine-by-product-04-conveyor.jpg`,
    ],
    trustGallery: [
      `${BASE}/home/trust-01-weld.jpg`,
      `${BASE}/home/trust-02-plc.jpg`,
      `${BASE}/home/trust-03-sealing.jpg`,
      `${BASE}/home/trust-04-fat.jpg`,
      `${BASE}/home/trust-05-crate.jpg`,
      `${BASE}/home/trust-06-container.jpg`,
      `${BASE}/home/trust-07-team.jpg`,
      `${BASE}/home/trust-08-qc.jpg`,
    ],
    processThumbs: {
      0: `${BASE}/home/process-01-requirements.jpg`,
      3: `${BASE}/home/process-04-qc.jpg`,
      4: `${BASE}/home/process-05-shipping.jpg`,
    } as const,
  },
  pages: {
    about: {
      hero: `${BASE}/hero/about.jpg`,
      gallery: [
        `${BASE}/about/gallery-01-workshop.jpg`,
        `${BASE}/about/gallery-02-assembly.jpg`,
        `${BASE}/about/gallery-03-factoryline.jpg`,
        `${BASE}/about/gallery-04-controlpanel.jpg`,
      ],
    },
    contact: {
      hero: `${BASE}/hero/contact.jpg`,
      formSide: `${BASE}/contact/form-side.jpg`,
    },
    resources: {
      hero: `${BASE}/hero/resources.jpg`,
      cards: [
        `${BASE}/resources/card-01-choose-machine.jpg`,
        `${BASE}/resources/card-02-vffs.jpg`,
        `${BASE}/resources/card-03-automation.jpg`,
        `${BASE}/resources/card-04-import-shipping.jpg`,
        `${BASE}/resources/card-05-voltage.jpg`,
        `${BASE}/resources/card-06-supplier-audit.jpg`,
      ],
    },
    industries: {
      hero: `${BASE}/hero/industries.jpg`,
      cards: [
        `${BASE}/industries/card-01-powder.jpg`,
        `${BASE}/industries/card-02-liquid.jpg`,
        `${BASE}/industries/card-03-snack.jpg`,
        `${BASE}/industries/card-04-food.jpg`,
        `${BASE}/industries/card-05-industrial.jpg`,
      ],
    },
    solutions: {
      hero: `${BASE}/hero/solutions.jpg`,
    },
  },
  machinery: {
    catalogHero: `${BASE}/hero/machinery-catalog.jpg`,
    categoryPhotos: [
      `${BASE}/machinery/category-01-packaging.jpg`,
      `${BASE}/machinery/category-02-food-processing.jpg`,
      `${BASE}/machinery/category-03-filling-sealing.jpg`,
      `${BASE}/machinery/category-04-conveying.jpg`,
      `${BASE}/machinery/category-05-custom.jpg`,
    ],
    subpageHeroes: {
      packaging: `${BASE}/machinery-sub/packaging.jpg`,
      foodProcessing: `${BASE}/machinery-sub/food-processing.jpg`,
      fillingSealing: `${BASE}/machinery-sub/filling-sealing.jpg`,
      conveyingAutomation: `${BASE}/machinery-sub/conveying-automation.jpg`,
      custom: `${BASE}/machinery-sub/custom.jpg`,
    },
  },
  machines: {
    pouchPackingHero: `${BASE}/machines/pouch-packing-hero.jpg`,
    powderFillingHero: `${BASE}/machines/powder-filling-hero.jpg`,
    liquidFillingHero: `${BASE}/machines/liquid-filling-hero.jpg`,
    conveyorSystemHero: `${BASE}/machines/conveyor-system-hero.jpg`,
    snackProcessingHero: `${BASE}/machines/snack-processing-hero.jpg`,
  },
  legacy: {
    pouch: [
      `${BASE}/legacy/pouch-01.jpg`,
      `${BASE}/legacy/pouch-02.jpg`,
      `${BASE}/legacy/pouch-03.jpg`,
    ],
    powder: [
      `${BASE}/legacy/powder-01.jpg`,
      `${BASE}/legacy/powder-02.jpg`,
      `${BASE}/legacy/powder-03.jpg`,
    ],
    liquid: [
      `${BASE}/legacy/liquid-01.jpg`,
      `${BASE}/legacy/liquid-02.jpg`,
      `${BASE}/legacy/liquid-03.jpg`,
    ],
    conveyor: [
      `${BASE}/legacy/conveyor-01.jpg`,
      `${BASE}/legacy/conveyor-02.jpg`,
      `${BASE}/legacy/conveyor-03.jpg`,
    ],
    powderPackaging: [
      `${BASE}/legacy/powder-packaging-01.jpg`,
      `${BASE}/legacy/powder-packaging-02.jpg`,
      `${BASE}/legacy/powder-packaging-03.jpg`,
    ],
  },
  details: {
    items: [
      `${BASE}/details/detail-01-hmi.jpg`,
      `${BASE}/details/detail-02-wiring.jpg`,
      `${BASE}/details/detail-03-nozzle.jpg`,
      `${BASE}/details/detail-04-sealingjaw.jpg`,
      `${BASE}/details/detail-05-stainless.jpg`,
    ],
  },
} as const
