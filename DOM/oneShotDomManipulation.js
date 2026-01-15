/*******************************************************
 * DOM (DOCUMENT OBJECT MODEL)
 * -----------------------------------------------------
 * The DOM is a programming interface for HTML documents.
 * It represents the page as a tree of objects, allowing
 * JavaScript to interact with and manipulate the webpage.
 *******************************************************/

/*******************************************************
 * WHAT IS THE DOM?
 * -----------------------------------------------------
 * 1. DOM = Representation of HTML as a TREE structure
 * 2. Browser creates DOM automatically when webpage loads
 * 3. Every HTML element → becomes a JS object (node)
 * 4. Using JS, we can:
 *      - Select elements
 *      - Change content
 *      - Change styles
 *      - Add or remove elements
 *      - Handle events (click, input, etc.)
 *******************************************************/

// ------------------------------------------------------
// SIMPLE HTML STRUCTURE (MENTAL MODEL)
/*
<html>
  <body>
    <h1 id="title">Hello</h1>
    <p class="msg">Welcome</p>
    <button>Click me</button>
  </body>
</html>
*/
// Browser converts it to:
//
// Document -> HTML -> Body -> h1, p, button
// ------------------------------------------------------

// ------------------------------------------------------
// SELECTING ELEMENTS
// ------------------------------------------------------

// 1. getElementById()  -> returns ONE element
const title = document.getElementById("title");
console.log(title);

// 2. getElementsByClassName() -> returns HTMLCollection
const messages = document.getElementsByClassName("msg");

// 3. querySelector() -> returns FIRST matching element
const firstParagraph = document.querySelector(".msg");

// 4. querySelectorAll() -> returns NodeList (can use forEach)
const allParagraphs = document.querySelectorAll("p");

// INTERVIEW TIP:
// HTMLCollection is LIVE (auto-updates), NodeList is STATIC (doesn’t auto-update)

// ------------------------------------------------------
// MODIFYING CONTENT
// ------------------------------------------------------

title.textContent = "Updated Title"; // Only text
title.innerHTML = "<i>Styled Title</i>"; // Parses HTML
title.innerText = "Hello JS"; // Respects CSS (hidden elements ignored)

// INTERVIEW TIP:
// innerHTML is powerful BUT risky → can cause XSS if used with user input

// ------------------------------------------------------
// MODIFYING CSS WITH JS
// ------------------------------------------------------

title.style.color = "red";
title.style.backgroundColor = "yellow";

// ------------------------------------------------------
// CREATING NEW ELEMENTS
// ------------------------------------------------------

const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div!";
newDiv.style.padding = "10px";

document.body.appendChild(newDiv);
// appendChild() → adds at the end

// INSERT BEFORE
// parent.insertBefore(newNode, referenceNode)

// ------------------------------------------------------
// REMOVING ELEMENTS
// ------------------------------------------------------

newDiv.remove(); // Easiest method

// ------------------------------------------------------
// EVENT HANDLING IN DOM
// ------------------------------------------------------

const button = document.querySelector("button");

button.addEventListener("click", function () {
  alert("Button Clicked!");
});

// INTERVIEW TIP:
// addEventListener() is ALWAYS preferred over onclick attribute
// Because it allows multiple handlers and separation of concerns.

// ------------------------------------------------------
// EVENT OBJECT (Important for interviews)
// ------------------------------------------------------

button.addEventListener("click", function (event) {
  console.log(event.target); // which element triggered the event
  console.log(event.type); // event type
});

// ------------------------------------------------------
// EVENT BUBBLING & CAPTURING (🔥 INTERVIEW TOPIC)
// ------------------------------------------------------
/*
BUBBLING: event moves from inner → outer (default)
CAPTURING: event moves from outer → inner (rare)

Example:
<div id="parent">
  <button id="child">Click</button>
</div>
*/

document.getElementById("parent").addEventListener(
  "click",
  () => console.log("Parent clicked"),
  false // bubbling (default)
);

document
  .getElementById("child")
  .addEventListener("click", () => console.log("Child clicked"), false);

// If third argument is true → capturing phase
// parent listener runs before child listener

// ------------------------------------------------------
// STOP PROPAGATION
// ------------------------------------------------------
document.getElementById("child").addEventListener("click", function (e) {
  e.stopPropagation(); // Stops event bubbling further
  console.log("Child clicked → bubbling stopped");
});

// ------------------------------------------------------
// DOM TRAVERSAL
// ------------------------------------------------------

const element = document.querySelector("#title");

// Parent
console.log(element.parentNode);

// Children
console.log(element.childNodes);

// Next sibling
console.log(element.nextElementSibling);

// Previous sibling
console.log(element.previousElementSibling);

// ------------------------------------------------------
// FORM INPUT HANDLING
// ------------------------------------------------------

const inputBox = document.querySelector("input");

inputBox.addEventListener("input", function () {
  console.log("Current value:", inputBox.value);
});

// ------------------------------------------------------
// ADDING/REMOVING CSS CLASSES
// ------------------------------------------------------

title.classList.add("highlight");
title.classList.remove("highlight");
title.classList.toggle("active"); // useful for dropdowns, animations

/*******************************************************
 * SUMMARY TABLE
 *******************************************************
| Topic                   | Explanation                                      | Example                                |
|-------------------------|--------------------------------------------------|----------------------------------------|
| DOM                     | Representation of HTML as JS objects             | document.body                          |
| Select elements         | Use querySelector, getElementById                | document.querySelector(".box")         |
| Modify content          | textContent, innerText, innerHTML                | title.innerHTML = "<b>Hi</b>"          |
| Modify style            | CSS via JS                                       | title.style.color = "red"              |
| Create elements         | document.createElement()                         | body.appendChild(div)                  |
| Remove elements         | remove()                                         | node.remove()                          |
| Events                  | addEventListener()                               | button.addEventListener("click", fn)   |
| Bubbling/Capturing      | Event flow phases                                | addEventListener("click", fn, true)    |
| stopPropagation         | Prevent event bubbling                           | e.stopPropagation()                     |
| classList               | Add/remove/toggle classes                        | el.classList.toggle("active")          |
| DOM Traversal           | Navigate through tree                            | el.parentNode, el.nextElementSibling   |
*******************************************************/
