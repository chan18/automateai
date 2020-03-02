const ApiUtility = require('../lib/api-util.js');
const helper = require('../lib/helper.js');
const chalk = require('chalk');
const log = console.log;
const WordDictionary = require('../lib/word-dictionary');

const wordoftheday = {
  word() {
    let word = '';
    const apiUtility = new ApiUtility();
    const wordDictionary = new WordDictionary();

    apiUtility.getRandomWord()
        .then((randomWord) => {
          word = randomWord.data.word;
          log(chalk.bold.blue('Random Word:- ') + ' '+
          chalk.bold.bgGreen(word) + '\n');
        }).then(() => {
          wordDictionary.lookup(word);
        });
  },
};

module.exports = wordoftheday;
