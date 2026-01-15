// ------------------------
// REST OPERATOR ( ... )
// ------------------------
// The rest operator collects multiple arguments into a single array.
// It is mainly used in function parameters when the number of arguments is unknown.

// Example 1: Basic Rest Operator
function calculatePrice(...num) {
  // all arguments passed to function are collected into array 'num'
  return num;
}

const result1 = calculatePrice(100, 200, 300);
console.log(result1); // [100, 200, 300]

// ------------------------
// REST WITH NAMED PARAMETERS
// ------------------------
// We can combine named parameters and rest operator
// The rest operator should always come last

function calculatePrice(val1, val2, ...num) {
  // val1 = 100, val2 = 200, rest of arguments = [300, 400, 500]
  return num;
}

const result2 = calculatePrice(100, 200, 300, 400, 500);
console.log(result2); // [300, 400, 500]

// ------------------------
// REST VS SPREAD
// ------------------------
// Both use (...) syntax but have different purposes:

// REST -> collects multiple values into one array (used in function parameters)
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(10, 20, 30)); // 60

// SPREAD -> spreads array or object into individual values (used in function calls or assignments)
const arr = [1, 2, 3];
console.log(Math.max(...arr)); // 3

// ------------------------
// ARRAY AS FUNCTION PARAMETER
// ------------------------
// Arrays can be passed as a single parameter without using rest

const myArr = [10, 20, 30, 40];

function arrayAsFunction(getArray) {
  // access elements by index
  return getArray[2]; // returns 30
}

console.log(arrayAsFunction(myArr)); // 30

// ------------------------
// REAL-LIFE USE CASE: SHOPPING CART
// ------------------------
// The rest operator is very useful when a user can add variable number of items

function shoppingCart(username, ...items) {
  // items is an array containing all added products
  console.log(`${username} added ${items.length} items to cart`);
  return items;
}

shoppingCart("Shivank", "Laptop", "Mouse", "Keyboard");
// Output: Shivank added 3 items to cart

// ------------------------
// SUMMARY
// ------------------------
// 1. REST collects multiple arguments into an array
// 2. REST must be last in function parameters
// 3. SPREAD expands array/object into individual elements
// 4. Useful in real-life scenarios like variable items, arguments, etc.
