<script setup lang="ts">
import SideMenu from './SideMenu.vue';
import logo from '@/assets/loldle_logo_black.svg';
const props = defineProps<{
  show: boolean;
  close: () => void;
}>();

const routes: { path: string, name: string, img: string }[] =
  [
    { path: "/", name: "Home", img: logo },
    { path: "/classic", name: "Classic", img: logo },
    { path: "/", name: "Quote", img: logo },
    { path: "/", name: "Ability", img: logo },
    { path: "/", name: "Emoji", img: logo },
    { path: "/", name: "Splash", img: logo },
  ]
</script>

<template>
  <SideMenu :show="show" :close="close">
    <div class="menu-header">
      <img class="logo" src="@/assets/loldle_logo_black.svg" />
      <button class="button-simple" @click="close">X</button>
    </div>

    <div class="menu-body">
      <nav class="nav" v-for="route in routes">
        <div @click="close">
          <RouterLink class="nav-link" :to="route.path">
            <img :src="route.img" />
            <p>{{ route.name }}</p>
          </RouterLink>
        </div>
      </nav>
    </div>
  </SideMenu>
</template>

<style scoped>
.menu-header {
  padding: 1rem;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

}

.menu-body {
  padding: 0.7rem;

  display: flex;
  flex-direction: column;
}

.nav {
  display: flex;
  flex-direction: inherit;
}

.nav-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;

  border-radius: 0.5rem;

  color: var(--color-text);
  text-decoration: none;
}

.nav-link:hover {
  background-color: var(--color-background-mute);
}

.nav-link img {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
