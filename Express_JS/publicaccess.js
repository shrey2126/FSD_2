var exp=require('express');
var app=exp();

//app.use(exp.static('public'))  //it searches for index.html
app.use(exp.static('public',{index:'home.html'}))
app.listen(5011);
//accessoing different files from a static type folder
