<script>
import { RouterLink } from 'vue-router'
</script>

<template>
  <img alt="Vue logo" class="logo" src="@/assets/loldle_logo_black.svg" width="55" height="55" />

  <div class="title">Loldle by Vue.js</div>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 0 0;
}

nav {
  width: 100%;
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