let endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];
fetch(endpoint)
  .then((Blob) => Blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToSearch, cities) {
  return cities.filter((place) => {
    let regex = new RegExp(wordToSearch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

let search = document.querySelector("input");
let result = document.querySelector("ul");

search.addEventListener("change", displayMatch);
search.addEventListener("keyup", displayMatch);

function displayMatch() {
  let value = search.value;
  let match = findMatches(value, cities);
  let finalResult = match.map((place) => {
    return `
    <li>${place.city},${place.state}</li>
    <li>Population : ${place.population}</li>
  `;
  });
  result.innerHTML = finalResult;
}
