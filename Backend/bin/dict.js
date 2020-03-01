#!/usr/bin/env node
const inquirer = require('inquirer');
const argv = require('minimist')(process.argv.slice(2));
const request = require('request');
const Credentialmanager = require('./../lib/credential-manager');

// parse console arguments
console.log({argv});

console.log((new Credentialmanager()).getHost());
// request(host+'/word/'+argv._[0]+'/definitions?api_key='+key,
//     function(error, response, body) {
//       // Print the HTML for the Google homepage.
//       console.log('body:', body);
//     });

