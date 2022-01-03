// Create a new empty set
const dummy = new Set();
console.log(dummy);

// Create a new set from an iterable
// Duplicates will be ignored
const array = [1, 2, 3, 4, 5, 6, 2, 5, 1];
const ids = new Set(array);
console.log(ids);

// Not possible to access set elements by indexing
console.log(dummy[0]);
console.log(ids[0]);

// Not possible to get length of set using length attribute
console.log(`length of set(dummy) : ${dummy.length}`);
console.log(`length of set(ids) : ${ids.length}`);

// Calculate the length of a set
// We need access to Set.entries() method to loop over the items of set
let count = 0;
for (const entry of ids.entries()) {
  count++;
  console.log(entry);
}
console.log(`length of set(ids) : ${count}`);

console.log("\n");

// Set is ideally used to check for presence of elements and not for retrieval
console.log(`1 present ? ${ids.has(1)}`);
console.log(`6 present ? ${ids.has(6)}`);
console.log(`4 present ? ${ids.has(4)}`);
console.log(`9 present ? ${ids.has(9)}`);

console.log("\n");
