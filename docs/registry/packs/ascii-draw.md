# ASCII Draw

- **URL:** https://github.com/Nokse22/ascii-draw
- **License:** GPL-3.0
- **Status:** active (462 stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #design #tooling

## What it is

A desktop drawing application (Python + GTK4 + libadwaita) for creating diagrams, flowcharts, tables, organizational charts, and ASCII art using only character glyphs. Bundled with `pyfiglet` for figure-text and `emoji` for inline glyphs. Targets Linux desktop primarily but the Python/GTK stack is portable.

Useful for embedding clean ASCII diagrams in code comments, READMEs, technical docs, and CLI help text — without resorting to image attachments.

## When to install

- Authoring technical docs / READMEs that benefit from inline ASCII diagrams.
- Generating flowcharts that need to live in plaintext (terminal apps, plain markdown, email).
- Need an offline GUI alternative to ASCIIFlow or web-based ASCII-diagram tools.
- Linux-first dev environment with GTK4 already installed.

## When NOT to install

- Need polished publication-grade diagrams — use Mermaid, Excalidraw, or `diagram-design` instead.
- Windows-only environment without GTK4 — install path is rougher.
- Diagrams need to render in a browser anyway — use a browser-native tool.

## How to install

```bash
# Linux (preferred)
flatpak install flathub io.github.nokse22.asciidraw
# or via source
git clone https://github.com/Nokse22/ascii-draw
```

## Fit signals

- Project documentation lives in plain markdown / text files.
- Codebase has CLI tools whose `--help` output benefits from ASCII layout diagrams.
- Team prefers GUI canvas over markdown-text diagram syntax for layout work.
- Already on a GNOME / GTK desktop.

## Conflicts and overlaps

- Functional overlap with `tegaki` (drawing) — different output (raster vs ASCII).
- Functional overlap with `diagram-design` (Cathryn Lavery editorial diagrams) — different fidelity (plaintext vs publication-grade).
- Functional overlap with `fireworks-tech-graph` (NL-to-SVG) — different format (ASCII vs SVG).

## Notes

- ⚠️ **GPL-3.0** — fine for personal / internal use; review before bundling output-generation code in a commercial product.
- The output (ASCII art itself) is yours — only the application is GPL.
- 462 stars — small but loyal user base.
- A surprisingly useful authoring tool for technical writing if your docs are plaintext-first.
