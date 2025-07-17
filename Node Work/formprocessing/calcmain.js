var http = require("http"); //here http is the module for creating http based applns.
var url = require("url");
var file = require("fs");

var server = http.createServer(function (req, resp) {
	if (req.url == "/mycalc") {
		//serve calc.html
		file.readFile("calc.html", function (err, data) {
			if (err) {
				resp.write("<h1>404 Not Found</h1>");
				resp.end();
				return;
			}
			resp.writeHead(200, { "Content-Type": "text/html" });
			resp.write(data.toString());
			resp.end();
		});
	} else if (req.url.startsWith("/calculate")) {
		//handle calculation
		var parsedurl = url.parse(req.url, true).query;
		var num1 = parseInt(parsedurl.num1);
		var num2 = parseInt(parsedurl.num2);

		var operation = parsedurl.operation;
		var result;

		switch (operation) {
			case "+":
				result = num1 + num2;
				break;
			case "-":
				result = num1 - num2;
				break;
			case "*":
				result = num1 * num2;
				break;
			case "/":
				result = num1 / num2;
				break;
			default:
				result = "Invalid Operation";
		}

		resp.writeHead(200, { "Content-Type": "text/html" });
		resp.write(`<h1>Calculation Result</h1>`);
		resp.write(`<p>Result = ${result}</p>`);
		resp.end();
	}
	//to jandle post method
	else if (req.url == "/calcpost") {
		req.on("data", function (chunk) {
			console.log(chunk.toString());
var parsedurl = url.parse(req.url, true).query;
		var num1 = parseInt(parsedurl.num1);
		var num2 = parseInt(parsedurl.num2);

		var operation = parsedurl.operation;
		var result;

		switch (operation) {
			case "+":
				result = num1 + num2;
				break;
			case "-":
				result = num1 - num2;
				break;
			case "*":
				result = num1 * num2;
				break;
			case "/":
				result = num1 / num2;
				break;
			default:
				result = "Invalid Operation";
		}

		resp.writeHead(200, { "Content-Type": "text/html" });
		resp.write(`<h1>Calculation Result</h1>`);
		resp.write(`<p>Result = ${result}</p>`);


			resp.end();
		});

	} else {
		resp.write("<h1>404 Not Found</h1>");
		resp.end();
	}
});
server.listen(8085, () => {
	console.log("Server Running At 8085");
});
