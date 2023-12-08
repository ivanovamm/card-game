<script setup>

import {onMounted, ref} from "vue";

let suits = ["spades", "clubs", "diamonds", "hearts"];
const values = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let deck = ref([]);
function getDeck() {
  let new_deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = {Value: values[j], Suit: suits[i], flipped: false}
      new_deck.push(card);
    }
  }
  return new_deck;
}

// function mix() {
//   for (let i = 0; i < 100; i++) {
//     let location1 = Math.floor(Math.random() * deck.value.length);
//     let location2 = Math.floor(Math.random() * deck.value.length);
//     let newLocation;
//     newLocation = deck.value[location1];
//     deck.value[location1] = deck.value[location2];
//     deck.value[location2] = newLocation;
//   }
// }

function renderDeck() {
  document.getElementById("deck").innerHTML = "";
  for (let i = 0; i < deck.value.length; i++) {
    let card = document.createElement("div");
    let value = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + deck[i].Suit;
    value.innerHTML = deck.value[i].Value;
    card.appendChild(value);
    card.appendChild(suit);
    document.getElementById("deck").appendChild(card);
  }
}
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

onMounted(() => {
  deck.value = getDeck();
});

function mix() {
  shuffleDeck(deck.value);
}

// function changeSide(card) {
//   card.flipped = !card.flipped;
//   card.flipped ? card.class = 'flipped' : card.class = '';
// }


function changeSide(card) {
  card.flipped = !card.flipped;
}





</script>
<template>
  <div class="deck">
    <h1>A Deck of Cards</h1>
    <button class="mix" @click="mix">Mix</button>
    <div class="card" v-for="(card, index) in deck" :key="index" @click="changeSide(card)">
      <div class="value">{{ card.Value }}</div>
      <div :class="'suit ' + card.Suit"></div>
      <div class="back" v-if="card.flipped"></div>
    </div>


    <!--    <div class="card" v-for="(card, index) in deck" :key="index" @click="changeSide(card)" :class="{ 'flipped': card.flipped }" :data-index="index">-->
<!--    <div class="value">{{ card.Value }}</div>-->
<!--      <div :class="'suit ' + card.Suit" ></div>-->
<!--      <div class="back" v-if="card.flipped"></div>-->
<!--    </div>-->
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
  /*background-image: linear-gradient(45deg, hotpink , skyblue 100%);*/
}

.mix {
  align-items: center;
  background-color: skyblue;

}

.deck .card {
  border: solid 1px #aaa;
  border-radius: 9px;
  width: 95px;
  height: 150px;
  float: left;
  //background-color: white;
  padding: 3px 3px 3px 3px;
  margin: 5px;
}

.card {
  width: 50px;
  padding: 10px;
  border: solid 1px #808080;
  //background-color: white;
  display: inline-block;
  border-radius: 10px;
  font-size: 22px;
  text-align: center;
  margin: 3px;
}

.card .value {
  font-size: 15pt;
  font-family: sans-serif;
  background-color: white;
}


.card .back{
  height: 100%;
  width: 100%;
  background-image: url("../assets/shirt.png");
  //background-position: center;
  background-size: cover;
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