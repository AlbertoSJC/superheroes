import { type SuperheroInformation } from '@models/typesFile';
import { Superhero } from './Superhero';

export class SuperheroesList {
  superheroes?: Superhero[];

  constructor(data?: SuperheroInformation[]) {
    this.superheroes = data ? data.map((item) => new Superhero(item)) : [];
  }

  addSuperhero(superhero: Superhero) {
    this.superheroes?.push(superhero);
  }
}
