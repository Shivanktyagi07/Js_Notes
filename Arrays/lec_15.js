/********************************************
 * ADVANCED ARRAY METHODS & CONCEPTS IN JS
 * ----------------------------------------
 * map(), filter(), reduce(), some(), every(),
 * find(), findIndex(), sort(), destructuring,
 * removing duplicates, chunking arrays
 ********************************************/

const numbers = [1, 2, 3, 4, 5];

/* -----------------------------------------
   map()
   -----------------------------------------
   - Creates a NEW array by applying a function 
     to each element.
   - Does NOT modify the original array.
   - Common for data transformation.
   - Interview Note: Unlike forEach, map()
     ALWAYS returns a new array.
----------------------------------------- */
const squared = numbers.map((num) => num * num);
console.log("map() →", squared);
// [1, 4, 9, 16, 25]

/* -----------------------------------------
   filter()
   -----------------------------------------
   - Creates a NEW array with elements that pass
     the provided condition.
   - Does NOT modify the original array.
   - Useful for extracting subsets.
----------------------------------------- */
const evens = numbers.filter((num) => num % 2 === 0);
console.log("filter() →", evens);
// [2, 4]

/* -----------------------------------------
   reduce()
   -----------------------------------------
   - Reduces an array to a SINGLE value.
   - Takes an accumulator + current value.
   - Common uses: sum, max, flatten.
   - Interview Tip: You can implement map() 
     and filter() using reduce().
----------------------------------------- */
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce() →", sum);
// 15

/* -----------------------------------------
   some() & every()
   -----------------------------------------
   - some(): Returns true if AT LEAST one 
     element matches condition.
   - every(): Returns true only if ALL 
     elements match condition.
----------------------------------------- */
console.log(
  "some() →",
  numbers.some((num) => num > 3)
);
// true
console.log(
  "every() →",
  numbers.every((num) => num > 0)
);
// true

/* -----------------------------------------
   find() & findIndex()
   -----------------------------------------
   - find(): Returns the FIRST element that 
     satisfies condition.
   - findIndex(): Returns the index of that element.
   - Returns undefined / -1 if not found.
----------------------------------------- */
const arr = [10, 20, 30, 40];
console.log(
  "find() →",
  arr.find((x) => x > 25)
);
// 30
console.log(
  "findIndex() →",
  arr.findIndex((x) => x > 25)
);
// 2

/* -----------------------------------------
   sort()
   -----------------------------------------
   - By default sorts as STRINGS (lexicographically).
   - To sort numerically, provide a compare function.
   - Interview Note: Very common to ask about 
     custom object sorting.
----------------------------------------- */
const nums = [40, 100, 1, 5, 25];
nums.sort((a, b) => a - b);
console.log("sort() ascending →", nums);
// [1, 5, 25, 40, 100]

/* -----------------------------------------
   Array Destructuring
   -----------------------------------------
   - A clean way to unpack array values into variables.
   - Can skip elements and use rest operator.
   - Interview Tip: Very common in React hooks.
----------------------------------------- */
const sample = [10, 20, 30, 40];
const [first, second] = sample;
console.log("Destructured:", first, second);
// 10 20
const [one, , three] = sample;
console.log("Skipping elements:", one, three);
// 10 30
const [head, ...rest] = sample;
console.log("With rest:", head, rest);
// 10 [20,30,40]

/* -----------------------------------------
   Remove Duplicates
   -----------------------------------------
   - Using Set to filter out unique values.
   - Interview Note: Common coding test problem.
----------------------------------------- */
const dupes = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(dupes)];
console.log("Remove duplicates:", unique);
// [1, 2, 3, 4, 5]

/* -----------------------------------------
   Chunking an Array
   -----------------------------------------
   - Breaking an array into smaller arrays 
     of given size.
   - Common in pagination problems.
----------------------------------------- */
function chunkArray(arr, size) {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
}
console.log("Chunked:", chunkArray([1, 2, 3, 4, 5, 6], 2));
// [[1,2],[3,4],[5,6]]

// --------------------------------------
// .reduce()
// - Loops over each element of the array
// - Builds up a result (acc = accumulator)
// - Initial value of acc = [] (empty array)
// - Shape of acc: array of arrays (the chunks)
// --------------------------------------

// --------------------------------------
// Arguments of reduce’s callback:
// 1st param (_) → current element (ignored)
// 2nd param (i) → current index
// arr → original array (not used directly)
// 👉 We only care about index i here
// --------------------------------------

// --------------------------------------
// Logic:
// - If i % size === 0 → start of new chunk
// - Use slice(i, i+size) → copy subarray
// - Push that chunk into accumulator
// --------------------------------------

// ------------------------------------------
// 📝 Dry Run Example
// arr = [1,2,3,4,5,6], size = 2
// i=0 → slice(0,2) = [1,2] → acc = [[1,2]]
// i=1 → skip
// i=2 → slice(2,4) = [3,4] → acc = [[1,2],[3,4]]
// i=3 → skip
// i=4 → slice(4,6) = [5,6] → acc = [[1,2],[3,4],[5,6]]
// i=5 → skip
// ✅ Final Result = [[1,2],[3,4],[5,6]]
// ------------------------------------------

// ------------------------------------------
// ⚡ Interview Notes
// - Time Complexity: O(n)
// - Space Complexity: O(n)
// - Very common interview problem:
//   "Split array into groups of size k"
// ------------------------------------------
