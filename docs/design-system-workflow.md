# Design System Workflow

AI-assisted development often fails visually because the agent has no stable design reference.

The design workflow in this repo exists to make UI generation more consistent.

---

## Goals

- Make design direction explicit.
- Give agents visual constraints.
- Avoid generic AI-looking interfaces.
- Use design-system references intentionally.
- Separate inspiration from copying.

---

## Upstream inspirations

- https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- https://github.com/VoltAgent/awesome-design-md
- https://getdesign.md

---

## Recommended usage

For a new SaaS project:

1. Define the product tone.
2. Choose 1 primary design reference.
3. Choose 1 secondary reference.
4. Write the design rules into `rules/design/`.
5. Create or import a `DESIGN.md`-style reference if license permits.
6. Invoke a design/prototype skill before building UI-heavy features.

---

## Example design stack

```txt
Admin dashboard      → Linear / Stripe-inspired
Public landing page  → Vercel / Stripe-inspired
Client portal        → Apple / Airbnb-inspired
Technical docs       → Supabase / Notion-inspired
AI assistant UI      → Claude / Cursor-inspired
```

These are inspirations, not copying instructions.

---

## Anti-patterns

Avoid:

- copying brand assets
- cloning proprietary UI
- mixing too many design systems
- generating UI without typography and spacing rules
- treating UI as a final polish step
- letting every page invent its own component language

---

## Future local mapping

```txt
rules/design/
skills/design-prototype/
docs/design-systems.md
templates/design/DESIGN.md
```
