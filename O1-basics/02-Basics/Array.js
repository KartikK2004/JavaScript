//array is the datastructure its used to stores the collection of elements

//This elements can de various datatypes like 

["Number", "String", "Boolean", "object", "function"]


const myarr = [0, 1, 2, 3, 4, 5, true, "kartik"]

const myheros = ["shaktiman", "Superman"]

const myArr = new Array(1, 2, 3, 4)

console.log(myarr[2]);

//ARRAY METHODS*****************

myarr.push(6)//Its add the element to the end of an array
myarr.push(7)//Its add the element to the end of an array
myarr.pop()//Its remove the last element
console.log(myarr);

const Newarray = [1, 2, 3, 4, 5, 6, 7]
Newarray.unshift(0)//Its add the element to the starting point
Newarray.shift()//Its remove the Starting element

console.log(Newarray.includes(2));// Includes Method are used to check element is present or not

const Joinarray = Newarray.join()//Join method is used to Joins all elements of an array into string
console.log(typeof Joinarray);
console.log(Newarray);

//Slice and splice

console.log("A", Newarray);

// const myn1 = Newarray.slice(1, 4)
console.log(myn1);
console.log("B", Newarray);

// const myn2 = Newarray.splice(1, 4)
console.log("c", Newarray);
console.log(myn2);

let fruit = ["Apple", "Mango", "Orange", "kiwi", "Banana", "Lemon"]
console.log(fruit.slice(2, 4));//It extract the section of an array And returns new array
console.log(fruit.splice(0, 3));//The Splice method adds or removes array elements





























