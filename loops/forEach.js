// ************ forEach() Loop (for arrays) ************ //

let array = [1, 2, 3, 4, 5];

//  Only value
array.forEach((num) => {
  console.log(num);
});

//  Value and index
array.forEach((num, index) => {
  console.log(`Index: ${index} ; Value: ${num}`);
});

// Value, index, and entire array
array.forEach((num, index, arr) => {
  console.log(`Index: ${index} ; Value: ${num} ; Array: ${arr}`);
});

//  forEach does not return a value
let result = array.forEach((num) => {
  console.log(num);
});
console.log(result); // undefined

// ************ some() Method — like break in forEach ************ //

array.some((num) => {
  console.log(num);
  return num === 3; //  stops loop when num is 3
});

//  Notes:
// - forEach doesn’t support break or return (can’t stop early)
// - some() stops when the condition returns true
// - some() returns true/false based on condition match

// ************ map() Method ************ //
//  Used to transform each element of array and return a new array

const nums = [1, 2, 3, 4, 5];

const squares = nums.map((num) => {
  return num * num;
});
console.log(squares); // [1, 4, 9, 16, 25]

//  Note:
// - map() does NOT change the original array
// - always returns a new array

// ************ filter() Method ************ //
//  Used to filter elements based on a condition and return a new array

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]

//  Note:
// - returns only the elements that match the condition
// - original array stays untouched

// ************ reduce() Method ************ //
// Used to reduce array to a single value (sum, product, etc.)

const values = [1, 2, 3, 4, 5];

const total = values.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total); // 15

// Note:
// - reduce() takes a callback with (accumulator, currentValue)
// - second argument is initial value of accumulator
