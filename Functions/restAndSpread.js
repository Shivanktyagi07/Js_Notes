// ------------------------
// REST vs SPREAD
// ------------------------

// 1. PURPOSE:
// REST:   Collects multiple individual values into a single array.
// SPREAD: Expands an array or object into individual elements.

// 2. SYNTAX:
// Both use three dots (...), but context matters.
// REST: used in function parameters
// SPREAD: used in function calls, array literals, or object literals

// 3. EXAMPLES:

// --- REST EXAMPLE ---
function sum(...numbers) {
  // 'numbers' collects all arguments into an array
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(10, 20, 30)); // 60
// Here, ...numbers = [10, 20, 30]

// --- SPREAD EXAMPLE ---
const arr = [1, 2, 3];
console.log(Math.max(...arr)); // 3
// Here, ...arr expands to 1, 2, 3

// 4. FUNCTION USAGE:

// REST in function parameters
function shoppingCart(user, ...items) {
  console.log(`${user} added ${items.length} items`);
}
shoppingCart("Shivank", "Laptop", "Mouse", "Keyboard");
// items = ["Laptop", "Mouse", "Keyboard"]

// SPREAD in function call
const products = ["Laptop", "Mouse", "Keyboard"];
shoppingCart("Shivank", ...products);
// spreads array elements as separate arguments: "Laptop", "Mouse", "Keyboard"

// 5. ARRAY / OBJECT USAGE:

// REST - destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); // [20, 30, 40]

// SPREAD - merging arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

// SUMMARY:
// REST   -> Collects multiple elements into an array (used in parameters or destructuring)
// SPREAD -> Expands array/object elements (used in function calls or assignments)
