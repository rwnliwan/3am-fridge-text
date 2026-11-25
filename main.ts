// The 3AM Fridge Text — entrypoint.
// Writes the one line a smart fridge sends its owner at 3am
// to /output/entry.txt, exactly as the sealed gate expects:
// UTF-8 text, 1 to 140 characters, a single line.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "3am. I quit. Freezer's colder anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${TEXT.length} chars to /output/entry.txt`);
