var http = require("http"); //here http is the module for creating http based applns.
var url = require("url");
var file = require("fs");

var server = http.createServer(function (_req, resp) {
    resp.writeHead(200, { "Content-Type": "text/html" });
    
    resp.write(`rsponse from http server`);
    
    resp.end();
});
server.listen(8085, () => {
    console.log("Server Running At 8085");
});
