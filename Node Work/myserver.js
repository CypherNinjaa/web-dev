var http = require("http"); //here http is the module for creating http based applns.
var url = require("url");
var file = require("fs");
var server = http.createServer(function (req, resp) {
	resp.writeHead(200, { "Content-Type": "text/html" });
	
	var parsedurl = url.parse(req.url, true);
	var filepath = "./public" + parsedurl.pathname;
	console.log(filepath)
	file.readFile(filepath, function (err, data) {
		if (err) {
			//resp.writeHead(404, { "Content-Type": "text/html" });
			resp.write("<h1>404 Not Found</h1>");
		} else {
			//resp.writeHead(200, { "Content-Type": "text/html" });
			resp.write(data.toString());
		}
		resp.end();
	});
});
server.listen(8085, () => {
	console.log("Server Running At 8085");
});

