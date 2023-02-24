<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppSearchBar from './components/molecules/AppSearchBar.vue';
import AppSidebar from './components/molecules/AppSidebar.vue';
import AppFooter from './components/molecules/AppFooter.vue';

</script>

<template>
  <div class="layout">
    <header>
      <AppSidebar />
    </header>

    <div class="searchbar">
      <AppSearchBar />
    </div>
    
    <main>
      <RouterView />
    </main>
  
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas: 
    "sidebar searchbar"
    "sidebar main"
    "sidebar footer";
  min-height: 100vh;
}

header {
  grid-area: sidebar;
  padding: 1rem 0;
  border-right: 2px solid #f1f5f9;
  background-color: #4338ca;
  color: #e0e7ff;
  align-self: start;
  position: sticky;
  top: 0;
  height: 100vh;
}

.searchbar {
  grid-area: searchbar;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
  border-bottom: 2px solid #f1f5f9;
  color: black;
  padding: 1rem;
}

main {
  max-width: 1280px;
  grid-area: main;
  padding: 1rem;
  background-color: #f8fafc;
}

footer {
  grid-area: footer;
}

@media screen and (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
    grid-template-rows: 50px 50px 1fr 50px;
    grid-template-areas: 
      "sidebar"
      "searchbar"
      "main"
      "footer";
  }
}
</style>
