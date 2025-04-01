<script setup lang="ts">
import ButtonElement from '@components/common/ButtonElement.vue';
import { useSuperheroesStore } from '@stores/superheroes';
import HeroesList from '../list/HeroesList.vue';
import PentathlonCompetition from './list/PentathlonCompetition.vue';

const superheroesStore = useSuperheroesStore();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <div class="flex flex-col items-center justify-center">
      <h4 class="text-xl font-bold superhero-fonting text-shadow">Choose the superheroes that will be participating!</h4>
      <p class="font-semibold superhero-fonting small-text-shadow">You can choose a minimum of 2 superheroes to compete!</p>
    </div>
    <div class="flex justify-center items-center flex-row gap-6">
      <HeroesList :can-be-selected="true" />
      <PentathlonCompetition />
    </div>
    <ButtonElement
      text="BEGIN!"
      @click="superheroesStore.pentathlonRunning"
      :disabled="!superheroesStore.pentathlonList || (superheroesStore.pentathlonList && superheroesStore.pentathlonList.superheroes.length < 2)"
    />
  </div>
</template>
