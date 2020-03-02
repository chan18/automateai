const chalk = require('chalk');
const log = console.log;
const ApiUtility = require('../lib/api-util.js');

const helper = {
  print(data) {
    data.forEach(function(data) {
      log(chalk.bold.green(data.text) + '\n');
    });
  },
  getRelationsipType(data, relationsipType) {
    for (i = 0; i < data.length; i++) {
      if (data[i].relationshipType.toUpperCase() == relationsipType.toUpperCase()) {
        return data[i].words;
      }
    }
    log(chalk.bold.red(`${relationsipType} not found`));
    return [];
  },
};

module.exports = helper;
