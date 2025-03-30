<script setup lang="ts">
import NumberInput from '@components/common/NumberInput.vue';
import TextInput from '@components/common/TextInput.vue';
import { useSuperheroesStore } from '@stores/superheroes';
import HeroImageSelector from './HeroImageSelector.vue';
import ButtonElement from '@components/common/ButtonElement.vue';
import apiService from 'src/services/apiService';
import { ref } from 'vue';
import { Superhero } from '@domain/Superhero';
import HeroesList from './HeroesList.vue';

const superheroesStore = useSuperheroesStore();

const errorMessage = ref<string | null>(null);

const createHero = async () => {
  await apiService
    .postSuperhero(superheroesStore.heroToUpload)
    .then((response) => {
      console.log('API Key Details:', response);
      superheroesStore.list.addSuperhero(new Superhero(response));
      superheroesStore.heroToUpload = new Superhero({});
    })
    .catch((error) => {
      console.error('Error fetching API key details:', error);
      errorMessage.value = (error as any).response.data.message;
    });
};
</script>

<template>
  <div class="flex justify-center items-center flex-row gap-6">
    <div>
      <p class="text-4xl font-bold superhero-fonting text-shadow mb-4 text-center">Create your personal Superhero!</p>
      <HeroImageSelector />
      <div class="mt-6">
        <TextInput v-model="superheroesStore.heroToUpload.name" id="named-superhero" label="Name:" placeholder="Spiderman" classes="min-w-[90%]" />
        <div class="flex flex-col gap-4 mt-4 items-center justify-center">
          <span class="text-xl font-bold superhero-fonting text-shadow mb-4">Attributes</span>
          <div class="flex flex-col gap-4 w-[80%]">
            <NumberInput v-model="superheroesStore.heroToUpload.attributes.agility" label="Agility:" id="agility-input" :spaceBetween="true" :limitToTen="true" placeholder="12" />
            <NumberInput v-model="superheroesStore.heroToUpload.attributes.strength" label="Strength:" id="strength-input" :spaceBetween="true" :limitToTen="true" placeholder="5" />
            <NumberInput v-model="superheroesStore.heroToUpload.attributes.charisma" label="Charisma:" id="charisma-input" :spaceBetween="true" :limitToTen="true" placeholder="9" />
            <NumberInput v-model="superheroesStore.heroToUpload.attributes.endurance" label="Endurance:" id="endurance-input" :spaceBetween="true" :limitToTen="true" placeholder="6" />
            <NumberInput v-model="superheroesStore.heroToUpload.attributes.weight" label="Weight:" id="weight-input" :spaceBetween="true" :limitToTen="true" placeholder="8" />
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-4">
        <span class="text-red-950 font-bold text-center" v-if="errorMessage">{{ errorMessage }}</span>
        <ButtonElement @click="createHero" text="Save you Hero!" :disabled="!superheroesStore.heroToUpload.name" />
      </div>
    </div>
    <HeroesList />
  </div>
</template>
