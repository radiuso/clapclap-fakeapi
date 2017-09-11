module.exports = () => {
  const data = {};

  data.subjects = require('./fakers/subjects.faker')();
  return data;
}
