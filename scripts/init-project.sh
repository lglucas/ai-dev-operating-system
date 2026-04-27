#!/usr/bin/env bash
set -euo pipefail

echo "AI Dev Operating System — local project initialization"
echo "Creating standard folders..."

mkdir -p \
  docs/product \
  docs/business/_review \
  docs/technical \
  docs/sprints \
  knowledge-base/competitors \
  knowledge-base/market \
  prototype-lab/shared \
  session-log

[ -f session-log/INDEX.md ] || printf "# Session Log Index\n" > session-log/INDEX.md
[ -f .env.example ] || printf "# Add project environment variables here\n" > .env.example

echo ""
echo "Done."
echo ""
echo "Now run Claude Code in this folder and paste:"
echo "Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele."
