#!/usr/bin/env node

const progarm = require('commander');
const pkg = require('../package.json');

progarm
    .version(pkg.version)
    .command('def', 'Display definitions of a given word');

// // parse console arguments
// console.log({argv});

// console.log((new Credentialmanager()).getHost());
// request(host+'/word/'+argv._[0]+'/definitions?api_key='+key,
//     function(error, response, body) {
//       // Print the HTML for the Google homepage.
//       console.log('body:', body);
//     });

