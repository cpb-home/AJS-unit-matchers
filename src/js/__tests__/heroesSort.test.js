import { sortHeroes } from '../heroesSort';
import { heroes } from '../app';

test('testing heroes sorting', () => {
  const mustbe = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  const result = sortHeroes(heroes);
  expect(result).toEqual(mustbe);
});