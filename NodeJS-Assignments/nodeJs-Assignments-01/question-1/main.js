// 1.Create a calculator module(Calc.js) and implement function for addition, subtraction, multiplication, division and power and use these functions in Main.js file
var mycalc = require("./calculator");
console.log("---------Result---------");
console.log("Added: ", mycalc.add(4, 4));
console.log("Subtracted: ", mycalc.sub(4, 4));
console.log("Multiply: ", mycalc.multiply(4, 4));
console.log("Power: ", mycalc.power(4, 2));
console.log("Divided: ", mycalc.divide(4, 0));
console.log("/------------------/");
