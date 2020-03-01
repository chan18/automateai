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
    const key = this.conf.get('apikey');
    if (key) {
      return key;
    } else {
      console.log('apikey not found');
    }
  }

  /**
  * get/root host url, log if not found.
  * @return {string} from local user json file.
  */
  getHost() {
    const host = this.conf.get('host');
    if (host) {
      return host;
    } else {
      console.log('host not found');
    }
  }
}

module.exports = CredentialManager;

