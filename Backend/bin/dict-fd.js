const progarm = require('commander');
const pkg = require('../package.json');
const fullDict = require('../commands/fd.js');

progarm
    .version(pkg.version);

progarm
    .command('fd <word>')
    .description('Display Word Definitions, Word Synonyms, Word Antonyms & Word Examples for a given word.')
    .action(fullDict.word());

progarm
    .parse(process.argv);

if (!process.argv.slice(2).length) {
  progarm.outputHelp();
}
