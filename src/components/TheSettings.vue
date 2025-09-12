<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Popover from '@/volt/Popover.vue';
import { ref } from 'vue';

const popover = ref();
const items = ref([
  {  icon:"pi pi-moon" }
]);

const toggle = (event: Event) => {
    popover.value.toggle(event);
};

</script>

<template>
  <button>
    <Icon icon="mdi:moon-waning-crescent" class="w-8 h-8" /> 
    <Icon icon="mdi:white-balance-sunny" class="w-8 h-8" />
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