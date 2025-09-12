<script setup lang="ts">
import { ref } from 'vue';
import { about, personalData } from '@/mocks/profile';
import { Icon } from '@iconify/vue'

const imgSrc = ref('/src/assets/profile_formal.png')
const aboutDesc = about.description_en

</script>

<template>
  <section class="flex flex-col gap-4 m-auto w-4/5 items-center mt-4">
    <div class=" w-32 h-32 overflow-hidden rounded-full">
      <img :src="imgSrc" alt="profile">
    </div>
    <div class="text-center">
      <h3>Gid Achmad Ahlul Fadli</h3>
      <small>Tasikmalaya | Bandung, Indonesia</small>
    </div>
    <ul class="flex">
      <li><a :href="`https://mail.google.com/mail/?view=cm&fs=1&to=` + personalData.email" target="_blank"> <Icon icon="mdi:gmail" class="w-10 h-10" /> </a></li>
      <li><a :href="personalData.linkedin" target="_blank"> <Icon icon="mdi:linkedin" class="w-10 h-10" /> </a></li>
      <li><a :href="`https://wa.me/` + personalData.whatsapp" target="_blank"> <Icon icon="mdi:whatsapp" class="w-10 h-10" /> </a></li>
    </ul>
    <p class=" text-justify">{{ aboutDesc }}</p>
  </section>
</template>