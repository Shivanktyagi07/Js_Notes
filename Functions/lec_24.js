// ************ Immediately Invoked Function Expression (IIFE) ************ //

//  IIFE = Immediately Invoked Function Expression
// Syntax: (functionDefinition)();
// It runs immediately after it is defined

(function one() {
  console.log("Hello");
})();
// named IIFE (function has a name)
// semicolon is MUST to terminate the IIFE properly

// --------------------------------------------

//  IIFE using arrow function:
(() => {
  console.log("Hey");
})();

//  Why use IIFE?
// 1. To execute function immediately
// 2. To avoid polluting global scope
// 3. To create private variables

// --------------------------------------------

//  IIFE with private variables:
(function () {
  const secret = "This is private";
  console.log(secret);
})();

// console.log(secret);  Error: secret is not defined (private inside IIFE)

// --------------------------------------------

//  IIFE with parameters:

(function (name) {
  console.log(`Hello, ${name}`);
})("Shivank");

//  You can pass arguments while invoking the IIFE

// --------------------------------------------

//  Multiple IIFEs in same file — use semicolons:

(function () {
  console.log("First IIFE");
})();

(function () {
  console.log("Second IIFE");
})();

//  Note: Missing semicolon between them can cause errors
// Always end IIFE with semicolon

// --------------------------------------------

//  IIFE returning values:

const result = (function () {
  const a = 10;
  const b = 20;
  return a + b;
})();

console.log(result); // Output: 30

// --------------------------------------------

//  Arrow function IIFE returning object:

const user = (() => {
  const name = "Shivank";
  const role = "Developer";
  return { name, role };
})();

console.log(user); // Output: { name: "Shivank", role: "Developer" }
