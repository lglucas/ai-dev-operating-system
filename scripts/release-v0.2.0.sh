#!/usr/bin/env bash
set -euo pipefail

git status
cat <<'MSG'

If the working tree is clean, run:

git tag -a v0.2.0 -m "v0.2.0 - Project Genesis Wizard + Public Release Polish"
git push origin v0.2.0

If GitHub CLI is installed, create the release with:

gh release create v0.2.0 --title "v0.2.0 - Project Genesis Wizard + Public Release Polish" --notes-file RELEASE-NOTES-v0.2.0.md
MSG
