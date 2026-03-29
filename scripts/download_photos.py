# -*- coding: utf-8 -*-
"""
Download all site photos from Unsplash, replacing old/broken photos with
modern, high-quality industrial imagery. Each photo is unique.
"""
import subprocess
import json
import os
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

PHOTO_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "photo-real", "library")

# (unsplash_id, relative_path)  — 73 unique photos, no duplicates
PHOTOS = [
    # ── HERO IMAGES ──────────────────────────────────────────────────────────
    ("HNLlzPGbTBM", "hero/home.jpg"),            # industrial factory floor, modern
    ("de-NdF2E9WA",  "hero/about.jpg"),           # polymer factory machines / production line
    ("n-BivD2fBL0",  "hero/contact.jpg"),         # engineer (m+f) with laptop in factory
    ("NDv3QO5QQvI",  "hero/industries.jpg"),      # automotive industry assembly shop
    ("IWJNXtezL2I",  "hero/machinery-catalog.jpg"), # factory with lots of machinery
    ("KBtFGRUqJ1o",  "hero/resources.jpg"),       # technologist with laptop in dairy factory
    ("Om6MgwFdnE4",  "hero/solutions.jpg"),       # robotic arm placing items on conveyor

    # ── HOME — Machine By Product ─────────────────────────────────────────────
    ("5ke1WEwbTmg",  "home/machine-by-product-01-powder.jpg"),   # clean room stainless machines
    ("ZCDXHhBkhT4",  "home/machine-by-product-02-liquid.jpg"),   # auto filling machine PET bottles
    ("NizEm-Sy6yM",  "home/machine-by-product-03-pouch.jpg"),    # cookie factory food packing
    ("kGuqkoK4m38",  "home/machine-by-product-04-conveyor.jpg"), # conveyor in modern plant

    # ── HOME — Trust Gallery (8 square) ──────────────────────────────────────
    ("CD6yT2642ls",  "home/trust-01-weld.jpg"),       # welder working on metal
    ("FzrJcxNP3fQ",  "home/trust-02-plc.jpg"),        # open electrical panel, circuit breakers
    ("tecwLc8n57g",  "home/trust-03-sealing.jpg"),    # machines assembling electronic components
    ("n9Ir9MerFmA",  "home/trust-04-fat.jpg"),        # industrial engineer with clipboard
    ("Beg5nxwR9tA",  "home/trust-05-crate.jpg"),      # shipping containers stacked at port
    ("oc-KTMcrHrk",  "home/trust-06-container.jpg"),  # aerial view container ship at sea port
    ("jV2Wdl1HOs4",  "home/trust-07-team.jpg"),       # three people discussing diagram
    ("_luiFaaZU6k",  "home/trust-08-qc.jpg"),         # digital caliper measuring metal part

    # ── HOME — Process Thumbnails ─────────────────────────────────────────────
    ("pun3UkaC5VY",  "home/process-01-requirements.jpg"), # man reviewing paper in factory
    ("mrGSW_VZp0s",  "home/process-04-qc.jpg"),           # man using measurement tools
    ("T2zsJgHKW3U",  "home/process-05-shipping.jpg"),     # cargo ship with containers at port

    # ── ABOUT PAGE gallery ────────────────────────────────────────────────────
    ("tJh73V0Jzw0",  "about/gallery-01-workshop.jpg"),     # factory filled with machines
    ("C6FKQMijEdc",  "about/gallery-02-assembly.jpg"),     # workers assembling on production line
    ("Bg3g5PqqD54",  "about/gallery-03-factoryline.jpg"),  # automotive plant production / welding
    ("MrNR0v4HSiU",  "about/gallery-04-controlpanel.jpg"), # woman at factory control desk

    # ── CONTACT ───────────────────────────────────────────────────────────────
    ("JkdmC_eUbwA",  "contact/form-side.jpg"),  # engineer with laptop in factory

    # ── INDUSTRIES cards ──────────────────────────────────────────────────────
    ("uoagt03j7bw",  "industries/card-01-powder.jpg"),     # steel chromed tank, pressure meter
    ("c6BIhsuRIDg",  "industries/card-02-liquid.jpg"),     # conveyor belt with bottles at beverage plant
    ("QXr9b1qfapw",  "industries/card-03-snack.jpg"),      # close-up salty snacks in food factory
    ("3RO3W1L6fYs",  "industries/card-04-food.jpg"),       # worker picking biscuits from machine
    ("6G3f9sYLDbA",  "industries/card-05-industrial.jpg"), # workers moving pallets in warehouse

    # ── RESOURCES cards ───────────────────────────────────────────────────────
    ("i722qu9dqpk",  "resources/card-01-choose-machine.jpg"),  # engineer examining machinery
    ("Ib71Uju1v5w",  "resources/card-02-vffs.jpg"),            # industrial machinery extruding into bags
    ("dPHAWuVx1bE",  "resources/card-03-automation.jpg"),      # robots assemble cars on assembly line
    ("zBt4b91thF4",  "resources/card-04-import-shipping.jpg"), # Asian foreman container logistics
    ("rDyXca1ZGRI",  "resources/card-05-voltage.jpg"),         # control panel in building at night
    ("X61nl06t4oc",  "resources/card-06-supplier-audit.jpg"),  # engineer making laptop entries at factory

    # ── MACHINERY categories ──────────────────────────────────────────────────
    ("kvIn5fDIvww",  "machinery/category-01-packaging.jpg"),      # employees packing cookies in boxes
    ("mUSP46d8Iyw",  "machinery/category-02-food-processing.jpg"), # dairy/cheese production, chrome tanks
    ("4ylGUWrgj6s",  "machinery/category-03-filling-sealing.jpg"), # conveyor with bottles, beverages
    ("qWUXZWuftJI",  "machinery/category-04-conveying.jpg"),       # industrial conveyor belt in factory
    ("KeLUeVSplNY",  "machinery/category-05-custom.jpg"),          # man working on laptop with tools

    # ── MACHINERY sub-page heroes ─────────────────────────────────────────────
    ("UOCu07aRCK4",  "machinery-sub/packaging.jpg"),          # packaging bag production workshop
    ("oLS6IxceVNs",  "machinery-sub/food-processing.jpg"),    # apple processing company interior
    ("IyfkENZVyMY",  "machinery-sub/filling-sealing.jpg"),    # auto filling machine PET bottles
    ("ayov53QiSSg",  "machinery-sub/conveying-automation.jpg"), # automated production line solar
    ("uX6uT3Vgv0Y",  "machinery-sub/custom.jpg"),             # engineer with laptop, pipeline monitoring

    # ── MACHINE detail heroes ─────────────────────────────────────────────────
    ("7LHH0BlHsjE",  "machines/pouch-packing-hero.jpg"),     # clean room stainless steel machines
    ("vZaU5A9m4bs",  "machines/powder-filling-hero.jpg"),    # plant facility clean room stainless
    ("qw1_1KgWCUA",  "machines/liquid-filling-hero.jpg"),    # conveyor belt with bottles of water
    ("_XDK4naBbgw",  "machines/conveyor-system-hero.jpg"),   # refrigerator mfg automated production line
    ("H1dVEaatdfE",  "machines/snack-processing-hero.jpg"),  # salty snacks in factory production line

    # ── LEGACY — Pouch Packing gallery ───────────────────────────────────────
    ("bCgsKqFzUcg",  "legacy/pouch-01.jpg"),  # group of people in food processing factory
    ("9ISK3WoMaJ8",  "legacy/pouch-02.jpg"),  # young man in protective uniform, seafood factory
    ("sjg9jKHnKPI",  "legacy/pouch-03.jpg"),  # food plant worker holding tray of biscuits

    # ── LEGACY — Powder Filling gallery ──────────────────────────────────────
    ("UtYhjkq8-9M",  "legacy/powder-01.jpg"),  # plant facility clean room stainless steel
    ("YD8IVSpZ1DQ",  "legacy/powder-02.jpg"),  # steel automatic equipment, cheese factory
    ("AglcyVspWOs",  "legacy/powder-03.jpg"),  # cheese production with industrial equipment

    # ── LEGACY — Liquid Filling gallery ──────────────────────────────────────
    ("z5I0PNwlwjU",  "legacy/liquid-01.jpg"),  # bottles being filled on assembly line
    ("cHWzlU8lEcc",  "legacy/liquid-02.jpg"),  # conveyor with bottles at beverage plant
    ("Xlc8HG_FB2k",  "legacy/liquid-03.jpg"),  # glass bottles on gray filling machine

    # ── LEGACY — Conveyor gallery ─────────────────────────────────────────────
    ("ziF-1HQji_0",  "legacy/conveyor-01.jpg"),  # industrial machinery processing containers
    ("TJGr72z-f0w",  "legacy/conveyor-02.jpg"),  # robotics and AI in smart warehouse logistics
    ("A8ZIFo9CySM",  "legacy/conveyor-03.jpg"),  # robotic arms working in warehouse

    # ── LEGACY — Powder Packaging gallery ────────────────────────────────────
    ("8gr6bObQLOI",  "legacy/powder-packaging-01.jpg"),  # factory filled with orange robots
    ("nb3-HNV07Fg",  "legacy/powder-packaging-02.jpg"),  # factory filled with metal tanks
    ("Jn2vgcVJRAM",  "legacy/powder-packaging-03.jpg"),  # large metal tanks in industrial setting

    # ── DETAILS — close-up machine parts ─────────────────────────────────────
    ("HdLqoJX0IIo",  "details/detail-01-hmi.jpg"),        # green machine with yellow touchscreen
    ("cI4Xrsu-CUE",  "details/detail-02-wiring.jpg"),     # brewery worker checking scheme on screen
    ("CpaSFr-XFUQ",  "details/detail-03-nozzle.jpg"),     # filter/pipe system at beer factory
    ("Fcdi3k5d3tw",  "details/detail-04-sealingjaw.jpg"), # close-up drill chuck on machine
    ("-Ir96PBJEoY",  "details/detail-05-stainless.jpg"),  # silver and gold steel tube close-up
]


def get_image_url(photo_id):
    """Fetch the regular-size image URL from Unsplash napi."""
    result = subprocess.run(
        ['curl', '-s', '--max-time', '15',
         '-H', 'Accept: application/json',
         f'https://unsplash.com/napi/photos/{photo_id}'],
        capture_output=True
    )
    if result.returncode != 0:
        return None
    try:
        data = json.loads(result.stdout.decode('utf-8'))
        return data.get('urls', {}).get('regular')
    except Exception as e:
        print(f"    JSON error: {e}", file=sys.stderr)
        return None


def download_photo(url, output_path):
    """Download a photo from URL to output_path."""
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    result = subprocess.run(
        ['curl', '-L', '--max-time', '60', '-o', output_path, url],
        capture_output=True
    )
    return result.returncode == 0


def main():
    total = len(PHOTOS)
    ok = 0
    failed = []

    for idx, (photo_id, rel_path) in enumerate(PHOTOS, 1):
        output_path = os.path.join(PHOTO_DIR, rel_path)
        print(f"[{idx}/{total}] {photo_id} -> {rel_path}")

        url = get_image_url(photo_id)
        if not url:
            print(f"  FAIL: Could not get URL for {photo_id}")
            failed.append((photo_id, rel_path, "no_url"))
            continue

        success = download_photo(url, output_path)
        if success:
            size = os.path.getsize(output_path)
            print(f"  OK: {size:,} bytes")
            ok += 1
        else:
            print(f"  FAIL: Download failed")
            failed.append((photo_id, rel_path, "download_failed"))

        time.sleep(0.4)  # respect rate limits

    print(f"\nDone: {ok}/{total} succeeded")
    if failed:
        print("Failed:")
        for fid, fpath, reason in failed:
            print(f"  {fid} -> {fpath} ({reason})")


if __name__ == "__main__":
    main()
