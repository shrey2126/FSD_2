//Question: read the data of a file conatining numerical values separated commas(initially in string),Sort them and print them in the console
var ps=require("fs")
ps.writeFileSync("node/numeric.txt","10,40,80,60,45,89,67,55")
data=ps.readFileSync("node/numeric.txt","UTF-8");
const stringNumbers = data.split(",");

// Convert the string array to a number array
const numbers = stringNumbers.map(Number);

// Sort the number array in ascending order
numbers.sort((a, b) => a - b);

// Print the sorted numbers to the console
console.log(numbers);



//Question: Copying 1 file into another file 
ps.writeFileSync("node/copy1.txt","Hello World!! This is my file 1 data!!");
data=ps.readFileSync("node/copy1.txt","UTF-8");
ps.writeFileSync("node/copy2.txt",data);


