import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";

const SRC =
  "C:/Users/mrtva/OneDrive/Bureaublad/Prive/Personal_assistant/projects/megathon-outreach/deck/pages";
const OUT =
  "C:/Users/mrtva/OneDrive/Bureaublad/Prive/Personal_assistant/projects/megathon-site/public/deck";

if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });

const widths = [1920, 1280, 768];
const slides = Array.from({ length: 10 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);

for (const n of slides) {
  const src = join(SRC, `slide_${n}.png`);
  for (const w of widths) {
    const dest = join(OUT, `slide-${n}-${w}.webp`);
    const info = await sharp(src)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(dest);
    console.log(`slide ${n} @ ${w}px -> ${(info.size / 1024).toFixed(1)} KB`);
  }
  // small thumbnail for blur placeholder
  const tiny = await sharp(src)
    .resize({ width: 24 })
    .webp({ quality: 30 })
    .toBuffer();
  console.log(`slide ${n} thumb base64 length: ${tiny.toString("base64").length}`);
}

console.log("done");
