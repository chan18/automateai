const ApiUtility = require('../lib/api-util');
const chalk = require('chalk');
const log = console.log;
const utility = require('../lib/util');

const antonym = {
  word() {
    const apiUtility = new ApiUtility();
    let word = '';
    // definition
    // syn
    // ant
    // ex

    apiUtility.getRandomWOrd()
        .then((randomWord) => {
          word = randomWord.data.word;
          log(chalk.bold.green(word));
        }).then(() =>{
          apiUtility.getDefinitions(word)
              .then((data) => {
                utility.print(data.data);
              });
        }).then(() => {
          // ['synonym', 'antonym'].forEach((phrase) =>{
          //   apiUtility.getRelatedWords(word)
          //       .then((data) => {
          //         utility.getRelationsipType(data, phrase )
          //             .forEach(function(word) {
          //               log(chalk.bold.green(word));
          //             });
          //       });
          // });
        })
        .then(() => {
          // apiUtility.getExamples(word)
          //     .then(function(response) {
          //       utility.print(response.data.examples);
          //     });
        });
  },
};

module.exports = antonym;
