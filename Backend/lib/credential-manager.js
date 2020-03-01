const Configstore = require('configstore');

/**
 * CredentialManager
 */
class CredentialManager {
  /**
  * init configstore
  */
  constructor() {
    this.conf = new Configstore('dict');
  }

  /**
  * get api key, log if not found.
  * @return {string} from local user json file.
  */
  getKey() {
    let key = this.conf.get('apikey');
    const envKeyName = `DICT_APIKEY`;
    if (envKeyName in process.env) {
      key = process.env[envKeyName];
    }
    if (key) {
      return key;
    } else {
      throw new Error(`Missing ${key} key -- have you 'configure ${key}'?`);
    }
  }

  /**
  * get/root host url, log if not found.
  * @return {string} from local user json file.
  */
  getHost() {
    let host = this.conf.get('host');
    const envHostUrl = `DICT_HOST_URL`;
    if (envHostUrl in process.env) {
      host = process.env[envHostUrl];
    }
    if (host) {
      return host;
    } else {
      throw new Error(`Missing ${key} key -- have you 'configure ${key}'?`);
    }
  }
}

module.exports = CredentialManager;
