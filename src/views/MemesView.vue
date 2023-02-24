<script setup lang="ts">
import AppCard from '@/components/molecules/AppCard.vue';
import AppCardsGrid from '@/components/molecules/AppCardsGrid.vue';
import { useMemes } from '@/composables/useMemes';

const { memes } = useMemes()

</script>

<template>
  <h1 class="title">Memes</h1>
  <section>
    <AppCardsGrid>
      <AppCard
        v-for="meme in memes"
        :key="meme.name"
        :image="meme.url"
        :title="meme.name"
      >
        <template #description>
          {{ meme.width }} x {{ meme.height }}
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
