// Object declearation or object literals:

const myList = Symbol("list1")

const User ={
    name : "Shivank ",
    email : "tygai@gmail.com",
    isLoggedIn : true,
    [myList] : "myList1", // here we use symbol as a key in object ***interivew question : use symbol as a key in object:****
    location : "meerut",
    age : "18",
    "last name" : "Tygai" //this property can't access by . (dot) method: that's why we use [] method as discusss below :
}

console.log(User.email); // one way to access the properties of objects:
console.log(User["email"]); // another  way to access the properties of objects & this is the best way:

console.log(User["last name"]);

console.log(User[myList]);  // same method to access symbol as a key :

User.age = "20" // way to overWrite the values of object
console.log(User.age);


// by using freeze method we can't overwrite the vale of object:

//Object.freeze(User) 

// User.age = "30" 
// console.log(User.age);

// console.log(User);

// simple greeting msg:
User.greeting = function(){
    console.log("Hello Mr.");
}
console.log(User.greeting());

User.greetingTwo = function() {
    console.log(`Hello mr. ${this.name}`);  // string manipulation:
}

console.log(User.greetingTwo());
