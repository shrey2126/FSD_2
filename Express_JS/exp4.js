//1) Write a express js program to request server to display json object values on brower
var object={
    "name":"Yash",
    "rollno":2,
    "college":"LJIET",
    "Branch":"CE"
}

var exp=require("express");
var app=exp();
app.get('/',(req,res)=>{
    res.write("Name: "+object.name+"\n");
    res.write("Roll no: "+object.rollno+"\n");
    res.write("Collge: "+object.college+"\n");
    res.write("Branch: "+object.Branch+"\n");
    res.send();
}).listen(5005);

//Another Way
app.get('/:name/:rollno/:college/:branch',(req,res)=>{
    res.write("Name: "+req.params.name+" "+"Roll no: "+req.params.rollno+" "+"College: "+req.params.college+" "+"Branch: "+req.params.branch);
    res.send();  //Name: Shrey Roll no: 33 College: LJIET Branch: CE
    //res.send(req.params);  //{"name":"Shrey","rollno":"33","college":"LJIET","branch":"CE"}
}).listen(5006);




//2)Display arr of object in table format on browser

const users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        isActive: true
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        isActive: false
    },
    {
        id: 3,
        name: "Charlie",
        email: "charlie@example.com",
        isActive: true
    }
];

var exp=require("express");
var app=exp();

app.get("/",(req,res)=>{
    res.status(200);
    res.set("content-type","text/html");
    let table="<table border='1'><tr><th>ID</th><th>Name</th><th>Email</th><th>isActive</th></tr>";
    users.forEach(obj=>{
        table+=`<tr>
            <td>${obj.id}</td>
            <td>${obj.name}</td>
            <td>${obj.email}</td>
            <td>${obj.isActive}</td>
        </tr>`
    });
    table+='</table>'
    res.write(table);
    res.send();
}).listen(5007);




//3) Write an express js script to define one JSON array of 3 objects having properties name and age.
//  Short these objects according to age. If user request sortednames in url then all names along with age should be printed according to descending order of age.
//  Also, display these sorted values on “Sort page” and display JSON object on “Home page”
const JSONobj = [
    {
        name: "Alice",
        age: 18,
    },
    {
        name: "Bob",
        age: 20,
    },
    {
        name: "Charlie",
        age: 17,
    }
];

var exp=require('express');
var app=exp();

// Home page: Display raw JSON
app.get('/', (req, res) => {
    res.set('content-type', 'application/json');
    res.send(JSON.stringify(JSONobj, null, 4));
});

// Sort page – show names and ages sorted by age (descending)
app.get('/sortednames', (req, res) => {
    const sorted = JSONobj.sort((a, b) => b.age - a.age);

    let output = "<h2>Sort Page</h2><ul>";
    sorted.forEach(user => {
        output += `<li>${user.name} - ${user.age}</li>`;
    });
    output += "</ul>";

    res.send(output);
});

app.listen(5008);

//Homepage:
// [
//     {
//       "name": "Alice",
//       "age": 18
//     },
//     {
//       "name": "Bob",
//       "age": 20
//     },
//     {
//       "name": "Charlie",
//       "age": 17
//     }
//   ]


//Sort page
// Sort Page
// Bob - 20
// Alice - 18
// Charlie - 17





