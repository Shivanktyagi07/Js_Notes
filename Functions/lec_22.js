// ==============================
// ************** FUNCTION SCOPING **************
// ==============================

// Function scoping defines which parts of your code can access certain variables.
// JavaScript uses **Lexical Scoping**, meaning inner functions can access outer function variables,
// but outer functions cannot access inner function variables.

function one() {
  const name = "Shivank"; // defined in outer function

  function two() {
    const lastName = "Tyagi"; // defined in inner function

    console.log("Outer Function:", name); // Accessible: Inner function can access outer variable
    console.log("Inner Function:", lastName); // Accessible: Inner function can access its own variable
  }

  // console.log(lastName); // Error! Outer function cannot access inner variable
  two();
}

one();

// Key Points:
// 1. Inner functions have access to their outer function variables (Lexical Scope).
// 2. Outer functions cannot access inner function variables.
// 3. Variables declared with `var` inside functions are also function-scoped,
//    whereas `let` and `const` are block-scoped.

// Example showing block scope vs function scope:
if (true) {
  var a = 10; // function-scoped
  let b = 20; // block-scoped
  const c = 30; // block-scoped
}
console.log(a); // 10
// console.log(b); // Error
// console.log(c); // Error

// ==============================
// ************** HOISTING **************
// ==============================

// Hoisting is JavaScript's default behavior of moving **declarations** to the top of their scope
// during compilation, before code execution.

// --- Function Declaration Hoisting ---
console.log(addOne(5)); // 7, works even before function is defined

function addOne(num) {
  return num + 2;
}

// --- Function Expression Hoisting ---
console.log(addTwo); // Error: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 3;
};

// --- Variable Hoisting ---
console.log(x); // Error if let/const; undefined if var
let x = 10;
const y = 20;
var z = 30;

// Key Points for Interviews:
// 1. Function declarations are fully hoisted (can be called before definition).
// 2. Function expressions (const/let) are NOT hoisted; they reside in **Temporal Dead Zone (TDZ)**.
// 3. Variables declared with `var` are hoisted and initialized with `undefined`.
// 4. Variables declared with `let` and `const` are hoisted but not initialized (TDZ),
//    accessing them before declaration causes ReferenceError.
// 5. Always remember: Lexical scoping + hoisting behavior is crucial in understanding closures, callbacks, and async behavior.
