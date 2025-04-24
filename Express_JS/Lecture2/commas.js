var exp=require('express');
var app=exp();
var path=require('path');
var staticpath=path.join(__dirname,'../public');
app.use(exp.static(staticpath,{index:'third.html'}));
app.get("/process_get",(req,res)=>
    {
        res.set("content-type","text/html");
        data=req.query.textarea1  
        d=data.split(',')  ;
        for(x in d)
            {res.write(d[x]+"<br>");
            }
        res.end();      
    });        
app.listen(5015);