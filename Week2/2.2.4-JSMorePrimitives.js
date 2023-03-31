// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

let varOne = "One";
let varTwo = 2;
let varThree = true;
let varFour;
let varFive = null;


// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(typeof varOne);
console.log(typeof varTwo);
console.log(typeof varThree);
console.log(typeof varFour);
console.log(typeof varFive);

// create a variable that references a template literal
// inside the template literal, use two of the above variables

const tempLit = `It is ${varThree} that typeof will return ${typeof varFive} for a variable with a null value.`;

// reassign the value of the variable that references "null"

varFive = 5;

// print the value and its type

typeof varFive;

// print a variable that causes a ReferenceError

console.log(nothing);

// alter the previous line to no longer cause a ReferenceError

console.log(varFive);
