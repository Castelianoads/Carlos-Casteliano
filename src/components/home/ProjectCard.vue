<template>
  <div class="w-full flex justify-center font-sans">
    <Card
      class="w-full max-w-xl rounded-2xl shadow-lg border transition hover:shadow-xl hover:-translate-y-1 duration-300 ">
      <CardHeader>
        <CardTitle class="text-2xl font-bold ">{{ project.name }}</CardTitle>
        <CardDescription class="text-sm mt-1">
          {{ project.description }}
        </CardDescription>
      </CardHeader>

      <CardFooter class="flex flex-col md:flex-row gap-4 sm:justify-between mt-4">
        <Button @click="irPara(project.website)" class="w-full md:w-auto">
          Visitar site
        </Button>
        <Button @click="irPara(project.github)" variant="outline" class="w-full md:w-auto">
          GitHub
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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

function irPara(link: string) {
  window.open(link, '_blank')
}

</script>

<style scoped>
/* Aqui você pode adicionar estilos adicionais, se necessário */
</style>