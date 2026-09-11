import { chromium } from "playwright";
import fs from "node:fs";

const axeSource = fs.readFileSync("node_modules/axe-core/axe.min.js", "utf8");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:4300/", { waitUntil: "networkidle" });

await page.addStyleTag({
  content:
    ".reveal, .reveal-mask, .reveal-line { opacity: 1 !important; clip-path: none !important; animation: none !important; transform: none !important; }",
});
await page.waitForTimeout(200);

await page.addScriptTag({ content: axeSource });
const results = await page.evaluate(async () => {
  return await window.axe.run(document, {
    runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
  });
});

console.log("Violations:", results.violations.length);
for (const v of results.violations) {
  console.log("\n---", v.id, "(" + v.impact + ")", "-", v.help);
  for (const node of v.nodes) {
    console.log("  target:", node.target.join(" "));
    console.log("  summary:", node.failureSummary?.replace(/\n/g, " "));
  }
}

await browser.close();
