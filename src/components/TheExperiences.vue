<script setup lang="ts">
import { experience } from '@/mocks/profile';
import Timeline from '@/volt/Timeline.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const events = ref(experience)

</script>

<template>
  <h2>Experiences</h2>
  <div class="w-full">
    <timeline :value="events">
      <div >

      </div>

      <template #marker="slotProps">
        <div class="border rounded-full p-4">
          <Icon v-if="slotProps.item.type == 1" icon="mdi:work-outline" class="w-6 h-6" />
          <Icon v-if="slotProps.item.type == 2" icon="mdi:account-student" class="w-6 h-6" />
        </div>
      </template>
      <template #content="slotProps">
        <div class="card rounded-sm border border-gray-100 p-6">
          <h5>
            {{ slotProps.item.company }}
          </h5>
          <p>
            {{ slotProps.item.role }}
          </p>
        </div>
      </template>
    </timeline>
  </div>
</template>