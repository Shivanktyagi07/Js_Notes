// // ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// // behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };
// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const tea = new User("tea", "tea@gmail.com", "123");

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

// *************************************
// Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

// Child Class - Dog (Overriding speak method)
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls parent constructor
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks!`;
  }
}

// Child Class - Cat (Inherits without overriding)
class Cat extends Animal {}

// Child Class - Parrot (Overrides but calls parent method)
class Parrot extends Animal {
  speak() {
    return `${super.speak()} But also mimics words!`;
  }
}

// Creating Objects
const genericAnimal = new Animal("Some Animal");
console.log(genericAnimal.speak()); // "Some Animal makes a noise."

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.speak()); // "Buddy barks!"
console.log(myDog.breed); // "Golden Retriever"

const myCat = new Cat("Whiskers");
console.log(myCat.speak()); // "Whiskers makes a noise." (Inherited from Animal)

const myParrot = new Parrot("Coco");
console.log(myParrot.speak()); // "Coco makes a noise. But also mimics words!"

// Checking Prototype Chain
console.log(myDog.__proto__ === Dog.prototype); // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)
