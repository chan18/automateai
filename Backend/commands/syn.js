const ApiUtility = require('../lib/api-util');
const chalk = require('chalk');
const log = console.log;
const utility = require('../lib/util');

const synonym = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const apiUtility = new ApiUtility();

      apiUtility.getRelatedWords(word)
          .then(function(response) {
            utility.getRelationsipType(response.data, 'synonym')
                .forEach(function(word) {
                  log(chalk.bold.green(word));
                });
          })
          .catch(function(error) {
            log(chalk.bold(error.response.data.error +' '+
            chalk.red.underline.bold('status:- ' + error.response.status)));
          });
    }
  },
};

module.exports = synonym;
