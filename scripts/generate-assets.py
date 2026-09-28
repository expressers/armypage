#!/usr/bin/env python3
"""Regenerates favicons, app icons and the social preview image from assets/*.svg.

Requires rsvg-convert (brew install librsvg). ICO files embed PNG images, which every
modern browser and Windows (Vista+) supports, so no imaging library is needed.
"""
from __future__ import annotations

import struct
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS, PUBLIC = ROOT / "assets", ROOT / "public"


def png(svg: str, out: str, w: int, h: int | None = None) -> bytes:
    path = PUBLIC / out if out else None
    args = ["rsvg-convert", "-w", str(w), "-h", str(h or w), str(ASSETS / svg)]
    data = subprocess.run(args, check=True, capture_output=True).stdout
    if path:
        path.write_bytes(data)
    return data


def ico(images: list[tuple[int, bytes]]) -> bytes:
    header = struct.pack("<HHH", 0, 1, len(images))
    offset = 6 + 16 * len(images)
    entries, blobs = b"", b""
    for size, data in images:
        dim = 0 if size >= 256 else size
        entries += struct.pack("<BBBBHHII", dim, dim, 0, 0, 1, 32, len(data), offset + len(blobs))
        blobs += data
    return header + entries + blobs


PUBLIC.mkdir(exist_ok=True)
(PUBLIC / "favicon.svg").write_text((ASSETS / "icon.svg").read_text())
(PUBLIC / "favicon.ico").write_bytes(ico([(s, png("icon.svg", "", s)) for s in (16, 32, 48)]))
png("icon-fullbleed.svg", "apple-touch-icon.png", 180)
png("icon.svg", "icon-192.png", 192)
png("icon.svg", "icon-512.png", 512)
png("icon-fullbleed.svg", "icon-maskable-512.png", 512)
png("og-image.svg", "og-image.png", 1200, 630)
print("assets generated in", PUBLIC)
