#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');


program
    .version(pkg.version)
    .command('defn', 'Display definitions of a given word.');

program
    .parse(process.argv);

// // parse console arguments
// console.log({argv});

// console.log((new Credentialmanager()).getHost());
// request(host+'/word/'+argv._[0]+'/definitions?api_key='+key,
//     function(error, response, body) {
//       // Print the HTML for the Google homepage.
//       console.log('body:', body);
//     });

