const string = "GLOBAL_STRING";
const object = {
  number: 23,
  string: "OBJECT_STRING",
  foo: function () {
    return string;
  },
  fun: function () {
    return this.string;
  },
  f: function () {
    return number;
  },
  g: function () {
    return this.number;
  },
};

// Without this keyword foo() will return the global string
console.log(object.foo());

// With this keyword fun() will return the property inside the object
console.log(object.fun());

// This will throw an error as there is no global variable called number
try {
  console.log(object.f());
} catch (e) {
  console.error(e);
}

// This will return the property inside the object
console.log(object.g());

console.log("\n");

// Using this keyword inside object with arrow function
const team1 = {
  teamName: "Manchester United",
  players: ["Bruno", "De Gea", "Ronaldo", "Maguire"],
  getTeamData() {
    this.players.forEach((p) => {
      console.log(p, " - ", this.teamName);
    });
  },
};
team1.getTeamData();
console.log("\n");

// Using this keyword inside object with regular function
const team2 = {
  teamName: "Manchester United",
  players: ["Bruno", "De Gea", "Ronaldo", "Maguire"],
  getTeamData() {
    this.players.forEach(function (p) {
      console.log(p, " - ", this.teamName);
    });
  },
};
team2.getTeamData();
console.log("\n");

// Without using this keyword inside object with regular function
const team3 = {
  teamName: "Manchester United",
  players: ["Bruno", "De Gea", "Ronaldo", "Maguire"],
  getTeamData() {
    this.players.forEach(function (p) {
      console.log(p, " - ", team3.teamName);
    });
  },
};
team3.getTeamData();
console.log("\n");

// Working with getters and setters
// These are special instructions to make properties read only or writeable
// Property with get only is read only and property with both get and set is writeable
const person = {
  set name(value) {
    this._name = value;
  },
  get name() {
    return this._name.toUpperCase();
  },
  set age(value) {
    this._age = value;
  },
  get age() {
    return parseInt(this._age);
  },
  get sid() {
    return Math.round(Math.random() * 100);
  },
  set id(value) {
    this._id = parseInt(value);
  },
};

// Set the value of property
person.name = "John Doe";
person.age = 25;

// Get the value of property
console.log(`person.name ${person.name}`);
console.log(`person.age ${person.age}`);
console.log(`person.sid ${person.sid}`);

// No effect when writing to read only property
person.sid = 9;
console.log(`[UPDATED] person.sid ${person.sid}`);
console.log("\n");

for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}
console.log("\n");

// Accessing a write only property
// Since there is no get() for id property it will be undefined
person.id = Math.random() * 100;
console.log(`person.id ${person.id}`);
console.log("\n");

// To access a write only property we need to access it using internal representation
console.log(`[INTERNAL] person._id ${person._id}`);
console.log("\n");

for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}
console.log("\n");

// THIS WILL THROW ERROR
// const employee = {
//   set employeeName(value) {
//     this.employeeName = value;
//   },
//   get employeeName() {
//     return this.employeeName;
//   },
//   set employeeDept(value) {
//     this.employeeDept = value;
//   },
//   get _employeeDept() {
//     return this.employeeDept;
//   },
// };

// employee.employeeName = "Bob Swindon";
// employee.employeeDept = "IT";

// try {
//   for (const key in employee) {
//     console.log(`${key} : ${employee[key]}`);
//   }
//   console.log("\n");
// } catch (e) {
//   console.error(e);
// }
