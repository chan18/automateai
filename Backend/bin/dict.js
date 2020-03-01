#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const utility = require('../lib/util.js');

if (utility.wordOfTheDay()) {
  return;
};

program
    .version(pkg.version)
    .command('defn <word>', 'Display definitions of a given word.')
    .command('syn <word>', 'Display synonyms of a given word.')
    .command('ant <word>', 'Display antonyms of a given word.')
    .command('ex <word>', 'Display examples of usage of a given word in a sentence')
    .command('fd <word>', 'Display Word Definitions, Word Synonyms, Word Antonyms & Word Examples for a random word.', {isDefault: true})
    .command('play', 'play a word game.');

program
    .parse(process.argv);

