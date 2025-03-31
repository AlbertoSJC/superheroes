import { type SuperheroInformation } from '@models/typesFile';
import { Superhero } from './Superhero';

export class SuperheroesList {
  superheroes?: Superhero[];

  constructor(data?: SuperheroInformation[]) {
    this.superheroes = data ? data.map((item) => new Superhero(item)) : [];
  }

  getSuperheroById(id: string): Superhero | void {
    return this.superheroes?.find((superhero) => superhero.id === id);
  }

  getSuperheroIndex(superhero: Superhero) {
    return this.superheroes?.findIndex((listHero) => listHero.id === superhero.id);
  }

  addSuperhero(superhero: Superhero) {
    this.superheroes?.push(superhero);
  }

  updateSuperhero(superhero: Superhero) {
    const index = this.getSuperheroIndex(superhero);
    if (index && this.superheroes) {
      this.superheroes[index] = superhero;
    }
  }

  removeSuperhero(superhero: Superhero) {
    const index = this.getSuperheroIndex(superhero);
    if (index) this.superheroes?.splice(index, 1);
  }
}
