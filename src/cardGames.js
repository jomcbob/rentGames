import dominionImage from "./img/Dominion.jpg";
import anothermanstImage from "./img/cardgames/a-mans-t.jpg";
import clumsythiefImage from "./img/cardgames/clumsy-thief.jpg";
import aquest from "./img/cardgames/a-quest.jpg";
import nutsmuttsImage from "./img/cardgames/nuts-mutts.jpg";
import foxImage from "./img/cardgames/foxForest.jpg";
import kryptoImage from "./img/cardgames/krypto.jpg";
import setImage from "./img/cardgames/set.jpg";
import tgdImage from "./img/cardgames/the-great-d.jpg";
import deckcardsImage from "./img/cardgames/cards.jpg";
import phasetenImage from "./img/cardgames/phase10.jpg";
import spotitImage from "./img/cardgames/spot-it.jpg";
import dwfluxxImage from "./img/cardgames/d-who-fluxx.jpg";
import skullkingImage from "./img/cardgames/skull-king.jpg";
import cyaImage from "./img/cardgames/cover-your-a.jpg";
import rodImage from "./img/cardgames/reign-of-d.jpg";
import missimImage from "./img/cardgames/miss-im.jpg";
import dragonwoodImage from "./img/cardgames/dragonwood.jpg";
import tcgcpImage from "./img/cardgames/t-c-g-c-p.jpg";
import bearsbeesImage from "./img/cardgames/bears-bees.jpg";
import lootImage from "./img/cardgames/loot.jpg";
import herdmImage from "./img/cardgames/herd-m.jpg";
import supermbImage from "./img/cardgames/super-m-b.jpg";
import fluxxImage from "./img/cardgames/fluxx.jpg";
import dosImage from "./img/cardgames/dos.jpg";

const cardGames = [
  {
    name: "Another Man’s Treasure",
    deposit: 22.0,
    rentalPrice: 0.5,
    imgSrc: anothermanstImage,
    samCartLink: "another-mans-treasure",
  },
  {
    name: "Antiquity Quest",
    deposit: 32.0,
    rentalPrice: 0.5,
    imgSrc: aquest,
    samCartLink: "antiquity-quest",
  },
  {
    name: "Blind Spot",
    deposit: 29.0,
    rentalPrice: 0.5,
    imgSrc: dominionImage,
    samCartLink: "blind-spot",
  },
  {
    name: "Clumsy Thief",
    deposit: 24.99,
    rentalPrice: 0.5,
    imgSrc: clumsythiefImage,
    samCartLink: "clumsy-thief",
  },
  {
    name: "Cover Your Assets",
    deposit: 22.0,
    rentalPrice: 0.5,
    imgSrc: cyaImage,
    samCartLink: "cover-your-assets",
  },
  {
    name: "Deck of Cards",
    deposit: 9.0,
    rentalPrice: 0.5,
    imgSrc: deckcardsImage,
    samCartLink: "deck-of-cards",
  },
  {
    name: "Does",
    deposit: 22.0,
    rentalPrice: 0.5,
    imgSrc: dosImage,
    samCartLink: "does",
  },
  {
    name: "Doctor Who Fluxx",
    deposit: 27.0,
    rentalPrice: 0.5,
    imgSrc: dwfluxxImage,
    samCartLink: "doctor-who-fluxx",
  },
  {
    name: "Dragonwood",
    deposit: 25.0,
    rentalPrice: 0.5,
    imgSrc: dragonwoodImage,
    samCartLink: "dragonwood",
  },
  {
    name: "Fluxx",
    deposit: 25.0,
    rentalPrice: 0.5,
    imgSrc: fluxxImage,
    samCartLink: "fluxx",
  },
  {
    name: "Gnoming A Round",
    deposit: 22.0,
    rentalPrice: 0.5,
    imgSrc: dominionImage,
    samCartLink: "gnoming-a-round",
  },
  {
    name: "Herd Mentality",
    deposit: 30.0,
    rentalPrice: 0.5,
    imgSrc: herdmImage,
    samCartLink: "herd-mentality",
  },
  {
    name: "Krypto",
    deposit: 20.0,
    rentalPrice: 0.5,
    imgSrc: kryptoImage,
    samCartLink: "krypto",
  },
  {
    name: "Loot",
    deposit: 22.0,
    rentalPrice: 0.5,
    imgSrc: lootImage,
    samCartLink: "loot",
  },
  {
    name: "Missionary Impossible",
    deposit: 25.0,
    rentalPrice: 0.5,
    imgSrc: missimImage,
    samCartLink: "missionary-impossible",
  },
  {
    name: "Monopoly Bid",
    deposit: 14.0,
    rentalPrice: 0.5,
    imgSrc: dominionImage,
    samCartLink: "monopoly-bid",
  },
  {
    name: "Mystic Market",
    deposit: 25.0,
    rentalPrice: 0.5,
    imgSrc: dominionImage,
    samCartLink: "mystic-market",
  },
  {
    name: "Nuts about Mutts",
    deposit: 22.0,
    rentalPrice: 0.5,
    imgSrc: nutsmuttsImage,
    samCartLink: "nuts-about-mutts",
  },
  {
    name: "Phase 10",
    deposit: 16.0,
    rentalPrice: 0.5,
    imgSrc: phasetenImage,
    samCartLink: "phase-10",
  },
  {
    name: "Reign of Dragoness",
    deposit: 23.0,
    rentalPrice: 0.5,
    imgSrc: rodImage,
    samCartLink: "reign-of-dragoness",
  },
  {
    name: "Set",
    deposit: 15.0,
    rentalPrice: 0.5,
    imgSrc: setImage,
    samCartLink: "set",
  },
  {
    name: "Skull King",
    deposit: 21.0,
    rentalPrice: 0.5,
    imgSrc: skullkingImage,
    samCartLink: "skull-king",
  },
  {
    name: "Sleeping Queens",
    deposit: 17.0,
    rentalPrice: 0.5,
    imgSrc: dominionImage,
    samCartLink: "sleeping-queens",
  },
  {
    name: "Sleeping Queens 2",
    deposit: 23.0,
    rentalPrice: 0.5,
    imgSrc: dominionImage,
    samCartLink: "sleeping-queens-2",
  },
  {
    name: "Skyjo",
    deposit: 25.0,
    rentalPrice: 0.5,
    imgSrc: dominionImage,
    samCartLink: "skyjo",
  },
  {
    name: "Spot it!",
    deposit: 13.0,
    rentalPrice: 0.5,
    imgSrc: spotitImage,
    samCartLink: "spot-it",
  },
  {
    name: "Super Mario Bros.",
    deposit: 20.0,
    rentalPrice: 0.5,
    imgSrc: supermbImage,
    samCartLink: "super-mario-bros",
  },
  {
    name: "Taco Cat Goat Cheese Pizza",
    deposit: 15.0,
    rentalPrice: 0.5,
    imgSrc: tcgcpImage,
    samCartLink: "taco-cat-goat-cheese-pizza",
  },
  {
    name: "The Bears and the Bees",
    deposit: 22.0,
    rentalPrice: 0.5,
    imgSrc: bearsbeesImage,
    samCartLink: "the-bears-and-the-bees",
  },
  {
    name: "The Fox in the Forest",
    deposit: 20.0,
    rentalPrice: 0.5,
    imgSrc: foxImage,
    samCartLink: "the-fox-in-the-forest",
  },
  {
    name: "The Great Dalmuti",
    deposit: 23.0,
    rentalPrice: 0.5,
    imgSrc: tgdImage,
    samCartLink: "the-great-dalmuti",
  },
  {
    name: "The Mind",
    deposit: 16.0,
    rentalPrice: 0.5,
    imgSrc: dominionImage,
    samCartLink: "the-mind",
  },
];

export { cardGames };
