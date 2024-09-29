const { resolve } = require('dns');
const http = require('http');

const port = 3000;

const myServer = http.createServer((req,res)=>{
    res.end('Hello Server has been created');
});

myServer.listen(port, ()=>{
    console.log("Server is running at localhost: 3000");
})