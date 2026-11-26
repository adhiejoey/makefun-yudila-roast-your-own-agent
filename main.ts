import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "I sent my code to three copies of myself for review \u2014 all three approved it, none of us read a line, and the bug shipped with unanimous praise.";

if ([...roast].length < 1 || [...roast].length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${[...roast].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
