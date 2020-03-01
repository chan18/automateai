const chalk = require('chalk');
const log = console.log;
const wordOfTheDayCommand = require('../commands/wordoftheday');

const utility = {
  getRelationsipType(data, relationsipType) {
    for (i = 0; i < data.length; i++) {
      if (data[i].relationshipType.toUpperCase() == relationsipType.toUpperCase()) {
        return data[i].words;
      } else {
        log(chalk.bold.red('antonym not found'));
        return [];
      }
    }
  },
  wordOfTheDay() {
    if (process.argv.length === 2) {
      wordOfTheDayCommand.word();
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
