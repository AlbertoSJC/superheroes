<script setup lang="ts">
import HeroCard from '@components/list/HeroCard.vue';
import type { PentathlonSuperhero } from '@domain/PentathlonSuperhero';

interface PropsModel {
  chosenHero: PentathlonSuperhero;
  canBeEdited?: boolean;
  canBeSelected?: boolean;
}

defineProps<PropsModel>();
</script>

<template>
  <div class="flex flex-row justify-around items-center">
    <HeroCard :hero="chosenHero" :can-be-selected="true" />
    <div class="flex flex-wrap justify-around items-center">
      <div v-for="[key, value] in Object.entries(chosenHero.attributes)" :key="key" class="superhero-fonting text-shadow">
        <strong>{{ key }}:</strong> {{ value }}
      </div>
    </div>
  </div>
</template>
