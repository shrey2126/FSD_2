var exp=require('express');
var app=exp();

app.use(exp.static('public'))
app.listen(5011);
//accessoing different files from a static type folder