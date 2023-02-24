<script setup lang="ts">
const props = defineProps<{
  image: string;
  title: string;
}>();
</script>

<template>
  <div class="card">
    <div class="imageContainer">
      <img :src="props.image" class="image" />
    </div>
    <div class="cardContent">
      <h3 class="cardName">{{ props.title }}</h3>
      <span class="cardDescription">
        <slot name="description"></slot>
      </span>
    </div>
  </div>
</template>

<style scoped>
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

.cardDescription {
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