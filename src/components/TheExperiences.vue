<script setup lang="ts">
import Accordion from '@/volt/Accordion.vue';
import AccordionPanel from '@/volt/AccordionPanel.vue';
import AccordionHeader from '@/volt/AccordionHeader.vue';
import AccordionContent from '@/volt/AccordionContent.vue';
import { Icon } from '@iconify/vue';
import { experience } from '@/mocks/profile';
import { ref } from 'vue';

const experiences = ref(experience)
experiences.value.sort((a, b) => b.year_start - a.year_start)

</script>

<template>
  <h3 class=" border-b-2 pb-2">Experiences</h3>
  <div class="w-full bg-amber-500">
    <Accordion>
      <AccordionPanel v-for="(exp, index) in experiences" :value="index" :key="index">
        <AccordionHeader class="text-left">
          <span class="flex gap-2">
            <span>
              <Icon v-if="exp.type === 1" icon="mdi:briefcase" class="min-w-6 min-h-6" />
              <Icon v-if="exp.type === 2" icon="mdi:account-student" class="min-w-6 min-h-6" />
            </span>
            <span class="font-bold">
              {{ exp.company }}
            </span>
          </span>
        </AccordionHeader>

        <AccordionContent class="">
          <small>Role: {{ exp.role }}</small>
          <p>
            {{ exp.description_en }}
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>