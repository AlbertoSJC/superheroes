import { Superhero } from '@domain/Superhero';
import { SuperheroesList } from '@domain/SuperheroesList';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSuperheroesStore = defineStore('superheroes-store', () => {
  const superheroesFirstGroup = ref();
  const list = ref<SuperheroesList>(new SuperheroesList());
  const heroToUpload = ref<Superhero>(new Superhero({}));
  const imageFromHeroToUpload = ref<string | null>(null);
  const imageUploadingError = ref<string | null>(null);

  return {
    list,
    superheroesFirstGroup,
    heroToUpload,
    imageFromHeroToUpload,
    imageUploadingError,
  };
});
