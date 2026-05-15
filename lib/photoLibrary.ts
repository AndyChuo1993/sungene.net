/**
 * Self-hosted sourcing/trade photography.
 *
 * Previously these were live Unsplash CDN URLs. Next/Image's /_next/image
 * optimizer was re-fetching upstream on every miss, which produced ~10/hr
 * 500s when Unsplash CDN timed out (>10s). Self-hosting eliminates that.
 *
 * Files live in public/photo-real/sourcing/. Three rendered widths per source
 * image (800/1200/1600) — Next/Image picks the best fit based on viewport.
 *
 * All photography is sourced from Unsplash (free for commercial use). The
 * underlying IDs are retained in filenames for licence-trace.
 */
const local = (id: string, w: 800 | 1200 | 1600 = 1600) =>
  `/photo-real/sourcing/photo-${id}-${w}.jpg`

export const PHOTO = {
  pages: {
    home: {
      hero: local('1494412519320-aa613dfb7738'),
    },
    about: {
      hero: local('1553413077-190dd305871c'),
      gallery: [
        local('1494412519320-aa613dfb7738', 1200),
        local('1565374395542-0ce18882c857', 1200),
        local('1556761175-4b46a572b786', 1200),
        local('1581094794329-c8112a89af12', 1200),
      ],
    },
    contact: {
      hero: local('1577415124269-fc1140a69e91'),
      formSide: local('1556761175-4b46a572b786', 1200),
    },
    sourcing: {
      hero: local('1542838132-92c53300491e'),
    },
    solutions: {
      hero: local('1542838132-92c53300491e'),
    },
    resources: {
      hero: local('1568992687947-868a62a9f521'),
    },
  },
  home: {
    trustGallery: [
      local('1530103862676-de8c9debad1d', 800),
      local('1556909114-f6e7ad7d3136', 800),
      local('1416879595882-3373a0480b5b', 800),
      local('1556228720-195a672e8a03', 800),
      local('1606206873764-fd15e242df52', 800),
      local('1586528116311-ad8dd3c8310d', 800),
    ],
  },
  categories: {
    packaging: local('1530103862676-de8c9debad1d'),
    home: local('1556909114-f6e7ad7d3136'),
    garden: local('1416879595882-3373a0480b5b'),
    beauty: local('1556228720-195a672e8a03'),
  },
} as const
