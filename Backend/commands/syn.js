const chalk = require('chalk');
const log = console.log;
const ApiUtility = require('../lib/api-util');

const defination = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const apiUtility = new ApiUtility();

      apiUtility.getSynonyms(word)
          .then(function(response) {
            response.data.forEach(function(item) {
              if (item.relationshipType == 'synonym') {
                item.words.forEach(function(word) {
                  log(chalk.bold.green(word));
                });
              }
            });
          })
          .catch(function(error) {
            log(chalk.bold(error.response.data.error +' '+
            chalk.red.underline.bold('status:- ' + error.response.status)));
          });
    }
  },
};

module.exports = defination;
