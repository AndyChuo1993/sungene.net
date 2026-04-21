/**
 * Industry sub-pages — one page per product category that SunGene machinery
 * serves. Targets long-tail queries like "coffee packaging machine", "spice
 * powder filling line", "edible oil bottling machine".
 *
 * Pages live at `/[lang]/industries/[slug]`.
 */

import { ALL_LANGS, type Lang } from '@/lib/i18n'
import type { MachineSlug } from '@/lib/productSchema'

export type IndustrySlug =
  | 'coffee'
  | 'spice-seasoning'
  | 'snack-chips'
  | 'nuts-dried-fruit'
  | 'sauce-condiment'
  | 'edible-oil'
  | 'honey-syrup'
  | 'dairy-yogurt'
  | 'pet-food'
  | 'protein-supplement'
  | 'detergent-household'
  | 'cosmetic-personal-care'
  | 'pharmaceutical'
  | 'tea-herbal'
  | 'agricultural-seed'

export type Industry = {
  slug: IndustrySlug
  name: string
  /** Header subtitle — one sentence. */
  intro: string
  /** Product forms that flow through our machinery. */
  productForms: string[]
  /** Packaging / filling formats common in this industry. */
  packagingFormats: string[]
  /** 3 recommended machines. Order = most important first. */
  recommendedMachines: [MachineSlug, MachineSlug, MachineSlug]
  /** Sample buyer use cases — quoted, realistic. */
  useCases: string[]
  /** Key factors buyers weigh. */
  keyFactors: string[]
  /** Typical output range to set expectations. */
  typicalOutput: string
  /** HS code if known (customs guidance for importers). */
  hsReference: string
}

export const INDUSTRIES: Record<IndustrySlug, Industry> = {
  coffee: {
    slug: 'coffee',
    name: 'Coffee Packaging',
    intro:
      'Coffee packaging machinery for roasted beans, ground coffee, instant coffee, and single-serve pods — from small-batch specialty roasters to industrial exporters.',
    productForms: ['Whole bean', 'Ground coffee', 'Instant coffee powder', 'Freeze-dried granules', 'Drip bags', 'Capsules / pods'],
    packagingFormats: ['Quad-seal bag', 'Stand-up pouch with valve', 'Flat-bottom bag', 'Single-serve sachet', 'Drip bag', 'Tin can', 'Glass jar'],
    recommendedMachines: ['pouch-packing-machine', 'powder-filling-machine', 'conveyor-system'],
    useCases: [
      'Roaster in Vietnam packing 250g and 500g quad-seal bags with one-way degassing valve',
      'Instant coffee exporter in Indonesia filling 20g single-serve sticks at 250/min',
      'Specialty roaster in Germany packing 340g valve bags at 40/min with nitrogen flush',
      'Drip-bag producer in Japan assembling 10g sachets into 10-count cartons',
    ],
    keyFactors: [
      'Nitrogen flush or vacuum — oxygen reduces shelf life',
      'Degassing valve compatibility',
      'Weight precision (±0.5g acceptable for retail)',
      'Film: valve-compatible multilayer with barrier layer',
    ],
    typicalOutput: '20–250 bags/min depending on format',
    hsReference: '8422.30',
  },
  'spice-seasoning': {
    slug: 'spice-seasoning',
    name: 'Spice & Seasoning Packaging',
    intro:
      'Spice, seasoning, and herb packaging machinery for whole seeds, ground powders, and blended mixes — dust-controlled filling, auger-based dosing, resealable pouches.',
    productForms: ['Ground spice powder', 'Whole seeds', 'Seasoning blends', 'Dehydrated herbs', 'Curry powder', 'Masala', 'Rubs'],
    packagingFormats: ['Sachet', 'Stand-up pouch with zipper', 'Glass jar', 'Shaker bottle', 'Bulk bag', 'Tin can'],
    recommendedMachines: ['powder-filling-machine', 'pouch-packing-machine', 'conveyor-system'],
    useCases: [
      'Indian masala exporter filling 100g pouches with 6-head auger at 40/min',
      'Thai curry paste packer filling 50g sachets',
      'Middle East zaatar producer packing 250g resealable stand-up pouches',
      'US pepper grinder brand filling 500ml glass jars with volumetric auger',
    ],
    keyFactors: [
      'Dust containment — spice powders are very fine',
      'Weight accuracy (±0.2–0.5g for retail)',
      'Contamination prevention between flavor changeovers',
      'Static control for fine powders',
    ],
    typicalOutput: '20–60 fills/min (auger), 120–250/min (stick pack)',
    hsReference: '8422.30, 0910',
  },
  'snack-chips': {
    slug: 'snack-chips',
    name: 'Snack & Chips Packaging',
    intro:
      'Complete snack processing and packaging line integrations — continuous fryers, seasoning tumblers, multi-head weighers, and VFFS baggers for potato chips, banana chips, tortilla chips, extruded snacks.',
    productForms: ['Potato chips', 'Banana chips', 'Tortilla chips', 'Extruded puffs', 'Tapioca chips', 'Plantain chips'],
    packagingFormats: ['Pillow bag (VFFS)', 'Stand-up pouch', 'Multi-pack carton', 'Jar', 'Rigid tube'],
    recommendedMachines: ['snack-processing-line', 'pouch-packing-machine', 'conveyor-system'],
    useCases: [
      'Vietnamese banana chip producer running 300 kg/hr continuous fryer into 150g pillow bags',
      'Indonesian plantain chip brand with batch fryer and nitrogen-flushed VFFS',
      'Mexican tortilla chip maker packing 200g into stand-up pouches at 60/min',
      'Thai tapioca chip exporter running a full line: fryer + seasoning tumbler + weigher + bagger + case packer',
    ],
    keyFactors: [
      'Fryer throughput matches bagger speed (bottleneck planning)',
      'Oil filtration and temperature control',
      'Nitrogen flush to prevent oxidation and crush',
      'Multi-head weigher accuracy for fragile products',
    ],
    typicalOutput: '100 kg/hr – 2,000 kg/hr',
    hsReference: '8438.60, 8422.30',
  },
  'nuts-dried-fruit': {
    slug: 'nuts-dried-fruit',
    name: 'Nuts & Dried Fruit Packaging',
    intro:
      'Nut and dried fruit packaging lines — multi-head weighers, VFFS baggers, pre-made pouch machines, vacuum packers — for cashews, almonds, walnuts, raisins, and mixed trail mix.',
    productForms: ['Roasted nuts', 'Raw nuts', 'Coated nuts', 'Dried apricot / mango / cranberry', 'Raisins', 'Trail mix'],
    packagingFormats: ['Stand-up pouch with zipper', 'Vacuum bag', 'Pillow bag', 'Jar', 'Multi-pack carton'],
    recommendedMachines: ['pouch-packing-machine', 'conveyor-system', 'snack-processing-line'],
    useCases: [
      'Vietnamese cashew exporter filling 500g vacuum bags for US retail',
      'Turkish dried apricot producer filling 250g zipper pouches at 40/min',
      'Indian raisin packer using multi-head weigher + VFFS at 60 bags/min',
      'Australian trail mix brand combining 6 ingredients via weigher + bagger',
    ],
    keyFactors: [
      'Weight accuracy for high-value products (±1g)',
      'Vacuum or nitrogen flush for shelf life',
      'Oil/moisture barrier film for fatty nuts',
      'Mix-ratio accuracy for trail mix',
    ],
    typicalOutput: '20–80 bags/min',
    hsReference: '8422.30, 8422.40',
  },
  'sauce-condiment': {
    slug: 'sauce-condiment',
    name: 'Sauce & Condiment Filling',
    intro:
      'Sauce, ketchup, salsa, and condiment filling machinery — piston fillers for viscous products, multi-head servo for chunky sauces, CIP-ready stainless construction.',
    productForms: ['Tomato sauce', 'Chili sauce', 'Soy sauce', 'Fish sauce', 'Mayonnaise', 'Ketchup', 'Salsa', 'Curry paste'],
    packagingFormats: ['Glass bottle', 'PET bottle', 'Squeeze pouch with spout', 'Sachet', 'Gallon jug', 'Retort pouch'],
    recommendedMachines: ['liquid-filling-machine', 'pouch-packing-machine', 'conveyor-system'],
    useCases: [
      'Vietnamese fish sauce maker filling 500ml glass bottles at 60/min with CIP-ready piston filler',
      'Thai sriracha bottler filling 500g squeeze bottles at 80/min',
      'Mexican salsa brand filling 16oz jars with chunk-capable volumetric filler',
      'Indonesian sambal producer filling 100g retort pouches with spout',
    ],
    keyFactors: [
      'Viscosity handling (thick sauces require piston or lobe pumps)',
      'Particulate handling (chunks, seeds, spices)',
      'CIP (clean-in-place) compliance for sauces with allergens',
      'Accurate fill to avoid overfill giveaway',
    ],
    typicalOutput: '30–120 fills/min',
    hsReference: '8422.30, 8422.40',
  },
  'edible-oil': {
    slug: 'edible-oil',
    name: 'Edible Oil Bottling',
    intro:
      'Edible oil filling and capping lines — for palm, sunflower, olive, soybean, and coconut oil — flow-meter or gravity fillers, capping stations, labelers integrated.',
    productForms: ['Palm oil', 'Sunflower oil', 'Olive oil', 'Soybean oil', 'Coconut oil', 'Sesame oil', 'Rice bran oil'],
    packagingFormats: ['PET bottle', 'Glass bottle', 'Plastic jerrycan', 'Metal tin', 'Pouch'],
    recommendedMachines: ['liquid-filling-machine', 'conveyor-system', 'pouch-packing-machine'],
    useCases: [
      'Malaysian palm oil bottler filling 1L and 5L PET with flow-meter filler at 2,000 bph',
      'Italian extra virgin olive oil exporter filling 500ml glass with gravity filler',
      'Indonesian coconut oil brand filling 200ml bottles + capper + labeler line',
      'Nigerian palm oil packer filling 25L jerrycans with large-format piston filler',
    ],
    keyFactors: [
      'Viscosity compensation (olive oil flows differently at different temperatures)',
      'No-drip nozzle design',
      'Cap sealing torque control',
      'Foam-control for aerated oils',
    ],
    typicalOutput: '1,000–6,000 bph (bottles/hour)',
    hsReference: '8422.30, 8422.40',
  },
  'honey-syrup': {
    slug: 'honey-syrup',
    name: 'Honey & Syrup Filling',
    intro:
      'Honey, maple syrup, molasses, and fruit syrup filling lines — heated piston fillers with hoppers, temperature control, viscosity-compensated dosing.',
    productForms: ['Raw honey', 'Creamed honey', 'Maple syrup', 'Molasses', 'Fruit syrup', 'Agave nectar', 'Date syrup'],
    packagingFormats: ['Glass jar with screw cap', 'Squeeze bottle', 'Honey pot', 'Stick pack', 'Bulk drum'],
    recommendedMachines: ['liquid-filling-machine', 'conveyor-system', 'pouch-packing-machine'],
    useCases: [
      'Australian honey brand filling 500g hexagonal jars with heated piston filler',
      'Canadian maple syrup bottler filling 250ml glass bottles with viscosity compensation',
      'Middle Eastern date syrup producer filling 450g stand-up pouches with no-drip nozzle',
      'Thai fruit syrup brand filling 10ml stick packs at 300/min',
    ],
    keyFactors: [
      'Heated hopper (honey crystallizes below 35°C)',
      'Viscosity compensation at varying temperatures',
      'No-drip nozzle with suck-back',
      'Crystallization-resistant piping',
    ],
    typicalOutput: '20–120 fills/min',
    hsReference: '8422.30, 8422.40',
  },
  'dairy-yogurt': {
    slug: 'dairy-yogurt',
    name: 'Dairy & Yogurt Filling',
    intro:
      'Dairy product filling lines — milk, yogurt, cream cheese, butter, ghee — CIP/SIP compliant, food-grade SUS316L contact surfaces, cold or hot fill.',
    productForms: ['UHT milk', 'Yogurt', 'Drinkable yogurt', 'Cream', 'Cream cheese', 'Butter', 'Ghee'],
    packagingFormats: ['Plastic cup with foil seal', 'PET bottle', 'Pouch', 'Glass jar', 'Tub with lid', 'Carton'],
    recommendedMachines: ['liquid-filling-machine', 'conveyor-system', 'pouch-packing-machine'],
    useCases: [
      'Indian ghee producer filling 500g glass jars with heated piston filler',
      'Vietnamese yogurt brand filling 100g cups with seal-peel foil at 12,000/hr',
      'Greek yogurt exporter filling 150g tubs with rotary filler',
      'Middle Eastern labneh producer filling 500g containers with CIP-ready line',
    ],
    keyFactors: [
      'CIP/SIP compliance (daily sanitation)',
      'SUS316L stainless contact surfaces',
      'Cold-chain compatibility',
      'Foil seal integrity testing',
    ],
    typicalOutput: '3,000–15,000 units/hour',
    hsReference: '8422.30, 8422.40',
  },
  'pet-food': {
    slug: 'pet-food',
    name: 'Pet Food Packaging',
    intro:
      'Pet food packaging lines for dry kibble, treats, wet food, and freeze-dried products — high-capacity multi-head weighers, heavy-duty VFFS, pre-made pouch machines.',
    productForms: ['Dry kibble', 'Training treats', 'Jerky treats', 'Wet food', 'Freeze-dried raw', 'Supplements'],
    packagingFormats: ['Bulk bag (5–20kg)', 'Stand-up pouch with zipper', 'Retort pouch', 'Can / tin', 'Treat jar'],
    recommendedMachines: ['pouch-packing-machine', 'powder-filling-machine', 'conveyor-system'],
    useCases: [
      'Thai dry pet food exporter packing 10kg and 20kg open-mouth bags at 6/min',
      'Vietnamese pet treat brand filling 150g stand-up pouches with zipper at 50/min',
      'Indonesian wet cat food producer filling 85g retort pouches + retort sterilization',
      'US freeze-dried raw brand filling 500g aluminum-foil pouches at 40/min',
    ],
    keyFactors: [
      'Heavy-duty construction for abrasive kibble',
      'Multi-head weigher with anti-bridging',
      'Retort-compatible pouch materials for wet food',
      'Dust extraction for small-format treats',
    ],
    typicalOutput: '40–150 bags/min (small format), 6–15 bags/min (bulk)',
    hsReference: '8422.30, 8422.40',
  },
  'protein-supplement': {
    slug: 'protein-supplement',
    name: 'Protein & Supplement Filling',
    intro:
      'Protein powder and nutritional supplement packaging — whey, plant protein, pre-workout, meal replacement — auger fillers with dust extraction, high-precision dosing.',
    productForms: ['Whey protein', 'Plant protein', 'Mass gainer', 'Pre-workout', 'BCAA', 'Collagen', 'Meal replacement'],
    packagingFormats: ['Plastic jar', 'Stand-up pouch with zipper', 'Single-serve sachet', 'Stick pack'],
    recommendedMachines: ['powder-filling-machine', 'pouch-packing-machine', 'conveyor-system'],
    useCases: [
      'US whey protein brand filling 2.27kg jars at 30/min with servo auger',
      'Vietnamese collagen brand filling 3g single-serve sticks at 250/min',
      'UAE meal replacement brand filling 450g stand-up pouches at 30/min',
      'Australian plant protein producer filling 1kg bags with dust extraction',
    ],
    keyFactors: [
      'Dust extraction (protein powder is very fine)',
      'Scoop insertion automation',
      'Tamper-evident seal and induction cap',
      'Lot coding for traceability',
    ],
    typicalOutput: '20–60 jars/min, 100–300 sachets/min',
    hsReference: '8422.30, 8422.40',
  },
  'detergent-household': {
    slug: 'detergent-household',
    name: 'Detergent & Household Packaging',
    intro:
      'Detergent powder, liquid, and pod packaging — auger fillers for powder, flow-meter fillers for liquid, high-speed VFFS for single-dose sachets.',
    productForms: ['Powder detergent', 'Liquid detergent', 'Dishwashing liquid', 'Fabric softener', 'Bleach', 'Hand sanitizer'],
    packagingFormats: ['PET bottle', 'HDPE jug', 'Sachet', 'Stand-up pouch', 'Bulk bag'],
    recommendedMachines: ['powder-filling-machine', 'liquid-filling-machine', 'conveyor-system'],
    useCases: [
      'Indonesian detergent brand filling 800g single-use sachets at 200/min',
      'Filipino dishwashing liquid brand filling 250ml PET bottles at 60/min',
      'Thai fabric softener maker filling 1L jugs + cap + label line',
      'Egyptian bleach packer filling 2L HDPE bottles with corrosion-resistant filler',
    ],
    keyFactors: [
      'Corrosion resistance for bleach and alkaline',
      'Foam management for detergents',
      'Dust containment for powder',
      'Child-resistant cap compatibility',
    ],
    typicalOutput: '40–200 units/min',
    hsReference: '8422.30, 8422.40',
  },
  'cosmetic-personal-care': {
    slug: 'cosmetic-personal-care',
    name: 'Cosmetic & Personal Care Filling',
    intro:
      'Cosmetic and personal care filling lines — shampoo, lotion, cream, serum, oil, toner — viscosity-compensated piston fillers, no-drip nozzles, sterile fill options.',
    productForms: ['Shampoo', 'Conditioner', 'Body lotion', 'Face cream', 'Serum', 'Toner', 'Essential oil', 'Sunscreen'],
    packagingFormats: ['PET bottle', 'Glass bottle', 'Airless pump', 'Tube', 'Jar', 'Stick / lipstick'],
    recommendedMachines: ['liquid-filling-machine', 'conveyor-system', 'pouch-packing-machine'],
    useCases: [
      'Korean K-beauty serum brand filling 30ml glass bottles with airless pump',
      'Thai shampoo brand filling 400ml PET bottles at 60/min with capping',
      'UAE body lotion brand filling 200ml tubes with heated piston filler',
      'Indonesian essential oil exporter filling 10ml glass bottles with dripper cap',
    ],
    keyFactors: [
      'No-drip nozzle for high-value products',
      'Viscosity compensation (serum vs cream)',
      'Sterile fill option for leave-on products',
      'Precision dosing (±0.1g for 30ml bottles)',
    ],
    typicalOutput: '30–120 fills/min',
    hsReference: '8422.30, 8422.40',
  },
  pharmaceutical: {
    slug: 'pharmaceutical',
    name: 'Pharmaceutical Packaging',
    intro:
      'Pharmaceutical and nutraceutical packaging — powder, liquid, tablets, capsules — stick pack, sachet, strip pack, bottle filling with tamper evidence.',
    productForms: ['OTC tablets', 'Capsules', 'Pharma powder', 'Oral syrup', 'Sachets of granules', 'Injectable vials (contact-only)'],
    packagingFormats: ['Strip pack', 'Blister pack (partner equipment)', 'Sachet', 'Stick pack', 'HDPE bottle'],
    recommendedMachines: ['powder-filling-machine', 'liquid-filling-machine', 'pouch-packing-machine'],
    useCases: [
      'Vietnamese generic drug maker filling 5g powder sachets at 200/min',
      'Indonesian oral syrup brand filling 60ml glass bottles at 80/min',
      'Indian nutraceutical brand filling 3g stick packs of collagen at 250/min',
      'Middle East ORS brand filling 20g rehydration powder sachets',
    ],
    keyFactors: [
      'GMP compliance and documentation',
      'Tamper-evident seal',
      'Lot traceability and serialization',
      'Cleanroom compatibility',
    ],
    typicalOutput: '60–300 units/min',
    hsReference: '8422.30',
  },
  'tea-herbal': {
    slug: 'tea-herbal',
    name: 'Tea & Herbal Packaging',
    intro:
      'Tea bag and loose-leaf tea packaging — pillow bag VFFS, pyramid tea bag machines, bulk bag packers — for green, black, herbal, oolong, and specialty teas.',
    productForms: ['Loose leaf tea', 'CTC tea', 'Herbal blends', 'Matcha powder', 'Pyramid bag contents', 'Instant tea powder'],
    packagingFormats: ['Tea bag with tag', 'Pyramid tea bag', 'Loose-leaf pouch', 'Tin can', 'Pillow bag'],
    recommendedMachines: ['pouch-packing-machine', 'powder-filling-machine', 'conveyor-system'],
    useCases: [
      'Sri Lankan black tea exporter filling 500g loose-leaf pouches at 30/min',
      'Japanese matcha producer filling 30g tins with auger filler',
      'Vietnamese herbal tea brand filling pyramid bags with 2g net weight',
      'Indian masala chai blend packer using 4-head weigher + pillow bagger',
    ],
    keyFactors: [
      'Gentle handling to preserve leaf integrity',
      'Aroma preservation with barrier film',
      'Weight accuracy for 2g pyramid bags',
      'Tea bag string and tag application',
    ],
    typicalOutput: '60–200 bags/min (pillow), 30–80 bags/min (pyramid)',
    hsReference: '8422.30',
  },
  'agricultural-seed': {
    slug: 'agricultural-seed',
    name: 'Agricultural & Seed Packaging',
    intro:
      'Bulk packaging for rice, pulses, seeds, grains, and fertilizer — open-mouth baggers, vertical form-fill-seal for mid-format, multi-head weighers for seed counting.',
    productForms: ['Rice', 'Pulses (lentils, beans)', 'Sunflower seeds', 'Corn kernels', 'Wheat', 'Fertilizer', 'Agricultural seed'],
    packagingFormats: ['Bulk bag (10–25kg)', 'Mid-format bag (1–5kg)', 'Vacuum bag', 'Raffia bag', 'Jumbo FIBC'],
    recommendedMachines: ['powder-filling-machine', 'pouch-packing-machine', 'conveyor-system'],
    useCases: [
      'Thai rice exporter packing 5kg and 25kg bags at 12/min with net-weigh filler',
      'Indian pulses packer filling 1kg vacuum bags at 40/min',
      'Vietnamese coffee bean exporter filling 60kg jute bags for FOB shipment',
      'Philippine fertilizer packer filling 50kg open-mouth bags at 8/min',
    ],
    keyFactors: [
      'Bag size flexibility (1kg to 50kg)',
      'Net-weigh accuracy for large bags',
      'Dust suppression for granular products',
      'Stitching or sealing for raffia / jute',
    ],
    typicalOutput: '6–80 bags/min',
    hsReference: '8422.30, 8422.40',
  },
}

export const INDUSTRY_SLUGS = Object.keys(INDUSTRIES) as IndustrySlug[]

export function getAllIndustryParams(): { lang: Lang; slug: IndustrySlug }[] {
  return ALL_LANGS.flatMap((lang) => INDUSTRY_SLUGS.map((slug) => ({ lang, slug })))
}
