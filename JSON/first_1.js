var student={
    "firstname":"xyz",
    "lastname":"MNC",
    "ID":"stoo1"
}
console.log(student.firstname)
console.log(student)


// Parse Method
let obj='{"var1":"LJ","var2":"University"}'
var obj1=JSON.parse(obj)
console.log(obj1.var1)
console.log(obj1.var2)

//stringify() Method
let o1='{"var1":"LJ","var2":"University"}'
var obj1=JSON.stringify(o1)
console.log(obj1)

