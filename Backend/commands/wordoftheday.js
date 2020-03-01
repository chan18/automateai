const ApiUtility = require('../lib/api-util');
const utility = require('../lib/util');
const chalk = require('chalk');
const log = console.log;

const antonym = {
  word() {
    const apiUtility = new ApiUtility();
    let word = '';

    console.log(utility);

    apiUtility.getRandomWord()
        .then((randomWord) => {
          word = randomWord.data.word;
          log(chalk.bold.green(word));
        }).then(() =>{
          apiUtility.getDefinitions(word)
              .then((data) => {
                // console.log(data.data, utility);
                // //utility.print(data.data);
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
