<script setup lang="ts">
import { ref } from 'vue';
import TheAbout from './components/TheAbout.vue';
import TheSettings from './components/TheSettings.vue';
import { Icon } from '@iconify/vue';

const darkTheme = ref<boolean>(document.documentElement.classList.toggle(
  "dark",  
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
))

function switchTheme() {
  darkTheme.value = !darkTheme.value
  const htmlClass = document.documentElement.classList
  if (darkTheme.value) htmlClass.add("dark")
  else htmlClass.remove("dark")
}

</script>

<template>
  <header>
    <TheAbout />
  </header>
  <main class=" w-4/5 m-auto">
    <h1>test somethinfg</h1>
    <!-- <TheSettings /> -->
    <button @click="switchTheme" class="border rounded-full p-2 cursor-pointer fixed bottom-6 right-6 bg-zinc-100/3 dark:bg-zinc-900/3 backdrop-blur-md hover:rotate-360">
      <Icon v-if="!darkTheme" icon="mdi:moon-and-stars" class="w-8 h-8" /> 
      <Icon v-if="darkTheme" icon="mdi:white-balance-sunny" class="w-8 h-8" />
    </button>
  </main>
</template>

<style scoped></style>