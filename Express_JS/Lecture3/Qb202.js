var exp = require('express');
var app = exp();
var path = require('path');
const bp=require('body-parser');
const url=bp.urlencoded({extended:true});

// Serve static files
var staticpath = path.join(__dirname, '../public');
app.use(exp.static(staticpath, { index: 'Qb202.html' }));


app.post('/Qb202',url,(req,res)=>{
    res.set("content-type", "text/html");
    const name = req.body.name;
    const pass=req.body.pass;
    const copass=req.body.copass;
    const gender=req.body.a1;

    if(pass==copass){
        res.write("****************Details*************")
        res.write("<h1>Name : " + name + "</h1>");
        res.write("<h1>Password : " + pass + "</h1>");
        res.write("<h1>Confirm Password : " + copass + "</h1>");
        res.write("<h1>Gender : " + gender + "</h1>");
    }
    else{
        res.write(`<h1 style="color:red">Warning Password and Confirm Password not Matched!!</h1>`)
    }
    res.send();
    
}).listen(3000);
