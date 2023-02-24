<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { useGifsStore } from '@/stores/gifs';

const router = useRouter()
const { fetchSearch } = useGifsStore();

const searchQuery = ref('');

const handleSubmit = (query: string) => {
  if(router.currentRoute.value.name === 'home') {
    fetchSearch(query);
    searchQuery.value = '';
    return;
  }

  router.push({ name: 'home' }).then(() => {
    fetchSearch(query);
    searchQuery.value = '';
  })
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit(searchQuery)" class="wrapper">
      <input
        type="text"
        placeholder="Buscar gatos, perros, etc."
        v-model="searchQuery"
        class="searchbarInput"
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
.searchbarInput {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
}

.searchbarInput:focus {
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