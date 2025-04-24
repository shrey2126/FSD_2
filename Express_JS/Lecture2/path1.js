var exp=require('express');
var app=exp();
var path=require('path');
const bp=require("body-parser");
const url=bp.urlencoded({extended:true});
var staticpath=path.join(__dirname,'../public');
app.use(exp.static(staticpath,{index:'four.html'}));
app.post("/process_post",url,(req,res)=>
    {
        res.write(`<h1 style="color:red">username:${req.body.firstname}</h1>`)
        res.write(`<h1 style="color:yellow">username:${req.body.lastname}</h1>
            <h1>gender=${req.body.a1}</h1>`);
         res.end();
 }
);
app.listen(5016);
//get-query
//post-body
        
