//Create own module tpo calculate reverse of given number,that module should be used to compyute all numbers between
//between 1 to 100 in which square of reverse and reverse of square is same.This has call of Reverse Twice 
//Also compute the average of element

// Function to reverse a number
function reverseNumber(n) {
     return parseInt(n.toString().split('').reverse().join(''), 10);
 }

module.exports={reverseNumber}