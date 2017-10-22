const faker = require('faker');
const config = require('../config');

module.exports = () => {
  return [{
    id: 1,
    label: 'admin',
  }, {
    id: 2,
    label: 'contributor',
  }];
}
