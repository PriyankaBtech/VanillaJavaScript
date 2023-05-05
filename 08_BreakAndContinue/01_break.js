// Break
//train miss when the 3rd guest visit to station

for(let guest = 1; guest <= 10; guest ++){
    console.log(guest)
    if(guest == 3){ //nobody can go
      break;
    }
  } // 1 2 3


// We have 100 students, but when we find the data of 10 students, we need to stop taking the data

for ( let i = 1; i <= 100; i ++){
  //console.log(i) // upto 10
  if (i == 10){
    break
  }
  // console.log(i) // upto 9
}



 

  
//example
for(let count = 0; true; count--){
   console.log("hello")
  count ++;
  ++ count;
  if(count > 5){
    break;
  }
}