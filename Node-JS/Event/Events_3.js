// Write a nodeJS script to fire an event named calculate which calculates the total
// marks of 5 subjects about of 25 marks and displays the total marks on console as
// an output.The calculate event fires another event name percentage which takes total
// marks as argument and percentage should get displayed in console.

var e=require('events'); 
var ee=new e.EventEmitter();
marks=[24,25,15,20,18]
ee.on('calculate',(marks)=>{ 
   var sum=0;
  for(var i=0;i<marks.length;i++){
      sum=sum+marks[i];
  }
  console.log('Total Marks: ',sum)
  ee.emit('percentage',sum)
}); 
ee.on('percentage',(sum)=>{
    const percentage= (sum/125)*100;
    console.log("percentage:",percentage)
})
ee.emit('calculate',marks)