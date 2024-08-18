const promiseFunction = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("task is completed");
            resolve(); 
        }, 2000);
})

promiseFunction.then(() => {
    console.log("Promise completed");
    
})

//Another method:
new Promise(function( resolve, reject){
    setTimeout(() => {
        console.log("task 2 is completed");
        resolve(); 
    }, 2000);
}).then(function() {
    console.log("Another 2nd promise is completed")
})

//Another Promise:
 new Promise(function( resolve, reject){
    setTimeout(() => {
        console.log("task 3 is completed");
        resolve({
            name: "Shivank Tyagi",
            gender: "Male"
        }); 
    }, 2000);
}).then(function(user) {
    console.log(user)
})

//Another Promise;
const PromiseFour = new Promise(function( resolve, reject){
    setTimeout(() => {
       let error = false
       if (!error) {
        resolve({
            name: "Shivank Tyagi",
            gender: "Male"
        }); 
       }else{
        reject("ERROR: Something went wrong")
       }
    }, 2000);
})

PromiseFour.then((user) => {
    console.log(user)
    return user.name
}).then((name) => {
    console.log(name);
    
}).catch((err) => {
    console.log(err);
    
})

//Another Promise:
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
