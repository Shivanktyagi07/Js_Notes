//  Asynchronous JavaScript :

//  1. THE PROBLEM WITH SYNCHRONOUS CODE
// JavaScript is single-threaded, meaning it executes one task at a time.
// If an operation takes too long (like fetching data from a server), it blocks the entire program.

console.log("Start");
function delay() {
  for (let i = 0; i < 1e9; i++) {} // Simulating a heavy task
}
delay();
console.log("End");
// This will freeze the browser for a few seconds before printing "End".
// To fix this, we use asynchronous programming.

//  2. CALLBACKS - The first solution to async operations
// Callbacks allow a function to execute after an async operation completes.
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback("Data fetched from server ");
  }, 2000);
}

console.log("Fetching data...");
fetchDataCallback((data) => {
  console.log(data); // Runs after 2 seconds
});

//  PROBLEM WITH CALLBACKS: "Callback Hell"
// If multiple async operations depend on each other, we get nested callbacks.
function fetchUser(userId, callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: userId, name: "Alice" });
  }, 2000);
}

fetchUser(1, (user) => {
  fetchDataCallback((data) => {
    console.log(`${user.name} received: ${data}`);
  });
});
// As callbacks get deeply nested, the code becomes hard to manage.

//  3. PROMISES - A better way to handle async operations
// A Promise represents a value that might be available now, in the future, or never.
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully ");
    }, 2000);
  });
}

console.log("Fetching data with Promise...");
fetchDataPromise()
  .then((data) => console.log(data)) // Runs after 2 seconds
  .catch((error) => console.error(error));

//  PROMISE CHAINING - Avoids callback hell
function fetchUserPromise(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: userId, name: "Alice" });
    }, 2000);
  });
}

fetchUserPromise(1).then((user) => {
  return fetchDataPromise().then((data) => {
    console.log(`${user.name} received: ${data}`);
  });
});
// This is cleaner, but we can improve it further.

//  4. ASYNC/AWAIT - The best way to handle async code
// Async functions return a Promise, allowing us to write async code like synchronous code.
async function fetchDataAsync() {
  try {
    console.log("Fetching data with async/await...");
    let data = await fetchDataPromise();
    console.log(data); // Runs after 2 seconds
  } catch (error) {
    console.error(error);
  }
}
fetchDataAsync();

//  USING ASYNC/AWAIT TO AVOID PROMISE CHAINING
async function getUserAndData() {
  let user = await fetchUserPromise(1);
  let data = await fetchDataPromise();
  console.log(`${user.name} received: ${data}`);
}
getUserAndData();
// Async/await makes code much cleaner and easier to read.

//  EVENT LOOP - How JavaScript executes async code
// JavaScript has a Call Stack, Web APIs, Task Queue, and Microtask Queue.
// Microtasks (Promises, MutationObservers) run before Macrotasks (setTimeout, setInterval).

console.log("Start");
setTimeout(() => console.log("setTimeout callback"), 0);
Promise.resolve().then(() => console.log("Promise resolved"));
console.log("End");
// Output:
// Start
// End
// Promise resolved
// setTimeout callback

//  STATES OF A PROMISE:
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Change this to false to see rejection

  setTimeout(() => {
    if (success) {
      resolve("Promise Resolved ");
    } else {
      reject("Promise Rejected ");
    }
  }, 2000);
});

console.log(myPromise); // Initially, it is in "pending" state

myPromise
  .then((result) => {
    console.log(result); // Runs when promise is fulfilled
  })
  .catch((error) => {
    console.error(error); // Runs when promise is rejected
  })
  .finally(() => {
    console.log("Promise Settled (Either Fulfilled or Rejected) ");
  });

//  `.finally()` runs regardless of success or failure.

//  EVENT LOOP EXPLAINED:
// 1. Synchronous code runs first.
// 2. Microtasks (Promises) execute next.
// 3. Macrotasks (setTimeout, setInterval) execute last.

//  CLOSURES - Functions that remember their lexical scope even when executed outside of it
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const newFunction = outerFunction("Hello");
newFunction("World"); // Output: Outer: Hello, Inner: World
// Closures are useful for data encapsulation and creating private variables.

//  `this` AND BINDING IN JAVASCRIPT
// `this` refers to the object that is executing the function.
// Different ways `this` behaves:

// 1. Global Context (this refers to window/global object)
console.log(this); // Window object in browsers

// 2. Object Method (this refers to the calling object)
const obj = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};
obj.greet(); // Output: Hello, Alice

// 3. Arrow Functions (this is lexically bound)
const obj2 = {
  name: "Bob",
  greet: () => {
    console.log(`Hello, ${this.name}`);
  },
};
obj2.greet(); // Output: Hello, undefined (Arrow functions don’t have their own `this`)

// 4. Explicit Binding (call, apply, bind)
function sayHello() {
  console.log(`Hello, ${this.name}`);
}
const person = { name: "Charlie" };
sayHello.call(person); // Output: Hello, Charlie

// 5. Using bind()
const boundFunction = sayHello.bind(person);
boundFunction(); // Output: Hello, Charlie

// Summary:
// - Callbacks lead to callback hell, solved by Promises.
// - Promises can be chained to avoid deeply nested structures.
// - Async/Await makes asynchronous code look synchronous.
// - Event Loop handles task execution order (Microtasks before Macrotasks).
// - Closures allow functions to retain access to their outer scope.
// - `this` changes based on the function's context and binding methods.
