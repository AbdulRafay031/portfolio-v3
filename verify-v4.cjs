/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
  const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const base=process.env.TEST_BASE_URL||'http://127.0.0.1:3015';
  await page.goto(base,{waitUntil:'networkidle'});
  await page.screenshot({path:'test-results/portfolio-v4-home.png'});
  await page.getByRole('button',{name:'02 AI experience'}).click();
  await page.getByText('Intelligence meets fashion.').waitFor();
  await page.getByRole('button',{name:'Watch project film'}).click();
  await page.locator('dialog[open] video').waitFor();
  await page.getByRole('button',{name:'Close video'}).click();
  await page.getByRole('button',{name:'Open command menu'}).click();
  await page.getByRole('textbox',{name:'Search navigation'}).fill('projects');
  await page.locator('dialog[open]').getByRole('link',{name:'Projects'}).click();
  await page.waitForURL('**/projects');
  await page.getByPlaceholder('Search projects…').fill('Fatima');
  await page.getByText('1 projects',{exact:true}).waitFor();
  await page.getByRole('button',{name:'List',exact:true}).click();
  await page.getByRole('link',{name:'Case study'}).click();
  await page.waitForURL('**/projects/fatimaz');
  await page.getByText('Project breakdown').waitFor();
  for (const path of ['/about','/skills','/experience','/contact','/robots.txt','/sitemap.xml']) {
    const res=await page.goto(base+path);
    assert.equal(res.status(),200,path);
  }
  const response=await page.request.post(base+'/api/contact',{data:{name:'a'}});
  assert.equal(response.status(),400);
  const hp=await page.request.post(base+'/api/contact',{data:{name:'Test User',email:'test@example.com',subject:'Test',message:'Test honeypot only',website:'bot'}});
  assert.equal(hp.status(),200);
  await page.goto(base);
  await page.getByRole('button',{name:'Toggle theme'}).click();
  await page.waitForFunction(()=>document.documentElement.classList.contains('light'));
  await page.screenshot({path:'test-results/portfolio-v4-light.png'});
  await page.setViewportSize({width:390,height:844});
  await page.goto(base);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),'mobile overflow');
  await page.getByRole('button',{name:'Toggle Menu'}).click();
  assert.equal(await page.getByRole('button',{name:'Toggle Menu'}).getAttribute('aria-expanded'),'true');
  await page.getByRole('button',{name:'Toggle Menu'}).click();
  await page.screenshot({path:'test-results/portfolio-v4-mobile.png',fullPage:true});
  assert.deepEqual(errors,[]);
  console.log('PASS: homepage, chapter tabs, video modal, command menu, project search/list/case study, routes, contact validation, theme, mobile nav, overflow, browser errors.');
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
