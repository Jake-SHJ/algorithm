// Kth Smallest Element in a BST

// Given the root of a binary search tree, and an integer k,
// return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// 주어진 이진 탐색 트리에서 k번째로 큰 node 값을 반환하는 문제

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const nodes = [];
  // node 값 추출
  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);
    if (node.right) helper(node.right);

    nodes.push(node.val);
  };

  helper(root);
  // 오름차순 정렬 후 반환
  return nodes.sort((a, b) => a - b)[k - 1];
};
