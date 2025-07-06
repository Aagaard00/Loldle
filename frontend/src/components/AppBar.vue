<script setup lang="ts">
import AvatarCircle from "./AvatarCircle.vue";
import BurgerMenuButton from "./BurgerMenuButton.vue";
import placeholderHandler from "@/utils/placeholderHandler";
</script>

<template>
  <div class="container">
    <div class="row" style="align-items: center; gap: 0.5rem">
      <BurgerMenuButton @click="placeholderHandler('Open site navigation menu')" />
      <a class="brand" href="/">
        <img class="logo" src="@/assets/loldle_logo_black.svg" />
        <div>LoLdle</div>
      </a>
    </div>

    <AvatarCircle class="avatar" @click="placeholderHandler('Open user settings')" />
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
  margin-right: 0.5rem;
}
</style>
