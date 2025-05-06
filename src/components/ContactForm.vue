<template>
  <section class="">
    <h2 class="text-2xl font-semibold">Entre em contato</h2>
    <form @submit.prevent="submitForm" class="p-4 rounded-2xl shadow-lg space-y-1">
      <FormField name="name">
        <FormItem>
          <FormLabel>Nome</FormLabel>
          <FormControl>
            <Input type="text" v-model="form.name" />
          </FormControl>
        </FormItem>
      </FormField>

      <div class="flex flex-col md:flex-row gap-4">
        <div class="w-full">
          <FormField name="phone">
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input type="text" v-model="form.phone" />
              </FormControl>
            </FormItem>
          </FormField>
        </div>

        <div class="w-full">
          <FormField name="email" class="w-full">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" v-model="form.email" />
              </FormControl>
            </FormItem>
          </FormField>
        </div>
      </div>

      <FormField name="message">
        <FormItem>
          <FormLabel>Mensagem</FormLabel>
          <FormControl>
            <Textarea type="text" v-model="form.message"></Textarea>
          </FormControl>
        </FormItem>
      </FormField>
      <div class="mt-2">
        <Button type="submit">
          Enviar
        </Button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref } from 'vue';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';


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
