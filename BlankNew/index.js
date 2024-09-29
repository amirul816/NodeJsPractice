const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let data = fs.readFileSync("./views/home.html", "utf8");
    res.end(data);
  } 
  else if (req.url === "/about") {
    let data = fs.readFileSync("./views/about.html", "utf8");
    res.end(data);
  }
  else if (req.url === "/contact") {
    let data = fs.readFileSync("./views/contact.html", "utf8");
    res.end(data);
  }
  else if (req.url === "/terms") {
    let data = fs.readFileSync("./views/terms.html", "utf8");
    res.end(data);
  }
   
   
});
server.listen(5050);
console.log("Server is running");
