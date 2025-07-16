<script setup lang="ts">
import type { Component } from 'vue';
import SideMenu from './SideMenu.vue';
import IconAbility from './icons/IconAbility.vue';
import IconClassic from './icons/IconClassic.vue';
import IconCross from './icons/IconCross.vue';
import IconHome from './icons/IconHome.vue';
import IconLoldle from './icons/IconLoldle.vue';
import IconQuote from './icons/IconQuote.vue';
import IconSmiley from './icons/IconSmiley.vue';
import IconSplash from './icons/IconSplash.vue';

const props = defineProps<{
  show: boolean;
  close: () => void;
}>();

const routes: { path: string, name: string, icon: Component }[] =
  [
    { path: "/", name: "Home", icon: IconHome },
    { path: "/classic", name: "Classic", icon: IconClassic },
    { path: "/quote", name: "Quote", icon: IconQuote },
    { path: "/ability", name: "Ability", icon: IconAbility },
    { path: "/emoji", name: "Emoji", icon: IconSmiley },
    { path: "/splash", name: "Splash", icon: IconSplash },
  ]
</script>

<template>
  <SideMenu :show="show" :close="close">
    <div class="menu-header">
      <IconLoldle class="logo" />
      <button class="button-simple" @click="close">
        <IconCross />
      </button>
    </div>

    <div class="menu-body">
      <nav class="nav" v-for="route in routes">
        <div @click="close">
          <RouterLink class="nav-link" :to="route.path">
            <component class="nav-icon" :is="route.icon" />
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

.nav-icon {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
