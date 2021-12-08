const buffer = ["hello", "world", "welcome", "to", "javascript", "programming"];
const objectBuffer = [
  { key1: "value1" },
  { key2: "value2" },
  { key3: "value3" },
];

// Check if the item 'welcome' exists in array
let result = buffer.find((item) => {
  return item === "welcome";
});
console.log("buffer", buffer);
console.log(`welcome ? ${result}`);

// Check the index of 'javascript' in the array
result = buffer.findIndex((item) => {
  return item === "javascript";
});
console.log("\nbuffer", buffer);
console.log(`javascript idx ? ${result}`);

// Check if 'python' is present in the array
result = buffer.find((item) => {
  return item === "python";
});
console.log("\nbuffer", buffer);
console.log(`python ? ${result}`);

// Check the index of 'python' in the array
result = buffer.findIndex((item) => item === "python");
console.log("\nbuffer", buffer);
console.log(`python idx ? ${result}`);
