const chalk = require('chalk');
const log = console.log;
const ApiUtility = require('../lib/api-util.js');
const inquirer = require('inquirer');

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
  guessTheWord(word) {
    let synonyms = [];
    const apiUtility = new ApiUtility();

    apiUtility.getRelatedWords(word)
        .then((data) => {
          if (data) {
            synonyms = helper.getRelationsipType(data, 'synonym');
          }
        }).then(() => {
          synonyms.push(word);

          question =
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
                  helper.userChoices(word);
                }
              })
              .catch((error) => {
                console.log(error);
              });
        });
  },
  userChoices(word) {
    const apiUtility = new ApiUtility();

    question =
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
              helper.guessTheWord(word);
              break;
            case 'Hint':
              apiUtility.getRelatedWords(word)
                  .then((data) => {
                    log(chalk.bold.blue('synonym:- '))
                    helper.getRelationsipType(data, 'synonym')
                        .forEach(function(word) {
                          log(chalk.bold.green(word));
                        });
                  }).then(() => {
                    helper.guessTheWord(word);
                  });
              break;
            case 'Quit':
              helper.fullDict(word);
              return;
              break;

            default:
              break;
          }
        })
        .catch((error) => {
          console.log(error);
        });

  },
  fullDict(word) {
    const apiUtility = new ApiUtility();

    apiUtility.getDefinitions(word)
        .then((def) => {
          if (def) {
            log(chalk.bold.blue('Definition:- ') + ' ' +
            chalk.bold.bgGreen(word));
            helper.print(def.data);
          }
        }).then(() => {
          ['synonym', 'antonym'].forEach((phrase) =>{
            apiUtility.getRelatedWords(word)
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
          apiUtility.getExamples(word)
              .then(function(response) {
                if (response) {
                  log(chalk.bold.blue('Word Example:- ') + ' ' +
                  chalk.bold.bgGreen(word));
                  helper.print(response.data.examples);
                }
              });
        });
  },
};

module.exports = helper;
