//rest operator : use to take multiple arguments in a function:
// rest & spread opreators both are same but use as their different useCase:

function calaculaytePrice (...num){
    return num
}


// function calaculaytePrice (val1, val2, ...num)  // here 100 & 200 goes into val1 & val2 and rest of into nums:
//  {   
//     return num
// }

const result = calaculaytePrice(100, 200, 300, 400, 500) 
console.log(result);

//array as a function:
const myArr = [10, 20, 30 ,40]

function arrayAsFunction (getArray){
    return getArray[2]
}

console.log(arrayAsFunction(myArr));