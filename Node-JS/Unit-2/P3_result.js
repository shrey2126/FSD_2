const {reverseNumber} = require('./P3.js');
// Function to check if square of reverse equals reverse of square
function checkReverseSquareProperty() {
    let result = [];
    
    for (let num = 1; num <= 100; num++) {
        let reversedNum = reverseNumber(num);
        let reversedSquare = reverseNumber(num * num);
        
        // Check if square of reversed number equals reversed square
        if (reversedSquare === Math.pow(reversedNum, 2)) {
            result.push(num);
        }
    }
    
    return result;
}

// Calculate the numbers that satisfy the condition
const numbers = checkReverseSquareProperty();

// Compute the average of the numbers
const average = numbers.length > 0 ? numbers.reduce((acc, val) => acc + val, 0) / numbers.length : 0;

// Display the result
console.log("Numbers that satisfy the condition:", numbers);
console.log("Average of these numbers:", average);



