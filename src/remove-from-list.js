const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 * [3, ]
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  let arList = listToArray(l);
  let arNewList = [];

  for (i = arList.length - 1; i >= 0; i--) {
    if (arList[i] != k) {
      arNewList.push(arList[i]);
    }
  }
  
  return arNewList.reduce(function(acc, val){
    if (acc) {
      let newNode = new ListNode(val);
      newNode.next = acc;
      return newNode;
    }
    return new ListNode(val);
  }, null);
  
}

function listToArray(l, newArray = []) {

  newArray.push(l.value);

  if (l.next == null) {
    return newArray;
  }
  
  return listToArray(l.next, newArray);
}

module.exports = {
  removeKFromList
};
