// VARIABLES 

// variable ==> is a memory which store the data

let box1 = "Apple"

var box2 = 25

const box3 = true


console.log(box1) // Apple
console.log(box2) // 25
console.log(box3) // true



// list of all Datatypes and check their typeof

// 1.string
let var1 = "I am Happy"
console.log(typeof(var1))

// 2.Number :-

// i. Integer
let var2 = 10 
console.log(typeof(var2))

// ii. Flaoting value
let var3 = 10.5
console.log(typeof(var3))

// iii. Infinity
let var4 = Number.PositiveInfinity
console.log(typeof(var4))

// iV. Not a Number
let var5 = NaN
console.log(typeof(NaN))

// 3. Bigint
let var6 = 1024n
console.log(typeof(var6))

// 4. Boolean
let var7 = true
console.log(typeof(var7))

// 5. Undefined
let var8 = undefined
console.log(typeof(var8))

// 6. Null 
let var9 = null
console.log(var9)

// 7. Symbol
let var10 = Symbol("Hello")
console.log(typeof(var10))

// 8. Objects :-

// i. Array
let var11 = [1,true,"life"]
console.log(typeof(var11))

// ii. Object
let var12 = { name : "Pinki", age : 15, }
console.log(typeof(var12))

/*******************************************************/

// Primitive datatypes 

let name = "priyanka";
console.log(typeof(name)); //string

let age = 22;
console.log(typeof(age)); //number


let adharCard = true
console.log(typeof(adharCard)); //boolean

let place
console.log(typeof(place))  //undefined

let penCard = null
console.log(penCard) // null

// Abstract Datatypes

let array = [1, true, "life"]
console.log(typeof(array))  // object

let obj={
  1 : "mango",
  2 : "apple",
  3 : "orange",
}
console.log(typeof(obj)) // object


/********************************************************/

// VALID and INVALID variables

// Valid Variables

let fruit = "Mango"
console.log(fruit) // Mango

let totalMango = 50
console.log(totalMango) // 50

// Invalid Variables

let 1fruit = "Apple"
console.log(1fruit) // syntaxError : Invalid or unexpected token

let var = 25 
console.log(var) // syntaxError : Unexpected token 'var'