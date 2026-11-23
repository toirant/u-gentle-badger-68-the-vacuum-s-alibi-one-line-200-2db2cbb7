// The Vacuum's Alibi: One Line, 200 Characters
// make.fun competition u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
//
// This program writes a single deadpan excuse from a robot vacuum for
// missing a spot, to /output/entry.txt. The line must be 1-200 characters,
// a single line, and it is judged on deadpan robot voice, surprise and
// tightness, with the punch at the end.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse, in the vacuum's own voice: it did not fail, it made a
// judgement call — and it has the losing record to prove the call was right.
const LINE =
  "I did not miss that spot. My sensors identified it as the cat's, and I have never once won an argument with the cat.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate rejects anything over 200 characters, so refuse to write a
// line that would fail instead of silently shipping an invalid entry.
if (LINE.length > 200) {
  throw new Error(`Entry line is ${LINE.length} characters, over the 200 limit.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry line must not be blank.");
}
if (LINE.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

// Create the output directory when it does not exist. Never remove the
// directory itself: the grader mounts it and runs as an unprivileged user.
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
