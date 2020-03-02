const wordOfTheDayCommand = require('../commands/wordoftheday');

const utility = {
  wordOfTheDay() {
    if (process.argv.length === 2) {
      wordOfTheDayCommand.word();
      return true;
    }
  },
};

module.exports = utility;
