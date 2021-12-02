const backdrop = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const addMovieButton = document.getElementById("add-movie-btn");
const modalCancelButton = addMovieModal.querySelector(".btn--passive");
const modalAddButton = modalCancelButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

// Buffer to hold the list of added movie objects
const movies = [];

// Variable to generate unique movie id
let uniqueMovieID = 0;

// Function to toggle the welcome display when buffer is empty
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

// Function to delete the movie
// Gets triggered when the yes button in delete movie dialog is selected
const deleteMovieHandler = (id) => {
  let index = 0;
  for (const movie of movies) {
    if (movie.id === id) {
      break;
    }
    index++;
  }
  movies.splice(index, 1);
  const ul = document.getElementById("movie-list");
  ul.children[index].remove();
  closeMovieDeletionModal();
  updateUI();
};

// Function to cancel the movie deletion
// Gets triggered when the no button in delete movie dialog is selected
const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

// Function to start the process of movie deletion
// Gets triggered when user clicks on a movie card
// Opens a deletion confirmation dialog box to confirm or cancel the movie deletion
const startDeleteMovieHandler = (id) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();

  const cancelBtn = deleteMovieModal.querySelector(".btn--passive");
  let confirmBtn = deleteMovieModal.querySelector(".btn--danger");

  confirmBtn.replaceWith(confirmBtn.cloneNode(true));
  confirmBtn = deleteMovieModal.querySelector(".btn--danger");

  cancelBtn.removeEventListener("click", closeMovieDeletionModal);

  cancelBtn.addEventListener("click", closeMovieDeletionModal);
  confirmBtn.addEventListener("click", deleteMovieHandler.bind(null, id));
};

// Function to render a new movie element when added successfully
// Newly added movie is seen as a card with relevant details
const renderNewMovieElement = (movie) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src="${movie.link}" alt="${movie.title}">
  </div>
  <div class="movie-element__info">
  <h2>${movie.title}</h2>
  <p>${movie.rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, movie.id)
  );
  const ul = document.getElementById("movie-list");
  ul.appendChild(newMovieElement);
};

// Function to toggle the backdrop
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

// Function to close the add movie dialog
const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

// Function to show the add movie dialog
const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

// Function to clear the text fields in the add movie dialog
const clearInputs = () => {
  for (inputField of userInputs) {
    inputField.value = "";
  }
};

// Event handler for cancel button in add movie dialog
const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearInputs();
  toggleBackdrop();
};

// Function to add a new movie to the database
// Event handler for the add button in the add movie dialog
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingsValue = userInputs[2].value;
  const ratingsNumber = parseInt(ratingsValue);

  let movieObject = null;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingsValue.trim() === "" ||
    isNaN(ratingsNumber)
  ) {
    alert("One or more invalid values!");
    return;
  }
  if (ratingsNumber < 1 || ratingsNumber > 5) {
    alert("Ratings must be between 1 and 5!");
    return;
  }

  movieObject = {
    id: ++uniqueMovieID,
    title: titleValue.trim(),
    link: imageUrlValue.trim(),
    rating: ratingsNumber,
  };

  movies.push(movieObject);
  console.log(movieObject);

  closeMovieModal();
  toggleBackdrop();
  clearInputs();
  renderNewMovieElement(movieObject);
  updateUI();
};

// Event handler for the backdrop DOM object
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearInputs();
};

addMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
modalCancelButton.addEventListener("click", cancelAddMovieHandler);
modalAddButton.addEventListener("click", addMovieHandler);
