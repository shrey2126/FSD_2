var exp=require('express');
var app=exp();
var path=require('path');
var staticpath=path.join(__dirname,'../public');
app.use(exp.static(staticpath,{index:'second.html'}));
app.get("/process_get",(req,res)=>
    {
           const fname=req.query.firstname;
           const lname=req.query.lastname;
           res.set('content-type','text/html')
           res.write(`<h1 style="color:red">${fname}</h1>`)  
           res.write(`<h1 style="color:red">${lname}</h1>`)  
           res.send()  
           
        //To print the form data in JSON object form
        //    response = {  
        //     first_name:req.query.firstname,  
        //     last_name:req.query.lastname  
        // };  
        //    res.send(response);  
    });        
app.listen(5014);
    
