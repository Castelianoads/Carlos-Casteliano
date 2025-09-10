<script setup lang="ts">
import { onMounted, ref } from 'vue'
//import { columns } from './components/administrator/columns'
import { columns } from '@/components/administrator/columns'
//import DataTable from './components/DataTable.vue'
import DataTable from '@/components/administrator/data-table.vue'
import type User from '@/domain/models/User'

const data = ref<User[]>([])
console.log('administrador');
async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return [
    // {
    //   id: '3ee41b28-9409-41e4-acc3-01b4a65dd0e2',
    //   name: 'Carlos Eduardo Casteliano',
    //   birthDate: new Date(1996, 3, 18),
    //   isActive: true,
    //   isEmailConfirmed: true,
    //   isPhoneConfirmed: true
    // },
    // {
    //   id: '324be664-cca0-4136-a151-33474e452740',
    //   name: 'Jailson Quirino de Paula',
    //   birthDate: new Date(1969, 7, 20),
    //   isActive: true,
    //   isEmailConfirmed: true,
    //   isPhoneConfirmed: true
    // },
  ]
}

onMounted(async () => {
  data.value = await getData()
})
</script>
<template>
  <div class="container py-10 mx-auto">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>