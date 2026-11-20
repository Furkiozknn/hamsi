// Duman testi: sayfa açılıyor mu, konsol hatası var mı, oyun başlıyor mu, bir etkileşim durumu değiştiriyor mu,
// telefon görünümünde taşma var mı. Hiçbir bağımlılık depoya eklenmez.
//
// Kullanım:  node test/duman.mjs [klasör]        (klasör verilmezse deponun kökü)
// Gerekli:   `playwright-core` (depo dışında kurulu olabilir: NODE_PATH ya da PW_MODULE=<yol>) ve bir Chromium:
//            CHROMIUM=<chrome.exe yolu> (verilmezse Playwright'ın kendi tarayıcısı).
// Çıktı: "ok" / "FAIL" satırları, en sonda RESULT; hata varsa çıkış kodu 1.
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, normalize, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(process.argv[2] || join(here, '..'));
const req = createRequire(process.env.PW_MODULE ? pathToFileURL(join(process.env.PW_MODULE, 'x.js')) : import.meta.url);
const { chromium } = req('playwright-core');
const IGNORED = /gc\.zgo\.at|goatcounter|fonts\.googleapis\.com|fonts\.gstatic\.com/;
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.mp4': 'video/mp4' };
let failed = false;
const ok = (m) => console.log('ok   ' + m);
const fail = (m) => { failed = true; console.log('FAIL ' + m); };
const check = (c, m) => (c ? ok(m) : fail(m));

const srv = createServer((rq, rs) => {
  let p = normalize(decodeURIComponent(new URL(rq.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
  let f = join(root, p || 'index.html');
  if (!f.startsWith(root)) { rs.writeHead(403).end(); return; }
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  if (!existsSync(f)) { rs.writeHead(404, { 'content-type': 'text/plain' }).end('404'); return; }
  rs.writeHead(200, { 'content-type': MIME[extname(f)] || 'application/octet-stream' }).end(readFileSync(f));
});
await new Promise((r) => srv.listen(0, '127.0.0.1', r));
const base = 'http://127.0.0.1:' + srv.address().port + '/';
console.log('hedef: ' + root);

const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM || undefined, args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
try {
  for (const [name, vp, mobile] of [['masaustu 1366x768', { width: 1366, height: 768 }, false], ['telefon 390x844', { width: 390, height: 844 }, true]]) {
    const ctx = await browser.newContext({ viewport: vp, isMobile: mobile, hasTouch: mobile });
    await ctx.route(IGNORED, (r) => r.fulfill({ status: 200, body: '' }));
    const page = await ctx.newPage();
    const errs = [];
    page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
    page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    page.on('requestfailed', (r) => { if (!IGNORED.test(r.url())) errs.push('requestfailed: ' + r.url()); });
    page.on('response', (r) => { if (r.status() >= 400 && !IGNORED.test(r.url())) errs.push(r.status() + ' ' + r.url()); });
    await page.goto(base + '?noassets', { waitUntil: 'load' });
    await page.waitForFunction(() => { const b = document.getElementById('tPlay'); return b && !b.disabled; }, null, { timeout: 90000 });
    check(true, `[${name}] sayfa açıldı, "Oyna" düğmesi etkin`);
    const title = await page.title();
    check(/Hamsi/.test(title), `[${name}] başlık: ${title}`);
    // taşma: yatay kaydırma ve görünüm dışına taşan başlık ekranı düğmeleri
    const over = await page.evaluate(() => {
      const w = innerWidth, h = innerHeight, bad = [];
      for (const e of document.querySelectorAll('#title button, #title a')) { const r = e.getBoundingClientRect(); if (r.width && (r.left < -1 || r.right > w + 1)) bad.push(e.id || e.textContent); }
      return { h: document.documentElement.scrollWidth > w + 1, bad };
    });
    check(!over.h && !over.bad.length, `[${name}] başlık ekranında yatay taşma yok ${over.bad.join(',')}`);
    // Yenilikler penceresi (yalnız yeni sürümde var)
    if (await page.$('#tNews')) {
      await page.click('#tNews');
      const shown = await page.evaluate(() => document.getElementById('news').classList.contains('show') && document.querySelectorAll('#newsList li').length >= 3);
      check(shown, `[${name}] Yenilikler penceresi açılıyor ve maddeleri var`);
      const ov2 = await page.evaluate(() => { const r = document.querySelector('#news .card').getBoundingClientRect(); return r.left >= -1 && r.right <= innerWidth + 1; });
      check(ov2, `[${name}] Yenilikler kartı ekrana sığıyor`);
      await page.keyboard.press('Escape');
      check(await page.evaluate(() => !document.getElementById('news').classList.contains('show')), `[${name}] Esc ile kapanıyor`);
    } else console.log(`n/a  [${name}] Yenilikler penceresi bu sürümde yok`);
    // oyun başlıyor, bir etkileşim durumu değiştiriyor
    await page.click('#tPlay');
    await page.waitForFunction(() => window.hamsi && ['harbor', 'dock', 'play'].includes(window.hamsi.mode), null, { timeout: 30000 });
    const m0 = await page.evaluate(() => ({ mode: window.hamsi.mode, day: window.hamsi.day }));
    ok(`[${name}] oyun başladı (mod: ${m0.mode}, gün ${m0.day})`);
    const sail = await page.$('#hSail');
    if (sail && await sail.isVisible()) {
      await sail.click();
      await page.waitForFunction(() => window.hamsi.mode === 'play', null, { timeout: 15000 });
      check(true, `[${name}] "Denize çık" ile mod play oldu`);
    }
    await page.keyboard.press('KeyP');
    check(await page.evaluate(() => window.hamsi.paused === true || document.getElementById('pause').classList.contains('show')), `[${name}] P ile duraklatma çalışıyor`);
    await page.keyboard.press('KeyP');
    await page.waitForTimeout(800);
    check(errs.length === 0, `[${name}] konsol/sayfa/ağ hatası yok` + (errs.length ? ': ' + errs.slice(0, 3).join(' | ') : ''));
    await ctx.close();
  }
  // bot sezonu: kısa simülasyon, durum ilerliyor
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.route(IGNORED, (r) => r.fulfill({ status: 200, body: '' }));
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(base + '?auto&noassets&debug', { waitUntil: 'load' });
  await page.waitForFunction(() => window.hamsi && typeof window.hamsiSim === 'function' && window.hamsi.mode !== 'menu', null, { timeout: 90000 });
  const r = await page.evaluate(() => { const G = window.hamsi; const d0 = G.day; for (let i = 0; i < 300 && G.mode !== 'end'; i++) window.hamsiSim(30); return { d0, day: G.day, mode: G.mode, worth: G.result && Math.round(G.result.worth), reis: G.result && G.result.reis, errors: G.errors.length }; });
  check(r.day > r.d0 || r.mode === 'end', `bot sezonu ilerledi: gün ${r.d0} -> ${r.day}, mod ${r.mode}, net değer ${r.worth}`);
  check(r.errors === 0 && errs.length === 0, 'bot sezonunda oyun içi hata yok');
  await ctx.close();
} catch (e) { fail('beklenmeyen: ' + (e && e.message)); }
await browser.close();
srv.close();
console.log(failed ? 'RESULT FAIL' : 'RESULT OK');
process.exit(failed ? 1 : 0);
