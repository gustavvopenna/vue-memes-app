<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  image: string;
  title: string;
  id?: string;
  isFavorite?: boolean;
}>();

const emit = defineEmits<{
  (e: 'tap', id: string): void;
}>();
</script>

<template>
  <div
    class="card"
    :data-is-favorite="String(isFavorite || false)"
    @click="$emit('tap', props.id)"
  >
    <div class="imageContainer">
      <img :src="props.image" :alt="props.title" class="image" />
    </div>
    <div class="cardContent">
      <h3 class="cardName">{{ props.title }}</h3>
      <div class="cardDescription">
        <slot name="description"></slot>
        <button>
          <HeartIcon class="icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.card:hover {
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
  transform: translateY(-2px)
}

.cardContent {
  padding: 12px;
}

.cardName {
  font-size: 14px;
  font-weight: 500;
}

.cardDescription {
  font-size: 12px;
  color: #475569;
  display: flex;
  justify-content: space-between;
}

imageContainer {
  max-width: 150px;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon {
  width: 16px;
  height: 16px;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

[data-is-favorite="true"] button .icon {
  fill: red;
  color: red;
}
</style>