<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
</script>

<template>
  <header>
    <AppBar />
  </header>

  <body>
    <RouterView />
  </body>
</template>

<style scoped>
header {
  width: 100%;

  padding: 0.5rem;
  border-bottom: 2px solid var(--color-border)
}

body {
  width: 100%;
  max-height: 100%;
  padding: 0.5rem;
}
</style>
