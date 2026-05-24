// Identifiers & Literals in JavaScript

// ---- Identifiers ----
// Identifiers are names given to variables, functions, etc.
// Rules: letters, digits, _, $ ; cannot start with digit

let firstName = "John";  // valid
let _count = 10;         // valid
let $price = 99.99;      // valid
// let 1stName = "John"; // INVALID - uncomment to see error

console.log(firstName, _count, $price);

// ---- Literals ----
// Fixed values written in code

// String literals
let name = "Alice";
let greeting = 'Hello World';

// Numeric literals
let integer = 42;
let float = 3.14;
let hex = 0xFF;  // 255 in decimal

// Boolean literals
let isActive = true;
let isComplete = false;

// null / undefined literals
let empty = null;
let notAssigned = undefined;

console.log(name, greeting, integer, float, hex, isActive, isComplete, empty, notAssigned);

// Template literal (ES6)
let message = `Hello, ${name}! You have ${_count} new messages.`;
console.log(message);
