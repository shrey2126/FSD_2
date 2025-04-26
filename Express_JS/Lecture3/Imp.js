var exp=require('express');
var app=exp();
var path=require('path');
const bp=require('body-parser');
const url=bp.urlencoded({extended:true});

var staticpath = path.join(__dirname, '../public');
app.use(exp.static(staticpath, { index: 'Imp.html' }));

app.get('/login',url,(req,res,next)=>{
    res.set("content-type", "text/html");                                                          
    const name = req.query.name;
    const email=req.query.email;
    res.write("<center><h1>Welcome " + name + "</h1>");
    res.write("<center><h2>Your email id is " + email + "</h2>");
    next();
})

app.get('/login',url,(req,res,next)=>{
    if(req.query.newsletter  == "on"){
        res.write("<h3>Thank you for your subscription</h3><a href='/'>Logout</a>");
    }else{
        res.write("<h3>You can subcribe to get daily updates</h3><a href='/subscribe'>Subscribe</a></center>");
    }
   next();
})

app.get("/login",(req,res)=>{res.send();});
app.get("/subscribe",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<h3>Thank you for your subcsription</h3></center><a href='/'>Logout</a>");
    res.send();
});

app.listen(3003);