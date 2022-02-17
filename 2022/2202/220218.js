// Find Mode in Binary Search Tree

// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
// If the tree has more than one mode, return them in any order.
// Assume a BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example:
// Input: root = [1,null,2,2]
// Output: [2]

// 주어진 이진 탐색 트리에서 높은 빈도수를 가진 숫자들의 배열을 반환하는 문제

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
 * @return {number[]}
 */
var findMode = function (root) {
  // 숫자와 횟수를 Map에 저장
  const map = new Map();
  const helper = (node) => {
    if (!node) return;
    map.set(node.val, (map.get(node.val) || 0) + 1);
    helper(node.left);
    helper(node.right);
  };
  helper(root);
  // 가장 높은 빈도수 저장
  const freq = Math.max(...map.values());
  // 높은 빈도수에 해당 하는 숫자를 배열에 push
  const result = [];
  for (const [key, value] of map) {
    if (value === freq) result.push(key);
  }
  return result;
};
