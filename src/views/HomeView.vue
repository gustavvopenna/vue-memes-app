<script setup lang="ts">
import AppCardsGrid from '@/components/molecules/AppCardsGrid.vue';
import AppCard from '@/components/molecules/AppCard.vue';

import { useGifs } from '@/composables/useGifs';

const { gifs, handleFavorite } = useGifs();
</script>

<template>
  <section>
    <div class="container">
      <AppCardsGrid>
        <AppCard
          v-for="gif in gifs"
          :key="gif.title"
          :image="gif.images.preview_gif.url"
          :title="gif.title"
          :id="gif.id"
          @tap="handleFavorite"
        >
          <template #description>
            {{ gif.images.preview_gif.width }} x {{ gif.images.preview_gif.height }}
          </template>
        </AppCard>
      </AppCardsGrid>
    </div>
  </section>
</template>

<style scoped></style>