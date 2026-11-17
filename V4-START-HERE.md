# Abdul Rafay — Portfolio V4

Redesigned Next.js portfolio with graphite/lime art direction, responsive layouts, cinematic typography, interactive project chapters, project search and grid/list views, keyboard command navigation, a technology explorer and motion playground. Fatimaz uses an actual storefront image and customer showcase video; other project covers are illustrative design treatments.

## Run locally

Use Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` and `npm start`.

## Deployment

Import the project into Vercel using the Next.js preset. Set `NEXT_PUBLIC_SITE_URL` to the deployed HTTPS origin. For email delivery, configure `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`, and `EMAILJS_PRIVATE_KEY` in the server environment. No credentials included. The contact API has a best-effort per-instance rate limit; a distributed limiter is recommended for higher-traffic deployments.

## Verification

Run `npm run lint` and `npm run build`.

Optional browser smoke test: install Chromium with `npx playwright install chromium`, start the server on port 3015 (`npm start -- --port 3015`), then run `node verify-v4.cjs` in a separate terminal. Override the URL with `TEST_BASE_URL` if needed. Screenshots are written to `test-results/`. The test checks navigation, project interactions, theme, mobile overflow, validation and JavaScript errors without sending a real email.

Production build and lint were validated during the redesign. Automated browser execution was blocked by the build workspace's browser/socket restrictions; run the optional smoke test locally before deploying. Email delivery requires real credentials and was not exercised. The CSS motion playground is not a WebGL scene; no external AI chatbot is connected.

## Content maintenance

- `src/data/` — project, experience and skills content.
- `src/app/page.tsx` — homepage sequence.
- `src/components/v4/experience.tsx` — interactive homepage features.
- `src/app/portfolio-v4.css` — shared design tokens, layout, themes and motion. Imported directly by `src/app/layout.tsx`; legacy `globals.css` is no longer used.
- `public/work/` — flagship media.

The previous V3 reference guide is retained for historical reference, not as the V4 setup guide.
