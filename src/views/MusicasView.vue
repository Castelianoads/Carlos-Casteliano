<template>
  <div class="min-h-screen p-4 flex flex-col items-center space-y-4">
    <h1 class="text-xl font-bold text-center">Baixar música</h1>

    <div class="w-full space-y-2">
      <div v-for="(url, index) in urls" :key="index" class="flex items-center space-x-2">
        <Input v-model="urls[index]" placeholder="Insira o link" class="flex-1" />
        <Button v-if="index === urls.length - 1 && urls.length < 5" variant="outline" size="icon" @click="addLink">
          <Plus class="h-4 w-4" />
        </Button>
        <Button v-else variant="destructive" size="icon" @click="removeLink(index)">
          <Minus class="h-4 w-4" />
        </Button>
      </div>
    </div>

    <Button class="w-full mt-4" @click="downloadMusic">
      Baixar
    </Button>

    <div class=" px-8">
      <AlertDialog v-model:open="showDialog" class="px-8">
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle class="text-center mb-3">{{ dialogMessage }}</AlertDialogTitle>
          <AlertDialogAction>Ok</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Minus } from 'lucide-vue-next';
import MusicRepository from '@/data/MusicRepository';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const urls = ref([''])
const musicResopitory = new MusicRepository();
const showDialog = ref(false);
const dialogMessage = ref('');

function addLink() {
  if (urls.value.length < 5) {
    urls.value.push('');
  }
}

function removeLink(index: number) {
  if (urls.value.length > 1) {
    urls.value.splice(index, 1);
  }
}

async function downloadMusic() {
  const linksValidos: String[] = urls.value.filter(url => url.trim() !== '');
  var resposta: boolean = false;

  console.log("Entrou");
  if (linksValidos.length == 1) {
    console.log("Entrou 1");
    resposta = await musicResopitory.DownloadMusicAsync(linksValidos[0]);
  } else {
    console.log("Entrou 2");
    resposta = await musicResopitory.DownloadMusicsAsync(linksValidos);
  }

  dialogMessage.value = resposta ? 'Música baixada com sucesso!' : 'Erro ao baixar música.';
  showDialog.value = true;
}
</script>

<style scoped>

</style>
