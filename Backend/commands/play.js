const ApiUtility = require('../lib/api-util');
const chalk = require('chalk');
const log = console.log;
const helper = require('../lib/helper');
const inquirer = require('inquirer');

const play = {
  word() {
    const apiUtility = new ApiUtility();
    let word = '';

    apiUtility.getRandomWord()
        .then((randomWord) => {
          word = randomWord.data.word;
        }).then(() => {
          apiUtility.getDefinitions(word)
              .then((def) => {
                if (def) {
                  log(chalk.bold.blue('Definition:- ') + word);
                  helper.print(def.data);
                }
              }).then(() => {
                helper.guessTheWord(word);
              });
        });
  },
};

module.exports = play;
