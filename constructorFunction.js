function person(name, age) {
  this.name = name; //this is reference of newly created objects:
  this.age = age;
}

function car(name, model) {
  this.name = name;
  this.model = model;
}

let myCar = new car("Tata", "Safari");
console.log(myCar);

let newPerson = new person("Shivank", 22);
console.log(newPerson);

function tea(type) {
  if (!new.target) {
    throw new Error("you don't use new keyword !");
  }
  this.type = type;
  this.description = function () {
    return `take a cup of ${this.type}`;
  };
}

let newTea = new tea("lemonTea");
// let newTea = tea("lemonTea");
console.log(newTea.description());
