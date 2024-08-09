// Array declearation:

const myArrays =[1, 2, 3, 4, 5]

// console.log(myArrays[0]);
// console.log(myArrays[1]);
// console.log(myArrays[2]);
// console.log(myArrays[3]);
// console.log(myArrays[4]);


//Array methods:

// myArrays.push(6)
// myArrays.push(8)
// console.log(myArrays);

// myArrays.pop()
console.log(myArrays);
console.log(myArrays.length);

console.log(myArrays.includes(9));//it checks the value is present in array or not:

console.log(myArrays.indexOf(3));

const arr = myArrays.join() //this method change the object arry into string:
console.log(arr);
console.log(typeof arr);
console.log(typeof myArrays);


//slice or splice:

//slice can't manipulate the original array:
//splice manipulate the original array:

console.log("A", myArrays);

const myarr1=myArrays.slice(1,3)
console.log(myarr1);

console.log("B", myArrays);

const myarr2=myArrays.splice(1,3)
console.log(myarr2);

console.log("C", myArrays);
