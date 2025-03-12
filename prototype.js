let computer = { cpu: 12 };

let lenovo = { screen: "HD", __proto__: computer };

let tomHardware = {};

console.log(`lenovo`, lenovo.__proto__);

// **************************************

let cars = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, cars);

console.log(`tesla`, Object.getPrototypeOf(tesla));

// Object.hasOwn(object, propertyName) checks if the property directly belongs to the object and not inherited
console.log(Object.hasOwn(cars, "tyres"));
console.log(Object.hasOwn(tesla, "tyres"));

// *******PROROTYPE CHAINING*************
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `my name is ${this.name}`;
};

let obj = new Person("Shivank");
console.log(obj.greet());

console.log(obj.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

// john → Person.prototype → Object.prototype → null
