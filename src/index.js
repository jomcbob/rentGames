import "./styles.css";
import { cardGames, boardGames, aboutUs, contact } from "./sections";

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
});

aboutUsButton.addEventListener("click", () => {
  games.innerHTML = aboutUs;
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  aboutUsButton.classList.add("activeButton");
});

cardGamesButton.addEventListener("click", () => {
  games.innerHTML = cardGames;
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  cardGamesButton.classList.add("activeButton");
});

contactButton.addEventListener("click", () => {
  games.innerHTML = contact;
  allButtons.forEach((button) => button.classList.remove("activeButton"));
  contactButton.classList.add("activeButton");
});

boardGamesButton.click();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".google-search").forEach((button) => {
    button.addEventListener("click", () => {
      button.blur();
      const title = button.id;
      window.open(
        `https://en.wikipedia.org/wiki/${encodeURIComponent(title)} game`,
        "_blank",
      );
    });
  });
});
