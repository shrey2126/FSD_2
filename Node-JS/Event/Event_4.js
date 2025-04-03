// Write a Node.js script to create a class student by assigning name & result in form
// of members. Create one member function named as topper of X which returns
// topper student object. Details of this topper student should be printed on file as
// well as on console.

const fs = require('fs');

class Student {
  constructor(name, result) {
    this.name = name;
    this.result = result;
  }
}

function findTopper(students) {
  if (!students || students.length === 0) return null;

  let topper = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].result > topper.result) {
      topper = students[i];
    }
  }
  return topper;
}

const students = [new Student("A", 90), new Student("B", 95), new Student("C", 85)];
const top = findTopper(students);

if (top) {
  console.log("Topper:", top.name, top.result);
  fs.writeFileSync("topper.txt", `Topper: ${top.name}, ${top.result}`);
} else {
    console.log("No students provided.");
}