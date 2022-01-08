const engineCapacity = "2 lt";

const car1 = {
  make: "Mercedes",
  series: "AMG",
  model: "GT 63S",
  engineCapacity: "4 lt",
  getCarDetails() {
    return make + " " + series + " " + model;
  },
  getEngineData() {
    return engineCapacity;
  },
};

// The following snippet will throw an error
// The variables 'make', 'series' and 'model' are not defined globally
// Inside the object, they are properties, not variables
try {
  console.log(car1.getCarDetails());
} catch (error) {
  console.error(error);
}

// The following will not throw an error as engineCapacity is defined globally
// The result will not be as expected
try {
  console.log(car1.getEngineData());
} catch (error) {
  console.error(error);
}

// We can use object de-structuring to get the results
const { make, series, model } = car1;
console.log("using object de-structuring :", make, series, model);

// This will not throw error using try-catch block
// We will get the expected results as the try catch block limits the scope
// Without the try catch block it will throw an error due to globally defined engineCapacity variable
try {
  const { engineCapacity } = car1;
  console.log("using object de-structuring :", engineCapacity);
} catch (error) {
  console.error(err);
}

console.log("\n");

// We can avoid the above shortcomings using the 'this' keyword
const car2 = {
  make: "Mercedes",
  series: "AMG",
  model: "GT 63S",
  engineCapacity: "4 lt",
  getCarDetails() {
    return this.make + " " + this.series + " " + this.model;
  },
  getEngineData() {
    return this.engineCapacity;
  },
};

console.log(car2.getCarDetails());
console.log(car2.getEngineData());

console.log("\n");

// Printing 'this' to the console gives information of the context
function getThis() {
  console.log("Inside getThis()");
  console.log(this);
  console.log("\n");
}

function getThisAgain() {
  console.log("Inside getThisAgain()");
  getThis();

  function getThisToo() {
    console.log("Inside getThisToo()");
    console.log(this);
    console.log("\n");
  }

  function thisDeep() {
    const deepObject = {
      deepObject() {
        console.log("Inside deepObject");
        console.log(this);
        console.log("\n");
      },
    };
    console.log("Inside thisDeep()");
    console.log(this);
    console.log("\n");

    getThis();
    deepObject.deepObject();
  }

  console.log("Inside getThisAgain()");
  getThisToo();

  console.log("Inside getThisAgain()");
  thisDeep();
}
const thisObject = {
  thisObject() {
    console.log("Inside thisObject");
    console.log(this);
    console.log("\n");
  },
};

thisObject.thisObject();

getThis();
getThisAgain();

console.clear();

const property3 = "global_property";

const myObject = {
  property1: "some_random_property",
  property2: 42,
  function1() {
    console.log("hello world!");
  },
  function2() {
    console.log(this.property1 + " " + this.property2);
  },
  function3() {
    console.log(this.property3);
  },
};

// Destructuring will work as expected for the below code on functions
const { function1 } = myObject;
function1();

// Destructuring will not work for the below code
// The function in the below code uses 'this' keyword which refers to the object calling the function
// Because of destructuring 'this' now refers to global window object
// Global window object does not have 'property1' and 'property2'
const { function2 } = myObject;
function2();

// Destructuring will work on the below code
// Result will be unexpected because in this case 'this' will refer to global window object
const { function3 } = myObject;
function3();

// Here 'this' will refer to the object that called the function
// The object does not have the 'property3' defined in it
myObject.function3();

console.log("\n");

const ghostObject = {
  property3: "coming from ghostObject",
};

const anotherObject = {
  property1: "some_random_property",
  property2: 42,
  f1() {
    console.log("hello world!");
  },
  f2() {
    console.log(this.property1 + " " + this.property2);
  },
  f3() {
    console.log(this.property3);
  },
  f4() {
    console.log(this.property3);
  },
};

// Using function.bind() gives us expected results with destructuring
let { f2 } = anotherObject;
f2 = f2.bind(anotherObject);
f2();

// Result will be undefined as the key does not exist
let { f3 } = anotherObject;
f3 = f3.bind(anotherObject);
f3();

// Result will not be undefined because in this case 'this' refers to ghostObject
// Function is destructured from one object but referring to property in different object
let { f4 } = anotherObject;
f4 = f4.bind(ghostObject);
f4();

console.log("\n");

// While function.bind() delays the execution we can use function.call() for immediate execution
const someObject = {
  property: "someObject",
  foo1() {
    console.log("inside foo2()");
    console.log(this.property);
  },
  foo2() {
    console.log("inside foo2()");
    console.log(this.property);
  },
};

const { foo1 } = someObject;

// This will not execute immediately
foo1.bind(someObject);

// This will execute immediately
foo1.call(someObject);

console.clear();

const person1 = {
  name: "Max",
  greet() {
    console.log(this);
    console.log(this.name);
  },
};

person1.greet();

const person2 = {
  name: "Max",
  greet() {
    console.log(this);
    console.log(this.name);
  },
};

const admin = { age: 30 };

admin.greet = person2.greet;
admin.greet();

const person3 = {
  name: "Max",
  greet3() {
    console.log(this);
    console.log(this.name);
  },
};

const { greet3 } = person3;
greet3();

const person4 = {
  name: "Max",
  greet4() {
    console.log(this); // ???
    console.log(this.name);
  },
};

const { greet4 } = person4;
greet4.call(this);

const person5 = {
  name: "Max",
  greet5() {
    console.log(this); // ???
    console.log(this.name);
  },
};

const { greet5 } = person5;
greet5.call(person5);
