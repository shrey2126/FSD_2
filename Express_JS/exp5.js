var exp=require('express');
var app=exp();
app.use(exp.static(__dirname));
//this will by default run the index.html file 

app.listen(5009);

//localhost:5009    gives index.html
//localhost:5009/another.html   gives the desired file


//another way

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
}).listen(5010);

