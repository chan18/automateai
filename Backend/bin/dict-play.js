const progarm = require('commander');
const pkg = require('../package.json');

progarm
    .version(pkg.version);

progarm
    .command('play <word>')
    .description('play a word game')
    .action(console.log('play word'));

progarm
    .parse(process.argv);


