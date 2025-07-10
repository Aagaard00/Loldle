<script setup lang="ts">
import IconBurgerMenu from "./icons/IconBurgerMenu.vue";

const emit = defineEmits<{
  (emit: "click", payload: MouseEvent): void;
}>();
</script>

<template>
  <button class="burger-menu" @click="(event) => emit('click', event)">
    <IconBurgerMenu />
  </button>
</template>

<style scoped>
.burger-menu {
  height: 1.8rem;
  width: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-background);

  padding: 0.2rem;
  border: 1px;
  border-style: solid;
  border-radius: 25%;
  
  cursor: pointer;
}

.burger-menu:hover {
  background-color: var(--color-background-mute);
}
</style>
