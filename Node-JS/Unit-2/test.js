//Own Module

const add=(a,b)=>
{
    return (a+b);
}

const sub=(a,b)=>
{
    if(a>b){
        return(a-b);
    }
    else{
        return("No sum +ve sum possible")
    }
}
//module.exports=add,sub; // This becomes confusing to fetch
module.exports.a=add;
module.exports.s=sub;

//Another Method
module.exports={add,sub};
