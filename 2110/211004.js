// Univalued Binary Tree

// A binary tree is uni-valued if every node in the tree has the same value.
// Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

// Example:
// Input: root = [1,1,1,1,1,null,1]
// Output: true

// 주어진 이진 트리가 단일 값으로 이루어진 이진 트리인지 여부를 반환하는 문제

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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  const set = new Set();

  const helper = (node) => {
    if (!node) return;
    set.add(node.val);
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };

  helper(root);

  return set.size === 1;
};
