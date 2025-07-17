// 3.Write file handling async code to copy data from one file(first.txt) to other(second.txt).

var file = require("fs");
console.log("File operation started");
let str1 = file.readFileSync("string1.txt");

file.appendFileSync("string2.txt", str1);
console.log("File operation Ended");
