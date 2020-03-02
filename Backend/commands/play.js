const ApiUtility = require('../lib/api-util');
const chalk = require('chalk');
const log = console.log;
const helper = require('../lib/helper');
const PlayGame = require('../lib/play');

const play = {
  word() {
    const apiUtility = new ApiUtility();
    const playGame = new PlayGame();
    let word = '';

    apiUtility.getRandomWord()
        .then((randomWord) => {
          word = randomWord.data.word;
        }).then(() => {
          apiUtility.getDefinitions(word)
              .then((def) => {
                if (def) {
                  log(chalk.bold.blue('Definition:- '));
                  helper.print(def.data);
                }
              }).then(() => {
                playGame.guessTheWord(word);
              });
        });
  },
};

module.exports = play;
