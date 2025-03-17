//  PROTOTYPE IN JAVASCRIPT - A COMPLETE GUIDE

//  1. WHAT IS A PROTOTYPE?
// In JavaScript, every object has a hidden property called `__proto__` that points to its prototype.
// A prototype is an object from which other objects inherit properties and methods.

// Example of prototype inheritance
let computer = { cpu: 12 };
let lenovo = { screen: "HD", __proto__: computer };
console.log("lenovo", lenovo.__proto__); // Outputs: { cpu: 12 }

//  WHY USE PROTOTYPES?
// JavaScript uses prototypes to enable inheritance between objects without using traditional classes.

// **************************************

//  2. SETTING PROTOTYPES MANUALLY
let cars = { tyres: 4 };
let tesla = { driver: "AI" };
Object.setPrototypeOf(tesla, cars);
console.log("tesla", Object.getPrototypeOf(tesla)); // { tyres: 4 }

// Object.hasOwn(object, propertyName) checks if the property directly belongs to the object and not inherited
console.log(Object.hasOwn(cars, "tyres")); // true
console.log(Object.hasOwn(tesla, "tyres")); // false (inherited property)

//  PROTOTYPE CHAINING - How objects inherit properties and methods
function Person(name) {
  this.name = name;
}

// Adding a method to Person's prototype
Person.prototype.greet = function () {
  return `My name is ${this.name}`;
};

let obj = new Person("Shivank");
console.log(obj.greet()); // "My name is Shivank"

// HOW PROTOTYPE CHAINING WORKS
console.log(obj.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)

// Prototype chain:
// obj → Person.prototype → Object.prototype → null
