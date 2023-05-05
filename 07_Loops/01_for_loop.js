// 1. Entry control loop : - For loop and While loop
// 2. Exit control loop : - do while loop


// FOR LOOP
/**
syntax : 

for(initilization 1; condition 2; modify 3)
{
  // code 4(console.log())
}

cycle : 1243-243-243
*/

// Marathon loop

//1 meter jump

for(let jump = 0; jump <= 10; jump ++){
    console.log(jump)
  }
  
//marathon 2 meter jump
  
for(let jump = 0; jump <= 10; jump = jump + 2){
    console.log(jump)
}
  
//reverse marathone 1 to 10
  
for(let jump = 10; jump >= 0; jump --){
    console.log(jump)
}


// Print sum of 5 

let sum = 0
for(let i = 1; i <= 5; i ++){
  sum = sum + i
  console.log(sum)  
}

// Event in loop

for(let i = 1; i <= 5; i ++){
    if(i % 2 == 0){
      console.log(i) 
    }
}


//multiple of loop//factorial

let product = 1;
for(let i = 1; i <= 5; i ++){
  product = product * i
  console.log(product) // 120
}


// Average of loop

let count = 0;
let total = 0;
for(let i = 1; i <= 5; i ++){
  total = total + i
  count ++
  
}
console.log(count/sum) // 0.3333333333333333


// Horizontal loop

let hor = 0;
for(let i = 1; i <= 5; i ++){
  hor = hor + i;
  console.log(hor);
}


// Multiplication table of 5

let number = 5

for(let i = 1; i <= 10; i++){
  console.log(`${number} * ${i} = ${number * i}`)
}
