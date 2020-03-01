const helper = require('../lib/helper.js');
const chalk = require('chalk');
const log = console.log;

const fullDict = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      helper.fullDict(word);
    }
  },
};

module.exports = fullDict;
