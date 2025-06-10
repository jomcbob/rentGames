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

const cardGames = `
<div style="
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    padding: 16px;
">

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/clumsy-thief#samcart-slide-open-right">
    <img src="${clumsythiefImage}" alt="Clumsy Thief" height="200px">
    <div class="info">
      <div><strong>Clumsy Thief</strong></div>
      <div>Deposit: $24.99</div>
      <div>Rental Price: $0.50/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Clumsy Thief" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right">
    <img src="${nutsmuttsImage}" alt="Nuts about Mutts" height="200px">
    <div class="info">
      <div><strong>Nuts about Mutts</strong></div>
      <div>Deposit: $22.00</div>
      <div>Rental Price: $0.50/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Nuts about Mutts" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right">
    <img src="${foxImage}" alt="The Fox in the Forest" height="200px">
    <div class="info">
      <div><strong>The Fox in the Forest</strong></div>
      <div>Deposit: $20.00</div>
      <div>Rental Price: $0.50/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="The Fox in the Forest" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right">
    <img src="${kryptoImage}" alt="Krypto" height="200px">
    <div class="info">
      <div><strong>Krypto</strong></div>
      <div>Deposit: $20.00</div>
      <div>Rental Price: $0.50/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Krypto" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right">
    <img src="${setImage}" alt="Set" height="200px">
    <div class="info">
      <div><strong>Set</strong></div>
      <div>Deposit: $15.00</div>
      <div>Rental Price: $0.50/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Set" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right">
    <img src="${anothermanstImage}" alt="Another Man’s Treasure" height="200px">
    <div class="info">
      <div><strong>Another Man’s Treasure</strong></div>
      <div>Deposit: $22.00</div>
      <div>Rental Price: $0.50/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Another Man’s Treasure" class="google-search">Search wiki</button></div>
</div>


<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${tgdImage}" alt="" height="200px">
  <div><strong>The Great Dalmuti</strong></div>
  <div>Deposit: $23.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${deckcardsImage}" alt="Deck of Cards" height="200px">
  <div><strong>Deck of Cards</strong></div>
  <div>Deposit: $9.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${phasetenImage}" alt="Phase 10" height="200px">
  <div><strong>Phase 10</strong></div>
  <div>Deposit: $16.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${spotitImage}" alt="Spot it!" height="200px">
  <div><strong>Spot it!</strong></div>
  <div>Deposit: $13.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dwfluxxImage}" alt="Doctor Who Fluxx" height="200px">
  <div><strong>Doctor Who Fluxx</strong></div>
  <div>Deposit: $27.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${skullkingImage}" alt="Skull King" height="200px">
  <div><strong>Skull King</strong></div>
  <div>Deposit: $21.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${aquest}" alt="Antiquity Quest" height="200px">
  <div><strong>Antiquity Quest</strong></div>
  <div>Deposit: $32.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${cyaImage}" alt="Cover Your Assets" height="200px">
  <div><strong>Cover Your Assets</strong></div>
  <div>Deposit: $22.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${rodImage}" alt="Reign of Dragoness" height="200px">
  <div><strong>Reign of Dragoness</strong></div>
  <div>Deposit: $23.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Gnoming A Round" height="200px">
  <div><strong>Gnoming A Round</strong></div>
  <div>Deposit: $22.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${bearsbeesImage}" alt="The Bears and the Bees" height="200px">
  <div><strong>The Bears and the Bees</strong></div>
  <div>Deposit: $22.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Sleeping Queens" height="200px">
  <div><strong>Sleeping Queens</strong></div>
  <div>Deposit: $17.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Sleeping Queens 2" height="200px">
  <div><strong>Sleeping Queens 2</strong></div>
  <div>Deposit: $23.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Skyjo" height="200px">
  <div><strong>Skyjo</strong></div>
  <div>Deposit: $25.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Mystic Market" height="200px">
  <div><strong>Mystic Market</strong></div>
  <div>Deposit: $25.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${missimImage}" alt="Missionary Impossible" height="200px">
  <div><strong>Missionary Impossible</strong></div>
  <div>Deposit: $25.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dragonwoodImage}" alt="Dragonwood" height="200px">
  <div><strong>Dragonwood</strong></div>
  <div>Deposit: $25.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${tcgcpImage}" alt="Taco Cat Goat Cheese Pizza" height="200px">
  <div><strong>Taco Cat Goat Cheese Pizza</strong></div>
  <div>Deposit: $15.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="The Mind" height="200px">
  <div><strong>The Mind</strong></div>
  <div>Deposit: $16.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${herdmImage}" alt="Herd Mentality" height="200px">
  <div><strong>Herd Mentality</strong></div>
  <div>Deposit: $30.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Monopoly Bid" height="200px">
  <div><strong>Monopoly Bid</strong></div>
  <div>Deposit: $14.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${supermbImage}" alt="Super Mario Bros." height="200px">
  <div><strong>Super Mario Bros.</strong></div>
  <div>Deposit: $20.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Blind Spot" height="200px">
  <div><strong>Blind Spot</strong></div>
  <div>Deposit: $29.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${lootImage}" alt="Loot" height="200px">
  <div><strong>Loot</strong></div>
  <div>Deposit: $22.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dosImage}" alt="Does" height="200px">
  <div><strong>Does</strong></div>
  <div>Deposit: $22.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${fluxxImage}" alt="Fluxx" height="200px">
  <div><strong>Fluxx</strong></div>
  <div>Deposit: $25.00</div>
  <div>Rental Price: $0.50/day</div>
</a>


</div>
`;

export { cardGames };
