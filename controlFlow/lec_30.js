const items = [ "js", "py", "java", "ruby"]

 const values = items.forEach( (item) => {
    return item
} )

//console.log(values); // gives undefined cuz foreac loop not return any value: 

//********filter******** *
//filter always return values:

const nums = [1,2,3,4,5,6,7,8,9,10]
const result = nums.filter( (num)=> num>4 )
//console.log(result);

const ans = nums.filter( (num)=> {
     return num>4 // in curly braces we need to write return keyword  eplicitly cuz of it's scope then it return value otherwise it gives undefined
} )
//console.log(ans);


//**********chaining*********
const myNums = [ 1,2,3,4,5,6,7,8,9,10]
const res = myNums
            .map( (num) => num*10 )
            .map( (num) => num+2 )
            .filter( (num)  => num>=50)

console.log(res);

/***********Reduce method*********** */

const Nums = [1,2,3,4,5]
const result2 = Nums.reduce( (acc, currVal) => {
      //console.log(`acc : ${acc}, currValue : ${currVal}`);
          return acc+currVal
} )

console.log(result2);