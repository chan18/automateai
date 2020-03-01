const ApiUtility = require('../lib/api-util');
const chalk = require('chalk');
const log = console.log;
const utility = require('../lib/util.js');

const defination = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const apiUtility = new ApiUtility();

      apiUtility.getDefinitions(word).then((data) => {
        utility.print(data);
      });
    }
  },
};

module.exports = defination;
