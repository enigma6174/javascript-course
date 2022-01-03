const numbers = [1, 2, 3, 4, 5, 6];

// Reduce method is used to reduce an array to a single number
// It takes 2 arguments - callback function to calculate and initial value of operation
const sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);

// Reduce method to calculate the product of the numbers in array
// The starting value is different in this case
const product = numbers.reduce((previousValue, currentValue) => {
  return previousValue * currentValue;
}, 1);

console.log("numbers", numbers);
console.log("sum(numbers)", sum);
console.log("product(numbers)", product);

console.log("\n");

// Example_1
// Map() function can also be used to iterate over an array of objects
// We can use Reduce() on the result of Map() to get the sum
const array1 = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const buffer1 = array1.map((obj) => obj.price);
const result1 = buffer1.reduce((sumVal, curVal) => sumVal + curVal, 0);

console.log("originaArray", array1);
console.log("transformedArray", buffer1);
console.log("result1", result1);

// Example_2
// Alternative and shorter approach to Example_1
const array2 = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const result2 = array2.reduce((sumVal, curVal) => sumVal + curVal.price, 0);
console.log("result2", result2);

// Example_3
// We can get the above results using the process of method chaining
// Method chaining allows us to chain multiple methods together by calling them directly on the previous
const array3 = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const result3 = array3
  .map((obj) => obj.price)
  .reduce((sumVal, curVal) => sumVal + curVal, 0);
console.log("result3", result3);

console.log("\n");

const data1 = "the quick; brown; fox jumps; over!!! the lazy! dog!";
const data2 = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

// Use the Array.split() method to separate a string into an array of items
// Argument passed inside the function is the character where the split happens
// When no argument is passed it will take the whole string as a single array item
const split1 = data1.split();
const split2 = data1.split(";");
const split3 = data1.split("!");

console.log("original string", data1);
console.log(split1);
console.log(split2);
console.log(split3);

console.log("\n");

// Use the Array.join() method to combine multiple array items
// Array items are combined into a single string using the separator specified
// If no separator is specified default is ','
const join1 = data2.join();
const join2 = data2.join(" ");
const join3 = data2.join(".");

console.log("original array", data2);
console.log(join1);
console.log(join2);
console.log(join3);

console.log("\n");

const temperatureValues = [100, 99.99, 98.4, 101.5, 96.7, 98, 102.4];

// Use spread operator to create deep copy of an array
const temperatureValuesCopied = [...temperatureValues];
temperatureValues.push(99.56, 97.4);

console.log("temperatureValues", temperatureValues);
console.log("temperatureValuesCopied", temperatureValuesCopied);

console.log("\n");

// Spread operator is useful where we cannot pass arrays
console.log(`MAX TEMPERATURE ${Math.max(...temperatureValues)}`);
console.log(`MIN TEMPERATURE ${Math.min(...temperatureValues)}`);

console.log("\n");

// Spread operator does not make a copy of the objects inside an array
const objects = [
  { name: "Anish", age: 29 },
  { name: "Max", age: 22 },
  { name: "Lewis", age: 33 },
];
const objectsCopy = [...objects];

// Modify the original array
// This will not reflect in the copied array
/**
 * objects.push({ name: "Seb", age: 42 });
 * console.log("objects", objects);
 * console.log("objects copy", objectsCopy);
 **/

// Modify the original array element and copied array element
// Changes will be visible in both arrays as the objects in both array are referenced with same address
/**
 * objects[0].age = 69;
 * objectsCopy[1].name = "Verstappen";
 * console.log("objects", objects);
 * console.log("objects copy", objectsCopy);
 */

const nameArray = ["John", "Doe"];

// Split the contents of the array into variables
const [firstName, lastName] = nameArray;

console.log(nameArray);
console.log(firstName, lastName);

console.log("\n");

const userData = ["John", "Doe", "Male", 35, "New York", "Programmer"];

// Only the variables specified will be destructured
const [var1, var2, var3] = userData;
console.log(userData);
console.log(var1, var2);
console.log(var3);

console.log("\n");

// To pull out all the remaining items of the array into a single variable, use rest operator
// Rest operator is same as spread operator but used on the LHS of assignment operator
const [fName, lName, ...otherInformation] = userData;
console.log(userData);
console.log(fName, lName);
console.log(otherInformation);
