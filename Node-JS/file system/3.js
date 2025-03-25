//defining an array of objects name and age.
//write this object in a file name Student.txt
//Then read the file and display in console
var obj=[
    {
        name:'Shrey',
        age:19
    },
    {
        name:'Yash',
        age:21
    },
    {
        name:'Meet',
        age:20
    }
]
var ps=require("fs")
let data = "";
obj.forEach((obj) => {
  data += `Student:${obj.name}\n Age:${obj.age}\n`;
});

ps.writeFileSync("students.txt", data);

const fileData = ps.readFileSync("students.txt", "utf8");
console.log(fileData);


//Easy Logic
const student1=[
    {
        name:'Shrey',
        age:19
    },
    {
        name:'Yash',
        age:21
    },
    {
        name:'Meet',
        age:20
    }
]
var ps=require("fs");
ps.writeFileSync("students1.txt", JSON.stringify(student1));
data=ps.readFileSync("students1.txt","UTF-8")
b=JSON.parse(data);
console.log(b)


const fs = require("fs");

const obj1 = [
  {
    name: 'Square',
    side: 4,
  },
  {
    name: 'Circle',
    diameter: 30,
  },
];

let data1 = ""; // Combine data1 and data2 into a single string

data1 += `Shape:${obj1[0].name}\nPerimeter:${4 * obj1[0].side}\n`;
data1 += `Shape:${obj1[1].name}\nPerimeter:${2 * 3.14 * (obj1[1].diameter / 2)}\n`;

fs.writeFileSync("Perimeter.txt", data1); // Write the combined data

const fileData1 = fs.readFileSync("Perimeter.txt", "utf8");
console.log(fileData1);



