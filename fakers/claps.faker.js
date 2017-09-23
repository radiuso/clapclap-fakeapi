const faker = require('faker');
const config = require('../config');
const nbClaps = config.nb_claps;
const nbPossibilities = config.nb_possibilities;

module.exports = () => {
  const data = [];
  
  for(let i = 0; i < nbClaps; ++i) {
    data.push({
      id: i + 1,
      date: faker.date.recent(),
      possibilityId: faker.random.number({
        min: 0,
        max: nbPossibilities,
      }),
    });
  }

  return data;
}
