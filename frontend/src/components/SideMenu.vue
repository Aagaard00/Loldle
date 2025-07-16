<script setup lang="ts">
const props = defineProps<{
  show: boolean;
  close: () => void;
}>();
</script>

<template>
  <Teleport to="body">
    <div class="overlay" v-if="show" @click="close">
      <div class="menu-container" @click.stop>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  z-index: 9999;

  height: 100%;
  width: 100%;

  top: 0;
  left: 0;

  background-color: rgba(100, 100, 100, 0.15);
}

.menu-container {
  height: 100%;
  width: 20rem;

  display: flex;
  flex-direction: column;

  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: var(--color-background);

  animation-name: SlideInRight;
  animation-duration: 0.25s;
}

/* 
  How the animation works:
  1. Shift the entire element out of the screen to the left
  2. Let it transition back into its original placement
    - We do this by lettinh 100% default to { transform: none }
*/
@keyframes SlideInRight {
  0% {
    transform: translateX(-100%);
  }
}
</style>
