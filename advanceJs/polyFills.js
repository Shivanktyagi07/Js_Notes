/* 
===========================================
📘 JavaScript Polyfills - Study Notes
===========================================

👉 What is a Polyfill?
----------------------
- A polyfill is JavaScript code that provides modern functionality 
  to browsers that don’t natively support it.
- It "fills in the gap" (hence the name "poly-fill").
- Example: Older browsers don’t support Array.prototype.includes,
  so we can write a polyfill to add it.

👉 Why use Polyfills?
----------------------
- To ensure cross-browser compatibility.
- To use modern JavaScript features (ES6+) without breaking 
  functionality on older browsers.
- Works alongside transpilers (like Babel) for syntax, 
  but polyfills handle missing runtime features.

*/

/* 
===========================================
📌 Example 1: Polyfill for Array.prototype.includes
===========================================
Modern JS:
    [1,2,3].includes(2)  // true

But older browsers (like IE) don’t support includes().
So, we add our own implementation.
*/
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement, fromIndex) {
    // Default starting index
    let start = fromIndex || 0;

    for (let i = start; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true; // Found it
      }
    }
    return false; // Not found
  };
}

// ✅ Usage
console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(5)); // false

/* 
===========================================
📌 Example 2: Polyfill for String.prototype.startsWith
===========================================
Modern JS:
    "Hello".startsWith("He")  // true

Older browsers may not support this method.
*/
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (search, pos) {
    pos = pos || 0;
    return this.substring(pos, pos + search.length) === search;
  };
}

// ✅ Usage
console.log("Hello World".startsWith("He")); // true
console.log("Hello World".startsWith("lo")); // false

/* 
===========================================
📌 Example 3: Polyfill for fetch() API
===========================================
Modern JS:
    fetch("https://api.example.com")

Older browsers don’t have fetch().
We can use XMLHttpRequest as a polyfill.
*/
if (!window.fetch) {
  window.fetch = function (url) {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({ text: () => Promise.resolve(xhr.responseText) });
        } else {
          reject(new Error("Request failed: " + xhr.status));
        }
      };
      xhr.onerror = function () {
        reject(new Error("Network error"));
      };
      xhr.send();
    });
  };
}

// ✅ Usage
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(res => res.text())
//   .then(console.log);

/* 
===========================================
📌 Polyfill vs Shim vs Fallback
===========================================
- Polyfill: Code that mimics a missing feature (API/method).
- Shim: More general term for compatibility code; polyfill is a type of shim.
- Fallback: Simple alternative when full functionality isn’t possible.

Example:
- Polyfill: Adding Array.includes if missing.
- Shim: Adding a whole library to mimic browser API.
- Fallback: Showing "Please upgrade browser" instead of advanced features.

*/

/* 
===========================================
📌 Popular Polyfill Libraries
===========================================
- core-js → Provides ES6+ features (Promise, Array methods, Object methods).
- es6-promise → Polyfill specifically for Promises.
- whatwg-fetch → Polyfill for fetch API.
- HTML5Shiv → Helps IE understand HTML5 elements.

In modern projects:
- Babel + core-js is commonly used for polyfills automatically.
*/
