<template>
  <div class="flex justify-center p-3">
    <div class="bg-white shadow-lg rounded-lg p-4 border border-gray-300 max-w-md w-full">
      <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>
      <div class="flex justify-between">
        <a :href="project.website" target="_blank" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Visitar Site
        </a>
        <a :href="project.github" target="_blank" class="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number;
  name: string;
  description: string;
  website: string;
  github: string;
}

const props = defineProps<{
  project: Project
}>();
</script>

<style scoped>
/* Aqui você pode adicionar estilos adicionais, se necessário */
</style>