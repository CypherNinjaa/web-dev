// 6.Create a server to serve basic login page content upon user requests.
let http = require("http");
let url = require("url");   
let fs = require("fs");

http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    if (q.pathname === "/login") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./login.html", function (err, data) {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.write("404 Not Found");
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 Not Found");
        res.end();
    }
}).listen(8085, () => {
    console.log("Server is running on port 8085");
})