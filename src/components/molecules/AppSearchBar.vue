<script setup lang="ts">
import { useGifsStore } from '@/stores/gifs';
import { useMemesStore } from '@/stores/memes';

// const store = useMemesStore();
const { fetchSearch, searchQuery } = useGifsStore();
</script>

<template>
  <div class="searchbar">
    <form @submit.prevent="fetchSearch(searchQuery)">
      <input
        type="text"
        placeholder="Search for a meme"
        v-model="searchQuery"
      />
      <input
        type="submit"
        value="Buscar"
      >
    </form>
  </div>
</template>

<style scoped>
</style>