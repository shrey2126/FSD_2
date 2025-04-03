//Events: 

// const EventEmitter = require("events");
// const ee=new EventEmitter();
// ee.on('start',()=>{
//     console.log('event start')
// })
// ee.emit('start')


// var EventEmitter=require("events");
// var ee=new EventEmitter(); 
// var connectHandler=function () 
// { 
// console.log("connection succesfully"); 
// ee.emit("data_received"); 
// }
// ee.on("connection",connectHandler); 
// ee.on("data_received",function(){console.log("data received succesfully");});
// ee.emit("connection"); 
// console.log("thanks"); 
// ee.listenerCount("connection"); 

//Output:::::
// connection succesfully
// data received succesfully
// thanks


var e=require("events"); 
var ee=new e.EventEmitter(); var 
connectHandler1=function () 
{ 
console.log("connection 1 succesfully"); 
} 
var connectHandler2=function () 
{ 
console.log("connection 2 succesfully"); 
 
} 
ee.on("connection",connectHandler1); 
ee.on("connection",connectHandler2); 
ee.emit("connection"); 
console.log(ee.listenerCount("connection")); 
ee.removeListener("connection",connectHandler1); 
console.log(ee.listenerCount("connection")); 

// Output:
// connection 1 succesfully
// connection 2 succesfully
// 2
// 1
