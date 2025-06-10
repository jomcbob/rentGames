import "./styles.css";
import { cardGames } from "./cardGames";
import { boardGames } from "./boardGames";
import { aboutUs } from "./aboutUs";
import { contact } from "./contactUs";

let boardGamesButton = document.querySelector(".boardGamesButton");
let aboutUsButton = document.querySelector(".aboutUsButton");
let cardGamesButton = document.querySelector(".cardGamesButton");
let games = document.querySelector(".games");
let contactButton = document.querySelector(".contactButton");
const allButtons = document.querySelectorAll("button");

boardGamesButton.addEventListener("click", () => {
  games.innerHTML = boardGames;
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  boardGamesButton.classList.add("activeButton");

  document.querySelectorAll(".google-search").forEach((button) => {
    button.addEventListener("click", () => {
      button.blur();
      const title = button.id;
      window.open(
        `https://en.wikipedia.org/wiki/${encodeURIComponent(title)} board game`,
        "_blank",
      );
    });
  });
});

cardGamesButton.addEventListener("click", () => {
  games.innerHTML = cardGames;
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  cardGamesButton.classList.add("activeButton");

  document.querySelectorAll(".google-search").forEach((button) => {
    button.addEventListener("click", () => {
      button.blur();
      const title = button.id;
      window.open(
        `https://en.wikipedia.org/wiki/${encodeURIComponent(title)} card game`,
        "_blank",
      );
    });
  });
});

aboutUsButton.addEventListener("click", () => {
  games.innerHTML = aboutUs;
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  aboutUsButton.classList.add("activeButton");
});

contactButton.addEventListener("click", () => {
  games.innerHTML = contact;
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  contactButton.classList.add("activeButton");
});

boardGamesButton.click();
