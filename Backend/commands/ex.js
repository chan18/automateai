const ApiUtility = require('../lib/api-util');
const chalk = require('chalk');
const log = console.log;

const example = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const apiUtility = new ApiUtility();

      apiUtility.getExamples(word)
          .then(function(response) {
            response.data.examples.forEach(function(data) {
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

module.exports = example;
