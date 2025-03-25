//Asynchronous File System
// writeFile('filename','data',callback)
// appendFile('filename','data',callback)
// readFile('filename',callback)
var fs = require('fs');
fs.writeFile('test.txt', 'Hello World!', function (err) { 
 if (err)
 console.log(err);
 else
 console.log('Write operation complete.');
});

var ps=require("fs"); 
ps.readFile("test.txt",function(err,data) 
{ 
    if(err) 
    { 
        return console.error(err); 
         
    } 
    console.log(data.toString()); 
    console.error("completed"); 
} 
); 
console.log("Program ended");

//for Async function this "program ended " will be printed first but 
//for Sync function this will be printed normally as in end