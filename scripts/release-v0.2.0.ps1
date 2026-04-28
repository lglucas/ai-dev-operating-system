# Release helper for AI Dev Operating System v0.2.0
# Run from the repository root after committing all files.

git status
Write-Host "If the working tree is clean, run:" -ForegroundColor Cyan
Write-Host "git tag -a v0.2.0 -m 'v0.2.0 - Project Genesis Wizard + Public Release Polish'"
Write-Host "git push origin v0.2.0"
Write-Host ""
Write-Host "If GitHub CLI is installed, create the release with:"
Write-Host "gh release create v0.2.0 --title 'v0.2.0 - Project Genesis Wizard + Public Release Polish' --notes-file RELEASE-NOTES-v0.2.0.md"
