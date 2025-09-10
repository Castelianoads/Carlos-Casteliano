<template>
  <div class="container font-sans p-4">
    <!-- Perfil -->
    <About></About>

    <!-- Tecnologias -->
    <section class="py-4">
      <h2 class="text-2xl font-semibold">Tecnologias</h2>
      <div class="grid grid-cols-4 md:grid-cols-8 gap-4 justify-items-center mt-3">
        <div v-for="tech in techs" :key="tech.label" class="text-center">
          <FontAwesomeIcon :icon="tech.icon" class="text-4xl" />
          <p class="text-xs mt-1">{{ tech.label }}</p>
        </div>
      </div>
    </section>

    <!-- Projetos -->
    <section class="py-5">
      <h2 class="text-2xl font-semibold">Meus Projetos</h2>
      <div class="grid md:grid-cols-2 gap-6 mt-3">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>

    <!-- Contato -->
    <ContactForm></ContactForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '@/components/home/ProjectCard.vue';
import ContactForm from '@/components/home/ContactForm.vue';
import About from '@/components/home/About.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHtml5,
  faCss3,
  faNodeJs,
  faLinux,
  faDocker,
  faGitAlt,
  faJs,
  faVuejs,
  faGithub,
  faFlutter,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

library.add(faHtml5, faCss3, faNodeJs, faLinux, faDocker, faGitAlt, faJs, faVuejs, faGithub, faFlutter, faBootstrap)

const techs = [
  { icon: faHtml5, label: 'HTML5' },
  { icon: faCss3, label: 'CSS3' },
  { icon: faJs, label: 'JavaScript' },
  { icon: faVuejs, label: 'Vue.js' },
  { icon: faNodeJs, label: 'Node.js' },
  { icon: faDocker, label: 'Docker' },
  { icon: faLinux, label: 'Linux' },
  { icon: faGitAlt, label: 'Git' },
  { icon: faFlutter, label: 'Flutter' },
  { icon: faBootstrap, label: 'Bootstrap' },
]

const projects = ref([
  {
    id: 1,
    name: 'Produção Mecânico',
    description: 'Aplicativo de gestão de serviços para mecânicos: registre, acompanhe e analise serviços realizados, visualize relatórios e gráficos mensais, compare metas e resultados financeiros com praticidade.',
    website: 'https://producaomecanico.carloscasteliano.com.br',
    github: 'https://github.com/Castelianoads/Producao-Mecanico-Web'
  },
  // {
  //   id: 2,
  //   name: 'Produção Mecânico Android/IOS',
  //   description: 'Aplicativo de gestão de serviços para mecânicos: registre com foto, acompanhe e analise serviços realizados, visualize relatórios e gráficos mensais, compare metas e resultados financeiros com praticidade.',
  //   website: 'https://producaomecanico.carloscasteliano.com.br',
  //   github: 'https://github.com/Castelianoads/Producao-Mecanico-App-Flutter'
  // }
]);

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
})

function handleSubmit() {
  console.log('Form enviado:', form.value)
  alert('Mensagem enviada com sucesso!')
  form.value = { name: '', phone: '', email: '', message: '' }
}

</script>

<style></style>
