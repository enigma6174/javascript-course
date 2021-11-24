// Selecting in two different ways
const listEl1 = document.getElementById("task-1");
const listEl2 = document.querySelector("#task-1");

// Selecting using the third way
const t = document.querySelector("ol li#task-1");

console.dir(listEl1);
console.dir(listEl2);
console.dir(t);

// Changing the style of list item 1
t.style.color = "white";
t.style.backgroundColor = "black";

// Selecting the document title in two ways
const t1 = document.querySelector("title");
const t2 = document.title;

console.dir(t1);
console.dir(t1);

// Modifying the title
document.title = "Assignment - Solved!";

// Selecting the h1 element
const h1 = document.querySelector("h1");
console.dir(h1);

// Modifying the page heading
h1.textContent = "Assignment - Solved!";
