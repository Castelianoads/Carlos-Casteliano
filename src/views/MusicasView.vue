<template>
  <div class="min-h-screen p-4 flex flex-col items-center space-y-4">
    <h1 class="text-xl font-bold text-center">Baixar música</h1>

    <div class="w-full space-y-2">
      <div
        v-for="(url, index) in urls"
        :key="index"
        class="flex items-center space-x-2"
      >
        <Input
          v-model="urls[index]"
          placeholder="Insira o link"
          class="flex-1"
        />
        <Button
          v-if="index === urls.length - 1 && urls.length < 5"
          variant="outline"
          size="icon"
          @click="addInput"
        >
          <Plus class="h-4 w-4" />
        </Button>
        <Button
          v-else
          variant="destructive"
          size="icon"
          @click="removeInput(index)"
        >
          <Minus class="h-4 w-4" />
        </Button>
      </div>
    </div>

    <Button class="w-full mt-4" @click="baixarMusicas">
      Baixar
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Minus } from 'lucide-vue-next'

const urls = ref([''])

function addInput() {
  if (urls.value.length < 5) {
    urls.value.push('')
  }
}

function removeInput(index) {
  if (urls.value.length > 1) {
    urls.value.splice(index, 1)
  }
}

async function baixarMusicas() {
  const linksValidos = urls.value.filter(url => url.trim() !== '')
  

  console.log('Baixando os seguintes links:', linksValidos)
  try {
    if (linksValidos.length === 1) {
      const response = await axios.post(
        'http://carloscasteliano:8000/baixar', 
        { url: linksValidos[0].split('&list=') },
        { responseType: 'blob' }
      )
      console.log(response)
      const blob = new Blob([response.data], { type: 'audio/mpeg' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'musica.mp3'
      a.click()
      URL.revokeObjectURL(url)
    } else {
      const response = await axios.post(
        'http://carloscasteliano:8000/baixarVarios',
        { urls: linksValidos },
        { responseType: 'blob' }
      )
      console.log(response)
      const blob = new Blob([response.data], { type: 'application/zip' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'musicas.zip'
      a.click()
      URL.revokeObjectURL(url)
    }
  } catch (err) {
    console.log(err);
    alert('Erro ao baixar músicas.')
  }
}
</script>

<style scoped>

</style>
