//write a node js script that Asynchronously write the data to a file .
// If no error occurs during the writing process ,the script should append additional data in the file.
//Finally it should read the data and display it in console
var fs = require('fs');
fs.writeFile('test1.txt', 'Hello World!', function (err) { 
 if (err){
    console.log(err);
 }
 else{
      fs.appendFile('test1.txt', '\nMy Self Shrey!', function (err) { 
       if (err)
       console.log(err);
       else{
        fs.readFile("test1.txt",function(err,data) 
        { 
            if(err) 
            { 
                return console.error(err); 
                 
            } 
            console.log(data.toString()); 
        } 
        ); 
       }
      });
 }
});


//Module System in Node
var os=require('os')
console.log(os.arch()); 
console.log(os.hostname()); 
console.log(os.platform()); 
console.log(os.tmpdir()); 
console.log(os.freemem()); 

//write e ns script to create a folder name 'AAA' in temp folder .Also create  a file name temp.txt in AAA 0folder .
// Now check available physical 
// memeory of your system is > than 1GB,Then sufficient memory in the file .else write Insufficient memory
var ps=require("fs"); 
var os=require("os"); 
f = os.tmpdir(); 
freemem=os.freemem()/1024/1024/1024; 
//ps.mkdirSync(f+"/AAA"); 
 
if(freemem > 1){ 
ps.writeFileSync(f+"/AAA/temp.txt","Sufficient memory") 
} 
else{ 
    ps.writeFileSync(f+"/AAA/temp.txt"," Insufficient memory") 
} 