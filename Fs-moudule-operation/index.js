const fs = require('fs');

// New file create 8888888888888888888


// fs.writeFile('demo2.txt','This is sample text to test',function(err){ 
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully done');
//     }
// })


// File Append **********************//

// fs.appendFile('demo2.txt','  Hi am Amirul Islam', (err)=>{ 
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Append Successfully done');
//     }
// })


/********Read File****** */

// fs.readFile('demo2.txt','utf-8', (err,data)=>{ 
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })


/********Rename File****** */

// fs.rename('demo2.txt','demo1.txt', (err)=>{ 
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successful');
//     }
// })


/********Delete File****** */

// fs.unlink('student.js', (err)=>{ 
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successful delete');
//     }
// })



/********Exists File****** */

fs.exists('test.txt', (result)=>{ 
    if(result){
        console.log("File found");
    }
    else{
        console.log('File not found');
    }
})




