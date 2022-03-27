const { Stack } = require('../src/stack.js');
const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack);
