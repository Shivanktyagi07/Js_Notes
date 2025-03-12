//******** abstraction in js **********/

class ATM {
  #balance; // Private property (hidden from users)

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Public method (exposes only essential functionality)
  withdraw(amount) {
    if (this.#isValidTransaction(amount)) {
      this.#balance -= amount;
      return `Withdrawal successful! Remaining balance: $${this.#balance}`;
    } else {
      return "Invalid transaction! Insufficient balance.";
    }
  }

  // Private method (hidden from users)
  #isValidTransaction(amount) {
    return amount > 0 && amount <= this.#balance;
  }
}

// Creating an object
const myATM = new ATM(1000);

console.log(myATM.withdraw(500)); // "Withdrawal successful! Remaining balance: $500"
console.log(myATM.withdraw(700)); // "Invalid transaction! Insufficient balance."

// Trying to access private property/method ( Error)
// console.log(myATM.#balance); //  SyntaxError: Private field '#balance' must be declared in an enclosing class
// console.log(myATM.#isValidTransaction(100)); //  SyntaxError

// JavaScript does not support true abstract classes, but we can simulate them using ES6 classes and the throw statement.

class Vehicle {
  constructor(name) {
    if (this.constructor === Vehicle) {
      throw new Error("Abstract classes cannot be instantiated.");
    }
    this.name = name;
  }

  // Abstract method (must be implemented by subclasses)
  start() {
    throw new Error("Method 'start()' must be implemented.");
  }
}

class Car extends Vehicle {
  start() {
    return `${this.name} is starting with a key ignition.`;
  }
}

class ElectricCar extends Vehicle {
  start() {
    return `${this.name} is starting silently with a button press.`;
  }
}

// const vehicle1 = new Vehicle("Generic Vehicle"); //  Error: Abstract classes cannot be instantiated.
const myCar = new Car("Toyota");
console.log(myCar.start()); //  "Toyota is starting with a key ignition."

const myEV = new ElectricCar("Tesla");
console.log(myEV.start()); //  "Tesla is starting silently with a button press."
