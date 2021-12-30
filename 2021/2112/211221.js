// Binary Tree Tilt

// Given the root of a binary tree, return the sum of every tree node's tilt.
// The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values.
// If a node does not have a left child, then the sum of the left subtree node values is treated as 0.
// The rule is similar if the node does not have a right child.

// Example:
// Input: root = [1,2,3]
// Output: 1
// Explanation:
// Tilt of node 2 : |0-0| = 0 (no children)
// Tilt of node 3 : |0-0| = 0 (no children)
// Tilt of node 1 : |2-3| = 1 (left subtree is just left child, so sum is 2; right subtree is just right child, so sum is 3)
// Sum of every tilt : 0 + 0 + 1 = 1

// 주어진 이진 트리에서 규칙에 따라 각 노드를 변경한 합을 반환하는 문제

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
 * @return {number}
 */
var findTilt = function (root) {
  let total = 0;
  findSum(root);
  return total;

  function findSum(node) {
    if (!node) return 0;
    // 각 자손에 대한 재귀
    const left = findSum(node.left);
    const right = findSum(node.right);
    const sum = left + right;
    // 변경(|(left 자손과 노드의 합 - right 자손과 노드의 합)|)한 노드의 합
    total += Math.abs(left - right);
    // 각 left, right의 자손과 노드의 합
    return sum + node.val;
  }
};
// discuss 참조, 여전히 이진트리는 어렵다
