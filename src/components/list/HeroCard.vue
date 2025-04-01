<script setup lang="ts">
import { Superhero } from '@domain/Superhero';
import { useSuperheroesStore } from '@stores/superheroes';
import apiService from 'src/services/apiService';
import { computed } from 'vue';

interface PropsModel {
  hero: Superhero;
  canbeSelected?: boolean;
}

const { hero } = defineProps<PropsModel>();

const superheroesStore = useSuperheroesStore();

const selectHeroToUpdate = async () => {
  const heroToUpdate = superheroesStore.list.getSuperheroById(hero.id as string);
  if (heroToUpdate) {
    if (heroToUpdate.id !== superheroesStore.heroToUpload.id) {
      await superheroesStore.cancelEdit();
    }
    superheroesStore.heroToBeforeEdit = new Superhero(heroToUpdate);
    superheroesStore.heroToUpload = heroToUpdate;
  }
};

const removeHero = async () => {
  await apiService
    .deleteSuperhero(hero)
    .then(() => {
      if (superheroesStore.heroToUpload && hero.id === superheroesStore.heroToUpload.id) {
        superheroesStore.cancelEdit();
      }
      superheroesStore.list.removeSuperhero(hero);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <div
    :key="hero.id"
    class="relative flex flex-col items-center bg-black border-2 border-[#fff66f] shadow-md rounded-lg p-4 min-w-[160px] max-w-[160px]"
    :class="{ '!bg-[#5058df]': hero.id === superheroesStore.heroToUpload.id }"
  >
    <template v-if="!canbeSelected">
      <span class="absolute font-bold text-red-600 top-0 right-2 cursor-pointer delete-hero" @click="removeHero">x</span>
      <img class="absolute font-bold h-[15px] top-2 left-2 cursor-pointer" src="/src/images/edit-icon.png" @click="selectHeroToUpdate" />
    </template>
    <img v-if="hero.picture" :src="hero.picture" :alt="`${hero.name}-image`" class="w-32 h-32 object-cover rounded-full mb-4 bg-[#fff66f] border-2 border-[#fff66f]" />
    <img v-else src="/src/images/default-hero.png" :alt="`${hero.name}-image`" class="w-32 h-32 object-cover rounded-full mb-4 bg-[#fff66f] border-2 border-[#fff66f]" />
    <p class="text-lg font-semibold text-center text-[#fff66f] ellipsis-text" :title="hero.name">{{ hero.name }}</p>
  </div>
</template>

<style scoped>
img:hover,
.delete-hero:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

.delete-hero:hover {
  color: white;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 1);
}

::-webkit-scrollbar-thumb {
  background-color: #fff66f;
  border-radius: 6px;
  border: 2px solid rgba(0, 0, 0, 1);
}

.scroll-container {
  scrollbar-color: #fff66f rgba(0, 0, 0, 1);
  scrollbar-width: thin;
}
</style>
