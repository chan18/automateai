const progarm = require('commander');
const pkg = require('../package.json');
const play = require('../commands/play');

progarm
    .version(pkg.version);

progarm
    .command('play <word>')
    .description('play a word game')
    .action(play.word());

progarm
    .parse(process.argv);


