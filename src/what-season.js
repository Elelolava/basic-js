const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(data) {
  let season = {
    'spring': [3, 4, 5],
    'summer': [6, 7, 8],
    'autumn': [9, 10, 11],
    'winter': [12, 1, 2]
  }
  let month = data.toLocaleDateString('en-US', {month: "numeric"});
  let result;
  Object.entries(season).forEach(([key, value]) => {
    if (value.some(item => item == month)) {
      result = key;
    }
  });

  if (data) {
    return result;
  } else if (arguments === undefined || arguments === null || !arguments) {
    return 'Unable to determine the time of year!';
  } else if (!Date.parse(data) || !(data instanceof Date) || typeof(data) === 'function' || typeof(data) === 'object') {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
