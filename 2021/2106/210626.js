// Implement Queue using Stacks

// Implement a first in first out (FIFO) queue using only two stacks.
// The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
// Implement the MyQueue class:
// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:
// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
// Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

// Example:
// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]
// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

// 스택과 비슷하지만 FILO가 아닌 FIFO 형식의 queue로써 구현하는 문제

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.queue = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const front = this.queue[0];
  this.queue.splice(0, 1);
  return front;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.queue[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 2개의 stack으로만 구현하라고 되어있는데, 한개로도 충분히 구현 가능
// 2개로 구현해야 한다면

function MyQueue() {
  this.front = [];
  this.back = [];
}

MyQueue.prototype.push = function (x) {
  this.back.push(x);
};

MyQueue.prototype.pop = function () {
  if (!this.front.length) {
    while (this.back.length) {
      this.front.push(this.back.pop());
    }
  }
  return this.front.pop();
};

MyQueue.prototype.peek = function () {
  if (!this.front.length) {
    while (this.back.length) {
      this.front.push(this.back.pop());
    }
  }
  return this.front[this.front.length - 1];
};

MyQueue.prototype.empty = function () {
  return !this.front.length && !this.back.length;
};

// 이렇게 하면 된다고 함 (discuss 참조)
