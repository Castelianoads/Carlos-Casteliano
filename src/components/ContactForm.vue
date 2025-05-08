<template>
  <section class=" mb-10">
    <h2 class="text-2xl font-semibold">Entre em contato</h2>
    <hr>
    <form @submit.prevent="submitForm" class="py-2 space-y-1">
      <FormField name="name">
        <FormItem>
          <FormLabel>Nome</FormLabel>
          <FormControl>
            <Input type="text" v-model="contact.name" />
          </FormControl>
        </FormItem>
      </FormField>

      <div class="flex flex-col md:flex-row gap-4">
        <div class="w-full">
          <FormField name="email" class="w-full">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" v-model="contact.email" />
              </FormControl>
            </FormItem>
          </FormField>
        </div>

        <div class="w-full">
          <FormField name="phone">
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input type="text" v-model="contact.phone" />
              </FormControl>
            </FormItem>
          </FormField>
        </div>
      </div>

      <FormField name="message">
        <FormItem>
          <FormLabel>Mensagem</FormLabel>
          <FormControl>
            <Textarea type="text" v-model="contact.message"></Textarea>
          </FormControl>
        </FormItem>
      </FormField>

      <div class="mt-2">
        <Button type="submit" :disabled="disabledButtonSend" class="w-full md:w-auto mt-3">
          Enviar
        </Button>
      </div>

    </form>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ContactRepository from '@/lib/data/ContactRepository';
import type Contact from '@/lib/domain/models/Contact';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

const router = useRouter();
const contactRepository = new ContactRepository();
const disabledButtonSend = ref<boolean>(false);
const contact = ref<Contact>({
  name: '',
  email: '',
  message: '',
  phone: ''
})

async function submitForm() {
  disabledButtonSend.value = true;

  const resp: boolean = await contactRepository.SendContactEmailAsync(contact.value);
  if (resp) {
    contact.value.name = '';
    contact.value.email = '';
    contact.value.message = '';
    contact.value.phone = '';
    alert('Mensagem de contato enviado com sucesso.');
    disabledButtonSend.value = false;
    router.push('/');
  } else {
    alert('Erro ao enviar mensagem de contato.')
    disabledButtonSend.value = false;
  }
};

</script>
