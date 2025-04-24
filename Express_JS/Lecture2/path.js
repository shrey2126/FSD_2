var exp=require('express')
var app=exp();
var path=require('path');
var staticpath=path.join(__dirname,'../public');
app.use(exp.static(staticpath));
app.listen(5012);

