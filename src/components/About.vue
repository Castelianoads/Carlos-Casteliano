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
        <a href="https://www.seusite.com" target="_blank" aria-label="Website">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700 hover:text-blue-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3c2.21 0 4 .895 5.333 2.354A8.001 8.001 0 0112 21a8.001 8.001 0 01-5.333-15.646A7.974 7.974 0 0112 3z" />
          </svg>
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/seulinkedin" target="_blank" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700 hover:text-blue-600" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 8a6 6 0 016 6v7.5a.75.75 0 01-.75.75H17.5a.75.75 0 01-.75-.75v-7.5a3 3 0 10-6 0v7.5a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75V14a6 6 0 016-6zM2.25 7.5A1.5 1.5 0 113.75 9H2.25V7.5zm0 3.75H3.75v7.5H2.25v-7.5z" />
          </svg>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/seugithub" target="_blank" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700 hover:text-gray-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 2.25c-5.387 0-9.75 4.363-9.75 9.75 0 4.312 2.792 7.97 6.675 9.257.487.09.663-.21.663-.467v-1.68c-2.718.593-3.292-1.312-3.292-1.312-.442-1.122-1.08-1.42-1.08-1.42-.884-.605.067-.593.067-.593 1.008.07 1.54 1.038 1.54 1.038.875 1.497 2.293 1.064 2.85.815.09-.634.343-1.064.625-1.31-2.17-.25-4.452-1.086-4.452-4.834 0-1.07.382-1.944 1.01-2.63-.102-.25-.44-1.26.095-2.63 0 0 .826-.266 2.71 1.008a9.431 9.431 0 014.932 0c1.883-1.274 2.71-1.008 2.71-1.008.536 1.37.198 2.38.096 2.63.63.686 1.01 1.56 1.01 2.63 0 3.758-2.285 4.584-4.463 4.83.353.304.666.906.666 1.832v2.71c0 .258.176.558.664.467A9.757 9.757 0 0021.75 12c0-5.387-4.363-9.75-9.75-9.75z" />
          </svg>
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
        <a href="mailto:seuemail@gmail.com" aria-label="Gmail">
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
