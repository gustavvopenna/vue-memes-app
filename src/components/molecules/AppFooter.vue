<script setup lang="ts">
import { CodeBracketIcon } from '@heroicons/vue/24/outline';

const profile = {
  name: 'Gustavo Peña',
  linkedIn: 'https://www.linkedin.com/in/gustavo-s-pena/'
};
</script>

<template>
  <div class="container">
    <div class="copyright">
      <span>Hecho por
        <a :href="profile.linkedIn" target="_blank" rel="noreferrer">
        {{ profile.name }}
        </a> usando Vue
      </span>
      <CodeBracketIcon class="icon"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-top: 2px solid #f1f5f9;
  padding: 1rem;
  display: flex;
  align-items: center;
}

.copyright {
  display: flex;
  align-items: center;
}

.copyright a {
  color: deeppink;
  font-weight: 500;
}
.copyright a:hover {
  text-decoration: underline;
}
.icon {
  width: 20px;
  height: 20px;
  color: #475569;
  margin-inline: 4px;
}
</style>