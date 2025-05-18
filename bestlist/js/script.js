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
            <li class="character" data-hold-link data-ph="${character.ph}">
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
  document.addEventListener('DOMContentLoaded', function () {
  const holdLinkElements = document.querySelectorAll('[data-hold-link]');
  const HOLD_DURATION = 5000;

  holdLinkElements.forEach(element => {
    let holdTimeout;
    let isHolding = false;
    const phoneNumber = element.getAttribute('data-ph');
    const linkUrl = `https://wa.me/91${phoneNumber}`;

    const startHold = () => {
      isHolding = true;
      holdTimeout = setTimeout(() => {
        if (isHolding) {
          window.open(linkUrl, '_blank');
        }
      }, HOLD_DURATION);
    };

    const cancelHold = () => {
      isHolding = false;
      clearTimeout(holdTimeout);
    };

    // Mouse Events
    element.addEventListener('mousedown', startHold);
    element.addEventListener('mouseup', cancelHold);
    element.addEventListener('mouseleave', cancelHold);

    // Touch Events
    element.addEventListener('touchstart', startHold);
    element.addEventListener('touchend', cancelHold);
    element.addEventListener('touchcancel', cancelHold);
  });
});
