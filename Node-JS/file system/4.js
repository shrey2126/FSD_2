//write a node js script
//create a class name person by asigning the name and age in form of members
//create 1 function name elder which returns elder person object.
//Details of elder person should be printed in console as well as in file
const fs = require('fs');

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
      }
}

function findElder(people) {
    if (!people || people.length === 0) return null;
  
    let elder = people[0];
    for (const person of people) {
      if (person.age > elder.age) {
        elder = person;
      }
    }
    return elder;
  }

const people = [
    new Person('Shrey', 30),
    new Person('Meet', 25),
    new Person('Yash', 35),
  ];

  const elderPerson = findElder(people);

if (elderPerson) {
  const details = `Elder: ${elderPerson.name} with the age ${elderPerson.age}\n`;
  console.log(details);
  fs.writeFileSync('elder.txt', details);
} else {
  console.log('No elder found.');
}




// Write node.js script to create a class named time and assign members hour, minute and 
// second. Create two objects of time class and add both the time objects so that it should 
// return the value in third time object. The third time object should have hour , minute and 
// second such that if seconds exceed 60 then minute value should be incremented and if
// minute exceed 60 then hour value should be incremented. The value should be printed in
// console as well as in file. 
class time
{
constructor(hour,min,sec)
{
this.hour=hour;
this.min=min;
this.sec=sec;
}
timer(p)
{
var t=new time();
t.hour=this.hour+p.hour;
t.min=this.min+p.min;
t.sec=this.sec+p.sec;
if(t.sec>60)
{
t.sec%=60;
t.min++;
}
if(t.min>60)
{
t.min%=60;
t.hour++;
}
return t;
}
}
var t1= new time(12,30,20);
var t2= new time(1,10,20);
var t3=t1.timer(t2);
console.log(t3);
const jsonstr=JSON.stringify(t3);
var ps=require("fs");
ps.writeFileSync("time.txt",jsonstr)






























