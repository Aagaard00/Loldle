<script setup lang="ts">
const emit = defineEmits<{
  (emit: "click", payload: MouseEvent): void
}>();
</script>

<template>
  <span class="avatar" @click="event => emit('click', event)">
    <!-- Hardcoded placeholder -->
    <img src="@/assets/smoll-platypus.png" />
  </span>
</template>

<style scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
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