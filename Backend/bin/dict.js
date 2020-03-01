#!/usr/bin/env node
const inquirer = require('inquirer');
const argv = require('minimist')(process.argv.slice(2));
const request = require('request');

var host = "https://fourtytwowords.herokuapp.com";
var key = "b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164";




// parse console arguments
console.log(argv._[0]);

request(host+'/word/'+argv._[0]+'/definitions?api_key='+key, function (error, response, body) {
  console.log('body:', body); // Print the HTML for the Google homepage.
});