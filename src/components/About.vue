<template>
  <div class="flex flex-col md:flex-row items-center justify-between gap-8">
    <!-- Imagem -->
    <div class="md:w-1/2 flex justify-center">
      <img src="../assets/carlos_img.jpg.jpg" alt="Minha Foto" class="rounded-full w-48 h-48 object-cover" />
    </div>

    <!-- Texto e Ícones -->
    <div class="md:w-1/2 text-center md:text-left">
      <!-- Nome Responsivo -->
      <h1 class="text-4xl font-bold mb-4 break-words md:whitespace-nowrap">
        Carlos Eduardo Casteliano
      </h1>
      <!-- <p class="text-lg">
        Sou desenvolvedor com experiência em diversas linguagens e tecnologias, incluindo
        JavaScript, TypeScript, Vue.js, Tailwind CSS, Flutter, C#, e muito mais.
      </p> -->

      <p class="text-lg">
        Em desenvolvimento
      </p>


      <!-- Ícones de Redes Sociais -->
      <div class="flex justify-center md:justify-start space-x-6 mt-4">
        <!-- Site -->
        <a href="https://www.carloscasteliano.com.br" target="_blank" aria-label="Website">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700 hover:text-blue-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3c2.21 0 4 .895 5.333 2.354A8.001 8.001 0 0112 21a8.001 8.001 0 01-5.333-15.646A7.974 7.974 0 0112 3z" />
          </svg>
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/carlos-eduardo-casteliano/" target="_blank" aria-label="LinkedIn">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
        </a>

        <!-- GitHub -->
        <a href="https://github.com/carloscastelianoads" target="_blank" aria-label="GitHub">
          <font-awesome-icon :icon="['fab', 'github']" size="lg" />
        </a>

        <!-- Azure DevOps -->
        <a href="https://dev.azure.com/seuprojeto" target="_blank" aria-label="Azure DevOps">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700 hover:text-blue-500" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 1.5a9 9 0 11-4.38 16.928l-3.735 1.166a.75.75 0 01-.95-.952l1.166-3.734A9 9 0 0112 1.5z" />
          </svg>
        </a>

        <!-- Gmail -->
        <a href="mailto:contato@carloscasteliano.com.br" aria-label="Gmail">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700 hover:text-red-500" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3.75 4.5h16.5A1.5 1.5 0 0121.75 6v12a1.5 1.5 0 01-1.5 1.5H3.75A1.5 1.5 0 012.25 18V6a1.5 1.5 0 011.5-1.5zM21 6l-9 6-9-6" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* Para garantir que o texto caiba em uma linha no celular */
h1 {
  word-wrap: break-word;
  /* Impede a quebra de palavras grandes */
}
</style>
