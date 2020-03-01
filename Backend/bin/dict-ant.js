const progarm = require('commander');
const pkg = require('../package.json');
const antonym = require('../commands/ant.js');

progarm
    .version(pkg.version);

progarm
    .command('ant <word>')
    .description('Display antonyms of a given word.')
    .action(antonym.word());

progarm
    .parse(process.argv);

if (!process.argv.slice(2).length) {
  progarm.outputHelp();
}
