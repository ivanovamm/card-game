<script setup>
import { onMounted, ref } from "vue";

const suits = ["spades", "clubs", "diamonds", "hearts"];
const values = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const player1Deck = ref([]);
const player2Deck = ref([]);
const mainDeck = ref([]);
const roundWinner = ref(null);
const gameWinner = ref(null);

function getDeck() {
  let newDeck = [];
  for (let suit of suits) {
    for (let value of values) {
      newDeck.push({ value: value, suit: suit, flipped: false });
    }
  }
  return newDeck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function dealCards() {
  shuffleDeck(mainDeck.value);
  player1Deck.value = mainDeck.value.slice(0, mainDeck.value.length / 2);
  player2Deck.value = mainDeck.value.slice(mainDeck.value.length / 2);
}

function changeSide(card) {
  card.flipped = !card.flipped;
}

function playRound() {
  if (player1Deck.value.length === 0 || player2Deck.value.length === 0) {
    gameWinner.value = player1Deck.value.length > 0 ? "Player 1" : "Player 2";
    return;
  }

  const player1Card = player1Deck.value.shift();
  const player2Card = player2Deck.value.shift();
  player1Card.flipped = true;
  player2Card.flipped = true;

  const player1Value = values.indexOf(player1Card.value);
  const player2Value = values.indexOf(player2Card.value);

  if (player1Value > player2Value) {
    player1Deck.value.push(player1Card, player2Card);
    roundWinner.value = "Player 1 wins the round!";
  } else if (player1Value < player2Value) {
    player2Deck.value.push(player1Card, player2Card);
    roundWinner.value = "Player 2 wins the round!";
  } else {
    roundWinner.value = "It's a tie!";
  }
  
}

onMounted(() => {
  mainDeck.value = getDeck();
  dealCards();
});
</script>



<template>
  <div class="game">
    <button @click="playRound" :disabled="gameWinner">Play Round</button>
    <div v-if="roundWinner">{{ roundWinner }}</div>
    <div v-if="gameWinner">Game Over! Winner: {{ gameWinner }}</div>

    <div class="players">
      <div class="player left-player">
        <h2>Player 1 ({{ player1Deck.length }} cards)</h2>
        <div class="deck">
          <div
              class="card"
              v-for="(card, index) in player1Deck"
              :key="index"
              @click="changeSide(card)"
          >
            <div v-if="!card.flipped" class="back"></div>
            <div v-if="card.flipped">
              <div class="value">{{ card.value }}</div>
              <div :class="'suit ' + card.suit"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="player right-player">
        <h2>Player 2 ({{ player2Deck.length }} cards)</h2>
        <div class="deck">
          <div
              class="card"
              v-for="(card, index) in player2Deck"
              :key="index"
              @click="changeSide(card)"
          >
            <div v-if="!card.flipped" class="back"></div>
            <div v-if="card.flipped">
              <div class="value">{{ card.value }}</div>
              <div :class="'suit ' + card.suit"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

button {
  font-family: Arial, sans-serif;
  font-size: large;
  cursor: pointer;
  text-align: center;
  border: solid black;
  border-radius: 200px;
  color: black;
  margin-bottom: 20px;
}

.players {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.player {
  flex: 1;
  text-align: center;
}

.left-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}

.right-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
}

.deck .card {
  border: solid 1px #aaa;
  border-radius: 9px;
  width: 95px;
  height: 150px;
  float: left;
  padding: 3px;
  margin: 5px;
}

.card {
  width: 50px;
  padding: 10px;
  border: solid 1px #808080;
  display: inline-block;
  border-radius: 10px;
  font-size: 22px;
  text-align: center;
  margin: 3px;
  background-size: cover;
  background-position: center;
}

.card .value {
  font-size: 15pt;
  font-family: sans-serif;
  background-color: white;
}

.card .back {
  background-image: url("../assets/shirt.png");
  height: 100%;
  width: 100%;
  background-position: center;
}

.card .suit {
  background-image: url("../assets/suits.png");
  height: 100px;
  width: 90px;
}

.card .diamonds {
  background-position-y: 100px;
}

.card .hearts {
  background-position-x: 90px;
}

.card .clubs {
  background-position-x: 90px;
  background-position-y: 100px;
}
</style>
