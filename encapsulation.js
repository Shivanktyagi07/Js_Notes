class BankAccount {
  // Private fields (only accessible inside the class)
  #accountNumber;
  #balance;

  constructor(accountNumber, balance) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
  }

  // Public method to get account details
  getAccountDetails() {
    return `Account Number: ${this.#accountNumber}, Balance: $${this.#balance}`;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposited $${amount}. New Balance: $${this.#balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  // Public method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrew $${amount}. Remaining Balance: $${this.#balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }
}

// Creating an object of BankAccount
const myAccount = new BankAccount("123456789", 1000);

console.log(myAccount.getAccountDetails()); //  Account Number: 123456789, Balance: $1000
console.log(myAccount.deposit(500)); //  Deposited $500. New Balance: $1500
console.log(myAccount.withdraw(300)); //  Withdrew $300. Remaining Balance: $1200

// Trying to access private fields directly ( Error)
// console.log(myAccount.#balance); //  SyntaxError: Private field '#balance' must be declared in an enclosing class
// console.log(myAccount.#accountNumber); //  SyntaxError

// *********USING GETTER AND SETTER FUNCTION *********
class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  // Getter for password (not returning actual password for security)
  get password() {
    return "Access Denied! Cannot retrieve password.";
  }

  // Setter for password (validating before updating)
  set password(newPassword) {
    if (newPassword.length >= 6) {
      this.#password = newPassword;
      console.log("Password updated successfully!");
    } else {
      console.log("Password must be at least 6 characters long.");
    }
  }
}

const user1 = new User("JohnDoe", "secret123");

console.log(user1.password); // "Access Denied! Cannot retrieve password."
user1.password = "newPass"; // "Password must be at least 6 characters long."
user1.password = "securePass123"; //  "Password updated successfully!"
