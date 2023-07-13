// Step 1: Create an input value using the given values
// Step 2: if the value is truthy then the statement is true
// Step 3: print true
// Step 4: If the value is a falsy (null, undefined, 0, "", NaN) then the statement is false
// Step 5: print that value is falsy



let input = "I am a string";

// typeof input

if (input === "I am a string") {
    console.log(true)
} else if (input === false) {
    console.log("The boolean value false is falsy")
} else if (input === null) {
    console.log("The null value is falsy")
} else if (input === undefined) {
    console.log("undefined is falsy")
} else if (input === 0) {
    console.log("The number 0 is falsy (the only falsy number)")
} else if (input === "") {
    console.log("The empty string is falsy (the only falsy string)")
}


// Step 1: Make 2 variables that will each contain a value of a number
// Step 2: Create another variable to sum thhe 2 variables together
// Step 3: Using if/else statements and operators create different statements that compare to the sum value 
// Step 4: If the statement is true then print sum + description


let num1 = 50;
let num2 = 51;
let sum = num1 + num2;


if (sum < -1000) {
    console.log(`${sum} is less than -1000`);
} else if (sum < 0) {
    console.log(`${sum} is a negative number`);
} else if (sum == 0) {
    console.log(`${sum} is equal to 0`);
} else if (sum > 100) {
    console.log(`${sum} is greater than 100`)
} else if (sum > 0) {
    console.log(`${sum} is larger than 0`);
} 

// 1: Create 2 variables (num1 and num2)
// 2: Using if/else statements and operators to determine if num1 and num2 are both greater than 5
// 3: If they are greater than 5 then print true
// 4: If they are less than 5 then print false

num1 = 1000;
num2 = -1000;

if (num1 >=5 && num2 >=5) {
    console.log(true);
} else {
    console.log(false);
}

// 1: Create 4 variables (param1A, param1B, param2A, param2B)
// 2: Use if/else statements to compare param1a and param1b to param2a and param2B
// 3: If 1 of the 2 sets of statements is true, print true
// 4: Else print false

let param1A = "eight";
let param1B = "eight";
let param2A = "ate";
let param2B = "ate";

if ((param1A == param1B) || (param2A == param2B)) {
    console.log(true);
} else {
    console.log(false)
}


