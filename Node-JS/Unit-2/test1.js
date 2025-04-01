var d=require("./test.js");
//console.log(d(10,15))   //module.exports=add
console.log(d.a(10,20));
console.log(d.s(10,20));
console.log(d.s(20,10));
console.log("  ")

//Another Method
var{a,s}=require("./test.js");
console.log(a(10,20));
console.log(s(10,20));
console.log(s(20,10));
console.log("  ")

//Another Method when module.exports={add,sub};
var{add,sub}=require("./test.js");
console.log(add(10,20));
console.log(sub(10,20));
console.log(sub(20,10));
