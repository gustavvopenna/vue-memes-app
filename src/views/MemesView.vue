<script setup lang="ts">
import AppCard from '@/components/molecules/AppCard.vue';
import { useMemes } from '@/composables/useMemes';

const { memes } = useMemes()

</script>

<template>
  <main>
    <div class="container">
      <div v-for="meme in memes" :key="meme.name">
        <AppCard :image="meme.url" :title="meme.name">
          <template #description>
            {{ meme.width }} x {{ meme.height }}
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
  grid-template-rows: mansory;
  gap: 12px;
}

@media screen and (max-width: 768px) { 
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
