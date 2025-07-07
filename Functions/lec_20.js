// Rest Operator ( ... )
// used in function parameters to take multiple arguments as an array:

function calculatePrice(...num) {
  return num;
}

const result1 = calculatePrice(100, 200, 300);
console.log(result1); // [100, 200, 300]

// -----------------------------------------

// Rest with named parameters:
// here 100 goes into val1, 200 into val2, and rest into num:

function calculatePrice(val1, val2, ...num) {
  return num;
}

const result2 = calculatePrice(100, 200, 300, 400, 500);
console.log(result2); // [300, 400, 500]

// -----------------------------------------

// Difference b/w Rest and Spread operators:
// both use same syntax (...) but different use case:

// REST -> collects multiple values into one array (used in function parameters)
// SPREAD -> spreads array/object into individual values (used in function calls or assignments)

const arr = [1, 2, 3];

// SPREAD example:
console.log(Math.max(...arr)); // 3

// REST example:
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(10, 20, 30)); // 60

// -----------------------------------------

// array as a function parameter:
const myArr = [10, 20, 30, 40];

function arrayAsFunction(getArray) {
  return getArray[2]; // returns 30
}

console.log(arrayAsFunction(myArr)); // 30

// -----------------------------------------

// Real-life use case of REST operator:

function shoppingCart(username, ...items) {
  console.log(`${username} added ${items.length} items to cart`);
  return items;
}

shoppingCart("Shivank", "Laptop", "Mouse", "Keyboard");
// Output: Shivank added 3 items to cart
