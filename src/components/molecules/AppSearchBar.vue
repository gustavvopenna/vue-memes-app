<script setup lang="ts">
import { useMemesStore } from '@/stores/memes';

const store = useMemesStore();
</script>

<template>
  <div class="searchbar">
    <input
      type="text"
      placeholder="Search for a meme"
      v-model="store.searchQuery"
    />
    <input type="button" value="Buscar" @click="store.searchMemes(store.searchQuery)">
  </div>
</template>

<style scoped>
</style>