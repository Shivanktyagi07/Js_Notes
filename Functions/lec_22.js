// ************** Function Scoping ************** //

function one() {
  const name = "Shivank";

  function two() {
    const lastName = "Tyagi";
    console.log("Outer Function:", name); // inner function can access outer function variable
    console.log("Inner Function:", lastName); // lastName defined inside two()
  }

  // console.log(lastName)   Error: Cannot access lastName outside its scope
  two();
}

one();

//  Note:
// - Inner functions can access variables of their parent functions (Lexical Scope)
// - But outer functions cannot access variables from their inner functions

// ************** Hoisting ************** //

//  This works because function declarations are hoisted completely
console.log(addone(5)); // Output: 7

function addone(num) {
  return num + 2;
}

//  This gives error: Cannot access 'addTwo' before initialization
console.log(addTwo);

const addTwo = function (num) {
  return num + 3;
};

// Note:
// - Function declarations are hoisted (can call before defining)
// - Function expressions using `const`, `let` are NOT hoisted
// - Variables declared with `const` and `let` are hoisted but stay in **temporal dead zone**
