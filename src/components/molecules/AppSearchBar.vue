<script setup lang="ts">
import { useGifsStore } from '@/stores/gifs';

const { fetchSearch, searchQuery } = useGifsStore();
</script>

<template>
  <div>
    <form @submit.prevent="fetchSearch(searchQuery)" class="wrapper">
      <input
        type="text"
        placeholder="Gatos, perros, etc."
        v-model="searchQuery"
        class="searchbar__input"
      />
      <input
        type="submit"
        value="Buscar"
      >
    </form>
  </div>
</template>

<style scoped>

.wrapper {
  display: flex;
  gap: 0.5rem;
}
.searchbar__input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
}

.searchbar__input:focus {
  border: 2px solid dodgerblue;
}

input[type="submit"] {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #fff;
  transition: all 0.15s ease-in-out;
}

input[type="submit"]:hover {
  background-color: dodgerblue;
  color: aliceblue;
  font-weight: 500;
}
</style>