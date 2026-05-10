import { readdir, stat, unlink } from "node:fs/promises";
import { extname, join } from "node:path";
import sharp from "sharp";

const IMG_DIR = new URL("../public/images/", import.meta.url);
const QUALITY = 82;
const KEEP_PNG_FOR = new Set(["AIP"]); // favicon kept as png

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let savedBytes = 0;
let count = 0;

for await (const file of walk(IMG_DIR.pathname.replace(/^\/(\w):/, "$1:"))) {
  const ext = extname(file).toLowerCase();
  if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") continue;

  const base = file.replace(/\.(png|jpe?g)$/i, "");
  const webpOut = `${base}.webp`;
  const name = base.split(/[\\/]/).pop();
  if (KEEP_PNG_FOR.has(name)) continue;

  const before = (await stat(file)).size;

  await sharp(file)
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(webpOut);

  const after = (await stat(webpOut)).size;
  savedBytes += before - after;
  count++;

  console.log(
    `${name}${ext} ${(before / 1024).toFixed(0)}KB -> .webp ${(after / 1024).toFixed(0)}KB`
  );

  await unlink(file);
}

console.log(
  `\nConverted ${count} files. Saved ${(savedBytes / 1024 / 1024).toFixed(2)} MB.`
);
