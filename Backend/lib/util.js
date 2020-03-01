const chalk = require('chalk');
const log = console.log;

const utility = {
  getRelationsipType(data, relationsipType) {
    for (i = 0; i < data.length; i++) {
      if (data[i].relationshipType.toUpperCase() == relationsipType.toUpperCase()) {
        return data[i].words;
      }
    }
  },
  wordOfTheDay() {
    if (process.argv.length === 2) {
      console.log('word of the day');
      return true;
    }
  },
  print(data) {
    data.forEach(function(data) {
      log(chalk.bold.green(data.text));
    });
  },
};

module.exports = utility;
