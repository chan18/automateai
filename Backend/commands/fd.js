const ApiUtility = require('../lib/api-util');
const chalk = require('chalk');
const log = console.log;

const fullDict = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const apiUtility = new ApiUtility();

      // Definitions
      // Synonyms
      // Antonyms
      // Word Examples

      apiUtility.getDefinitions(word)
          .then(function(response) {
            response.data.forEach(function(data) {
              log(chalk.bold.green(data.text));
            });
          })
          .catch(function(error) {
            log(chalk.bold(error.response.data.error +' '+
            chalk.red.underline.bold('status:- ' + error.response.status)));
          });
    }
  },
};

module.exports = fullDict;
