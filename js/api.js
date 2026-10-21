const API = "https://api.disneyapi.dev/character";

async function fetchCharacters(url) {
  return await fetch(url);
}
