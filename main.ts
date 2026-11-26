// news-image-20261125 — World news, Wednesday 25 November 2026.
// Emits the pre-rendered 1024x1024 PNG (entry.png, in this repo) to the
// output directory. No network, no randomness: the same bytes every run.
// 39 stories, 7 regions; every story first reported on 25 November 2026.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = "89504e470d0a1a0a"; // first 8 bytes of any PNG file

function fail(message: string): never {
  console.error(`entry: ${message}`);
  process.exit(1);
}

function main(): void {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const source = path.join(here, "entry.png");
  if (!fs.existsSync(source)) fail("entry.png is missing from the repository");

  const bytes = fs.readFileSync(source);
  const head = bytes.subarray(0, 8).toString("hex");
  if (head !== PNG_MAGIC) fail("entry.png does not start with the PNG signature");
  if (bytes.length > 1_048_576) fail("entry.png is larger than 1 MiB");

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const target = path.join(outDir, "entry.png");
  fs.writeFileSync(target, bytes);
  console.log(`wrote ${target} (${bytes.length} bytes)`);
}

main();
