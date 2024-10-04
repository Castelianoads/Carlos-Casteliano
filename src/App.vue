<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <HelloWorld msg="You did it!" />
  </div>
  <RouterView />
</template>

<style scoped></style>
