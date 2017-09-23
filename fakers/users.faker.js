const faker = require('faker');
const config = require('../config');
const nbUsers = config.nb_users;

module.exports = () => {
  const data = [];
  
  for(let i = 0; i < nbUsers; ++i) {
    data.push({
      id: i + 1,
      firstname: faker.name.firstName(),
      lastname: faker.commerce.lastName(),
    });
  }

  return data;
}
