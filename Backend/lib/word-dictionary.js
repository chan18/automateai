const inquirer = require('inquirer');
const ApiUtility = require('./api-util.js');
const helper = require('./helper');
const log = console.log;
const chalk = require('chalk');

/**
 * full word Dictionary
 */
class WordDictionary {
  /**
  * init play
  */
  constructor() {
    this.apiUtility = new ApiUtility();
  }

  /**
  *  ask user the first question.
  * @param {word} word
  */
  lookup(word) {
    this.apiUtility.getDefinitions(word)
        .then((def) => {
          if (def) {
            log(chalk.bold.blue('Definition:- ') + ' ' +
            chalk.bold.bgGreen(word));
            helper.print(def.data);
          }
        }).then(() => {
          ['synonym', 'antonym'].forEach((phrase) =>{
            this.apiUtility.getRelatedWords(word)
                .then((data) => {
                  if (data) {
                    log(chalk.bold.blue(phrase)+':- '+ chalk.bold.bgGreen(word));
                    helper.getRelationsipType(data, phrase )
                        .forEach(function(word) {
                          log(chalk.bold.green(word));
                        });
                    log('\n');
                  }
                });
          });
        }).then(() => {
          this.apiUtility.getExamples(word)
              .then(function(response) {
                if (response) {
                  log(chalk.bold.blue('Word Example:- ') + ' ' +
                  chalk.bold.bgGreen(word));
                  helper.print(response.data.examples);
                }
              });
        });
  }

}

module.exports = WordDictionary;