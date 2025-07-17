//4.Write a code to read data from file("words.txt") and count the number of words in it.
let file = require("fs");

let x = file.readFileSync("string2.txt");
let str = x.toString();
// \s matches any whitespace character.
// + means one or more.
// g is for global replacement (all occurrences).
let noSpaces = str.replace(/\s+/g, "");
console.log("Word count (without any spaces):", noSpaces.length);
