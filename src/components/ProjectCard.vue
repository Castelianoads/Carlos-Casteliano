<template>
  <div class="flex justify-center p-3">
    <Card class=" max-w-[450px]">
      <CardHeader>
        <CardTitle>{{ project.name }}</CardTitle>
        <CardDescription>Descrição</CardDescription>
      </CardHeader>
      <!--<CardContent>
          <p>{{ project.description }}</p>
           <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
          </div>
        </div>
      </CardContent> -->
      <CardFooter class="flex justify-between  pb-6">
        <Button @click="irPara(project.website)">Visitar site</Button>
        <Button @click="irPara(project.github)" variant="outline">
          GitHub
        </Button>
      </CardFooter>
    </Card>
    <!--<div class="bg-white shadow-lg rounded-lg p-4 border border-gray-300 max-w-md w-full">
      <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>
      <div class="flex justify-between">
        <Button @click="">
          Visitar site
        </Button>
       
        <Button @click="" variant="secondary">
          GitHub
        </Button>       
      </div>
    </div>-->
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