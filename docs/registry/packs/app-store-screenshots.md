# App Store Screenshots

- **URL:** https://github.com/ParthJadhav/app-store-screenshots
- **License:** MIT
- **Status:** active (4.3k stars, 285 forks)
- **Last reviewed:** 2026-04-30
- **Tags:** #design #tooling

## What it is

Generates production-ready App Store and Google Play screenshots for iOS and Android apps. Scaffolds a Next.js project, asks about brand / features / style preferences, designs advertisement-style screenshots, and exports them at all required Apple (6.1"–6.9") and Google Play resolutions. Bulk export across locale / device / theme combinations.

## When to install

- Project is shipping a mobile app to App Store and/or Google Play.
- Need polished marketing screenshots before submission deadline.
- Multi-locale launches (i18n + RTL layouts supported).
- Solo founders without a designer.

## When NOT to install

- Web-only projects.
- Brand-locked enterprise contexts that require human-authored marketing assets.
- Already have a finalized screenshot set.

## How to install

```bash
npx skills add ParthJadhav/app-store-screenshots
```

## Fit signals

- Project has iOS / Android binaries headed to a store submission.
- launch-agent or `first-100-users` skill is in play.
- Marketing pre-launch sprint ahead.

## Conflicts and overlaps

- Niche — pairs with `launch-agent` and `first-100-users` (both in this OS) during pre-launch sprints.
- Pairs with `ui-ux-pro-max` (broader UI exploration) and `tegaki` (animated text moments) for matching the in-app design language.

## Notes

Single-file generator (`page.tsx`) — easy to fork and customize themes. Exports work directly with App Store Connect and Google Play Console upload flows. Useful even for B2B web apps if a "marketing one-pager" rendered as device mockups is needed.
