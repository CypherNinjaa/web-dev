// 5.Write code to read comma separated numbers from file and perform the addition.
//   File: numbers.txt
//   Data: 1,2,3,4,5,6,7,8,9,10
//   Result:55
let file = require("fs");


let x = file.readFileSync("numbers.txt");
let str = x.toString();

let arr = str.split(",");

//console.log(arr);

let numbers = arr.map(Number);

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
