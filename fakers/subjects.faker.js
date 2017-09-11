const faker = require('faker');
const nbSubjects = 5;

module.exports = () => {
  const data = [];
  
  for(const i = 0; i < nbSubjects; ++i) {
    data.push({
      label: faker.name.title,
      color: faker.commerce.color,
    });
  }

  return data;
}
