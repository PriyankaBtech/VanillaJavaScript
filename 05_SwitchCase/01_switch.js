//Switch Statement - It executes one of the cases among multiple alternatives.

let day = "fri"

switch(day){
  case "sun" : console.log("sunday")
    break
  case "mon" : console.log("monday")
    break
  case "tue" : console.log("tuesday")
    break
  case "wed" : console.log("wednesday")
    break
  case "thus" : console.log("thusday")
    break
  case "fri" : console.log("friday")
    break
  case "sat" : console.log("saturday")
    break
  default: console.log("input is wrong")  
}

// ouput ==> friday


// Corresponding month of the year

const monthNumber = 1

switch (monthNumber) {
  case 1:
    console.log("January")
    break
  case 2:
    console.log("February")
    break
  case 3:
    console.log("March")
    break
  case 4:
    console.log("April")
    break
  case 5:
    console.log("May")
    break
  case 6:
    console.log("June")
    break
  case 7:
    console.log("July")
    break
  case 8:
    console.log("August")  
    break
  case 9:
    console.log("September")  
    break
  case 10:
    console.log("October")  
    break
  case 11:
    console.log("Number")  
    break
  case 12:
    console.log("December")  
    break
  default:
    console.log("Invalid month number")
}
// ouput ==> January