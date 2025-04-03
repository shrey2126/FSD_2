// Write node js script to handle events as asked below. 
// 1) Check the radius is negative or not. If negative then display message “Radius” must 
// bepositive” else calculate the perimeter of circle. 
// 2) Check side is negative or not. If negative then display message “Side must be 
// positive”else calculate the perimeter of square.

var e=require('events'); 
var ee=new e.EventEmitter();
ee.on('circle',(radius)=>{ 
    if(radius<0){
       console.log("Radius is negative!!")
    }
    else{
        const perimeter_circle=2*3.14*radius;
        console.log("perimeter of Circle: ",perimeter_circle)
    }
}); 
ee.on('square',(side)=>{ 
    if(side<0){
       console.log("Side is negative!!")
    }
    else{
        const perimeter_square=4*side;
        console.log("perimeter of Square: ",perimeter_square)
    }
}); 
ee.emit('circle',4)
ee.emit('square',4)
ee.emit('circle',-1)
ee.emit('square',-1)