<template>
  <form @submit.prevent="submitForm" class="bg-white shadow-lg rounded-lg p-4 space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium">Nome</label>
      <input v-model="form.name" type="text" id="name" class="w-full border border-gray-300 rounded py-2 px-4 mt-1"
        required />
    </div>
    <div>
      <label for="phone" class="block text-sm font-medium">Telefone</label>
      <input v-model="form.phone" type="tel" id="phone" class="w-full border border-gray-300 rounded py-2 px-4 mt-1"
        required />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium">Email</label>
      <input v-model="form.email" type="email" id="email" class="w-full border border-gray-300 rounded py-2 px-4 mt-1"
        required />
    </div>
    <div>
      <label for="message" class="block text-sm font-medium">Mensagem</label>
      <textarea v-model="form.message" id="message" class="w-full border border-gray-300 rounded py-2 px-4 mt-1"
        rows="4" required></textarea>
    </div>
    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Enviar
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
});

function submitForm() {
  alert('Formulário enviado com sucesso!');
  console.log(form.value);
};

</script>
