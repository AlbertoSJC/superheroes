import { PentathlonList } from '@domain/PentathlonList';
import { Superhero } from '@domain/Superhero';
import { SuperheroesList } from '@domain/SuperheroesList';
import { defineStore } from 'pinia';
import apiService from 'src/services/apiService';
import { ref } from 'vue';

export const useSuperheroesStore = defineStore('superheroes-store', () => {
  const list = ref<SuperheroesList>(new SuperheroesList());
  const heroToUpload = ref<Superhero>(new Superhero({}));
  const heroToBeforeEdit = ref<Superhero | null>(null);
  const pentathlonList = ref<PentathlonList>(new PentathlonList());

  const cancelEdit = () => {
    if (heroToBeforeEdit.value) {
      list.value.updateSuperhero(heroToBeforeEdit.value);
    }
    heroToUpload.value = new Superhero({});
    heroToBeforeEdit.value = null;
  };

  const selectPentathlonSuperhero = (hero: Superhero) => {
    list.value.toggleSuperheroSelect(hero);

    if (hero.selected) {
      pentathlonList.value.addSuperhero(hero);
    } else {
      pentathlonList.value.removeSuperhero(hero);
    }
  };

  const selectHeroToUpdate = async (hero: Superhero) => {
    const heroToUpdate = list.value.getSuperheroById(hero.id as string);
    if (heroToUpdate) {
      if (heroToUpdate.id !== heroToUpload.value.id) {
        await cancelEdit();
      }
      heroToBeforeEdit.value = new Superhero(heroToUpdate);
      heroToUpload.value = heroToUpdate;
    }
  };

  const removeHero = async (hero: Superhero) => {
    await apiService
      .deleteSuperhero(hero)
      .then(() => {
        if (heroToUpload && hero.id === heroToUpload.value.id) {
          cancelEdit();
        }
        list.value.removeSuperhero(hero);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    list,
    heroToUpload,
    heroToBeforeEdit,
    pentathlonList,
    cancelEdit,
    selectPentathlonSuperhero,
    selectHeroToUpdate,
    removeHero,
  };
});
