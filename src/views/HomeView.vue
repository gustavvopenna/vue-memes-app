<script setup lang="ts">
import AppCardsGrid from '@/components/molecules/AppCardsGrid.vue';
import AppCard from '@/components/molecules/AppCard.vue';

import { useGifs } from '@/composables/useGifs';

const { gifs, handleFavorite, isFavorite } = useGifs();
</script>

<template>
  <h1 class="title">Gifs</h1>
  <section>
    <AppCardsGrid>
      <AppCard
        v-for="gif in gifs"
        :key="gif.id"
        :image="gif.images.preview_gif.url"
        :title="gif.title"
        :id="gif.id"
        :is-favorite="isFavorite(gif.id)"
        @tap="handleFavorite"
      >
        <template #description>
          {{ gif.images.preview_gif.width }} x {{ gif.images.preview_gif.height }}
        </template>
      </AppCard>
    </AppCardsGrid>
  </section>
</template>

<style scoped>
.title {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 12px;
}
</style>