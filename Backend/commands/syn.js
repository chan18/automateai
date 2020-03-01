const ApiUtility = require('../lib/api-util');
const chalk = require('chalk');
const log = console.log;
const helper = require('../lib/helper');

const synonym = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const apiUtility = new ApiUtility();

      apiUtility.getRelatedWords(word)
          .then((data) => {
            helper.getRelationsipType(data, 'synonym')
                .forEach(function(word) {
                  log(chalk.bold.green(word));
                });
          });
    }
  },
};

module.exports = synonym;
