// =============================
// 📌 1. WHAT IS A PROMISE?
// -----------------------------
// A Promise is an object that represents the eventual completion (resolve)
// OR failure (reject) of an asynchronous operation.
// States of a Promise:
// - Pending (initial state)
// - Fulfilled (when resolve() is called)
// - Rejected (when reject() is called)
// =============================

const promiseFunction = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("task is completed");
    resolve(); // ✅ success
  }, 2000);
});

// `.then()` executes when the promise resolves successfully
promiseFunction.then(() => {
  console.log("Promise completed");
});

// =============================
// 📌 2. INLINE PROMISE
// -----------------------------
// We can create a Promise without storing it in a variable
// and directly chain `.then()`
// =============================

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("task 2 is completed");
    resolve(); // success
  }, 2000);
}).then(function () {
  console.log("Another 2nd promise is completed");
});

// =============================
// 📌 3. PROMISE RETURNING DATA
// -----------------------------
// `resolve()` can pass data (objects, strings, numbers, etc.)
// That data is received inside `.then()`
// =============================

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("task 3 is completed");
    resolve({
      name: "Shivank Tyagi",
      gender: "Male",
    });
  }, 2000);
}).then(function (user) {
  console.log(user); // 👉 { name: "Shivank Tyagi", gender: "Male" }
});

// =============================
// 📌 4. PROMISE WITH ERROR HANDLING
// -----------------------------
// - Use `.catch()` to handle rejected promises
// - You can also chain `.then()` to pass values step by step
// =============================

const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false; // ❌ change to true to test rejection
    if (!error) {
      resolve({
        name: "Shivank Tyagi",
        gender: "Male",
      });
    } else {
      reject("ERROR: Something went wrong"); // ❌ rejection
    }
  }, 2000);
});

PromiseFour.then((user) => {
  console.log(user); // first then → prints object
  return user.name; // pass user.name to next then
})
  .then((name) => {
    console.log(name); // second then → prints "Shivank Tyagi"
  })
  .catch((err) => {
    console.log(err); // if rejected → prints error
  });

// =============================
// 📌 5. PROMISE WITH ASYNC / AWAIT
// -----------------------------
// - `async` functions always return a Promise
// - `await` pauses the execution until promise resolves/rejects
// - `try...catch` handles errors
// =============================

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // ❌ change to false for success
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive; // waits until resolved/rejected
    console.log(response); // 👉 { username: "javascript", password: "123" }
  } catch (error) {
    console.log(error); // 👉 "ERROR: JS went wrong"
  }
}

consumePromiseFive();

// =============================
// 📌 6. FETCH API (Real-world example)
// -----------------------------
// - `fetch()` returns a Promise
// - We need `.then()` to process response
// - `response.json()` also returns a Promise
// =============================

// Example: GitHub API call
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json(); // convert response to JSON (async)
  })
  .then((data) => {
    console.log(data); // 👉 prints GitHub user details
  })
  .catch((error) => console.log(error)); // handles network errors
