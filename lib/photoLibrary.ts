/**
 * Curated Unsplash photography aligned with our trading/sourcing positioning.
 * Container ports, warehouses, packaging materials, home/garden/beauty product imagery.
 * All URLs use Unsplash CDN; ?w=1600&q=80&auto=format renders sharp WebP under Next/Image.
 */
const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const PHOTO = {
  pages: {
    home: {
      hero: U('1494412519320-aa613dfb7738'),
    },
    about: {
      hero: U('1553413077-190dd305871c'),
      gallery: [
        U('1494412519320-aa613dfb7738', 1200),
        U('1565374395542-0ce18882c857', 1200),
        U('1556761175-4b46a572b786', 1200),
        U('1581094794329-c8112a89af12', 1200),
      ],
    },
    contact: {
      hero: U('1577415124269-fc1140a69e91'),
      formSide: U('1556761175-4b46a572b786', 1200),
    },
    sourcing: {
      hero: U('1542838132-92c53300491e'),
    },
    solutions: {
      hero: U('1542838132-92c53300491e'),
    },
    resources: {
      hero: U('1568992687947-868a62a9f521'),
    },
  },
  home: {
    trustGallery: [
      U('1530103862676-de8c9debad1d', 800),
      U('1556909114-f6e7ad7d3136', 800),
      U('1416879595882-3373a0480b5b', 800),
      U('1556228720-195a672e8a03', 800),
      U('1606206873764-fd15e242df52', 800),
      U('1586528116311-ad8dd3c8310d', 800),
    ],
  },
  categories: {
    packaging: U('1530103862676-de8c9debad1d'),
    home: U('1556909114-f6e7ad7d3136'),
    garden: U('1416879595882-3373a0480b5b'),
    beauty: U('1556228720-195a672e8a03'),
  },
} as const
