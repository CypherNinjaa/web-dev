var http = require('http');
var fs = require('fs'); 
var path = require('path');

http.createServer(function (req, res) {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.write("404 Not Found");
            res.end();
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        }
    });
}).listen(8085, () => {
    console.log("Server is running on port 8085");
});