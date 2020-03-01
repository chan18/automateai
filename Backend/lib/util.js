
const utility = {
  getRelationsipType(data, relationsipType) {
    for (i = 0; i < data.length; i++) {
      if (data[i].relationshipType.toUpperCase() == relationsipType.toUpperCase()) {
        return data[i].words;
      }
    }
  },
  wordOfTheDay() {
    if (process.argv.length === 2) {
      console.log('word of the day');
      return true;
    }
  },
};

module.exports = utility;
