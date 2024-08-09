// Function Scoping:

function one ()
{
 const name = "Shivank"

 function two()
  {
    const lastName = "Tyagi"
    console.log("Outer Function",name); // inner function can access the values of outer function:
    console.log("Inner function :", lastName);
  }

  //console.log(lastName); //lastName can't access outside the func cuz of it';s scope: it gives error:
   
  two();
}

one();


// **************hoisting************
console.log(addone(5))

function addone (num){
    return num+2
}
 // in this above function execution is done without any error


// but this function execution gives ab error: that is called hoisting 
console.log(addTwo);

const addTwo = function (num){
  return num+3;
}

