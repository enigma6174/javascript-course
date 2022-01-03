const buffer = ["the", "quick", "brown", "fox"];
const temp = ["the", "lazy", "dog"];
console.log("buffer =>", buffer);

// Push() inserts new items to the array
// New items get inserted at the end of the array
buffer.push("jumps");
buffer.push("over");
console.log("buffer =>", buffer);

// This will push an entire array at the last index of buffer
buffer.push(temp);
console.log("buffer =>", buffer);
console.log("last item of buffer", buffer[buffer.length - 1]);

// Push more than one element
buffer.push("###", "$$$", "&&&", "@@@");
console.log("buffer =>", buffer);

// Another way to push element to the array
buffer[buffer.length] = "<BACK>";
console.log("\nbuffer =>", buffer);

// Unshift() adds an item to the beginning of the array
// Every element from index 0 onwards gets shifted one inndex to the right
buffer.unshift("<FRONT>");
console.log("\nbuffer =>", buffer);

// Multiple unshifts in a single call
// The order of shift is the same as the order of arguments
buffer.unshift("<INDEX_0>", "<INDEX_1>", "<INDEX_2>");
console.log("\nbuffer =>", buffer);

console.log("\n");

// Pop() removes an element from the array and returns it
// Item at the end of the array gets removed
let value = buffer.pop();
console.log("buffer =>", buffer);
console.log("buffer.pop()", value);

console.log("\n");

console.log("buffer =>", buffer);
console.log("buffer.pop()", buffer.pop());
console.log("\nbuffer =>", buffer);

// Shift() removes item from the beginning of the array
// Every element in the array (except the one at index 0) gets shifted one index to the left
// The original element at index 0 is returned
value = buffer.shift();
console.log("buffer.shift()", value);

console.log("\nbuffer =>", buffer);
console.log("buffer.shift()", buffer.shift());
console.log("\nbuffer =>", buffer);

console.log("\n");

const bucket = [10, 20, 30, 40, 50, 60];
console.log("bucket", bucket);

// Splice() method is used to add or remove elements from an array
// It is only available to arrays; array-like objects and other iterables do not have access
// The first argument is for starting index; second argument for number of elements to delete
// Deletion of elements start from the index specified in the first argument
// Every argument after the 2nd argument is an element that gets inserted into the array
// Insertion of elements also starts from the index specified at first argument (after any deletions)

// Add element at index 1
bucket.splice(1, 0, -20);
console.log("bucket", bucket);

// Add 3 elements starting at index 4
bucket.splice(4, 0, -5, -6, -7);
console.log("bucket", bucket);

// Delete the element at index 2
bucket.splice(2, 1);
console.log("bucket", bucket);

// Delete 4 elements starting from index 1
bucket.splice(1, 4);
console.log("bucket", bucket);

// Delete 3 elements from index 2 and add 5 elements
// First the 3 elements will be deleted and then the insertion will start from index 2
bucket.splice(2, 3, -1, -11, -111, -5, -25);
console.log("bucket", bucket);

// Splice also returns an array of deleted elements
// If only one argument is passed every element starting from that index is deleted
let deletedElements = bucket.splice(1);
console.log("bucket", bucket);
console.log("deletedElements", deletedElements);

// New index not present in original so it is added
// However insertion will start after the last element
bucket.splice(3, 0, 11, 21, 31, 41, 51);
console.log("bucket", bucket);

// Splice also accepts negative indices to access elements
// Remove 2 elements starting from the 3rd last index
deletedElements = bucket.splice(-3, 2);
console.log("\nbucket", bucket);
console.log("deletedElements", deletedElements);

console.log("\n");

// Slice() is used to select a portion of an array
const anotherBuffer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const part1 = anotherBuffer.slice(2, 5); // Slice from the index [2,5)
const part2 = anotherBuffer.slice(0, 3); // Slice from index [0, 3)
const part3 = anotherBuffer.slice(-3, -1); // Slice from 3rd last index to last index

console.log(anotherBuffer);
console.log(part1);
console.log(part2);
console.log(part3);

console.log("\n");

// Slice can also be used to create a new copy of an array
const deepCopy = anotherBuffer.slice(); // deepCopy[] is a fresh copy at new memory location
const shallowCopy = anotherBuffer; // shallowCopy[] refers to the same location as anotherBuffer[]

console.log(`deepCopy === anotherBuffer ? ${deepCopy === anotherBuffer}`);
console.log(`deepCopy === shallowCopy ? ${deepCopy === shallowCopy}`);
console.log(`shallowCopy === anotherBuffer ? ${shallowCopy === anotherBuffer}`);

console.log("\n");

// Concat is used to join 2 arrays together
// The concatenated array is a brand new array stored at a new memory location
const myArray1 = ["the", "quick", "brown", "fox"];
const myArray2 = ["jumps", "over", "the", "lazy", "dog"];
const bigArray = myArray1.concat(myArray2);
console.log(myArray1);
console.log(myArray2);
console.log(bigArray);

console.log("\n");

// The order of concatenation is also important
const reverseBigArray = myArray2.concat(myArray1);
console.log(myArray1);
console.log(myArray2);
console.log(reverseBigArray);

console.log("\n");

const myList = [10, 20, 20, 50, 10, 13, 4, 5, 1];
console.log(myList);

// Find the index of element 10
// Returns the first index by default
console.log(`index of 10 ? ${myList.indexOf(10)}`);

// Find the index of the last 10
console.log(`last index of 10 ? ${myList.lastIndexOf(10)}`);

// If element does not exist -1 is returned
console.log(`index of 9 ? ${myList.lastIndexOf(9)}`);

console.log("\n");

const myObjectList = [
  { key1: "value1" },
  { key2: "value2" },
  { key2: "value2" },
];
const listItem = myObjectList[2];

// Search for the index of object at index 1
// This will return -1
console.log(myObjectList.indexOf({ key2: "value2" }));

// Search for the index of object at index 1
// Use the stored variable; this will return the correct index 2
console.log(myObjectList.indexOf(listItem));
