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
// import rackoImage from './img/racko.jpg'
import mancalaImage from "./img/mancala.jpg";
import royalsImage from "./img/royals.jpg";

const boardGames = `
<div style="
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
">

<div class="board_game">
<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right">
  <img src="${dominionImage}" alt="Dominion" height="200px">
  <div><strong>Dominion</strong></div>
  <div>Deposit: $44.99 </div>
  <div>Rental Price: $1.00/day</div>
</a>
  <button id="Dominion" class="google-search">Search wiki</button>
</div>

<a href="https://firehen.mysamcart.com/checkout/ticket-to-ride#samcart-slide-open-right" class="board_game">
  <img src="${ttrImage}" alt="Ticket to Ride" height="200px">
  <div><strong>Ticket to Ride</strong></div>
  <div>Deposit: $49.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/the-settlers-of-catan#samcart-slide-open-right" class="board_game">
  <img src="${catanImage}" alt="Catan" height="200px">
  <div><strong>The settlers of Catan</strong></div>
  <div>Deposit: $49.99 </div>
  <div>Rental Price: $1.00/day </div>
</a>

<a href="https://firehen.mysamcart.com/checkout/smallworld#samcart-slide-open-right" class="board_game">
  <img src="${smallworldImage}" alt="Smallworld" height="200px">
  <div><strong>Smallworld</strong></div>
  <div>Deposit: $51.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/7-wonders#samcart-slide-open-right" class="board_game">
  <img src="${sevenwondersImage}" alt="" height="200px">
  <div><strong>7 Wonders</strong></div>
  <div>Deposit: $52.99 </div>
  <div>Rental Price: $1.00/day </div>
</a>

<a href="https://firehen.mysamcart.com/checkout/scrabble#samcart-slide-open-right" class="board_game">
  <img src="${scrabbleImage}" alt="Scrabble" height="200px">
  <div><strong>Scrabble</strong></div>
  <div>Deposit: $84.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/monopoly#samcart-slide-open-right" class="board_game">
  <img src="${monopolyImage}" alt="Monopoly" height="200px">
  <div><strong>Monopoly</strong></div>
  <div>Deposit: $84.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/splendor#samcart-slide-open-right" class="board_game">
  <img src="${splendorImage}" alt="Splendor" height="200px">
  <div><strong>Splendor</strong></div>
  <div>Deposit: $27.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/sagrada#samcart-slide-open-right" class="board_game">
  <img src="${sagradaImage}" alt="Sagrada" height="200px">
  <div><strong>Sagrada</strong></div>
  <div>Deposit: $44.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/blokus#samcart-slide-open-right" class="board_game">
  <img src="${blokusImage}" alt="Blokus" height="200px">
  <div><strong>Blokus</strong></div>
  <div>Deposit: $31.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/sushi-go-party#samcart-slide-open-right" class="board_game">
  <img src="${sushigoImage}" alt="Sushi Go Party" height="200px">
  <div><strong>Sushi Go Party</strong></div>
  <div>Deposit: $26.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/splendor-duel#samcart-slide-open-right" class="board_game">
  <img src="${splendorduelImage}" alt="Splendor Duel" height="200px">
  <div><strong>Splendor Duel</strong></div>
  <div>Deposit: $34.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/rummikub#samcart-slide-open-right" class="board_game">
  <img src="${rummikubImage}" alt="Rummikub" height="200px">
  <div><strong>Rummikub</strong></div>
  <div>Deposit: $22.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/king-of-tokyo#samcart-slide-open-right" class="board_game">
  <img src="${kingoftokyoImage}" alt="King of Tokyo" height="200px">
  <div><strong>King of Tokyo</strong></div>
  <div>Deposit: $46.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/wildcraft#samcart-slide-open-right" class="board_game">
  <img src="${wildcraftImage}" alt="Wildcraft!" height="200px">
  <div><strong>Wildcraft!</strong></div>
  <div>Deposit: $42.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/risk#samcart-slide-open-right" class="board_game">
  <img src="${riskImage}" alt="Risk" height="200px">
  <div><strong>Risk</strong></div>
  <div>Deposit: $38.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/forbidden-island#samcart-slide-open-right" class="board_game">
  <img src="${forbiddenislandImage}" alt="Forbidden Island" height="200px">
  <div><strong>Forbidden Island</strong></div>
  <div>Deposit: $25.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/start-up-millonaire#samcart-slide-open-right" class="board_game">
  <img src="${startupmillImage}" alt="" height="200px">
  <div><strong>Start up millonaire</strong></div>
  <div>Deposit: $29.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/lost-cities#samcart-slide-open-right" class="board_game">
  <img src="${lostcitysImage}" alt="Lost Cities" height="200px">
  <div><strong>Lost Cities</strong></div>
  <div>Deposit: $24.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/evolution#samcart-slide-open-right" class="board_game">
  <img src="${evolutionImage}" alt="Evolution" height="200px">
  <div><strong>Evolution</strong></div>
  <div>Deposit: $49.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/trekking-the-national-parks#samcart-slide-open-right" class="board_game">
  <img src="${trekkingImage}" alt="Trekking the National Parks" height="200px">
  <div><strong>Trekking the National Parks</strong></div>
  <div>Deposit: $54.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/yahtzee#samcart-slide-open-right" class="board_game">
  <img src="${yahtzeeImage}" alt="Yahtzee" height="200px">
  <div><strong>Yahtzee</strong></div>
  <div>Deposit: $19.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/imaginiff#samcart-slide-open-right" class="board_game">
  <img src="${imaginiffImage}" alt="Imaginiff" height="200px">
  <div><strong>Imaginiff</strong></div>
  <div>Deposit: $54.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/gonuts-for-donuts#samcart-slide-open-right" class="board_game">
  <img src="${gonutsfordonutsImage}" alt="Gonuts for Donuts" height="200px">
  <div><strong>Gonuts for Donuts</strong></div>
  <div>Deposit: $29.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/clue#samcart-slide-open-right" class="board_game">
  <img src="${clueImage}" alt="" height="200px">
  <div><strong>Clue</strong></div>
  <div>Deposit: $74.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/codenames#samcart-slide-open-right" class="board_game">
  <img src="${codenamesImage}" alt="" height="200px">
  <div><strong>Codenames</strong></div>
  <div>Deposit: $26.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/fort#samcart-slide-open-right" class="board_game">
  <img src="${fortImage}" alt="" height="200px">
  <div><strong>Fort</strong></div>
  <div>Deposit: $31.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/qwirkle#samcart-slide-open-right" class="board_game">
  <img src="${qwirkleImage}" alt="Qwirkle" height="200px">
  <div><strong>Qwirkle</strong></div>
  <div>Deposit: $34.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/boggle#samcart-slide-open-right" class="board_game">
  <img src="${boggleImage}" alt="Boggle" height="200px">
  <div><strong>Boggle</strong></div>
  <div>Deposit: $26.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/incan-gold#samcart-slide-open-right" class="board_game">
  <img src="${incangoldImage}" alt="Incan Gold" height="200px">
  <div><strong>Incan Gold</strong></div>
  <div>Deposit: $29.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/racko#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Racko" height="200px">
  <div><strong>Racko!</strong></div>
  <div>Deposit: $54.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/royals#samcart-slide-open-right" class="board_game">
  <img src="${royalsImage}" alt="" height="200px">
  <div><strong>Royals</strong></div>
  <div>Deposit: $44.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/mancala#samcart-slide-open-right" class="board_game">
  <img src="${mancalaImage}" alt="" height="200px">
  <div><strong>Mancala</strong></div>
  <div>Deposit: $19.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/hues-and-cues#samcart-slide-open-right" class="board_game">
  <img src="${huesImage}" alt="Hues and Cues" height="200px">
  <div><strong>Hues and Cues</strong></div>
  <div>Deposit: $29.99</div>
  <div>Rental Price: $1.00/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/election-night#samcart-slide-open-right" class="board_game">
  <img src="${electionnightImage}" alt="Election Night" height="200px">
  <div><strong>Election Night</strong></div>
  <div>Deposit: $39.99</div>
  <div>Rental Price: $1.00/day</div>
</a>


</div>
`;

//
//////////////// CARD GAMES
//

const cardGames = `
<div style="
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    padding: 16px;
">

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Clumsy Thief" height="200px">
  <div><strong>Clumsy Thief</strong></div>
  <div>Deposit: $25.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Nuts about Mutts" height="200px">
  <div><strong>Nuts about Mutts</strong></div>
  <div>Deposit: $22.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="The Fox in the Forest" height="200px">
  <div><strong>The Fox in the Forest</strong></div>
  <div>Deposit: $20.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Krypto" height="200px">
  <div><strong>Krypto</strong></div>
  <div>Deposit: $20.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Set" height="200px">
  <div><strong>Set</strong></div>
  <div>Deposit: $15.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Another Man’s Treasure" height="200px">
  <div><strong>Another Man’s Treasure</strong></div>
  <div>Deposit: $22.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="The Great Dalmuti" height="200px">
  <div><strong>The Great Dalmuti</strong></div>
  <div>Deposit: $23.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Deck of Cards" height="200px">
  <div><strong>Deck of Cards</strong></div>
  <div>Deposit: $9.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Phase 10" height="200px">
  <div><strong>Phase 10</strong></div>
  <div>Deposit: $16.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Spot it!" height="200px">
  <div><strong>Spot it!</strong></div>
  <div>Deposit: $13.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Doctor Who Fluxx" height="200px">
  <div><strong>Doctor Who Fluxx</strong></div>
  <div>Deposit: $27.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Skull King" height="200px">
  <div><strong>Skull King</strong></div>
  <div>Deposit: $21.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Antiquity Quest" height="200px">
  <div><strong>Antiquity Quest</strong></div>
  <div>Deposit: $32.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Cover Your Assets" height="200px">
  <div><strong>Cover Your Assets</strong></div>
  <div>Deposit: $22.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Reign of Dragoness" height="200px">
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
  <img src="${dominionImage}" alt="The Bears and the Bees" height="200px">
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
  <img src="${dominionImage}" alt="Missionary Impossible" height="200px">
  <div><strong>Missionary Impossible</strong></div>
  <div>Deposit: $25.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Dragonwood" height="200px">
  <div><strong>Dragonwood</strong></div>
  <div>Deposit: $25.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Taco Cat Goat Cheese Pizza" height="200px">
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
  <img src="${dominionImage}" alt="Herd Mentality" height="200px">
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
  <img src="${dominionImage}" alt="Super Mario Bros." height="200px">
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
  <img src="${dominionImage}" alt="Loot" height="200px">
  <div><strong>Loot</strong></div>
  <div>Deposit: $22.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Does" height="200px">
  <div><strong>Does</strong></div>
  <div>Deposit: $22.00</div>
  <div>Rental Price: $0.50/day</div>
</a>

<a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right" class="board_game">
  <img src="${dominionImage}" alt="Fluxx" height="200px">
  <div><strong>Fluxx</strong></div>
  <div>Deposit: $25.00</div>
  <div>Rental Price: $0.50/day</div>
</a>


</div>
`;
const aboutUs = `
<div class="aboutUsWords">
    <h3>About Us</h3>

    Hey there! Welcome to Rent - A - Game, where gamers like you can try games without having to pay for the whole game. Whether you're just starting out or you’ve been gaming for years, we’ve got something for everyone. No need to spend a ton of money buying games, just rent them, play, and send them back when you’re done!

    We know how expensive gaming can get, so we’re all about making it easier and cheaper for you to enjoy your favorite games. our collection has it all. And the best part? You don’t have to commit to buying every single game you want to try!

    <p><h4>Why Rent With Us?</h4></p>

    <ul> 
        <li><strong>Super Affordable:</strong> Get games without having to drop crazy amounts of cash.</li> 
        <li><strong>Huge Game Selection:</strong> Tons of options!</li> 
    </ul>
</div>
`;

const contact = `
  <section id="contact" class="contact">
    <h3>Contact Us</h3>
    <p>Have questions or want to learn more about our rentals? Reach out!</p>

    <p>Email: <a href="mailto:andrew@risertech.com">andrew@risertech.com</a></p>
    <p>Phone: (858) 358-8429</p>
  </section>
`;

export { boardGames, cardGames, aboutUs, contact };
