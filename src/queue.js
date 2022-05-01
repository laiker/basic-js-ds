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
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {

    let queue = this.queue;
    if (!queue) {
      this.queue = new ListNode(value);
    } else {
      while (queue.next) {
        queue = queue.next;
      }

      queue.next = new ListNode(value, null);
    }

    //console.log(this.queue);
  }

  dequeue() {

    if (this.queue) {
      let queue = this.queue;
      let topQueue = queue.value;
      this.queue = queue.next;
      return topQueue;
    }
  }
}

module.exports = {
  Queue
};
