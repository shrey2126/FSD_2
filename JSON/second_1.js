// write a function named first and last that takes an array as an input and return an object with below conditions:
// 1.The first element of an array must be an object's key.
// 2.The last element of an array must be a key's value

const arr=['abc','def','mnc','jkl']

function firstandlast(arr){
    
    firstele=arr[0];
    lastele=arr[arr.length-1]
    obj={
        [firstele]:lastele
    }
    return obj
}

console.log(firstandlast(arr))