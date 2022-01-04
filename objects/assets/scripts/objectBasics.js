// A basic JavaScript object made of different elements
const person = {
  name: "John",
  age: 30,
  hobbies: ["swimming", "dancing", "racing"],
  greet: function () {
    console.log("Hello World!");
  },
};

// Accessing the method inside the object
person.greet();

// Accessing the properties of the object
console.log(person.name, person.age);

// Accessing the items inside the array property of the object
for (const hobby of person.hobbies) {
  console.log(hobby);
}

// Adding a new property to object and setting it's value
person.sex = "male";
person.isAdmin = true;
console.log(person);

const car = {
  make: "BMW",
  model: "720i",
  colors: ["red", "blue", "silver", "black"],
  engine: "5lt",
};

// Deleting object properties use the delete keyword
delete car.engine;
delete car.colors;
console.log(car);

// Numbers can also be used as object properties
// Only square bracket notation will work for accessing them
const myObject = {
  name: "hello",
  lastName: "world",
  values: ["nice", "polite", "good", "hardworking"],
  add: "not yet",
  23: true,
  5.5: false,
};
console.log(myObject);
console.log(`myObject[23]: ${myObject[23]}`);
console.log(`myObject[5.5]: ${myObject[5.5]}`);

console.log("\n");

// Accessing the properties of object
for (const item in myObject) {
  console.log(item);
}

// Get an array of all the properties
const properties = Object.keys(myObject);
console.log(properties);

// Dynamic property access
let key = "lastName";
console.log(`myObject.lastName: ${myObject[key]}`);

key = "values";
console.log(`myObject.values: ${myObject[key]}`);

console.log("\n");

// Adding a dynamic proprty to object
let dynamicProperty = "hello";
const objectExample = {
  name: "john doe",
  age: 25,
  [dynamicProperty]: "default value for key <hello>",
};
console.log(objectExample);

// However this will not update the key 'hello' to 'UPDATED'
dynamicProperty = "UPDATED";
console.log(objectExample);

// This will also not update the key 'hello' to 'hello world'
// It will add a new key called dynamicProperty with the value 'hello world'
objectExample.dynamicProperty = "hello world";
console.log(objectExample);

console.log("\n");

// As objects are reference values direct copying is not possible
// Direct copying results in new object actually referring to the old one
const anotherPerson = person;
console.log(`anotherPerson === person ? ${anotherPerson === person}`);

// To make a deep copy of the object we use the spread operator
// Deep copying an object means that the copied object will be stored in a new location
const person2 = { ...person };
console.log(`person2 === person ? ${person2 === person}`);

console.log("\n");

// Changes to the original object will reflect only in shallow copy
person.name = "John Doe";
person.hobbies.push("boxing");

console.log("person{}");
for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}
console.log("\n");

console.log("anotherPerson{}");
for (const key in anotherPerson) {
  console.log(`${key} : ${anotherPerson[key]}`);
}
console.log("\n");

// Changes to shallow copy will reflect in original object
anotherPerson.name = "John Max Doe";
anotherPerson.age = 45;

console.log("person{}");
for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}
console.log("\n");

console.log("anotherPerson{}");
for (const key in anotherPerson) {
  console.log(`${key} : ${anotherPerson[key]}`);
}
console.log("\n");

// Object which was deep copied remains unaffected
console.log("person2{}");
for (const key in person2) {
  console.log(`${key} : ${person2[key]}`);
}
console.log("\n");

// Changes to person2 are unique to that object only
person2.name = "NO NAME";
person2.age = 9;
person2.hobbies = [];

console.log("person2{}");
for (const key in person2) {
  console.log(`${key} : ${person2[key]}`);
}
console.log("\n");

console.log("person{}");
for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}
console.log("\n");

// Making changes to reference data types inside objects affects deep copies
// Reference data types inside objects aren't deep copied, their memory location remains same
// Changes to primitive data types when making deep copy will be unique to the object
const person3 = { ...person };
person.hobbies.pop();
person3.hobbies.push("guitar");
person3.age = 90;

console.log(person);
console.log(person3);

// To make a deep copy of reference types when making a deep copy of an object use spread operator
// It is also possible to make changes to primitive types on the fly when making deep copy of object
const person4 = { ...person, age: 9, hobbies: [...person.hobbies] };

// Changes to original object will not affect person4 object and vice versa
person.hobbies.splice(1);
person4.hobbies.push("Boxing");

console.log(person);
console.log(person4);

console.log("\n");

// Object destructuring
const { age, hobbies, name } = person;

console.log(person);
console.log(age);
console.log(hobbies);
console.log(name);

console.log("\n");

// Spread operator can be used in destructuring to pull out remaining properties and methods
const { sex, isAdmin, ...everythingElse } = person;
console.log(sex);
console.log(isAdmin);
console.log(everythingElse);

// Checking for the presence of a given key in object
if ("age" in everythingElse) {
  console.log(true);
}
if ("hobbies" in person) {
  console.log(true);
}
if (!("blue" in person)) {
  console.log(false);
}

// Dynamic checking of key presence in object
let id = "isAdmin";
console.log(`isAdmin ? ${id in person}`);

id = "hobbies";
console.log(`hobbies ? ${id in person}`);

id = "foxtrot";
console.log(`foxtrot ? ${id in person}`);
