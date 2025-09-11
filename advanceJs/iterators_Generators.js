// ITERATORS AND GENERATORS IN JAVASCRIPT :

// 1. WHAT ARE ITERATORS?
// An iterator is an object that allows us to traverse through a collection (like an array, string, or custom object).
// It follows the iterator protocol by implementing a `next()` method that returns an object with:
// - `value`: The next value in the sequence
// - `done`: A boolean indicating whether the iteration is complete

// Example: Creating a manual iterator
function createIterator(array) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}

const myArray = ["apple", "banana", "cherry"];
const iterator = createIterator(myArray);

console.log(iterator.next()); // { value: 'apple', done: false }
console.log(iterator.next()); // { value: 'banana', done: false }
console.log(iterator.next()); // { value: 'cherry', done: false }
console.log(iterator.next()); // { done: true }

// BUILT-IN ITERATORS
// JavaScript has built-in iterators for arrays, maps, and sets.
const fruits = ["mango", "grape", "orange"];
const fruitIterator = fruits[Symbol.iterator]();
console.log(fruitIterator.next()); // { value: 'mango', done: false }
console.log(fruitIterator.next()); // { value: 'grape', done: false }
console.log(fruitIterator.next()); // { value: 'orange', done: false }
console.log(fruitIterator.next()); // { done: true }

// 2. GENERATORS - A BETTER WAY TO CREATE ITERATORS
// A generator function uses `function*` syntax and `yield` to produce values lazily.
// Generators pause execution when `yield` is encountered and resume when `next()` is called.

function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunction();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { done: true }

// PASSING VALUES INTO GENERATORS
function* numberGenerator() {
  let x = yield "Enter a number";
  let y = yield x * 2;
  yield y + 3;
}

const numGen = numberGenerator();
console.log(numGen.next()); // { value: 'Enter a number', done: false }
console.log(numGen.next(5)); // { value: 10, done: false }
console.log(numGen.next(7)); // { value: 10, done: false }
console.log(numGen.next()); // { done: true }

// 3. SYMBOL.ITERATOR - MAKING OBJECTS ITERABLE
// Custom objects can be made iterable by defining the `Symbol.iterator` method.
const iterableObject = {
  data: ["red", "blue", "green"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const color of iterableObject) {
  console.log(color); // Outputs: red, blue, green
}

// SEPARATORS IN JAVASCRIPT
// Separators are used in JavaScript to format and manipulate strings or numbers.

// 1. USING SEPARATORS IN STRINGS
const csvData = "apple,banana,grape";
const fruitsArray = csvData.split(","); // Converts CSV to array
console.log(fruitsArray); // ["apple", "banana", "grape"]

// Joining array elements with a separator
console.log(fruitsArray.join(" | ")); // "apple | banana | grape"

// 2. NUMBER SEPARATORS (NUMERIC LITERALS)
// JavaScript allows underscores as numeric separators for readability.
const billion = 1_000_000_000; // Same as 1000000000
console.log(billion); // 1000000000

// Summary:
// - Iterators allow sequential access to data using the `next()` method.
// - Generators simplify creating iterators using `yield`.
// - `Symbol.iterator` enables custom objects to be iterable.
// - Separators help format and manipulate strings and numbers for better readability.
