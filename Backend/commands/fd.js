const helper = require('../lib/helper.js');
const WordDictionary = require('../lib/word-dictionary');

const fullDict = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const wordDictionary = new WordDictionary();
      wordDictionary.lookup(word);
    }
  },
};

module.exports = fullDict;
