const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(data) {
  return Array.isArray(data) ? 
    data.filter(item => typeof(item) === 'string' && item.replace(/\s/g,'')[0].toUpperCase())
        .map(item => item.replace(/\s/g,'').slice(0, 1).toUpperCase())
        .sort().join('') 
    : false;
}

module.exports = {
  createDreamTeam
};
