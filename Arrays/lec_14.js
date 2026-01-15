/* 
=====================================================
📘 Arrays in JavaScript - Detailed Interview Notes
=====================================================

👉 What is an Array?
---------------------
- An array is a special type of **object** in JavaScript used to store multiple values in a single variable.
- Arrays are **ordered collections**: elements are stored at numeric indices (starting from 0).
- Arrays in JS are **dynamic**:
   ✅ Can grow/shrink in size dynamically.
   ✅ Can store mixed data types (numbers, strings, objects, even functions).
- Internally, arrays are objects with integer-based keys and a `length` property.
- Time complexity (in V8 & most engines):
   - Access by index → O(1)
   - Search (linear) → O(n)
   - Insert/remove at end → O(1) amortized
   - Insert/remove at beginning → O(n) (shift all elements)

Example:
*/
const myArray = [1, "hello", true, { id: 1 }, [2, 3]];

/* 
=====================================================
📌 Array Declaration
=====================================================
*/
const arr1 = [1, 2, 3]; // Array literal (most common)
const arr2 = new Array(5); // Creates empty array of length 5
const arr3 = Array.of(10, 20); // [10, 20]
const arr4 = Array.from("test"); // ['t', 'e', 's', 't']

/* 
=====================================================
📌 Basic Array Operations
=====================================================
*/

// Accessing elements
console.log(arr1[0]); // 1
console.log(arr1[arr1.length - 1]); // last element = 3

// Modifying
arr1[1] = 99;
console.log(arr1); // [1, 99, 3]

// Length
console.log(arr1.length); // 3
arr1.length = 5;
console.log(arr1); // [1, 99, 3, empty × 2]

/* 
=====================================================
📌 Common Array Methods
=====================================================
*/

// ✅ push() → add element(s) at END, returns new length
arr1.push(100);

// ✅ pop() → remove LAST element, returns removed value
arr1.pop();

// ✅ unshift() → add element(s) at BEGINNING (O(n))
arr1.unshift(0);

// ✅ shift() → remove FIRST element (O(n))
arr1.shift();

// ✅ includes(value) → checks existence (strict equality)
console.log(arr1.includes(99));

// ✅ indexOf(value) → index of value or -1
console.log(arr1.indexOf(99));

// ✅ lastIndexOf(value) → last occurrence index
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3

// ✅ join() → array → string
console.log(arr1.join("-")); // "1-99-3"

// ✅ concat() → merges arrays, returns NEW array
console.log([1, 2].concat([3, 4])); // [1,2,3,4]

// ✅ reverse() → reverses IN-PLACE
const r = [1, 2, 3].reverse();
console.log(r); // [3,2,1]

// ✅ flat() → flattens nested arrays (1-level default)
console.log([1, [2, 3], [4, [5]]].flat()); // [1,2,3,4,[5]]

/* 
=====================================================
📌 slice() vs splice()
=====================================================

👉 slice(start, end)
- Returns a shallow copy of array portion.
- Non-mutating (original array intact).
- `end` is exclusive.
- Useful in immutability (React state).

👉 splice(start, deleteCount, ...items)
- Removes/replaces/adds elements IN PLACE.
- Mutates the original array.
- Returns the deleted elements.

Example:
*/
const myArrays = [1, 2, 3, 4, 5];
console.log("A", myArrays);

const s1 = myArrays.slice(1, 3);
console.log(s1); // [2,3]
console.log("B", myArrays); // unchanged

const sp1 = myArrays.splice(1, 3);
console.log(sp1); // [2,3,4]
console.log("C", myArrays); // [1,5]

/* 
=====================================================
📌 Iteration Methods (Very Interview Relevant)
=====================================================
*/

// ✅ forEach() → executes callback for each item, no return
[1, 2, 3].forEach((num) => console.log(num * 2));

// ✅ map() → returns NEW array with transformed values
const doubled = [1, 2, 3].map((n) => n * 2); // [2,4,6]

// ✅ filter() → returns NEW array with items that pass condition
const evens = [1, 2, 3, 4].filter((n) => n % 2 === 0); // [2,4]

// ✅ reduce() → reduces to single value (sum, max, etc.)
const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0); // 10

// ✅ some() → true if ANY element passes condition
console.log([1, 2, 3].some((n) => n > 2)); // true

// ✅ every() → true if ALL elements pass condition
console.log([1, 2, 3].every((n) => n > 0)); // true

// ✅ find() → returns FIRST matching element
console.log([1, 2, 3, 4].find((n) => n > 2)); // 3

// ✅ findIndex() → returns index of FIRST match
console.log([1, 2, 3, 4].findIndex((n) => n > 2)); // 2

/* 
=====================================================
📌 Advanced Topics
=====================================================
*/

// Deep vs Shallow Copy
const a1 = [1, [2, 3]];
const shallow = a1.slice();
shallow[1][0] = 99;
console.log(a1); // [1, [99,3]] → shallow copy issue

// ES6 Spread operator
const copy = [...a1];
const merge = [...[1, 2], ...[3, 4]];

// Array.isArray() → best way to check if variable is array
console.log(Array.isArray([1, 2])); // true
console.log(typeof [1, 2]); // "object"

// Destructuring
const [x, y, ...rest] = [10, 20, 30, 40];
console.log(x, y, rest); // 10 20 [30,40]

/* 
=====================================================
💡 Interview-Trick Questions
=====================================================

1. Q: typeof [] ?
   A: "object" (because arrays are objects in JS)

2. Q: [] == ![] ?
   A: true → because [] is truthy → ![] = false → [] == false → [] coerces to "" → "" == false → true

3. Q: What is the difference between forEach and map?
   A: forEach → executes callback, returns undefined.
      map → transforms array, returns NEW array.

4. Q: How do you remove duplicates from an array?
   A: Using Set →  [...new Set([1,2,2,3])]

5. Q: What is the difference between slice and splice?
   A: slice → non-mutating, shallow copy.
      splice → mutating, remove/replace elements.

6. Q: Explain shallow vs deep copy in arrays.
   A: Shallow copy copies only 1st level (nested objects/arrays remain by reference).
      Deep copy copies everything (JSON.parse(JSON.stringify(obj)) or structuredClone()).

7. Q: What is the time complexity of push/pop vs shift/unshift?
   A: push/pop → O(1)
      shift/unshift → O(n) (elements need re-indexing)

8. Q: How do you create a shallow copy of an array?
      👉Using slice()
      👉Using spread operator ([...])
      👉Using Object.assign([], arr)
      👉Using Array.from()
      
9.  Q: How do you create a deep copy in JavaScript?

      👉JSON.parse(JSON.stringify(obj)) → works for simple JSON-safe objects.
      👉structuredClone(obj) → modern, handles more cases.
      👉_.cloneDeep(obj) from Lodash → reliable, widely used in production.

10. Q: Why is this important in React or state management?

      👉 In React, you must update state immutably.
      👉 If you only do a shallow copy and mutate nested objects, React  might not detect changes → causing bugs in UI updates.
        Example:
      👉 const state = { user: { name: "Alice" } };
        const newState = { ...state }; // shallow copy
      👉 newState.user.name = "Bob";
        console.log(state.user.name); // "Bob" ❌ original mutated


👉 Solution: do a deep copy before modifying.

 Complexity:

Shallow copy → O(n) (copies only top-level elements).

Deep copy → O(n*m) depending on nested depth (recursive).

✅ Quick Summary:

Shallow copy = cheap, but dangerous if you mutate nested structures.

Deep copy = safe, but more expensive (slower, more memory).      
*/
