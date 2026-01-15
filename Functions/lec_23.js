// ==============================
// ************ this keyword in Objects ************
// ==============================

const user = {
  userName: "Shivank",
  price: "555",
  welcomeText: function () {
    console.log(`${this.userName}, welcome to the site`);
    console.log(this);
    // 'this' refers to the current object context => here: 'user'
  },
};

user.welcomeText(); // Output: Shivank, welcome to the site

user.userName = "Tyagi";
user.welcomeText(); // Output: Tyagi, welcome to the site

// --------------------------------------------
// GLOBAL 'this' CONTEXT
// --------------------------------------------

// 1. In Browser (non–strict mode):
//    'this' = window
// 2. In Node.js (module scope):
//    'this' = {} (empty object, because Node.js wraps code in a module)
// 3. In Strict Mode (functions):
//    'this' inside standalone functions = undefined

console.log(this); // Output: {} in Node.js, window in browsers

// --------------------------------------------
// WHAT IS STRICT MODE?
// --------------------------------------------

// 'use strict' is a directive (introduced in ES5) that makes JS execution stricter.
// It avoids silent errors and enforces cleaner coding.

("use strict");

function test() {
  // x = 10; // ❌ Error in strict mode (must declare variable with let/const/var)
  let x = 10;
  console.log(x);
}
test();

// Features of strict mode:
// 1. Disallows undeclared variables
// 2. Makes 'this' undefined in standalone functions
// 3. Prevents deleting variables/functions/objects
// 4. Catches duplicate parameter names
// 5. Protects reserved keywords for future use

// --------------------------------------------
// ************ this inside normal function ************
// --------------------------------------------

const one = function () {
  const username = "Shivank";
  console.log(this.username); // undefined (this does not refer to local vars)
  console.log(this); // global object or undefined in strict mode
};

one();

// Note:
// - 'this' inside regular functions does NOT point to the function itself
// - It depends on how the function is called (runtime binding)

// --------------------------------------------
// ************ this inside Arrow Function ************
// --------------------------------------------

const two = () => {
  const username = "Shivank";
  console.log(this.username); // undefined
  console.log(this); // lexical parent scope (here: global/module scope)
};

two();

// Notes:
// - Arrow functions do NOT have their own 'this'
// - They inherit 'this' from their lexical (outer) scope
// - Useful for callbacks, setTimeout, event handlers

// --------------------------------------------
// ************ Function Scoping ************
// --------------------------------------------

function outer() {
  const name = "Shivank";

  function inner() {
    const lastName = "Tyagi";
    console.log("Outer Function:", name); // accessible
    console.log("Inner Function:", lastName); // accessible
  }

  // console.log(lastName); // ❌ Error (outer cannot access inner variables)
  inner();
}
outer();

// Key Points:
// - Inner functions can access variables of outer functions (Lexical Scope).
// - Outer functions cannot access variables from inner functions.
// - var = function-scoped, let/const = block-scoped

// --------------------------------------------
// ************ Hoisting ************
// --------------------------------------------

// Function Declarations are hoisted completely
console.log(addOne(5)); // 7

function addOne(num) {
  return num + 2;
}

// Function Expressions with let/const are NOT hoisted
// console.log(addTwo); // ❌ ReferenceError: Cannot access before initialization

const addTwo = function (num) {
  return num + 3;
};

// Variable hoisting
// console.log(a); // undefined (because 'var' is hoisted but initialized with undefined)
// console.log(b); // ❌ ReferenceError (temporal dead zone)
// console.log(c); // ❌ ReferenceError (temporal dead zone)

var a = 100;
let b = 200;
const c = 300;

// --------------------------------------------
// ************ Arrow Functions Syntax ************
// --------------------------------------------

// 1. Explicit return
const arrow = (num1, num2) => {
  return num1 + num2;
};

// 2. Implicit return (one-liner)
const arrow2 = (num1, num2) => num1 + num2;

// 3. Returning an object
const object = () => ({ user: "Shivank" });
console.log(object()); // { user: "Shivank" }

// Notes:
// - Use () when returning objects to avoid confusion with function body
// - Arrow functions don’t have their own 'this' or 'arguments'
