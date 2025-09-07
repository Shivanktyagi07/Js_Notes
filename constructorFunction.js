// ************ Constructor Functions in JavaScript ************ //

//  Constructor function = a blueprint to create multiple similar objects
// Naming convention: Function name starts with a capital letter
//  Used with the `new` keyword

function Person(name, age) {
  this.name = name; // 'this' refers to the new object
  this.age = age;
}

let newPerson = new Person("Shivank", 22);
console.log(newPerson); // Output: { name: 'Shivank', age: 22 }

//  Another Example: Car constructor

function Car(name, model) {
  this.name = name;
  this.model = model;
}

let myCar = new Car("Tata", "Safari");
console.log(myCar); // Output: { name: 'Tata', model: 'Safari' }

//  Prevent constructor call without `new` keyword using new.target

function Tea(type) {
  if (!new.target) {
    throw new Error("You must use 'new' with Tea()");
  }
  this.type = type;
  this.description = function () {
    return `Take a cup of ${this.type}`;
  };
}

let newTea = new Tea("lemonTea");
console.log(newTea.description()); // Output: Take a cup of lemonTea

// ❌ If you call Tea without `new`, it throws an error
// let badTea = Tea("lemonTea"); // Error: You must use 'new' with Tea()
