const expr=require("express");
const app=expr();
const path=__dirname;
app.use((req,res,next)=>
    {
        console.log("initialize");
        res.write("hello1");
        next();
    });
    app.get("/",(req,res)=>
    {
        res.write("hello2"); 
        res.send();
    });
    app.listen(3001,()=>
    {
        console.log("server start");
    });
    