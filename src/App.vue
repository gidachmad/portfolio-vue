<script setup lang="ts">
import { ref } from 'vue';
import TheAbout from './components/TheAbout.vue';
import TheSettings from './components/TheSettings.vue';
import TheExperiences from './components/TheExperiences.vue';
import { Icon } from '@iconify/vue';

const darkTheme = ref<boolean>(document.documentElement.classList.toggle(
  "dark",  
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
))

function switchTheme(event: boolean) {
  darkTheme.value = event
  const htmlClass = document.documentElement.classList
  if (darkTheme.value){ 
    htmlClass.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    htmlClass.remove("dark")
    localStorage.setItem("theme", "light")
  }
}

</script>

<template>
  <header class="mt-10">
    <TheSettings :darkTheme="darkTheme" @switch-theme="switchTheme" />
  </header>
  <main class="w-4/5 m-auto flex flex-col gap-4 items-center">
    <TheAbout />
    <TheExperiences />
  </main>
</template>

<style scoped></style>