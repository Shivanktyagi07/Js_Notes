// ************ Polymorphism in JavaScript ************ //

//  Polymorphism = "Many forms"
// Means: Same method name behaves differently based on the object or class

//  Achieved using: Method Overriding (in class inheritance)
// Note: JavaScript doesn't support traditional method overloading like Java/C++

class BankAccount {
  #balance; // Private property

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Public method (can be overridden by subclasses)
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposited $${amount}. New Balance: $${this.#balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  // Public method (Polymorphic - can be overridden)
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrew $${amount}. Remaining Balance: $${this.#balance}`;
    } else {
      return "Invalid transaction! Insufficient balance.";
    }
  }

  // Getter to access balance safely (Abstraction - hides actual field)
  getBalance() {
    return this.#balance;
  }

  // Protected method for subclasses to modify balance
  _modifyBalance(amount) {
    this.#balance += amount;
  }
}

// ==========================
// Inheritance & Polymorphism
// ==========================
class SavingsAccount extends BankAccount {
  constructor(initialBalance, interestRate) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  // Overriding withdraw method (Polymorphism)
  withdraw(amount) {
    if (amount > 0 && amount <= 0.9 * this.getBalance()) {
      // Now using getBalance()

      return super.withdraw(amount);
    } else {
      return "Withdrawal limit exceeded! You can withdraw up to 90% of your balance.";
    }
  }
  

  applyInterest() {
    const interest = (this.interestRate / 100) * this.getBalance();
    this._modifyBalance(interest); // Using protected method
    return `Interest applied! New Balance: $${this.getBalance()}`;
  }
}

class CurrentAccount extends BankAccount {
  constructor(initialBalance, overdraftLimit) {
    super(initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  // Overriding withdraw method (Polymorphism)
  withdraw(amount) {
    if (amount > 0 && amount <= this.getBalance() + this.overdraftLimit) {
      return super.withdraw(amount);
    } else {
      return `Overdraft limit exceeded! Max allowed: $${
        this.getBalance() + this.overdraftLimit
      }`;
    }
  }
}

// ==========================
// Polymorphism in Action
// ==========================
const savings = new SavingsAccount(1000, 5);
console.log(savings.deposit(500)); //  "Deposited $500. New Balance: $1500"
console.log(savings.withdraw(1400)); //  "Withdrawal limit exceeded!"
console.log(savings.withdraw(500)); //  "Withdrew $500. Remaining Balance: ..."
console.log(savings.applyInterest()); //  "Interest applied!"

const current = new CurrentAccount(2000, 500);
console.log(current.withdraw(2200)); //  Uses overdraft
console.log(current.withdraw(2600)); //  "Overdraft limit exceeded!"
