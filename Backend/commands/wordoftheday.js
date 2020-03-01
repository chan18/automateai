const ApiUtility = require('../lib/api-util.js');
const helper = require('../lib/helper.js');
const chalk = require('chalk');
const log = console.log;

const wordoftheday = {
  word() {
    let word = '';
    const apiUtility = new ApiUtility();

    apiUtility.getRandomWord()
        .then((randomWord) => {
          word = randomWord.data.word;
          log(chalk.bold.blue('Random Word:- ') + ' '+
          chalk.bold.bgGreen(word) + '\n');
        }).then(() => {
          helper.fullDict(word);
        });
  },
};

module.exports = wordoftheday;
