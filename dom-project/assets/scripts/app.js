const backdrop = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const addMovieButton = document.getElementById("add-movie-btn");
const modalCancelButton = addMovieModal.querySelector(".btn--passive");
const modalAddButton = modalCancelButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearInputs = () => {
  for (inputField of userInputs) {
    inputField.value = "";
  }
};

const deleteMovie = (id) => {
  let index = 0;
  for (movie of movies) {
    if (movie.id === id) {
      break;
    }
    index++;
  }
  movies.splice(index, 1);

  const ul = document.getElementById("movie-list");
  ul.children[index].remove();
};

const deleteMovieHandler = (id) => {
  const deleteModal = document.getElementById("delete-modal");
  deleteModal.style.display = "block";

  const no = deleteModal.querySelector(".btn--passive");
  const yes = deleteModal.querySelector(".btn--danger");

  no.addEventListener("click", () => {
    deleteModal.style.display = "none";
  });
  yes.addEventListener("click", () => {
    deleteMovie(id);
  });
  yes.removeEventListener("click", () => {
    deleteModal.style.display = "none";
  });

  // deleteMovie(id)
};

const renderMovies = (movie) => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }

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
    deleteMovieHandler.bind(null, movie.id)
  );

  const ul = document.getElementById("movie-list");
  ul.appendChild(newMovieElement);
};

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
    id: Math.random() * 100,
    title: titleValue.trim(),
    link: imageUrlValue.trim(),
    rating: ratingsNumber,
  };

  movies.push(movieObject);
  console.log(movieObject);

  toggleMovieModal();
  clearInputs();
  renderMovies(movieObject);
};

addMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", toggleMovieModal);
modalCancelButton.addEventListener("click", toggleMovieModal);
modalAddButton.addEventListener("click", addMovieHandler);
