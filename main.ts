// One Word From Grandma — make.fun bounty u-0xkianno-one-word-from-grandma-f04bed16
//
// The whole entry is a single word: the one word Grandma would text
// about AI. Asked about the robot, the chatbot, the smart speaker,
// she gives the same advice she gives about every machine in the
// house — the wisdom of fifty years of appliances:
//
//     unplugit
//
// No spaces (she never bothers), no punctuation, warm and certain:
// whatever the new machine is doing, dear, just unplug it, count to
// ten, and plug it back in. It has never failed her yet.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const WORD = "unplugit";
const ENTRY_PATH = "/output/entry.txt";

// Hold the word to the gate's own measure before it is written:
// UTF-8 text of 1 to 30 characters, not only white space, and one
// single token — a text from Grandma has no spaces in it anyway.
function checkWord(word: string): void {
  const chars = [...word].length;
  if (chars < 1 || chars > 30) {
    throw new Error(`entry must be 1 to 30 characters, got ${chars}`);
  }
  if (word.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be one word, with no white space");
  }
}

function main(): void {
  checkWord(WORD);
  mkdirSync("/output", { recursive: true });
  writeFileSync(ENTRY_PATH, WORD, "utf8");
  // The grader collects the outputs as another user than the one the
  // program runs as, so leave the file readable by everyone.
  chmodSync(ENTRY_PATH, 0o644);
  console.log(WORD);
}

main();
