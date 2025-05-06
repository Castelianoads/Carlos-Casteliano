<template>
  <div class="flex flex-col md:flex-row items-center font-sans gap-8">
    <div class="md:w-1/2 flex flex-col items-center">
      <img src="../assets/carlos.jpg" alt="Minha Foto" class="w-60 h-60 rounded-full shadow-md" />
    </div>

    <div class=" md:w-4/6 text-center md:text-left">
      <h1 class="text-4xl font-bold mb-4 break-words md:whitespace-nowrap">
        Carlos Eduardo Casteliano
      </h1>

      <p class="text-base mt-3 max-w-2xl text-justify">
        Sou desenvolvedor backend especializado em .NET (C#), com sólida experiência na construção de APIs, aplicações
        web, desktop (Windows Forms) e na integração entre sistemas. Trabalho com ORMs como Entity Framework e Dapper,
        utilizando bancos de dados Firebird, MySQL e PostgreSQL.
      </p>

      <p class="text-base mt-3 max-w-2xl text-justify">
        Tenho domínio em ambientes Linux (com Nginx) e Windows (IIS), além de experiência no frontend com ASP.NET MVC,
        Vue.js, jQuery, JavaScript, TypeScript, Bootstrap, HTML e CSS.
      </p>

      <p class="text-base mt-3 max-w-2xl text-justify">
        Atuo com ferramentas como Azure DevOps, Docker, Git/GitHub e pipelines de CI/CD. Possuo forte conhecimento em
        padrões de projeto (Design Patterns), princípios SOLID, DDD, Clean Architecture e metodologias ágeis como Scrum
        e Kanban.
      </p>

      <p class="text-base mt-3 max-w-2xl text-justify">
        Gosto de resolver problemas, tive a oportunidade de atuar em projetos desafiadores na empresa que trabalho,
        estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Sempre animado com a
        oportunidade de contribuir com minha experiência em novos projetos e tenho paixão em desenvolver software.
      </p>

      <div class="flex justify-center md:justify-start space-x-6 mt-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a href="https://www.linkedin.com/in/carlos-eduardo-casteliano/" @click="IrPara('Linkedin')"
                target="_blank" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="hover:text-gray-500"
                  viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a href="https://github.com/castelianoads" target="_blank" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="hover:text-gray-500"
                  viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a href="https://dev.azure.com/casteliano" target="_blank" aria-label="Azure DevOps">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="hover:text-gray-500"
                  viewBox="0 0 128 128">
                  <path fill="currentColor"
                    d="M120.89 28.445v69.262l-28.445 23.324l-44.09-16.07v15.93L23.395 88.25l72.746 5.688V31.574ZM96.64 31.93L55.82 7.11v16.285L18.348 34.418L7.109 48.852v32.785l16.075 7.11V46.718Zm0 0" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Azure DevOps</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a href="mailto:contato@carloscasteliano.com.br" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="hover:text-gray-500"
                  viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a href="https://www.instagram.com/carloscasteliano/" target="_blank" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="hover:text-gray-500"
                  viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">
import { event } from 'vue-gtag';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

function IrPara(path: string): void {
  event('action', { event_label: 'event_label', event_category: 'event_category', value: 'value', method: 'method' })
  event('Linkedin', { event_label: path })
  event('Linkedin', { method: 'Linkedin' })
}

</script>

<style scoped>
/* Para garantir que o texto caiba em uma linha no celular */
h1 {
  word-wrap: break-word;
  /* Impede a quebra de palavras grandes */
}
</style>
