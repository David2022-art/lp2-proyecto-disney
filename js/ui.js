const cardContainer = document.querySelector("#content");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const pageNumber = document.querySelector("#page-number");
const message = document.querySelector("#message");
const spinner = document.querySelector("#spinner");
const resultsCount = document.querySelector("#results-count");
const paginationNav = document.querySelector("#pagination");

function createCard(character) {
  const image = character.imageUrl || "https://placehold.co/300x300?text=Sin+Foto";
  const films = character.films ? character.films.length : 0;
  const tvShows = character.tvShows ? character.tvShows.length : 0;

  return `
    <article class="card">
      <img src="${image}" alt="Foto de ${character.name}">
      <div class="container">
        <h2>${character.name}</h2>
        <p>Películas: ${films}</p>
        <p>Series TV: ${tvShows}</p>
      </div>
    </article>
  `;
}

function showCharacters(characters) {
  cardContainer.innerHTML = characters.map(createCard).join("");
}

function showMessage(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("error", isError);
}

function updateButtons(prevPage, nextPage) {
  prevButton.disabled = !prevPage;
  nextButton.disabled = !nextPage;
}
