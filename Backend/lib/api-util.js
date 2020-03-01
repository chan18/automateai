const axios = require('axios');
const CredentialManager = require('./credential-manager');
const chalk = require('chalk');
const log = console.log;

/**
 * Utility
 */
class ApiUtility {
  /**
  * init ApiUtility
  */
  constructor() {
    this.credentialManager = new CredentialManager();
    this.host = this.credentialManager.getHost();
    this.apikey = this.credentialManager.getKey();
  }

  /**
  * get definition of a word
  * @param {string} word
  * @return {promise} incomplete promise.
  */
  getDefinitions(word) {
    const url = `${this.host}/word/${word}/`+
                `definitions?api_key=${this.apikey}`;

    return axios.get(url)
        .catch(function(error) {
          log(chalk.bold(error.response.data.error +' '+
          chalk.red.underline.bold('status:- ' + error.response.status)));
        });
  }

  /**
  * get Synonyms of a word
  * @param {string} word
  * @return {promise} incomplete.
  */
  getRelatedWords(word) {
    const url = `${this.host}/word/${word}/`+
                `relatedWords?api_key=${this.apikey}`;

    return axios.get(url)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          log(chalk.bold(error.response.data.error +' '+
          chalk.red.underline.bold('status:- ' + error.response.status)));
        });
  }

  /**
  * get Synonyms of a word
  * @param {string} word
  * @return {promise} incomplete.
  */
  getExamples(word) {
    const url = `${this.host}/word/${word}/`+
    `examples?api_key=${this.apikey}`;

    return axios.get(url)
        .catch(function(error) {
          log(chalk.bold(error.response.data.error +' '+
          chalk.red.underline.bold('status:- ' + error.response.status)));
        });
  }

  /**
  * get randomword of a word
  * @param {string} word
  * @return {promise} incomplete.
  */
  getRandomWOrd() {
    const url = `${this.host}/words/`+
    `randomWord?api_key=${this.apikey}`;

    return axios.get(url)
        .catch(function(error) {
          log(chalk.bold(error.response.data.error +' '+
          chalk.red.underline.bold('status:- ' + error.response.status)));
        });
  }

  // getWordFullDict(word) {

  //   return response;
  // }

  // getWordOfTheDay(word) {

  //   return response;
  // }
}

module.exports = ApiUtility;
