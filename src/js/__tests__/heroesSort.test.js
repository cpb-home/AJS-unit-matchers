import { sortHeroes } from '../heroesSort';
import { heroes } from '../app';

const mustbe = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];

test('testing heroes sorting', () => {
  const result = sortHeroes(heroes);
  expect(result).toEqual(mustbe);
});