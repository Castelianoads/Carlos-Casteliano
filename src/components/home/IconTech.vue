<template>
  <div class="text-center">
    <FontAwesomeIcon :icon="icon" class="text-3xl" />
    <p class="text-xs mt-1 capitalize">{{ label }}</p>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineProps<{ icon: any, label: string }>()
</script>
