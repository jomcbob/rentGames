import "./styles.css"
import { cardGames } from "./cardGames"
import { boardGames } from "./boardGames"
import { aboutUs } from "./aboutUs"
import { contact } from "./contactUs"

const boardGamesButton = document.querySelector(".boardGamesButton")
const aboutUsButton = document.querySelector(".aboutUsButton")
const cardGamesButton = document.querySelector(".cardGamesButton")
const games = document.querySelector(".games")
const contactButton = document.querySelector(".contactButton")
const allButtons = document.querySelectorAll("button")

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

boardGamesButton.addEventListener("click", () => {
  games.classList.remove("nonGrid")
  games.innerHTML = "" // clear games area
  allButtons.forEach((button) => button.classList.remove("activeButton"))
  boardGamesButton.classList.add("activeButton")

  const search = document.querySelector(".search")
  search.style.display = "block"
  const searchInput = document.createElement("input")
  searchInput.type = "text"
  searchInput.placeholder = "Search games..."
  searchInput.classList.add("searchInput")
  searchInput.classList.add("hidden")
  searchInput.style.marginBottom = "20px"
  searchInput.style.padding = "8px"
  searchInput.style.fontSize = "16px"
  searchInput.style.width = "100%"
  games.appendChild(searchInput)

  function renderGames(filter = "") {
    while (games.children.length > 1) {
      games.removeChild(games.lastChild)
    }

    const filteredGames = boardGames.filter((game) =>
      game.name.toLowerCase().includes(filter.toLowerCase()),
    )

    filteredGames.forEach((game) => {
      const div = document.createElement("div")

      div.addEventListener("click", () => {
        const searchInput = document.querySelector(".searchInput")
        searchInput.classList.add("hidden")
        searchInput.value = ""
      })

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
  }

  renderGames()

  searchInput.addEventListener("input", (e) => {
    renderGames(e.target.value)
  })
})

cardGamesButton.addEventListener("click", () => {
  games.classList.remove("nonGrid")
  games.innerHTML = ""
  allButtons.forEach((button) => button.classList.remove("activeButton"))
  cardGamesButton.classList.add("activeButton")

  const search = document.querySelector(".search")
  search.style.display = "block"
  const searchInput = document.createElement("input")
  searchInput.type = "text"
  searchInput.placeholder = "Search card games..."
  searchInput.classList.add("searchInput", "hidden")
  searchInput.style.margin = "20px"
  searchInput.style.padding = "8px"
  searchInput.style.fontSize = "16px"
  searchInput.style.width = "100%"
  games.appendChild(searchInput)

  function renderGames(filter = "") {
    while (games.children.length > 1) {
      games.removeChild(games.lastChild)
    }

    const filteredGames = cardGames.filter((game) =>
      game.name.toLowerCase().includes(filter.toLowerCase()),
    )

    filteredGames.forEach((game) => {
      const div = document.createElement("div")

      div.addEventListener("click", () => {
        const searchInput = document.querySelector(".searchInput")
        searchInput.classList.add("hidden")
        searchInput.value = ""
      })

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
      `

      games.appendChild(div)
    })
  }

  renderGames()

  searchInput.addEventListener("input", (e) => {
    renderGames(e.target.value)
  })
})

aboutUsButton.addEventListener("click", () => {
  games.classList.add("nonGrid")
  games.innerHTML = aboutUs
  allButtons.forEach((button) => button.classList.remove("activeButton"))
  aboutUsButton.classList.add("activeButton")
  const search = document.querySelector(".search")
  search.style.display = "none"
})

contactButton.addEventListener("click", () => {
  games.classList.add("nonGrid")
  games.innerHTML = contact
  allButtons.forEach((button) => button.classList.remove("activeButton"))
  contactButton.classList.add("activeButton")
  const search = document.querySelector(".search")
  search.style.display = "none"
})

const searchButton = document.querySelector(".search")

searchButton.addEventListener("click", () => {
  const searchInput = document.querySelector(".searchInput")
  searchInput.classList.toggle("hidden")
  if (!searchInput.classList.contains("hidden")) {
    searchInput.focus()
  } else {
    searchInput.value = ""
  }
})

boardGamesButton.click()
