const ul = document.querySelector("ul");
const section = document.querySelector("section");
const button = document.querySelector("button");

section.style.backgroundColor = "blue";

section.className = "red-bg visible";

button.addEventListener("click", () => {
  if (section.className === "red-bg visible") {
    section.className = "red-bg invisible";
  } else {
    section.className = "red-bg visible";
  }
});

button.addEventListener("click", () => {
  section.classList.toggle("invisible");
});

// This will replace the entire inner HTML
section.innerHTML = "<h2>This Is A New Section</h2>";

// This will append the new HTML to the existing inner HTML
ul.innerHTML = ul.innerHTML + "<li class='list-item'>Item 4</li>";

// Create a new HTML element and update the properties
// Update <ul></ul> by appending new <li></li> item without re-rendering
const newElement = document.createElement("li");
newElement.textContent = "Newly Added Element";
ul.appendChild(newElement);

// Modify the newly added element without rendering
newElement.textContent = "Item 4";
