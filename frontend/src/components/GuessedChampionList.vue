<script setup lang="ts">
import type { Champion } from '@/interfaces/ChampionInterface';

const props = defineProps<{
    guessedChampions: Champion[];
}>();
</script>

<template>
    <div class="container">
        <div class="grid" v-for="champion in guessedChampions">
            <img class="item" :src="champion.imageUrl" />
            <div class="item">{{ champion.name }}</div>
            <div class="item">{{ champion.positions.join(", ") }}</div>
            <div class="item">{{ champion.species.join(", ") }}</div>
            <div class="item">{{ champion.resource }}</div>
            <div class="item">{{ champion.rangeType.join(", ") }}</div>
            <div class="item">{{ champion.regions.join(", ") }}</div>
            <div class="item">{{ champion.releaseYear }}</div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 40rem;
}

.grid {
    padding: 0.25rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
}

.item {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    width: 4rem;

    border: 1px;
    border-style: solid;
    border-radius: 0.25rem;
}
</style>