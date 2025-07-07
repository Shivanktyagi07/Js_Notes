// ************ this keyword in Objects ************ //

const user = {
  userName: "Shivank",
  price: "555",
  welcomeText: function () {
    console.log(`${this.userName}, welcome to the site`);
    console.log(this); // 'this' refers to the current object context => here: 'user'
  },
};

user.welcomeText(); // Output: Shivank, welcome to the site

user.userName = "Tyagi";
user.welcomeText(); // Output: Tyagi, welcome to the site

// --------------------------------------------

// global 'this' context
// In Node.js or strict mode => 'this' gives an empty object {}

console.log(this); // Output: {} (in Node.js), but in browser it gives 'window'

// --------------------------------------------

// ************ this inside normal function ************ //

const one = function () {
  const username = "Shivank";
  console.log(this.username); //  undefined (this doesn't refer to function context)
  console.log(this); //  some global object (but not useful here)
};

one();

//  Note:
// - 'this' inside regular functions does NOT refer to the function itself
// - It refers to global context (undefined in most cases when accessing properties)

// --------------------------------------------

// ************ this inside Arrow Function ************ //

const two = () => {
  const username = "Shivank";
  console.log(this.username); //  undefined (arrow functions don’t have their own 'this')
  console.log(this); //  refers to the outer (global) context
};

two();

//  Note:
// - Arrow functions DON'T have their own 'this'
// - They use the 'this' from their parent (lexical) scope

// --------------------------------------------

// ************ Arrow Functions Syntax ************ //

//  with return (curly braces): explicit return
const arrow = (num1, num2) => {
  return num1 + num2;
};

//  one-liner without return: implicit return
const arrow2 = (num1, num2) => num1 + num2;

//  returning an object from arrow function:
const object = () => ({ user: "Shivank" });
console.log(object()); // Output: { user: "Shivank" }

//  Note:
// - Use ( ) around returned object in arrow functions
// - () => ({ key: value }) => parentheses avoid confusion with function body
