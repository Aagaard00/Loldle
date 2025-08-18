<script setup lang="ts">
import IconBurgerMenu from "./icons/IconBurgerMenu.vue";

const emit = defineEmits<{
  (emit: "click", payload: MouseEvent): void;
}>();
</script>

<template>
  <button class="button-subtle" @click="emit('click', $event)">
    <IconBurgerMenu />
  </button>
</template>

<style scoped></style>
