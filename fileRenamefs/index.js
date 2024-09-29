const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{

    let error = fs.renameSync('demonew.txt', 'demonew2.txt');

    if(error){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write('File rename error');
      res.end();
    }

    else{
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File rename Success");
      res.end();
    }
 

});

server.listen(5050);
console.log('Server is running');