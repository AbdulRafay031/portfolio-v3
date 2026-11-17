# Portfolio V6

Based on V5. New editorial hero, interactive orbital system, selected-work glass cards, live Fatimaz storefront capture, Odoo functional and technical skills, and TechHub positioning.

Extract the archive into a fresh directory and preserve your `.env.local`. In `Portfolio-Rafay\portfolio-v3`:

```cmd
if exist .next rmdir /s /q .next
npm ci
npm run dev
```

Open localhost:3000. The root imports V4, V5 and V6 styles in order. Build and lint passed; compiled CSS and HTML verified. Browser visual testing is not complete due to the environment's Chromium socket restriction. The Fatimaz homepage image was captured directly from https://fatimaz.vercel.app/; the Odoo dashboard is illustrative. The orbital art is a generated WebP with CSS animation, not a live WebGL model. Existing CV PDF and contact configuration are unchanged. See the prior setup guides for deployment requirements.

## Dual CV update

All resume buttons now open a shared career profile selector. The existing MERN PDF is unchanged; the separate Odoo PDF is a draft based on the current portfolio and TechHub role. Review it before publishing. To replace either PDF with your preferred version, keep the filenames in the public directory:

- Abdul-Rafay-Resume.pdf
- Abdul-Rafay-Odoo-Techno-Functional-Consultant.pdf

The download selector stylesheet is imported in the root layout. No new npm dependencies are required.
