<script setup lang="ts">
import { Superhero } from '@domain/Superhero';
import { useSuperheroesStore } from '@stores/superheroes';
import apiService from 'src/services/apiService';
import { ref } from 'vue';
import HeroesList from '../list/HeroesList.vue';
import HeroCreation from './HeroCreation.vue';

const superheroesStore = useSuperheroesStore();

const errorMessage = ref<string | null>(null);

const createHero = async () => {
  await apiService
    .postSuperhero(superheroesStore.heroToUpload)
    .then((response) => {
      superheroesStore.list.addSuperhero(new Superhero(response));
      superheroesStore.heroToUpload = new Superhero({});
    })
    .catch((error) => {
      errorMessage.value = (error as any).response.data.message;
    });
};
</script>

<template>
  <div class="flex justify-center items-center flex-row gap-6">
    <HeroCreation />
    <HeroesList />
  </div>
</template>
