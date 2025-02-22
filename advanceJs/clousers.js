//CLOUSER IN JAVASCRIPT:

function outer(){
    let userName = "abc1"
    function inner()
    {
        console.log(userName);
        let user = "abc2"
    }
    function innerthree()
    {
            // console.log(user);
            console.log(userName);
          
    }
       innerthree(); 
       inner()
}
outer();
// console.log(userName);


//LEXICAL SCOOPING:

function fun(){
    const name = "xyz1"
    function funTwo()
    {
        console.log(name);
    }
    return funTwo;  //yha pe only functwo function hi rerurn nai hota h is case me pura outer bhi return hota h cuz of it's lexical scooping
}


const res = fun();
res();

