<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useMemesStore } from '@/stores/memes';

const store = useMemesStore();
const memes = computed(() => store.memes);

onMounted(() => {
  if(memes.value.length === 0) {
    store.fetchMemes()
  }
});
</script>

<template>
  <main>
    <div class="container">
      <div v-for="meme in memes" :key="meme.name">
        <div class="card">
          <div class="imageContainer">
            <img :src="meme.url" class="image" />
          </div>
          <div class="cardContent">
            <h3 class="cardName">{{ meme.name }}</h3>
            <span class="cardImageSize">
              {{ meme.width }} x
              {{ meme.height }}
            </span>
          </div>
        </div>
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

.card {
  background-color: #f8fafc;
  border-radius: 6px;
  overflow: hidden;
}

.cardContent {
  padding: 12px;
}

.cardName {
  font-size: 14px;
  font-weight: 500;
}

.cardImageSize {
  font-size: 12px;
  color: #475569;
}

imageContainer {
  max-width: 150px;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>