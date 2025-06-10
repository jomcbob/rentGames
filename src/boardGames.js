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

const boardGames = `
<div style="
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 20px;
    padding: 20px;
">

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/dominion#samcart-slide-open-right">
    <img src="${dominionImage}" alt="Dominion" height="200px" width="auto">
    <div class="info">
      <div><strong>Dominion</strong></div>
      <div>Deposit: $44.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Dominion" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/ticket-to-ride#samcart-slide-open-right">
    <img src="${ttrImage}" alt="Ticket to Ride" height="200px" width="auto">
    <div class="info">
      <div><strong>Ticket to Ride</strong></div>
      <div>Deposit: $49.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Ticket to Ride" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/the-settlers-of-catan#samcart-slide-open-right">
    <img src="${catanImage}" alt="Catan" height="200px" width="auto">
    <div class="info">
      <div><strong>The Settlers of Catan</strong></div>
      <div>Deposit: $49.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="The Settlers of Catan" class="google-search">Search wiki</button></div>
</div>


<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/smallworld#samcart-slide-open-right">
    <img src="${smallworldImage}" alt="Smallworld" height="200px" width="auto">
    <div class="info">
      <div><strong>Smallworld</strong></div>
      <div>Deposit: $51.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Smallworld" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/7-wonders#samcart-slide-open-right">
    <img src="${sevenwondersImage}" alt="7 Wonders" height="200px" width="auto">
    <div class="info">
      <div><strong>7 Wonders</strong></div>
      <div>Deposit: $52.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="7 Wonders" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/scrabble#samcart-slide-open-right">
    <img src="${scrabbleImage}" alt="Scrabble" height="200px" width="auto">
    <div class="info">
      <div><strong>Scrabble</strong></div>
      <div>Deposit: $84.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Scrabble" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/monopoly#samcart-slide-open-right">
    <img src="${monopolyImage}" alt="Monopoly" height="200px" width="auto">
    <div class="info">
      <div><strong>Monopoly</strong></div>
      <div>Deposit: $84.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Monopoly" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/splendor#samcart-slide-open-right">
    <img src="${splendorImage}" alt="Splendor" height="200px" width="auto">
    <div class="info">
      <div><strong>Splendor</strong></div>
      <div>Deposit: $27.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Splendor" class="google-search">Search wiki</button></div>
</div>


<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/sagrada#samcart-slide-open-right">
    <img src="${sagradaImage}" alt="Sagrada" height="200px" width="auto">
    <div class="info">
      <div><strong>Sagrada</strong></div>
      <div>Deposit: $44.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Sagrada" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/blokus#samcart-slide-open-right">
    <img src="${blokusImage}" alt="Blokus" height="200px" width="auto">
    <div class="info">
      <div><strong>Blokus</strong></div>
      <div>Deposit: $31.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Blokus" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/sushi-go-party#samcart-slide-open-right">
    <img src="${sushigoImage}" alt="Sushi Go Party" height="200px" width="auto">
    <div class="info">
      <div><strong>Sushi Go Party</strong></div>
      <div>Deposit: $26.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Sushi Go Party" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/splendor-duel#samcart-slide-open-right">
    <img src="${splendorduelImage}" alt="Splendor Duel" height="200px" width="auto">
    <div class="info">
      <div><strong>Splendor Duel</strong></div>
      <div>Deposit: $34.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Splendor Duel" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/rummikub#samcart-slide-open-right">
    <img src="${rummikubImage}" alt="Rummikub" height="200px" width="auto">
    <div class="info">
      <div><strong>Rummikub</strong></div>
      <div>Deposit: $22.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Rummikub" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/king-of-tokyo#samcart-slide-open-right">
    <img src="${kingoftokyoImage}" alt="King of Tokyo" height="200px" width="auto">
    <div class="info">
      <div><strong>King of Tokyo</strong></div>
      <div>Deposit: $46.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="King of Tokyo" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/wildcraft#samcart-slide-open-right">
    <img src="${wildcraftImage}" alt="Wildcraft!" height="200px" width="auto">
    <div class="info">
      <div><strong>Wildcraft!</strong></div>
      <div>Deposit: $42.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Wildcraft!" class="google-search">Search wiki</button></div>
</div>


<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/risk#samcart-slide-open-right">
    <img src="${riskImage}" alt="Risk" height="200px" width="auto">
    <div class="info">
      <div><strong>Risk</strong></div>
      <div>Deposit: $38.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Risk" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/forbidden-island#samcart-slide-open-right">
    <img src="${forbiddenislandImage}" alt="Forbidden Island" height="200px" width="auto">
    <div class="info">
      <div><strong>Forbidden Island</strong></div>
      <div>Deposit: $25.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Forbidden Island" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/start-up-millonaire#samcart-slide-open-right">
    <img src="${startupmillImage}" alt="Start up millonaire" height="200px" width="auto">
    <div class="info">
      <div><strong>Start up millonaire</strong></div>
      <div>Deposit: $29.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Start up millonaire" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/lost-cities#samcart-slide-open-right">
    <img src="${lostcitysImage}" alt="Lost Cities" height="200px" width="auto">
    <div class="info">
      <div><strong>Lost Cities</strong></div>
      <div>Deposit: $24.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Lost Cities" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/evolution#samcart-slide-open-right">
    <img src="${evolutionImage}" alt="Evolution" height="200px" width="auto">
    <div class="info">
      <div><strong>Evolution</strong></div>
      <div>Deposit: $49.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Evolution" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/trekking-the-national-parks#samcart-slide-open-right">
    <img src="${trekkingImage}" alt="Trekking the National Parks" height="200px" width="auto">
    <div class="info">
      <div><strong>Trekking the National Parks</strong></div>
      <div>Deposit: $54.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Trekking the National Parks" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/yahtzee#samcart-slide-open-right">
    <img src="${yahtzeeImage}" alt="Yahtzee" height="200px" width="auto">
    <div class="info">
      <div><strong>Yahtzee</strong></div>
      <div>Deposit: $19.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Yahtzee" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/imaginiff#samcart-slide-open-right">
    <img src="${imaginiffImage}" alt="Imaginiff" height="200px" width="auto">
    <div class="info">
      <div><strong>Imaginiff</strong></div>
      <div>Deposit: $54.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Imaginiff" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/gonuts-for-donuts#samcart-slide-open-right">
    <img src="${gonutsfordonutsImage}" alt="Gonuts for Donuts" height="200px" width="auto">
    <div class="info">
      <div><strong>Gonuts for Donuts</strong></div>
      <div>Deposit: $29.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Gonuts for Donuts" class="google-search">Search wiki</button></div>
</div>


<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/clue#samcart-slide-open-right">
    <img src="${clueImage}" alt="Clue" height="200px">
    <div class="info">
      <div><strong>Clue</strong></div>
      <div>Deposit: $74.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Clue" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/codenames#samcart-slide-open-right">
    <img src="${codenamesImage}" alt="Codenames" height="200px">
    <div class="info">
      <div><strong>Codenames</strong></div>
      <div>Deposit: $26.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Codenames" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/fort#samcart-slide-open-right">
    <img src="${fortImage}" alt="Fort" height="200px">
    <div class="info">
      <div><strong>Fort</strong></div>
      <div>Deposit: $31.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Fort" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/qwirkle#samcart-slide-open-right">
    <img src="${qwirkleImage}" alt="Qwirkle" height="200px">
    <div class="info">
      <div><strong>Qwirkle</strong></div>
      <div>Deposit: $34.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Qwirkle" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/boggle#samcart-slide-open-right">
    <img src="${boggleImage}" alt="Boggle" height="200px">
    <div class="info">
      <div><strong>Boggle</strong></div>
      <div>Deposit: $26.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Boggle" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/incan-gold#samcart-slide-open-right">
    <img src="${incangoldImage}" alt="Incan Gold" height="200px">
    <div class="info">
      <div><strong>Incan Gold</strong></div>
      <div>Deposit: $29.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Incan Gold" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/racko#samcart-slide-open-right">
    <img src="${rackoImage}" alt="Racko" height="200px">
    <div class="info">
      <div><strong>Racko!</strong></div>
      <div>Deposit: $54.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Racko" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/royals#samcart-slide-open-right">
    <img src="${royalsImage}" alt="Royals" height="200px">
    <div class="info">
      <div><strong>Royals</strong></div>
      <div>Deposit: $44.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Royals" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/mancala#samcart-slide-open-right">
    <img src="${mancalaImage}" alt="Mancala" height="200px">
    <div class="info">
      <div><strong>Mancala</strong></div>
      <div>Deposit: $19.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Mancala" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/hues-and-cues#samcart-slide-open-right">
    <img src="${huesImage}" alt="Hues and Cues" height="200px">
    <div class="info">
      <div><strong>Hues and Cues</strong></div>
      <div>Deposit: $29.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Hues and Cues" class="google-search">Search wiki</button></div>
</div>

<div class="board_game">
  <a href="https://firehen.mysamcart.com/checkout/election-night#samcart-slide-open-right">
    <img src="${electionnightImage}" alt="Election Night" height="200px">
    <div class="info">
      <div><strong>Election Night</strong></div>
      <div>Deposit: $39.99</div>
      <div>Rental Price: $1.00/day</div>
    </div>
  </a>
  <div class='buttonDiv'><button id="Election Night" class="google-search">Search wiki</button></div>
</div>



</div>
`;

export { boardGames };
