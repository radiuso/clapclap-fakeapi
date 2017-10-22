const faker = require('faker');
const config = require('../config');

const nbComments = config.nb_comments;
const nbContributions = config.nb_contributions;
const nbUsers = config.nb_users;

module.exports = () => {
  const data = [];

  for(let i = 0; i < nbComments; ++i) {
    data.push({
      id: i + 1,
      content: faker.random.words(),
      contribution_id: faker.random.number({
        min: 1,
        max: nbContributions,
      }),
      author_id: faker.random.number({
        min: 1,
        max: nbUsers,
      }),
    });
  }

  return data;
}
