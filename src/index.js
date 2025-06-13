import "./styles.css"
import { cardGames } from "./cardGames"
import { boardGames } from "./boardGames"
import { aboutUs } from "./home"
import { contact } from "./contactUs"

const boardGamesButton = document.querySelector(".boardGamesButton")
const aboutUsButton = document.querySelector(".aboutUsButton")
const cardGamesButton = document.querySelector(".cardGamesButton")
const games = document.querySelector(".games")
const contactButton = document.querySelector(".contactButton")
const allButtons = document.querySelectorAll("button")
const searchInput = document.querySelector(".searchInput")
const clearInput = document.querySelector(".clearInput")
const inputBox = document.querySelector(".inputBox")
const noGames = document.querySelector(".noGames")
let isBoardGames = true

searchInput.addEventListener("input", () => {
  setTimeout(() => {
    renderGames(isBoardGames ? boardGames : cardGames, searchInput.value)
  }, 20)
})

clearInput.addEventListener("click", () => {
  if (searchInput.value === "") {
    return
  }
  searchInput.value = ""
  renderGames(isBoardGames ? boardGames : cardGames, "")
})

games.addEventListener("click", (e) => {
  if (e.target.classList.contains("google-search")) {
    e.target.blur()
    const title = e.target.dataset.title
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(title + " game")}`,
      "_blank",
    )
  }
})

const initialize = (gameButton) => {
  inputBox.style.display = "flex"
  games.classList.remove("nonGrid")
  games.innerHTML = ""
  allButtons.forEach((button) => button.classList.remove("activeButton"))
  gameButton.classList.add("activeButton")
}

function renderGames(gameType, filter = "") {
  games.innerHTML = ""

  const filteredGames = gameType.filter((game) =>
    game.name.toLowerCase().includes(filter.toLowerCase()),
  )

  filteredGames.forEach((game) => {
    const div = document.createElement("div")

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
          <button class="google-search" data-title="${game.name}">Search Google</button>
        </div>
      </div>
    `

    games.appendChild(div)
  })

  if (games.children.length === 0) {
    noGames.style.display = "block"
  } else {
    noGames.style.display = "none"
  }
}

boardGamesButton.addEventListener("click", () => {
  isBoardGames = true
  initialize(boardGamesButton)
  renderGames(boardGames)
})

cardGamesButton.addEventListener("click", () => {
  isBoardGames = false
  initialize(cardGamesButton)
  renderGames(cardGames)
})

aboutUsButton.addEventListener("click", () => {
  inputBox.style.display = "none"
  games.classList.add("nonGrid")
  games.innerHTML = aboutUs
  allButtons.forEach((button) => button.classList.remove("activeButton"))
  aboutUsButton.classList.add("activeButton")
})

contactButton.addEventListener("click", () => {
  inputBox.style.display = "none"
  games.classList.add("nonGrid")
  games.innerHTML = contact
  allButtons.forEach((button) => button.classList.remove("activeButton"))
  contactButton.classList.add("activeButton")
})

boardGamesButton.click()
searchInput.focus()
