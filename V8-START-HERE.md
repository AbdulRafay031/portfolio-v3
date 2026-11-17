# Portfolio V8 — Scroll-driven agent assembly

Replaces the V7 timer-based intro with a viewport-driven 15-cursor scheduler.
Static headings and selected text are typed character by character, preserving
their original markup and restoring the original text when finished or skipped.
Other tasks visibly reveal images, cards, buttons, charts and workflow elements.
The cursor pool remains available as the visitor scrolls through the homepage.
Already-built elements remain complete; off-screen pending tasks wait for the
visitor to reach them. No forced scrolling or global ten-second cutoff.

The existing design, dual PDFs, content and contact settings are preserved.
Skip build and Replay build controls are available. Reduced motion is respected.

Extract the archive, preserve your local .env.local, and run in
`Portfolio-Rafay\portfolio-v3`:

```cmd
npm ci
npm run dev
```

Production build and lint passed. Browser runtime verification was limited by
the execution environment's local browser/network restrictions.
