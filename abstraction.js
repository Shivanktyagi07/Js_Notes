/***************  Abstraction in JavaScript  *****************

📌 What is Abstraction?
--------------------------------------------------------------
- Abstraction is the process of hiding implementation details 
  and exposing only the essential features to the user.
- The user interacts with only "what an object does", 
  not "how it does it".
- Example: ATM → You only see options like Withdraw, Deposit, 
  Check Balance (not how internally the money is deducted).

💡 In JavaScript:
- JavaScript does not support true abstraction like Java or C# 
  (where abstract classes exist).
- BUT abstraction can be simulated using:
  1. Private fields & methods (#)
  2. Public methods (to expose only required functionality)
  3. Throwing errors in base classes to force method overriding.

**************************************************************/

/*************** Example 1: Using Private Fields **************/

class ATM {
  #balance; // ✅ Private property (hidden from outside)

  constructor(initialBalance) {
    this.#balance = initialBalance; // Initialize balance
  }

  // ✅ Public method (user-facing functionality)
  withdraw(amount) {
    if (this.#isValidTransaction(amount)) {
      this.#balance -= amount;
      return `Withdrawal successful! Remaining balance: $${this.#balance}`;
    } else {
      return "Invalid transaction! Insufficient balance.";
    }
  }

  // ❌ Private method (internal logic, hidden from users)
  #isValidTransaction(amount) {
    return amount > 0 && amount <= this.#balance;
  }
}

// ✅ Creating an object
const myATM = new ATM(1000);

console.log(myATM.withdraw(500)); // "Withdrawal successful! Remaining balance: $500"
console.log(myATM.withdraw(700)); // "Invalid transaction! Insufficient balance."

// ❌ Trying to access private fields → ERROR
// console.log(myATM.#balance); // SyntaxError
// console.log(myATM.#isValidTransaction(100)); // SyntaxError

/*
📌 Here:
- User can only use `withdraw()` method.
- Balance check logic & validation are hidden (abstracted).
- This ensures **data security + simplicity**.
*/

/*************** Example 2: Abstract Class Simulation *********/

class Vehicle {
  constructor(name) {
    // ❌ Prevent direct object creation
    if (this.constructor === Vehicle) {
      throw new Error("Abstract classes cannot be instantiated.");
    }
    this.name = name;
  }

  // ❌ Abstract method (forces child class to implement)
  start() {
    throw new Error("Method 'start()' must be implemented.");
  }
}

// ✅ Subclass 1: Car
class Car extends Vehicle {
  start() {
    return `${this.name} is starting with a key ignition.`;
  }
}

// ✅ Subclass 2: Electric Car
class ElectricCar extends Vehicle {
  start() {
    return `${this.name} is starting silently with a button press.`;
  }
}

// const vehicle1 = new Vehicle("Generic Vehicle"); // ❌ Error

const myCar = new Car("Toyota");
console.log(myCar.start()); // "Toyota is starting with a key ignition."

const myEV = new ElectricCar("Tesla");
console.log(myEV.start()); // "Tesla is starting silently with a button press."

/*
📌 Here:
- `Vehicle` acts like an abstract class.
- You cannot create `Vehicle` object directly.
- Each child (Car, ElectricCar) MUST define `start()` method.
- This enforces a contract → abstraction of "every vehicle must start"
  but leaves "how it starts" to the subclass.
*/

/*************** SUMMARY NOTES ****************

✔ Abstraction hides complexity and shows only essential features.
✔ In JS, abstraction is achieved by:
   - Private fields & methods (#)
   - Public methods as the only access point
   - Simulating abstract classes using errors in base class

👉 Real-life analogy: 
   - ATM → User presses "Withdraw"
   - User doesn’t know the bank’s internal validations, 
     database checks, or transaction logs.

**************************************************************/
