const faker = require('faker');
const config = require('../config');

const nbSubjects = config.nb_subjects;
const colors = config.colors;

module.exports = () => {
  const data = [];
  
  for(let i = 0; i < nbSubjects; ++i) {
    data.push({
      id: i + 1,
      label: faker.random.word(),
      color: faker.random.arrayElement(colors),
    });
  }

  return data;
}
