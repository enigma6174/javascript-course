// Basic array initialization
const array1 = [1, 2, 3.5, -0.044, 2.3e3, 45e-2];
console.log(array1);

// Another way to initialize an array
const array2 = Array(5, 2);
console.log(array2);

// This will create an empty array of length 5
// Default initialized values will be undefined
const array3 = Array(5);
console.log(array3);
console.log(array3[0]);

// Alternative way to create array
const array4 = Array.of(1, 2);
console.log(array4);
console.log(array4[0]);

// Does not work like Array(n)
// Array.of(i) will create an array with a single element i
const array5 = Array.of(5);
console.log(array5);
console.log(array5[0]);

// Get a list of all li items in DOM
// This returns an array-like object
const listItems = document.querySelectorAll("li");
console.log(listItems);

console.log("After Conversion");

// Convert the array-like object to JavaScript array
// Array.from() is used to convert iterables into arrays
const listItemsArray = Array.from(listItems);
console.log(listItemsArray);

const moreListItems = document.getElementsByTagName("li");
console.log(moreListItems);

console.log("After Conversion");

const moreListItemsArray = Array.from(moreListItems);
console.log(moreListItemsArray);

console.log("\n");

// Array of mixed items
const mixedArray = [
  "hello",
  "world",
  34,
  0.011,
  false,
  null,
  ["another", "array"],
  { key: "value" },
  { key: "value" },
  [{ key1: "value1", key2: "value2" }],
];
console.log("mixedArray", mixedArray);
console.log(`mixedArray.length : ${mixedArray.length}`);
console.log("mixedArray[6]", mixedArray[6]);
console.log("mixedArray[7]", mixedArray[7]);
console.log("mixedArray[8]", mixedArray[8]);
console.log("mixedArray[9]", mixedArray[9]);
console.log("mixedArray[6][0]", mixedArray[6][0]);
console.log("mixedArray[9][0]", mixedArray[9][0]);

console.log("\n");

// Print the elements of 1D array
const array1D = [29, 0.99, 10, 3, 56];
for (const value of array1D) {
  console.log(value);
}

console.log("\n");

// Print the elements of 2D array
const array2D = [
  [10, 13, 15],
  [0.1, 0.3, 0.9],
  [-9, -61, -14],
];
for (const innerArray of array2D) {
  console.log("inner array", innerArray);
  for (const value of innerArray) {
    console.log(value);
  }
}
