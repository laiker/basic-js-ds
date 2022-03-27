const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queue = [];
  }

  getUnderlyingList() {
    return this.queue.reverse().reduce(function(acc, val){
      if (acc) {
        let newNode = new ListNode(val);
        newNode.next = acc;
        return newNode;
      }
      return new ListNode(val);
    }, null);
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.queue.length) {
      return this.queue.splice(0, 1)[0];
    }
  }
}

module.exports = {
  Queue
};
