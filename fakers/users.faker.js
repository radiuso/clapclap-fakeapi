const faker = require('faker');
const config = require('../config');
const nbUsers = config.nb_users;

module.exports = () => {
  const data = [{
    id: 1,
    firstname: 'Admin',
    lastName: 'Admin',
    role: 1
  }];

  for(let i = 1; i < nbUsers; ++i) {
    data.push({
      id: i + 1,
      firstname: faker.name.firstName(),
      lastname: faker.commerce.department(),
      role: 2,
    });
  }

  return data;
}
