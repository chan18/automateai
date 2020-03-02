const inquirer = require('inquirer');
const ApiUtility = require('../lib/api-util.js');
const helper = require('../lib/helper');
const log = console.log;
const chalk = require('chalk');
const WordDictionary = require('./word-dictionary');

/**
 * play a word game
 */
class play {
/**
  * init play
  */
  constructor() {
    this.apiUtility = new ApiUtility();
    this.wordDictionary = new WordDictionary();
  }

  /**
  *  ask user the first question.
  * @param {word} word that user need to guess
  */
  guessTheWord(word) {
    let synonyms = [];

    this.apiUtility.getRelatedWords(word)
        .then((data) => {
          if (data) {
            synonyms = helper.getRelationsipType(data, 'synonym');
          }
        }).then(() => {
          synonyms.push(word);

          const question =
          {
            type: 'string',
            name: 'name',
            message: 'guess the word?',
          };

          inquirer
              .prompt(question)
              .then((answer) => {
                if (synonyms.includes(answer.name)) {
                  log('\n' + chalk.bold.bgGreen('success'));
                } else {
                  this.userChoices(word);
                }
              })
              .catch((error) => {
                console.log(error);
              });
        });
  }

  /**
  * user selects a choice
  * @param {word} word that user need to guess
  */
  userChoices(word) {
    const question =
    {
      type: 'list',
      name: 'selected',
      choices: ['Try Again', 'Hint', 'Quit'],
    };

    inquirer
        .prompt(question)
        .then((answer) => {
          switch (answer.selected) {
            case 'Try Again':
              this.guessTheWord(word);
              break;
            case 'Hint':
              this.userHint(word);
              break;
            case 'Quit':
              this.wordDictionary.lookup(word);
              return;
              break;

            default:
              break;
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }

  /**
  * user selects a choice
  * @param {word} word that user need to guess
  */
  userHint(word) {
    this.apiUtility.getRelatedWords(word)
        .then((data) => {
          log(chalk.bold.blue('synonym:- '));
          helper.getRelationsipType(data, 'synonym')
              .forEach(function(word) {
                log(chalk.bold.green(word));
              });
        }).then(() => {
          this.guessTheWord(word);
        });
  }
}

module.exports = play;