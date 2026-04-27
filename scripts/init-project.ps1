$ErrorActionPreference = "Stop"

Write-Host "AI Dev Operating System — local project initialization" -ForegroundColor Cyan
Write-Host "Creating standard folders..."

$dirs = @(
  "docs/product",
  "docs/business/_review",
  "docs/technical",
  "docs/sprints",
  "knowledge-base/competitors",
  "knowledge-base/market",
  "prototype-lab/shared",
  "session-log"
)

foreach ($dir in $dirs) {
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

if (-not (Test-Path "session-log/INDEX.md")) {
  "# Session Log Index`n" | Set-Content "session-log/INDEX.md" -Encoding UTF8
}

if (-not (Test-Path ".env.example")) {
  "# Add project environment variables here`n" | Set-Content ".env.example" -Encoding UTF8
}

Write-Host ""
Write-Host "Done." -ForegroundColor Green
Write-Host ""
Write-Host "Now run Claude Code in this folder and paste:" -ForegroundColor Yellow
Write-Host "Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele."
