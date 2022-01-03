const buffer = ["hello", "world", "welcome", "to", "javascript", "programming"];
const objectBuffer = [
  { key: "value1" },
  { key: "value2" },
  { key: "value3" },
  { key: "value1" },
];

console.log("buffer ->", buffer);
console.log("objectBuffer ->", objectBuffer);

// Check if the item 'welcome' exists in array
// If item is not found undefined is returned
// find() takes one argument as parameter and it is a function
// It is better to go with anonymous function
let result = buffer.find((item) => {
  return item === "welcome";
});
console.log(`result ? ${result}`);

// Check the index of 'javascript' in the array
// If item is not found -1 is returned as index value
result = buffer.findIndex((item) => {
  return item === "javascript";
});
console.log(`javascript idx ? ${result}`);

console.log("\n");

// Check if an object in array with value exists
result = objectBuffer.find((item) => {
  return item.key === "value1";
});
console.log("key.value === value1 ?", result);

// Find the index of object for specified key
// Returns the first index only
const idx = objectBuffer.findIndex((item) => {
  return item.key === "value1";
});
console.log("IDX", idx);

// This approach will not work
// This is because the searched object is created at new memory location
console.log(objectBuffer.indexOf({ key: "value1" }));

// The value returned by find() is the same value stored in the array
// This means the memory address is passed instead of creating a new one in memory
const tempResult = objectBuffer.find((item) => {
  return item.key === "value3";
});
console.log("key.value === value3 ?", tempResult);

console.log("\n");

// Modifying tempResult will also modify the orignal array contents
// This is because tempResult holds the actual reference to the array item; not a copy
tempResult.key = "updated";
console.log(tempResult);
console.log(objectBuffer);

console.log("\n");

// This returns true or false based on presence or absence
console.log(`buffer.includes("javascript") ? ${buffer.includes("javascript")}`);
console.log(`buffer.includes("python") ? ${buffer.includes("python")}`);

// Does not work as expected with objects
console.log(
  `objectBuffer.includes("{key: "updated"}") ? ${objectBuffer.includes({
    key: "updated",
  })}`
);

console.log("\n");

const prices = [10.99, 21.2, 5.99, 0.99, 20.0, 15.5, 8.5, 9.99];
const tax = 0.18;
const finalPrices = [];
const finalPricesObject = [];

// Process every element of the array
// Does not return a new array but original array also unchanged
prices.forEach((price) => {
  finalPrices.push(price * (1 + tax));
});
console.log(finalPrices);

// Access the index of individual elements
prices.forEach((price, idx) => {
  const object = { index: idx, price: price, finalPrice: price * (1 + tax) };
  finalPricesObject.push(object);
});
console.log(finalPricesObject);

console.log("\n");

// Processing every array element and converting to object and storing in new array
// This can be achieved directly using map() function
// map() always returns a new array; original array remains unchanged
const priceMap = prices.map((price, idx) => {
  const object = { index: idx, price: price, finalPrice: price * (1 + tax) };
  return object;
});
console.log(priceMap);
console.log(`priceMap === prices ? ${priceMap === prices}`);

console.log("\n");

const stringArray = ["hello", "world", "my", "name", "is", "anish", "pal"];
const numberArray = [90, 10, -19, 12, 11, 401, 100, 1, -294, 0, 57];

// Creating deep copies of number array for later use
const buffer1 = numberArray.slice();
const buffer2 = numberArray.slice();

// By default sort converts everything into string and then sorts
// Sorting is an in place operation; changes are applied to the array directly
console.log("original", stringArray);
console.log("sorted", stringArray.sort());
console.log("original", stringArray);

console.log("\n");

// This will not yeild expected results as numbers are first converted to strings
console.log("original", numberArray);
console.log("sorted", numberArray.sort());
console.log("original", numberArray);

console.log("\n");
console.log("original", buffer1);

// To sort numbers correctly we have to use a function and define the rules ourselves
// This will sort the number in ascending order and sorting is inplace
const sortedPrices = buffer1.sort((i, j) => {
  return i > j ? 1 : i === j ? 0 : -1;
});
console.log("sorted", sortedPrices);

// The following will sort the numbers in descending order
const reverseSortedPrices = buffer2.sort((i, j) => {
  return i > j ? -1 : i === j ? 0 : 1;
});
console.log("reverse sorted", reverseSortedPrices);
console.log("\n");

// Filter() is used to filter out elements from an array based on a certain condition
// This method returns a new array with elements that satisfied the condition
// Changes are not inplace therefore, the original array remains unchanged
const numbers = [
  10, 20, 31, 5, -10, 0, -81, 45, 12, 46, -73, -732, 1092, -100, 47, -87, 56,
];

// Filter out the odd numbers from array
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Filter out the even numbers from array
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// Filter out the negative numbers from array
const positiveNumbers = numbers.filter((number) => number >= 0);

// Filter out the positive numbers from array
const negativeNumbers = numbers.filter((number) => number < 0);

console.log("numbers", numbers);
console.log("evenNumbers", evenNumbers);
console.log("oddNumbers", oddNumbers);
console.log("positiveNumbers", positiveNumbers);
console.log("negativeNumbers", negativeNumbers);
