<script setup lang="ts">
import IconBurgerMenu from './icons/IconBurgerMenu.vue';
import placeholderHandler from '@/utils/placeholderHandler';
</script>

<template>
  <div class="container">
    <div class="row" style="align-items: center; gap: 0.5rem;">
      <button class="burger-menu" @click="placeholderHandler('Burger-menu button')">
        <IconBurgerMenu />
      </button>
      <a class="brand" href="/">
        <img class="logo" src="@/assets/loldle_logo_black.svg" />
        <div>LoLdle</div>
      </a>
    </div>

    <span class="avatar" @click="placeholderHandler('User avatar/settings')">
      <img src="@/assets/smoll-platypus.png" />
    </span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.burger-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  width: 1.8rem;
  height: 1.8rem;
  padding: 0.2rem;
  border: 1px;
  border-style: solid;
  border-radius: 25%;
  cursor: pointer;
}

.burger-menu:hover {
  background-color: var(--color-background-mute);
}

.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: x-large;
  white-space: nowrap;
  gap: 0.5rem;
  padding: 0 0.2rem;
  border-radius: 0.5rem;
}

.brand:hover {
  background-color: var(--color-background-mute);
}

.logo {
  width: 2rem;
  height: 2rem;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px;
  border-style: solid;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.avatar img {
  width: inherit;
  height: inherit;
}
</style>