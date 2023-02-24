<script setup lang="ts">
import AppCardsGrid from '@/components/molecules/AppCardsGrid.vue';
import AppCard from '@/components/molecules/AppCard.vue';

import { useGifs } from '@/composables/useGifs';
import { useFavorites } from '@/composables/useFavorites';

const { isFavorite, handleFavorite } = useGifs()
const { favorites } = useFavorites()

</script>

<template>
  <div class="wrapper">
    <h1 class="title">Favoritos</h1>
    <section>
      <AppCardsGrid>
        <AppCard
          v-for="gif in favorites"
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
  </div>
</template>

<style scoped>
.title {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 12px;
}
</style>
