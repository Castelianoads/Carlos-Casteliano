<template>
  <form @submit.prevent="submitForm" class="container-sm shadow-lg rounded-lg mt-4 px-4 space-y-4">

    <FormField name="name">
      <FormItem>
        <FormLabel>Nome</FormLabel>
        <FormControl>
          <Input type="text" v-model="form.name" />
        </FormControl>
      </FormItem>
    </FormField>

    <FormField name="phone">
      <FormItem>
        <FormLabel>Telefone</FormLabel>
        <FormControl>
          <Input type="text" v-model="form.phone" />
        </FormControl>
      </FormItem>
    </FormField>

    <FormField name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" v-model="form.email" />
        </FormControl>
      </FormItem>
    </FormField>

    <FormField name="message">
      <FormItem>
        <FormLabel>Mensagem</FormLabel>
        <FormControl>
          <Textarea type="text" v-model="form.message"></Textarea>
        </FormControl>
      </FormItem>
    </FormField>
    <Button type="submit">
      Enviar
    </Button>
  </form>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref } from 'vue';;

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
});

function submitForm() {
  console.log('Formulário enviado com sucesso!');
  console.log(form.value);
};

</script>
