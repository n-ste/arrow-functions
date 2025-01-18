/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbersVanilla(a, b) {
    // Code Block
    return a + b;
}
let sumVanilla = addTwoNumbersVanilla(3, 5);
console.log(sumVanilla);

// Arrow Function With Parameters
const addTwoNumbersE6 = (a, b) => {
    // Code Block
    return a + b;
}
let sumE6 = addTwoNumbersE6(3, 5);
console.log(sumE6);

// Single Line Arrow Function With Parameters
const addTwoNumbersSingleLine = (a, b) => a + b;

let sumSingleLine = addTwoNumbersSingleLine(5, 3);
console.log(sumSingleLine);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello old friend!');
const sayHello = () => console.log('Hello');
sayHello();

// Returning Multiple Lines
const returnMultiLineString = () => (
    `<p>
        This is a multiline String!
     <p>`
);
     console.log(returnMultiLineString());
