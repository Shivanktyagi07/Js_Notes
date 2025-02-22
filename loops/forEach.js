let array = [1, 2, 3, 4, 5];

// here we give only value :
array.forEach((num) => {
  console.log(num);
});

//here we give value an index:
array.forEach((num, index) => {
  console.log(`Index : ${index} ; value : ${num}`);
});

array.forEach((num, index, arr) => {
  console.log(`Index : ${index} ; value : ${num} ; complete Arrays : ${arr}`);
});

let result = array.forEach((num, index, arr) => {
  console.log(`Index : ${index} ; value : ${num} ; complete Arrays : ${arr}`);
});
console.log(result); //it give's undefined value cuz forEach method doesn't return any value

//we use some() to stop execution of forEach method cuz break isn't supported in foreach loop:
array.some((num) => {
  console.log(num);
  return num === 3; // Stops iteration when num is 3
});
