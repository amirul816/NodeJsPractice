
const http = require('http');

const port = 3000;

const myServer = http.createServer((req,res)=>{
    res.writeHead(203,{'Content-Type':'text/html'});
    res.write("<h1>Server created</h1>");
    res.end();
});

myServer.listen(port, ()=>{
    console.log("Server is running at localhost: 3000");
})