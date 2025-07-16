<script setup lang="ts">
import type { ClassicChampion } from '@/interfaces/ChampionInterfaces';
import placeholderHandler from '@/utils/placeholderHandler';
import { computed, ref, type ComputedRef, type Ref } from 'vue';
import IconArrowRight from './icons/IconArrowRight.vue';

const props = defineProps<{
  champions: ClassicChampion[];
}>();

const emit = defineEmits<{
  (emit: "guess", payload: { name: string }): void;
}>();

const showDropdown: Ref<boolean> = ref(false);
const inputText: Ref<string> = ref("");

const filteredChampions: ComputedRef<ClassicChampion[]> = computed(() => {
  const searchString = inputText.value.toLowerCase();
  return props.champions.filter(x => x.name.toLowerCase().includes(searchString))
});
</script>

<template>
  <div class="container">
    <div class="input-container">
      <input 
        placeholder="Type a champions name..."
        v-model="inputText"
        @focus="showDropdown = true"
        @blur="showDropdown = false"
      />
      <button @click="emit('guess', { name: filteredChampions[0].name })">
        <IconArrowRight />
      </button>
    </div>

    <div class="dropdown-container" v-show="showDropdown">
      <div 
        class="dropdown-item"
        @mousedown="emit('guess', {name: champion.name})"
        v-if="filteredChampions.length > 0"
        v-for="champion in filteredChampions"
      >
        <img class="champion-img" :src="champion.imageUrl" />
        {{ champion.name }}
      </div>
      <div class="no-champion" v-else>
        No Champion found...
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.input-container {
  display: flex;
  flex-direction: row;

  gap: 0.25rem;
}

input {
  height: 2rem;
  width: 13rem;

  padding-left: 0.5rem;
  background-color: var(--color-background);
  color: var(--color-text);

  border: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  border-color: var(--color-text);
}

button {
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-background);
  color: var(--color-text);

  border: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  border-color: var(--color-text);
}

button:hover {
  background-color: var(--color-background-mute);
}

.dropdown-container {
  position: absolute;
  z-index: 1;

  max-height: 15rem;
  width: 15.25rem;

  overflow-x: hidden;
  overflow-y: auto;

  margin-top: 0.15rem;

  background-color: var(--color-background);

  border: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  border-color: var(--color-text);
}

.dropdown-item {
  height: 3rem;

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  gap: 0.5rem;
  padding: 0.5rem;

  background-color: var(--color-background);

  cursor: pointer;
}

.dropdown-item:hover {
  background-color: var(--color-background-mute);
}

.champion-img {
  height: 2rem;
  width: 2rem;
}

.no-champion {
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>