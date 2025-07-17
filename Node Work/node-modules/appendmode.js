var fs = require("fs");
console.log("before read file");
fs.readFile("string.txt", function (err, data) {
	if (err) {
		console.log(err);
		return;
	}
	var data = data.toString();
	console.log(data);
});
var data = "This is some other data to be written";
fs.appendFile("string.txt", data, function (err) {
	console.log("Successfully written");
});
console.log("after read");
