// Primitive Datatype

//7 types
// String
// Number
// null
// undefined
// Boolean
// Symbol
// BigInt

//String
const name = 'Kartik'

//Number
const age = 21;

//Null
const outsideTemp = null;

//Undefined
let userEmail;

//Boolearn
const UserLogIn = true


//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//bigNumber
const bigNumber = 1234567890337n


console.log(typeof name);
console.log(typeof age);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof UserLogIn);
console.log(typeof Symbol);
console.log(typeof bigNumber);



//Non-Primitive Datatype (Reference)
// Array
// Object
// Functions

//Array
const heros = ["Shaktiman", "naagraj"]

//Object

let myObj = {
    Name: "Kartik",
    age: 21,
}

//Function

const myFunction = function () {
    console.log("Hello World");
}

//**********Non-Primitive Datatype *******/
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);





