const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(data) {
  if (!Array.isArray(data)) throw new Error("'arr' parameter must be an instance of the Array!");
  let index;
  if (data.some(item => item == '--discard-next')) {
    if (data.indexOf('--discard-next') == data.length - 1) {
      index = data.indexOf('--discard-next');
      data.splice(index, 1);
    } else {
      index = data.indexOf('--discard-next') + 1;
      data.splice(index, 1);
      data.splice(data.indexOf('--discard-next'), 1);
    }
  }
  if (data.some(item => item == '--discard-prev')) {
    if (data.indexOf('--discard-prev') == 0) {
      index = 0;
      data.splice(index, 1);
    } else {
      index = data.indexOf('--discard-prev') - 1;
      data.splice(index, 1);
      data.splice(data.indexOf('--discard-prev'), 1);
    }
  }
  if (data.some(item => item == '--double-next')) {
    if (data.indexOf('--double-next') == data.length - 1) {
      index = data.indexOf('--double-next');
      data.splice(index, 1);
    } else {
      index = data.indexOf('--double-next') + 1;
      data.splice(index, 0, data[index]);
      data.splice(data.indexOf('--double-next'), 1);
    }
  }
  if (data.some(item => item == '--double-prev')) {
    if (data.indexOf('--double-prev') == 0) {
      index = 0;
      data.splice(index, 1);
    } else {
      index = data.indexOf('--double-prev') - 1;
      data.splice(index, 0, data[index]);
      data.splice(data.indexOf('--double-prev'), 1);
    }
  }
  return data;
}

module.exports = {
  transform
};
