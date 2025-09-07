// ************ JavaScript Loops ************ //

//  1. for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//  2. while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//  3. do...while loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

//  4. for...of loop (for arrays, strings)
const arr = [10, 20, 30];
for (let num of arr) {
  console.log(num);
}

//  5. for...in loop (for objects)
const user = {
  name: "Shivank",
  age: 21,
};
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}
