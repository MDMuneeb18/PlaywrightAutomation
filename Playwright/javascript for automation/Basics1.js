// JavaScript is asynchronous - means everything will not execute in the sequence

console.log("Hello World");

// single line comments

/*  this is 
    multiline
    comments
*/

// to declare variables we use var, let, const - it just says it is variable
//  it doesn't specify the data type
// let and const keywords are introduced from ES6 engine
let a = 4;
console.log(a);

// to know the data type of variable
console.log(typeof(a));

let b = 23.4;
console.log(typeof(b));

let c = "MUNEEB";
console.log(typeof(c));

let d = true;
console.log(d);
console.log(!d);
console.log(typeof(d));

// let c = a+b; - remove comment and see; we see error
c = a+b;
console.log(c);

//we cannot redeclare a variable with let keyword whereas we can redeclare it with var keyword
var e = a+b;
console.log(e);

var e = 34;
console.log(e);

// const is nothing but constant. we cannot reassign also
const f = 10;
// f = 90; // at this point of line terminal shows an error
console.log(f);

// CONDITIONAL STATEMENTS
const flag = true;
if( flag ){
    console.log("The value of flag is ",flag);
}
else{
    console.log("The value of flag is ",flag);
}

let condition = true;
a = 1;
while( condition ){
    console.log("INSIDE LOOP");
    a++;
    if( a>2 ){
        condition = false;
    }
}

do{
    console.log("Executing once");
}while( !flag );

for ( let k = 0; k < 5; k++ ){
    console.log("IN FOR LOOP");
}

// accessing Classes.js in this file
const PersonClass = require("./Classes.js");
//we can create object for that class again
let personObject = new PersonClass("Mohammad", "Siddiq");
console.log(personObject.fullName());