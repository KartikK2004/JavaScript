const name = "Kartik"
const repoCount = 50

// console.log(name + repoCount + "Thanks");
// console.log(`Hello my ${name} is And MY repocount is ${repoCount}`);

const gameName = new String(`Kartik`)
// console.log(gameName);
// console.log(gameName[0]);  Output:-K
// console.log(gameName.__proto__);Output:-{} Object

//***************************Strings Methods ***********************/

// console.log(gameName.length);Output:-6
// console.log(gameName.toUpperCase());Output:-KARTIK
// console.log(gameName.charAt(2));Output:-r
// console.log(gameName.charCodeAt('t')); //Its gives the unicode value
// console.log(gameName.indexOf('k'));Output:- 0
// console.log(gameName.at(-6));           //Its same as charAt but its accept negative index 
// console.log(gameName.includes(Kar));    //Its gives the Boolean value 


const Myname = "  Suryakant  "
// console.log(Myname.slice(0, 5));        //O is the starting value and 5 is the ending value
// console.log(Myname.trim());            //Its Remove the Starting space and Ending space 


const url = "https://www.youtube.com/watch?v"
// console.log(url.replace('?', '-'));
//Its used to replace the value from your string And Returns New String

const studentname = "Kartik-Suryakant-Kadam"
console.log(studentname.split('-')); //This method will help to split the value using Separators
//Return type is Array





















