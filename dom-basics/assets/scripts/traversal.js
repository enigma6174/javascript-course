// Parent element
const ul = document.querySelector("ul");

// Select the child elements
const ulChildElements = ul.children;
console.log("Child Elements");
console.dir(ulChildElements);

// Select child nodes
const ulChildNodes = ul.childNodes;
console.log("\nChild Nodes");
console.dir(ulChildNodes);

// Select the first child element
const firstElementChild = ul.firstElementChild;
console.log("\nFirst Child Element");
console.dir(firstElementChild);

// Select the first child
const firstChild = ul.firstChild;
console.log("\nFirst Child Node");
console.dir(firstChild);

// Select the second child element
console.log("\nSecond Child Element");
console.dir(ul.children[1]);

const li = document.querySelector("li");

// Select the parent element
console.log("\nParent Element");
console.dir(li.parentElement);

// Select the parent node
console.log("\nParent Node");
console.dir(li.parentNode);

// Select the nearest ancestor
console.log("\nAncestor Of <li></li>");
console.dir(li.closest("ul"));

// Check the different tags for ancestry
console.log("BODY?", li.closest("body") === document.querySelector("body"));
console.log("UL?", li.closest("ul") === document.querySelector("ul"));
console.log(
  "HEADER?",
  li.closest("header") === document.querySelector("header")
);
console.log("HTML?", li.closest("html") === document.querySelector("html"));

console.log("\nPrevious Siblings Of <ul></ul>");

// Previous sibling node of ul
console.dir(ul.previousSibling);
console.dir(ul.previousElementSibling);

console.log("\nNext Siblings Of <ul></ul>");

// Next sibling node of ul
console.dir(ul.nextSibling);
console.dir(ul.nextElementSibling);

console.log("\nSiblings Of <section></section>");
console.dir(document.querySelector("section").previousElementSibling);
console.dir(document.querySelector("section").nextElementSibling);
