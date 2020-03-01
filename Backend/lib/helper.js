const chalk = require('chalk');
const log = console.log;
const ApiUtility = require('../lib/api-util.js');

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
      } else {
        log(chalk.bold.red(`${relationsipType} not found`));
        return [];
      }
    }
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
