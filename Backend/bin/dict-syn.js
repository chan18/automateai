const progarm = require('commander');
const pkg = require('../package.json');
const synonym = require('../commands/syn');

progarm
    .version(pkg.version);

progarm
    .command('syn [word]')
    .description('Display antonyms of a given word.')
    .action(synonym.word(process.argv));

progarm
    .parse(process.argv);

if (!process.argv.slice(2).length) {
  progarm.outputHelp();
}
