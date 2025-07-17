import http from "http"; //here http is the module for creating http based applns.
import file from "fs";
const server = http.createServer(function (_req, resp) {
	resp.writeHead(200, { "Content-Type": "text/html" });
    
	file.readFile("Form.html", function (err, data) {
			if (err) {
				//resp.writeHead(404, { "Content-Type": "text/html" });
				resp.write("some error occured");
				console.log(err)
				resp.end();
				return;
			}
			resp.write(data.toString());
			resp.end();
		});
	
});
server.listen(8085, () => {
	console.log("Server Running At 8085");
});
