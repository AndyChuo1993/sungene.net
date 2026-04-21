# -*- coding: utf-8 -*-
"""
Targeted replacement of bad/wrong photos with correct industrial imagery.
Each Unsplash ID below is freshly chosen and not a duplicate of existing photos.
"""
import subprocess
import json
import os
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

PHOTO_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "photo-real", "library")

# Replacements: (unsplash_id, relative_path, reason)
REPLACEMENTS = [
    # Home — process section
    ("kB08wdAeHnY",  "home/process-04-qc.jpg",
     "Technologist in production facility with digital tablet — replaces mugs photo"),

    # Home — trust gallery
    ("SRqJ3eli-4I",  "home/trust-04-fat.jpg",
     "Two metal mechanical parts on engineering blueprints — replaces consumer device"),
    ("bqe54PQcQ9s",  "home/trust-07-team.jpg",
     "Forklift in container warehouse with blue sky — replaces B&W old crating"),
    ("v0_Vajt1QAI",  "home/trust-08-qc.jpg",
     "Aerial view of container port warehouse — replaces sepia old crane"),

    # Machinery catalog cards
    ("xYCTes8GFFU",  "machinery/category-01-packaging.jpg",
     "Operator using cellophane wrapping machine — replaces B&W old machinery"),
    ("Tsr9rdz7ErU",  "machinery/category-02-food-processing.jpg",
     "Food processing machinery with yellow ingredients — replaces antique machine"),
    ("4nfPgBofTs4",  "machinery/category-04-conveying.jpg",
     "Men observe automated conveyor belt system — replaces B&W old illustration"),

    # Machinery sub-page hero
    ("z7pvrAfpi6I",  "machinery-sub/packaging.jpg",
     "Industrial polyethylene film machine — replaces textile facility"),

    # About page gallery
    ("4IGJmUT1aXY",  "about/gallery-02-assembly.jpg",
     "Workers walking in industrial plant with machines — replaces B&W car"),
    ("eKVZJaEXmQ8",  "about/gallery-03-factoryline.jpg",
     "Industrial workshop interior with machines — replaces building exterior/field"),
]


def get_image_url(photo_id):
    result = subprocess.run(
        ['curl', '-s', '--max-time', '15', '-H', 'Accept: application/json',
         f'https://unsplash.com/napi/photos/{photo_id}'],
        capture_output=True
    )
    try:
        data = json.loads(result.stdout.decode('utf-8'))
        return data.get('urls', {}).get('regular')
    except Exception as e:
        print(f"  Parse error for {photo_id}: {e}")
        return None


def download_photo(url, dest_path):
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    result = subprocess.run(
        ['curl', '-L', '-s', '--max-time', '30', '-o', dest_path, url],
        capture_output=True
    )
    return result.returncode == 0 and os.path.getsize(dest_path) > 10000


def main():
    print(f"Replacing {len(REPLACEMENTS)} bad photos...\n")
    ok = 0
    fail = 0

    for photo_id, rel_path, reason in REPLACEMENTS:
        dest = os.path.join(PHOTO_DIR, rel_path.replace('/', os.sep))
        old_size = os.path.getsize(dest) if os.path.exists(dest) else 0
        print(f"[{rel_path}]")
        print(f"  Reason: {reason}")

        url = get_image_url(photo_id)
        if not url:
            print(f"  FAIL  cannot get URL for {photo_id}")
            fail += 1
            continue

        print(f"  Downloading {photo_id}...")
        if download_photo(url, dest):
            new_size = os.path.getsize(dest)
            print(f"  OK    {old_size//1024}KB -> {new_size//1024}KB")
            ok += 1
        else:
            print(f"  FAIL  download failed")
            fail += 1

        time.sleep(0.5)

    print(f"\nDone: {ok} replaced, {fail} failed")


if __name__ == '__main__':
    main()
