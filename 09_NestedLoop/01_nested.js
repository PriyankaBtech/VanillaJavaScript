// NESTED LOOP

// pack 50 pastries in 10 box by putting 5 pastries in each box.

//step:-
//1.open the box
//2.put one pastry in each box
//3.repeat above step to place 5 pastry in the box
//4.seal the box
//5.repeat from start till 10 boxes are packed 

for(let i = 1; i <= 10; i ++){
    console.log("packing box number", i)
    for(let j = 1; j <= 5; j ++){
      console.log("placing pastry", j, "in the box ")
    }
    console.log(i, "sealing the box");
}
  


// *
// **
// ***
// ****
// *****


for(let farm = 1; farm <= 5; farm ++){
    // console.log("farm",farm)
    let bag = ""
    for(let seed = 1; seed <= farm; seed ++){
        bag = bag + "*"
  }
  console.log(bag)  
}


//*****
//*****
//*****

for(let i = 1; i <= 3; i ++){
    let bag = ""
    for(let j = 1; j <= 5; j ++){ 
        bag = bag + "*";   
  }
console.log(bag);
}


//11111
//22222
//33333

for(let i = 1; i <= 3; i ++){
    let bag = "";
    for(let j = 1; j <= 5; j ++){
      bag = bag + i;
    }
    console.log(bag)
  }
  
  
//let do in reverse way
  
//33333
//22222
//11111
  
for(let i = 3; i <= 1; i --){
    let bag = "";
    for(let j = 1; j <= 5; j ++){
      bag = bag + i;
    }
    console.log(bag)
  }
  
 
//odd pattern in reverse oder

//99999
//77777
//55555
//33333
//11111


for(i = 9; i >= 1; i = i-2){
    let bag = "";
    for(let j = 1; j <= 5; j ++){
      bag = bag + i;
    }
    console.log(bag)
}  