<script setup lang="ts">
</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

@media screen and (max-width: 768px) { 
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>