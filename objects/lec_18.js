// destructuring of object:

const course = {
    courseName : "javascript",
    instructor : "Shivnak ",
    price : "999"
}

// console.log(course.instructor);

const {courseName} = course
console.log(courseName);

const {courseName : Instructor} = course //we can also change the name of properties in distructuring of objects:
console.log(Instructor); // here courseName & Instructor both results be same:

