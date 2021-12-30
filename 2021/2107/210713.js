// Range Sum of BST

// Given the root node of a binary search tree and two integers low and high,
// return the sum of values of all nodes with a value in the inclusive range [low, high].

// Example:
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// 주어진 이진탐색트리에서 low보다 크거나 같고, high보다 작거나 같은 node의 합을 반환하는 문제

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let result = 0;

  const recursion = (node) => {
    if (node.val >= low && node.val <= high) {
      result += node.val;
    }

    node.left ? recursion(node.left) : null;
    node.right ? recursion(node.right) : null;
  };

  recursion(root);

  return result;
};
