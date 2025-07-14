<script setup lang="ts">
import { ref } from "vue";
import AvatarCircle from "./AvatarCircle.vue";
import BurgerButton from "./BurgerButton.vue";
import placeholderHandler from "@/utils/placeholderHandler";
import IconLoldle from "./icons/IconLoldle.vue";
import NavMenu from "./NavMenu.vue";

const showMenu = ref(false);
</script>

<template>
  <div class="container">
    <div class="row" style="align-items: center; gap: 0.5rem">
      <BurgerButton @click="() => showMenu = true" />
      <NavMenu :show="showMenu" :close="() => showMenu = false" />
      <RouterLink class="brand" to="/">
        <IconLoldle class="logo" />
        <div>LoLdle</div>
      </RouterLink>
    </div>

    <AvatarCircle class="avatar" @click="placeholderHandler('Open user settings')" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

.avatar {
  margin-right: 0.5rem;
}
</style>
