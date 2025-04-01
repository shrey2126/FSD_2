//write a node js script to find all prime number from 1 yo 50 having the function check_try .
// This functiomn return the boolean value on the basis of number is prime or not

const check_prime=(num)=>{
    if(num<=1){
        return false
    }
    for(i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

module.exports=check_prime;