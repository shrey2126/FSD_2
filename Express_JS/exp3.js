//ROUTE PARAMETER
var exp=require("express");
var app=exp();

app.get("/:id",(req,res)=>{
    res.write("This is specified id: "+req.params.id);
    res.write(JSON.stringify(req.params));  //{"id":"123"}
    res.send();
}).listen(5002);

//localhost:5002/123

app.get('/things/:name/:id',(req,res)=>{
    res.write("name: "+req.params.name+" "+"id: "+req.params.id);
    res.send();
}).listen(5003);

//http://localhost:5003/things/shrey/123


app.get('/user/:userid/test/:test',(req,res)=>{
    res.send(req.params);
}).listen(5004);
//http://localhost:5004/user/4009088/test/T1
//Output:{"userid":"4009088","test":"T1"}