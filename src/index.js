import "./styles.css"
import { cardGames } from "./cardGames"
import { boardGames } from "./boardGames"
import { aboutUs } from "./home"
import { contact } from "./contactUs"

const boardGamesButtons = document.querySelectorAll(".boardGamesButton")
const homeButtons = document.querySelectorAll(".homeButton")
const cardGamesButtons = document.querySelectorAll(".cardGamesButton")
const contactButtons = document.querySelectorAll(".contactButton")

const games = document.querySelector(".games")
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

function initialize(gameButton) {
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

  noGames.style.display = games.children.length === 0 ? "block" : "none"
}

boardGamesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    isBoardGames = true
    initialize(button)
    renderGames(boardGames)
  })
})

cardGamesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    isBoardGames = false
    initialize(button)
    renderGames(cardGames) // was wrong before, now fixed
  })
})

homeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    inputBox.style.display = "none"
    games.classList.add("nonGrid")
    games.innerHTML = aboutUs
    allButtons.forEach((btn) => btn.classList.remove("activeButton"))
    button.classList.add("activeButton")
  })
})

contactButtons.forEach((button) => {
  button.addEventListener("click", () => {
    inputBox.style.display = "none"
    games.classList.add("nonGrid")
    games.innerHTML = contact
    allButtons.forEach((btn) => btn.classList.remove("activeButton"))
    button.classList.add("activeButton")
  })
})

function setGamesBoxHeight() {
  const header = document.querySelector("header")
  const gamesBox = document.querySelector(".gamesBox")
  const headerHeight = header.offsetHeight
  gamesBox.style.height = `${window.innerHeight - headerHeight}px`
}

function equalizeBoardGameHeights() {
  const cards = Array.from(document.querySelectorAll(".board_game"))
  cards.forEach((card) => (card.style.height = "auto"))

  const rows = {}
  cards.forEach((card) => {
    const top = Math.round(card.getBoundingClientRect().top)
    if (!rows[top]) rows[top] = []
    rows[top].push(card)
  })

  Object.values(rows).forEach((rowCards) => {
    const maxHeight = Math.max(...rowCards.map((c) => c.offsetHeight))
    rowCards.forEach((c) => (c.style.height = `${maxHeight}px`))
  })
}

function checkScreenWidth() {
  const links = document.querySelectorAll(".link")
  const menu = document.querySelector(".hideHeader")

  if (window.innerWidth < 1000) {
    menu.classList.remove("displayNone")
    links.forEach((link) => link.classList.add("displayNone"))
  } else {
    menu.classList.add("displayNone")
    links.forEach((link) => link.classList.remove("displayNone"))
  }
}

window.addEventListener("load", () => {
  setGamesBoxHeight()
  equalizeBoardGameHeights()
  checkScreenWidth()

  const firstBoardBtn = boardGamesButtons[0]
  if (firstBoardBtn) {
    firstBoardBtn.click()
    searchInput.focus()
  }
})

const wrapper = document.querySelector(".dropdown-wrapper")

wrapper.addEventListener("mouseenter", () => {
  wrapper.focus()
})

window.addEventListener("resize", () => {
  setGamesBoxHeight()
  equalizeBoardGameHeights()
  checkScreenWidth()
})
