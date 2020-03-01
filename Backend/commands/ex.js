const ApiUtility = require('../lib/api-util');
const utility = require('../lib/util.js');
const chalk = require('chalk');
const log = console.log;

const example = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const apiUtility = new ApiUtility();

      apiUtility.getExamples(word)
          .then(function(response) {
            utility.print(response.data.examples);
          });
    }
  },
};

module.exports = example;
