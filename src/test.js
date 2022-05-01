
const { Queue } = require('../src/queue.js');
/*
const ob = new BinarySearchTree();
ob.add(2);
ob.add(7);
ob.add(1);
ob.add(8);
ob.add(4);
ob.add(32);
ob.add(12);
ob.add(14);
console.log(ob.find(32).data);
console.log(ob.has(12));
console.log(ob.min());
console.log(ob.max());
console.log(ob.remove(4));
console.log(ob);*/

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue()); //5
console.log(queue.dequeue()); //6