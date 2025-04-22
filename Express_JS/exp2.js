var exp=require("express");
var app=exp();

app.get('/',(req,res)=>{
        res.set('content-type','text/html');
        res.write('<h1><i>Hello World!!</i></h1>');
        res.write('<h2><b>This is my second Express Program</b></h2>')
        res.send();
});

app.get('/about',(req,res)=>{
    res.set('content-type','text/html');
    res.send("<i>Welcome to About Page</i>");
})

app.get('*any',(req,res)=>{
    res.status(404);
    res.send('Page not found🙃');
})

app.listen(5001,()=>{
    console.log("Execution Started!!")
})

//send is compulsion for the execution of each get methods!!