# Portfolio V9 — Mobile-responsive correction

The agent status panel is no longer fixed to the bottom on screens up to 600px.
It sits in normal page flow at the top, with compact controls and progress.
Desktop retains the floating panel and 15 simultaneous cursors.
Mobile schedules up to six concurrent tasks to avoid clutter while retaining the
same scroll-driven assembly functionality. Responsive grids, headings, project
cards, orbit artwork and CV dialog have been constrained to the viewport.

Extract into a fresh folder, preserve your local environment configuration,
then run `npm ci` and `npm run dev` in `Portfolio-Rafay\portfolio-v3`.

Production build and lint pass. Browser runtime QA could not be completed due
to browser connection restrictions. An optional viewport regression script is
included: with the dev server running, use `node verify-mobile.cjs`
(requires Playwright Chromium installed).
