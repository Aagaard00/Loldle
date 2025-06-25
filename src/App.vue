<script setup lang="ts">
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
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
  display: inline-flex;
  align-items: center;
  justify-content: right;
  background-color: var(--color-background);
  width: 100%;
  max-height: 100%;
  padding: 0.5rem;
}

body {
  width: 100%;
  max-height: 100%;
  padding: 0.5rem;
}
</style>
