const axios = require('axios');
const CredentialManager = require('./credential-manager');

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
  * @return {promise} incomplete.
  */
  getDefinitions(word) {
    const url = `${this.host}/word/${word}/`+
                `definitions?api_key=${this.apikey}`;

    return axios.get(url);
  }

  /**
  * get Synonyms of a word
  * @param {string} word
  * @return {promise} incomplete.
  */
  getRelatedWords(word) {
    const url = `${this.host}/word/${word}/`+
                `relatedWords?api_key=${this.apikey}`;

    return axios.get(url);
  }

  /**
  * get Synonyms of a word
  * @param {string} word
  * @return {promise} incomplete.
  */
  getAntonyms(word) {
    const url = `${this.host}/word/${word}/`+
    `relatedWords?api_key=${this.apikey}`;

    return axios.get(url);
  }

  /**
  * get Synonyms of a word
  * @param {string} word
  * @return {promise} incomplete.
  */
  getExamples(word) {
    const url = `${this.host}/word/${word}/`+
    `examples?api_key=${this.apikey}`;

    return axios.get(url);
  }

  // getWordFullDict(word) {

  //   return response;
  // }

  // getWordOfTheDay(word) {

  //   return response;
  // }
}

module.exports = ApiUtility;
