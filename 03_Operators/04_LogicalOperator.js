// LOGICAL OPERATOR

// logical operator are used for conditions comparison
// INPUT :- Boolean,  OUTPUT :- Boolean
// Divide two parts :- 1. $$(AND)Operator, 2. ||(OR)Operator

// && : return true if both statement true
// || : return true when anyone condition is true

// Examples
let yearOfBirth = 1997
let age = 2022 - yearOfBirth

if((age >= 13) && (age <= 19)){
  console.log("Teenager")
}
else if((age >= 20) && (age <= 29)){
  console.log("Twenties")
}


// Check Vowels

let character = "a";
//a,e,i,o,u

if((character == "a") || (character == "e") || (character == "i") || (character == "o") ||(character == "u")){
  console.log("Vowel")
}


// Check Consonant

let char = "b";
//a,e,i,o,u

if(!(char == "a") &&! (char == "e") &&! (char == "i") &&! (char == "o") &&! (char == "u")){
  console.log("Consonant")
}


// Check the Greatest Number

let a = 5;
let b = 6;
let c = 7;

if((a > b) && (a > c)){
  console.log("a is greatest")
}
else if((b > c) && (b > a)){
  console.log("b is greatest")
}
else if((c > a) && (c > b)){
  console.log("c is greatest")
}