#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-.}"
OUT="${2:-external-links.txt}"

grep -RhoE 'https?://[^ )\]">]+' "$ROOT" \
  --exclude-dir=.git \
  --exclude-dir=node_modules \
  --exclude-dir=.next \
  --exclude='external-links.txt' \
  | sed 's/[.,;:)]$//' \
  | sort -u > "$OUT"

echo "Wrote $(wc -l < "$OUT") unique links to $OUT"
