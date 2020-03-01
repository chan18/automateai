#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');


program
    .version(pkg.version)
    .command('defn <word>', 'Display definitions of a given word.')
    .command('syn <word>', 'Display synonyms of a given word.')
    .command('ant <word>', 'Display antonyms of a given word.')
    .command('ex <word>', 'Display Word Definitions, Word Synonyms,'+
             'Word Antonyms & Word Examples for a given word.');

program
    .parse(process.argv);

