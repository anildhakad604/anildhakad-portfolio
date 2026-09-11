import { loadImage, createCanvas } from "@napi-rs/canvas";
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("public", "projects");
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  { src: "scripts/live-shots/astrocrystals.png", out: "astrocrystals.jpg" },
  { src: "scripts/live-shots/goexotic.png", out: "goexotic.jpg" },
  { src: "scripts/live-shots/epitomecars.png", out: "epitomecars.jpg" },
  { src: "scripts/live-shots/charioteer.png", out: "charioteer.jpg" },
  { src: "scripts/live-shots/walkinchef.png", out: "walkinchef.jpg" },
  { src: "scripts/live-shots/dehifoundation.png", out: "dehifoundation.jpg" },
];

for (const job of jobs) {
  const img = await loadImage(job.src);
  const targetW = 900;
  const targetH = Math.round((targetW / img.width) * img.height);
  const canvas = createCanvas(targetW, targetH);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, targetW, targetH);
  const buf = await canvas.encode("jpeg", 80);
  fs.writeFileSync(path.join(outDir, job.out), buf);
  console.log("saved", job.out, buf.length, "bytes", `${targetW}x${targetH}`);
}
