// 🔹 CLOSURE IN JAVASCRIPT
// Closure = Function + Lexical Environment (variables from outer scope)
// A closure allows inner functions to access variables from outer functions
// even after the outer function has finished execution.

function outer() {
  let userName = "abc1"; // variable in outer scope

  function inner() {
    console.log(userName); // ✅ inner can access outer variable (closure)
    let user = "abc2"; // local variable of inner()
  }

  function innerthree() {
    // console.log(user);   // ❌ Error: 'user' is only inside inner()
    console.log(userName); // ✅ still accessible due to closure
  }

  innerthree(); // prints "abc1"
  inner(); // prints "abc1"
}
outer();
// console.log(userName); // ❌ Error: not accessible outside outer()

// 🔹 LEXICAL SCOPING
// Lexical Scope = Function’s scope is determined by its physical location in code.
// Inner functions can access variables defined in their outer function.

// Example of Lexical Scope + Closure
function fun() {
  const name = "xyz1"; // outer variable

  function funTwo() {
    console.log(name); // ✅ accessible because of lexical scope
  }

  return funTwo;
  // When returning funTwo, closure is formed → it carries 'name' with it.
}

const res = fun();
res(); // prints "xyz1"
// Here fun() finished execution, but still funTwo remembers 'name' because of closure.
