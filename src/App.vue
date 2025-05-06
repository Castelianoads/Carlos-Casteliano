<template>
  <header class="p-4 flex justify-end container">
    <ThemeToggle />
  </header>

  <HomeView></HomeView>
</template>

<script setup lang="ts">
import ThemeToggle from './components/ThemeToggle.vue';
import HomeView from './views/HomeView.vue';
</script>

<style scoped></style>
