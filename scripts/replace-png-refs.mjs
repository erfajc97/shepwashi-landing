import { readFile, writeFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

const PATTERN = /\/images\/([a-zA-Z0-9_-]+)\.png/g;
const KEEP = new Set(["AIP"]);

const files = [];
for await (const f of glob("src/**/*.{ts,tsx,astro,mjs}")) files.push(f);

let totalReplacements = 0;
for (const file of files) {
  const original = await readFile(file, "utf8");
  let count = 0;
  const updated = original.replace(PATTERN, (m, name) => {
    if (KEEP.has(name)) return m;
    count++;
    return `/images/${name}.webp`;
  });
  if (count > 0) {
    await writeFile(file, updated);
    totalReplacements += count;
    console.log(`${file}: ${count} replaced`);
  }
}
console.log(`\nTotal: ${totalReplacements} replacements.`);
