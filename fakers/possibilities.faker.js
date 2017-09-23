const faker = require('faker');
const config = require('../config');
const nbPossibilities = config.nb_possibilities;
const nbSubjects = config.nb_subjects;

module.exports = () => {
  const data = [];
  
  for(let i = 0; i < nbPossibilities; ++i) {
    data.push({
      id: i + 1,
      label: faker.random.word(),
      description: faker.random.words(),
      subjectId: faker.random.number({
        min: 0,
        max: nbSubjects,
      }),
    });
  }

  return data;
}
