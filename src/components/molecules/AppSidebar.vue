<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { HomeIcon, BookmarkIcon, NewspaperIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <nav>
    <RouterLink to="/" active-class="active">
      <div class="navItem">
        <HomeIcon class="icon" />
        <span>Home</span>
      </div>
    </RouterLink>
    <RouterLink to="/favorites" active-class="active">
      <div class="navItem">
        <BookmarkIcon class="icon" />
        <span>Favorites</span>
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
  gap: 1rem;
  padding: 0 1rem;
}

.navItem {
  font-size: 20px;
  padding-inline: 12px;
  padding-block: 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 0.5rem;
  width: 20px;
  height: 20px;
  color: #475569;
}

.navItem:hover {
  background-color: #f1f5f9;
  color: black
}

.active .navItem {
  background-color: dodgerblue;
  color: white;
}

.active .navItem span {
  font-weight: 500;
}
.active .navItem svg {
  stroke: white;
}

</style>
