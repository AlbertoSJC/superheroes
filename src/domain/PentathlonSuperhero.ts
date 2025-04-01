import { type SuperheroInformation } from '@models/typesFile';
import { Superhero } from './Superhero';

export interface PentathlonSuperheroInformation extends SuperheroInformation {
  totalPoints?: number;
  lastTrialPoints?: number;
  numberOfTrialsWon?: number;
  currentTrialOutput?: number;
}

export class PentathlonSuperhero extends Superhero implements PentathlonSuperheroInformation {
  totalPoints: number;
  lastTrialPoints: number;
  numberOfTrialsWon: number;
  currentTrialOutput: number;

  constructor(data: PentathlonSuperheroInformation) {
    super(data);
    this.totalPoints = data.totalPoints ?? 0;
    this.lastTrialPoints = data.lastTrialPoints ?? 0;
    this.numberOfTrialsWon = data.numberOfTrialsWon ?? 0;
    this.currentTrialOutput = data.currentTrialOutput ?? 0;
  }

  resetHeroPoints() {
    this.currentTrialOutput = 0;
    this.totalPoints = 0;
    this.lastTrialPoints = 0;
    this.numberOfTrialsWon = 0;
  }

  calculateSkyscraperClimbing() {
    this.currentTrialOutput = this.attributes.strength * 4 - this.attributes.weight * 2;
  }
}
