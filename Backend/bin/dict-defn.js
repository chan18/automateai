const progarm = require('commander');
const pkg = require('../package.json');
const defination = require('../commands/defn.js');

progarm
    .version(pkg.version);

progarm
    .command('defn <word>')
    .description('Display definitions of a given word')
    .action(defination.word(process.argv));

progarm
    .parse(process.argv);

if (!process.argv.slice(2).length) {
  progarm.outputHelp();
}
