let prevPage = null;
let nextPage = null;

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

async function loadCharacters(url) {
  cardContainer.innerHTML = "";
  spinner.hidden = false;
  showMessage("Cargando personajes...");
  resultsCount.textContent = "";
  prevButton.disabled = true;
  nextButton.disabled = true;

  try {
    const response = await fetchCharacters(url);

    if (!response.ok) {
      showMessage(
        `El servidor respondió ${response.status}. No se pudo cargar los personajes.`,
        true,
      );
      return;
    }

    const data = await response.json();

    let characters = [];
    if (data.data) {
      characters = Array.isArray(data.data) ? data.data : [data.data];
    }

    if (characters.length === 0) {
      showMessage("No hay resultados para la búsqueda.");
      resultsCount.textContent = "0 resultados encontrados";
      paginationNav.hidden = true;
      prevPage = null;
      nextPage = null;
      return;
    }

    showCharacters(characters);
    showMessage("");
    resultsCount.textContent = `${data.info.count || characters.length} resultados encontrados`;

    prevPage = data.info.previousPage;
    nextPage = data.info.nextPage;

    const totalPages = data.info.totalPages || 1;
    paginationNav.hidden = totalPages <= 1;

    const currentPage = Number(new URL(url).searchParams.get("page")) || 1;
    pageNumber.textContent = `Página ${currentPage} de ${totalPages}`;
  } catch (error) {
    showMessage(
      "No hay conexión con el servidor. Revise su internet e intente de nuevo.",
      true,
    );
  } finally {
    spinner.hidden = true;
    updateButtons(prevPage, nextPage);
  }
}

prevButton.addEventListener("click", () => {
  if (prevPage) {
    loadCharacters(prevPage);
  }
});

nextButton.addEventListener("click", () => {
  if (nextPage) {
    loadCharacters(nextPage);
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    loadCharacters(`${API}?name=${encodeURIComponent(query)}`);
  } else {
    loadCharacters(API);
  }
});

loadCharacters(API);
