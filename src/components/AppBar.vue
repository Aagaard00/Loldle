<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <a class="brand" href="/">
      <img class="logo" src="@/assets/loldle_logo_black.svg" width="45" height="45" />
      <div>LoLdle</div>
    </a>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: x-large;
  white-space: nowrap;
}

.logo {
  margin-right: 0.5rem;
}

nav {
  font-size: 1rem;
  text-align: center;
  margin-right: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 0.5rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>