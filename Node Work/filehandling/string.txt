const file = require("fs"); //fs - for file opeartions
let data = "hello, vikash";
file.writeFileSync("string.txt", data);

//read data
let rdata = file.readFileSync("string.txt");
//print buffer
//console.log(rdata)
console.log(rdata.toString());

// again write
newdata = "hello, vikash, how are you";
//file.writeFileSync("string.txt", newdata);
file.appendFileSync("string.txt", newdata);

console.log(newdata.toString());

//append mode
data = "Appending the data in file";
file.appendFileSync("string.txt", data);
console.log(data.toString().toUpperCase());
