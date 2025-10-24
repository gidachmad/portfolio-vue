<script setup lang="ts">
import { Form, FormField } from '@primevue/forms';
import InputText from '@/volt/InputText.vue';
import Textarea from '@/volt/Textarea.vue';
import Message from '@/volt/Message.vue';
import Button from '@/volt/Button.vue';
import { yupResolver } from '@primevue/forms/resolvers/yup';
import { ref } from 'vue';

const subject = ref()
const message = ref()

function onFormSubmit() {
  alert(message.value)
}
</script>

<template>
  <h3 class=" border-b-2 pb-2">E-mail me!</h3>
  <Form @submit="onFormSubmit" class="flex flex-col gap-4 w-full">
    <FormField v-slot="$field" name="subject" initialValue="" class="flex flex-col gap-1">
      <InputText type="text" placeholder="Subject" />
      <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <FormField v-slot="$field" name="message" initialValue="" class="flex flex-col gap-1">
      <Textarea v-model="message" rows="5" cols="30" placeholder="Your Message" class="resize-none" />
      <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
    </FormField>
    <Button v-slot="slotProps" asChild>
      <button type="submit" v-bind="slotProps.a11yAttrs"
        class="bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 border-zinc-100 p-3 hover:bg-zinc-700 hover:dark:bg-zinc-300 cursor-pointer transition rounded duration-300">
        Send Message
      </button>
    </Button>
  </Form>
</template>
