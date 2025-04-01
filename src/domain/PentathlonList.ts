import type { SuperheroInformation } from '@models/typesFile';
import { PentathlonSuperhero, type PentathlonSuperheroInformation } from './PentathlonSuperhero';

export class PentathlonList {
  superheroes: PentathlonSuperhero[];

  constructor(data?: PentathlonSuperheroInformation[]) {
    this.superheroes = data ? data.map((item) => new PentathlonSuperhero(item)) : [];
  }

  getSuperheroIndex(superhero: PentathlonSuperheroInformation): number {
    return this.superheroes?.findIndex((listHero) => listHero.id === superhero.id) ?? -1;
  }

  addSuperhero(superhero: SuperheroInformation) {
    if (!this.superheroes) this.superheroes = [new PentathlonSuperhero(superhero)];
    this.superheroes.push({ ...new PentathlonSuperhero(superhero), selected: false });
  }

  removeSuperhero(superhero: PentathlonSuperheroInformation) {
    const index = this.getSuperheroIndex(superhero);
    if (!isNaN(index)) this.superheroes?.splice(index, 1);
  }
}
