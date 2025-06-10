import "./styles.css";
import { cardGames } from "./cardGames";
import { boardGames } from "./boardGames";
import { aboutUs } from "./aboutUs";
import { contact } from "./contactUs";

const boardGamesButton = document.querySelector(".boardGamesButton");
const aboutUsButton = document.querySelector(".aboutUsButton");
const cardGamesButton = document.querySelector(".cardGamesButton");
const games = document.querySelector(".games");
const contactButton = document.querySelector(".contactButton");
const allButtons = document.querySelectorAll("button");

games.addEventListener("click", (e) => {
  if (e.target.classList.contains("google-search")) {
    e.target.blur();
    const title = e.target.dataset.title;
    window.open(
      `https://en.wikipedia.org/wiki/${encodeURIComponent(title)} game`,
      "_blank",
    );
  }
});

boardGamesButton.addEventListener("click", () => {
  games.classList.remove("nonGrid");
  games.innerHTML = "";
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  boardGamesButton.classList.add("activeButton");

  boardGames.forEach((game) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div class="board_game">
        <a href="https://firehen.mysamcart.com/checkout/${game.samCartLink}#samcart-slide-open-right">
          <img src="${game.imgSrc}" alt="" height="200px">
          <div class="info">
            <div><strong>${game.name}</strong></div>
            <div>Deposit: $${game.deposit}</div>
            <div>Rental Price: $${game.rentalPrice}/day</div>
          </div>
        </a>
        <div class='buttonDiv'>
          <button class="google-search" data-title="${game.name}">Search Wikipedia</button>
        </div>
      </div>
    `;

    games.appendChild(div);
  });
});

cardGamesButton.addEventListener("click", () => {
  games.classList.remove("nonGrid");
  games.innerHTML = "";
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  cardGamesButton.classList.add("activeButton");

  cardGames.forEach((game) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div class="board_game">
        <a href="https://firehen.mysamcart.com/checkout/${game.samCartLink}#samcart-slide-open-right">
          <img src="${game.imgSrc}" alt="" height="200px">
          <div class="info">
            <div><strong>${game.name}</strong></div>
            <div>Deposit: $${game.deposit}</div>
            <div>Rental Price: $${game.rentalPrice}/day</div>
          </div>
        </a>
        <div class='buttonDiv'>
          <button class="google-search" data-title="${game.name}">Search Wikipedia</button>
        </div>
      </div>
    `;

    games.appendChild(div);
  });
});

aboutUsButton.addEventListener("click", () => {
  games.classList.add("nonGrid");
  games.innerHTML = aboutUs;
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  aboutUsButton.classList.add("activeButton");
});

contactButton.addEventListener("click", () => {
  games.classList.add("nonGrid");
  games.innerHTML = contact;
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  contactButton.classList.add("activeButton");
});

boardGamesButton.click();
