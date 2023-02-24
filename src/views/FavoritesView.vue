<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useGifs } from '@/composables/useGifs';
import { giphyApi } from '@/services/giphyApi';
import AppCard from '@/components/molecules/AppCard.vue';
import AppCardsGrid from '@/components/molecules/AppCardsGrid.vue';

const { favorites: favoritesIds } = useGifs()
const favorites = ref([])

onMounted(() => {
  favoritesIds.value.forEach(async (id) => {
    const response = await giphyApi.gif(id);
    favorites.value.push(response.data)
  })
})
</script>

<template>
  <div class="wrapper">
    <h1>Favorites</h1>
    <div>
      <AppCardsGrid>
        <AppCard
          v-for="gif in favorites"
          :key="gif.id"
          :image="gif.images.preview_gif.url"
          :title="gif.title"
        >
          <template #description>
            {{ gif.images.preview_gif.width }} x {{ gif.images.preview_gif.height }}
          </template>
        </AppCard>
      </AppCardsGrid>
    </div>
  </div>
</template>

<style>
</style>
