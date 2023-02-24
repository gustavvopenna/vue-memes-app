<script setup lang="ts">
import AppCard from '@/components/molecules/AppCard.vue';
import { useGifs } from '@/composables/useGifs';

const { gifs } = useGifs();
</script>

<template>
  <main>
    <div class="container">
      <div v-for="gif in gifs" :key="gif.title">
        <AppCard :image="gif.images.preview_gif.url" :title="gif.title">
          <template #description>
            {{ gif.images.preview_gif.width }} x {{ gif.images.preview_gif.height }}
          </template>
        </AppCard>
      </div>
    </div>
  </main>
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