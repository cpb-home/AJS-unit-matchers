import { sortHeroes } from './heroesSort';

export const heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

console.log(sortHeroes(heroes));