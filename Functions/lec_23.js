const user = {
    userName : "Shivank",
    price : "555",
    welcomeText : function (params) {
        console.log(`${this.userName}, welcome to the site`);
        console.log(this); // (this) => it tells about the current context
    }
}
//  user.welcomeText()
//  user.userName = "Tyagi"
//  user.welcomeText

//console.log(this);
 // (this)=> it give's an empty {} context cuz we use  this globally 

//but when we log (this) on browser then it shows windows as golbal context but in this, there is not global context right now:

const one = function()
{
    const username = "Shivank"
    console.log(this.username); // this will give undefined
    console.log(this); //this will give some result:
}

one()

// functions me this operator kaam hi nai krta hia , 

const two = () =>
{
    const username = "Shivank"
    console.log(this.username); // this will give undefined
    console.log(this); //this will give some result:
}

one()

// *********Arrow functions**********

const arrow = (num1, num2) => {
    return num1+num2  //curly brackets me return likhna hi pdega (explicitly) cuz it's must contain multiple lines of code :
}

const arrow2 = (num1, num2) => (num1 + num2)
// generally we use () when code is one liner & there is no need of return statement in these ();

const object = () => ({user: "Shivank"})
// objects bhi yhi () use krte hain
 console.log(object());
