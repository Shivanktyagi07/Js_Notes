//  for of loop

const arr = [ 1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
}

//map: => it prints unique values ; 
// here we use india 2 times but it prints only one time 
const map = new Map()
map.set('IN', 'India')
map.set('AM', 'America')
map.set("UP", 'UttarPradesh')

//console.log(map);

//map in for of loop:
for (const key of map) {
  //  console.log(key); // returns values in array format:
}

for (const [key, value] of map) { //destructuring 
    //console.log(key, value);
}

//************for-each loop *********/

const items = ["js", "cpp", "py", "java"]
items.forEach( function (val) {
    //console.log(val);
} )

const coding = [
    {
        fileName : "java",
        filePath : "js"
    },

    {
        fileName : "javaScript",
        filePath : "js"
    },

    {
        fileName : "python",
        filePath : "py"
    },
]

coding.forEach( (item)=> {
    console.log(item.fileName); // from this way we can acess the object from array:
} )

