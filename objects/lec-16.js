/***********************************************
 * JAVASCRIPT OBJECTS
 * ---------------------------------------------
 * Ways to create objects, access properties,
 * freeze objects, and add methods.
 ***********************************************/

// -------------------------
// Object Declaration
// -------------------------
// 1. Using object literal {}
// 2. Using new Object()
// 3. Using constructor functions / classes
// Here: Object literal approach

const myList = Symbol("list1");
// Symbol => unique, immutable identifier
// INTERVIEW TIP: Symbol as object key is often asked

const User = {
  name: "Shivank",
  email: "tygai@gmail.com",
  isLoggedIn: true,
  [myList]: "myList1",
  // Symbol used as key in object
  // Note: Symbol key is not enumerable in for...in loop
  location: "Meerut",
  age: "18",
  "last name": "Tyagi",
  // Property with space → must use ["last name"] to access
};

// -------------------------
// Accessing Object Properties
// -------------------------
// 1. Dot notation (.)  → only valid for identifier keys (no spaces, symbols)
// 2. Bracket notation [] → universal, works with any property name

console.log(User.email); // Dot notation
console.log(User["email"]); // Bracket notation (best practice)
console.log(User["last name"]); // Works only with bracket
console.log(User[myList]); // Accessing Symbol key

// -------------------------
// Modifying Object Properties
// -------------------------

User.age = "20";
console.log("Updated Age:", User.age);

// Freeze an object to prevent modification
// Object.freeze(User);
// User.age = "30"; // ❌ will not change
// console.log(User.age);

// -------------------------
// Adding Methods to Object
// -------------------------

// Method 1: Simple method
User.greeting = function () {
  console.log("Hello Mr.");
};
User.greeting(); // Executes function
// NOTE: console.log(User.greeting()) would log function output (undefined if no return)

// Method 2: Using this keyword
User.greetingTwo = function () {
  console.log(`Hello Mr. ${this.name}, your email is ${this.email}`);
  // `this` refers to current object (User here)
};
User.greetingTwo();

// -------------------------
// Important Notes
// -------------------------
// 1. Keys in objects are always strings/symbols internally
// 2. To use variables as keys: use []
// 3. Symbol properties do not appear in normal iterations
// 4. freeze() → makes object immutable
// 5. Methods inside objects can use "this" to access other properties
// 6. Use bracket notation for keys with spaces or special characters
// 7. Objects are reference types - copying an object copies the reference, not the actual object
// 8. Use Object.assign() or spread operator to create shallow copies of objects

// Example of copying object reference
const UserCopy = User;
UserCopy.name = "Changed Name";
console.log("Original User Name after modifying copy:", User.name); // Shows changed name
