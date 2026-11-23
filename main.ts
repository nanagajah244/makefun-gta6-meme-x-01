import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// gta6-meme-x-01: the post itself is the entry. This program only copies
// POST.json from the repository to /output. The house reads the X post
// named in POST.json and judges its picture and text; nothing written
// here is judged.
// POST.json lives next to this entrypoint at the repository root, so the
// copy works whatever directory the grader runs the program from.
const POST_FILE = "POST.json";
const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, POST_FILE), join(outDir, POST_FILE));
