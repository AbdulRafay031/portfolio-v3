# Portfolio V5 — Abdul Rafay

This version builds on the CSS-fixed V4 project. The homepage now features the approved violet/cyan metallic system artwork, interactive workflow nodes, a three-card project showcase, and Odoo expertise tabs. TechHub is listed as current employment; no unconfirmed joining date was added. Odoo and AI UI examples are illustrative, and Fatimaz uses the actual storefront capture.

## Windows setup

Stop the old dev server and back up `.env.local`. Extract the archive into a fresh directory and copy the environment file back. From `Portfolio-Rafay\portfolio-v3` run:

```cmd
if exist .next rmdir /s /q .next
npm ci
npm run dev
```

Open http://localhost:3000 and hard-refresh. The root layout imports both `portfolio-v4.css` and `portfolio-v5.css`, so legacy `globals.css` is not required.

Production build and lint passed. The compiled HTML was verified to reference the V5 stylesheet, theme and new content. Existing CV PDF remains unchanged; update the source resume when the exact TechHub joining date is available. See V4-START-HERE.md for deployment and contact environment variables.
