const progarm = require('commander');
const pkg = require('../package.json');
const defination = require('../commands/def.js');

progarm
    .version(pkg.version);

progarm
    .command('def')
    .description('Display definitions of a given word')
    .action(defination.word(process.argv[3]));

progarm
    .parse(process.argv);

if (!process.argv.slice(2).length) {
  progarm.outputHelp();
}
