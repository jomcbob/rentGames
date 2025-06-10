import dominionImage from "./img/Dominion.jpg";
import ttrImage from "./img/ttride.jpg";
import catanImage from "./img/catan.jpg";
import lostcitysImage from "./img/lostcitys.jpg";
import wildcraftImage from "./img/wildcraft.jpg";
import qwirkleImage from "./img/qwirkle.jpg";
import electionnightImage from "./img/electionnight.jpg";
import evolutionImage from "./img/evolution.jpg";
import imaginiffImage from "./img/imaginiff.jpg";
import smallworldImage from "./img/smallworld.jpg";
import sushigoImage from "./img/sushi-go-party.jpg";
import blokusImage from "./img/blokus.jpg";
import sevenwondersImage from "./img/7wonders.jpg";
import sagradaImage from "./img/sagrada.jpg";
import scrabbleImage from "./img/scrabble.jpg";
import monopolyImage from "./img/monopoly.jpg";
import boggleImage from "./img/boggle.jpg";
import clueImage from "./img/clue.jpg";
import splendorImage from "./img/splendor.jpg";
import yahtzeeImage from "./img/yahtzee.jpg";
import kingoftokyoImage from "./img/king-of-tokyo.jpg";
import rummikubImage from "./img/rummikub.jpg";
import huesImage from "./img/hues&cues.jpg";
import startupmillImage from "./img/startupmill.jpg";
import riskImage from "./img/risk.jpg";
import forbiddenislandImage from "./img/forbidden-island.jpg";
import trekkingImage from "./img/trekking.jpg";
import gonutsfordonutsImage from "./img/gonutsfordonuts.jpg";
import codenamesImage from "./img/codenames.jpg";
import splendorduelImage from "./img/splendor-duel.jpg";
import fortImage from "./img/fort.jpg";
import incangoldImage from "./img/incan-gold.jpg";
import rackoImage from "./img/racko.jpg";
import mancalaImage from "./img/mancala.jpg";
import royalsImage from "./img/royals.jpg";

const boardGames = [
  {
    name: "7 Wonders",
    deposit: 52.99,
    rentalPrice: 1.0,
    imgSrc: sevenwondersImage,
    samCartLink: "7-wonders",
  },
  {
    name: "Blokus",
    deposit: 31.99,
    rentalPrice: 1.0,
    imgSrc: blokusImage,
    samCartLink: "blokus",
  },
  {
    name: "Boggle",
    imgSrc: boggleImage,
    deposit: 26.99,
    rentalPrice: 1.0,
    samCartLink: "boggle",
  },
  {
    name: "Codenames",
    imgSrc: codenamesImage,
    deposit: 26.99,
    rentalPrice: 1.0,
    samCartLink: "codenames",
  },
  {
    name: "Clue",
    imgSrc: clueImage,
    deposit: 74.99,
    rentalPrice: 1.0,
    samCartLink: "clue",
  },
  {
    name: "Dominion",
    deposit: 44.99,
    rentalPrice: 1.0,
    imgSrc: dominionImage,
    samCartLink: "dominion",
  },
  {
    name: "Election Night",
    imgSrc: electionnightImage,
    deposit: 39.99,
    rentalPrice: 1.0,
    samCartLink: "election-night",
  },
  {
    name: "Evolution",
    imgSrc: evolutionImage,
    deposit: 49.99,
    rentalPrice: 1.0,
    samCartLink: "evolution",
  },
  {
    name: "Fort",
    imgSrc: fortImage,
    deposit: 31.99,
    rentalPrice: 1.0,
    samCartLink: "fort",
  },
  {
    name: "Forbidden Island",
    deposit: 25.99,
    rentalPrice: 1.0,
    imgSrc: forbiddenislandImage,
    samCartLink: "forbidden-island",
  },
  {
    name: "Gonuts for Donuts",
    imgSrc: gonutsfordonutsImage,
    deposit: 29.99,
    rentalPrice: 1.0,
    samCartLink: "gonuts-for-donuts",
  },
  {
    name: "Hues and Cues",
    imgSrc: huesImage,
    deposit: 29.99,
    rentalPrice: 1.0,
    samCartLink: "hues-and-cues",
  },
  {
    name: "Imaginiff",
    deposit: 54.99,
    rentalPrice: 1.0,
    imgSrc: imaginiffImage,
    samCartLink: "imaginiff",
    name: "Imaginiff",
  },
  {
    name: "Incan Gold",
    imgSrc: incangoldImage,
    deposit: 29.99,
    rentalPrice: 1.0,
    samCartLink: "incan-gold",
  },
  {
    name: "King of Tokyo",
    deposit: 46.99,
    rentalPrice: 1.0,
    imgSrc: kingoftokyoImage,
    samCartLink: "king-of-tokyo",
  },
  {
    name: "Lost Cities",
    deposit: 24.99,
    rentalPrice: 1.0,
    imgSrc: lostcitysImage,
    samCartLink: "lost-cities",
  },
  {
    name: "Mancala",
    imgSrc: mancalaImage,
    deposit: 19.99,
    rentalPrice: 1.0,
    samCartLink: "mancala",
  },
  {
    name: "Monopoly",
    deposit: 84.99,
    rentalPrice: 1.0,
    imgSrc: monopolyImage,
    samCartLink: "monopoly",
  },
  {
    name: "Qwirkle",
    imgSrc: qwirkleImage,
    deposit: 34.99,
    rentalPrice: 1.0,
    samCartLink: "qwirkle",
  },
  {
    name: "Racko",
    imgSrc: rackoImage,
    deposit: 54.99,
    rentalPrice: 1.0,
    samCartLink: "racko",
  },
  {
    name: "Risk",
    deposit: 38.99,
    rentalPrice: 1.0,
    imgSrc: riskImage,
    samCartLink: "risk",
  },
  {
    name: "Royals",
    imgSrc: royalsImage,
    deposit: 44.99,
    rentalPrice: 1.0,
    samCartLink: "royals",
  },
  {
    name: "Rummikub",
    deposit: 22.99,
    rentalPrice: 1.0,
    imgSrc: rummikubImage,
    samCartLink: "rummikub",
  },
  {
    name: "Sagrada",
    deposit: 44.99,
    rentalPrice: 1.0,
    imgSrc: sagradaImage,
    samCartLink: "sagrada",
  },
  {
    name: "Scrabble",
    deposit: 84.99,
    rentalPrice: 1.0,
    imgSrc: scrabbleImage,
    samCartLink: "scrabble",
  },
  {
    name: "Smallworld",
    deposit: 51.99,
    rentalPrice: 1.0,
    imgSrc: smallworldImage,
    samCartLink: "smallworld",
  },
  {
    name: "Splendor",
    deposit: 27.99,
    rentalPrice: 1.0,
    imgSrc: splendorImage,
    samCartLink: "splendor",
  },
  {
    name: "Splendor Duel",
    deposit: 34.99,
    rentalPrice: 1.0,
    imgSrc: splendorduelImage,
    samCartLink: "splendor-duel",
  },
  {
    name: "Start up millonaire",
    deposit: 29.99,
    rentalPrice: 1.0,
    imgSrc: startupmillImage,
    samCartLink: "start-up-millonaire",
  },
  {
    name: "Sushi Go Party",
    deposit: 26.99,
    rentalPrice: 1.0,
    imgSrc: sushigoImage,
    samCartLink: "sushi-go-party",
  },
  {
    name: "The Settlers of Catan",
    deposit: 49.99,
    rentalPrice: 1.0,
    imgSrc: catanImage,
    samCartLink: "the-settlers-of-catan",
  },
  {
    name: "Ticket to Ride",
    deposit: 49.99,
    rentalPrice: 1.0,
    imgSrc: ttrImage,
    samCartLink: "ticket-to-ride",
  },
  {
    name: "Trekking the National Parks",
    imgSrc: trekkingImage,
    deposit: 54.99,
    rentalPrice: 1.0,
    samCartLink: "trekking-the-national-parks",
  },
  {
    name: "Wildcraft!",
    deposit: 42.99,
    rentalPrice: 1.0,
    imgSrc: wildcraftImage,
    samCartLink: "wildcraft",
  },
  {
    name: "Yahtzee",
    imgSrc: yahtzeeImage,
    deposit: 19.99,
    rentalPrice: 1.0,
    samCartLink: "yahtzee",
  },
];

export { boardGames };
