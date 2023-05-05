// if Else if Statement

//my mother told me to get any one the things from the market

let rice = true;
let wheat = true;
let apple = false;

if(rice){
  console.log("rice available")
}
else if(wheat){
  console.log("wheat available")
}
else if(apple){
  console.log("apple available")
}
else{
  console.log("nothing available")
}
// output : rice available


// Another Example

let trafficLight = "Orange"

if (trafficLight == "Red"){
  console.log("Vehicles must stop")
}
else if (trafficLight == "Orange"){
  console.log("Vechicles must wait")
}
else if (trafficLight == "Green"){
  console.log("Vechicles may proceed")
}
else {
  console.log("Invalid Traffic Light")
}

// output : Vechicles must wait


// Another Example
let num = 5

if((num % 5 == 0) && (num % 3 == 0)){
  console.log("FizzBuzz")
}
else if(num % 3 == 0) {
  console.log("Fizz")
}
else if(num % 5 == 0){
  console.log("Buzz")
}
else{
  console.log("Invalid Input")
}

// output : Buzz