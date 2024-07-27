<script setup>

import {onMounted, ref} from "vue";
import Game from "@/components/Game.vue";

let suits = ["spades", "clubs", "diamonds", "hearts"];
const values = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let deck = ref([]);
let card = ref([])
function getDeck() {
  let new_deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      card = {Value: values[j], Suit: suits[i], flipped: false}
      new_deck.push(card);
    }
  }
  return new_deck;
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


function changeSide(card) {
  card.flipped = !card.flipped;
}



</script>
<template>
  <div class="deck">
    <button
        class="mix" @click="mix">Mix</button>
    <div class="card" v-for="(card, index) in deck" :key="index" @click="changeSide(card)">
      <div class="value" v-if="!card.flipped">{{ card.Value }}</div>
      <div :class="'suit ' + card.Suit" v-if="!card.flipped"></div>
      <div class="back" v-if="card.flipped"></div>
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
}

.mix {
  margin-left: 650px;
  align-items: center;
  background-color: skyblue;

}

.collect {
  margin-left: 650px;
  align-items: center;
  background-color: skyblue;
  margin-top: 20px;
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
  background-size: cover;
  background-position: center;
}

.card .value {
  font-size: 15pt;
  font-family: sans-serif;
  background-color: white;
}


.card .back{
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