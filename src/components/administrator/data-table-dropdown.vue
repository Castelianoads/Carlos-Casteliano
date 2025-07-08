<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Abrir menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <!-- <DropdownMenuLabel>Actions</DropdownMenuLabel> -->
      <!-- <DropdownMenuItem>
        Copy payment ID
      </DropdownMenuItem> -->
      <!-- <DropdownMenuSeparator /> -->
      <DropdownMenuItem @click="details(user.id)">Detalhes</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

defineProps<{
  user: {
    id: string
  }
}>()

function details(id: string) {
  console.log('Id user na tabela: ' + id)
  navigator.clipboard.writeText(id)
}

</script>
