const a={
    'DataStructures':[
        {
            Name:'tree',
            Course:'intro',
            content:['1','B','C']
        },
        {
            Name:'tree1',
            Course:'intro1',
            content:['1','B','C','D']
        }
    ],
    'XYZ':{
        Name:'Graphics',
        Topics:['BFS','CDF','Sorting']
    }
}
for(x in a.DataStructures){
    for(y in a.DataStructures[x]){
       console.log(a.DataStructures[x][y]+"</br>")
    }
}

//write a json object which contains array of 3 objects ,each object contained 2 properities  name and age.
// now sort an array values by age in descending order.Print name and age in terminal as per the sorted age
const people=[
{
        "name": "Meet",
        "age": 25
    },
    {
        "name": "Yash",
        "age": 30
    },
    {
        "name": "Shrey",
        "age": 22
    }
];
people.sort((a, b) => b.age - a.age);
people.forEach(person => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
});