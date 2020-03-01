const ApiUtility = require('../lib/api-util');
const chalk = require('chalk');
const log = console.log;

const defination = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const apiUtility = new ApiUtility();

      apiUtility.getDefinitions(word).then((data) => {
        data.forEach(function(data) {
          log(chalk.bold.green(data.text));
        });
      });
    }
  },
};

module.exports = defination;
