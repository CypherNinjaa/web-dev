var http = require("http");
var server = http.createServer(function (req, resp) {
	// Send the HTTP header// HTTP Status: 200 : OK// Content Type: text/plain
	resp.writeHead(200, { "Content-Type": "text/plain" });
	// Send the response body as "Hello World"
	resp.write("Hello World");
	resp.end();
});
server.listen(8085, function () {
	console.log("Server is running at 8085");
});