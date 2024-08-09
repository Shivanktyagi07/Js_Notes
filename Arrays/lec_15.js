const myHeros = ["shaktiman", "shreeRam", "arjun"]
const heros = ["bheem", "karn", "hanuman"]

// console.log(myHeros);
// console.log(heros);

// myHeros.push(heros); 
//push method : directly push into existing array

// console.log(myHeros);

const newHeros = myHeros.concat(heros) //this method return a new array 

console.log(newHeros);

//Spread operator: same as concat
const newHeros2 = [...myHeros, ...heros]
console.log(newHeros2);

//flat method: multiple arrays ko single array me convert krdeta hain
const anotherArray = [1,2,[3,4,5],6,7,[10,13,15]]
console.log(anotherArray);
const anotherArray2 = anotherArray.flat(Infinity)  //yha pr Infinty ki jagah exact depth bhi de skte hain mtlb kitne array hain inside an array

console.log(anotherArray2);


console.log(Array.isArray("Shivank"));

//*********interview question*******
 
console.log(Array.from("Shivank"));  //from method convert into array
console.log(Array.from({name :"Shivank"})); //here we ned to tell that iska keys ka ya value ka kiska array bnau  directl convert nhi krta that's why is gives empty array:


let var1 = 100;
let var2 = 200;
let var3 = 300;
console.log(Array.of(var1, var2, var3));  // of method converts multiple elements or variables into array 