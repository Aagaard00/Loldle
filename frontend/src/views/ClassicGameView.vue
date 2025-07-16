<script setup lang="ts">
import ChampionSelector from '@/components/ChampionSelector.vue';
import type { ClassicChampion } from '@/interfaces/ChampionInterfaces';
import placeholderHandler from '@/utils/placeholderHandler';

const champions: ClassicChampion[] = [
  {
    name: "Braum",
    imageUrl: "https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Braum.png",
    gender: "Male",
    positions: ["Support"],
    species: ["Human, Iceborn"],
    resource: "Mana",
    rangeType: ["Melee"],
    regions: ["Freljord"],
    releaseYear: "2014"
  },
  {
    name: "Gnar",
    imageUrl: "https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Gnar.png",
    gender: "Male",
    positions: ["Top"],
    species: ["Yordle"],
    resource: "Rage",
    rangeType: ["Ranged", "Melee"],
    regions: ["Freljord"],
    releaseYear: "2014"
  }
];
</script>

<template>
  <div class="game-container">
    <h1>Guess Today's Champion</h1>
    <p class="hint-text">Type any champions name to begin</p>

    <ChampionSelector :champions="champions" @guess="(payload) => placeholderHandler(`Guess champion: ${payload.name}`)"/>
  </div>
</template>

<style scoped>
.game-container {
  height: 100%;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.hint-text {
  margin-bottom: 1rem;
}
</style>
