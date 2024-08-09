// functions
 function addTwoNumbers ( num1, num2){  // num1 & num2 are called parameters:
     console.log(num1 + num2);
 }

 addTwoNumbers(4, 7) // function call & 3,4 called as argument
 const ans = addTwoNumbers(3,5)

 console.log("ans :", ans); // it gives undefined value cuz in above function we can't return any value we simply log the vlaue that's why there is no value store in ans variable
 
 function multiplyNumbers (num1, num2){
    return num1*num2
    console.log("hello"); //this can't be execute cuz of return satetment:
 }

 const newAns = multiplyNumbers(4,7);
 console.log(newAns); // here newAns have some valuecuz we return value in above function:

 