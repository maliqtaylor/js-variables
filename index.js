//Variables 
let name = 'Maliq';// String Literal
let surname = 'Taylor'
let age = 23;// Number Literal
let isValid = true;// Boolean Literal
let salary;// Undefined
let job = null; // Mostly used as an inital value 

/*Variable Rules

a. variable names cannot be a reserved keyword(let, if, while, for, etc..)
b. should be meaningful 
c. cannot start with a number 
d. cannot contain a space or hyphen (-)
e. are typically camelCased
f. are case-sensitive

Variable Rules*/

//------------------------------------------------------------------------------------------------------------------------

//Constants 
const interest = 0.3

/*Constant Rules

a. used if variable value doesn't need to be re-assigned
b. if you try to re-assign value javascript will throw an error

Constant Rules*/

//----------------------------------------------------------------------------------------------------------------------

//Values(two types of values)

/* Primitive Value Types
a. strings(Maliq)
b. numbers(23)
c. booleans(true or false)
d. undefined
e. null
Primitive Value Types*/

/* Refrerence Value Types
a. objects  {}
b. arrays   []
c. functions () =>
Reference Value Types*/

//------------------------------------------------------------------------------------------------------------------------

// Objects
const person = {
    name: 'Maliq',
    age: 23,
    friends: []
};// Object Literal
console.log(person);

// Dot Notation
console.log(person.name);

// Bracket Notation(used for variables)
console.log(person['age']);

//----------------------------------------------------------------------------------------------------------------------

//Arrays
let friends = ['Anna', 'Yanira']// Array Literal

console.log(friends[0])// Arrays have indexes starting at 0 
friends[2] = 'Josh';// The value of array indexes are malleable (easily changed)
console.log(typeof friends);// In JS, arrays are objects
console.log(friends.length);// All arrays have a built in length property (and more)

//------------------------------------------------------------------------------------------------------------------------

//Functions 

// preforming a task (greeting)
function greet(name, lastName) {
    console.log(`Hello ${name} ${lastName}`);
}

greet(name, surname);

//Parameter (name) is given at the time of function decleration 
//Argument (name) is the actual value of parameters when the function is ran

// calculating a value (squaring a number)
function square(number) {
    return number * number
}

console.log(square(2));
