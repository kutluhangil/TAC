// One-off asset pipeline: source PNGs (repo root uploads) -> optimized webp in public/.
// Run: node scripts/convert-images.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve(process.cwd(), "..");
const PUB = path.resolve(process.cwd(), "public/images");

const products = [
  ["Stor_perde..png", "stor-perde"],
  ["Piliceel_perde.png", "plise-perde"],
  ["Ahşap_jaluzi_perde.png", "ahsap-jaluzi"],
  ["Metal_jaluzi_perde.png", "metal-jaluzi"],
  ["Rustik_perde.png", "rustik"],
  ["Zebra_perde.png", "zebra-perde"],
  ["Dekoratif_ray_perde.png", "dekoratif-ray"],
  ["Tül_perde.png", "tul-perde"],
  ["Fon_perde.png", "fon-perde"],
  ["Screen_Ofis_perde.png", "screen-ofis-perdesi"],
];

await mkdir(path.join(PUB, "products"), { recursive: true });
await mkdir(path.join(PUB, "services"), { recursive: true });
await mkdir(path.join(PUB, "brand"), { recursive: true });

for (const [file, slug] of products) {
  const out = path.join(PUB, "products", `${slug}-1.webp`);
  await sharp(path.join(SRC, file))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  console.log("ok", out);
}

await sharp(path.join(SRC, "perde_yıkama_tadilat.png"))
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(path.join(PUB, "services", "yikama-tadilat.webp"));
console.log("ok services/yikama-tadilat.webp");

// Brand logo: keep transparency, trim empty margins so it centers cleanly in the hero.
await sharp(path.join(SRC, "tac-seeklogo.png"))
  .trim()
  .resize({ width: 800, withoutEnlargement: true })
  .png()
  .toFile(path.join(PUB, "brand", "tac-logo.png"));
console.log("ok brand/tac-logo.png");

// App icon: logo centered on a linen square (App Router picks up src/app/icon.png).
const logo = await sharp(path.join(SRC, "tac-seeklogo.png"))
  .trim()
  .resize({ width: 400, height: 400, fit: "inside" })
  .png()
  .toBuffer();
await sharp({
  create: { width: 512, height: 512, channels: 4, background: "#FAF7F2" },
})
  .composite([{ input: logo, gravity: "center" }])
  .png()
  .toFile(path.resolve(process.cwd(), "src/app/icon.png"));
console.log("ok src/app/icon.png");

// favicon.ico: a single 256px PNG wrapped in an ICO container (valid since Vista).
const png256 = await sharp(path.join(SRC, "tac-seeklogo.png"))
  .trim()
  .resize({ width: 232, height: 232, fit: "inside" })
  .png()
  .toBuffer();
const canvas = await sharp({
  create: { width: 256, height: 256, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([{ input: png256, gravity: "center" }])
  .png()
  .toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // one image
const entry = Buffer.alloc(16);
entry.writeUInt8(0, 0); // width 256 -> 0
entry.writeUInt8(0, 1); // height 256 -> 0
entry.writeUInt32LE(canvas.length, 8);
entry.writeUInt32LE(22, 12); // data offset
const { writeFile } = await import("node:fs/promises");
await writeFile(
  path.resolve(process.cwd(), "src/app/favicon.ico"),
  Buffer.concat([header, entry, canvas])
);
console.log("ok src/app/favicon.ico");
