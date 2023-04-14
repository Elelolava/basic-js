const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return chain.length;
  },
  addLink(value) {
    if (!value) value = '(  )';
    value = `(${value})`;
    return chain.push(value);
  },
  removeLink(position) {
    if (!position || position > chain.length || typeof(position) != 'number') throw new Error("You can't remove incorrect link!");
    return chain.splice(position-1, 1);
  },
  reverseChain() {
    return chain.reverse();
  },
  finishChain() {
    const createChain = () => {
      return chain.replace(/\)\(/gi, '\)~~\(');
    }
    createChain();
    chain = [];
  }
};

module.exports = {
  chainMaker
};
