// ------------------------
// OBJECT DESTRUCTURING IN JS
// ------------------------

// Object destructuring allows us to extract properties from objects and assign them to variables
// in a more concise and readable way instead of accessing each property individually.

// Example object:
const course = {
  courseName: "JavaScript",
  instructor: "Shivnak",
  price: "999",
  duration: "3 months",
  level: "Beginner",
};

// ------------------------
// BASIC DESTRUCTURING
// ------------------------
// We can extract properties directly into variables using curly braces {}:

const { courseName, instructor, price } = course;

console.log(courseName); // "JavaScript"
console.log(instructor); // "Shivnak"
console.log(price); // "999"

// ------------------------
// RENAMING VARIABLES
// ------------------------
// We can rename the extracted property while destructuring using ':'
const { courseName: courseTitle, instructor: teacherName } = course;

console.log(courseTitle); // "JavaScript"
console.log(teacherName); // "Shivnak"

// Note: The original property names still exist in the object, this only renames for the variable

// ------------------------
// DEFAULT VALUES
// ------------------------
// If a property does not exist in the object, we can set a default value
const { duration, level, rating = "5 stars" } = course;

console.log(duration); // "3 months"
console.log(level); // "Beginner"
console.log(rating); // "5 stars" (default value since not present in object)

// ------------------------
// NESTED OBJECT DESTRUCTURING
// ------------------------
// If an object has nested objects, we can destructure them as well

const courseDetails = {
  courseName: "JavaScript",
  instructor: "Shivnak",
  meta: {
    duration: "3 months",
    level: "Beginner",
  },
};

const {
  meta: { duration: courseDuration, level: courseLevel },
} = courseDetails;

console.log(courseDuration); // "3 months"
console.log(courseLevel); // "Beginner"

// ------------------------
// DESTRUCTURING IN FUNCTION PARAMETERS
// ------------------------
// We can destructure objects directly in function parameters
function printCourse({ courseName, instructor, price }) {
  console.log(
    `Course: ${courseName}, Instructor: ${instructor}, Price: ${price}`
  );
}

printCourse(course);
// Output: Course: JavaScript, Instructor: Shivnak, Price: 999

// ------------------------
// SUMMARY
// ------------------------
// 1. Use {} to extract properties from an object
// 2. Can rename variables using ':'
// 3. Can set default values for missing properties
// 4. Can destructure nested objects
// 5. Useful in function parameters for cleaner code
