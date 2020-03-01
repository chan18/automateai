const progarm = require('commander');
const pkg = require('../package.json');
const example = require('../commands/ex.js');

progarm
    .version(pkg.version);

progarm
    .command('ex <word>')
    .description('Display examples of usage of a given word in a sentence.')
    .action(example.word());

progarm
    .parse(process.argv);

if (!process.argv.slice(2).length) {
  progarm.outputHelp();
}
