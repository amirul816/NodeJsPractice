const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
 
 let result = fs.existsSync('./views/index.html');

 if(result){

  res.end('File exists done2');

 } else{
  res.end('File not exists');
 }


});

server.listen(5050);
console.log("Server is running");
