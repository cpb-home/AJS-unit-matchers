export function sortHeroes(heroes) {
  console.log('sort');
  heroes.sort(function (a, b) {
    if (a.health > b.health) {
      return -1;
    }
  });

  return heroes;
}
