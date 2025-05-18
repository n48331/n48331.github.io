const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = hpCharacters.filter((character) => {
    return character.name.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = persons;
    hpCharacters = res;
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
            <li class="character">
              <img src="${character.image}"></img>
                <h2>
                    ${character.name}
                    ${character.over}
                    </h2>
                    <p>${character.dateOfBirth}</p>
            </li>
        `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

loadCharacters();
