var http = require("http"); //here http is the module for creating http based applns.
var url = require("url");
var server = http.createServer(function (req, resp) {
	resp.writeHead(200, { "Content-Type": "text/html" });

	resp.write("Requested URL:<br>" + req.url); //return the requested url

	var parsedurl = url.parse(req.url, true);
	

	console.log(parsedurl);
	//resp.write(parsedurl.query.toString);
	resp.write(
		`ID:${parsedurl.query.id},Name:${parsedurl.query.name},Email:${parsedurl.query.email}`
	);
	resp.end();
});
server.listen(8085, () => {
	console.log("Server Running At 8085");
});
