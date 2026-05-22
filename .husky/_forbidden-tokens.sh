#!/usr/bin/env bash
# Pinion Phase 1+2 forbidden tokens (data file, source of truth)
# Sourced by .husky/pre-commit and .husky/pre-push.
# To add a token: append to forbidden_tokens=() array below.

forbidden_tokens=(
  # Upstream factory claims wrongly attributed to SunGene
  'OEM factory'
  '自有工廠'
  '自有工厂'
  '我們的廠房'
  '我们的厂房'
  'our factory'
  'we manufacture'
  '我們生產'
  '我们生产'
  # Specific upstream factory data (belongs to Xiamen partner factory)
  '14 年'
  '14 years'
  '15,000 m²'
  '15000 m²'
  '廈門廠'
  '厦门厂'
  'Xiamen factory'
  # Misleading Alibaba verification terminology
  '5-star verified'
  'Verified Supplier'
  'Gold Supplier'
  'Alibaba 認證'
  'Alibaba 认证'
  'Alibaba 5-star supplier'
  # T1-T3 borderline + factual corrections (do not regress)
  'sourceadas'
  '3× faster'
  '3 倍'
  '三倍'
  'US-Taiwan IP treaties'
  '美台 IP 條約'
  '美台條約'
  'Taiwan export HS 4819.10'
  'China export HS 4819.20'
  # zh-Hans Q1 mainland Chinese localization (机率 → 概率)
  '机率'
  # Wave 5: multilingual ownership-claim translations (fr/es/cjk)
  'notre usine'
  'notre propre usine'
  'nuestra fábrica'
  'nuestra propia fábrica'
  'usine OEM'
  'fábrica OEM'
  'nous fabriquons'
  'fabricamos'
  '我們的工廠'
  '我们的工厂'
  # Wave 5: multilingual 5-star Alibaba tier (zh/cn/fr/es)
  'Alibaba 5 星認證'
  'Alibaba 5 星认证'
  'fournisseur vérifié 5 étoiles'
  'proveedor verificado 5 estrellas'
  # Wave 7 — n-gram cardinality variants (3-cat without beauté/belleza,
  # short forms, and EN no-ampersand variant)
  'emballage, maison et jardin'
  'empaque, hogar y jardín'
  'packaging, home and garden'
  'maison et jardin'
  'hogar y jardín'
  'home and garden'
  # --- Wave 8 additions: zh n-gram cardinality variants ---
  # Wave 7 caught fr/es 3-cat but missed zh equivalents in same file.
  '包裝、家居與園藝'
  '包装、家居与园艺'
  '家居與園藝'
  '家居与园艺'
  '包裝、家居、園藝'
  '包装、家居、园艺'
  '家居、園藝'
  '家居、园艺'
  # === Wave 9: Phase 2 supplier-voice hard-blocks ===
  # factual-claims.md v2.0 ❌ Phase 2 section. These break the "Taiwan-based
  # trading company" brand voice if they regress into marketing copy.
  # Margin-disclosure family (Pinion v1.2 招牌句, Phase 2 retired)
  'factory price and our margin'
  'prix usine et notre marge'
  'precio de fábrica y nuestra margen'
  '工廠價與我方利潤'
  '工厂价与我方利润'
  'transparent margin'
  # Factory-direct family (broker voice)
  'factory-direct pricing'
  'factory direct pricing'
  'factory-direct price'
  'direct from manufacturer'
  'prix usine direct'
  'precio de fábrica directo'
  '工廠直供價'
  '工廠直接價'
  '工厂直供价'
  '工厂直接价'
  # Dual-entity procurement family (sourcing-service voice)
  'dual-entity procurement'
  'dual-entity sourcing'
  'procurement sourcing'
  '雙公司採購'
  '双公司采购'
  # Specific city names in brand surfaces (Hero / sub / meta / schema only —
  # operational surfaces like Footer/Contact/About use full street addresses
  # which do not match these +/&/and conjunctions)
  'Taichung + Xiamen'
  'Taichung & Xiamen'
  'Taichung and Xiamen'
  '台中＋廈門'
  '台中＋厦门'
  '台中 + 廈門'
  '台中 + 厦门'
  '台中、廈門兩地'
  '台中、厦门两地'
  # Phase 2 retired voice — 'direct factory pricing' n-gram cardinality variants
  # (fr 'prix usine direct' already in original list; en/zh/cn/es added 2026-05-22
  # after pre-push hook caught the leak in components/home/WhoWeWorkWith.tsx)
  'direct factory pricing'
  'direct factory price'
  '直接工廠價'
  '直接工厂价'
  'precio directo de fábrica'
)
