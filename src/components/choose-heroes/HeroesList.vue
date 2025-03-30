<script setup lang="ts">
import Loader from '@components/common/Loader.vue';
import { SuperheroesList } from '@domain/SuperheroesList';
import { useSuperheroesStore } from '@stores/superheroes';
import apiService from 'src/services/apiService';
import { computed, onMounted, ref } from 'vue';

const superheroesStore = useSuperheroesStore();

const allSuperheroes = computed(() => superheroesStore.list?.superheroes);
const loading = ref<boolean>(true);

onMounted(async () => {
  await apiService
    .fetchSuperHeroesList()
    .then((response) => {
      superheroesStore.list = new SuperheroesList(response);
      console.log(superheroesStore.list);
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
});
</script>

<template>
  <div class="flex flex-wrap gap-2.5 w-[530px] h-[700px] overflow-auto scroll-container">
    <template v-if="loading">
      <div class="w-full h-full flex flex-nowrap flex-col items-center justify-center gap-6">
        <Loader />
        <span class="text-lg font-semibold text-center">Loading heroes</span>
      </div>
    </template>
    <template v-else-if="allSuperheroes && allSuperheroes.length > 0">
      <div v-for="hero in allSuperheroes" :key="hero.id" class="flex flex-col items-center bg-black border-2 border-[#fff66f] shadow-md rounded-lg p-4 min-w-[160px] max-w-[160px]">
        <img v-if="hero.picture" :src="hero.picture" :alt="`${hero.name}-image`" class="w-32 h-32 object-cover rounded-full mb-4 bg-[#fff66f] border-2 border-[#fff66f]" />
        <img v-else src="/src/images/default-hero.png" :alt="`${hero.name}-image`" class="w-32 h-32 object-cover rounded-full mb-4 bg-[#fff66f] border-2 border-[#fff66f]" />
        <p class="text-lg font-semibold text-center text-[#fff66f] ellipsis-text" :title="hero.name">{{ hero.name }}</p>
      </div>
    </template>
    <template v-else>
      <span class="text-lg font-semibold text-center">Oopsie, this looks empty, add your first Superhero!</span>
    </template>
  </div>
</template>

<style scoped>
img:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
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
