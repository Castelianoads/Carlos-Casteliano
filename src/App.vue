<template>
  <header class="p-4 flex justify-end container">
    <NavBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';

</script>

<style scoped></style>
