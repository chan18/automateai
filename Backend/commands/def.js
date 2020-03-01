const request = require('request');
const CredentialManager = require('../lib/credential-manager');

const defination = {
  word(word) {
    const credentialManager = new CredentialManager();
    const host = credentialManager.getHost();
    const apikey = credentialManager.getKey();
    console.log({word});
    request(`${host}/words/${word}/definitions?api_key=${apikey}`, function(error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  },
};

module.exports = defination;
