<template>
  <div class="container mx-auto p-4 my-10">
    <About />
    <div class="mt-10">
      <!-- <h2 class="text-3xl font-bold mb-4 text-center">Meus Projetos</h2> -->
      <div class="flex flex-wrap justify-center">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
    <div class="mt-12">
      <h2 class="text-3xl font-bold mb-4 text-center">Entre em Contato</h2>
      <ContactForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import About from '@/components/About.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ContactForm from '@/components/ContactForm.vue';

const projects = ref([
  {
    id: 1,
    name: 'Produção Mecânico Web',
    description: 'Este é um projeto incrível. Outro projeto fantástico. Outro projeto fantástico. Outro projeto fantástico.',
    website: 'https://producaomecanico.carloscasteliano.com.br',
    github: 'https://github.com/Castelianoads/Producao-Mecanico-Web',
  },
  {
    id: 2,
    name: 'Produção Mecânico App',
    description: 'Outro projeto fantástico. Outro projeto fantástico. Outro projeto fantástico.',
    website: 'https://carloscasteliano.com.br/producaomecanico',
    github: 'https://github.com/Castelianoads/Producao-Mecanico-App-Flutter',
  },

])
</script>
