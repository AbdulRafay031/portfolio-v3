/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require("playwright");
const assert = require("node:assert/strict");

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const width of [320, 360, 375, 390, 414, 600, 768, 1024, 1440]) {
      const context = await browser.newContext({ viewport: { width, height: 844 } });
      const page = await context.newPage();
      await page.goto(process.env.TEST_BASE_URL || "http://localhost:3000");
      await page.locator(".swarm-overlay[data-mode=running]").waitFor({state:"attached"});
      const hud = await page.locator(".swarm-hud").evaluate(e => getComputedStyle(e).position);
      assert.equal(hud, width <= 600 ? "relative" : "fixed");
      for (const section of ["#showcase","#odoo","#work","#selected","#about","#skills","#lab",".v4-contact"]) {
        await page.locator(section).scrollIntoViewIfNeeded();
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), `horizontal overflow at ${width}px: ${section}`);
      }
      await context.close();
      console.log(`PASS ${width}px`);
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error);process.exit(1); });
