// Immediately Invoked Function Expression (IIFE)

// syntax is ()();

(function one(){
    console.log("Hello");
}
)();  //semicolon use to tell the execution is done & it is named IIFE

(() => {
    console.log("hey");
})();