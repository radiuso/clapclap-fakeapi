const faker = require('faker');
const config = require('../config');

const nbDomains = config.nb_domains;
const nbUsers = config.nb_users;

module.exports = () => {
  const data = [];

  for(let i = 0; i < nbDomains; ++i) {
    data.push({
      id: i + 1,
      label: faker.commerce.department(),
      author_id: faker.random.number({
        min: 1,
        max: nbUsers,
      }),
    });
  }

  return data;
}
