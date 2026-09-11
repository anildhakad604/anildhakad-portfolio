import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";

const outDir = path.resolve("scripts", "live-shots");
fs.mkdirSync(outDir, { recursive: true });

const targets = [
  { name: "astrocrystals", url: "https://theastrocrystals.com/" },
  { name: "goexotic", url: "https://www.goexotic.co/" },
  { name: "epitomecars", url: "http://epitomecars.in/" },
  { name: "charioteer", url: "https://charioteer.io/" },
  { name: "walkinchef", url: "https://thewalkinchef.com/" },
  { name: "dehifoundation", url: "https://www.dehifoundation.org/" },
];

const browser = await chromium.launch();
for (const t of targets) {
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(t.url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(outDir, `${t.name}.png`) });
    console.log("saved", t.name);
    await page.close();
  } catch (err) {
    console.log("FAILED", t.name, String(err).slice(0, 300));
  }
}
await browser.close();
