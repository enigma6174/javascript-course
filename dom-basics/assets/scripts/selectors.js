const headerElement = document.getElementById("main-title");
console.log("header element with id main-title");
console.dir(headerElement);

const listELement = document.querySelector(".list-item");
console.log("\nfist element with class name .list-item");
console.dir(listELement);

const firstListElement = document.querySelector("ul li:first-of-type");
const lastListElement = document.querySelector("ul li:last-of-type");

console.log("\nfirst list element");
console.dir(firstListElement);

console.log("\nlast list element");
console.dir(lastListElement);

const unorderedListElement = document.querySelector("ul");
const childrenOfUl = unorderedListElement.children;
const firstChildOfUl = unorderedListElement.firstElementChild;
const htmlOfChild = firstChildOfUl.innerHTML;

console.log("\nunordered list element");
console.dir(unorderedListElement);

console.log("\t-> Children Nodes");
console.log("\t", childrenOfUl);

console.log("\t-> first child node");
console.log("\t", firstChildOfUl);

console.log("\t-> first child html");
console.log("\t", htmlOfChild);

console.log("\n");
for (const child of childrenOfUl) {
  console.log("\t", child, "\ttext : ", child.innerHTML);
}

const allLiElements = document.querySelectorAll("ul li");
console.log("\nAll List Elements");
console.dir(allLiElements);
