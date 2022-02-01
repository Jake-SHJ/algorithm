// Implement Stack using Queues

// Implement a last-in-first-out (LIFO) stack using only two queues.
// The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
// Implement the MyStack class:
// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:
// You must use only standard operations of a queue,
// which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively.
// You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

// Example:
// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]
// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False

// queue를 이용하여 stack을 구현하는 문제

var MyStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack.unshift(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.stack.splice(0, 1)[0];
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.stack[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// queue 하나로 구현

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.inQueue = [];
  this.outQueue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.inQueue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }

  const lastItem = this.inQueue.shift();

  [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];

  return lastItem;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }
  // peak
  const lastItem = this.inQueue[0];

  this.outQueue.push(this.inQueue.shift());
  [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];

  return lastItem;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.inQueue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// discuss 참조, queue 두 개로 구현
