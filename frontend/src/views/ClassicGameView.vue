<script setup lang="ts">
import ChampionSelector from '@/components/ChampionSelector.vue';
import type { Champion } from '@/interfaces/ChampionInterface';
import useChampionStore from '@/stores/useChampionStore';
import placeholderHandler from '@/utils/placeholderHandler';
import { computed, ref, type ComputedRef, type Ref } from 'vue';

const answers: Ref<Set<String>> = ref(new Set());

const championStore = useChampionStore();

const availableChampions: ComputedRef<Champion[]> = computed((): Champion[] => {
  return championStore.getAvailableChampions(answers.value);
})

const guessedChampions: ComputedRef<Champion[]> = computed((): Champion[] => {
  return championStore.getGuessedChampions(answers.value);
})

function makeGuess(payload: { name: string }){
  answers.value.add(payload.name);
}
</script>

<template>
  <div class="game-container">
    <h1>Guess Today's Champion</h1>
    <p class="hint-text">Type any champions name to begin</p>

    <ChampionSelector :champions="availableChampions" @guess="makeGuess" />

    <div v-for="champion in guessedChampions">
      {{ champion.name }}
    </div>
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
