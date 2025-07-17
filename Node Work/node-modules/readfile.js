var fs = require("fs");
console.log("before read file");
fs.readFile("string.txt", function (err, data) {
	var data = data.toString();
    console.log("data from file")
	console.log(data);
	var data = "This is new data";
	fs.writeFile("string.txt", data, function (err) {
		console.log("Successfully written");
	});
});
console.log("after read");
