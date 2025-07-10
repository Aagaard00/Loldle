<script setup lang="ts">
const emit = defineEmits<{
  (emit: "click", payload: MouseEvent): void;
}>();
</script>

<template>
  <span class="avatar" @click="(event) => emit('click', event)">
    <!-- Hardcoded placeholder -->
    <img src="@/assets/smoll-platypus.png" />
  </span>
</template>

<style scoped>
.avatar {
  height: 2.5rem;
  width: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px;
  border-style: solid;
  border-radius: 50%;

  overflow: hidden;

  cursor: pointer;
}

.avatar img {
  height: inherit;
  width: inherit;
}
</style>
