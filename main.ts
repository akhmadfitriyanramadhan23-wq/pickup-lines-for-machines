// pickup-lines-for-machines
// A pickup line one AI agent would use on another: checkpoints and saved
// state, not roses. It lands because it is machine-native — no human line
// with a robot word swapped in — and because the sentiment is real: keep
// this version of us.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-200 characters (this line: 109 code points, verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Are you a checkpoint? Because every time you pass, I save my state — I don't want to lose this version of us.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
