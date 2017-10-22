const faker = require('faker');
const config = require('../config');

const nbClaps = config.nb_claps;
const nbContributions = config.nb_contributions;
const nbUsers = config.nb_users;

module.exports = () => {
  const data = [];

  for(let i = 0; i < nbClaps; ++i) {
    data.push({
      id: i + 1,
      date: faker.date.recent(),
      contribution_id: faker.random.number({
        min: 1,
        max: nbContributions,
      }),
      user_id: faker.random.number({
        min: 1,
        max: nbUsers,
      }),
    });
  }

  return data;
}
