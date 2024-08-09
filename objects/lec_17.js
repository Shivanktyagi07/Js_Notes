const User = {}

User.name = "Shivnak"
User.age = " 20"
User.isLoggedIn = false

// console.log(User);

//object into object:
const secondUser = {
    email : "user@gmail.in",
    userName : {
        fullName : {
            firstName : "Shivank",
            lastName : "Tygai"
        }
    }
}

// console.log(secondUser);

console.log(secondUser.userName.fullName.lastName);  //this is called nesting for accessing the values of nested objects:


//combine two or morew objects:
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = { obj1 , obj2}
console.log( obj3 );

const obj4 = Object.assign({}, obj1, obj2) // cuz assign mewthod return a new object:
//here {} => targer & other values as Source : like this assign(target, source)

console.log(obj4);

//Now we can access all the values of combined objects by [] method:
console.log(obj4[1]);

//or we can combine also spread operaotr:
const obj5 = {...obj1, ...obj2};
console.log(obj5);


