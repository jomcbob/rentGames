import "./styles.css"
import { cardGames } from "./cardGames"
import { boardGames } from "./boardGames"
import { aboutUs } from "./home"
import { contact } from "./contactUs"

const boardGamesButton = document.querySelector(".boardGamesButton")
const homeButton = document.querySelector(".homeButton")
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
    setTimeout(() => {
      searchInput.focus()
    }, 30)
    return
  }

  searchInput.value = ""
  setTimeout(() => {
    renderGames(isBoardGames ? boardGames : cardGames, "")
  }, 20)
  setTimeout(() => {
    searchInput.focus()
  }, 30)
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
  searchInput.value = ""
  inputBox.style.display = "flex"
  games.classList.remove("nonGrid")
  games.innerHTML = ""
  allButtons.forEach((button) => button.classList.remove("activeButton"))
  gameButton.classList.add("activeButton")
  setTimeout(() => {
    searchInput.focus()
  }, 30)
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

  equalizeBoardGameHeights()

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

homeButton.addEventListener("click", () => {
  inputBox.style.display = "none"
  games.classList.add("nonGrid")
  games.innerHTML = aboutUs
  allButtons.forEach((button) => button.classList.remove("activeButton"))
  homeButton.classList.add("activeButton")
})

contactButton.addEventListener("click", () => {
  inputBox.style.display = "none"
  games.classList.add("nonGrid")
  games.innerHTML = contact
  allButtons.forEach((button) => button.classList.remove("activeButton"))
  contactButton.classList.add("activeButton")
})

function setGamesBoxHeight() {
  const header = document.querySelector("header")
  const gamesBox = document.querySelector(".gamesBox")

  const headerHeight = header.offsetHeight

  const newHeight = window.innerHeight - headerHeight

  gamesBox.style.height = `${newHeight}px`
}

window.addEventListener("load", setGamesBoxHeight)
window.addEventListener("resize", setGamesBoxHeight)

function equalizeBoardGameHeights() {
  const cards = Array.from(document.querySelectorAll(".board_game"))

  cards.forEach((card) => {
    card.style.height = "auto"
  })

  const rows = {}

  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top
    const roundedTop = Math.round(top)

    if (!rows[roundedTop]) {
      rows[roundedTop] = []
    }
    rows[roundedTop].push(card)
  })

  Object.values(rows).forEach((rowCards) => {
    let maxHeight = 0
    rowCards.forEach((card) => {
      const cardHeight = card.offsetHeight
      if (cardHeight > maxHeight) maxHeight = cardHeight
    })
    rowCards.forEach((card) => {
      card.style.height = maxHeight + "px"
    })
  })
}

window.addEventListener("load", equalizeBoardGameHeights)
window.addEventListener("resize", equalizeBoardGameHeights)

boardGamesButton.click()
searchInput.focus()
