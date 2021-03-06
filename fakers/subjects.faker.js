const faker = require('faker');
const config = require('../config');

const nbSubjects = config.nb_subjects;
const nbUsers = config.nb_users;

module.exports = () => {
  const data = [];

  for(let i = 0; i < nbSubjects; ++i) {
    data.push({
      id: i + 1,
      label: faker.random.word(),
      author_id: faker.random.number({
        min: 1,
        max: nbUsers,
      }),
    });
  }

  return data;
}
