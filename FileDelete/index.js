const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.unlink("demonew2.txt", (err) => {
    if (err) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File delete error");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File Delete Success");
      res.end();
    }
  });
});

server.listen(5050);
console.log("Server is running");
