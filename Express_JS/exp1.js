var exp=require("express");
var app=exp();

app.get('/',function(req,res){
    res.write('Hello World!! Kem cho!!');
    res.send();
    // Dont write any thing in send() id write() is written above send() otherwise it will rise error
});

app.listen(5000,()=>{
    console.log('Server Start!!')
})
