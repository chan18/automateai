const axios = require('axios');
const CredentialManager = require('../lib/credential-manager');
const chalk = require('chalk');
const log = console.log;

const defination = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const credentialManager = new CredentialManager();
      const host = credentialManager.getHost();
      const apikey = credentialManager.getKey();

      axios.get(`${host}/word/${word}/definitions?api_key=${apikey}`)
          .then(function(response) {
            response.data.forEach(function(data,index) {
              log(chalk.bold.green(data.text));
            });
          })
          .catch(function(error) {
            log(chalk.bold(error.response.data.error +' '+ chalk.red.underline.bold('status:- ' + error.response.status)));
          });
    }
  },
};

module.exports = defination;
