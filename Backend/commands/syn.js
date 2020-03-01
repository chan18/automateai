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
          .then((data) => {
            utility.getRelationsipType(data, 'synonym')
                .forEach(function(word) {
                  log(chalk.bold.green(word));
                });
          });
    }
  },
};

module.exports = synonym;
