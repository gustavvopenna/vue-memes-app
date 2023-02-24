<script setup lang="ts">
import AppCardsGrid from '@/components/molecules/AppCardsGrid.vue';
import AppCard from '@/components/molecules/AppCard.vue';
import { useGifs } from '@/composables/useGifs';

const { gifs, addToFavorites } = useGifs();

const handleTap = (gifId: string) => {
  console.log({ gifId })
  addToFavorites(gifId);
}
</script>

<template>
  <section>
    <div class="container">
      <AppCardsGrid>
        <AppCard v-for="gif in gifs" :key="gif.title" :image="gif.images.preview_gif.url" :title="gif.title"
          @tap="handleTap" :id="gif.id">
          <template #description>
            {{ gif.images.preview_gif.width }} x {{ gif.images.preview_gif.height }}
          </template>
        </AppCard>
      </AppCardsGrid>
    </div>
  </section>
</template>

<style scoped></style>