// Binary Search Tree Iterator

// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):
// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor.
// The pointer should be initialized to a non-existent number smaller than any element in the BST.
// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
// int next() Moves the pointer to the right, then returns the number at the pointer.
// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.
// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

// Example:
// Input
// ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// Output
// [null, 3, 7, true, 9, true, 15, true, 20, false]
// Explanation
// BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// bSTIterator.next();    // return 3
// bSTIterator.next();    // return 7
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 9
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 15
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 20
// bSTIterator.hasNext(); // return False

// 주어진 이진탐색트리에서 호출되는 함수를 구현하는 문제

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = [];
  // 트리의 왼쪽부터 오른쪽으로 스택 생성
  const helper = (root, stack) => {
    if (root === null) return;
    helper(root.left, stack);
    stack.push(root.val);
    helper(root.right, stack);
  };
  helper(root, this.stack);
  this.idx = 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  // 스택을 순차 반환
  if (this.idx < this.stack.length) return this.stack[this.idx++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  // 스택과 idx 비교 반환
  return this.idx < this.stack.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// discuss 참조, BST를 그대로 사용하려했으나 가공이 필요했던 문제
// BST를 stack으로 구조 변환하는 아이디어가 중요..
