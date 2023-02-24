<script setup lang="ts">
  import { computed } from 'vue';
  import { RouterLink } from 'vue-router';
  
  import { HomeIcon, BookmarkIcon, NewspaperIcon } from '@heroicons/vue/24/outline'
  import { useGifs } from '@/composables/useGifs';

  const { favorites } = useGifs()
  const count = computed(() => favorites.value.size)
</script>

<template>
  <nav>
    <div class="logo">
      <img src="https://media.giphy.com/media/CmoAZcsJ33ShWqufbd/giphy.gif" alt="avatar">
    </div>
    <RouterLink to="/" active-class="active">
      <div class="navItem">
        <HomeIcon class="icon" />
        <span>Gifs</span>
      </div>
    </RouterLink>
    <RouterLink to="/favorites" active-class="active">
      <div class="navItem">
        <BookmarkIcon class="icon" />
        <span>Favoritos ({{ count }})</span>
      </div>
    </RouterLink>
    <RouterLink to="/memes" active-class="active">
      <div class="navItem">
        <NewspaperIcon class="icon" />
        <span>Memes</span>
      </div>
    </RouterLink>
  </nav>
</template>

<style scoped>

nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
}

.navItem {
  font-size: 20px;
  padding-inline: 12px;
  padding-block: 6px;
  border-radius: 12px;
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 0.5rem;
  width: 20px;
  height: 20px;
  color: #e0e7ff;
}

.navItem:hover {
  background-color: #3730a3;
  color: #e0e7ff
}

.active .navItem {
  background-color: #312e81;
  color: #e0e7ff;
}

.active .navItem svg {
  stroke: white;
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
