const ApiUtility = require('../lib/api-util.js');
const helper = require('../lib/helper.js');

const defination = {
  word() {
    if (process.argv[2]) {
      const word = process.argv[2];
      const apiUtility = new ApiUtility();

      apiUtility.getDefinitions(word).then((data) => {
        helper.print(data.data);
      });
    }
  },
};

module.exports = defination;
