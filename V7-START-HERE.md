# Portfolio V7 — 15-agent build animation

This release builds on the V6 dual-CV portfolio and preserves its pages, assets, styling and contact configuration.

- 15 independently animated agent cursors, three assembly stages, 10-second intro.
- 43 targeted elements across the hero, selected systems, Odoo expertise, flagship project, selected work and about sections.
- The intro runs once per browser tab; replay and skip are available. Escape, Tab or normal interactive controls skip it. Reduced-motion preferences are respected.
- No AI API, external animation service or new npm dependency.
- The lower sections assemble in the background if outside the viewport; the animation never forces scrolling.

Extract to a fresh directory, preserve your .env.local and open a terminal in Portfolio-Rafay\portfolio-v3:

```cmd
npm ci
npm run dev
```

Open http://localhost:3000. For a production build run npm run build.

Lint, TypeScript, production build and compiled markup checks passed. Full browser visual verification was blocked by the environment's Chromium socket restriction.
