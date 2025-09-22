<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Popover from '@/volt/Popover.vue';
import { ref } from 'vue';

const emit = defineEmits(['switchTheme'])

const popover = ref();
const items = ref([
  { icon: "pi pi-moon" }
]);
const props = defineProps({
  darkTheme: Boolean,
})

const toggle = (event: Event) => {
  popover.value.toggle(event);
};

function switchTheme() {
  if (props.darkTheme) emit('switchTheme', false)
  else emit('switchTheme', true)
}

</script>

<template>
  <button @click="switchTheme"
    class="border rounded-full p-2 cursor-pointer fixed bottom-6 right-6 bg-zinc-100/3 dark:bg-zinc-900/3 backdrop-blur-md hover:rotate-360">
    <Icon v-if="!darkTheme" icon="mdi:moon-and-stars" class="w-8 h-8" />
    <Icon v-if="darkTheme" icon="mdi:white-balance-sunny" class="w-8 h-8" />
  </button>

  <!-- two settings 1. lang 2. theme -->
  <!-- <button class="fixed right-2 bottom-2 border m-1 p-2 rounded-full z-10" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
    <Icon icon="mdi:settings" class="w-8 h-8" />
  </button> -->
  <!-- <Popover ref="popover" class="fixed">
    <div>
      <ul>
        <li><Icon icon="mdi:moon-waning-crescent" class="w-8 h-8" /> </li>
        <li><Icon icon="mdi:white-balance-sunny" class="w-8 h-8" /> </li>
      </ul>
    </div>
  </Popover> -->
</template>