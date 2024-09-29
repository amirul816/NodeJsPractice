const http = require('http');
const fs = require('fs');
const { createServer } = require('http');

const server = createServer((req,res) =>{

  if(req.url === '/'){
    fs.writeFile('demo.txt','welcome ton node js ',(err)=>{
      if(err){
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write('File write fail');
         res.end();
      }
      else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('File has beeb written22');
        res.end();
      }
    });
  };

});

server.listen(5050);
console.log('Server is running');