<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
</script>

<template>
  <div class="layout">
    <header>
      <AppBar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  width: 100%;
  padding: 0.7rem;
  border-bottom: 2px;
  border-bottom-style: solid;
  border-color: var(--color-border);
}

main {
  flex: 1;
  padding: 0 0.5rem;
}
</style>
