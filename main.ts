// The Funniest Out-of-Office
// Writes one line of an out-of-office auto-reply to
// /output/entry.txt (single line, <= 140 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm out of office until Tuesday. I have been emotionally out of office since 2019, but the calendar only just caught up.";

if (line.length > 140) {
  throw new Error(`entry is ${line.length} characters, over the 140 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
