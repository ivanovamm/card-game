<script setup>
import { useRouter } from 'vue-router';
import Cards from "@/components/Cards.vue";

const router = useRouter();

const goToNewGame = () => {
  router.push({ name: 'game' });
};
</script>

<template>
    <button class="start" @click="goToNewGame">Start the game!</button>
    <Cards v-if="$route.name !== 'game'"></Cards>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}

button {
  display: flex;
  place-items: center;
  font-family: Arial, sans-serif;
  font-size: large;
  cursor: pointer;
  text-align: center;
  border: solid black;
  border-radius: 20px;
  color: black;
  height: 150px;
  width: 150px;
  align-self: center;
}
</style>
