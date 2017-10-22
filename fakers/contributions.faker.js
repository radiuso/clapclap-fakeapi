const faker = require('faker');
const config = require('../config');

const nbContributions = config.nb_contributions;
const nbSubjects = config.nb_subjects;
const nbUsers = config.nb_users;

module.exports = () => {
  const data = [];

  for(let i = 0; i < nbContributions; ++i) {
    data.push({
      id: i + 1,
      content: faker.random.word(),
      subject_id: faker.random.number({
        min: 1,
        max: nbSubjects,
      }),
      author_id: faker.random.number({
        min: 1,
        max: nbUsers,
      }),
    });
  }

  return data;
}
