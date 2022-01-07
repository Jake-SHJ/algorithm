// Minimum Distance Between BST Nodes

// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

// Example:
// Input: root = [4,2,6,1,3]
// Output: 1

// 주어진 이진 탐색 트리에서 서로 다른 노드의 차가 가장 적은 경우를 반환하는 문제

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
var minDiffInBST = function (root) {
  const nodes = [];
  let minDiff = Infinity;

  const helper = (node) => {
    for (const num of nodes) {
      const diff = Math.abs(num - node.val);
      if (minDiff > diff) minDiff = diff;
    }
    nodes.push(node.val);
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };

  helper(root);

  return minDiff;
};
