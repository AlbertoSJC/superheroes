import type { SuperheroInformation } from '@models/typesFile';
import { PentathlonSuperhero, type PentathlonSuperheroInformation } from './PentathlonSuperhero';

export class PentathlonList {
  superheroes: PentathlonSuperhero[];

  constructor(data?: PentathlonSuperheroInformation[]) {
    console.log('I dont understand data', data);
    this.superheroes = data ? data.map((item) => new PentathlonSuperhero(item)) : [];
  }

  getSuperheroIndex(superhero: PentathlonSuperheroInformation): number {
    return this.superheroes?.findIndex((listHero) => listHero.id === superhero.id) ?? -1;
  }

  addSuperhero(superhero: SuperheroInformation) {
    if (!this.superheroes) this.superheroes = [new PentathlonSuperhero(superhero)];
    this.superheroes.push(new PentathlonSuperhero({ ...superhero, selected: false }));
  }

  removeSuperhero(superhero: PentathlonSuperheroInformation) {
    const index = this.getSuperheroIndex(superhero);
    if (!isNaN(index)) this.superheroes?.splice(index, 1);
  }

  reorderCompetitorsOfTrial() {
    this.superheroes.sort((a, b) => b.currentTrialOutput - a.currentTrialOutput);
  }

  assignPoints() {
    this.superheroes.forEach((hero, index) => {
      const pointsToAdd = index === 0 ? 5 : index === 1 ? 3 : index === 2 ? 2 : 1;
      hero.totalPoints += pointsToAdd;
      hero.lastTrialPoints = pointsToAdd;
      if (pointsToAdd === 5) hero.numberOfTrialsWon += 1;
    });
  }

  resetHeroesPoints() {
    this.superheroes.forEach((hero, index) => {
      hero.currentTrialOutput = 0;
      hero.totalPoints = 0;
      hero.lastTrialPoints = 0;
      hero.numberOfTrialsWon = 0;
    });
  }

  skyscraperClimbing() {
    this.superheroes.forEach((hero, index) => {
      hero.resetHeroPoints();
      hero.calculateSkyscraperClimbing();
    });

    this.reorderCompetitorsOfTrial();
    this.assignPoints();
    console.log('Hello', this.superheroes);
  }
}
