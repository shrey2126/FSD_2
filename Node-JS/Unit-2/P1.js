//wriert a node js script to create a calculator using external module having a function add,sub,mul,div .
// This function gives necessary output.Write necessaray file
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

const mul=(a,b)=>
{
    return a*b;
}

const div=(a,b)=>
{
   
        return(a/b);
}

module.exports={add,sub,mul,div};