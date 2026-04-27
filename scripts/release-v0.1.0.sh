#!/usr/bin/env bash
set -euo pipefail

git status
cat <<'MSG'

If the working tree is clean, run:

git tag -a v0.1.0 -m "v0.1.0 - Project Genesis Wizard public release"
git push origin v0.1.0

If GitHub CLI is installed, create the release with:

gh release create v0.1.0 --title "v0.1.0 - Project Genesis Wizard" --notes-file RELEASE-NOTES-v0.1.0.md
MSG
