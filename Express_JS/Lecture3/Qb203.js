var exp=require('express');
var app=exp();
var path=require('path');
const bp=require('body-parser');
const url=bp.urlencoded({extended:true});

var staticpath = path.join(__dirname, '../public');
app.use(exp.static(staticpath, { index: 'Qb203.html' }));

app.post('/check',url,(req,res,next)=>{
    res.set("content-type", "text/html");
    const name = req.body.uname;

    if (name=='admin'){
         next();
    }
    else{
        res.write(`<h1 style="color:red">Warning !!</h1>`)
        res.send();
    }
    
})
app.post('/check',(req,res)=>{
    res.write(`<h1>Welcome Adminn</h1>`)
    res.send();
})
app.listen(3002);