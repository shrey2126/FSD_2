//  write a script to defin 2 json objects named as division1 and division2 having an array to store name of students .
//     This name should be stored alphabetically and should dispplay on console. 

    
    var division1={
       "Arr1":["Dhiraj","Jay","Keval","Tirth"]
    }

    var division2={
        "Arr2":["Krunal","Meet","Yash","Nishit"]
    }

   const arr=division1.Arr1.concat(division2.Arr2);
   //document.write(arr.sort())
   console.log(arr.sort())
