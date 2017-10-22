module.exports = () => {
  const data = {};

  data.domains = require('./fakers/domains.faker')();
  data.users = require('./fakers/users.faker')();
  data.subjects = require('./fakers/subjects.faker')();
  data.contributions = require('./fakers/contributions.faker')();
  data.comments = require('./fakers/comments.faker')();
  data.claps = require('./fakers/claps.faker')();
  return data;
}
